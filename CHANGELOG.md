# @quitsmx/eslint-config Changes

ESLint preset for QuITS apps

## \[0.4.2] - 2021-03-08

### Changed

- Update dependencies.
- Accept changes of minor version in `peerDependencies`

### Removed

- `@typescript-eslint/prefer-optional-chain` as optional-chain is expansive in es2018 and lower.

## \[0.4.1] - 2021-03-05

### Added

- `curly` as warn, only for multi-line (PrettierX doesn't force braces).
- react package to `devDependencies` to allow test the "react" config.

### Changed

- Update dependencies.

### Fixed

- `@typescript-eslint/no-for-in-array` must be in 'ts-runtime' only.

## \[0.4.0] - 2021-02-19

### Added

- `publishConfig.access: 'public'` in package.json

### Changed

- Use `@typescript-eslint/no-shadow` instead `no-shadow` in TypeScript files.

The following `@typescript-eslint` runtime rules are disabled:

- `no-unnecessary-condition`
- `prefer-readonly-parameter-types`
- `prefer-readonly`
- `prefer-string-starts-ends-with`
- `strict-boolean-expressions`
- `unbound-method`

## \[0.3.1] - 2021-02-18

### Changed

- Minor fixes to the Readme
- Add missing `"spaceBeforeFunctionParen": true` to .prettierrc.json
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
