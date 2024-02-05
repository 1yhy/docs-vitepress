# 切角效果

## Q: 如何切去盒子的角

## 切一个角
```css
background: #a5d8ff;
background: linear-gradient(45deg, transparent 15px, #a5d8ff 0);
```



```vue preview
<template>
<div class="box">
    <p>Winning isn't everything, but wanting to win is.</p>
    <p>获胜的结果不是一切，重要的是想获胜的心。</p>
</div>
</template>
<style scoped>
.box {
    width: 300px;
    height: 200px;
    padding: 1em;
    background: #a5d8ff;
    background: linear-gradient(45deg, transparent 15px, #a5d8ff 0);
}
</style>
```

## 切底部两个角
```css
background: #a5d8ff;
background: linear-gradient(-45deg, transparent 15px, #a5d8ff 0) right,
            linear-gradient(45deg, transparent 15px, #a5d8ff 0) top left;
background-size: 50% 100%;
background-repeat: no-repeat;
```



```vue preview
<template>
<div class="box">
    <p>Winning isn't everything, but wanting to win is.</p>
    <p>获胜的结果不是一切，重要的是想获胜的心。</p>
</div>
</template>
<style scoped>
.box {
    width: 300px;
    height: 200px;
    padding: 1em;
    background: #a5d8ff;
    background: linear-gradient(-45deg, transparent 15px, #a5d8ff 0) right,
            linear-gradient(45deg, transparent 15px, #a5d8ff 0) top left;
    background-size: 50% 100%;
    background-repeat: no-repeat;
}
</style>
```


## 切四个角
```css
background: #a5d8ff;
background: linear-gradient(-45deg, transparent 15px, #a5d8ff 0) bottom right,
            linear-gradient(45deg, transparent 15px, #a5d8ff 0) bottom left,
            linear-gradient(135deg, transparent 15px, #a5d8ff 0) top left,
            linear-gradient(-135deg, transparent 15px, #a5d8ff 0) top right;
background-size: 50% 50%;
background-repeat: no-repeat;
```



```vue preview
<template>
<div class="box">
    <p>Winning isn't everything, but wanting to win is.</p>
    <p>获胜的结果不是一切，重要的是想获胜的心。</p>
</div>
</template>
<style scoped>
.box {
    width: 300px;
    height: 200px;
    padding: 1em;
    background: #a5d8ff;
    background: linear-gradient(-45deg, transparent 15px, #a5d8ff 0) bottom right,
            linear-gradient(45deg, transparent 15px, #a5d8ff 0) bottom left,
            linear-gradient(135deg, transparent 15px, #a5d8ff 0) top left,
            linear-gradient(-135deg, transparent 15px, #a5d8ff 0) top right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
</style>
```


## 弧形切角
```css
background: #a5d8ff;
background: radial-gradient(circle at top left, transparent 15px, #a5d8ff 0) top left,
            radial-gradient(circle at top right, transparent 15px, #a5d8ff 0) top right,
            radial-gradient(circle at bottom left, transparent 15px, #a5d8ff 0) bottom left,
            radial-gradient(circle at bottom right, transparent 15px, #a5d8ff 0) bottom right;
background-size: 50% 50%;
background-repeat: no-repeat;
```



```vue preview
<template>
<div class="box">
    <p>Winning isn't everything, but wanting to win is.</p>
    <p>获胜的结果不是一切，重要的是想获胜的心。</p>
</div>
</template>
<style scoped>
.box {
    width: 300px;
    height: 200px;
    padding: 1em;
    background: #a5d8ff;
    background: radial-gradient(circle at top left, transparent 15px, #a5d8ff 0) top left,
            radial-gradient(circle at top right, transparent 15px, #a5d8ff 0) top right,
            radial-gradient(circle at bottom left, transparent 15px, #a5d8ff 0) bottom left,
            radial-gradient(circle at bottom right, transparent 15px, #a5d8ff 0) bottom right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}
</style>
```


## 内联svg和border-image方案

::: tip
这里border的宽度45°角时，要和上面方法的15px相等时，应该为 15 * √2 = 21.213...
:::

```css
border: 20px solid #a5d8ff; /* 加上原来颜色，避免在不支持border-image的浏览器中看到黑色边框 */
border-image: 1 url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='3' height='3' fill='%2358a'><polygon points='0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2'/></svg>");
background: #a5d8ff;
background-clip: padding-box;
```



```vue preview
<template>
<div class="box">
    <p>Winning isn't everything, but wanting to win is.</p>
</div>
</template>
<style scoped>
.box {
    width: 300px;
    height: 200px;
    padding: 1em;
    border: 20px solid #58a; /* 加上原来颜色，避免在不支持border-image的浏览器中看到黑色边框 */
    border-image: 1 url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='3' height='3' fill='%2358a'><polygon points='0,1 1,0 2,0 3,1 3,2 2,3 1,3 0,2'/></svg>");
    background: #58a;
    background-clip: padding-box;
}
</style>
```


## 裁切路径
```css
background: #a5d8ff;
clip-path: polygon(
    20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px
);
```



```vue preview
<template>
<div class="box">
    <p>Winning isn't everything, but wanting to win is.</p>
    <p>获胜的结果不是一切，重要的是想获胜的心。</p>
</div>
</template>
<style scoped>
.box {
    width: 300px;
    height: 200px;
    padding: 1em;
    background: #a5d8ff;
    clip-path: polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px);
}
</style>
```
