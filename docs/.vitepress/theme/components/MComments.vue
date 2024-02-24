<!-- vitepress添加giscus评论 https://aiktb.dev/blog/giscus-with-vitepress -->
<script setup lang="ts">
import { useData } from 'vitepress'
import { watch } from 'vue'

const { title, frontmatter, isDark } = useData()
watch(
  () => isDark.value,
  (newval) => {
    // 根据VitePress的新主题设置Giscus的主题

    const giscusTheme = newval ? 'dark_dimmed' : 'light_tritanopia'

    // 获取Giscus的iframe
    const giscusIframe = document.querySelector('iframe.giscus-frame')

    // 会重载 iframe
    // if (giscusIframe) {
    //   // 更新Giscus iframe的src属性来切换主题
    //   giscusIframe.src = giscusIframe.src.replace(/theme=.*?&/, `theme=${giscusTheme}&`);
    // }

    // 不重载 iframe
    if (giscusIframe && giscusIframe.contentWindow) {
      // 使用 postMessage 向 Giscus iframe 发送消息来切换主题
      giscusIframe.contentWindow.postMessage(
        {
          giscus: {
            setConfig: {
              theme: giscusTheme,
            },
          },
        },
        'https://giscus.app',
      )
    }
  },
)
</script>

<template>
  <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
    <component
      :is="'script'"
      src="https://giscus.app/client.js"
      data-repo="1yhy/docs-vitepress"
      data-repo-id="R_kgDOLOReUw"
      data-category="Q&A"
      data-category-id="DIC_kwDOLOReU84Cdemc"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="1"
      data-input-position="top"
      :data-theme="isDark ? 'dark_dimmed' : 'light_tritanopia'"
      data-lang="zh-CN"
      data-loading="lazy"
      crossorigin="anonymous"
      async
    />
  </div>
</template>
<style>
.giscus {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
}
</style>
