# Vite 搭建 Vue3 项目

> 作者：Beao Yang
>
> 介绍：基于 Vite4 + Vue3.4 + TypeScript + Vue-Router + Pinia + AntdV + Axios  + Vueuse ，搭建的 Vue 项目模板

## 前言

:stuck_out_tongue_winking_eye: 目前，前端开发更注重工程化，因此每个前端都应该会自己构建项目。

前端工程化，最基础的就是学会通过构建工具构建项目，比如webpack、 vite，只有了解每个配置起到的作用才能更好的优化项目性能。

## 项目构建

```
// 快速初始化
pnpm create vite <project-name> --template vue-ts
```


::: danger
因为使用了 TypeScript，所以需要安装 @types/node 依赖<br>
否则会报错  <找不到名称“require”的报错>
:::

```
pnpm i @types/node -D
```

## 代码规范

::: tip
以前都是采用 Eslint + Prettier 进行代码规范，配置非常繁琐，并且两者直接会冲突 <br>
采用 antfu 开源的 @antfu/eslint-config 无需配置 prettier，搭配webstorm 的保存自动格式化，即可实现保存自动格式化
:::

![示例图片](/images/img.png)

```
pnpm i eslint -D

pnpm i @antfu/eslint-config -D
```

创建 eslint.config.js 文件
[参考文档](https://github.com/antfu/eslint-config)

```js
// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu(
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
    
    // 取代旧的`.eslintignore`
    ignores: [
      '**/fixtures',
      // ...globs
    ]  
  },
  {
    rules: {
        'ts/no-use-before-define': 'off',
        'prefer-promise-reject-errors': 'off',
        // 强制要求顶级作用域中的函数为命名函数
        '@antfu/top-level-function/top-level-function': 'error',
    },
  },
)
```

package.json 中添加配置用于保存自动格式化

```
"scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  },
```

## 集成 Pinia
::: tip
Pinia 是一个 Vue 的状态管理库，是 Vue 官方团队推荐代替Vuex的一款轻量级状态管理库。
:::


[参考文档](https://pinia.vuejs.org/zh/)

```
pnpm i pinia -S

// 持久化插件
pnpm i pinia-plugin-persistedstate -S
```


新建 store 文件夹，创建 index.ts
```js
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
```

main.ts 中引入
```js
import pinia from '@/store'

const app = createApp(App)

app.use(pinia).mount('#app')
```

定义state，store 文件夹下创建 globalState.ts 文件，示例：
```ts
import { defineStore } from 'pinia'

interface GlobalState {
    token: string
    refreshToken: string
}

export const useGlobalState = defineStore('globalState', {
    state: (): GlobalState => ({
    token: '',
    refreshToken: ''
}),
    actions: {
    setToken(payload: string) {
        this.token = payload
    },
    setRefreshToken(payload: string) {
        this.refreshToken = payload
    }
    // ... other actions
},
persist: {
    key: 'globalState',
    storage: localStorage
}
})

```

页面中使用 state
```ts
import { useGlobalState } from '@/store/globalState.ts'

const globalState = useGlobalState()

const onclick = () => {
  globalState.setToken('')
}

// 还有一种响应式数据写法
import { storeToRefs } from 'pinia'
const { token } = storeToRefs(useGlobalState())

const onclick = () => {
    token.value = ''
}
```

## 集成 Vue-router

```
pnpm i vue-router -S
```
[参考文档](https://router.vuejs.org/zh/)

::: tip
这里我们采用 import.meta.glob 来自动生成路由，无需在本地去维护一份路由表
:::

创建 router 文件夹，并在该文件夹下创建 index.ts 文件，示例：
```ts
import { createRouter, createWebHistory } from 'vue-router'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import { storeToRefs } from 'pinia'
import { Local, Session } from '@/utils/storage'

import { useRoutesList } from '@/store/routesState.ts'
import pinia from '@/store'
import { dynamicRoutes, setAddRoute, staticRoutes } from '@/router/route.ts'

const router = createRouter({
  routes: [...dynamicRoutes, ...staticRoutes],
  history: createWebHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// 路由加载前
router.beforeEach(async (to) => {
  NProgress.configure({ showSpinner: false })
  if (to.meta.title)
    NProgress.start()

  const { token } = Local.get('globalState') ?? {}

  if (to.path === '/login' && !token) {
    NProgress.done()
    return true
  }
  else {
    if (!token) {
      Session.clear()
      NProgress.done()
      return `/login?redirect=${to.path}&params=${JSON.stringify(
        to.query ? to.query : to.params,
      )}`
    }
    else if (token && to.path === '/login') {
      NProgress.done()
      return '/home'
    }
    else {
      const storesRoutesList = useRoutesList(pinia)
      const { routesList } = storeToRefs(storesRoutesList)

      // routeList不需要添加缓存， 防止刷新404
      if (routesList.value.length === 0) {
        // 动态添加路由
        await setAddRoute()
        return { path: to.path, query: to.query }
      }
      else {
        return true
      }
    }
  }
})

// 路由加载后
router.afterEach(() => {
  NProgress.done()
})

export default router

```
router 文件夹下创建 routes.ts 文件，示例：
```ts
import type { RouteRecordRaw } from 'vue-router'
import router from '@/router/index.ts'
import { useRoutesList } from '@/store/routesState.ts'
import pinia from '@/store'
import { getAdminMenu } from '@/api/test.ts'
import NotFound from '@/views/error/404.vue'

interface ICpnType {
    path: string
    name: string
    component: any
    meta: {
        title: string
        // ...
    }
}

export const modules = import.meta.glob('@/views/**/index.vue')

export const components = Object.keys(modules).reduce<
    Record<string, () => Promise<ICpnType>>
>((prev, cur) => {
    const path = cur.replace('/src/views', '').replace('/index.vue', '')
    prev[path] = modules[cur] as () => Promise<ICpnType>
    return prev
}, {})

export async function setAddRoute() {
    const storesRoutesList = useRoutesList(pinia)
    let asyncRoutes: RouteRecordRaw[] = []
    // 通过接口拿到的权限路由
    await getAdminMenu().then((res: any) => {
        asyncRoutes = res.map((item: RouteRecordRaw) => ({
            path: item.path,
            name: item.name,
            component: components[item.path],
        }))

        asyncRoutes.forEach((v: RouteRecordRaw) => {
            router.addRoute(v)
        })

        storesRoutesList.setRoutesList(res)
    })
}

export const dynamicRoutes: Array<RouteRecordRaw> = [
    { path: '/:pathMatch(.*)', component: NotFound },
    { path: '/', redirect: '/home' },
]

export const staticRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录',
        },
    },
]
```
main.ts 中引入
```js
import router from './router'

const app = createApp(App)

app.use(router).use(pinia).mount('#app')
```

## 集成 Axios
[参考文档](https://www.axios-http.cn/)
```
pnpm i axios -S
```
创建 request 文件夹， 并在该文件下创建 index.ts 文件
```ts
import Request from './request'

const request = new Request({
  baseURL: import.meta.env.VITE_BASEURL,
  timeout: 10000,
})

export default request

```

创建 request.ts 文件，采用 class 的方式封装

```ts
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios'
import axios from 'axios'

import { handleStatus } from './error'

import router from '@/router'
import { antdUtils } from '@/utils/antUtils.ts'

import { useGlobalState } from '@/store/globalState.ts'

const globalState = useGlobalState()

const refreshTokenUrl = '/refreshToken'

export type Response<T> = Promise<[boolean, T, AxiosResponse<T>]>

class Request {
  private readonly instance: AxiosInstance
  private refreshTokenFlag = false
  private requestQueue: {
    resolve: any
    config: any
    type: 'request' | 'response'
  }[] = []

  private limit = 5

  private requestingCount = 0

  private flag = true

  constructor(config?: CreateAxiosDefaults) {
    this.instance = axios.create(config)

    // 所有实例的拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig): Promise<any> => {
        const { token, refreshToken } = globalState

        if (config.url?.startsWith(refreshTokenUrl)) {
          config.headers.Authorization = refreshToken
          return Promise.resolve(config)
        }

        if (this.refreshTokenFlag || this.requestingCount >= this.limit) {
          return new Promise((resolve) => {
            this.requestQueue.push({
              resolve,
              config,
              type: 'request',
            })
          })
        }

        this.requestingCount += 1

        // 为每个接口注入token
        if (token)
          config.headers.Authorization = token

        return Promise.resolve(config)
      },
      (err: any): Promise<any> => {
        antdUtils.message?.error(err.message)
        return Promise.reject(err)
      },
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse<any, any>): Promise<any> => {
        if (!res.config.url?.startsWith(refreshTokenUrl)) {
          this.requestingCount -= 1
          if (this.requestQueue.length)
            this.requestByQueue()
        }
        // 接口特殊 处理情况 接口200 但获取的 data 状态异常
        const { code, msg } = res.data.meta

        if ([403].includes(+code) && this.flag) {
          handleStatus(+code, msg)
          globalState.setToken('')
          router.replace('/')

          // 处理页面调用多个接口，报多个错误的问题，开关控制
          this.flag = false
        }
          return Promise.resolve([false, res.data.data, res])
      },
      (err: any): Promise<any> => {
        this.requestingCount -= 1
        const { status, config } = err?.response || {}

        if (status === 401) {
          // token 失效 退出登录或者刷新token
            return new Promise((resolve) => {
                this.requestQueue.unshift({
                    resolve,
                    config,
                    type: 'response',
                })
                if (this.refreshTokenFlag)
                    return
            
                this.refreshTokenFlag = true
                this.refreshToken()
            })
        } else {
            antdUtils.message?.error(errMessage)
        }
        return Promise.reject([true, err?.response])
      },
    )
  }

  private requestByQueue() {
    if (!this.requestQueue.length)
      return

    Array.from({ length: this.limit - this.requestingCount }).forEach(
      async () => {
        const record = this.requestQueue.shift()
        if (!record)
          return

        const { config, resolve, type } = record
        const { token } = globalState

        if (type === 'response') {
          config.headers.Authorization = token
          resolve(await this.request(config))
        }
        else if (type === 'request') {
          this.requestingCount += 1

          config.headers.Authorization = token
          resolve(config)
        }
      },
    )
  }

  private async refreshToken() {
    const { refreshToken } = globalState
    if (!refreshToken)
      this.toLoginPage()

    const [err, data] = await api.getRefreshToken({ userId })

    if (err) {
      this.toLoginPage()
    }

    themeConfig.value.token = data.token
    themeConfig.value.refreshToken = data.refreshToken

    this.refreshTokenFlag = false

    this.requestByQueue()
  }

  private toLoginPage() {
    this.requestQueue = []
    this.refreshTokenFlag = false
    this.requestingCount = 0
  }

  request<T, D = any>(config: AxiosRequestConfig<D>): Response<T> {
    return this.instance(config)
  }

  get<T, D = any>(url: string, config?: AxiosRequestConfig<D>): Response<T> {
    return this.instance.get(url, config)
  }

  post<T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Response<T> {
    return this.instance.post(url, data, config)
  }

  delete<T, D = any>(url: string, config?: AxiosRequestConfig<D>): Response<T> {
    return this.instance.delete(url, config)
  }

  put<T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Response<T> {
    return this.instance.put(url, data, config)
  }

  patch<T, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<T> {
    return this.instance.patch(url, data, config)
  }
}

export default Request

```

## 集成 Unocss 原子化 css
```
// 引入unocss和@iconify-json/mdi图标
pnpm i unocss @iconify-json/mdi -D

// rem转换成px
pnpm i  @unocss/preset-rem-to-px -D

// 支持在JSX/TSX中valueless attributify写法
pnpm i  @unocss/transformer-attributify-jsx -D

// 如果项目中没有使用其他的CSS框架，可以引入unocss的样式重置
pnpm i @unocss/reset
```

创建 uno.config.mts 文件
[参考文档](https://unocss.dev/)
```ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  // 组合
  shortcuts: [
    ['full', 'w-full h-full'],
    ['flex-center', 'flex  items-center justify-center'],
  ],
  presets: [
    // 将rem单位转换成px
    presetRemToPx(),
    // 默认预设
    presetUno(),
    // 支持attributify mode,简单说就是为了避免样式写太长难维护，能将py-2 px-2这种相关属性整合起来写成p="y-2 x-4"
    presetAttributify(),
    // 图标异步导入按需加载
    presetIcons({
      collections: {
        carbon: () => import('@iconify-json/mdi').then(i => i.icons),
      },
    }),

    presetTypography(),
    presetWebFonts(),
  ],
  transformers: [
    transformerAttributifyJsx(),
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})

```
vite.config.mts 配置
```ts
plugins: [
    UnoCSS({
        presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
]
```

## 集成 Ant Design Vue
```
pnpm i ant-design-vue -S
```

main.ts 配置
```js
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

app.use(Antd).use(router).use(pinia).mount('#app')
```

封装 App 包裹组件 utils

::: danger
App 组件只能在 ConfigProvider 之下才能使用 Design Token， 如果需要使用其样式重置能力，
则 ConfigProvider 与 App 组件必须成对出现。
:::

```javascript
// 在layout 组件中配置，全局注册包裹组件，必须在ConfigProvider子组件使用，在App.vue中使用无效
onMounted(() => {
    antdUtils.setMessageInstance(message)
    antdUtils.setNotificationInstance(notification)
    antdUtils.setModalInstance(modal)
})
```

```html
// App.vue
<template>
    <a-config-provider>
        <a-app full>
            <Layout />
        </a-app>
    </a-config-provider>
</template>
```

```typescript
import type { MessageInstance } from 'ant-design-vue/es/message/interface'
import type { ModalStaticFunctions } from 'ant-design-vue/es/modal/confirm'
import type { NotificationInstance } from 'ant-design-vue/es/notification/interface'

type ModalInstance = Omit<ModalStaticFunctions, 'warn'>

class AntdUtils {
  message: MessageInstance | null = null
  notification: NotificationInstance | null = null
  modal: ModalInstance | null = null

  setMessageInstance(message: MessageInstance) {
    this.message = message
  }

  setNotificationInstance(notification: NotificationInstance) {
    this.notification = notification
  }

  setModalInstance(modal: ModalInstance) {
    this.modal = modal
  }
}

export const antdUtils = new AntdUtils()
```

页面中使用

```typescript
import { antdUtils } from '@/utils/antUtils.ts'

antdUtils.message?.error('错误')

```


