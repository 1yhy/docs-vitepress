# 第五集 设计稿还原

&emsp;&emsp;在本文中，我们将详细描述使用 Uniapp 开发 App 页面还原设计稿的具体步骤和注意事项，并介绍如何使用 SCSS 来提高开发效率。

## 1. 设计稿还原前的准备工作

&emsp;&emsp;在开始开发之前，确保你已经收到并理解了设计稿。设计稿是你还原页面的依据，包含了页面的样式、布局、色彩等细节。在与设计师和产品经理充分沟通后，开始进行设计稿还原。  
&emsp;&emsp;开发App页面时，只需要将设计稿尺寸调整为 750px，并使用`uni-app`提供的`rpx`单位，并且使用`Flex`布局，即可轻松还原设计稿，并实现app端多机型的适配功能。

- rpx单位
  - rpx 是相对于基准宽度的单位，可以根据屏幕宽度进行自适应。uni-app 规定屏幕基准宽度 750rpx。
  - 举例说明：
    - 若设计稿宽度为 750px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 uni-app 里面的宽度应该设为：750 * 100 / 750，结果为：100rpx。
    - 若设计稿宽度为 640px，元素 A 在设计稿上的宽度为 100px，那么元素 A 在 uni-app 里面的宽度应该设为：750 * 100 / 640，结果为：117rpx。
    - 若设计稿宽度为 375px，元素 B 在设计稿上的宽度为 200px，那么元素 B 在 uni-app 里面的宽度应该设为：750 * 200 / 375，结果为：400rpx。


## 2. 使用 Uniapp 创建页面

uni-app项目中，一个页面就是一个符合Vue SFC规范的.vue文件或.nvue文件。

.vue页面和.nvue页面，均全平台支持，差异在于当uni-app发行到App平台时，.vue文件会使用webview进行渲染，.nvue会使用原生进行渲染。

建议首页使用.nvue，其他页面看情况选择，有性能需求则使用.nvue,没有使用.vue即可。

## 3. 还原页面样式

### 3.1 使用设计稿的尺寸和颜色变量

&emsp;&emsp;在开始编写样式前，查看设计稿中的尺寸和颜色，可以将它们抽象为变量。参考`uni.scss`文件,首先，在项目中创建一个名为 variables.scss 的文件，用于存放设计稿中的尺寸和颜色变量。例如：

```scss
$primary-color: #007bff;
```

接下来，在需要使用这些尺寸和颜色的样式文件中，通过 @import 导入 variables.scss 文件到App.vue中可以全局使用：
  
  ```html
  <style lang="scss">
    /* #ifndef APP-NVUE */
    @import '@/static/css/iconfont.css';
    /* #endif */
    @import '@/static/css/variables.scss';
  </style>
  ```

然后在样式中使用这些变量，这样在后续的修改和维护中，只需要修改变量的值，样式会自动更新。

### 3.3 使用样式类名命名规范

在编写样式时，建议使用类名命名规范，保持代码的整洁和易读。
- class、id 都需小写
- 命名使用英文，禁止使用特殊字符
- 样式名不能包含ad、guanggao、ads、gg是广告含义的关键词，避免元素被网页拓展、插件屏蔽
- 名称间隔使用-符号
- 涉及数据、交互等需要联调的部分，禁止通过 id 选择器定义样式，以免开发过程中 id 名变化，引起页局错乱

```html
<div class="header">
  <div class="header-logo"></div>
  <div class="header-nav"></div>
</div>
```

### 3.4 注意适配不同屏幕尺寸

&emsp;&emsp;在还原设计稿时，需要考虑页面在不同屏幕尺寸下的适配。Uniapp 支持响应式布局，你可以使用 Flexbox 或 Grid 布局来实现页面的自适应。

## 4. nvue页面注意事项
1. nvue页面的样式单位支持px，rpx，但不支持百分比。
2. 不支持rem，vh，vw单位。
3. 不支持使用@import导入外部样式文件。
4. 不能使用scss，sass，less等预处理器。
5. nvue页面的样式只支持类选择器（.class），不支持使用其他选择器（如 #id、element）。
6. nvue 页面的布局排列方向默认为竖排（column），如需改变布局方向，可以在 manifest.json -> app-plus -> nvue -> flex-direction 节点下修改，仅在 uni-app 模式下生效。
   ```json
    "app-plus": {
      "nvue": {
        "flex-direction": "row"
      }
    }
    ```
7. 更多nvue使用css限制请参考文末的参考文档。

## 5. rpx单位注意事项
1. 注意 rpx 是和宽度相关的单位，屏幕越宽，该值实际像素越大。如不想根据屏幕宽度缩放，则应该使用 px 单位
2. 如果开发者在字体或高度中也使用了 rpx ，那么需注意这样的写法意味着随着屏幕变宽，字体会变大、高度会变大。如果你需要固定高度，则应该使用 px 。
3. rpx 不支持动态横竖屏切换计算，使用 rpx 建议锁定屏幕方向
4. App 端，在 pages.json 里的 titleNView 或页面里写的 plus api 中涉及的单位，只支持 px，不支持 rpx。
5. 如果设计稿不是 750px，可以使用HBuilderX 提供了自动换算的工具。

## 6. 参考文档
- [HBuilderX中自动转换px为upx](https://ask.dcloud.net.cn/article/35445)
- [阮一峰的 flex 教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [nvue中使用css](https://uniapp.dcloud.net.cn/tutorial/nvue-css.html)

