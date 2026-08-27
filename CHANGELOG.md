# Changelog

## v8.0.0 - 2026-08-26

### 💥 Breaking Changes

* Upgrade from ESLint v9 to v10. Requires Node `20.19+`, `22.13+`, or `24+`. App
  `eslint.config.js` files built on the v7 flat config pattern continue to work unchanged.
* ESLint v10's `recommended` config enables three new rules, inherited here:
  `no-useless-assignment`, `no-unassigned-vars`, and `preserve-caught-error`. Expect a small
  number of new findings in app code.
* Removed `babel.config.js` and all `@babel/*` dependencies. These were unused since the v7 flat
  config migration - `@typescript-eslint/parser` handles all file types, so the old
  `parserOptions.babelOptions` reference was inert. Only breaking for an app that imports
  `@xh/eslint-config/babel.config.js` directly (no known usages).

### ⚙️ Technical

* Restored a build pipeline, now on GitHub Actions (previously TeamCity). Snapshots publish to
  npm on every push to develop, releases via manual workflow dispatch - the same pattern as
  hoist-react and hoist-dev-utils, reusing the shared composite actions from hoist-dev-utils.
  A CI workflow smoke tests the config on PRs, and Dependabot keeps actions and deps current.
* Config now built with `defineConfig()` from `eslint/config` instead of the deprecated
  `tseslint.config()`. Computed config verified identical.
* Switched repo tooling from yarn to pnpm. `pnpm-lock.yaml` is now the lockfile, with the pnpm
  version pinned via the `packageManager` field in `package.json`.
* Added `CLAUDE.md` with repo orientation for AI-assisted development.

### 📚 Libraries

* @babel/core: `removed`
* @babel/eslint-parser: `removed`
* @babel/eslint-plugin: `removed`
* @eslint/js: `9.26 -> 10.0`
* @typescript-eslint/parser: `8.32 -> 8.68`
* eslint: `9.26 -> 10.9`
* eslint-plugin-react-hooks: `5.2 -> 7.1`
* globals: `16.1 -> 17.11`
* typescript-eslint: `8.32 -> 8.68`

## v7.0.0 - 2025-05-15

### 💥 Breaking Changes

* Upgrade from eslint `v8.x` to `v9.x` requires changes to Hoist Applications' `eslint` configurations.
  Rename the `.eslintrc` file to `eslint.config.js` and use the configuration found in Toolbox's `eslint.config.js`
  as the new base example `eslint` configuration.
* Apps must upgrade to `@xh/hoist-dev-utils` v11+ and `@xh/hoist` v73+

### 📚 Libraries

* @babel/core: `7.22 -> 7.27`
* @babel/eslint-parser: `7.22 -> 7.27`
* @babel/eslint-plugin: `7.22 -> 7.27`
* added: @eslint/js: `9.26`
* @typescript-eslint/parser: `6.1 -> 8.32`
* eslint: `8.45 -> 9.26`
* eslint-plugin-react: `7.32 -> 7.37`
* eslint-plugin-react-hooks: `4.6 -> 5.2`
* added: globals: `16.1`
* replaced: @typescript-eslint/eslint-plugin `6.1` with typescript-eslint `8.32`

## v6.0.0 - 2023-07-19

* `@typescript-eslint` rules will now only be applied to TypeScript files.
* Enabled `@typescript-eslint/return-await`
* Added `@typescript-eslint/no-unused-vars`
* Added `Intl` to list of expected globals

### 📚 Libraries

* @babel/* `7.20 → 7.22`
* @typescript-eslint/* `5.44 → 6.1`
* eslint `8.28 → 8.45`
* eslint-plugin-react `7.31 → 7.32`
* typescript `4.9 → 5.x`

## v5.0.1 - 2023-01-05

* Added `HTMLImageElement` to list of expected globals

## v5.0.0 - 2022-11-21

* Support for TypeScript, including switch to specify `parser: "@typescript-eslint/parser"` and minor modifications to
  linting rules.

### 📚 Libraries

* @babel/* `7.18 → 7.20`
* @typescript-eslint/* `added @ 5.44`
* eslint `8.20 → 8.28`
* eslint-plugin-react `7.30 → 7.31`
* typescript `added @ 4.9`

## v4.0.1 - 2022-07-18

Workaround for breaking ESLint v8 change to the `indent` rule when used with decorators / class properties.

### 📚 Libraries

* @babel/* `7.17 → 7.18`
* eslint `8.11 → 8.20`
* eslint-plugin-react `7.29 → 7.30`
* eslint-plugin-react-hooks `4.3 → 4.6`

## v4.0.0 - 2022-03-16

Updates ESLint to v8. No app-level breaking changes expected.

### 📚 Libraries

* @babel/* `7.16 → 7.17`
* eslint `7.32 → 8.11`

[Commit Log](https://github.com/xh/eslint-config/compare/v3.1.0...v4.0.0)

## v3.1.0 - 2021-12-17

* Warn on use of `window.isFinite` global - the lodash version is our standard.
* Sync babel config with browserslist from `hoist-dev-utils` (Edge → last two versions).

### 📚 Libraries

* @babel/* `7.15 → 7.16`
* eslint-plugin-react `7.24 → 7.27`
* eslint-plugin-react-hooks `4.2 → 4.3`

[Commit Log](https://github.com/xh/eslint-config/compare/v3.0.5...v3.1.0)

## v3.0.5 - 2021-08-10

### 📚 Libraries

* @babel/* `7.14 → 7.15`
* eslint: `7.29 → 7.32`

[Commit Log](https://github.com/xh/eslint-config/compare/v3.0.4...v3.0.5)

## v3.0.4 - 2021-07-01

* Whitelist `FileReader` global.

### 📚 Libraries

* eslint: `7.28 → 7.29`

[Commit Log](https://github.com/xh/eslint-config/compare/v3.0.3...v3.0.4)

## v3.0.3 - 2021-06-10

### 📚 Libraries

* @babel/*: `7.13 → 7.14`
* eslint: `7.20 → 7.28`
* eslint-plugin-react: `7.22 → 7.24`

[Commit Log](https://github.com/xh/eslint-config/compare/v3.0.2...v3.0.3)

## v3.0.2 - 2021-02-23

* Update to use `@babel/eslint-parser` and latest `eslint`.

### 📚 Libraries

* @babel/eslint-parser: `added @ 7.13`
* @babel/eslint-plugin: `added @ 7.13`
* babel-eslint: `removed`
* eslint: `6.8 → 7.20`
* eslint-plugin-react: `7.20 → 7.22`
* eslint-plugin-react-hooks: `2.5 → 4.2`

[Commit Log](https://github.com/xh/eslint-config/compare/v2.3.0...v3.0.2)

## v2.3.0 - 2020-07-10

* Whitelist the `Blob` and `File` globals.
* Apache 2.0 license (consistent with the rest of the XH Hoist libraries).

### 📚 Libraries

* babel-eslint: `10.0 → 10.1`
* eslint: `6.5 → 6.8`
* eslint-plugin-react: `7.15 → 7.20`
* eslint-plugin-react-hooks: `2.1 → 2.5`

[Commit Log](https://github.com/xh/eslint-config/compare/v2.2.0...v2.3.0)

## v2.2.0 - 2019-10-02

* Disable `react-hooks/rules-of-hooks` - the linter is unable to interpret our factory pattern
  w/hook calls in render fn config, throwing false errors.

### 📚 Libraries

* eslint: `6.4 → 6.5`
* eslint-plugin-react: `7.14 → 7.15`
* eslint-plugin-react-hooks: `2.0 → 2.1`

[Commit Log](https://github.com/xh/eslint-config/compare/v2.1.1...v2.2.0)

## v2.1.1 - 2019-09-17

### 📚 Libraries

* eslint: `6.3 → 6.4`
* Ensure transitive deps upgraded in yarn.lock.

[Commit Log](https://github.com/xh/eslint-config/compare/v2.1.0...v2.1.1)

## v2.1.0 - 2019-09-13

* Allows use of backticks to quote `plain strings` (without templates).

[Commit Log](https://github.com/xh/eslint-config/compare/v2.0.0...v2.1.0)

## v2.0.0 - 2019-09-03

* Update all dependencies to latest, including Babel 7.5 as a transitive dependency. This version is
  for use with hoist-dev-utils 4.x onwards, which also updates to Babel >= 7.5 and makes the
  required updates to polyfill handling.

### 📚 Libraries

* babel-eslint: `8.2 → 10.0`
* eslint: `4.19 → 6.3`
* eslint-plugin-react-hooks: `1.7 → 2.0`

[Commit Log](https://github.com/xh/eslint-config/compare/v1.2.0...v2.0.0)
