# 快速开始

## 什么是 scrcpy

scrcpy 就是通过 adb 调试的方式来将手机屏幕投到电脑上，并可以通过电脑控制您的 Android 设备。它可以通过 USB 连接，也可以通过 Wifi 连接（类似于隔空投屏），而且不需要任何 root 权限，不需要在手机里安装任何程序。scrcpy 同时适用于 GNU / Linux，Windows 和 macOS。

## 使用 scrcpy 的要求

- Android 设备至少需要 API 21（Android 5.0 以上版本）;
- 确保在您的设备上启用了 adb 调试;
- 在某些设备上，您还需要启用其他选项以使用键盘和鼠标控制它。

## 安装 scrcpy

### 1. 安装 scrcpy

```bash
git clone https://github.com/Genymobile/scrcpy.git

或者

下载安装包
https://github.com/Genymobile/scrcpy/releases
```

## 使用

打开 cmd 定位到此目录（在地址栏中输入 cmd 回车），或者将该目录如 D:\scrcpy-win64-v2.1.1 加入到系统环境变量中，程序的使用都在 cmd 命令行中操作。

## 使用 USB 进行连接

此方式推荐使用，相对更加流畅。

手机通过 USB 连接到 PC 上，首次连接会弹出是否信任该电脑，点击始终信任即可。

- 运行 adb usb 查看是否连接成功

```bash
D:\scrcpy-win64-v1.10>adb usb
restarting in USB mode
```

- 运行 scrcpy

```bash
D:\scrcpy-win64-v1.10>scrcpy.exe
```

## 使用无线连接

此连接方式更加方便快捷，若宽带速率高，使用效果更佳，使用方法也非常简单。

- 确保 PC 和手机在同一 Wifi 中
- 手机先通过 USB 与 PC 相连
- 在 PC 上运行 adb tcpip 服务端口，如端口为 5555

```bash
D:\scrcpy-win64-v1.10>adb tcpip 5555
restarting in TCP mode port: 5555
```

- 拔下你的设备，断开 USB 连接
- 在 PC 上运行 adb connect 手机 IP:服务端口（手机 IP 可通过手机的状态信息查看，或者登录路由器查看，一般以 192.168 开头）

```bash
D:\scrcpy-win64-v1.10>adb connect 192.168.0.4:5555
connected to 192.168.0.4:5555
```

- 运行 scrcpy，在 cmd 中输入 scrcpy.exe
- 性能与 USB 不同，默认的 scrcpy 比特率是 8Mbps，这对于 Wi-Fi 连接来说可能太多了。根据使用情况，降低比特率和分辨率可能是一个很好的折中方案。

```bash
scrcpy --bit-rate 2M --max-size 800
# 或者简写
scrcpy -b2M -m800
```

## 切回 USB 连接

- 运行 adb usb

```bash
D:\scrcpy-win64-v1.10>adb usb
restarting in USB mode
```

## 常用快捷键（重要）

| 描述                     | 快捷键       |
| :----------------------- | :----------- |
| 切换全屏模式             | Ctrl+f       |
| 点击手机电源             | Ctrl+p       |
| 返回                     | Ctrl+b       |
| 返回到 HOME              | Ctrl+h       |
| 多任务                   | Ctrl+s       |
| 更多操作                 | 长按鼠标左键 |
| 显示最佳窗口             | Ctrl+g       |
| 调节音量                 | Ctrl+上下键  |
| 关闭设备屏幕（保持镜像） | Ctrl+o       |
| 将设备剪贴板复制到计算机 | Ctrl+c       |
| 将计算机剪贴板粘贴到设备 | Ctrl+v       |
