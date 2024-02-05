# CSS编码技巧
## 尽量减少代码的重复
以下面的按钮为例：
```CSS
/* 一个按钮的样式 */
padding: 6px 16px;
border: 1px solid #446d88;
background: #58a linear-gradient(#77a0bb, #58a);
border-radius: 4px;
box-shadow: 0 1px 5px gray;
color: white;
text-shadow: 0 -1px 1px #335166;
font-size: 20px;
line-height: 30px;
```


```vue preview
<template>
<div>
    <button class="btn">button</button>
</div>
</template>
<style scoped>
.btn {
    padding: 6px 16px;
    border: 1px solid #446d88;
    background: #58a linear-gradient(#77a0bb, #58a);
    border-radius: 4px;
    box-shadow: 0 1px 5px gray;
    color: white;
    text-shadow: 0 -1px 1px #335166;
    font-size: 20px;
    line-height: 30px;
}
</style>
```

1. **尽量减少改动时需要修改的地方**,**当某些值相互依赖时，应该把他们的相互关系用代码表达出来**，比如：这里按钮的行高

```CSS{2}
font-size: 20px;
line-height: 1.5;
```
2. 希望字号和尺寸跟着父级元素改变时，字号可以不设置为固定值，而是使用相对值
```CSS{1}
font-size: 125%; /* 假设父元素的字号为16px */
line-height: 1.5;
```

3. 字号修改为相对值后，需要审视哪些元素的尺寸需要跟着按钮一起放大，哪些效果保持不变
```CSS{1,4,5,7}
padding: .3em .8em;
border: 1px solid #446d88;
background: #58a linear-gradient(#77a0bb, #58a);
border-radius: .2em;
box-shadow: 0 .05em .25em gray;
color: white;
text-shadow: 0 -.05em .05em #335166;
font-size: 125%;
line-height: 1.5;
```
4. linear-gradient()函数的参数中，第一个参数是渐变的方向，第二个参数是渐变的起始颜色，第三个参数是渐变的结束颜色,**当修改颜色时需要重新推导出其中的亮色和暗色版本，其实只要把半透明的黑色或者白色叠加在主色调上，即可得到亮色和暗色版本**
```CSS{1,4-5}
background: #58a linear-gradient(hsla(0, 0%, 100%, .2), transparent);

/* 修改按钮颜色 */
background-color: #f90; /* 橙色 */
background-color: #6b0; /* 绿色 */
```

5. 当我们把按钮放在一个非白色背景上时，灰色的阴影就不再适用了，**可以把阴影的颜色改为半透明**
```CSS
box-shadow: 0 .05em .25em rgba(0, 0, 0, .5);
text-shadow: 0 -.05em .05em rgba(0, 0, 0, .5);
```

最终的按钮代码如下：
```CSS
padding: .3em .8em;
border: 1px solid #446d88;
background: #58a linear-gradient(hsla(0, 0%, 100%, .2), transparent);
border-radius: .2em;
box-shadow: 0 .05em .25em rgba(0, 0, 0, .5);
color: white;
text-shadow: 0 -.05em .05em rgba(0, 0, 0, .5);
font-size: 125%;
line-height: 1.5;
```



```vue preview
<template>
<div>
    <button class="btn">button</button>
</div>
</template>
<style scoped>
.btn {
    padding: .3em .8em;
    border: 1px solid #446d88;
    background: #58a linear-gradient(hsla(0, 0%, 100%, .2), transparent);
    border-radius: .2em;
    box-shadow: 0 .05em .25em rgba(0, 0, 0, .5);
    color: white;
    text-shadow: 0 -.05em .05em rgba(0, 0, 0, .5);
    font-size: 125%;
    line-height: 1.5;
}
</style>
```
:::

- **代码易维护性和 vs 代码量少**
```CSS
border-width: 10px 10px 10px 0;

/* 如果拆成两条，维护改起来或许更容易，可读性也更好 */
border-width: 10px;
border-left-width: 0;
```

- **currentColor**
```CSS
/* 分割线颜色跟着字体颜色变化 */
hr {
    height: .5em
    background: currentColor;
}
```
- **inherit**
使用inherit可以继承父元素的属性值，伪元素则会继承宿主元素的属性值

## 合理使用简写
```CSS{11,12}
background: url(tr.png) no-repeat top right / 2em 2em,
            url(br.png) no-repeat bottom right / 2em 2em,
            url(bl.png) no-repeat bottom left / 2em 2em,
            url(tl.png) no-repeat top left / 2em 2em;

/* background-size和background-repeat被重复了三遍，可以简写为： */
background: url(tr.png) top right,
            url(br.png) bottom right,
            url(bl.png) bottom left,
            url(tl.png) top left;
background-size: 2em 2em;
background-repeat: no-repeat;
```
## 响应式设计
- 每个媒体查询都会增加成本，媒体查询越多，CSS代码越复杂，维护起来越困难；
- 媒体查询的断点也不应该根据具体设备来决定，而是根据自身设计来决定；
- 应该遵循**尽量减少代码量**的原则，减少媒体查询里覆盖数量的声明，也减轻了维护的成本；

#### 建议
1. 使用**百分比或者vw、vh、vmin、vmax**等单位，而不是px；
2. 当需要在较大分辨率下得到**固定尺寸**时，可以使用**max-width或者max-height**；
3. 图片要铺满整个容器时，可以使用**background-size: cover；**但是带宽不是无限的，在移动端下，把大图缩小显示往往是不太明智的。
4. 进行行列布局时，使用**Flexbox或者Grid布局**,或者设置**display: inline-block**一般都能实现。
5. 使用多列文本时，指定**column-width**而不是**column-count**，因为前者可以根据容器宽度自动调整列数，而后者则需要手动调整列数；
