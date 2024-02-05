# 条纹背景

## Q: 实现条纹式的背景样式

## **水平条纹**
- **下面20%到80%之间的渐变色**
```CSS
background: linear-gradient(var(--demo-yellow) 20%, var(--demo-blue) 80%);
```
- 第二个色标的位置是0，他的位置总会被浏览器调整为第一个色标的位置，两个位置都是一半，则渐变色就会消失，显示的就是上下两个颜色的条纹
```CSS
background: linear-gradient(var(--demo-yellow) 50%, var(--demo-green) 0);
```



```vue preview
<template>
    <div class="box">
    </div>
</template>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: linear-gradient(var(--demo-yellow) 20%, var(--demo-blue) 80%);
}
</style>
```
:::

- **使用`background-size`控制条纹高度**
```CSS
background: linear-gradient(var(--demo-yellow) 50%, var(--demo-green) 0);
/* 两种颜色条纹，每条条纹高度为15px */
background-size: 100% 30px; // [!code ++]
```



```vue preview
<template>
    <div class="box">
    </div>
</template>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: linear-gradient(var(--demo-yellow) 20%, var(--demo-blue) 0);
  background-size: 100% 30px;
}
</style>
```
:::

- **三种颜色条纹**
```CSS{0}
background: linear-gradient(var(--demo-yellow) 33.3%, var(--demo-blue) 0, var(--demo-blue) 66.6%, var(--demo-green) 0);
background-size: 100% 30px;
```



```vue preview
<template>
    <div class="box">
    </div>
</template>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: linear-gradient(var(--demo-yellow) 33.3%, var(--demo-blue) 0, var(--demo-blue) 66.6%, var(--demo-green) 0);
  background-size: 100% 30px;
}
</style>
```
:::

## **垂直条纹**
```CSS
background: linear-gradient(to right, var(--demo-yellow) 50%, var(--demo-blue) 0);
background-size: 30px 100%;
```




```vue preview
<template>
    <div class="box">
    </div>
</template>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: linear-gradient(to right, var(--demo-yellow) 50%, var(--demo-blue) 0);
  background-size: 30px 100%;
}
</style>
```
:::

## **斜向条纹**
::: tip
原本的垂直条纹或者水平条纹每条宽度为15px，但是变成斜向条纹时，比如倾斜45°，宽度明显变细了，宽度变成了角落的三角形里的高，如果想 获得倾斜45°宽度为 x px 的条纹，需要计算`background-size` = 2*x√2
:::

![斜向条纹](/assets/img/css-secret/striped-background.svg)
- 使用`linear-gradient`
```CSS
background: linear-gradient(45deg, var(--demo-yellow) 25%, var(--demo-blue) 0, var(--demo-blue) 50%, var(--demo-yellow) 0, var(--demo-yellow) 75%, var(--demo-blue) 0);
background-size: 42.426406871px 42.426406871px;
```



```vue preview
<template>
    <div class="box">
    </div>
</template>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, var(--demo-yellow) 25%, var(--demo-blue) 0, var(--demo-blue) 50%, var(--demo-yellow) 0, var(--demo-yellow) 75%, var(--demo-blue) 0);
  background-size: 42.426406871px 42.426406871px;
}
</style>
```
:::

- 使用`repeating-linear-gradient`
```CSS
background: repeating-linear-gradient(45deg, var(--demo-yellow), var(--demo-yellow) 15px, var(--demo-blue) 0, var(--demo-blue) 30px);
```



```vue preview
<template>
    <div class="box">
    </div>
</template>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: repeating-linear-gradient(45deg, var(--demo-yellow), var(--demo-yellow) 15px, var(--demo-blue) 0, var(--demo-blue) 30px);
}
</style>
```
:::

## **同色系条纹**

**通过透明度实现同色系的不同颜色，修改时只需要修改`background-color即可`**
```CSS
background: var(--demo-blue); /* 主色调 */
background-image: repeating-linear-gradient(45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 30px);
```



```vue preview
<template>
    <div class="box">
    </div>
</template>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: var(--demo-blue); /* 主色调 */
  background-image: repeating-linear-gradient(45deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 15px, transparent 0, transparent 30px);
}
</style>
```
:::
