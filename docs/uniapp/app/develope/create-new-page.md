# 第四集 新建页面

## 1. 新建页面
1. 使用HBuilderX新建页面,右键pages文件夹,选择新建页面,输入页面名称,选择页面模板,点击确定
2. 使用vscode新建页面,在pages文件夹下新建文件夹,在文件夹下新建vue文件,在pages.json中配置页面路径(可以使用`uni-create-view`插件迅速创建页面)

## 2. 页面配置
#### 页面配置文件pages.json常用配置
1. globalStyle配置
```json
"globalStyle": {
  "scrollIndicator": "none", // 是否显示滚动条
  "navigationBarBackgroundColor": "#FFFFFF", // 导航栏背景颜色
  "backgroundTextStyle": "dark", // 标题颜色
  "navigationBarTextStyle": "black", // 导航栏标题颜色
  "enablePullDownRefresh": false, // 是否开启下拉刷新
  "app-plus": {
    "bounce": "none", // 是否开启回弹效果
    "scrollIndicator": "none", // 是否显示滚动条
    "titleNView": {
      "titleSize": "18px" // 导航栏标题字体大小
    }
  }
}
```
2. pages配置
```json
"pages": [
  {
      "path": "pages/tabbar/index/index", // 页面路径
      "style": {
        "navigationBarTitleText": "首页", // 导航栏标题文字内容
        "navigationStyle": "custom", // 导航栏样式（自定义导航栏时设置这个属性）
        "transparentTitle": "auto", // 是否使用透明标题栏，auto表示自动判断
        "app-plus": {
          "bounce": "none", // 是否开启回弹效果
          "pullToRefresh": {
            "support": true, // 是否开启下拉刷新
            "color": "#ff961a" // 下拉刷新颜色
          }
        }
      }
    },
]

// app-plus其他配置
"app-plus": {
  "titleNView": {
    "autoBackButton": true, // 是否自动显示返回按钮
    "searchInput": {
      "align": "left", // 搜索框位置
      "borderRadius": "7px", // 搜索框圆角
      "backgroundColor": "#F8F8F8", // 搜索框背景色
      "placeholder": "搜索", // 搜索框提示文字
      "placeholderColor": "#999999" // 搜索框提示文字颜色
    },
    "buttons": [
      {
        "color": "#FF742B", // 按钮颜色
        "float": "right", // 按钮位置
        "fontSize": "14px", // 按钮字体大小
        "text": "搜索" // 按钮文字
      }
    ]
  }
}
```
3. tabBar配置
```json
"tabBar": {
  "color": "#999999", // tab上的文字默认颜色
  "selectedColor": "#FF742B", // tab上的文字选中时的颜色
  "backgroundColor": "#FFFFFF", // tab的背景色
  "borderStyle": "black", // tabbar上边框的颜色，仅支持 black/white
  "list": [
    {
      "pagePath": "pages/tabbar/index/index", // 页面路径
      "text": "首页", // tab上按钮文字
      "iconPath": "static/tabbar/index.png", // 图片路径
      "selectedIconPath": "static/tabbar/index-active.png" // 选中时的图片路径
    }
  ]
}
```

## 3. 参考文档
1. [pages.jsom完整配置](https://uniapp.dcloud.net.cn/collocation/pages.html)


