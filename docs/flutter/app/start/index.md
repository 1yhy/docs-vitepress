# Windows 安装 Flutter

## 环境要求

- Windows10
- 安装 [Android Studio](https://developer.android.com/studio/)
  - 安装 Android SDK
  - 安装 Android SDK Platform
- 安装 [Flutter SDK](https://storage.googleapis.com/flutter_infra_release/releases/stable/windows/flutter_windows_3.19.2-stable.zip)
- 安装 [Visual Studio](https://visualstudio.microsoft.com/downloads/)
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

- 问题 1

  - 问题描述
    - flutter doctor 检查环境时
      - ```bash
          Android license status unknown.
          Run `flutter doctor --android-licenses` to accept the SDK licenses.
          See https://flutter.dev/docs/get-started/install/windows#android-setup for more details.
        ```
  - 解决方案
    - 执行 flutter doctor --android-licenses

- 问题 2

  - 问题描述
    - 执行 flutter doctor --android-licenses 时
      - ```bash
          A JNI error has occurred, please check your installation and try again mainз쳣 java.lang.UnsupportedClassVersionError.....
        ```
  - 解决方案
    - [参考链接](https://github.com/flutter/flutter/issues/120388)
    - 打开 Android Studio，选择 setting->Android SDK->SDK Tools->勾选 Android SDK Command-line Tools(lastest)->选择右下角 show package details->勾选 8.0 版本->点击 apply->点击 ok
    - 打开 Android sdk 目录
    - “C:\Users\USERNAME\AppData\Local\Android\Sdk\cmdline-tools”，把 8.0 重命名为“latest”
    - 重新执行 flutter doctor --android-licenses
    - flutter doctor 重新检查环境

- 问题 3
  - 问题描述
    - 执行 flutter doctor --android-licenses 时
      - ```bash
          flutter doctor --android-licenses Unable to locate Android SDK.
        ```
  - 解决方案
    - ```bash
      flutter config --android-sdk <path-to-your-android-sdk-path>
      ```
