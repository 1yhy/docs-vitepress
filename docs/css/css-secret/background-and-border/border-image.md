# 连续的图像边框

## Q: 只把图片应用于边框，而不是背景
![图像边框](/assets/img/css-secret/border-image.svg)

## 两层div实现


```vue preview
<template>
<div class="border-image">
  <div class="border-image__inner">
    <p>这是一段文字</p>
  </div>
</div>
</template>
<style scoped>
.border-image {
  width: 200px;
  height: 200px;
  padding: 1em;
  background: url(/assets/img/css-secret/css-bg.webp);
  background-size: cover;
}

.border-image__inner {
  width: 100%;
  height: 100%;
  padding: 1em;
  background: white;
}
</style>
```
:::

## 一层div实现
```CSS
padding: 1em;
border: 1em solid transparent;
background: linear-gradient(white, white), url(/assets/img/css-secret/css-bg.webp);
background-size: cover;
background-clip: padding-box, border-box;
background-origin: border-box;
```
**简化写法**
```CSS
padding: 1em;
border: 1em solid transparent;
background: linear-gradient(white, white) padding-box, url(/assets/img/css-secret/css-bg.webp) border-box 0 0 /cover;
```



```vue preview
<template>
<div class="border-image">
</div>
</template>
<style scoped>
.border-image {
  width: 200px;
  height: 200px;
  padding: 1em;
  border: 1em solid transparent;
  background: linear-gradient(white, white) padding-box, url(/assets/img/css-secret/css-bg.webp) border-box 0 0 /cover;
}
</style>
```
:::

## 老式信封边框

#### **background实现老式信封边框**
```CSS
padding: 1em;
border: 1em solid transparent;
background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, #a5d8ff 0, #a5d8ff 37.5%, transparent 0, transparent 50%) 0/5em 5em;
```


```vue preview
<template>
<div class="border-image">
</div>
</template>
<style scoped>
.border-image {
  width: 200px;
  height: 200px;
  padding: 1em;
  border: 1em solid transparent;
  background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 0, transparent 25%, #a5d8ff 0, #a5d8ff 37.5%, transparent 0, transparent 50%) 0/5em 5em;
}
</style>
```
:::

#### **border-image实现老式信封边框**
```CSS{2，3}
padding: 1em;
border: 16px solid transparent; /* 注意这里使用的是px */
border-image: 16 repeating-linear-gradient(-45deg, red 0, red 1em, transparent 0, transparent 2em, #a5d8ff 0, #a5d8ff 3em, transparent 0, transparent 4em);
```



```vue preview
<template>
<div class="border-image">
</div>
</template>
<style scoped>
.border-image {
  width: 200px;
  height: 200px;
  padding: 1em;
  border: 16px solid transparent; /* 注意这里使用的是px */
  border-image: 16 repeating-linear-gradient(-45deg, red 0, red 1em, transparent 0, transparent 2em, #a5d8ff 0, #a5d8ff 3em, transparent 0, transparent 4em);
}
</style>
```
:::

## 蚂蚁行军动画



```vue preview
<template>
<div class="marching-ants">
</div>
</template>
<style scoped>
.marching-ants {
    padding: 1em;
    border: 1px  solid transparent;
    background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%) 0/.6em .6em;
    animation: ants 12s linear infinite;
}

@keyframes ants {
    to {
        background-position: 100% 100%;
    }
}
</style>
```
:::
