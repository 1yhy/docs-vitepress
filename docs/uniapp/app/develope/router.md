# 第七集 页面通信-页面跳转和传值

## 1.页面跳转方式
#### 1.1 通过`uni.navigateTo`跳转
```typescript
// 跳转到指定页面，关闭当前页面
uni.navigateTo({
  url: 'pages/index/index'
})
```
#### 1.2 通过`uni.redirectTo`跳转
```typescript
// 跳转到指定页面，关闭当前页面
uni.redirectTo({
  url: 'pages/index/index'
})
```
#### 1.3 通过`uni.reLaunch`跳转
```typescript
// 关闭所有页面，打开到应用内的某个页面
uni.reLaunch({
  url: 'pages/index/index'
})
```
#### 1.4 通过`uni.switchTab`跳转
```typescript
// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
uni.switchTab({
  url: 'pages/index/index'
})
```
#### 1.5 通过`uni.navigateBack`跳转
```typescript
// 关闭当前页面，返回上一页面或多级页面
uni.navigateBack({
  delta: 1 // 返回的页面数，如果 delta 大于现有页面数，则返回到首页
})
```

::: warning
- 跳转`tabBar`页面时，只能使用`uni.switchTab`跳转
:::


## 2.页面传值
#### 2.1 通过`url`传值
```typescript
// 跳转到指定页面，关闭当前页面
uni.navigateTo({
  url: 'pages/index/index?id=1&name=uni-app'
})

// 在目标页面中获取参数: pages/index/index.vue
onLoad(options) {
  console.log(options.id) // 1
  console.log(options.name) // uni-app
}
```

- url有长度限制，太长的字符串会传递失败，可改用窗体通信、全局变量，另外参数中出现空格等特殊字符时需要对参数进行编码，如下为使用encodeURIComponent对参数进行编码的示例。
```typescript
<navigator :url="'/pages/test/test?item='+ encodeURIComponent(JSON.stringify(item))"></navigator>

// 在test.vue页面接受参数
onLoad: function (option) {
	const item = JSON.parse(decodeURIComponent(option.item));
}
```

#### 2.2 `navigatoeTo`通过`events`传值
```typescript
// 跳转到指定页面，关闭当前页面
uni.navigateTo({
  url: 'pages/index/index',
  events: {
    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
    acceptDataFromOpenedPage: function(data) {
      console.log(data)
    },
  },
})

// 在目标页面中获取参数: pages/index/index.vue
onLoad(options) {
  // 触发事件，传递数据到上一页面
  const eventChannel = this.getOpenerEventChannel();
  eventChannel.emit('acceptDataFromOpenedPage', {data: 'data from test page'});

  // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
  eventChannel.on('acceptDataFromOpenerPage', function(data) {
    console.log(data)
  })
}
```

#### 2.3 通过`uni.$emit`传值
```typescript
	uni.$emit('update',{msg:'页面更新'})
  uni.navigateBack({
    delta: 1
  })
```

页面通过`uni.$on`或者`uni.$once`监听事件
```typescript
  onShow() {
    uni.$on('update', (res) => {
      console.log(res)
    })

    // 监听全局的自定义事件，事件由 uni.$emit 触发，但仅触发一次，在第一次触发之后移除该监听器。
    uni.$once('update', (res) => {
      console.log(res)
    })
  },
  onHide() {
    uni.$off('update')
  }
```

#### 2.4 通过`页面栈`传值
```typescript
const pages = getCurrentPages();
const currentPage = pages[pages.length - 1]; // 当前页面
const prevPage = pages[pages.length - 2]; // 上一页面
const vm = prevPage.$vm;
// 获取上一页面数据
console.log(vm.$data.title);
// 调用上一页面方法并传值
vm.test('参数')
```

## 3. 页面栈
#### 3.1.获取页面栈
```typescript
const pages = getCurrentPages();
const currentPage = pages[pages.length - 1]; // 当前页面
const prevPage = pages[pages.length - 2]; // 上一页面
const route = currentPage.route; // 当前页面路径 pages/index/index
```

#### 3.2.页面栈的操作
```typescript
const pages = getCurrentPages();
const prevPage = pages[pages.length - 2]; // 上一页面
const vm = prevPage.$vm;
// 监听生命周期，小程序端部分其他生命周期需在页面选项中配置过才可生效
vm.$on('hook:onHide', () => {
  console.log('onHide');
});
// 获取上一页面数据
console.log(vm.$data.title);
// 调用上一页面方法
vm.test()
```

#### 3.3.当前页面webview
uni-app 在 getCurrentPages()获得的页面里内置了一个方法 $getAppWebview() 可以得到当前webview的对象实例，从而实现对 webview 更强大的控制。在 html5Plus 中，plus.webview具有强大的控制能力，可参考：WebviewObject。

``` typescript
const pages = getCurrentPages();
const page = pages[pages.length - 1];
// #ifdef APP-PLUS
const currentWebview = page.$getAppWebview();
console.log(currentWebview.id);//获得当前webview的id
console.log(currentWebview.isVisible());//查询当前webview是否可见
// #endif
```

## 4. 参考文档
- [页面跳转](https://uniapp.dcloud.net.cn/api/router.html#)
- [页面生命周期](https://uniapp.dcloud.net.cn/tutorial/page.html#lifecycle)
- [组件生命周期](https://uniapp.dcloud.net.cn/tutorial/page.html#componentlifecycle)
- [页面通讯](https://uniapp.dcloud.net.cn/tutorial/page.html#%E9%A1%B5%E9%9D%A2%E9%80%9A%E8%AE%AF)
