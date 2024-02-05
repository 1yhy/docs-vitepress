# 插入换行
以下面文本为例：
- **换行符： "\A" 或 "\000A"**

**使用换行符对dd换行：**
```css
dd::after {
    content: "\A";
    white-space: pre;
}
```


```vue preview
<template>
<div class="box">
    <dl>
        <dt>Name:</dt>
        <dd>Harry Potter</dd>

        <dt>Email:</dt>
        <dd>demo@qq.com</dd>

        <dt>Address:</dt>
        <dd>China</dd>
    </dl>
</div>
</template>
<style scoped>
.box {
    width: 300px;
    height: 200px;
    padding: 1.5em;
    background: var(--demo-blue);
}

dt, dd {
    display: inline;
}

dd {
    margin: 0;
    font-weight: bold;
}

dd::after {
    content: "\A";
    white-space: pre;
}
</style>
```



上面写法当有**多个dd连续**时就会出现问题，因为每个dd都会插入一个换行符
比如：
```html{5}
<dl>
    ...
    <dt>Email:</dt>
    <dd>demo@qq.com</dd>
    <dd>demo2@qq.com</dd>
    ...
</dl>
```

**最终写法：**
```css
dd + dt::before {
    content: "\A";
    white-space: pre;
}

dd + dd::before {
    content: ", ";
}
```


```vue preview
<template>
<div class="box">
    <dl>
        <dt>Name:</dt>
        <dd>Harry Potter</dd>

        <dt>Email:</dt>
        <dd>demo@qq.com</dd>
        <dd>demo2@qq.com</dd>

        <dt>Address:</dt>
        <dd>China</dd>
    </dl>
</div>
</template>
<style scoped>
.box {
    padding: 1.5em;
    background: var(--demo-blue);
}

dt, dd {
    display: inline;
}

dd {
    margin: 0;
    font-weight: bold;
}

dd + dt::before {
    content: "\A";
    white-space: pre;
}

dd + dd::before {
    content: ", ";
}
</style>
```
