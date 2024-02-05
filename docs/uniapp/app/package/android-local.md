# 第二十二集 Android本地离线打包


## 一、新建uniapp项目

## 二、进入Dcloud[开发者后台](https://dev.dcloud.net.cn/pages/app/list)

## 三、申请离线打包key

完整流程参考[离线打包](https://nativesupport.dcloud.net.cn/AppDocs/usesdk/appkey.html#)和[Android平台签名证书(.keystore)生成指南](https://ask.dcloud.net.cn/article/35777)

![image-20230510183107034](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510183107034.png)

#### 生成keystore
- windows打开cmd，输入以下命令，按照提示输入信息：

```bash
keytool -genkey -alias testalias -keyalg RSA -keysize 2048 -validity 36500 -keystore test.keystore
```
- 生成的keystore文件在当前目录下，查看keystore信息：
```bash
keytool -list -v -keystore test.keystore  
Enter keystore password: //输入密码，回车
```

#### 查看keystoreMD5（jdk版本不对，上面命令有可能看不到MD5）
- 第一种：[可获取MD5签名的JDK版本 分享](https://ask.dcloud.net.cn/article/38778)

- 第二种：安装[openssl](https://slproweb.com/products/Win32OpenSSL.html)（结果后面发现有MD5,但好像不对😅）

  有4种安装包：  
  Win64 OpenSSL v1.1.1i Light，安装Win64 OpenSSL v1.1.1i最常用的软件包  
  Win64 OpenSSL v1.1.1i，安装Win64 OpenSSL v1.1.1i完整软件包  
  Win32 OpenSSL v1.1.1i Light，安装Win32 OpenSSL v1.1.1i最常用的软件包  
  Win32 OpenSSL v1.1.1i，安装Win32 OpenSSL v1.1.1i完整软件包  

```bash
openssl version
```

**MD5**

```bash
keytool -exportcert -keystore xxx.keystore | openssl dgst -md5
```

- 第三种：使用一些网站查看MD5  
打开[香蕉云编](https://www.yunedit.com/sha1)，上传证书文件即可查看MD5




## 四、下载离线打包资源

[Android 离线SDK - 正式版 | uni小程序SDK (dcloud.net.cn)](https://nativesupport.dcloud.net.cn/AppDocs/download/android.html)

## 五、导入项目

- 生成uniapp项目本地打包资源

  ![image-20230510184058078](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510184058078.png)

- 使用Android Studio导入`HBuilder-Integrate-AS`工程

- 把本地打包资源复制到下面目录，删除原有项目

  ![image-20230510184213653](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510184213653.png)

- 修改appid,保证以下几个文件一致

  ![image-20230510184422428](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510184422428.png)

![image-20230510184733836](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510184733836.png)

- 修改build.grandle文件

  <img src="https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510185220451.png" alt="image-20230510185220451" style="zoom:50%;" />

  ```java
  defaultConfig {
          applicationId "uni.UNI74420D6" #项目包名
          minSdkVersion 21
          targetSdkVersion 33
          versionCode 103
          versionName "1.0.3"
          multiDexEnabled true
          compileOptions {
              sourceCompatibility JavaVersion.VERSION_1_8
              targetCompatibility JavaVersion.VERSION_1_8
          }
      }
  
      signingConfigs {
          config {
              keyAlias '' #证书别名
              keyPassword '123456' #证书密码
              storeFile file('src/main/assets/apps/***.keystore') #证书路径
              storePassword '123456' #证书密码
              v1SigningEnabled true
              v2SigningEnabled true
          }
      }
  
  dependencies {
      implementation fileTree(dir: 'libs', include: ['*.aar', '*.jar'], exclude: [])
      implementation 'androidx.appcompat:appcompat:1.0.0'
      implementation 'androidx.legacy:legacy-support-v4:1.0.0'
      implementation 'androidx.recyclerview:recyclerview:1.0.0'
      implementation 'com.facebook.fresco:fresco:2.5.0'
      implementation "com.facebook.fresco:animated-gif:2.5.0"
      implementation 'com.github.bumptech.glide:glide:4.9.0'
      implementation 'com.alibaba:fastjson:1.2.83'
      implementation 'androidx.webkit:webkit:1.3.0'
  }
  ```

  - 修改AndroidMainfest.xml,把key修改为自己的离线打包key

    ![image-20230510185321486](https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510185321486.png)



## 六、打包

按照以下流程，填写相关信息即可打包完成

<img src="https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510185659309.png" alt="image-20230510185659309" style="zoom:50%;" />

<img src="https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510185726760.png" alt="image-20230510185726760" style="zoom:50%;" />

<img src="https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510185756453.png" alt="image-20230510185756453" style="zoom:50%;" />

<img src="https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510185817125.png" alt="image-20230510185817125" style="zoom:50%;" />

<img src="https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230510185840939.png" alt="image-20230510185840939" style="zoom:50%;" />
