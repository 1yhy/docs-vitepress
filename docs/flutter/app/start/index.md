# Windows 安装 Flutter
## 环境要求
- Windows10
- 安装 Android Studio
  - 安装 Android SDK
  - 安装 Android SDK Platform
- 安装 Flutter SDK
- 安装 Visual Studio
- 配置环境变量
  - 环境变量添加 Flutter SDK 路径
    ```bash
      D:\flutter\bin
    ```
- 环境检查
  ```bash
    flutter doctor
  ``` 


## 常见问题
- 问题1
  - 问题描述
    - flutter doctor 检查环境时
      - ```bash
          Android license status unknown.
          Run `flutter doctor --android-licenses` to accept the SDK licenses.
          See https://flutter.dev/docs/get-started/install/windows#android-setup for more details.
        ```
  - 解决方案
    - 执行 flutter doctor --android-licenses

- 问题2
  - 问题描述
    - 执行 flutter doctor --android-licenses时
      - ```bash
          A JNI error has occurred, please check your installation and try again mainз쳣 java.lang.UnsupportedClassVersionError.....
        ```
  - 解决方案
    - [参考链接](https://github.com/flutter/flutter/issues/120388)
    - 打开 Android Studio，选择setting->Android SDK->SDK Tools->勾选 Android SDK Command-line Tools(lastest)->选择右下角show package details->勾选 8.0版本->点击apply->点击ok
    - 打开Android sdk目录
    - “C:\Users\USERNAME\AppData\Local\Android\Sdk\cmdline-tools”，把 8.0 重命名为“latest”
    - 重新执行 flutter doctor --android-licenses
    - flutter doctor 重新检查环境
