# 现实中的文字效果

## 空心字

### text-shadow: 通过设置**多个阴影添加偏移量**来实现空心字效果
```css
background: deepskyblue;
color: white;
text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
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
    color: white;
    text-shadow: 1px 1px black, -1px -1px black, 1px -1px black, -1px 1px black;
}

</style>
```
:::

### **多层轻微模糊的投影模拟描边**
```css
text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
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
    color: white;
    text-shadow: 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black, 0 0 1px black;
}

</style>
```
:::

### SVG方案


```vue preview
<template>
<div class="box">
    <h1>
        <svg width="2em" height="1.2em">
            <use xlink:href="#css"></use>
            <text id="css" y="1em">CSS</text>
        </svg>
    </h1>
</div>
</template>
<style scoped>
.box {
    padding: 1.5em;
    background: var(--demo-blue);
}

h1 {
    font: 500%/1 Rockwell, sans-serif;
    color: white;
    background: deepskyblue;
}
h1 text {
    fill: currentColor;
}

h1 svg {
    overflow: visible;
}

h1 use {
    stroke: black;
    stroke-width: 6;
    stroke-linejoin: round;
}

</style>
```
:::


## 文字发光效果

```css
text-shadow: 0 0 .1em, 0 0 .3em;
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
    color: var(--demo-yellow);
    text-shadow: 0 0 .1em, 0 0 .3em;
}

</style>
```
:::

## 文字凸起效果

#### 用一长串的累加投影实现
```css
background: deepskyblue;
color: white;
text-shadow: 0 1px hsl(0, 0%, 85%),
            0 2px hsl(0, 0%, 80%),
            0 3px hsl(0, 0%, 75%),
            0 4px hsl(0, 0%, 70%),
            0 5px hsl(0, 0%, 65%),
            0 5px 10px black; /* 最后一层投影模拟阴影 */
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
    color: white;
    text-shadow: 0 1px hsl(0, 0%, 85%),
                0 2px hsl(0, 0%, 80%),
                0 3px hsl(0, 0%, 75%),
                0 4px hsl(0, 0%, 70%),
                0 5px hsl(0, 0%, 65%),
                0 5px 10px black; /* 最后一层投影模拟阴影 */
}

</style>
```
:::

#### SCSS混入
```scss
@mixin text-3d($color: white, $depth: 5) {
    $shadows: ();
    $shadow-color: $color;

    @for $i from 1 through $depth {
        $shadows: append($shadows, 0 $i * 1px $shadow-color, comma);
        $shadow-color: darken($shadow-color, 10%);
    }
    color: $color;
    text-shadow: append($shadows, 0 $depth * 1px 10px black, comma);
}

h1 {
    @include text-3d(#eee, 4);
}
```

#### 复古标志牌文字效果
```css
color: white;
background: hsl(0， 50%, 45%);
text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black, 5px 5px black, 6px 6px black, 7px 7px black, 8px 8px black;
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
    color: white;
    background: hsl(0， 50%, 45%);
    text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black, 5px 5px black, 6px 6px black, 7px 7px black, 8px 8px black;
}

</style>
```
:::
