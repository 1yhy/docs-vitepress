# VitePress 集成 Giscus 评论

## 为什么选择 Giscus

有各种各样的外部评论提供者可以与 VitePress 集成，例如 Disqus、Gitalk、Utterances、Giscus。然而，我推荐使用 Giscus，因为它具有更优越的特性。让我们与其他提供者进行比较。

| 提供者                                     | 托管位置      | 适应背景色 | 样式设计 |
| ------------------------------------------ | ------------- | ---------- | -------- |
| [Disqus](https://disqus.com/)              | Disqus 服务器 | ❌         | 好       |
| [Gitalk](https://github.com/gitalk/gitalk) | Github Issues | ✅         | 中等     |
| [Utterances](https://utteranc.es/)         | Github Issues | ❌         | 中等     |
| [Giscus](https://giscus.app/)              | Github 讨论   | ✅         | 好       |

如表所示，Disqus 和 Utterances 不适应背景颜色。Gitalk 使用 Github Issues 作为托管位置，但 Giscus 利用 Github 讨论，是更好的选择。它防止评论与实际项目错误报告混淆，减少不必要的干扰。此外，与 Gitalk 相比，Giscus 有更好的样式设计。

总之，Giscus 是与 VitePress 集成的最佳选择。现在，让我们深入了解具体细节。

## 实施步骤

### 获取 Github 仓库参数

首先，按照 [Giscus](https://giscus.app/) 上的说明安装 Giscus Github 应用并获取关键参数：data-repo、data-repo-id、data-category 和 data-category-id。

### 编码

接下来，创建一个新的 components/comments.vue 组件，并配置您的 Layout.vue 和 index.ts 文件。这是代码：

::: code-group

```vue[components/Comments.vue]
<script setup lang="ts">
import { useData } from 'vitepress'
const { title } = useData()
</script>
<template>
 <div :key="title" class="giscus">
 <component
  :is="'script'"
  src="https://giscus.app/client.js"
  data-repo=" .......... "
  data-repo-id=" .......... "
  data-category=" .......... "
  data-category-id=" .......... "
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="top"
  data-lang="en"
  data-theme="transparent_dark"
  data-loading="lazy"
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
```

```vue[components/Layout.vue]
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

import Comments from './Comments.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-after>
      <Comments />
    </template>
  </Layout>
</template>
```

:::

使用 VitePress 内置的 Layout 插槽将 Giscus 评论部分注入所有文档布局页面下方。这是一个好的起点。

### 适应系统暗黑和白天主题色

```vue
<script setup lang="ts">
import { useData } from 'vitepress'
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
  <div :key="title" class="giscus">
    <component :is="'script'" src="https://giscus.app/client.js" ... :data-theme="isDark ?
    'dark_dimmed' : 'light_tritanopia'" // [!code ++] data-loading="lazy" async />
  </div>
</template>
```

监听 VitePress 主题模式改变修改相应的主题，它适应背景颜色变化。

:::tip
需要注意几点：

Vue 不能在模板中直接使用 `<script />` 标签，所以我们使用 `<component /> `来模拟 `<script />` 标签。
:key 属性是必需的；否则，由于 Vue 的组件可重用策略，您可能会遇到页面路由更改时评论部分不重新加载的问题。
`<div class="giscus" /> `用于 Giscus 正确定位评论部分。这确保了当 :key 更改时，DOM 中的 Giscus 评论部分正确更新。
:key 属性不应该放在 `<component /> `上，因为 `<script />` 标签不代表与 Giscus 评论部分相对应的实际 DOM。将 :key 放在 `<script />` 标签上是没有意义的。
:::

在特定页面上移除 Giscus 即使您可以锁定讨论以禁用评论，为了更好的页面设计，您可能希望在某些页面上完全隐藏 Giscus 评论部分。
为此，在特定页面中引入 frontmatter：

```markdown
---
comments: false
---
```

然后，按照以下方式修改现有代码：

```javascript
<script setup lang="ts">
import { useData } from 'vitepress'
const { frontmatter, title } = useData()
</script>
<template>
 <div v-if="frontmatter.comments !== false" :key="title" class="giscus">
 <component ...... ...... />
 </div>
</template>
```

出于前面讨论的相同原因，不要在 `<component />` 上放置 v-if；它不会起作用。
