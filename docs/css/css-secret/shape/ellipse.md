# 自适应椭圆

## Q: 椭圆的画法
## 设置水平和垂直半径
```CSS
border-radius: 100px / 75px;
border-radius: 50%;
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
    background: var(--demo-blue);
    border-radius: 100px / 75px;
}
</style>
```


## 半椭圆
```CSS
border-radius: 50% / 100% 100% 0 0;

/* 纵轴劈开的半椭圆 */
border-radius: 100% 0 0 100% / 50%;
```


```vue preview
<template>
<div class="base-flex">
    <div class="box"></div>
    <div class="box-column"></div>
</div>
</template>
<style scoped>
.box {
    width: 300px;
    height: 200px;
    background: var(--demo-blue);
    border-radius: 50% / 100% 100% 0 0;
}

.box-column {
    width: 300px;
    height: 200px;
    background: var(--demo-yellow);
    border-radius: 100% 0 0 100% / 50%;
}
</style>
```


## 四分之一椭圆
```CSS
border-radius: 100% 0 0 0;
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
    background: var(--demo-blue);
    border-radius: 100% 0 0 0;
}
</style>
```
