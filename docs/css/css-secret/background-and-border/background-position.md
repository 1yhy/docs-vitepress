# 背景定位

## Q: 背景图片实现固定定位到某个位置，比如右下角
![背景定位](/assets/img/css-secret/background-position.svg)

## **使用`background-position`方案**

```CSS
background: url(icon.svg) no-repeat #a5d8ff;
background-position: 20px 10px;

/* 或者 */
background-position: right 20px bottom 10px;
```

- 如果不支持background-position的关键字，可以把bottom right写进background作为回退方案
```CSS{1,2}
background: url(icon.svg) no-repeat bottom right #a5d8ff;
background-position: right 20px bottom 10px;
```


```vue preview
<template>
<div class="box">
</div>
</template>
<style scoped>
.box {
    width: 300px;
    height: 200px;
    background: url(/assets/img/css-secret/demo.svg) no-repeat #a5d8ff;
    background-position: right 20px bottom 10px;
    background-size: 50px 50px;
}
</style>
```
:::

## **使用`background-origin`方案**
```CSS
padding: 20px;
background: url(icon.svg) no-repeat #a5d8ff;
background-position: right 20px bottom 20px;
```
- 在上面如果设置和内边距相同的背景定位，每次改动代码需要修改三个位置，可以使用`background-origin`来简化
```CSS {2,3}
padding: 20px;
background: url(icon.svg) no-repeat bottom right #a5d8ff;
background-origin: content-box;
```



```vue preview
<template>
<div class="box">
</div>
</template>
<style scoped>
.box {
    width: 300px;
    height: 200px;
    padding: 20px;
    background: url(/assets/img/css-secret/demo.svg)  no-repeat bottom right #a5d8ff;
    background-origin: content-box;
    background-size: 50px 50px;
}
</style>
```
:::

- 这是因为**每个元素身上都有三个矩形框，`border-box`(外框矩形框)、`padding-box`(内边距外沿框)和`content-box`(内容区的外沿框**),**`background-origin`默认值是`padding-box`**,所以如果不设置`background-origin`，那么`background-position`的值就是相对于`padding-box`的，而不是`content-box`的

![CSS盒模型](/assets/img/css-secret/box-sizing.svg)

**使用`calc()`方案**
```CSS
padding: 20px;
background: url(icon.svg) no-repeat #a5d8ff;
background-position: calc(100% - 20px) calc(100% - 20px);
```



```vue preview
<template>
<div class="box">
</div>
</template>
<style scoped>
.box {
    width: 300px;
    height: 200px;
    padding: 20px;
    background: url(/assets/img/css-secret/demo.svg)  no-repeat #a5d8ff;
    background-position: calc(100% - 20px) calc(100% - 20px);
    background-size: 50px 50px;
}
</style>
```
:::
