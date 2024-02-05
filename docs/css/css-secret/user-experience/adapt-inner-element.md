# 自适应内部元素

```html
<figure>
    <img src="tiger.jpg" alt="tiger">
    <figcaption>Viewport Viewport Viewport Viewport Viewport Viewport Viewport Viewport Viewport</figcaption>
</figure>
```

```css{1, 2}
figure {
    max-width: 300px;
    max-width: min-content;
    margin: auto;
}

figure > img {
    max-width: inherit;
}
```
