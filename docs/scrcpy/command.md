# scrcpy常用命令
以下命令由Github Copilot自动生成，仅供参考。
## 1. scrcpy常用命令
```bash
scrcpy -h # 查看帮助
scrcpy -V # 查看版本
scrcpy -s
scrcpy -p 8888 # 设置端口号
scrcpy -b 25M # 设置比特率
scrcpy -m 1024 # 设置最大分辨率
scrcpy -c 90 # 设置帧率
scrcpy -t # 在顶部显示设备的时间
scrcpy -n # 禁用设备的物理按钮
scrcpy -f # 设置全屏显示
scrcpy -r file.mp4 # 录制视频
scrcpy -r file.mkv # 录制视频
scrcpy -r file.gif # 录制视频
scrcpy -S # 在设备上显示触摸
scrcpy -C # 禁用剪贴板共享
scrcpy --always-on-top # 窗口置顶
scrcpy --window-title "My window title" # 设置窗口标题
scrcpy --window-x 100 # 设置窗口的x坐标
scrcpy --window-y 100 # 设置窗口的y坐标
scrcpy --window-width 1024 # 设置窗口的宽度
scrcpy --window-height 768 # 设置窗口的高度
scrcpy --window-borderless # 窗口无边框
scrcpy --turn-screen-off # 关闭设备屏幕
scrcpy --stay-awake # 保持设备唤醒
```

## 2. adb常用命令
```bash
adb devices # 查看连接的设备
adb usb # 通过USB连接
adb tcpip 5555 # 通过无线连接
adb connect
adb disconnect
```

## 3. 其他命令
```bash
adb shell input keyevent 26 # 按下电源键
adb shell input keyevent 82 # 按下菜单键
adb shell input keyevent 4 # 按下返回键
adb shell input keyevent 3 # 按下HOME键
adb shell input keyevent 187 # 按下多任务键
adb shell input keyevent 24 # 按下音量加键
adb shell input keyevent 25 # 按下音量减键
adb shell input keyevent 164 # 按下静音键
```
