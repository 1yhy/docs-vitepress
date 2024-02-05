# 环形文字

## SVG实现


```vue preview
<template>
<div class="box">
    <div class="circular">
        <svg viewBox="0 0 100 100">
            <path id="circle" d="M 0,50 a 50,50 0 1,1 0,1 z" />
            <text>
                <textPath xlink:href="#circle">circular reasons works text</textPath>
            </text>
        </svg>
    </div>
</div>
</template>
<style scoped>
.box {
    padding: 1.5em;
    background: var(--demo-blue);
}

.circular path {
    fill: none;
}

.circular {
    width: 30em;
    height: 30em;
    margin: 3em auto 0;
}

.circular svg {
    display: block;
    overflow: visible;
}

</style>
```
