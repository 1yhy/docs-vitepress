# 常见问题

## 1. adb 环境变量配置出错

### 1.1 问题描述

在使用 TypeScript 开发时，提示找不到模块，例如使用 uView 时：

```bash
D:\scrcpy>scrcpy
scrcpy 2.1.1 https://github.com/Genymobile/scrcpy
ERROR: CreateProcessW() error 5
ERROR: Failed to execute: [D:\scrcpy], [start-server]
ERROR: Could not execute “adb start-server”
ERROR: Could not start adb daemon
ERROR: Server connection failed
```

### 1.2 解决方案

scrcpy 投屏工具环境变量配错。

```bash
原来adb 环境变量: C:\Users…\AppData\Local\Android\Sdk\platform-tools
修改adb 环境变量: C:\Users…\AppData\Local\Android\Sdk\platform-tools\adb.exe
```
