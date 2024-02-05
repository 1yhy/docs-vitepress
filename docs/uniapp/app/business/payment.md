# 第十四集 支付

## 1. 前置条件
- 需要配置好manifest.json文件的第三方支付模块
- 配置好后，需要重新打包自定义基座，才能生效

## 2. 微信支付
### 2.1. 填写微信支付的appid
- 安卓：打开项目的manifest.json文件，在“App模块配置”项的**支付**下，勾**微信支付**，将[微信开放平台](https://open.weixin.qq.com/)申请应用的AppID值填入“AppID”中
- ios：打开项目的manifest.json文件，打开源码视图，找到`OAuth`项下的`UniversalLinks`，将[微信开放平台](https://open.weixin.qq.com/)申请应用的iOS平台通用链接值填入,必须与微信开放平台配置的一致
- 配置完成后进行打包自定义基座，才能生效

### 2.2. 调用微信支付
#### 2.2.1. 调用uni.requestPayment()发起支付
```js
// 以下参数均为示例，具体参数以实际为准,支付参数的获取需要在服务端进行
uni.requestPayment({
    "provider": "wxpay", 
    "orderInfo": {
        "appid": "wx499********7c70e",  // 微信开放平台 - 应用 - AppId，注意和微信小程序、公众号 AppId 可能不一致
        "noncestr": "c5sEwbaNPiXAF3iv", // 随机字符串
        "package": "Sign=WXPay",        // 固定值
        "partnerid": "148*****52",      // 微信支付商户号
        "prepayid": "wx202254********************fbe90000", // 统一下单订单号 
        "timestamp": 1597935292,        // 时间戳（单位：秒）
        "sign": "A842B45937F6EFF60DEC7A2EAA52D5A0" // 签名，这里用的 MD5/RSA 签名
    },
    success(res) {},
    fail(e) {}
})
```

## 3. 支付宝支付
### 3.1. 配置支付宝支付
- 打开项目的`manifest.json`文件，**App模块配置**项的**支付**下，勾**支付宝支付**即可

### 3.2 调用支付宝支付
```js
// 以下参数均为示例，具体参数以实际为准,支付参数的获取需要在服务端进行
uni.requestPayment({
    provider: 'alipay',
    orderInfo: 'orderInfo', // 支付宝订单数据(参数为字符串类型，与微信支付不同，字符串类型的数据类似微信支付对象进行生成拼接)
    success: function (res) {
        console.log('success:' + JSON.stringify(res));
    },
    fail: function (err) {
        console.log('fail:' + JSON.stringify(err));
    }
});
```

## 4. 参考文档
- [uni.requestPayment](https://uniapp.dcloud.net.cn/api/plugins/payment.html)
- [微信支付官方文档](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Pay/Vendor_Service_Center.html)
- [支付宝支付官方文档](https://opendocs.alipay.com/open/204/105297/)
- [plus.payment](https://www.html5plus.org/doc/zh_cn/payment.html)
