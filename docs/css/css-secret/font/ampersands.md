# 华丽的 & 符号

## Q: 怎么单独给 & 符号添加样式？
**A: 使用只有 & 这个符号的字体包样式**

```css
@font-face {
    font-family: Ampersand;
    /* 使用本地字体 */
    src: local('Baskerville-Italic')
    local('GoudyOldStyle-Italic')
    local('Palatino-Italic')
    local('BookAntiqua-Italic');
    unicode-range: U+26;
}

h1 {
    font-family: Ampersand, sans-serif;
}
```

- 单个字符：`U+26` 表示 `&` 符号
- 一个字符区间：`U+26-4FF`
- 多个字符区间：`U+26-4FF, U+530-5FF`
- 通配符：`U+2??`



```vue preview
<template>
<div class="box">
    <h1>HTML & CSS</h1>
</div>
</template>
<style scoped>
.box {
    padding: 1.5em;
    background: var(--demo-blue);
}

@font-face {
	font-family: Ampersand;
	src: local('Baskerville-Italic'), local('GoudyOldStyleT-Italic'), local('Garamond-Italic'), local('Palatino-Italic');
	unicode-range: U+26;
}

h1 {
	font-family: Ampersand, Helvetica, sans-serif;
}

</style>
```
