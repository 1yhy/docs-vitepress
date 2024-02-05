# sentry在项目中的落地参考文章

- [字节前端监控实践](https://juejin.cn/post/7195496297150709821)
- [前端监控系列1｜ 字节的前端监控 SDK 是怎样设计的](https://mp.weixin.qq.com/s/-eEMSn2WpDiMbNSBgY3-pg)
- [Sentry For Vue 完整接入详解(2021 Sentry v21.8.x)前方高能预警！三万字，慎入！ ](https://www.cnblogs.com/hacker-linner/p/15237007.html)
- [Sentry 监控 - Search 搜索查询实战](https://www.cnblogs.com/hacker-linner/p/15329189.html)
- 云效api: [云效api)](https://next.api.aliyun.com/document/devops/2021-06-25/GetFileLastCommit)
- [一文搞懂得物前端监控](https://mp.weixin.qq.com/s/ajq-eGu4DBLbHXEm2HGV8Q)
  - [转转商业前端错误监控系统(Sentry)策略升级](https://zhuanlan.zhihu.com/p/112962974)
- [Sentry Web 性能监控](https://mp.weixin.qq.com/s/QZQ8-48MD3zgGmSrr_oWwQ)


---
- [前端监控：打造极致用户体验的利器](https://mp.weixin.qq.com/s/OoA8Gmzygm9QdgC2ykik0A)
- [基于Sentry高效治理前端异常](https://mp.weixin.qq.com/s/rl6QrHFnR9CCTKSZiMghVA)
- [Sentry 后端监控 - 最佳实践(官方教程)](https://developer.aliyun.com/article/952870)
- [从0到1搭建自研前端监控平台](https://github.com/xy-sea/blog/blob/main/markdown/%E4%BB%8E0%E5%88%B01%E6%90%AD%E5%BB%BA%E5%89%8D%E7%AB%AF%E7%9B%91%E6%8E%A7%E5%B9%B3%E5%8F%B0%EF%BC%8C%E9%9D%A2%E8%AF%95%E5%BF%85%E5%A4%87%E7%9A%84%E4%BA%AE%E7%82%B9%E9%A1%B9%E7%9B%AE.md)
## git blame
使用 git blame 查看每行代码的最后修改者及其提交信息的步骤如下：

打开终端：在你的计算机上打开命令行工具。

导航到项目目录：使用 cd 命令进入到包含你想检查的文件的 Git 仓库目录。

例如：

```bash
cd path/to/your/project
```
运行 git blame：使用 git blame 命令 followed by the file name。

例如，查看名为 example.js 的文件：


```bash
git blame example.js
```
这个命令会输出 example.js 文件的每一行，以及对该行进行最后修改的提交信息，包括提交者的名字和邮箱、提交的时间戳和提交信息。

例如，输出可能会是这样的：

```css
a1b2c3d4 (John Doe 2023-01-01) int a = 1; // 初始化变量a
e5f6g7h8 (Jane Smith 2023-02-02) a += 2;  // 增加变量a的值
```

这意味着第一行代码是由 John Doe 在 2023 年 1 月 1 日提交的，而第二行代码是由 Jane Smith 在 2023 年 2 月 2 日提交的。
