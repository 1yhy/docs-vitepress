# 调整tab宽度

```css
p {
    tab-size: 4;
}
```


```vue preview
<template>
<div class="box">
    <pre>
        <code>// Default tab size
            while (true) {
                var d = new Date();
                if (d.getDate()==1 &amp;&amp;
                    d.getMonth()==3) {
                    alert("TROLOLOL");
                }
            }
        </code>
    </pre>

    <pre>
        <code>// tab-size: 2;
            while (true) {
                var d = new Date();
                if (d.getDate()==1 &amp;&amp;
                    d.getMonth()==3) {
                    alert("TROLOLOL");
                }
            }
        </code>
    </pre>

    <pre>
        <code>// tab-size: 4;
            while (true) {
                var d = new Date();
                if (d.getDate()==1 &amp;&amp;
                    d.getMonth()==3) {
                    alert("TROLOLOL");
                }
            }
        </code>
    </pre>

    <pre>
        <code>// tab-size: 0;
            while (true) {
                var d = new Date();
                if (d.getDate()==1 &amp;&amp;
                    d.getMonth()==3) {
                    alert("TROLOLOL");
                }
            }
        </code>
    </pre>
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
	font-family: Consolas, Monaco, monospace;
}

pre:nth-of-type(2) { tab-size: 2 }
pre:nth-of-type(3) { tab-size: 4 }
pre:nth-of-type(4) { tab-size: 0 }

code {
	font: inherit;
}
</style>
```
:::
