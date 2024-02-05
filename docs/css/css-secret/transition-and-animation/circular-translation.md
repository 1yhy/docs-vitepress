# 沿环形路径平移动画

```html
<div class="avatar">
    <img src="avatar.png" alt="avatar">
</div>
```
```css
@keyframes spin {
    from {
        transform: translateY(150px) translateY(-50%) rotate(0turn) translateY(-150px) translateY(50%) rotate(1turn);
    }

    to {
        transform: translateY(150px) translateY(-50%) rotate(1turn) translateY(-150px) translateY(50%) rotate(0turn);
    }
}

.avatar {
    animation: spin 3s linear infinite;
}
```


```vue preview
<template>
<div class="path">
    <img src="/assets/img/css-secret/demo.svg" class="avatar" alt="avatar">
</div>
</template>
<style scoped>
@keyframes spin {
	from {
		transform: rotate(0turn)
		           translateY(-150px) translateY(50%)
		           rotate(1turn)
	}
	to {
		transform: rotate(1turn)
		           translateY(-150px) translateY(50%)
		           rotate(0turn);
	}
}


.avatar {
	animation: spin 8s infinite linear;
}

.avatar {
	display: block;
	width: 50px;
	margin: calc(50% - 25px) auto 0;
	border-radius: 50%;
	overflow: hidden;
}

.path {
	width: 300px; height: 300px;
	padding: 20px;
	margin: 100px auto;
	border-radius: 50%;
	background: #fb3;
}
</style>
```
