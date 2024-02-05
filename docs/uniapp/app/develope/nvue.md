# nvue页面开发

&emsp;&emsp;在 App 端，如果使用 vue 页面，则使用 webview 渲染；如果使用 nvue 页面(native vue 的缩写)，则使用原生渲染。  
&emsp;&emsp;一个 App 中可以同时使用两种页面，比如首页使用 nvue，二级页使用 vue 页面，强烈建议首页使用 nvue 页面，因为 nvue 页面性能更好，体验更好。  
&emsp;&emsp;本文档主要介绍 nvue 页面的开发与vue页面的不同点。
完整示例请参考：[官方文档](https://uniapp.dcloud.net.cn/tutorial/nvue-outline.html#)

#### &emsp;&emsp;对 App 启动速度要求极致化。App 端如果首页使用 nvue 且在 manifest 里配置 fast 模式，那么 App 的启动速度可以控制在 1 秒左右。而使用 vue 页面的话，App 的启动速度一般是 3 秒起，取决于你的代码性能和体积。

## 1. 什么情况下使用 nvue 页面
- 首页使用 nvue 页面，性能更好，体验更好
- 解决前端控件无法覆盖原生控件的层级问题。当你使用**map**、**video**、**live-pusher**等原生组件时，会发现前端写的view等组件无法覆盖原生组件，层级问题处理比较麻烦，此时使用 nvue 更好。
- 需要高性能的区域长列表或瀑布流滚动。webview 的页面级长列表滚动是没有性能问题的（就是滚动条覆盖 webview 整体高度），但页面中某个区域做长列表滚动，则需要使用 nvue 的list、recycle-list、waterfall等组件(详见)。这些组件的性能要高于 vue 页面里的区域滚动组件scroll-view。

## 2. nvue 页面的开发
nvue 页面的开发与 vue 页面的开发基本一致，但也有一些不同点，主要有以下几点：

#### 2.1 样式
- nvue 页面**只能使用flex布局**，不支持其他布局方式。页面开发前，首先想清楚这个页面的纵向内容有什么，哪些是要滚动的，然后每个纵向内容的横轴排布有什么，按 flex 布局设计好界面。
- nvue 页面的**布局排列方向默认为竖排（column）**，如需改变布局方向，可以在 manifest.json -> app-plus -> nvue -> flex-direction 节点下修改，仅在 uni-app 模式下生效。详情。
- **文字内容，必须、只能在`text`组件下。不能在`div`、`view`的text区域里直接写文字。否则即使渲染了，也无法绑定js里的变量。只有`text`标签可以设置字体大小，字体颜色。**
- **布局不能使用百分比**、没有媒体查询。
- **不支持背景图。**但可以使用image组件和层级来实现类似web中的背景效果。因为原生开发本身也没有web这种背景图概念
- css选择器支持的比较少，**只能使用 class 选择器**
- **class 进行绑定时只支持数组语法。**
- App.vue 中定义的全局css，对nvue和vue页面同时生效。如果全局css中有些css在nvue下不支持，编译时控制台会报警，建议把这些不支持的css包裹在条件编译里，APP-PLUS-NVUE
- 不能在 style 中引入字体文件
- 使用image标签，支持使用base64，**不支持svg格式图片**
- 不支持 /deep/
- nvue**多行文本溢出显示省略号**写法如下：
```css
/* 1. 单行文本溢出显示省略号 */
text-overflow: ellipsis;
lines: 1;
/* 2. 错误写法：多行文本溢出显示省略号 */ 
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
/* 2. 正确写法：多行文本溢出显示省略号 */ 
lines: 2;
text-overflow: ellipsis;
```
- nvue页面只能使用Id选择器获取元素节点信息，例如：
```javascript
// 获取节点信息
const query = uni.createSelectorQuery().in(this);
query.select('#id').boundingClientRect(data => {
  console.log("得到布局位置信息" + JSON.stringify(data));
  console.log("节点离页面顶部的距离为" + data.top);
}).exec();
```
#### 2.2 api
- 一个页面可以同时新建vue页面和nvue页面，在app端，同名情况下，优先使用nvue页面，但是在h5端，只能使用vue页面
- template 语法大致相同，App 端 nvue 拥有额外的专用组件，详见https://uniapp.dcloud.io/component/barcode
- nvue 页面控制显隐**只可以使用v-if不可以使用v-show**
- 在 App.vue 中定义的**全局js变量不会在 nvue 页面生效**。
- **nvue页面支持typescript**
  
  
## 3.nvue 里不支持的 uni-app API
##### 动画
|API|	说明	|解决方案|
|--|:--:|:--:|
|uni.createAnimation()	|创建一个动画实例	|[animation](https://uniapp.dcloud.net.cn/tutorial/nvue-api.html#animation)
##### 滚动
|API	|说明	|解决方案
|--|:--:|:--:|
|uni.pageScrollTo()	|将页面滚动到目标位置	|[scrollToElement](https://uniapp.dcloud.net.cn/tutorial/nvue-api.html#scrolltoelement)|
##### 节点布局交互
|API	|说明|
|--|:--:|
|uni.createIntersectionObserver()	|创建并返回一个 IntersectionObserver 对象实例
##### 绘画
|canvas| API使用，详见canvas文档。|
|--|:--:|

## 4. nvue中使用字体图标
#### addRule(type, contentObject)

- @fontFace 协议名称，不可修改。
- @fontFamily font-family的名称。
- @src 字体地址，url('') 是保留字段，其参数如下:
  - http. 从HTTP请求加载, e.g. url('http://at.alicdn.com/t/font_1469606063_76593.ttf')
  - https. 从HTTPS请求加载, e.g. url('https://at.alicdn.com/t/font_1469606063_76593.ttf')
  - local, Android ONLY. 从assets目录读取, e.g. url('local://foo.ttf'), foo.ttf 是文件名在你的assets目录中.
  - file. 从本地文件读取, e.g. url('file://storage/emulated/0/Android/data/com.alibaba.weex/cache/http:__at.alicdn.com_t_font_1469606063_76593.ttf')
  - data. 从base64读取, e.g. url('data:font/truetype;charset=utf-8;base64,AAEAAAALAIAAAwAwR1NVQrD+....'), 上述data字段不全。
```html
	<template>
		<view>
			<text class="iconfont">&#xe85c;</text>	
		</view>
	</template>
	<script>
		export default{
			beforeCreate() {
				let domModule = weex.requireModule('dom')
        domModule.addRule('fontFace', {
          fontFamily: 'iconfont',
          src: "url('/static/css/iconfont.ttf')",
        })
			}
		}
	</script>
	<style>
		.my-iconfont {
			font-family:iconfont;
			font-size:60rpx;
			color: #00AAFF;
		}
	</style>
```

## 4.参考文档
- [nvue组件](https://uniapp.dcloud.net.cn/component/barcode.html#)
- [nvue开发](https://uniapp.dcloud.net.cn/tutorial/nvue-outline.html#)
- [nvue使用字体图标](https://uniapp.dcloud.net.cn/tutorial/nvue-api.html#addrule)


