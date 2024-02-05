# 快速开始

## 什么是scrcpy
scrcpy就是通过adb调试的方式来将手机屏幕投到电脑上，并可以通过电脑控制您的Android设备。它可以通过USB连接，也可以通过Wifi连接（类似于隔空投屏），而且不需要任何root权限，不需要在手机里安装任何程序。scrcpy同时适用于GNU / Linux，Windows和macOS。

## 使用scrcpy的要求
- Android设备至少需要API 21（Android 5.0以上版本）;
- 确保在您的设备上启用了adb调试;
- 在某些设备上，您还需要启用其他选项以使用键盘和鼠标控制它。
## 安装scrcpy
### 1. 安装scrcpy
```bash
git clone https://github.com/Genymobile/scrcpy.git

或者

下载安装包
https://github.com/Genymobile/scrcpy/releases
```

## 使用
打开cmd定位到此目录（在地址栏中输入cmd回车），或者将该目录如D:\scrcpy-win64-v2.1.1加入到系统环境变量中，程序的使用都在cmd命令行中操作。

## 使用USB进行连接
此方式推荐使用，相对更加流畅。

手机通过USB连接到PC上，首次连接会弹出是否信任该电脑，点击始终信任即可。
- 运行adb usb查看是否连接成功
```bash
D:\scrcpy-win64-v1.10>adb usb
restarting in USB mode
```
- 运行scrcpy
```bash
D:\scrcpy-win64-v1.10>scrcpy.exe
```
## 使用无线连接

此连接方式更加方便快捷，若宽带速率高，使用效果更佳，使用方法也非常简单。

- 确保PC和手机在同一Wifi中
- 手机先通过USB与PC相连
- 在PC上运行 adb tcpip 服务端口，如端口为5555
```bash
D:\scrcpy-win64-v1.10>adb tcpip 5555
restarting in TCP mode port: 5555
```
- 拔下你的设备，断开USB连接
- 在PC上运行 adb connect 手机IP:服务端口（手机IP可通过手机的状态信息查看，或者登录路由器查看，一般以192.168开头）
```bash
D:\scrcpy-win64-v1.10>adb connect 192.168.0.4:5555
connected to 192.168.0.4:5555
```
- 运行scrcpy，在cmd中输入scrcpy.exe
- 性能与USB不同，默认的scrcpy比特率是8Mbps，这对于Wi-Fi连接来说可能太多了。根据使用情况，降低比特率和分辨率可能是一个很好的折中方案。
```bash
scrcpy --bit-rate 2M --max-size 800
# 或者简写
scrcpy -b2M -m800
```

## 切回USB连接
- 运行adb usb
```bash
D:\scrcpy-win64-v1.10>adb usb
restarting in USB mode
```

## 常用快捷键（重要）
|描述|	快捷键|
|:---|:---|
|切换全屏模式|	Ctrl+f|
|点击手机电源	|Ctrl+p|
|返回	|Ctrl+b|
|返回到HOME	|Ctrl+h|
|多任务	|Ctrl+s|
|更多操作	|长按鼠标左键|
|显示最佳窗口	|Ctrl+g|
|调节音量	|Ctrl+上下键|
|关闭设备屏幕（保持镜像）|	Ctrl+o|
|将设备剪贴板复制到计算机	|Ctrl+c|
|将计算机剪贴板粘贴到设备	|Ctrl+v|
