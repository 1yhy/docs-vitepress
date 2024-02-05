# 梯形tab栏

## Q: 如何实现一个完美的梯形标签Tab
## 梯形CSS实现
```css
.tab {
    position: relative;
    display: inline-block;
    padding: .5em 1em .35em;
    color: #fff;
}

.tab::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: #a5d8ff;
    z-index: -1;
    /* 透视之后高度缩小，使用scaleY放大到和之前差不多尺寸*/
    transform: scaleY(1.3) perspective(.5em) rotateX(5deg);
    transform-origin: bottom; /* 固定底部 */
}
```



```vue preview
<template>
<div class="tab">
    TRAPEZOID
</div>
</template>
<style scoped>
.tab {
    position: relative;
    display: inline-block;
    padding: .5em 1em .35em;
    color: #fff;
}

.tab::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background: #a5d8ff;
    z-index: -1;
    /* 透视之后高度缩小，使用scaleY放大到和之前差不多尺寸*/
    transform: scaleY(1.3) perspective(.5em) rotateX(5deg);
    transform-origin: bottom; /* 固定底部 */
}
</style>
```



## 梯形tab栏
```css
.nav {
    background: #fff;
}
.nav > a {
    position: relative;
    display: inline-block;
    padding: .3em 1em 0;
}

.nav > a.active::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-image: linear-gradient(hsla(0, 0%, 100%, .6), hsla(0, 0%, 100%, 0));
    z-index: -1;
    border-bottom: none;
    border-radius: .5em .5em 0 0;
    transform: scaleY(1.3) perspective(.5em) rotateX(5deg);
    transform-origin: bottom;
}
```




```vue preview
<template>
<div class="nav">
    <a href="javascript:;">ellipse</a>
    <a class="active" href="javascript:;">trapezoid</a>
    <a href="javascript:;">triangle</a>
    <a href="javascript:;">bevel</a>
    <a href="javascript:;">diamond</a>
</div>
</template>
<style scoped>
.nav {
    background: var(--demo-yellow);
}

.nav > a {
    position: relative;
    display: inline-block;
    padding: .3em 1em 0;
    z-index: 1;
}

.nav > a.active::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-image: linear-gradient(var(--demo-blue), var(--demo-blue));
    z-index: -1;
    border-bottom: none;
    border-radius: .5em .5em 0 0;
    transform: scaleY(1.3) perspective(.5em) rotateX(5deg);
    transform-origin: bottom;
}
</style>
```


## 梯形标签页最终方案
上面的标签页还是不够完美，左下角和右下角没有很平滑的圆角效果，这也是最难实现梯形标签页的地方
