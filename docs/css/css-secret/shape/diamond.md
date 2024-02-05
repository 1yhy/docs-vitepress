# 菱形图片

## Q: 菱形中添加图片

## 基于transform的方案
```html
<div class="picture">
  <img class="diamond-inner" src="" />
</div>
```

```css
.picture {
  width: 200px;
  overflow: hidden;
  transform: rotate(45deg);
}

.diamond-inner {
  max-width: 100%;
  transform: rotate(-45deg) scale(1.42);
}
```




```vue preview
<template>
<div class="picture">
  <img class="diamond-inner" src="/assets/img/css-secret/css-bg.webp"/>
</div>
</template>
<style scoped>
.picture {
  width: 200px;
  height: 200px;
  margin: 50px;
  overflow: hidden;
  transform: rotate(45deg);
}

.diamond-inner {
  max-width: 100%;
  height: 100%;
  transform: rotate(-45deg) scale(1.42);
}
</style>
```
:::

## 裁切路径方案（兼容性一般）
```CSS
clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
```



```vue preview
<template>
<div class="picture"></div>
</template>
<style scoped>
.picture {
    width: 200px;
    height: 200px;
    background: url(/assets/img/css-secret/css-bg.webp) no-repeat center/cover;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
</style>
```
:::
