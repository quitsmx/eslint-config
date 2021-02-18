# @quitsmx/eslint-config Changes

ESLint preset for QuITS apps

## \[0.3.1] - 2021-02-18

### Changed

- Minor fixes to the Readme
- Now `quits-eslint-init` creates a '.vscode/settings.json' file with basic VS Code settings to apply '@quitsmx/eslint-config' to JavaScript files, with automatic format on save.
- Update dependencies.

## \[0.3.0] - 2021-02-15

### Added

- `unicorn/numeric-separators-style` as warn in TypeScript overrides
- `unicorn/prefer-array-find` as error
- `unicorn/prefer-array-flat-map` as warn
- `unicorn/prefer-date-now` as error
- `unicorn/prefer-regexp-test` as warn
- `unicorn/prefer-string-trim-start-end` as warn
- `unicorn/prefer-ternary` as warn
- `@typescript-eslint/no-implicit-any-catch` as warn

### Changed

- `unicorn/prefer-keyboard-event-key` from error to warn
- Move `unicorn/prefer-optional-catch-binding` to TypeScript overrides

### Removed

- `@typescript-eslint/no-unused-vars-experimental` from ts-runtime, as it is slow.

### Fixed

- Exclude test files from the npm package.

## \[0.2.0] - 2021-02-14

### Added

- Basic test

### Changed

- Accept `@typescript-eslint/ts-expect-error` & "ts-check" without description.
- Remove `@typescript-eslint/prefer-ts-expect-error` to allow "@ts-ignore" comments with description.
- Review of the `eslint-plugin-node` rules: enable `no-unsupported-features`, `prefer-global`, `no-missing-require` and remove those related to `import`.
- Limit `@typescript-eslint/prefer-optional-chain` to TypeScript files.

## \[0.1.0] - 2021-02-12

First public version
