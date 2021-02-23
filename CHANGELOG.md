# Changelog

## v3.0.2 - 2021-02-23

* Update to use `@babel/eslint-parser` and latest `eslint`.

### 📚 Libraries

* @babel/eslint-parser: `added @ 7.13`
* @babel/eslint-plugin: `added @ 7.13`
* babel-eslint: `removed`
* eslint: `6.8 -> 7.20`
* eslint-plugin-react: `7.20 -> 7.22`
* eslint-plugin-react-hooks: `2.5 -> 4.2`

[Commit Log](https://github.com/xh/eslint-config/compare/v2.3.0...v3.0.0)

## v2.3.0 - 2020-07-10

* Whitelist the `Blob` and `File` globals.
* Apache 2.0 license (consistent with the rest of the XH Hoist libraries).

### 📚 Libraries

* babel-eslint: `10.0 -> 10.1`
* eslint: `6.5 -> 6.8`
* eslint-plugin-react: `7.15 -> 7.20`
* eslint-plugin-react-hooks: `2.1 -> 2.5`

[Commit Log](https://github.com/xh/eslint-config/compare/v2.2.0...v2.3.0)

## v2.2.0 - 2019-10-02

* Disable `react-hooks/rules-of-hooks` - the linter is unable to interpret our factory pattern
  w/hook calls in render fn config, throwing false errors.

### 📚 Libraries

* eslint: `6.4 -> 6.5`
* eslint-plugin-react: `7.14 -> 7.15`
* eslint-plugin-react-hooks: `2.0 -> 2.1`

[Commit Log](https://github.com/xh/eslint-config/compare/v2.1.1...v2.2.0)

## v2.1.1 - 2019-09-17

### 📚 Libraries

* eslint: `6.3 -> 6.4`
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

* babel-eslint: `8.2 -> 10.0`
* eslint: `4.19 -> 6.3`
* eslint-plugin-react-hooks: `1.7 -> 2.0`

[Commit Log](https://github.com/xh/eslint-config/compare/v1.2.0...v2.0.0)
