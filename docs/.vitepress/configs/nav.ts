import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/' },
  { text: '导航页', link: '/nav/' },
  {
    text: '前端', items: [
      { text: 'Uniapp', link: '/uniapp/app/start/create-app-project' },
      { text: 'Vue', link: '/vue/' },
      { text: 'CSS', link: '/css/grid' },
      { text: 'Flutter', link: '/flutter/app/start/splash-and-appIcon' },
      // { text: 'sentry', link: '/sentry/index'},
    ]
  },
  {
    text: '后端', items: [
      { text: 'Java', link: '/java/' },
    ]
  },
  {
    text: '提效工具', items: [
      { text: '实用软件', link: '/tools/soft' },
      { text: '浏览器插件', link: '/tools/chrome/' },
      { text: 'Vscode插件', link: '/tools/vscode/' },
      { text: 'Typora配置图床', link: '/tools/typora/' }
    ]
  },
  {
    text: '前端基建', items: [
      { text: 'C2D2C系列', link: '/base/C2D2C/relative' },
      { text: '监控系列', link: '/base/Monitor/relative' }
    ]
  },
  {
    text: '其他',
    items: [
      { text: 'Git', link: '/other/git/command' },
      { text: 'Linux', link: '/other/linux/start' },
      { text: 'Vscode', link: '/other/vscode/index' },
      { text: 'cli', link: '/other/cli/alias' },
      { text: 'scrcpy', link: '/other/scrcpy/quick-start' },
    ]
  }
]
