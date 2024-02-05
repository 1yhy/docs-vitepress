# 复杂的背景图案

## Q: 实现几种常见的背景图案

## 网格


```vue preview
<template>
<div class="base-flex">
    <div class="box"></div>
    <div class="box-two"></div>
</div>
</template>
<style scoped>
.box {
    width: 200px;
    height: 200px;
    background: white;
    background-image: linear-gradient(90deg, rgba(200, 0, 0, .5) 50%, transparent 0), linear-gradient(rgba(200, 0, 0, .5) 50%, transparent 0);
    background-size: 30px 30px;
}

.box-two {
    width: 200px;
    height: 200px;
    background: #a5d8ff;
    background-image: linear-gradient(90deg, white 1px, transparent 0), linear-gradient(white 1px, transparent 0);
    background-size: 30px 30px;
}
</style>
```


## 波点



```vue preview
<template>
    <div class="point"></div>
</template>
<style scoped>
.point {
    width: 200px;
    height: 200px;
    margin: auto;
    background: #a5d8ff;
    background-image: radial-gradient(tan 30%, transparent 0), radial-gradient(tan 30%, transparent 0);
    background-size: 0 0, 15px 15px;
}
</style>
```


## 棋盘

- **下面第一种为`background-image`实现的棋盘，第二个为通过SVG实现的棋盘**



```vue preview
<template>
    <div class="base-flex">
        <div class="chess"></div>
        <div class="svg-chess">我是SVG实现的棋盘</div>
    </div>
</template>
<style scoped>
.chess {
    width: 200px;
    height: 200px;
    background: #eee;
    background-image: linear-gradient(45deg, rgba(0, 0, 0, .25) 25%, transparent 0, transparent 75%, rgba(0, 0, 0, .25) 0), linear-gradient(45deg, rgba(0, 0, 0, .25) 25%, transparent 0,transparent 75%, rgba(0, 0, 0, .25) 0);
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
}

.svg-chess {
    width: 200px;
    height: 200px;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 200px;
    background: #eee url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".25"><rect x="50" width="50" height="50" /><rect y="50" width="50" height="50" /></svg>') 0 0/30px 30px;
}
</style>
```
