# 常见问题
## 1. 使用TypeScript开发时，提示找不到模块
### 1.1 问题描述
在使用TypeScript开发时，提示找不到模块，例如使用uView时：
```bash
Cannot find module 'uview-ui'
```
### 1.2 解决方案
在项目根目录下，新建.d.ts文件，例如env.d.ts，添加内容如下：
```bash
declare module 'vk-uview-ui'
```

## 2. Uni上不存在$u的属性
### 2.1 问题描述
在使用TypeScript开发时，uView组件库在uni上挂载了$u,有多种常用api使用方便开发
```bash
Uni上不存在$u的属性
```
### 2.2 解决方案
在项目根目录下，新建.d.ts文件，例如env.d.ts，添加内容如下：
```javascript
declare module 'vk-uview-ui'{
  global {
    interface Uni {
      $u: any
    }
  }
}
```

## 3. pinia版本和vue版本不匹配
### 3.1 问题描述
```bash
TypeError: vue.hasInjectionContext is not a function
```
### 3.2 解决方案
1. 将 vue 升级到 3.3 及以上版本，将 pinia 升级到 2.1.0 及以上版本。Vue 3.3 引入了很多新的特性，特别是对泛型组件的支持。
2. 如果无法升级到 Vue 3.3 及以上版本，可以锁定 Pinia 的版本为 2.0.36。

## 4. 在nvue中导入pinia报错
### 4.1 问题描述
```bash
reportJSException >>>> exception function:createInstanceContext, exception:white screen cause create instanceContext failed,check js stack ->Uncaught TypeError: (0 , import_pinia.defineStore) is not a function
```
### 4.2 解决方案
1. 在`main.js`中`pinia`一定要`return`
2. 检查`pinia`是否安装正确

## 5. vue3.0cli+typescript使用nvue报错
### 5.1 问题描述
```bash
X [ERROR] No matching export in "dist/dev/.nvue/pages/index/index.js" for import "default"  

    <stdin>:1:7:  
      1 │ import App from './pages/index/index.js'  
        ╵        ~~~  

[plugin:uni:app-nvue-esbuild] Build failed with 1 error:  
<stdin>:1:7: ERROR: No matching export in "dist/dev/.nvue/pages/index/index.js" for import "default"  
```
### 5.2 解决方案
```typescript
// cli项目不会升级编译器版本，编译器版本太低，导致报错，3.8.7版本以上就可以了，尝试升级package.json中的编译器版本,HBuilderX项目不需要升级，会和自己的编译器版本一致
"dependencies": {
    "@dcloudio/uni-app": "3.0.0-3080720230630001",
    "@dcloudio/uni-app-plus": "3.0.0-3080720230630001",
    "@dcloudio/uni-components": "3.0.0-3080720230630001",
    "@dcloudio/uni-h5": "3.0.0-3080720230630001",
}
```

## 6. 安卓Aundroid Studio运行报错
### 6.1 问题描述
```bash
X Empty SMPTE 2094-40 data   
```
### 6.2 解决方案
```typescript
// 过滤日志
-tag:gralloc4 
```

## 6. tsconfig.json文件冒号报错
### 6.1 问题描述
```bash
Parsing error: Unexpected token :
```
### 6.2 解决方案
```typescript
npm install @typescript-eslint/parser --save-dev

// .eslintrc.js文件
'parser': '@typescript-eslint/parser',
```

## 7. 突然白屏
### 7.1 问题描述
```bash
reportJSException >>>> exception function:createInstanceContext, exception:white screen cause create instanceContext failed,check js stack ->ReferenceError: 
```
### 7.2 可能原因
- 1、外部js\ts文件直接使用`pinia`会导致突然白屏，毫无征兆，也不提示😅
  ```typescript
  // store/use.js
  import { store } from '@/store'
  export const useUserStore = defineStore('user', {
    .....
  })
  <!-- 导出供外部使用 -->
  export function useUserStoreOut() {
    return useUserStore(store)
  }
  ```
