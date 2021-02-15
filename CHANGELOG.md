# @quitsmx/eslint-config Changes

ESLint preset for QuITS apps

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
