type Dict<T = unknown> = Record<string, T>

type RuleEntry = import('eslint').Linter.RuleEntry
type RuleLevel = import('eslint').Linter.RuleLevel
type Rules = Record<string, RuleEntry>

type BaseConf = Omit<import('eslint').Linter.BaseConfig, 'rules'> & { rules: Rules }

declare module 'eslint-config-standard' {
  const conf: BaseConf
  export = conf
}

declare module 'eslint-config-standard-jsx' {
  const conf: BaseConf
  export = conf
}

declare module 'eslint-config-prettier' {
  const conf: BaseConf
  export = conf
}

declare module 'confusing-browser-globals' {
  const names: string[]
  export = names
}

declare module 'eslint-find-rules' {
  interface RuleFinder {
    getUnusedRules(): string[]
  }
  function ruleFinderFactory (file?: string): RuleFinder
  export = ruleFinderFactory
}
