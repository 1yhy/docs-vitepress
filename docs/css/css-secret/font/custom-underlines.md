# 自定义下划线

## 实现自定义下划线


```css
/* 默认下划线 */
text-decoration: underline;

/* border-bottom: 跟文本距离太大 */
display: inline-block;
border-bottom: 1px solid gray;
line-height: .9;

/* box-shadow: 和文本距离也比较大 */
box-shadow: 0 -1px gray inset;
```

## 解决方案

```css
background: linear-gradient(gray, gray) no-repeat;
background-size: 100% 1px;
background-position: 0 1.15em;
```



```vue preview
<template>
<div class="box">
    <h1>HTML & CSS, Javascript Typescript</h1>
</div>
</template>
<style scoped>
.box {
    padding: 1.5em;
    background: var(--demo-blue);
}

h1 {
    background: linear-gradient(gray, gray) no-repeat;
    background-size: 100% 1px;
    background-position: 0 1.15em;
}

</style>
```


## 不穿过文字底部下划线
```css
background: linear-gradient(gray, gray) no-repeat;
background-size: 100% 1px;
background-position: 0 1.15em;
text-shadow: .05em 0 white, .05em 0 white;
```


```vue preview
<template>
<div class="box">
    <p>HTML & CSS,go,Javascript Typescript</p>
</div>
</template>
<style scoped>
.box {
    padding: 1.5em;
    background: var(--demo-blue);
}

p {
    font-size: 24px;
    background: linear-gradient(gray, gray) no-repeat;
    background-size: 100% 1px;
    background-position: 0 1em;
    text-shadow: .05em 0 white, .05em 0 white;
}

</style>
```


## 虚线下划线
- 通过色标的百分比位置值来微调虚线的虚实比例，比如`gray 66%`表示66%的长度是实线，34%的长度是空白；
- 通过`background-size`来设置虚线的宽度和间距
```css
background: linear-gradient(90deg, gray 66%, transparent 0) repeat-x;
background-size: .2em 2px;
background-position: 0 1em;
```


```vue preview
<template>
<div class="box">
    <h1>HTML & CSS, Javascript Typescript</h1>
</div>
</template>
<style scoped>
.box {
    padding: 1.5em;
    background: var(--demo-blue);
}

h1 {
    background: linear-gradient(90deg, gray 66%, transparent 0) repeat-x;
    background-size: .2em 2px;
    background-position: 0 1em;
}

</style>
```
