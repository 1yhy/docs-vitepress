# 缓动动画

## 弹跳动画

- ease等同于cubic-bezier(0.25, 0.1, 0.25, 1.0)
- 把控制锚点的水平坐标和反向坐标互换位置，可以得到任意调速的反向版本，所以ease的反向版本的cubic-bezier(0.1, 0.25, 0.1, .25)
```css
@keyframes bounce {
    60%, 80%, to {
        transform: translateY(400px);
        animation-timing-function: ease;
    }
    70% {
        transform: translateY(300px);
    }
    90% {
        transform: translateY(360px);
    }
}

.ball {
    animation: bounce 3s cubic-bezier(.1, .25, 1, .25);
}
```


```vue preview
<template>
<div class="box">
    <div class="ball"></div>
</div>
</template>
<style scoped>
.box {
	min-height: 400px;
    background: var(--demo-blue);
}

@keyframes bounce {
	60%, 80%, to {
		transform: translateY(400px);
		animation-timing-function: ease;
	}
	70% { transform: translateY(300px); }
	90% { transform: translateY(360px); }
}

.ball {
	width: 0; height: 0; padding: 1.5em;
	border-radius: 50%;
	margin: auto;
	background: red radial-gradient(at 30% 30%, #fdd, red);
	animation: bounce 2s cubic-bezier(.1,.25,1,.25) infinite;
}

</style>
```
:::
