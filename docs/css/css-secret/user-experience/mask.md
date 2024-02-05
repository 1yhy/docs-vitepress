# 遮罩层

## 伪元素方案

```css
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: 9999;
background: rgba(0, 0, 0, .8);
```

## box-shadow方案
- **当滚动页面时，遮罩层边缘可能会露出来，使用position: fixed**
- **box-shadow 无法阻止鼠标点击交互事件**
```css
box-shadow: 0 0 0 9999px rgba(0, 0, 0, .8);

box-shadow: 0 0 0 50vmax rgba(0, 0, 0, .8);
```
