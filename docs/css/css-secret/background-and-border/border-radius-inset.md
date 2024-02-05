# 边框内圆角

## Q: 实现内层圆角，外层无圆角

![内层圆角边框](/assets/img/css-secret/border-radius-inset.svg)

## **使用两个元素实现**



```vue preview
<template>
<div class="box">
  <div class="box-inner"></div>
</div>
</template>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: var(--demo-green);
  padding: .8em;
}

.box-inner {
  width: 100%;
  height: 100%;
  background: var(--demo-yellow);
  border-radius: .8em;
  padding: .8em;
}
</style>
```

## **使用`box-shadow`和`outline`实现**
```CSS
.box {
  background: var(--demo-green);
  padding: .8em;
  border-radius: .8em;
  box-shadow: 0 0 0 .6em var(--demo-yellow);
  outline: .6em solid var(--demo-yellow);
}
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
  background: var(--demo-green);
  padding: .8em;
  border-radius: .8em;
  box-shadow: 0 0 0 .6em var(--demo-yellow);
  outline: .6em solid var(--demo-yellow);
}
</style>
```


- 需要计算`box-shadow`的值
![一层Div实现内层圆角边框](/assets/img/css-secret/border-radius-inset-two.svg)
```js
r: 圆角半径
x: box-shadow的值
(√2 - 1)r < x < 描边宽度
```
