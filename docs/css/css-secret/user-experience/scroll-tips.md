# 滚动提示

```html
<ul>
    <li>apple</li>
    <li>banana</li>
    <li>cherry</li>
    <li>durian</li>
    <li>grape</li>
    <li>kiwi</li>
    <li>lemon</li>
    <li>melon</li>
    <li>orange</li>
</ul>
```

```css
overflow: auto;
width: 10em;
height: 10em;
padding: .3em .5em;
border: 1px solid;
background: linear-gradient(white 30%, transparent), radial-gradient(at 50% 0, rgba(0, 0, 0, .2), transparent 70%);
background-repeat: no-repeat;
background-size: 100% 50px, 100% 15px;
background-attachment: local, scroll;
```



```vue preview
<template>
<div class="box">
    <ul>
        <li>apple</li>
        <li>banana</li>
        <li>cherry</li>
        <li>durian</li>
        <li>grape</li>
        <li>kiwi</li>
        <li>lemon</li>
        <li>melon</li>
        <li>orange</li>
    </ul>
</div>
</template>
<style scoped>
.box {
    padding: 1.5em;
    background: var(--demo-blue);
}

ul {
    overflow: auto;
    width: 10em;
    height: 10em;
    padding: .3em .5em;
    border: 1px solid;
    background: linear-gradient(white 30%, transparent), radial-gradient(at 50% 0, rgba(0, 0, 0, .2), transparent 70%);
    background-repeat: no-repeat;
    background-size: 100% 50px, 100% 15px;
    background-attachment: local, scroll;
}

</style>
```

