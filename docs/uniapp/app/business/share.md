# 第十五集 分享

## 1. uni.share分享
#### 前置条件
- 需要配置好manifest.json文件的第三方分享模块
- 配置好后，需要重新打包自定义基座，才能生效
```js
uni.share({
    provider: 'weixin', // 分享服务提供商，通过uni.getProvider获取，在manifest.json的sdk配置中配的分享sdk厂商
    type: 0, // 分享类型，0图文，1纯文字，2纯图片，3音乐，4视频，5小程序，默认为0
    href: 'https://uniapp.dcloud.io/', // 分享网页地址，type=0时，必填
    scence: 'WXSceneSession', // 分享场景，微信分享必填 WXSceneSession：分享到聊天界面；WXSceneTimeline：分享到朋友圈；WXSceneFavorite： 分享到微信收藏
    title: 'Hello uni-app', // 分享标题
    summary: 'Hello uni-app', // 分享内容摘要 分享类型为1时，必填
    imageUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uniapp-assets/books.gif', // 分享图片，type=0或type=2或type=5时
    mediaUrl: 'http://music.163.com/song/media/outer/url?id=108220.mp3', // 分享音视频地址，type=3、4时，必填
    openCustomerServiceChat: false, // 是否启用拉起客服功能（目前仅支持微信）
    corpid: '', // 客服ID（目前仅支持微信） openCustomerServiceChat为true时，必填
    customerUrl: '', // 客服消息打开的页面地址（目前仅支持微信） openCustomerServiceChat为true时，必填
    miniProgram: { // 分享小程序，type=5时，必填
        id: 'gh_3ac2059ac66f', // 小程序id
        path: '/pages/index/index', // 点击链接进入的页面
        type: 0, // 小程序版本类型。可取值： 0-正式版； 1-测试版； 2-体验版。 默认值为0。
        webUrl: 'https://uniapp.dcloud.io/', // 兼容低版本的网页链接
    },
    success: function (res) {
        console.log('success:' + JSON.stringify(res));
    },
    fail: function (err) {
        console.log('fail:' + JSON.stringify(err));
    }
});
```

#### 使用**uni-ui组件**[uni-popup-share](https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html#uni-popup-share-%E5%88%86%E4%BA%AB%E7%A4%BA%E4%BE%8B)分享
```html
<uni-popup ref="popup" type="share">
	<uni-popup-share title="分享到" @select="select"></uni-popup-share>
</uni-popup>
```
## 2. uni.shareWithSystem分享
调用系统分享组件发送分享消息，不需要配置分享SDK
```js
uni.shareWithSystem({
    type: 'text', // 分享类型，只支持text，image，默认为text
    summary: 'Hello uni-app', // 分享内容
    href: 'https://uniapp.dcloud.io/', // 分享链接，ios端分享到微信时必填此字段
    imageUrl: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uniapp-assets/books.gif', // 分享图片，仅支持本地路径
    success: function (res) {
        console.log('success:' + JSON.stringify(res));
    },
    fail: function (err) {
        console.log('fail:' + JSON.stringify(err));
    }
});
```
::: warning
- Android端当msg参数中设置图片（imageUrl属性）时，分享类型自动变为为image，在分享时可能只会发送图片（如微信）；没有设置图片时分享类型则认为是文本text。
- Android端高版本无法分析私有路径的图片，只能分享来自相册的图片（使用 uni.chooseImage 选择图像时请设置为原图）。
- iOS端不同的分享程序对分享内容有要求，如微信分享时必需添加链接地址href，否则微信分享失败。 注：iOS8.0及以上系统触发成功回调则表示发送消息成功。
:::

## 3. 使用plus.share.sendWithSystem分享
```js
plus.share.sendWithSystem(
  {
    type:'text', // 分享类型，仅支持text、image
    content:'分享内容', // 分享消息的文字内容
    pictures:['_www/assets/books.gif'], // 分享消息中包含的图片路径，仅支持本地路径。 若分享平台仅支持提交一张图片，传入多张图片则仅提交第一张图片。 如果未指定type类型，优先级顺序为：pictures>content（即设置了pictures则认为分享图片类型）
    href:'https://www.dcloud.io/' // 分享独立的链接地址，仅支持网络地址（以http://或https://开头）。如果未指定type类型，优先级顺序为：href>pictures>content（即设置了href则认为分享网页类型）。
  },
  function(){
    console.log('分享成功');
  },
  function(e){
    console.log('分享失败：'+JSON.stringify(e));
  }
);

```
## 4. 参考文档
- [uni.share](https://uniapp.dcloud.net.cn/api/plugins/share.html#share)
- [uni-popup-share](https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html#uni-popup-share-%E5%88%86%E4%BA%AB%E7%A4%BA%E4%BE%8B)
- [底部菜单插件市场](https://ext.dcloud.net.cn/search?q=%E5%BA%95%E9%83%A8%E5%9B%BE%E6%A0%87%E8%8F%9C%E5%8D%95)
