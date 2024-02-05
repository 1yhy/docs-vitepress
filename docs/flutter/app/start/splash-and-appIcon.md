# 启动图和应用图标配置

## 应用图标配置
使用[`flutter_launcher_icons`](https://pub.dev/packages/flutter_launcher_icons)插件
```bash
  flutter pub add flutter_launcher_icons
  flutter pub run flutter_launcher_icons #
```
```yaml
# app图标
flutter_launcher_icons:
  android: "launcher_icon"
  ios: true
  image_path: "assets/icons/icon.png"
  min_sdk_android: 21 # android min sdk min:16, default 21
```

## 启动图配置
- 使用[`flutter_native_splash`](https://pub.dev/packages/flutter_native_splash)插件
```bash
  flutter pub add flutter_native_splash ## 安装
  dart run flutter_native_splash:create ## 生成启动图
```
- 简单配置
```yaml
# 启动图
flutter_native_splash:
  background_image: "assets/icons/launcher_android.png"
  web: false
  fullscreen: true
  android_12:
    image: assets/icons/launcher_android.png
    fullscreen: true
```

- **注意事项**
1. `background_image`和`color`只有一个生效
2. 安卓12以上无法使用背景图，上面配置`android_12`只能生成相应文件
3. 安卓12使用启动图背景图：
  - `app/src/main/AndroidMenifest.xml`下的`activity`节点添加：
    - ```xml
        <meta-data
          android:name="io.flutter.embedding.android.SplashScreenDrawable"
          android:resource="@drawable/launch_background"
        />
      ```
  - `app/src/main/res`目录修改`values-31`和`values`目录,保持一致，不设置`values-31`安卓12以上背景图启动时会一小段白屏
    ```xml
      <style name="LaunchTheme" parent="@android:style/Theme.Light.NoTitleBar">
        <item name="android:forceDarkAllowed">false</item>
        <item name="android:windowFullscreen">true</item> <!--#全屏 -->
        <item name="android:windowDrawsSystemBarBackgrounds">false</item> <!-- true表示应用会绘制系统栏背景。 -->
        <item name="android:windowTranslucentNavigation">true</item> <!-- 使导航栏变为半透明，这样你的应用内容可以延伸到导航栏下方。不设置启动图可以会出现突然上移 -->
        <item name="android:windowBackground">@drawable/launch_background</item> <!-- 修改为背景图，生成的文件没有这个配置，自己修改 -->
        <item name="android:windowLayoutInDisplayCutoutMode">shortEdges</item>
    </style>
    ```
  - `app/src/main/res`目录`drawable`下的xml文件
    ```xml
    <layer-list xmlns:android="http://schemas.android.com/apk/res/android">
      <item>
          <bitmap android:gravity="fill" android:src="@drawable/background"/>
      </item>
    </layer-list>
    ```
