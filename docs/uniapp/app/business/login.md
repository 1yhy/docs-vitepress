# 第十三集 登录

## 1. 前置条件
- 需要配置好manifest.json文件的第三方登录模块
- 配置好后，需要重新打包自定义基座，才能生效

## 2. 微信登录
### 2.1. 填写微信登录的appid
- 安卓：打开项目的manifest.json文件，在“App模块配置”项的“OAuth(登录鉴权)”下，勾选“微信登录”，将[微信开放平台](https://open.weixin.qq.com/)申请应用的AppID值填入“AppID”中
- ios：打开项目的manifest.json文件，打开源码视图，找到`OAuth`项下的`UniversalLinks`，将[微信开放平台](https://open.weixin.qq.com/)申请应用的iOS平台通用链接值填入,必须与微信开放平台配置的一致
- 配置完成后进行打包自定义基座，才能生效

### 2.2. 调用微信登录
#### 2.2.1. 调用uni.login()获取临时票据code
1. 客户端调用api向微信请求授权，获取临时票据（code），向开发者业务服务器发起网络请求
2. 业务服务器通过code + 仅保存在服务器的appsecret参数，向：微信开放平台接口发起网络请求详情。
3. 业务服务器成功获取用户信息后，再依据unionid或openid查数据库的用户表并生成新token，并返回token给客户端
4. 客户端得到token后，保存到storage完成登录。
```js
uni.login({ 
	"provider": "weixin",
	"onlyAuthorize": true, // 微信登录仅请求授权认证
	success: function(event){
		const {code} = event
		//客户端成功获取授权临时票据（code）,向业务服务器发起登录请求。
		uni.request({
		    url: 'https://www.example.com/loginByWeixin', //仅为示例，并非真实接口地址。
		    data: {
		        code: event.code
		    },
		    success: (res) => {
		        //获得token完成登录
				uni.setStorageSync('token',res.token)
		    }
		});
	},
	fail: function (err) {
        // 登录授权失败  
        // err.code是错误码
    }
})

```

#### 2.2.2 调用uni.getUserInfo()获取用户信息
```js
uni.getUserInfo({
  provider: 'weixin',
  success: function (res) {
    // 获得用户信息
    const {userInfo} = res
  },
  fail: function (err) {
    // 获取用户信息失败
    // err.code是错误码
  }
})
```


## 3. 参考文档
- [uni.login](https://uniapp.dcloud.net.cn/api/plugins/login.html)
- [微信开放平台](https://open.weixin.qq.com/)
- [通过code获取access_token](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Development_Guide.html#%E7%AC%AC%E4%BA%8C%E6%AD%A5%EF%BC%9A%E9%80%9A%E8%BF%87-code-%E8%8E%B7%E5%8F%96-access-token)
- [微信获取用户信息](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/WeChat_Login/Development_Guide.html#%E7%AC%AC%E5%9B%9B%E6%AD%A5%EF%BC%9A%E8%8E%B7%E5%8F%96%E7%94%A8%E6%88%B7%E4%BF%A1%E6%81%AF)
- [plus.oauth](https://www.html5plus.org/doc/zh_cn/oauth.html)



