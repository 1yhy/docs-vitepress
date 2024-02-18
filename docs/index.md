---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 前端探索
  text: 探索技术，创造未来。
  tagline: 在数字世界中找寻答案。
  image:
    src: /assets/books.gif
    alt: Docs
  actions:
    - text: Start Exploring
      link: /uniapp/app/start/create-app-project
    - text: 前端导航
      link: /nav/
    - text: View on GitHub
      link: https://github.com/1yhy
features:
  - icon: 📖
    title: CSS
    details: 整理《CSS揭秘》中常用CSS写法<br />
    link: /css/css-secret/
    linkText: CSS揭秘
  - icon: 📘
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: /source-code
    linkText: 源码阅读
  - icon: 💡
    title: 前端导航
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: /nav/
    linkText: 常用工具库
  - icon: 🧰
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: /tools/chrome/
    linkText: 提效工具
  - icon: 🐞
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: /
    linkText: 踩坑记录
  - icon: 💯
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">正在路上...</small>'
    link: /
---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
