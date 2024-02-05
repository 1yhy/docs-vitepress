import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: 'Home', link: '/' },
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
    text: '其他',
    items: [
      { text: 'Git', link: '/git/command' },
      { text: 'Linux', link: '/linux/start' },
      { text: 'Vscode', link: '/vscode/index' },
      { text: 'scrcpy', link: '/scrcpy/quick-start' },
      { text: '前端导航', link: '/nav/' },
    ]
  }
]
