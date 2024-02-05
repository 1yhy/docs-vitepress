# 第十六集 获取系统权限

## 1. 获取系统权限

#### uni.getAppAuthorizeSetting()

获取用户的当前设置。完整参数说明参照[官方文档](https://uniapp.dcloud.net.cn/api/system/getappauthorizesetting.html)
- **authorized**：表示已经获得授权，无需再次请求授权；
- **denied**：表示请求授权被拒绝，无法再次请求授权；（此情况需要引导用户打开系统设置，在设置页中打开权限）
- **not determined**：表示尚未请求授权，会在App下一次调用系统相应权限时请求；（仅 iOS 会出现。此种情况下引导用户打开系统设置，不展示开关）
- **config error**：只有在 App 端时返回

```js
const appAuthorizeSetting = uni.getAppAuthorizeSetting()

console.log(appAuthorizeSetting.albumAuthorized) // 相册
console.log(appAuthorizeSetting.bluetoothAuthorized) // 蓝牙
console.log(appAuthorizeSetting.cameraAuthorized) // 相机
console.log(appAuthorizeSetting.locationAuthorized) // 地理位置
console.log(appAuthorizeSetting.locationReducedAccuracy) // 定位准确度。"reduced" 表示模糊定位；"full" 表示精准定位；"unsupported" 表示不支持
console.log(appAuthorizeSetting.microphoneAuthorized) // 麦克风
console.log(appAuthorizeSetting.notificationAlertAuthorized) // 允许通知带有提醒的开关
console.log(appAuthorizeSetting.notificationAuthorized) // 允许通知带有标记的开关
console.log(appAuthorizeSetting.notificationBadgeAuthorized) // 允许通知带有声音的开关
console.log(appAuthorizeSetting.notificationSoundAuthorized) // 允许通知带有震动的开关
console.log(appAuthorizeSetting.phoneCalendarAuthorized) // 日历
```

## 2. 推荐使用

#### 使用插件[App权限判断和提示 ](https://ext.dcloud.net.cn/plugin?id=594)
可以判断用户是否授权，如果没有授权，可以引导用户打开系统设置页面，进行授权。不满足需求时可以自行二次封装。
