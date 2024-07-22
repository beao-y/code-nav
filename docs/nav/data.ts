import type { NavLinkType } from '../.vitepress/types'

type NavData = {
  title: string
  items: NavLinkType[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN',
        desc: '大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
        link: 'https://developer.mozilla.org/zh-CN',
      },
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com',
      },
      {
        icon: 'https://snippet-generator.app/favicon.ico',
        title: 'Snippet',
        desc: '代码片段生成工具',
        link: 'https://snippet-generator.app/?description=&tabtrigger=&snippet=&mode=vscode',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com',
      },
      {
        icon: 'https://squoosh.app/c/icon-large-maskable-c2078ced.png',
        title: 'Squoosh',
        desc: '可自定义图片压缩工具',
        link: 'https://squoosh.app/',
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
      },
      {
        icon: 'https://static.json.cn/r/img/favicon/favicon.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      },
      {
        icon: 'https://carbon.now.sh/favicon.ico',
        title: 'Carbon',
        desc: '创建并共享源代码的精美图像',
        link: 'https://carbon.now.sh/',
      },
      {
        icon: 'https://transform.tools/static/favicon.png',
        title: 'transform',
        desc: '多语言代码转换工具',
        link: 'https://transform.tools/json-schema-to-typescript',
      },
      {
        icon: 'https://www.bitbug.net/favicon.ico',
        title: 'ico',
        desc: '在线生成 ico 图标',
        link: 'https://www.bitbug.net/',
      },



    ],
  },
  {
    title: 'AI 导航',
    items: [
      {
        icon: 'https://chat18.aichatos8.com/pwa-192x192.png',
        title: 'ChatGPT',
        link: 'https://chat18.aichatos8.com/#/chat/1719901308079',
        tag: '个人'
      },
      {
        icon: 'https://chat18.aichatos8.com/pwa-192x192.png',
        title: 'ChatGPT',
        link: 'https://chat.openai.com/chat',
        tag: '官方'
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI',
        link: 'https://www.notion.so',
        tag: '笔记'
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney',
        link: 'https://www.midjourney.com',
        tag: '绘画'
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'Beautiful.ai',
        link: 'https://www.beautiful.ai',
        tag: 'PPT'
      },
      {
        icon: 'https://lf-flow-web-cdn.doubao.com/obj/flow-doubao/doubao/web/logo-icon.png',
        title: '豆包',
        link: 'https://www.doubao.com/chat/',
      },
      {
        icon: 'https://nlp-eb.cdn.bcebos.com/logo/favicon.ico',
        title: '文心一言',
        link: 'https://yiyan.baidu.com/',
      },
    ],
  },
  {
    title: 'React 生态',
    items: [
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        link: 'https://zh-hans.reactjs.org',
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'React 的声明式路由',
        link: 'https://reactrouter.com',
      },
      {
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        title: 'Next.js',
        desc: '一个用于 Web 的 React 框架',
        link: 'https://nextjs.org',
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        title: 'UmiJS',
        desc: '插件化的企业级前端应用框架',
        link: 'https://umijs.org',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: '一套企业级 UI 设计语言和 React 组件库',
        link: 'https://ant.design',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        title: 'Ant Design Mobile',
        desc: '构建移动 WEB 应用程序的 React 组件库',
        link: 'https://mobile.ant.design',
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: 'Valtio',
        desc: 'makes proxy-state simple for React and Vanilla',
        link: 'https://valtio.pmnd.rs',
      },
      {
        icon: 'https://jotai.org/favicon.svg',
        title: 'Jotai',
        desc: 'primitive and flexible state management for React',
        link: 'https://jotai.org',
      },
      {
        icon: 'https://cn.redux.js.org/img/redux.svg',
        title: 'Redux',
        desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
        link: 'https://cn.redux.js.org',
      },
      {
        icon: 'https://zh.mobx.js.org/assets/mobx.png',
        title: 'MobX',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://zh.mobx.js.org',
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN',
      },
    ],
  },
  {
    title: 'Vue 生态',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue Router',
        desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: '符合直觉的 Vue.js 状态管理库',
        link: 'https://pinia.vuejs.org/zh',
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt.js',
        desc: '一个基于 Vue.js 的通用应用框架',
        link: 'https://nuxt.com',
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org',
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org',
      },
      {
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        link: 'https://antdv.com',
      },
      {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant',
      },
      {
        icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
        title: 'Cube UI',
        desc: '基于 Vue.js 实现的精致移动端组件库',
        link: 'https://didi.github.io/cube-ui',
      },
      {
        icon: 'https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg',
        title: 'NutUI',
        desc: '一个 Vue 3 组件库比较完整，主题可调，使用 TypeScript，快',
        link: 'https://www.naiveui.com/zh-CN/os-theme?from=thosefree.com',
      },
    ],
  },
  {
    title: '微前端',
    items: [
      {
        icon: 'https://gw.alipayobjects.com/mdn/rms_655822/afts/img/A*4sIUQpcos_gAAAAAAAAAAAAAARQnAQ',
        title: 'qiankun',
        desc: '可能是你见过最完善的微前端解决方案🧐',
        link: 'https://qiankun.umijs.org/zh/guide/getting-started',
      },
      {
        icon: 'https://wujie-micro.github.io/doc//favicon.ico',
        title: '无界',
        desc: '基于 WebComponent 容器 + iframe 沙箱',
        link: 'https://wujie-micro.github.io/doc/',
      },
      {
        icon: 'https://micro-zoe.github.io/micro-app/favicon.ico',
        title: 'MicroApp',
        desc: '一款简约、高效、功能强大的微前端框架',
        link: 'https://qwerty.fe-mm.com',
      },
    ],
  },
  {
    title: '跨平台',
    items: [
      {
        icon: 'https://storage.360buyimg.com/pubfree-bucket/taro-docs/f1fdc1a4a18/img/logo-taro.png',
        title: 'Taro',
        desc: '多端统一开发解决方案',
        link: 'https://taro-docs.jd.com/docs/',
      },
      {
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        title: 'uni-app',
        desc: '一个使用 Vue.js 开发所有前端应用的框架',
        link: 'https://uniapp.dcloud.net.cn',
      },
      {
        icon: 'https://mpxjs.cn/favicon.ico',
        title: 'Mpx',
        desc: '增强型跨端小程序框架',
        link: 'https://mpxjs.cn',
      },
      {
        icon: 'https://tauri.app/zh-cn/meta/favicon-96x96.png',
        title: 'Tauri',
        desc: '构建跨平台的快速、安全、前端隔离应用',
        link: 'https://tauri.app/zh-cn/',
      },
      {
        icon: 'https://www.electronjs.org/zh/assets/img/favicon.ico',
        title: 'Electron',
        desc: '使用JavaScript、HTML和CSS构建跨平台桌面应用程序',
        link: 'https://www.electronjs.org/zh/',
      }
    ],
  },
  {
    title: 'CSS 相关',
    items: [
      {
        icon: 'https://unocss.dev/favicon.svg',
        title: 'UnoCSS',
        desc: '即时按需原子CSS引擎',
        link: 'https://unocss.dev/',
      },
      {
        icon: 'https://qishaoxuan.github.io/css_tricks/images/favicon.png',
        title: 'CSS Tricks',
        desc: 'CSS 的新属性和一点奇技淫巧',
        link: 'https://qishaoxuan.github.io/css_tricks/',
      },
      {
        icon: 'https://lhammer.cn/You-need-to-know-css/static/favicon.ico',
        title: 'You-need-to-know-css',
        desc: 'Web开发者应该掌握的CSS tricks',
        link: 'https://lhammer.cn/You-need-to-know-css/#/zh-cn/',
      },
      {
        icon: 'https://postcss.org/assets/logo-tq8kLoG9.svg',
        title: 'PostCSS',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://postcss.org',
      },
      {
        icon: 'https://sass-lang.com/icon.png',
        title: 'Sass',
        desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        link: 'https://sass-lang.com',
      },
      {
        icon: 'https://less.nodejs.cn/public/ico/favicon.ico',
        title: 'Less',
        desc: '它是 CSS，只是多了一点东西',
        link: 'https://less.nodejs.cn/',
      },
      {
        icon: 'https://www.tailwindcss.cn/favicons/favicon.ico?v=3',
        title: 'TailwindCSS 中文网',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://www.tailwindcss.cn',
      },
      {
        icon: 'https://www.joshwcomeau.com/assets/favicon.png?v=4',
        title: 'Josh W Comeau',
        desc: '自定义渐变生成 css 代码',
        link: 'https://www.joshwcomeau.com/gradient-generator/',
      },
      {
        icon: 'https://animista.net/images/favicons/apple-touch-icon-72x72.png',
        title: 'Animista',
        desc: '常用 css 动效动画库',
        link: 'https://animista.net/play/basic',
      },
    ],
  },

  {
    title: 'Node 相关',
    items: [
      {
        icon: 'https://nodejs.org/static/images/favicons/favicon.png',
        title: 'Node.js',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.org/zh-cn',
      },
      {
        icon: 'https://docs.npmjs.com/icons/icon-72x72.png?v=c2963dcad859b2b320d26051c38197fe',
        title: 'npm',
        desc: 'JavaScript 包管理工具',
        link: 'https://docs.npmjs.com/about-npm',
      },
      {
        icon: 'https://pnpm.io/zh/img/favicon.png',
        title: 'pnpm',
        desc: '快速的，节省磁盘空间的包管理工具',
        link: 'https://pnpm.io/zh',
      },
      {
        icon: 'https://yarnpkg.com/img/yarn-favicon.svg',
        title: 'yarn',
        desc: '安全、稳定、可重复的项目',
        link: 'https://yarnpkg.com/getting-started',
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'Express',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        link: 'https://expressjs.com',
      },
      {
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'Egg',
        desc: '为企业级框架和应用而生',
        link: 'https://www.eggjs.org/zh-CN',
      },
      {
        icon: 'https://fastify.dev/img/favicon.ico',
        title: 'Fastify',
        desc: '快速、低开销的 Web 框架，适用于Node.js',
        link: 'https://fastify.dev/docs/latest/',
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js 中文文档',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://docs.nestjs.cn',
        tag: 'MVC'
      },
    ],
  },
  {
    title: '可视化',
    items: [
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html',
        tag: '主流'
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7svFR6wkPMoAAAAAAAAAAAAADmJ7AQ/original',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        link: 'https://antv.vision/zh/',
      },
      {
        icon: 'https://d3js.org/logo.png',
        title: 'D3.js',
        desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
        link: 'https://d3js.org',
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        desc: '一个简单而灵活的 JavaScript 图表库',
        link: 'https://www.chartjs.org',
      },
      {
        icon: 'https://threejs.org/files/favicon.ico',
        title: 'Three.js',
        desc: 'JavaScript 3d 库',
        link: 'https://threejs.org',
      },
      {
        icon: 'http://datav.jiaminghi.com/favicon.ico',
        title: 'DataV',
        desc: 'Vue 大屏数据展示组件库',
        link: 'http://datav.jiaminghi.com/',
      },
    ],
  },
  {
    title: '编译&构建&打包',
    items: [
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack 中文网',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://www.webpackjs.com',
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite 中文文档',
        desc: '下一代前端工具链',
        link: 'https://cn.vitejs.dev',
        tag: 'Hot'
      },
      {
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'Rollup',
        desc: 'Rollup 是一个 JavaScript 模块打包器',
        link: 'https://www.rollupjs.com',
      },
      {
        icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
        title: 'Turbo',
        desc: 'Turbo是一个增量打包器和构建系统，针对JavaScript和TypeScript进行了优化，用Rust编写',
        link: 'https://turbo.build',
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn',
      },
      {
        icon: 'https://esbuild.github.io/favicon.svg',
        title: 'esbuild',
        desc: '一个速度极快的网络打包器',
        link: 'https://esbuild.github.io',
      },
      {
        icon: 'https://swc.rs/favicon/apple-touch-icon.png',
        title: 'SWC',
        desc: '基于Rust的Web平台',
        link: 'https://swc.rs',
      },
    ],
  },
  {
    title: '站点生成器',
    items: [
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://astro.build',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.dev',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org',
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: 'https://docusaurus.io/zh-CN',
      },
    ],
  },
  {
    title: '图标库',
    items: [
      {
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        title: 'iconfont',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://www.iconfont.cn',
      },
      {
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        title: 'IconPark 图标库',
        desc: '丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://iconpark.oceanengine.com/official',
      },
      {
        icon: 'https://remixicon.com/favicon.ico',
        title: 'Remix Icon',
        desc: '简单令人愉快的图标系统',
        link: 'https://remixicon.com/',
      },
      {
        icon: 'https://iconify.design/apple-touch-icon.png',
        title: 'Iconify',
        desc: '所有流行的图标集，一个框架',
        link: 'https://iconify.design/',
        tag: 'Anthony Fu'
      },
      {
        icon: 'https://icones.js.org/android-chrome-192x192.png',
        title: 'Icônes',
        desc: '基于 Iconify 的图标浏览器',
        link: 'https://icones.js.org/',
      },
      {
        icon: 'https://simpleicons.org/images/favicon.png',
        title: 'Simple Icons',
        desc: 'N 个流行品牌的免费 SVG 图标',
        link: 'https://simpleicons.org/',
        tag: 'Brand'
      },
      {
        icon: 'https://unicornicons.com/favicon/apple-icon-57x57.png',
        title: 'Animated icons',
        desc: '免费用于个人和商业用途的动效 icon',
        link: 'https://unicornicons.com/icons',
        tag: 'Animation'
      },
      {
        icon: 'https://emoji.muan.co/appicon.png',
        title: 'Emoji searcher',
        desc: 'Emoji 表情大全',
        link: 'https://emoji.muan.co/',
      },
      {
        icon: 'https://gitmoji.dev/static/apple-icon-57x57.png',
        title: 'Gitmoji',
        desc: '表情符号指南，用于提交消息',
        link: 'https://gitmoji.dev/',
      },
    ],
  },
  {
    title: '社区',
    items: [
      {
        title: 'Github',
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com',
        tag: 'Hot'
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com',
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn',
      },
      {
        title: 'V2EX',
        icon: 'https://www.v2ex.com/static/icon-192.png',
        desc: '一个关于分享和探索的地方',
        link: 'https://www.v2ex.com',
      },
      {
        title: 'SegmentFault 思否',
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com',
      },
      {
        title: '知乎',
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://juejin.cn',
      },
    ],
  },
  {
    title: '摸鱼专用',
    items: [
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: '摸摸鱼热榜',
        link: 'https://momoyu.cc',
      },
      {
        icon: 'https://static.hdslb.com/mobile/img/512.png',
        title: '哔哩哔哩',
        link: 'https://www.bilibili.com',
        tag: 'YYDS'
      },
      {
        icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
        title: 'YouTube',
        link: 'https://www.youtube.com',
      },
    ],
  },
]
