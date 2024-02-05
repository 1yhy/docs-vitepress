# 半透明边框

## Q: 边框颜色半透明

使用下面CSS代码时，背景颜色会侵入边框内部，因为**background-clip默认值是border-box**
```CSS
border: 1px solid hsla(0, 0%, 100%, .5);
background: white;
```



```vue preview
<template>
<div class="container base-flex">
    <div class="box">我有一层被遮住半透明的边框!</div>
</div>
</template>
<style scoped>
.container {
    width: 100%;
    height: calc(100% + 20px);
    text-align: center;
    background: orange;
}
.box {
    width: 180px;
    height: 180px;
    line-height: 100px;
    border: 1px solid hsla(0, 0%, 100%, .5);
    background: white;
}
</style>
```
:::


**如果要实现半透明的背景边框，需要把background-clip的值改为padding-box**
```CSS
border: 10px solid hsla(0, 0%, 100%, .5);
background: white;
background-clip: padding-box; //[!code ++]
```



```vue preview
<template>
<div class="container base-flex">
    <div class="box">我有一层半透明的边框!</div>
</div>
</template>
<style scoped>
.container {
    width: 100%;
    height: calc(100% + 20px);
    text-align: center;
    background: orange;
}
.box {
    width: 180px;
    height: 180px;
    line-height: 100px;
    border: 1px solid hsla(0, 0%, 100%, .5);
    background: white;
    background-clip: padding-box;
}
</style>
```
:::
