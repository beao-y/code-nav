---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
pageClass: home-layout

hero:
  name: Beao Blog
  text: 一不小心落入代码的黑洞，救救我👾
  tagline: 程序猿的尽头究竟是骑手还是保安， 取决于我学的快不快。其实我想考公务员！！！
  image:
    src: /bg_home.png
    alt: 代码黑洞
  actions:
    - theme: brand
      text: 开始阅读 →
      link: /nav
    - theme: alt
      text: 跟我一起来"卷饼"
      link: https://search.bilibili.com/all?keyword=%E7%85%8E%E9%A5%BC&from_source=webtop_search&spm_id_from=333.1007&search_source=5

features:
  - icon: 📖
    title: 编程宝典
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: https://notes.fe-mm.com/fe/javascript/types
    linkText: 基础知识
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: https://notes.fe-mm.com/analysis/utils/only-allow
    linkText: 源码阅读
  - icon: 💡
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: https://notes.fe-mm.com/workflow/utils/library
    linkText: 常用工具库
  - icon: ⚡️
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: https://notes.fe-mm.com/efficiency/online-tools
    linkText: 提效工具
  - icon: 🤡
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: https://notes.fe-mm.com/pit/npm
    linkText: 踩坑记录
  - icon: 🙋‍♂
    title: 斜杠老 Baby。
    details: '<small class="bottom-small">Beao 的随手笔记</small>'
    link: https://notes.fe-mm.com/mao
---

<style>
/*爱的魔力转圈圈*/
.home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.home-layout .details small {
  opacity: 0.8;
}

.home-layout .bottom-small {
  display: block;
  margin-top: 4em;
  text-align: right;
}
</style>
