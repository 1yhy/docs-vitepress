# 文本行斑马条纹

```css
padding: .5em;
line-height: 1.5;
background: beige;
background-size: auto 3em;
background-origin: content-box;
background-image: linear-gradient(rgba(0,0,0,.2) 50%,
    transparent 0
);
```


```vue preview
<template>
<div class="box">
    <pre><code>while (true) {
        var d = new Date();
        if (d.getDate()==1 &amp;&amp;
            d.getMonth()==3) {
            alert("TROLOLOL");
        }
    }</code></pre>
</div>
</template>
<style scoped>
.box {
    padding: 1.5em;
    background: var(--demo-blue);
}

pre {
	padding: .5em;
	line-height: 1.5;
	background: hsl(20, 50%, 95%);
	background-image: linear-gradient(
	                  rgba(120,0,0,.1) 50%, transparent 0);
	background-size: auto 3em;
	background-origin: content-box;
	font-family: Consolas, Monaco, monospace;
}

code { font: inherit }
</style>
```
:::
