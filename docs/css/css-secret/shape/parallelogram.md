# 平行四边形

## Q: 实现平行四边形，文字不随着形状变形

## 使用skew()变形

```css
transform: skew(-45deg);
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
    margin: 0 auto;
    background: var(--demo-blue);
    transform: skew(-45deg);
}
</style>
```



## 平行四边形背景和文字
1. 使用两层div
```html
<div class="parallelogram">
  <div class="parallelogram-inner">
    平行四边形
  </div>
</div>
```
```css
.parallelogram {
  width: 200px;
  height: 100px;
  background: #a5d8ff;
  transform: skew(-45deg);
  margin: 20px 50px;
}

/* 反向变形，矫正文字 */
.parallelogram-inner {
    transform: skew(45deg)
}
```



```vue preview
<template>
<div class="parallelogram">
  <div class="parallelogram-inner">
    平行四边形
  </div>
</div>
</template>
<style scoped>
.parallelogram {
  width: 200px;
  height: 100px;
  background: #a5d8ff;
  transform: skew(-45deg);
  margin: 20px 50px;
}

/* 反向变形，矫正文字 */
.parallelogram-inner {
    transform: skew(45deg)
}
</style>
```


2. 使用伪元素
```CSS
.parallelogram {
  position: relative;
}

.parallelogram::before {
  content: '';
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background: #a5d8ff;
  transform: skew(-45deg);
  z-index: -1;
}
```



```vue preview
<template>
<div class="parallelogram">
    平行四边形
</div>
</template>
<style scoped>
.parallelogram {
  position: relative;
  width: 200px;
  height: 100px;
  margin: 0 50px;
}

.parallelogram::before {
  content: '';
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  background: #a5d8ff;
  transform: skew(-45deg);
  z-index: -1;
}
</style>
```
