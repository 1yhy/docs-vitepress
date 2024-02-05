# 弹性过渡


```vue preview
<template>
<div class="box">
    <label>
        Your username:
        <input value="HTML & CSS" />
        <span class="callout">
            Only letters, numbers, underscores (_) and hyphens (-) allowed!
        </span>
    </label>
</div>
</template>
<style scoped>
.box {
	padding: 1.5em;
    background: var(--demo-blue);
}

input:not(:focus) + .callout:not(:hover) {
	transform: scale(0);
	transition: .25s transform;
}

.callout {
	transition: .5s cubic-bezier(.25,.1,.3,1.5) transform;
	transform-origin: 1.4em -.4em;
}

input {
	display: block;
	padding: 0 .4em;
	font: inherit;
	outline: 1px solid;
}

.callout {
	position: absolute;
	max-width: 14em;
	padding: .6em .8em;
	border-radius: .3em;
	margin: .3em 0 0 -.2em;
	background: #fed;
	border: 1px solid rgba(0,0,0,.3);
	box-shadow: .05em .2em .6em rgba(0,0,0,.2);
	font-size: 75%;
}

.callout:before {
	content: "";
	position: absolute;
	top: -.4em;
	left: 1em;
	padding: .35em;
	background: inherit;
	border: inherit;
	border-right: 0;
	border-bottom: 0;
	transform: rotate(45deg);
}

</style>
```
:::
