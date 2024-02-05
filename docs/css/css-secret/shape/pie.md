# 饼图

## Q: CSS实现饼图的效果

## 基于transform的解决方案


```vue preview
<template>
<div class="pie"></div>
</template>
<style scoped>
.pie {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: yellowgreen;
  background-image: linear-gradient(to right, transparent 50%, var(--demo-yellow) 0);
}

.pie::before {
    content: '';
    display: block;
    margin-left: 50%;
    height: 100%;
    background-color: inherit;
    border-radius: 0 100% 100% 0 / 50%;
    transform-origin: left;
    transform: rotate(.1turn);
}
</style>
```
:::

- **添加动画**



```vue preview
<template>
<div class="pie"></div>
</template>
<style scoped>
.pie {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: yellowgreen;
  background-image: linear-gradient(to right, transparent 50%, var(--demo-yellow) 0);
}

.pie::before {
    content: '';
    display: block;
    margin-left: 50%;
    height: 100%;
    background-color: inherit;
    border-radius: 0 100% 100% 0 / 50%;
    transform-origin: left;
    transform: rotate(.1turn);
}

.pie::before {
    animation: spin 3s linear infinite,
    bg 6s step-end infinite;
}

@keyframes spin {
    to { transform: rotate(.5turn); }
}

@keyframes bg {
    50% { background-color: var(--demo-yellow); }
}
</style>
```
:::

- 显示不同比例的饼图
```html
<div class="pie" style="animation-delay: -20s">
</div>

<div class="pie" style="animation-delay: -60s">
</div>
```

```css
.pie::before {
    animation: spin 50s linear infinite,
    bg 100s step-end infinite;
    animation-play-state: paused;
    animation-delay: inherit;
}
```


```js
$('.pie').each(function (i) {
    var p = parseFloat($(this).textContent);
    $(this).style.animationDelay = -p + 's';
});
```

## svg解决方案
```html
<svg viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="16" fill="yellowgreen" />
</svg>
```

```css
circle {
    fill: yellowgreen;
    stroke: var(--demo-yellow);
    stroke-width: 32;
    stroke-dasharray: 38 100; /* 2 * Math.PI * 16 = 100 第二个值为间隙长度，设为圆周则看不到间隙效果 */
}

svg {
    width: 100px;
    height: 100px;
    transform: rotate(-90deg);
    background: yellowgreen;
    border-radius: 50%;
}
```



```vue preview
<template>
<div>
    <svg viewBox="0 0 32 32">
    <circle cx="16" cy="16" r="16" fill="yellowgreen" />
</svg>
</div>
</template>
<style scoped>
circle {
    fill: yellowgreen;
    stroke: var(--demo-yellow);
    stroke-width: 32;
    stroke-dasharray: 38 100; /* 2 * Math.PI * 16 = 100 第二个值为间隙长度，设为圆周则看不到间隙效果 */
}

svg {
    width: 100px;
    height: 100px;
    transform: rotate(-90deg);
    background: yellowgreen;
    border-radius: 50%;
}
</style>
```
:::

- **svg动画**
```css{1-3,9,10}
@keyframe fillup {
    to { stroke-dasharray : 158 158; }
}

circle {
    fill: yellowgreen;
    stroke: var(--demo-yellow);
    stroke-width: 50;
    stroke-dasharray: 0 158;
    animation: fillup 5s linear infinite;
}
```

## 圆锥渐变方案(兼容性一般)
```css{10}
.pie {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: conic-gradient(var(--demo-yellow) 40%,yellowgreen 0);
}
/* 动态修改比例 */
.pie {
    ...
    background: conic-gradient(var(--demo-yellow) attr(data-value) %,yellowgreen 0);
}
```



```vue preview
<template>
<div class="pie"></div>
</template>
<style scoped>
.pie {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: conic-gradient(var(--demo-yellow) 40%,yellowgreen 0);
}
</style>
```
:::
