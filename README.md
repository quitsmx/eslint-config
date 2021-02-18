# @quitsmx/eslint-config

[![License][license-badge]][license-url]
[![npm Version][npm-badge]][npm-url]

Preset for ESLint, to be used in TypeScript projects with [React](https://reactjs.org/) or [Preact](https://github.com/preactjs/preact) and [PrettierX](https://www.npmjs.com/package/prettierx), almost compatible with [StandardJS](https://standardjs.com/).

## Included plugins

- [@typescript-eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [compat](https://www.npmjs.com/package/eslint-plugin-compat)
- [jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [node](https://www.npmjs.com/package/eslint-plugin-node)
- [prettierx](https://www.npmjs.com/package/eslint-plugin-prettierx)
- [promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [react](https://www.npmjs.com/package/eslint-plugin-react)
- [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [react-perf](https://www.npmjs.com/package/eslint-plugin-react-perf)
- [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
- [unicorn](https://www.npmjs.com/package/unicorn)

### NodeJS Executables

Installed in node_modules/.bin, to be runned with `yarn` or `npm run`:

- `quits-eslint-init`

  Create .eslintrc.json, .prettierrc.json and .vscode/settings.json files in the current directory, if they don't exist.

- `list-eslint-config`

  List the effective ESLint configuration applied to a file.

## Install & Basic Usage

Install eslint and this config from npm:

```bash
npm i -D eslint @quitsmx/eslint-config
# or
yarn add -D eslint @quitsmx/eslint-config
```

Create the ESLint config file in the root of your project (.eslintrc.json, .eslintrc.js, etc):

```json
{
  "root": true,
  "extends": ["@quitsmx"]
}
```

You can overwrite whatever you want (`rules`, `env`, etc), only "extends" is required.

### PrettierX

Configure PrettierX with a `.prettierrc.json` file in the root of your project, for example:

```json
{
  "offsetTernaryExpressions": true,
  "arrowParens": "avoid",
  "generatorStarSpacing": true,
  "indentChains": true,
  "printWidth": 92,
  "quoteProps": "consistent",
  "semi": false,
  "singleQuote": true,
  "spaceBeforeFunctionParen": true,
  "yieldStarSpacing": true
}
```

To avoid conflicts between Prettier and PrettierX, it is recommended that you install the (fake) Prettier package from [aMarCruz/prettier](https://github.com/aMarcruz/prettier).

```bash
yarn add -D aMarCruz/prettierx
```

### Use with React or Preact

Add the desired config, `react` or `preact`, prefixed with `@quitsmx/eslint-config/` like this:

```json
{
  "root": true,
  "extends": ["@quitsmx", "@quitsmx/eslint-config/preact"]
}
```

### Other configs

- TypeScript with a project (runtime info): `@quitsmx/eslint-config/ts-runtime`
- For nodeJS: `@quitsmx/eslint-config/node`

## Using with VS Code

Install the VS Code ESLint extension, then add this to your settings.json to enable lint and automatic format.

```json
{
  "javascript.format.enable": false,
  "typescript.format.enable": false,
  "eslint.format.enable": true,
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnSave": true
  }
}
```

## License

The [MIT](LICENSE) License &copy; 2021 by QuITS

[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: https://github.com/quitsmx/eslint-config/blob/master/LICENSE
[npm-badge]: https://img.shields.io/npm/v/@quitsmx/eslint-config.svg
[npm-url]: https://www.npmjs.com/package/@quitsmx/eslint-config
