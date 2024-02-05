# 单侧投影

## Q: 实现不同方向的投影效果

## 向下单侧投影
- 扩张半径 -4 和 模糊半径 4 相抵消，向下的 5px 偏移则会出现向下的单侧投影
```css
box-shadow: 0 5px 4px -4px rgba(0, 0, 0, .5);
```



```vue preview
<template>
<div class="box"></div>
</template>
<style scoped>
.box {
    width: 200px;
    height: 200px;
    background: var(--demo-blue);
    box-shadow: 0 5px 4px -4px rgba(0, 0, 0, .5);
}
</style>
```


## 邻边投影
- 扩张半径为模糊半径的相反值的一半
```css
box-shadow: 3px 3px 6px -3px rgba(0, 0, 0, .5);
```



```vue preview
<template>
<div class="box"></div>
</template>
<style scoped>
.box {
    width: 200px;
    height: 200px;
    background: var(--demo-blue);
    box-shadow: 3px 3px 6px -3px rgba(0, 0, 0, .5);
}
</style>
```


## 双侧投影
- 通过两个单侧投影来实现
```css
box-shadow: 5px 0 5px -5px rgba(0, 0, 0, .5),
            -5px 0 5px -5px rgba(0, 0, 0, .5);
```



```vue preview
<template>
<div class="box"></div>
</template>
<style scoped>
.box {
    width: 200px;
    height: 200px;
    background: var(--demo-blue);
    box-shadow: 5px 0 5px -5px rgba(0, 0, 0, .5),
            -5px 0 5px -5px rgba(0, 0, 0, .5);
}
</style>
```
