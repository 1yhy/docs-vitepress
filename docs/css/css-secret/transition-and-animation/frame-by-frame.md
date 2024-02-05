# 逐帧动画

```html
<div class="loader">Loading...</div>
```

```css
@keyframe loader {
    to {
        background-position: -800px 0;
    }
}

.loader {
    width: 100px;
    height: 100px;
    background: url(loader.png) no-repeat 0 0;
    animation: loader 1s steps(8) infinite;

    /* 隐藏文本 */
    text-indent: 200%;
    white-space: nowrap;
    overflow: hidden;
}
```


```vue preview
<template>
<div class="box">
    <div class="loader">Loading…</div>
</div>
</template>
<style scoped>
.box {
    background: var(--demo-blue);
}


@keyframes loader {
	to { background-position: -800px 0; }
}

.loader {
	width: 100px; height: 100px;
	text-indent: 999px; overflow: hidden; /* Hide text */
	background: url(http://dabblet.com/img/loader.png) 0 0;
	animation: loader 1s infinite steps(8);
}

</style>
```
:::
