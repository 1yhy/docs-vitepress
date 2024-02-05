# 多重边框

## Q: 实现多层边框
![一层Div实现内层圆角边框](/assets/img/css-secret/double-border.svg)
## **通过`box-shadow`实现**
- box-shadow支持逗号分隔符语法，可以创建任意数量的投影
- 创建出的是假的边框，出现在元素的外圈，**并不会响应鼠标事件**
- 如果需要响应鼠标事件，可以加上**inset**关键字,使投影在内圈，需要注意元素的大小修改



```vue preview
<template>
<div class="base-flex">
    <div class="box">
        normal
    </div>
    <div class="box-inset">
        inset
    </div>
</div>
</template>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: var(--demo-yellow);
  box-shadow: 0 0 0 10px var(--demo-green),
              0 0 0 15px var(--demo-blue);
}

.box-inset {
  width: 200px;
  height: 200px;
  padding: 40px;
  text-align: center;
  background: var(--demo-yellow);
  box-shadow: inset 0 0 0 10px var(--demo-green),
                inset 0 0 0 15px var(--demo-blue);
}
</style>
```
:::

## **通过`outline`实现**
- 如果需要的不只是实线边框，可以使用outline
- **描边可以使用`outline-offset`属性来控制与元素边缘的距离,可以为负值**
```CSS
  background: var(--demo-yellow);
  border: 10px solid var(--demo-green);
  outline: 5px dashed var(--demo-blue);
```




```vue preview
<template>
    <div class="box">
        normal
    </div>
</template>
<style scoped>
.box {
  width: 200px;
  height: 200px;
  background: var(--demo-yellow);
  border: 10px solid var(--demo-green);
  outline: 5px dashed var(--demo-blue);
}
</style>
```
:::

::: warning
`outline`不一定会贴合元素的border-radius,如果元素有圆角，outline可能会是直角的，这是一个Bug,后续可能也会修复（这个问题可以在下下篇`边框内圆角`**使用`box-shadow`解决**）
:::
