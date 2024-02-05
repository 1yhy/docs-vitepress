# 折角效果

## 在盒子中折起一个角

## 45° 折角
```css
background: var(--demo-blue);
background:
    linear-gradient(to left bottom, transparent 50%, rgba(0, 0, 0, .4) 0) no-repeat 100% 0 / 2em 2em, /*2em  对角线长度 */
    linear-gradient(-135deg, transparent 1.41em, var(--demo-blue) 0); /* 1.41em = 2 / √2 */
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
    padding: 1em;
    background: var(--demo-blue);
    background:
    linear-gradient(to left bottom, transparent 50%, rgba(0, 0, 0, .4) 0) no-repeat 100% 0 / 2em 2em, /*2em  对角线长度 */
    linear-gradient(-135deg, transparent 1.41em, var(--demo-blue) 0); /* 1.5em = 2 / √2 */
}
</style>
```


## 其他角度折角


```vue preview
<template>
<div class="box">
    <p>Winning isn't everything, but wanting to win is.</p>
    <p>获胜的结果不是一切，重要的是想获胜的心。</p>
</div>
</template>
<style scoped>
.box {
    position: relative;
    padding: 1.5em;
    background: var(--demo-blue);
    background: linear-gradient(-150deg, transparent 1.5em, var(--demo-blue) 0); /* 透明角落 */
    border-radius: .5em;
}

.box::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1.73em;
    height: 3em;
    background: linear-gradient(to left bottom, transparent 50%, rgba(0, 0, 0, .2) 0, rgba(0, 0, 0, .4)) 100% 0 no-repeat;
    transform: translateY(-1.3em) rotate(-30deg);
    transform-origin: bottom right;
    border-bottom-left-radius: inherit;
    box-shadow: -.2em .2em .3em -.1em rgba(0, 0, 0, .15);
}
</style>
```


```scss
@mixin folded-corner($background, $size, $angle: 30deg) {
    position: relative;
    background: $background;
    background: linear-gradient($angle - 180deg, transparent $size, $background 0);
    border-radius: .5em;

    $x: $size / sin($angle);
    $y: $size / cos($angle);
    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: $y;
        height: $x;
        background: linear-gradient(to left bottom, transparent 50%, rgba(0, 0, 0, .2) rgba(0, 0, 0, .4)) 100% 0 no-repeat;
        transform: tranlateY($y - $x) rotate(2*$angle - 90deg);
        transform-origin: bottom right;
        border-bottom-left-radius: inherit;
        box-shadow: -.2em .2em .3em -.1em rgba(0, 0, 0, .15);
    }
}

.node {
    @include folded-corner(var(--demo-blue), 2em, 40deg);
}
```
