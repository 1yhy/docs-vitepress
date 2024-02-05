# 第三集 组件与组件库
&emsp;&emsp;组件是uni-app的基础，也是uni-app的核心。uni-app的组件，分为基础组件和扩展组件。这篇文章将介绍uni-app开发app使用的组件与组件库选型。

## 1. 基础组件
uni-app的组件，分为基础组件和扩展组件。

基础组件在uni-app框架中已经内置，无需将内置组件的文件导入项目，也无需注册内置组件，随时可以直接使用，比如`<view>`组件。

除了基础组件，都称为扩展组件。扩展组件需要将组件导入项目中才可以使用。可以选择组件库的方式导入，也可以选择单个组件导入。

开发者可以通过组合这些基础组件进行快速开发。在需要复用的情况下可封装成扩展组件。

## 2. 基础组件列表
基础组件分为以下十几大类：

#### 视图容器（View Container）：

| 组件名       |                              说明                              |
| ------------ | :------------------------------------------------------------: |
| view         |                  视图容器，类似于HTML中的div                   |
| scroll-view  |                         可滚动视图容器                         |
| swiper       |                滑块视图容器，比如用于轮播banner                |
| match-media  |           屏幕动态适配组件，比如窄屏上不显示某些内容           |
| movable-area |                           可拖动区域                           |
| movable-view | 可移动的视图容器，在页面中可以拖拽滑动或双指缩放。movable-view | 必须在movable-area组件中 |
| cover-view   |                 可覆盖在原生组件的上的文本组件                 |
| cover-image  |                 可覆盖在原生组件的上的图片组件                 |

#### 基础内容（Basic Content）：

| 组件名    |      说明      |
| --------- | :------------: |
| icon      |      图标      |
| text      |      文字      |
| rich-text | 富文本显示组件 |
| progress  |     进度条     |
#### 表单组件（Form）：
| 标签名                  |         说明         |
| ----------------------- | :------------------: |
| button                  |         按钮         |
| checkbox                |      多项选择器      |
| editor                  |     富文本输入框     |
| form                    |         表单         |
| input                   |        输入框        |
| label                   |         标签         |
| picker                  |   弹出式列表选择器   |
| picker-view             | 窗体内嵌式列表选择器 |
| radio                   |      单项选择器      |
| slider                  |      滑动选择器      |
| switch                  |      开关选择器      |
| textarea	|多行文本输入框 |
#### 路由与页面跳转（Navigation）：

| 组件名    |             说明              |
| --------- | :---------------------------: |
| navigator | 页面链接。类似于HTML中的a标签 |
#### 媒体组件（Media）：

| 组件名      |             说明             |
| ----------- | :--------------------------: |
| audio       |             音频             |
| camera      |             相机             |
| image       |             图片             |
| video       |             视频             |
| live-player |           直播播放           |
| live-pusher | 实时音视频录制，也称直播推流 |
#### 地图（Map）：

| 组件名 | 说明  |
| ------ | :---: |
| map    | 地图  |
#### 画布（Canvas）：

| 组件名 | 说明  |
| ------ | :---: |
| canvas | 画布  |
#### webview（Web-view）：

| 组件名   |     说明      |
| -------- | :-----------: |
| web-view | web浏览器组件 |
#### 广告
| 组件名  |        说明        |
| ------- | :----------------: |
| ad      |      广告组件      |
| ad-draw | 沉浸视频流广告组件 |
#### 页面属性配置

| 组件名         |         说明         |
| -------------- | :------------------: |
| custom-tab-bar | 底部tabbar自定义组件 |
| navigation-bar |     页面顶部导航     |
| page-meta      |   页面属性配置节点   |
#### uniCloud
| 组件名          |             说明             |
| --------------- | :--------------------------: |
| unicloud-db组件 | uniCloud数据库访问和操作组件 |

## 3. 扩展组件
虽然所有的业务需求都可以通过基础组件满足，但仅有基础组件是低效的，实际开发中会有很多封装的组件。对于uni-app开发者来说，uni-app的扩展组件库是必不可少的。选择合适的组件库，可以大大提高开发效率。

#### 组件单个导入
如果只需要使用组件库中的某个组件，可以单个导入组件。比如导入`uni-ui`组件库中的`uni-list`组件。使用HbuilderX创建的项目，直接通过[插件市场](https://ext.dcloud.net.cn/plugin)导入即可使用；而cli的项目可以通过[插件市场](https://ext.dcloud.net.cn/plugin)寻找合适的组件进行导入，也可以通过npm导入。

#### 组件库导入
如果需要使用组件库中的多个组件，可以选择导入组件库。组件库的导入方式有两种，一种是通过npm导入，一种是通过插件市场导入。可以通过组件库文档了解组件库的导入方式。

组件库有很多，选择时主要注意以下几点：
1. 组件库是否支持uni-app，是否支持nvue
2. 组件库是只能在app端使用，还是可以在h5端使用
3. 组件库是否兼容vue2和vue3

可以根据上面的几点，选择合适的组件库。如果是uni-app的新手，建议选择uni-ui组件库，它是uni-app官方推荐的组件库，支持uni-app所有端，支持vue2和vue3，支持ts，而且支持nvue。而且`uni-ui`与[uni统计](https://tongji.dcloud.net.cn/)自动整合,如果有使用uni统计的需求，可以选择uni-ui。

##### 组件库推荐
以下推荐的组件库，可以根据自己的需求选择合适的组件库。
- [uni-ui](https://ext.dcloud.net.cn/plugin?id=55) 官方推荐的组件库，支持uni-app所有端，支持vue2和vue3，支持ts，支持nvue
- [uview-ui](https://ext.dcloud.net.cn/plugin?id=1593) 整合了非常多组件，功能丰富、文档清晰
- [color-ui](https://ext.dcloud.net.cn/plugin?id=239) 一款颜值超高的css组件库


## 4. easycom组件规范
传统vue组件，需要安装、引用、注册，三个步骤后才能使用组件。easycom将其精简为一步。

只要组件安装在项目的components目录下或uni_modules目录下，并符合components/组件名称/组件名称.vue目录结构。就可以不用引用、注册，直接在页面中使用。

比如举例的`uni-rate`组件，它导入到uni-app项目后，存放在了目录/components/uni-rate/uni-rate.vue

同时它的组件名称也叫uni-rate，所以这样的组件，不用在script里注册和引用。 如下：

  ```html
  <template>
		<view>
			<uni-rate></uni-rate><!-- 这里会显示一个五角星，并且点击后会自动亮星 -->
		</view>
	</template>
<script>
	// 这里不用import引入，也不需要在components内注册uni-list组件。template里就可以直接用
	export default {
		data() {
			return {

			}
		}
	}
</script>
```

不管components目录下安装了多少组件，easycom打包后会自动剔除没有使用的组件，对组件库的使用尤为友好。

组件库批量安装，随意使用，自动按需打包。以官方的uni-ui为例，在HBuilderX新建项目界面选择uni-ui项目模板，只需在页面中敲u，拉出大量组件代码块，直接选择，即可使用。大幅提升开发效率，降低使用门槛。

::: warning
如果你的组件名称或路径不符合easycom的默认规范，可以在pages.json的easycom节点进行个性化设置，自定义匹配组件的策略。
:::

##### 自定义easycom配置的示例

如果需要匹配node_modules内的vue文件，需要使用packageName/path/to/vue-file-$1.vue形式的匹配规则，其中packageName为安装的包名，/path/to/vue-file-$1.vue为vue文件在包内的路径。

```json
"easycom": {
  "autoscan": true,
  "custom": {
    "^uni-(.*)": "@/components/uni-$1.vue", // 匹配components目录内的vue文件
    "^vue-file-(.*)": "packageName/path/to/vue-file-$1.vue" // 匹配node_modules内的vue文件
  }
}
```
##### 说明

- easycom方式引入的组件无需在页面内import，也不需要在components内声明，即可在任意页面使用
- easycom方式引入组件不是全局引入，而是局部引入。例如在H5端只有加载相应页面才会加载使用的组件
- 在组件名完全一致的情况下，easycom引入的优先级低于手动引入（区分连字符形式与驼峰形式）
- 考虑到编译速度，直接在pages.json内修改easycom不会触发重新编译，需要改动页面内容触发。
- easycom只处理vue组件，不处理小程序专用组件（如微信的wxml格式组件）。不处理后缀为.nvue的组件。但vue组件也可以全端运行，包括小程序和app-nvue。可以参考uni ui，使用vue后缀，同时兼容nvue页面。
- nvue页面里引用.vue后缀的组件，会按照nvue方式使用原生渲染，其中不支持的css会被忽略掉。这种情况同样支持easycom

## 5. uni_module规范
- uni_module可以使用组件、js库、页面、项目等所有DCloud插件市场所支持的种类。使用方便，易于管理。
- 插件开发者，可以像开发uni-app项目一样编写一个uni_modules插件，并在HBuilderX中直接上传至插件市场。
- 插件使用者，可以在插件市场查找符合自己需求的uni_modules插件，使用HBuilderX 3.1.0+直接导入到自己的uni-app项目中。后续还可以在HBuilderX中直接点右键升级插件。CLI创建的项目也可以直接使用uni_modules插件，只需要到插件市场导入即可。
- 符合uni_module规范的组件都在项目的uni_modules目录下，以插件id为目录存放。（项目模板不放在uni_modules目录下）。在HBuilderX中点右键可方便的更新插件，插件作者也可以方便的上传插件。
- uni_module插件内components目录同样支持easycom规范，插件使用者可以直接在项目中使用插件内符合easycom规范的组件，当项目或插件内存在easycom组件冲突，编译时会给予提示，您可以通过修改组件目录及组件文件名称来解决冲突问题。

## 6. 原生组件和原生插件
#### 基础组件里的原生组件
uni-app的基础组件里，有一批原生组件，如video、map...

这些组件如果用于vue页面，也就是webview渲染时，会造成层级高于普通前端组件的情况。

它们的层级需要使用cover-view等特殊组件才能覆盖，同时在使用中有些需要注意的事情。

在app-nvue里没有这些问题。

#### uni-app的App端原生插件
uni-app的App端支持原生插件，这类插件使用iOS或Android原生语言编写，封装成插件，供其他开发者使用js来调用。

原生插件分为原生组件component和原生模块module。

其实原生组件component只能在App-nvue环境中使用。

## 7. 参考文档
- [组件使用的入门教程](https://uniapp.dcloud.net.cn/component/)
- [组件库选型指南](https://uniapp.dcloud.net.cn/component/component-selection.html)
