# 第十集 界面和元素

## 1. 什么是界面和元素

&emsp;&emsp;界面和元素是uni-app中的两个重要概念，界面是指用户看到的页面，元素是指界面中的各种组件，比如按钮、输入框、图片等。

## 2. 常用界面api

### 2.1 交互反馈

```js
uni.showToast({
  title: '消息提示框',
  icon: 'none',
  duration: 2000
})
uni.hideToast()
uni.showLoading({
  title: '加载中'
})
uni.hideLoading()
uni.showModal({
  title: '提示',
  content: '这是一个模态弹窗',
  cancelText: '取消',
  confirmText: '确定',
  showCancel: true,
  cancelColor: '#000000',
  confirmColor: '#3CC51F',
  editable: true,
  placeholderText: '请输入内容',
  success: function (res) {
    if (res.confirm) {
      console.log('用户点击确定')
    } else if (res.cancel) {
      console.log('用户点击取消')
    }
  }
})

// 底部弹出菜单
uni.showActionSheet({
  itemList: ['A', 'B', 'C'],
  success: function (res) {
    console.log(res.tapIndex)
  },
  fail: function (res) {
    console.log(res.errMsg)
  }
})
```

### 2.2 导航栏

```javascript
// 设置导航栏标题
uni.setNavigationBarTitle({
  title: '标题'
})
// 设置导航栏颜色
uni.setNavigationBarColor({
  frontColor: '#ffffff',
  backgroundColor: '#ff0000',
  animation: {
    duration: 400,
    timingFunc: 'easeIn'
  }
})
```

### 2.3 元素节点信息

**注意：nvue页面只能使用Id选择器获取元素节点信息**
```javascript
// 获取节点信息
const query = uni.createSelectorQuery().in(this);
query.select('#id').boundingClientRect(data => {
  console.log("得到布局位置信息" + JSON.stringify(data));
  console.log("节点离页面顶部的距离为" + data.top);
}).exec();
```

#### 使用uView组件库，可以使用封装的[getRect](https://uviewui.com/js/getRect.html)方法快捷获取节点信息

```javascript
// 获取节点信息
async getElInfo() {
  await nextTick();
  let rectInfo = await uni.$u.getRect('.user-avatar');
  console.log(rectInfo);
}
```

## 3. 参考文档
- [界面Api](https://uniapp.dcloud.net.cn/api/ui/prompt.html)
- [节点信息](https://uniapp.dcloud.net.cn/api/ui/nodes-info.html)
- [uView](https://uviewui.com/js/getRect.html)

