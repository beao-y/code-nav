# uni-app 基于 Vue3 开发的项目构建
> 作者：Beao Yang
>
> 介绍：基于 uniapp + vue3 + Ts + uView-plus 搭建的小程序开发模板

## 项目构建

```
// 快速初始化
npx degit dcloudio/uni-preset-vue#vite-ts <project-name>
```

## uView-plus 配置
```
pnpm add uview-plus

// uview-plus 依赖 sass
pnpm add sass sass-loader -D

```
main.ts 中引入
```ts
import uviewPlus from 'uview-plus'
import {
  createSSRApp,
} from 'vue'
import App from './App.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  return {
    app,
  }
}
```

env.d.ts 中配置， 防止 ts 报错
```ts
declare module 'uview-plus'
```

uni.scss 中引入 uView 的css
```
/* uni.scss */
@import 'uview-plus/theme.scss';
```

App.vue 中也需要引入
```
<style lang="scss">
/*每个页面公共css, 都放到这里 */
@import "uview-plus/index.scss";
</style>
```

pages.json 中配置组件
```json
"easycom": {
    "custom": {
      "^u--(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
      "^u-([^-].*)": "uview-plus/components/u-$1/u-$1.vue",
    }
},
```

## Pinia 配置
```
// 状态管理库和uni版持久化
pnpm add pinia pinia-plugin-persist-uni
```

src 目录下新建 stores 目录，新建 index.ts
```ts
// index.js
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist-uni'

const pinia = createPinia()
pinia.use(piniaPersist)

export default pinia
```

基本用法，创建 globalStore.ts
```ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGlobalStore = defineStore(
  'globalStore',
  () => {
    const userInfo = ref()
    const systemInfo = ref({
      safeAreaHeight: 0,
      safeAreaBottom: 0,
    })
    const setUserInfo = (val: any) => {
      userInfo.value = val
    }
    const setSystemInfo = (val: any) => {
      systemInfo.value.safeAreaHeight = val.safeAreaHeight
      systemInfo.value.safeAreaBottom = val.safeAreaBottom
    }
    // 清理用户信息，退出时使用
    const clearUserInfo = () => {
      userInfo.value = undefined
    }
    return {
      userInfo,
      systemInfo,
      setUserInfo,
      clearUserInfo,
      setSystemInfo,
    }
  },
  // 默认持续化保存
  {
    persist: {
      enabled: true, // 启用持久化
      strategies: [
        {
          key: 'globalStore', // 存储到本地的键名
          storage: localStorage, // 使用 localStorage 或 sessionStorage
        },
      ],
    },
  },
)
```

main.ts 中引入
```ts
import {
  createSSRApp,
} from 'vue'
import App from './App.vue'
import pinia from './stores'

export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app,
  }
}
```

##  eslint 配置
```
pnpm add @antfu/eslint-config -D
```

eslint.config.js 文件配置
[参考文档](https://github.com/antfu/eslint-config)

```javascript
// eslint.config.js
// uni 不支持 module， 采用 commonjs 方式
const antfu = require('@antfu/eslint-config').default
const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat()

module.exports = antfu(
  {
    stylistic: {
      indent: 2, // 4, or 'tab'
      quotes: 'single', // or 'double'
    },
    // TypeScript and Vue are auto-detected, you can also explicitly enable them:
    typescript: true,
    vue: true,

    // Disable jsonc and yaml support
    jsonc: false,
    yaml: false,
    ignores: [
      'node_modules/',
      'dist/',
      'vite.config.js',
      '**/**.d.ts',
    ], // 取代旧的`.eslintignore`

  },

  // 兼容 eslintrc 的配置方式， 必须放在第二个参数位置
  ...compat.config({
    extends: [
      './.eslintrc-auto-import.json',
    ],
  }),

  {
    languageOptions: {
      globals: {
        uni: 'readonly', // 将 `uni wx` 声明为只读全局变量
        wx: 'readonly',
      },
    },
    rules: {
      'ts/no-use-before-define': 'off',
      'prefer-promise-reject-errors': 'off',
      // 针对 UniApp 的特定规则配置
      'vue/multi-word-component-names': 'off',
    },
  },

)
```

## 自动引入
```
pnpm add unplugin-auto-import 
```

vite.config.ts 中配置
```js
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {},
  plugins: [
    uni(),
    AutoImport({
      imports: ['vue', 'pinia', 'uni-app', '@vueuse/core'],
      // 如有用到eslint记得加上写段，没有用到可以忽略
      eslintrc: {
        enabled: true,
        globalsPropValue: true,
      },
    }),
  ],
})
```

env.d.ts 中配置， 防止 ts 报错
```ts
declare module 'unplugin-auto-import/vite'
```

ts.config.json
```json
"include": [ "./auto-imports.d.ts"]
```

