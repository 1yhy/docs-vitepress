# 染色效果

## Q: 对图片进行染色、滤镜等效果
**原图：**

![别看我是一只🐏](/assets/img/css-secret/css-bg.webp)
## 基于滤镜的方案
- sepia: 降饱和度的橙黄色染色效果
- saturate: 提升饱和度，暖金色的染色效果
- hue-rotate: 色相偏移
```css
filter: sepia(1) saturate(4) hue-rotate(295deg);
```



```vue preview
<template>
<div class="box">
    <img src="/assets/img/css-secret/css-bg.webp" alt="tint" />
</div>
</template>
<style scoped>
.box {
    width: 200px;
    height: 200px;
    background: var(--demo-blue);
}

.box img {
    width: 100%;
    height: 100%;
    filter: sepia(1) saturate(4) hue-rotate(295deg);
}
</style>
```
:::

## 基于混合模式的方案
- **第一种： 把图片包裹在容器中**
```html
<a href="#demo">
    <img src="" alt="tint" />
</a>
```

```css
a {
    background: hsl(335, 100%, 50%);
}

img {
    mix-blend-mode: luminosity;
}
```



```vue preview
<template>
<div class="box">
    <img src="/assets/img/css-secret/css-bg.webp" alt="tint" />
</div>
</template>
<style scoped>
.box {
    width: 200px;
    height: 200px;
    background: var(--demo-blue);
}

.box img {
    width: 100%;
    height: 100%;
    mix-blend-mode: luminosity;
}
</style>
```
:::

- **第二种： 使用div，把第一层设置为需要染色的图片，第二次背景设置为主色调。**
```html
<div class="tint"></div>
```

```css
.tint {
    width: 100%;
    height: 400px;
    background: var(--demo-blue);
    background-image: url(/assets/img/css-secret/css-bg.webp);
    background-size: cover;
    background-blend-mode: luminosity;
}
```



```vue preview
<template>
<div class="box">
</div>
</template>
<style scoped>
.box {
    width: 100%;
    height: 400px;
    background: var(--demo-blue);
    background-image: url(/assets/img/css-secret/css-bg.webp);
    background-size: cover;
    background-blend-mode: luminosity;
}
</style>
```
:::
