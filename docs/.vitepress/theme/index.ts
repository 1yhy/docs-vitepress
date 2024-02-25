import { h, watch } from 'vue'
import { useData, EnhanceAppContext } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { SentryPlugin, VueIntegration } from '@yhy2001/sentry-plugin';

import { createMediumZoomProvider } from './composables/useMediumZoom'

import MLayout from './components/MLayout.vue'
import MNavLinks from './components/MNavLinks.vue'

import './styles/index.scss'

let homePageStyle: HTMLStyleElement | undefined

// 添加vercel数据分析和性能分析
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();
inject()

export default {
  extends: DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    /**
     * 相关插槽
     * https://vitepress.dev/guide/extending-default-theme#layout-slots
     * https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
     */
    return h(MLayout, props)
  },
  enhanceApp({ app, router }: EnhanceAppContext) {
    createMediumZoomProvider(app, router)

    app.component('MNavLinks', MNavLinks)

    app.provide('DEV', process.env.NODE_ENV === 'development')

    if (typeof window !== 'undefined') {
      watch(
        () => router.route.data.relativePath,
        () =>
          updateHomePageStyle(
            location.pathname === '/',
          ),
        { immediate: true },
      )
    }

    SentryPlugin
    .init({
        dsn: 'https://28f76c767db1b82bba2903d8b72df524@o4506805676015616.ingest.sentry.io/4506806335176704',
        release: '1.0.0',
     }, new VueIntegration(app, router))
    .setUser({id: 1, name: '222'});
  },
}

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome')) {
    document.documentElement.classList.add('browser-chrome')
  } else if (browser.includes('firefox')) {
    document.documentElement.classList.add('browser-firefox')
  } else if (browser.includes('safari')) {
    document.documentElement.classList.add('browser-safari')
  }
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle) return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  } else {
    if (!homePageStyle) return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}
