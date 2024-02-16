# 三角形

## Q: CSS 实现三角形、三角形圆角、三角形渐变色

### 普通三角形

```vue preview
<template>
  <div class="base-flex">
    <div class="triangle triangle-top"></div>
    <div class="triangle triangle-bottom"></div>
    <div class="triangle triangle-right"></div>
    <div class="triangle triangle-left"></div>
  </div>
</template>
<style scoped>
.triangle {
  margin: 20px;
}

.triangle-top {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent var(--demo-blue) transparent;
}

.triangle-bottom {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: var(--demo-blue) transparent transparent transparent;
}

.triangle-right {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent var(--demo-blue) transparent transparent;
}

.triangle-left {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent transparent var(--demo-blue);
}
</style>
```

```vue preview
<template>
  <div class="base-flex">
    <div class="triangle triangle-top-left"></div>
    <div class="triangle triangle-bottom-left"></div>
    <div class="triangle triangle-top-right"></div>
    <div class="triangle triangle-bottom-right"></div>
  </div>
</template>
<style scoped>
.triangle {
  margin: 20px;
}

.triangle-top-left {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent var(--demo-blue) var(--demo-blue) transparent;
}

.triangle-bottom-left {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: var(--demo-blue) var(--demo-blue) transparent transparent;
}

.triangle-top-right {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent var(--demo-blue) var(--demo-blue);
}

.triangle-bottom-right {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: var(--demo-blue) transparent transparent var(--demo-blue);
}
</style>
```

### svg 实现

```vue preview
<template>
  <div class="base-flex">
    <svg class="triangle-svg" width="40" height="40">
      <polygon points="20,0 40,40 0,40" style="fill:var(--demo-blue)"></polygon>
    </svg>
    <svg class="triangle-svg" width="40" height="40">
      <polygon
        points="20,0 40,40 0,40"
        style="fill:var(--demo-blue)"
        transform="rotate(90 20 20)"
      ></polygon>
    </svg>
    <svg class="triangle-svg" width="40" height="40">
      <polygon
        points="20,0 40,40 0,40"
        style="fill:var(--demo-blue)"
        transform="rotate(180 20 20)"
      ></polygon>
    </svg>
    <svg class="triangle-svg" width="40" height="40">
      <polygon
        points="20,0 40,40 0,40"
        style="fill:var(--demo-blue)"
        transform="rotate(270 20 20)"
      ></polygon>
    </svg>
  </div>
</template>
<style scoped>
.triangle-svg {
  margin: 20px;
}
</style>
```

### 圆角三角形

**参考：** https://www.cnblogs.com/coco1s/p/15009605.html

```vue preview
<template>
  <div class="base-flex">
    <!-- 第一种 svg -->
    <svg width="60" height="60" viewBox="-20 -20 80 80">
      <polygon
        class="triangle-svg"
        stroke-linejoin="round"
        points="20,0 40,40 0,40"
        style="fill:var(--demo-blue)"
      ></polygon>
    </svg>
    <!-- 第二种 三个圆角菱形拼接 -->
    <div class="triangle-join"></div>
  </div>
</template>
<style scoped>
/* 第一种 svg */
.triangle-svg {
  stroke: var(--demo-blue);
  stroke-width: 5;
}

/* 第二种方案： CSS */
.triangle-join {
  position: relative;
  background: var(--demo-blue);
}

.triangle-join::before,
.triangle-join::after {
  content: '';
  position: absolute;
  background: inherit;
}

.triangle-join,
.triangle-join::before,
.triangle-join::after {
  width: 1.2em;
  height: 1.2em;
  border-top-right-radius: 20%;
}

.triangle-join {
  transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);
}

.triangle-join::before {
  transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);
}

.triangle-join::after {
  transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);
}
/* 第二种方案： CSS */
</style>
```

### 渐变色圆角三角形

```vue preview
<template>
  <div class="triangle"></div>
</template>
<style scoped>
.triangle {
  position: relative;
  width: 2em;
  height: 2em;
  transform: rotate(30deg) skewY(30deg) scaleX(0.866);
  border-radius: 20%;
  overflow: hidden;
}

.triangle::before,
.triangle::after {
  content: '';
  position: absolute;
  width: 2em;
  height: 2em;
}
.triangle::before {
  border-radius: 20% 20% 20% 55%;
  transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%) skewX(30deg) scaleY(
      0.866
    )
    translateX(-24%);
}
.triangle::after {
  border-radius: 20% 20% 55% 20%;
  transform: scaleX(1.155) skewY(-30deg) rotate(-30deg) translateY(-42.3%) skewX(-30deg) scaleY(
      0.866
    )
    translateX(24%);
}

.triangle::before,
.triangle::after {
  background: linear-gradient(var(--demo-blue), var(--demo-green));
}
</style>
```

### 一个顶角圆角

```vue preview
<template>
  <div class="triangle"></div>
</template>
<style scoped>
.triangle {
  width: 0;
  height: 0;
  border-left: 40px solid blue;
  border-top: 20px solid red;
  border-right: 20px solid transparent;
  border-bottom: 40px solid transparent;
  border-top-left-radius: 5px;
  transform: rotate(45deg);
}
</style>
```
