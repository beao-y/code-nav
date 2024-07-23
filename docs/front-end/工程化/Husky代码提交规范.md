# Husky 配置 Git 提交规范
> 作者：Beao Yang
>
> 介绍：基于 husky9.x + Lint-staged + Commitlint + Commitizen + cz-git 约束团队 git 提交规范，统一代码提交风格

## Husky 安装

[Husky 官方文档](https://typicode.github.io/husky/zh)

```
yarn add husky -D

# 初始化生成 .husky 文件
npx husky init
```

## Lint-staged
``` 
yarn add lint-staged -D 
```
#### 配置
package.json 中需要配置在 git 提交执行的 lint 检测 <br>
需要安装 `prettier`
```json
"lint-staged": {
  "*.{js,jsx,tsx,vue,css,scss,less,md,json}": [
    "prettier --write"
  ],
  // 可配置多个
  "*.{js,ts,vue}": [
    "eslint --fix",
    "prettier --write",
    "git add"
  ],
  "*.{cjs,json}": [
    "prettier --write"
  ],
  "*.{vue,html}": [
    "eslint --fix",
    "prettier --write",
    "stylelint --fix"
  ],
  "*.{scss,css}": [
    "stylelint --fix",
    "prettier --write"
  ],
  "*.md": [
    "prettier --write"
  ] 
},
```
#### 添加指令
```json
  "scripts": {
    "lint:lint-staged": "lint-staged"
  }
```

`.husky` 目录下 `pre-commit` 文件修改为
```
npm run lint:lint-staged
```

## Commitlint 安装
[官方文档](https://commitlint.js.org)

```
yarn add @commitlint/config-conventional @commitlint/cli -D
```

#### 配置

创建 `commitlint.config.js` 文件， 确保保存为 `UTF-8` 的编码格式
```
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

配置项
```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0, 'never'],
    'type-enum': [
      2, // 代表必须输入
      'always',
      [
        'docs', // Adds or alters documentation. 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
        'chore', // Other changes that don't modify src or test files. 改变构建流程、或者增加依赖库、工具等
        'feat', // Adds a new feature. 新增feature
        'fix', // Solves a bug. 修复bug
        'merge', // 仅进行分支合并.
        'improvement', // 用于对当前实现进行改进而没有添加新功能或修复错误的提交.
        'perf', // Improves performance. 优化相关，比如提升性能、体验
        'refactor', // Rewrites code without feature, performance or bug changes. 代码重构，没有加新功能或者修复bug
        'revert', // Reverts a previous commit. 回滚到上一个版本
        'style', // Improves formatting, white-space. 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
        'test', // Adds or modifies tests. 测试用例，包括单元测试、集成测试等
        'ci', // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
        'build' // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
      ]
    ]
  },
}
```

#### 提交信息校验

在 `.husky` 文件下生成 `commint-msg` 文件， 确保保存为 UTF-8 的编码格式
```
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```



## Commitizen & cz-git

commitizen: 自动辅助生成标准化规范化的 commit message [官方文档](https://commitizen.github.io/cz-cli/) <br>
cz-git: 输出标准格式的 Commitizen 适配器和 CLI [官方文档](https://cz-git.qbb.sh/zh/)

```
yarn add commitizen -g

yarn add cz-git -D
```

#### 配置
```json
{
  "scripts": {
    
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git"
    }
  }
}
```

#### 完整配置
cz-git 的配置可以写入 `commitlint.config.js` 中

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [0, 'never'],
    'type-enum': [
      2, // 代表必须输入
      'always',
      [
        'docs', // Adds or alters documentation. 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
        'chore', // Other changes that don't modify src or test files. 改变构建流程、或者增加依赖库、工具等
        'feat', // Adds a new feature. 新增feature
        'fix', // Solves a bug. 修复bug
        'merge', // 仅进行分支合并.
        'improvement', // 用于对当前实现进行改进而没有添加新功能或修复错误的提交.
        'perf', // Improves performance. 优化相关，比如提升性能、体验
        'refactor', // Rewrites code without feature, performance or bug changes. 代码重构，没有加新功能或者修复bug
        'revert', // Reverts a previous commit. 回滚到上一个版本
        'style', // Improves formatting, white-space. 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
        'test', // Adds or modifies tests. 测试用例，包括单元测试、集成测试等
        'ci', // 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
        'build' // 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
      ]
    ]
  },

  prompt: {
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      generatingByAI: '正在通过 AI 生成你的提交简短描述...',
      generatedSelectByAI: '选择一个 AI 生成的简短描述:',
      confirmCommit: '是否提交或修改commit ?'
    },
    // prettier-ignore
    types: [
      { value: "feat",     name: "特性:     ✨  新增功能", emoji: ":sparkles:" },
      { value: "fix",      name: "修复:     🐛  修复缺陷", emoji: ":bug:" },
      { value: "docs",     name: "文档:     📝  文档变更", emoji: ":memo:" },
      { value: "style",    name: "格式:     💄  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: ":lipstick:" },
      { value: "refactor", name: "重构:     ♻️  代码重构（不包括 bug 修复、功能新增）", emoji: ":recycle:" },
      { value: "perf",     name: "性能:     ⚡️  性能优化", emoji: ":zap:" },
      { value: "test",     name: "测试:     ✅  添加疏漏测试或已有测试改动", emoji: ":white_check_mark:"},
      { value: "build",    name: "构建:     📦️  构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）", emoji: ":package:"},
      { value: "ci",       name: "集成:     🎡  修改 CI 配置、脚本",  emoji: ":ferris_wheel:"},
      { value: "revert",   name: "回退:     ⏪️  回滚 commit",emoji: ":rewind:"},
      { value: "chore",    name: "其他:     🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: ":hammer:"},
    ],
    useEmoji: true,
    emojiAlign: 'center',
    useAI: false,
    aiNumber: 1,
    themeColorCode: '',
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      { value: 'closed', name: 'closed:   ISSUES has been processed' }
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: ''
  }
}

```

## 最终
提交代码提交的时需要先  `git add .` ，让后 `git cz`， 优化繁琐提交 <br>
`package.json` 配置提交命令, 每次提交 只需 `yarn run commit`
```json
 "scripts": {
    "commit":"git add . && git cz"
  }
```
```
？选择你要提交的类型：         commitlint.config.js 中配置的 types（必填）如：feat、fix
？选择一个提交范围（可选）：    custom
？请输入自定义的提交范围：      可输入修改的文件文字 如：readme
？填写简短精炼的变更描述：      修改 readme 文件
？填写更加详细的变更描述（可选）。使用“|”换行：
？选择关联的issue前缀（可选）： #617
？是否提交或修改commit：       yse

### 最终提交格式为
feat(readme): 修改 readme 文件(#617)
```
