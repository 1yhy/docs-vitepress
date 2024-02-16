# 梯形 tab 栏

## Q: 如何实现一个完美的梯形标签 Tab

## 梯形 CSS 实现

```css
.tab {
  position: relative;
  display: inline-block;
  padding: 0.5em 1em 0.35em;
  color: #fff;
}

.tab::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #a5d8ff;
  z-index: -1;
  /* 透视之后高度缩小，使用scaleY放大到和之前差不多尺寸*/
  transform: scaleY(1.3) perspective(0.5em) rotateX(5deg);
  transform-origin: bottom; /* 固定底部 */
}
```

```vue preview
<template>
  <div class="tab">TRAPEZOID</div>
</template>
<style scoped>
.tab {
  position: relative;
  display: inline-block;
  padding: 0.5em 1em 0.35em;
  color: #fff;
}

.tab::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #a5d8ff;
  z-index: -1;
  /* 透视之后高度缩小，使用scaleY放大到和之前差不多尺寸*/
  transform: scaleY(1.3) perspective(0.5em) rotateX(5deg);
  transform-origin: bottom; /* 固定底部 */
}
</style>
```

## 梯形 tab 栏

```css
.nav {
  background: #fff;
}
.nav > a {
  position: relative;
  display: inline-block;
  padding: 0.3em 1em 0;
}

.nav > a.active::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(hsla(0, 0%, 100%, 0.6), hsla(0, 0%, 100%, 0));
  z-index: -1;
  border-bottom: none;
  border-radius: 0.5em 0.5em 0 0;
  transform: scaleY(1.3) perspective(0.5em) rotateX(5deg);
  transform-origin: bottom;
}
```

```vue preview
<template>
  <div class="nav">
    <a href="javascript:;">ellipse</a>
    <a class="active" href="javascript:;">trapezoid</a>
    <a href="javascript:;">triangle</a>
    <a href="javascript:;">bevel</a>
    <a href="javascript:;">diamond</a>
  </div>
</template>
<style scoped>
.nav {
  background: var(--demo-yellow);
}

.nav > a {
  position: relative;
  display: inline-block;
  padding: 0.3em 1em 0;
  z-index: 1;
}

.nav > a.active::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(var(--demo-blue), var(--demo-blue));
  z-index: -1;
  border-bottom: none;
  border-radius: 0.5em 0.5em 0 0;
  transform: scaleY(1.3) perspective(0.5em) rotateX(5deg);
  transform-origin: bottom;
}
</style>
```

## 梯形标签页最终方案

上面的标签页还是不够完美，左下角和右下角没有很平滑的圆角效果，这也是最难实现梯形标签页的地方

- **反圆角参考文章**：https://juejin.cn/post/7224311569777934392
- **曲线反圆角参考文章**：https://juejin.cn/post/7230737419842633788

### 实现 Chrome 标签页的圆角

```vue preview
<template>
  <div class="tab-list">
    <div
      v-for="tab in tabList"
      :key="tab.id"
      class="tab-item"
      :class="activeTab === tab.id ? 'tab-selected' : ''"
      @click="onTab(tab.id)"
    >
      <div>{{ tab.label }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const activeTab = ref(1)
const tabList = ref([
  { id: 1, label: 'Tab 1' },
  { id: 2, label: 'Tab 2' },
  { id: 3, label: 'Tab 3' },
  { id: 4, label: 'Tab 4' },
  { id: 5, label: 'Tab 5' },
])
const onTab = (id) => {
  activeTab.value = id
}
</script>
<style scoped>
.tab-list {
  display: flex;
  border-radius: 12px 12px 0 0;
  background-color: var(--demo-yellow);
  overflow: hidden;
}

.tab-item {
  flex: 1;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  position: relative;
}

.tab-selected {
  background: var(--demo-blue);
  border-radius: 12px 12px 0 0;
  box-shadow: 12px 12px 0 0 var(--demo-blue), -12px 12px 0 0 var(--demo-blue);
}

.tab-selected::before {
  content: '';
  position: absolute;
  left: -12px;
  bottom: 0;
  width: 12px;
  height: 52px;
  background: var(--demo-yellow);
  border-radius: 0 0 12px 0;
}
.tab-selected::after {
  content: '';
  position: absolute;
  right: -12px;
  bottom: 0;
  width: 12px;
  height: 52px;
  background: var(--demo-yellow);
  border-radius: 0 0 0 12px;
}
</style>
```

### 实现斜向 Tab 标签页的反圆角

```vue preview
<template>
  <div class="tab-list">
    <div
      v-for="tab in tabList"
      :key="tab.id"
      class="tab-item"
      :class="activeTab === tab.id ? 'tab-selected' : 'not-selected'"
      @click="onTab(tab.id)"
    >
      <div>{{ tab.label }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const activeTab = ref(2)
const tabList = ref([
  { id: 1, label: 'Tab 1' },
  { id: 2, label: 'Tab 2' },
  { id: 3, label: 'Tab 3' },
  { id: 4, label: 'Tab 4' },
  { id: 5, label: 'Tab 5' },
])
const onTab = (id) => {
  activeTab.value = id
}
</script>
<style scoped>
.tab-list {
  display: flex;
  border-radius: 12px 12px 0 0;
  background-color: var(--demo-yellow);
  overflow: hidden;
}

.tab-item {
  flex: 1;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  position: relative;
}

.tab-selected {
  background: var(--demo-blue);
  border-radius: 12px 12px 0 0;
  box-shadow: 24px 40px 0 var(--demo-blue), -24px 40px 0 0 var(--demo-blue);
}

.tab-selected::before {
  content: '';
  position: absolute;
  left: -6px;
  bottom: 0;
  width: 12px;
  height: 52px;
  background-color: var(--demo-blue);
  transform: skewX(-15deg);
  border-top-left-radius: 12px;
}

.tab-selected::after {
  content: '';
  position: absolute;
  right: -6px;
  bottom: 0;
  width: 12px;
  height: 52px;
  background-color: var(--demo-blue);
  transform: skewX(15deg);
  border-top-right-radius: 12px;
}

.not-selected::before {
  content: '';
  position: absolute;
  left: 6px;
  bottom: 0;
  width: 12px;
  height: 52px;
  border-bottom-left-radius: 12px;
  background-color: var(--demo-yellow);
  transform: skewX(15deg);
  z-index: 1;
}
.not-selected::after {
  content: '';
  position: absolute;
  right: 6px;
  bottom: 0;
  width: 12px;
  height: 52px;
  border-bottom-right-radius: 12px;
  background-color: var(--demo-yellow);
  transform: skewX(-15deg);
  z-index: 1;
}
</style>
```
