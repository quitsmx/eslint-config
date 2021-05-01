# @quitsmx/eslint-config

[![License][license-badge]][license-url]
[![npm Version][npm-badge]][npm-url]

[ESLint](https://eslint.org/) configuration with embeded support for [TypeScript](https://www.typescriptlang.org/) and [Prettierx](https://www.npmjs.com/package/prettierx) to be used in modern browsers\*, almost compatible with [StandardJS](https://standardjs.com/).

Includes extra configurations for [React](https://reactjs.org/), [Preact](https://preactjs.com/) and [Node.js](https://nodejs.org/en/).

**Requirements:**

- ESLint 7
- TypeScript 4
- NodeJS 10.13 or 12 and later

\* A good [browserslist](https://github.com/browserslist/browserslist#best-practices) to start with is "`>= 0.15% and since 2019`" as you can [see here](https://browserslist.dev/?q=Pj0gMC4xNSUgYW5kIHNpbmNlIDIwMTk%3D).

## Included Plugins

- [@typescript-eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
- [compat](https://www.npmjs.com/package/eslint-plugin-compat)
- [node](https://www.npmjs.com/package/eslint-plugin-node)
- [prettierx](https://www.npmjs.com/package/eslint-plugin-prettierx)
- [promise](https://www.npmjs.com/package/eslint-plugin-promise)
- [react](https://www.npmjs.com/package/eslint-plugin-react)
- [react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-simple-import-sort](https://www.npmjs.com/package/eslint-plugin-simple-import-sort)
- [unicorn](https://www.npmjs.com/package/unicorn)

## Install

Install eslint and this config from npm:

```bash
yarn add -D eslint typescript amarcruz/prettier @quitsmx/eslint-config
```

[aMarCruz/prettier](https://github.com/aMarCruz/prettier) is recommended to avoid conflicts with other Prettier tools.

### Setup

Run with `npx` or `yarn` from the root of your project:

```bash
npx quits-eslint-init
```

Review and customize the generated [.eslintrc.json](https://eslint.org/docs/user-guide/configuring/configuration-files), [.prettierrc.json](https://prettier.io/docs/en/configuration.html) and [.vscode/settings.json](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations) files.

The only required setting is `extends` in the .eslintrc file:

```json
{
  "extends": ["@quitsmx"]
}
```

### Extra Configurations

Add to `extends[]` the configurations that match your environment:

| Package            | Configuration                       |
| ------------------ | ----------------------------------- |
| node               | `@quitsmx/eslint-config/node`       |
| react              | `@quitsmx/eslint-config/react`      |
| preact             | `@quitsmx/eslint-config/preact`     |
| TypeScript runtime | `@quitsmx/eslint-config/ts-runtime` |

For the TypeScript runtime you need to set the project in your ESLint config.
For example:

```json
{
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "extends": ["@quitsmx", "@quitsmx/eslint-config/ts-runtime"]
}
```

### Prettierx

Configure Prettierx with a `.prettierrc.json` file in the root of your project.

For example, this preset used by QuITS.mx, wich we call "standardize", is similar to the one used by StandardJS:

```json
{
  "arrowParens": "avoid",
  "endOfLine": "lf",
  "generatorStarSpacing": true,
  "offsetTernaryExpressions": true,
  "printWidth": 92,
  "quoteProps": "consistent",
  "semi": false,
  "singleQuote": true,
  "spaceBeforeFunctionParen": true,
  "tabWidth": 2,
  "useTabs": false,
  "yieldStarSpacing": true
}
```

To avoid conflicts between Prettier and Prettierx, it is recommended that you install the (fake) Prettier package from [aMarCruz/prettier](https://github.com/aMarcruz/prettier).

```bash
yarn add -D aMarCruz/prettierx
```

## Using with VS Code

Install the [ESLint extension for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), then add this to the VS Code settings to enable lint and automatic formating on save:

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
