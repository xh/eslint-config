#!/usr/bin/env bash
set -euo pipefail

# Smoke test - lints a throwaway fixture and asserts representative rules fire.
# Run from the repo root after `pnpm install`.

REPO="$(pwd)"
FIXTURE="$(mktemp -d)"
trap 'rm -rf "$FIXTURE"' EXIT

cat > "$FIXTURE/eslint.config.js" <<EOF
module.exports = require('$REPO/eslint.config.js');
EOF

# Minimal tsconfig so the config's projectService can type-check the TS fixture.
cat > "$FIXTURE/tsconfig.json" <<'EOF'
{"compilerOptions": {"target": "es2020", "strict": false}}
EOF

# Expect: no-unused-vars
cat > "$FIXTURE/sample.js" <<'EOF'
const unusedVar = 42;
export const ok = true;
EOF

# Expect: @typescript-eslint/return-await (type-aware, 'in-try-catch' mode)
cat > "$FIXTURE/sample.ts" <<'EOF'
export async function badReturnAwait(): Promise<string> {
    return await Promise.resolve('x');
}
EOF

# Expect: react-hooks/exhaustive-deps (missing 'id' dep)
cat > "$FIXTURE/sampleHooks.js" <<'EOF'
import {useEffect, useState} from 'react';

export function useMyThing(id) {
    const [val, setVal] = useState(null);
    useEffect(() => setVal(id), []);
    return val;
}
EOF

set +e
OUT="$(cd "$FIXTURE" && "$REPO/node_modules/.bin/eslint" . 2>&1)"
STATUS=$?
set -e

if [ $STATUS -eq 0 ]; then
    echo "::error::Expected lint violations in fixture, but ESLint reported none."
    echo "$OUT"
    exit 1
fi

for RULE in 'no-unused-vars' '@typescript-eslint/return-await' 'react-hooks/exhaustive-deps'; do
    if ! grep -qF "$RULE" <<< "$OUT"; then
        echo "::error::Expected rule '$RULE' to fire against fixture, but it did not."
        echo "$OUT"
        exit 1
    fi
done

echo "Smoke test passed - config loads and expected rules fire."
