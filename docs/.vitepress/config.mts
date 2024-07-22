import { defineConfig } from 'vitepress'
import { head, nav, sidebar } from './configs'
import { basename } from 'node:path'

import UnoCSS from 'unocss/vite'
import {presetAttributify, presetIcons, presetUno} from 'unocss'

const APP_BASE_URL = basename(process.env.GITHUB_REPOSITORY || '')
export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_URL ? `/${APP_BASE_URL}/` : '/',

  lang: 'zh-CN',
  title: "Beao Blog",
  description: "Beao 的编程宝典，记录了开发日常知识碎片，包括常用工具、各大框架的使用等",
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Beao Blog',
    nav,
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    footer: {
      message: '来自 Beao 的随手笔记',
      copyright: 'Copyright © 2019-present beao',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
  },

  vite:{
    plugins:[
      UnoCSS({
        presets: [presetUno(), presetAttributify(), presetIcons()],
      }),
    ]
  }
})
