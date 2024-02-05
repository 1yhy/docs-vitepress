# 第一集：HbuilderX创建项目和CLI创建项目的详细区别和优缺点

&emsp;&emsp;作为一名刚入职的前端工程师，你可能已经听说过 Uniapp 框架，并且了解到公司需要使用它来开发一个 App。在开始项目之前，你需要选择合适的项目创建方式。  
&emsp;&emsp;本文将为你介绍两种常见的 Uniapp 项目创建方式：使用 Hbuilder 和使用 CLI（命令行界面），并对它们的区别和优缺点进行详细比较。

## 1. 使用 Hbuilder 创建项目
### 优点
- **无需自行安装node** HBuilderX可视化创建的项目，是一种免node开发概念。工程代码在项目目录下，编译器在HBuilderX目录下而不是项目下，编译结果在项目的unpackage目录下。
- **内置依赖** less、scss、ts等编译器的自动安装。
- **可视化开发**：Hbuilder 提供直观的界面，让你无需过多命令行操作，即可完成项目的创建和开发。
- **uniapp语法提示全面** HBuilderX为uni-app做了大量优化，其他ide搭配uni-app使用也可以用，但没有为uni-app优化过。其他ide没有uni-app的app和uniCloud的运行、调试工具。这些工具在HBuilderX里。
- **版本一致** HBuilderX内置了uni-app的编译器，HBuilderX升级后，uni-app的编译器也会升级。HBuilderX升级后，uni-app的编译器也会升级。HBuilderX升级后，uni-app的编译器也会升级。这样，uni-app的编译器、HBuilderX的版本、uni-app运行时这3者的版本保持一致，会减少非常多的问题。

### 缺点
- 相比较vscode而言，缺少自己喜欢或者习惯使用的很多插件。

## 2. 使用 CLI 创建项目
### 优点
- **灵活性**：CLI 方式更加灵活，适用于习惯命令行操作的开发者，也可以与其他工具无缝集成。使用vscode开发，也可以通过HBuilderX打开项目，实现uni-app的编译器、运行、调试等功能。
- **持续更新**：由于 CLI 是基于 Node.js 的，可以通过 npm 安装更新的插件和工具，保持项目的持续更新和维护。
- **插件丰富** vscode插件丰富，可以使用大量插件提效开发。

### 缺点
- **编译器不会自动更新** cli项目下的编译器不会跟随HBuilderX升级而升级，只能开发者手敲npm命令升级。编译器版本出现问题，需要开发者自己解决。有时候很难排查到问题，需要自己去官网了解更新内容，然后手动升级。（有一次排查了很久😅）
- 使用cli项目，那么less、scss、ts等编译器需要自己手动敲npm命令安装。
- **自行下载示例项目** 使用cli创建项目时，cli需要从npm安装，预置的项目模板选择从github下载。
## 注意点
- 如想用其他ide开发uni-app，只能使用cli模式.其他ide没有内置uni-app的编译器，所以其他ide开发uni-app，只能把编译器安装在项目下，也就是cli创建的项目格式。
- 使用cli创建的项目，如果想使用HBuilderX的编译器、运行、调试等功能，可以通过HBuilderX打开项目，实现uni-app的编译器、运行、调试等功能。

## 3. HbuilderX创建项目步骤
### 安装 HbuilderX

首先，你需要下载并安装 [HbuilderX](https://www.dcloud.io/hbuilderx.html) 工具。它支持多个操作系统，包括 Windows、Mac 和 Linux。

### 创建 Uniapp 项目

在安装完成后，打开 Hbuilder，并按照以下步骤创建 Uniapp 项目：

1. 点击 "新建项目"，然后选择 "uni-app" 选项。
2. 输入项目名称和保存路径，选择要开发的目标平台（如H5、小程序、App等）。
3. 选择项目模板，可以选择默认模板或者从已有模板创建。

### 开发和调试

Hbuilder 提供了可视化的界面，使得开发过程更加直观和高效。你可以在编辑器中编写代码、实时预览，并且通过连接真机来进行调试。
## 4. 使用 CLI 创建项目

除了 Hbuilder 可视化工具，Uniapp 也提供了命令行界面（CLI）的方式来创建和管理项目。下面是使用 CLI 创建项目的步骤：

### 安装 Node.js 和 npm

CLI 是基于 Node.js 和 npm 的，所以在开始之前，确保你已经安装了它们。

### 安装 Vue CLI 和 Uniapp CLI

在命令行中执行以下命令来安装 Vue CLI 和 Uniapp CLI：

```bash
npm install -g @vue/cli
```

### 创建 Uniapp 项目

#### 使用正式版（对应HBuilderX最新正式版）
```bash
vue create -p dcloudio/uni-preset-vue my-project
```
#### 使用alpha版（对应HBuilderX最新alpha版）
```bash
vue create -p dcloudio/uni-preset-vue#alpha my-alpha-project
```
#### 使用Vue3/Vite版
- 创建以 javascript 开发的工程（如命令行创建失败，请直接访问 gitee 下载模板）
```bash
npx degit dcloudio/uni-preset-vue#vite my-vue3-project
```
```bash
npx degit dcloudio/uni-preset-vue#vite-alpha my-vue3-project
```
- 创建以 typescript 开发的工程（如命令行创建失败，请直接访问 gitee 下载模板）
```bash
npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
```

### 开发和调试

  通过 CLI 创建的项目可以在任何代码编辑器中进行开发。你可以使用预设的脚本来运行和调试项目，也可以通过连接真机来进行调试。

## 5. 对比和选择

无论是使用 Hbuilder 还是 CLI，它们都有各自的优点和缺点。你可以根据项目的需求和个人喜好来选择合适的创建方式。

个人比较依赖vscode的许多插件，所以选择cli创建项目，使用vscode开发uni-app。如果你是新手，建议使用HbuilderX创建项目，因为它的可视化开发，让你无需过多命令行操作，即可完成项目的创建和开发。

## 6. 项目结构

HbuilderX创建的项目结构如下：
```bash
├─components #组件目录
├─pages #页面目录
├─static #静态资源目录
├─unpackage #编译结果目录
├─App.vue #应用配置，用来配置App全局样式以及监听 应用生命周期
├─main.js #Vue初始化入口文件
├─manifest.json #配置应用名称、appid、logo、版本等打包信息
├─pages.json #配置页面路由、导航条、选项卡等页面类信息
├─uni_modules #uni_modules目录
└─uni.scss #uni-app内置的常用样式变量
```
cli创建的项目结构和HbuilderX创建的项目结构相似，以上目录在src目录下，但是cli创建的项目结构下，没有内置编译器，需要自己手动安装。

## 7. 参考文档
- [HbuilderX创建项目](https://uniapp.dcloud.io/quickstart-hx?id=%e7%ac%ac%e4%b8%80%e6%ad%a5%ef%bc%9ahbuilderx%e5%88%9b%e5%bb%ba%e9%a1%b9%e7%9b%ae)
- [CLI创建项目](https://uniapp.dcloud.net.cn/quickstart-cli.html)
- [cli创建项目和HBuilderX可视化界面创建项目的区别](https://uniapp.dcloud.net.cn/quickstart-cli.html#clidiff)
