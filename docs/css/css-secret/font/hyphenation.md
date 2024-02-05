# 连字符断行

```css
p {
  hyphens: auto;
}
```

- 连字符：&shy;




```vue preview
<template>
<div class="base-flex">
  <div class="box">
      <p>Winning isn't everything, but wanting to win is.获胜的结果不是一切，重要的是想获胜的心。</p>
  </div>
  <div class="box-yellow">
      <p>Winning isn't everything, but wanting to win is.获胜的结果不是一切，重要的是想获胜的心。</p>
  </div>
</div>
</template>
<style scoped>
.box, .box-yellow{
    width: 300px;
    height: 200px;
    background: var(--demo-blue);
}

.box-yellow {
  background: var(--demo-yellow);
}

.box p {
  hyphens: auto;
}
</style>
```
