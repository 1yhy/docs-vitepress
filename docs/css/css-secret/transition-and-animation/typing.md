# 打字效果

```html
<h1>CSS is awesome</h1>
```

```css
@keyframes typing {
    from { width: 0; }
}

@keyframes blink-caret {
    50% { border-color: currentColor; }
}

h1 {
    width: 15ch;
    overflow: hidden;
    white-space: nowrap;
    border-right: .05em solid transparent;
    animation: typing 6s steps(15), blink-caret 1s step(1) infinite;
}
```

```javascript
$(function() {
    $('h1').each(function() {
        var len = $(this).textContent.length, s = $(this).style;

        s.width = len + 'ch';
        s.animationFunction = 'step("+ len + "), step(1)';
    })
});
```


```vue preview
<template>
<div class="box">
    <h1>CSS is awesome!</h1>
</div>
</template>
<style scoped>
.box {
    background: var(--demo-blue);
}

@keyframes typing {
	from { width: 0 }
}

@keyframes caret {
	50% { border-right-color: transparent; }
}

h1 {
	font: bold 200% Consolas, Monaco, monospace;
	/*width: 8.25em;*/
	width: 15ch;
	white-space: nowrap;
	overflow: hidden;
	border-right: .05em solid;
	animation: typing 8s steps(15),
	           caret 1s steps(1) infinite;
}

</style>
```
