# 第二十集 Android原生隐私政策弹窗

## 1. 勾选原生隐私政策弹窗
使用HBuilder打开`manifest.json`文件，找到`App启动界面`节点，勾选`使用原生隐私政策提示框`，勾选后会在项目中自动添加androidPrivacy.json文件，可以在里面自行配置弹窗样式。
**完整配置项请参考[Android平台隐私与政策提示框](https://uniapp.dcloud.net.cn/tutorial/app-privacy-android.html#)**
## 2. 原生隐私政策弹窗配置参考
```json
{
  "version": "1",
  "prompt": "template",
  "title": "隐私政策和用户协议",
  "message": "欢迎使用xxx！在您使用本软件过程中，我们可能会对您的部分个人信息进行手机、使用和共享。请您仔细阅读  <a href=\"自己App隐私政策地址\">《隐私政策》</a>与<a href=\"自己App用户协议地址\">《用户协议》</a>全部条款，您同意并接受全部条款后可开始我们的全部服务。",
  "buttonAccept": "同意并接受",
  "buttonRefuse": "暂不同意",
  "styles": {
    "backgroundColor": "#FFFFFF",
    "borderRadius": "10px",
    "title": {
      "color": "#272727"
    },
    "buttonAccept": {
      "color": "#272727"
    },
    "buttonRefuse": {
      "color": "#9B9AB9"
    }
  }
}
```
