# 毛玻璃效果

## 实现毛玻璃效果

## 使用background-attachment: fixed配合filter: blur()进行模拟

- 第一步：在父级和内容区的为伪元素设置背景图片，设置background-attribute: fixed; 使得背景图片固定在视口中。
- 设置内容区半透明，**overflow: hidden;把多余的模糊裁剪**。
- 设置伪元素模糊效果，**设置margin为负值修复边缘模糊可能消退的问题**。
```css{18,19}
body, main::before {
    background: url("tiger.jpg") 0 / cover fixed;
}

main {
    position: relative;
    background: hsla(0, 0%, 100%, .3);
    overflow: hidden;
}

main::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: -30px; /* 可以设置比blur偏大 */
    filter: blur(20px);
}
```



```vue preview
<template>
<div class="box">
    <main>
        <blockquote>
            “The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful.”
            <footer>—
                <cite>
                    Oscar Wilde, The Picture of Dorian Gray
                </cite>
            </footer>
        </blockquote>
    </main>
</div>
</template>
<style scoped>
.box {
	min-height: 800px;
	box-sizing: border-box;
	margin: 0;
	padding-top: 100px;
	font: 150%/1.6 Baskerville, Palatino, serif;
}

.box, main::before {
	background: url("/assets/img/css-secret/css-bg.webp") 0 / cover fixed;
}

main {
	position: relative;
	margin: 0 auto;
	padding: 1em;
	max-width: 17em;
	background: hsla(0,0%,100%,.25) border-box;
	overflow: hidden;
	border-radius: .3em;
	box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
	            0 .5em 1em rgba(0, 0, 0, 0.6);
	text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
}

main::before {
	content: '';
	position: absolute;
	top: 0; right: 0; bottom: 0; left: 0;
	margin: -30px;
	z-index: -1;
	-webkit-filter: blur(20px);
	filter: blur(20px);
}

blockquote { font-style: italic }
blockquote cite { font-style: normal; }
</style>
```

:::


## 使用backdrop-filter对兼容它的浏览器非常简单的实现毛玻璃（磨砂玻璃）效果





```vue preview
<template>
<div class="box">
    <main>
        <blockquote>
            “The only way to get rid of a temptation is to yield to it. Resist it, and your soul grows sick with longing for the things it has forbidden to itself, with desire for what its monstrous laws have made monstrous and unlawful.”
            <footer>—
                <cite>
                    Oscar Wilde, The Picture of Dorian Gray
                </cite>
            </footer>
        </blockquote>
    </main>
</div>
</template>
<style scoped>
.box {
	min-height: 800px;
	box-sizing: border-box;
	margin: 0;
	padding-top: 100px;
    background: url("/assets/img/css-secret/css-bg.webp") center / cover;
}


main {
	margin: 0 auto;
	padding: 1em;
	max-width: 17em;
	border-radius: .3em;
    background: rgba(255, 255, 255, 0.2);
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
	box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
	            0 .5em 1em rgba(0, 0, 0, 0.6);
	text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
}

blockquote { font-style: italic }
blockquote cite { font-style: normal; }
</style>
```

:::
