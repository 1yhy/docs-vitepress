## grid布局
CSS Grid布局是一个二维的布局系统，可以同时处理行和列，非常适合用来构建复杂的页面布局和对齐内容。以下是关于Grid布局的全面和详细的介绍：

### 1. 基础概念

- **Grid Container**：使用`display: grid`或`display: inline-grid`的元素。
- **Grid Item**：Grid容器的直接子元素。
- **Grid Line**：定义Grid单元格边界的垂直或水平线。
- **Grid Track**：两个相邻Grid线之间的空间，可以是行或列。
- **Grid Cell**：两个相邻的垂直和水平Grid线之间的空间，类似于表格的一个单元格。
- **Grid Area**：由四个Grid线定义的矩形区域，包含一个或多个Grid单元格。

### 2. 定义一个Grid

要定义一个Grid，你需要将一个元素设置为Grid容器：
```css
.container {
    display: grid;
}
```

### 3. 定义行和列

使用`grid-template-rows`和`grid-template-columns`属性来定义行和列的大小：
```css
.container {
    grid-template-rows: 1fr 2fr 1fr;  /* fr 代表“fraction”（分数）*/
    grid-template-columns: 200px 1fr 2fr;
}
```

### 4. 间隙

使用`grid-row-gap`、`grid-column-gap`或简写`grid-gap`来定义行和列之间的间隙：
```css
.container {
    grid-gap: 10px 15px;
}
```

### 5. 定位Grid项

- **grid-column** 和 **grid-row**：定义Grid项开始和结束的位置。
- **grid-area**：定义Grid项的区域。

```css
.item1 {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
}

.item2 {
    grid-area: 2 / 1 / 3 / 4;
}
```

### 6. 命名Grid线和区域

你可以为Grid线和区域命名，这样在布局时更加直观：
```css
.container {
    grid-template-rows: [header-start] 1fr [header-end content-start] 2fr [content-end footer-start] 1fr [footer-end];
    grid-template-columns: [sidebar-start] 200px [sidebar-end main-start] 1fr [main-end];
}
```

### 7. Grid模板

使用`grid-template-areas`属性为Grid区域命名，并创建一个可视化的布局模板：
```css
.container {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}
```

### 8. 自动布局

- **grid-auto-rows** 和 **grid-auto-columns**：定义自动行和列的大小。
- **grid-auto-flow**：定义如何放置不在固定位置的项。

### 9. 对齐和分布

- **justify-items**、**align-items**、**justify-content** 和 **align-content**：用于对齐Grid项和分布Grid线。

### 10. 响应式设计

使用`repeat()`, `minmax()`, 和 `auto-fill` 或 `auto-fit` 可以创建灵活和响应式的Grid布局。

### 11. 嵌套Grid

Grid容器也可以是Grid项，这样你可以创建嵌套的Grid布局。


## 一些与`self`相关的属性
这些属性主要用于控制单个项目（Grid项或Flex项）在其容器中的对齐方式。这些属性允许你覆盖容器级别的对齐设置，以单独调整某个项目的对齐。

以下是与`self`相关的属性及其用途：

1. **align-self**:
   - 适用于：Flexbox和Grid
   - 功能：控制项目在交叉轴（cross axis）上的对齐方式。在Flexbox中，如果主轴是水平的，那么交叉轴就是垂直的，反之亦然。在Grid中，它关系到行的对齐。
   - 可能的值：`start`、`end`、`center`、`stretch`、`baseline`等。

2. **justify-self**:
   - 适用于：Grid
   - 功能：控制项目在行轴（inline axis）上的对齐方式。
   - 可能的值：`start`、`end`、`center`、`stretch`等。

例如，考虑以下的Grid布局：

```css
.container {
    display: grid;
    align-items: center; /* 设置所有项目在交叉轴上居中 */
}

.item {
    align-self: start; /* 覆盖容器的设置，使该项目在交叉轴上靠顶部对齐 */
}
```

在上述例子中，尽管`.container`设置了`align-items: center`使所有项目垂直居中，但`.item`的`align-self: start`设置会使它垂直靠顶部对齐，从而覆盖了容器的对齐设置。

这些`self`属性提供了更细粒度的控制，允许你在不改变其他项目的情况下单独调整某个项目的对齐。


## grid-area属性
`grid-area` 是 CSS Grid 布局中的一个属性，用于定义 Grid 项在 Grid 容器中的位置。它可以同时设置 Grid 项的行和列的起始和结束位置。

`grid-area` 的值由四个参数组成，分别代表：

1. `start line` of the row
2. `start line` of the column
3. `end line` of the row
4. `end line` of the column

因此，对于给定的值 `grid-area: 2 / 1 / 3 / 4;`：

- Grid 项的行开始于第2条 Grid 线。
- Grid 项的列开始于第1条 Grid 线。
- Grid 项的行结束于第3条 Grid 线。
- Grid 项的列结束于第4条 Grid 线。

这意味着该 Grid 项将跨越从第2行到第3行的区域，并从第1列到第4列的区域。

除了使用数字来指定 Grid 线，你还可以使用命名的 Grid 线（如果你在 Grid 容器的 `grid-template-rows` 或 `grid-template-columns` 属性中为 Grid 线命名）。例如：

```css
.container {
    grid-template-rows: [row1-start] 1fr [row1-end row2-start] 1fr [row2-end];
    grid-template-columns: [col1-start] 1fr [col1-end col2-start] 1fr [col2-end col3-start] 1fr [col3-end];
}

.item {
    grid-area: row2-start / col1-start / row2-end / col3-end;
}
```

在上述示例中，`.item` 的位置与之前的示例相同，但是使用了命名的 Grid 线来定义。

总之，`grid-area` 是一个非常强大的属性，允许你精确地定义 Grid 项在 Grid 容器中的位置，无论是使用数字还是命名的 Grid 线。

## 清除浮动
浮动是CSS中的一个常见特性，允许元素从文档流中“浮动”出来，并根据其左或右边缘对齐。但浮动元素会影响其周围的元素布局，因此经常需要“清除”浮动以防止布局问题。以下是清除浮动的常见方法：

1. **使用clear属性**:
   使用`clear`属性可以阻止元素与前面的浮动元素相邻。它可以有以下值：
   - `left`: 阻止元素与前面的左浮动元素相邻。
   - `right`: 阻止元素与前面的右浮动元素相邻。
   - `both`: 阻止元素与前面的任何浮动元素相邻。

   ```css
   .clear {
       clear: both;
   }
   ```

2. **clearfix技巧**:
   这是一个流行的技巧，使用伪元素为浮动元素的父容器添加清除规则。

   ```css
   .clearfix::after {
       content: "";
       display: table;
       clear: both;
   }
   ```

   使用这个技巧，只需为需要清除浮动的容器添加`clearfix`类。

3. **使用overflow属性**:
   为浮动元素的父容器设置`overflow`属性（如`auto`或`hidden`）也可以清除浮动。但这种方法可能会剪裁容器内的内容，所以要小心使用。

   ```css
   .container {
       overflow: auto;
   }
   ```

4. **使用display: flow-root**:
   `flow-root`是一个新的`display`值，它创建一个块格式化上下文，从而清除内部的浮动。

   ```css
   .container {
       display: flow-root;
   }
   ```

5. **使用Flexbox或Grid**:
   如果你使用Flexbox或Grid布局，那么浮动将不再起作用，因此不需要清除。

   ```css
   .container {
       display: flex;
   }
   ```

   或

   ```css
   .container {
       display: grid;
   }
   ```
