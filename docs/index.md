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
  - icon: 🙈
    title: 面试宝典
    details: 整理常用基础知识点<small>（八股文）</small><br />只要八股文背的好，面试随便找
    link: /nav
    linkText: 基础知识
  - icon: 🔩
    title: 技术知识
    details: 开发中的重点知识<br />简单易学、实用重要、可灵活复用
    link: /nav
    linkText: 知识碎片
  - icon: 📝
    title: 随手笔记
    details: 好记性不如烂笔头<small>（CV 大法）</small><br />日常工作中的碎片化知识
    link: /daily
    linkText: 日常笔记
  - icon: ⚡️
    title: 常用工具
    details: 工欲善其事，必先利其器<br />记录所用到的软件、插件、扩展等使用方法
    link: /tools/工具安装与配置/Docker配置
    linkText: 常用工具
  - icon: 🤡
    title: 大脑燃烧机
    details: 常在河边走，哪有不湿鞋<br/>修不完的 BUG，踩不完的坑，Salute！！！
    link: /daily
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
