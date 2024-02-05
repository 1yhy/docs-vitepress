# 自定义复选框

```html
<input type="checkbox" id="checkbox" class="my-checkbox">
<label for="checkbox">Check me</label>
```

```css
input[type="checkbox"] + label::before {
    content: "\a0"; /* 空格 */
    /* 勾号  */
    /* content: "\a0\2713"; */
    display: inline-block;
    vertical-align: .2em;
    width: .8em;
    height: .8em;
    margin-right: .2em;
    border-radius: .2em;
    background: yellowgreen;
    text-indent: .15em;
    line-height: .65;
}

/* 不使用 display:none, 不损失其可访问性*/
input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
}
```


```vue preview
<template>
<div class="box">
    <input type="checkbox" id="checkbox" class="my-checkbox">
    <label for="checkbox">Check me</label>

    <input type="checkbox" id="checkbox2" class="my-checkbox checkbox2">
    <label for="checkbox2">Check me</label>
</div>
</template>
<style scoped>
.box {
    padding: 1.5em;
    background: var(--demo-blue);
}

input[type="checkbox"] + label::before {
    content: "\a0"; /* 空格 */
    /* 勾号  */
    /* content: "\a0\2713"; */
    display: inline-block;
    width: .8em;
    height: .8em;
    margin-right: .2em;
    border-radius: .2em;
    background: yellowgreen;
    line-height: .65;
}

/* 不使用 display:none, 不损失其可访问性*/
input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
}

input.checkbox2 + label::before {
    content: "\a0\2713";
}
</style>
```
:::


## 开关式按钮

```css
input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
}

input[type="checkbox"] + label {
    display: inline-block;
    padding: .5em 1em;
    background: #ccc;
    background-image: linear-gradient(#ddd, #bbb);
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius:.3em;
    box-shadow: 0 1px white inset;
    text-align: center;
    text-shadow: 0 1px 1px white;
}

input[type="checkbox"]:checked + label,
input[type="checkbox"]:active + label {
    box-shadow: .05em .1em .2em rgba(0, 0, 0, .6) inset;
    border-color: rgba(0, 0, 0, .3);
    background: #bbb;
}
```


```vue preview
<template>
<div class="box">
    <input type="checkbox" id="checkbox" class="my-checkbox">
    <label for="checkbox">Check me</label>
</div>
</template>
<style scoped>
.box {
    padding: 1.5em;
    background: var(--demo-blue);
}

input[type="checkbox"] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
}

input[type="checkbox"] + label {
    display: inline-block;
    padding: .5em 1em;
    background: #ccc;
    background-image: linear-gradient(#ddd, #bbb);
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius:.3em;
    box-shadow: 0 1px white inset;
    text-align: center;
    text-shadow: 0 1px 1px white;
}

input[type="checkbox"]:checked + label,
input[type="checkbox"]:active + label {
    box-shadow: .05em .1em .2em rgba(0, 0, 0, .6) inset;
    border-color: rgba(0, 0, 0, .3);
    background: #bbb;
}

</style>
```
:::
