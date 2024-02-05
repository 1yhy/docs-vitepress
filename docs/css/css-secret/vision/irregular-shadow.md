# 不规则阴影

## 不规则图形，比如气泡等的投影实现
## 滤镜实现
```css
filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, .5));
```



```vue preview
<template>
<div class="box"></div>
</template>
<style scoped>
.box {
    position: relative;
    width: 200px;
    height: 200px;
    background: var(--demo-blue);
    filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, .5));

}

.box::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -29px;
    border: 15px solid transparent;
    border-left: 15px solid var(--demo-blue);
    transform: translateY(-50%);
}
</style>
```
:::

- **svg退化方案**

::: tip
可以通过添加一个svg的滤镜，对不支持drop-shadow的浏览器提供一个退化的方案
:::
```css{1}
filter: url(filters.svg#drop-shadow);
filter: drop-shadow(0 0 5px rgba(0, 0, 0, .3));
```

::: warning
使用`drop-shadow`任何非透明的都会部分都会被加上投影,如果文字也使用`text-shadow`的话,文字可能会被重复投影。（目前在Chrome浏览器新版没发现问题）
:::
