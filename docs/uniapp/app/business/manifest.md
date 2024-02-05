# manifest配置
## 1. 什么是manifest.json
&emsp;&emsp;manifest.json是uni-app项目的配置文件，用于指定项目的图标、页面路径、网络超时时间、界面样式等。  
&emsp;&emsp;manifest.json是一个JSON对象，包含了应用的配置信息，如图标、界面样式、网络超时时间等。manifest.json的配置项非常多，但大部分都有默认值，只有少数是必填项,其中包含许多业务模块的配置。  
&emsp;&emsp;本文只介绍uni-app开发中常用的配置项，详细的配置项请参考[manifest.json配置项说明](https://uniapp.dcloud.net.cn/collocation/manifest-app.html)。

## 2. manifest.json的位置
manifest.json的位置在项目的根目录下，如下图所示：  
HBuilderX创建的uni-app项目默认包含manifest.json文件，并且已经配置了一些默认值，HBuiderX会根据manifest.json的配置项生成对应的原生配置文件，如Android平台的AndroidManifest.xml、iOS平台的Info.plist等。
- 使用HBuilderX创建的uni-app项目，点击`manifest.json`文件的可视化界面，方便操作。
- 使用cli创建的uni-app项目，可以直接在项目根目录下的manifest.json文件中进行配置。也可以使用HBuilderX打开项目，然后点击`manifest.json`文件的可视化界面，方便操作。

## 3. manifest.json开发App端常用的配置项
以上均以项目实际情况为准，不一定全部需要配置，根据实际情况进行配置即可。不需要使用的暂时不勾选，**选择新模块或者插件后需要重新打包项目自定义基座**。
#### 3.1 基础配置
||基础配置|
| :-------- | :-----: |
| AppID | AppID是应用的唯一标识，一般使用包名的形式，如`com.example.demo`。使用默认值即可，不需要修改。一般为`__UNI__XXXXX`。 |
| 应用名称    | app应用的名称   | 
| 应用描述    | app应用的描述信息   |
| 应用版本名称    | 默认值：1.0.0   |
| 应用版本号    | 默认为：100   |
| vue版本选择    | 值为创建项目的vue版本   |

#### 3.2 启动界面配置
||启动界面配置|
| :-------- | :-----: |
| 是否等待首页渲染完毕后再关闭启动界面 | 根据实际勾选 |
| 是否在程序启动界面显示等待雪花 | 根据实际勾选 |
| Android启动图 | 有启动图尽量选择自定义启动图进行配置 |
| 使用原生隐私政策框 | 勾选，上架App需要配置 |
| ios通用启动界面 | 勾选通用启动界面,根据实际情况选择 |

#### 3.2 App模块配置
根据项目实际情况选择需要的模块，不需要的模块不勾选即可。大多数需要密钥，需要到对应的平台申请密钥，然后填写到对应的位置。

#### 3.3 App权限配置
- Android平台默认会配置好权限，无需修改。
- iOS平台上架时，需要在下面配置权限使用场景描述。

```json
// 仅列出部分权限使用场景描述，根据实际情况进行配置，可自行查找对应的权限使用场景描述
"privacyDescription": {
  "NSPhotoLibraryUsageDescription": "APP需要您的同意，才能访问相册，以便于图片选取、上传、发布",
  "NSPhotoLibraryAddUsageDescription": "APP需要您的同意，才能访问相册，以便于保存图片",
  "NSCameraUsageDescription": "APP需要您的同意，才能使用摄像头，以便于相机拍摄，上传、发布照片",
  "NSLocationWhenInUseUsageDescription": "APP需要您的同意，才能在使用时获取位置信息，以便于搜索附近的合作门店位置",
  "NSMicrophoneUsageDescription": "APP需要您的同意，才能使用麦克风，以便于视频录制、语音识别、语音聊天",
  "NSLocationAlwaysAndWhenInUseUsageDescription": "App需要您的同意，才能始终访问位置信息，以便于搜索附近的合作门店位置",
  "NSContactsUsageDescription": "APP需要您的同意，才能访问通讯录 (通讯录信息仅用于查找联系人，并会得到严格保密)"
}
```

#### 3.3 App原生插件配置
- **使用新插件时，需要重新打包项目自定义基座才能生效。**

#### 3.4 App常用其他配置
||App常用其他配置|
| :-------- | :-----: |
|自定义404等错误页面|根据文档进行配置，暂时可以不配置|
| fast启动模式 | 根据实际勾选，推荐勾选 |
| 纯nvue项目 | 根据实际勾选 |
| 安卓urlSchemes | 根据实际情况填写，主要用于使用第三方sdk时跳转自己app |
| minSdkVersion | Android平台最低支持版本，详情参考：[Android平台设置minSdkVersion](https://uniapp.dcloud.net.cn/tutorial/app-android-minsdkversion.html) |
| iosUrlSchemes | 根据实际情况填写，主要用于使用第三方sdk时跳转自己app,对应原生ios配置的**在 Xcode 中，点击「TARGETS」，在「info」标签栏的最下面的 URL Types 的 URL Schemes**  |
| ios应用访问白名单 | 根据实际情况填写，对应原生ios配置的**在 Xcode 中，在「info.plist」的`LSApplicationQueriesSchemes`配置** |
| 使用广告标识 | 不使用不建议勾选，ios上架不通过 |

## 4.源码视图
以上配置均可在源码视图json文件中进行配置，HBuilderX只是提供了可视化界面，方便操作，更多额外配置需要参考[官方文档](https://uniapp.dcloud.net.cn/collocation/manifest-app.html)说明。

## 5.参考文档
- [App打包配置](https://uniapp.dcloud.net.cn/tutorial/app-base.html)
- [manifest.json配置项说明](https://uniapp.dcloud.net.cn/collocation/manifest-app.html)
