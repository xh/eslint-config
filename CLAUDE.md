# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`@xh/eslint-config` is a small npm package holding XH's shared ESLint config for Hoist React
application development. It is published to npm and consumed by Hoist apps as a dependency,
either directly or via `@xh/hoist-dev-utils`.

The package is part of the **Hoist** framework ecosystem by Extremely Heavy Industries:

- **hoist-react** (`../hoist-react`) - Client-side TypeScript/React framework. This is the center
  of gravity for the ecosystem - see its `CLAUDE.md` and `docs/` for framework-wide conventions,
  version compatibility tables, and release coordination. hoist-react itself lints with this config.
- **hoist-core** - Server-side Java/Grails framework.
- **hoist-dev-utils** (`../hoist-dev-utils`) - Webpack build tooling. Bundles this package as a
  dependency so apps get lint rules alongside their build config.
- **Toolbox** (`../toolbox`) - Demo/reference app. Its `client-app/eslint.config.js` is the
  canonical example of how apps consume this config.

## Architecture

The package ships a single file with no build step and no tests:

- **`eslint.config.js`** - A CJS ESLint flat config array built with `defineConfig()` from
  `eslint/config`. Consumers pull it into their own flat config via
  `extends: [require('@xh/eslint-config')]` inside their own `defineConfig()`.

Deliberate design points to preserve:

- ESLint, TypeScript, and all plugins are regular `dependencies`, not peers. This package acts as
  the single version manager for the lint toolchain across all Hoist apps - apps depend on this
  one package and get a consistent, tested toolchain.
- Browser globals are deliberately NOT enabled wholesale. Selected globals are whitelisted
  individually to catch missing imports that would silently fall back to a browser global
  (e.g. lodash `find` vs `window.find`).
- `react-hooks/rules-of-hooks` is off - the linter cannot interpret Hoist's element factory
  pattern, where hooks are called in render functions passed as config.

Rule changes here affect every Hoist app on its next upgrade. Treat any rule change as
significant and coordinate with hoist-react conventions before making one.

## Development

**Package manager: pnpm.** `pnpm-lock.yaml` is the source of truth - do not invoke `npm install`
or `yarn install`, and do not create a `package-lock.json` or `yarn.lock`. The required pnpm
version is pinned via the `packageManager` field in `package.json`; if the pinned version is not
on the PATH, run it through corepack (`corepack pnpm <cmd>`).

```bash
corepack pnpm install     # Install dependencies
corepack pnpm outdated    # List deps with newer versions than the lockfile / specs allow
corepack pnpm audit       # Check for known vulnerabilities
```

### Dependency updates

Keep dependency lines aligned with what consumers actually run:

- `eslint` major should match what hoist-react has in its own `package.json`.
- `typescript` must stay within the range `typescript-eslint` supports and match hoist-react's major.

### CI/CD

GitHub Actions, following the same pattern as hoist-react and hoist-dev-utils:

- **CI** (`ci.yml`) - On PRs: frozen-lockfile install, config smoke test, prod dependency audit.
- **Deploy Snapshot** (`deploySnapshot.yml`) - On every push to develop: publishes a
  timestamped SNAPSHOT build to npm under the `next` dist-tag.
- **Deploy Release** (`deployRelease.yml`) - Manual dispatch from master (or a hotfix branch
  with `is-hotfix` checked): validates the version, publishes to npm, tags, and creates a
  GitHub release.

The deploy workflows reuse shared composite actions from `xh/hoist-dev-utils/.github/actions`,
pinned to a commit SHA that Dependabot keeps current. `.github/scripts/smoke-test.sh` lints a
throwaway fixture with known violations and asserts the expected rules fire - run it locally
after dependency updates.

Publishing auth: npm allows only one trusted publisher config per package, and this package's
should name `deployRelease.yml` - releases use OIDC trusted publishing (with provenance), with
the `NPM_TOKEN` repo secret as fallback. Snapshots publish with `NPM_TOKEN` only.

### Versioning and changelog

- `develop` branch for feature work, `master` for releases.
- Version follows `MAJOR.MINOR.PATCH-SNAPSHOT` between releases. The topmost `CHANGELOG.md` entry
  covers unreleased work under the SNAPSHOT version with no date; it gets the final version and
  date at release time.
- Changelog entries use the emoji section headings seen in existing entries
  (`### 💥 Breaking Changes`, `### 📚 Libraries`, etc.), with libraries listed as
  `* package-name: \`oldMajor.oldMinor -> newMajor.newMinor\``.
