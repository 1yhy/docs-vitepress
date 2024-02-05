# 第八集 数据缓存
## 1. 什么是数据缓存

&emsp;&emsp;数据缓存是指将数据存储在本地，以便下次使用时直接从本地获取，而不需要再次从服务器获取。  
**uni-app的Storage在不同端的实现不同：**

- H5端为localStorage，浏览器限制5M大小，是缓存概念，可能会被清理
- App端为原生的plus.storage，无大小限制，不是缓存，是持久化的
- 非App平台清空Storage会导致uni.getSystemInfo获取到的deviceId改变
- App端卸载重装可以清空Storage

## 2. 保存数据

```typescript
// 保存数据(异步)
uni.setStorage({
  key: 'key',
  data: 'value',
  success: function () {
    console.log('success');
  }
});
// 保存数据(同步)
uni.setStorageSync('key', 'value');
```

## 3. 获取数据

```typescript
// 获取特定key数据(异步)
uni.getStorage({
  key: 'key',
  success: function (res) {
    console.log(res.data);
  }
});
// 获取特定key数据(异步)
uni.getStorageSync('key');
// 获取所有数据(异步)
uni.getStorageInfo({
  success: function (res) {
    console.log(res.keys);
    console.log(res.currentSize);
    console.log(res.limitSize);
  }
});
// 获取所有数据(同步)
const res = uni.getStorageInfoSync();
```

## 4. 删除数据

```typescript
// 删除数据(异步)
uni.removeStorage({
  key: 'key',
  success: function (res) {
    console.log('success');
  }
});
// 删除数据(同步)
uni.removeStorageSync('key');
// 清空数据(异步)
uni.clearStorage();
// 清空数据(同步)
uni.clearStorageSync();
```

## 5. 使用Vuex状态管理(完整教程请看官方文档)
  
  ```typescript
  // 1. 安装vuex
  npm install vuex --save
  // 2. 创建store.js
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)
  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
  export default store
  // 3. 在main.js中引入store.js
  import store from './store.js'
  // 4. 在页面中使用store
  export default {
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    methods: {
      increment() {
        this.$store.commit('increment')
      }
    }
  }
  ```

#### 配合vuex-persistedstate实现持久化存储

```typescript
// 1. 安装vuex-persistedstate
npm install vuex-persistedstate --save
// 2. 在store.js中引入vuex-persistedstate
import createPersistedState from "vuex-persistedstate"
// 3. 在store.js中配置vuex-persistedstate
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
```

## 6. 使用Pinia状态管理(完整教程请看官方文档)

```typescript
// 1. 安装pinia
npm install pinia --save
// 2. 创建store.js
import { createPinia } from 'pinia'
const store = createPinia()
export default store
// 3. 在main.js中引入store.js
import { createSSRApp } from 'vue';
import * as Pinia from 'pinia';

export function createApp() {
	const app = createSSRApp(App);
	app.use(Pinia.createPinia());
	return {
		app,
		Pinia, // 此处必须将 Pinia 返回
	};
}

// 4. 创建store：stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => {
		return { count: 0 };
	},
	// 也可以这样定义
	// state: () => ({ count: 0 })
	actions: {
		increment() {
			this.count++;
		},
	},
});

// 5. 在页面中使用store
import { useCounterStore } from '@/stores/counter';

export default {
	setup() {
		const counter = useCounterStore();

		counter.count++;
		// 可以手动触发
		counter.$patch({ count: counter.count + 1 });
		// 或者使用 actions
		counter.increment();
	},
};
```

#### 配合[pinia-plugin-unistorage](https://ext.dcloud.net.cn/plugin?id=8081)实现持久化存储

```bash
npm i pinia-plugin-unistorage -D
```

##### 在vue-cli中使用pinia-plugin-unistorage
```typescript
// main.ts
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import { createUnistorage } from 'pinia-plugin-unistorage'

export function createApp() {
    const app = createSSRApp(App)

    const store = Pinia.createPinia()

    // 关键代码 👇
    store.use(createUnistorage())

    app.use(store)

    return {
        app,
        Pinia // 此处必须将 Pinia 返回
    }
}
```
##### HbuilderX中使用pinia-plugin-unistorage,直接插件市场搜索安装即可
```typescript
// main.js
import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import { createUnistorage } from './uni_modules/pinia-plugin-unistorage'

export function createApp() {
    const app = createSSRApp(App)

    const store = Pinia.createPinia()

    // 关键代码 👇
    store.use(createUnistorage())

    app.use(store)

    return {
        app,
        Pinia // 此处必须将 Pinia 返回
    }
}
```

```typescript
// 在store中开启unistorage
import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state() {
        return {
            someState: 'hello pinia'
        }
    },
    unistorage: true // 开启后对 state 的数据读写都将持久化
})

或者

import { defineStore } from 'pinia'

export const useStore = defineStore(
    'main',
    () => {
        const someState = ref('hello pinia')
        return { someState }
    },
    {
        unistorage: true // 开启后对 state 的数据读写都将持久化
    }
)
```

## 7. 使用自己封装的本地存储

#### 7.1 本地存储类封装

```typescript
import { EXPIRE } from '@/config/request.config' // 过期时间 0 = 永久

class Cache {
  private cacheSetHandler
  private cacheGetHandler
  private cacheRemoveHandler
  private cacheClearHandler
  private cacheExpire
  constructor() {
    this.cacheSetHandler = uni.setStorageSync
    this.cacheGetHandler = uni.getStorageSync
    this.cacheRemoveHandler = uni.removeStorageSync
    this.cacheClearHandler = uni.clearStorageSync
    this.cacheExpire = '_expire_2023_01_03_10_30'
  }

  /**
   * 获取当前时间戳
   */
  time() {
    return Math.round(Number(new Date()) / 1000)
  }

  /**
   * 设置过期时间缓存
   * @param {Object} key
   * @param {Object} expire
   */
  setExpireCahe(key: string, expire?: number) {
    expire = expire !== undefined ? expire : EXPIRE
    if (expire) {
      this.cacheSetHandler(key + this.cacheExpire, this.time() + expire)
    }
  }

  /**
   * 缓存是否过期,过期自动删除
   * @param {Object} key
   * @param {Object} $bool true = 删除,false = 不删除
   */
  getExpireCahe(key: string, $bool?: any) {
    try {
      const time = this.cacheGetHandler(key + this.cacheExpire)
      if (time) {
        const newTime = parseInt(time)
        if (time && time < this.time() && !Number.isNaN(newTime)) {
          if ($bool === undefined || $bool === true) {
            this.cacheRemoveHandler(key)
            this.cacheRemoveHandler(key + this.cacheExpire)
          }
          return false
        } else return true
      } else {
        return !!this.cacheGetHandler(key)
      }
    } catch (e) {
      return false
    }
  }

  /**
   * 设置缓存
   * @param {Object} key
   * @param {Object} data
   */
  set(key: string, data: any, expire?: number) {
    if (typeof data === 'object') data = JSON.stringify(data)
    try {
      this.setExpireCahe(key, expire)
      return this.cacheSetHandler(key, data)
    } catch (e) {
      return false
    }
  }

  /**
   * 检测缓存是否存在
   * @param {Object} key
   */
  has(key: string) {
    return this.getExpireCahe(key)
  }

  /**
   * 获取缓存
   * @param {Object} key
   * @param {Object} $default
   * @param {Object} expire
   */
  get(key: string, $default?: any, expire?: number) {
    try {
      const isBe = this.getExpireCahe(key)
      const data = this.cacheGetHandler(key)
      if (data && isBe) {
        return JSON.parse(data)
      } else {
        if (typeof $default === 'function') {
          const value = $default()
          this.set(key, value, expire)
          return value
        } else {
          this.set(key, $default, expire)
          return $default
        }
      }
    } catch (e) {
      return null
    }
  }

  /**
   * 删除缓存
   * @param {Object} key
   */
  clear(key: string) {
    try {
      const cahceValue = this.cacheGetHandler(key + this.cacheExpire)
      if (cahceValue) this.cacheRemoveHandler(key + this.cacheExpire)
      return this.cacheRemoveHandler(key)
    } catch (e) {
      return false
    }
  }

  /**
   * 删除全部缓存
   * @param {Object} key
   */
  clearAll() {
    try {
      return this.cacheClearHandler()
    } catch (e) {
      return false
    }
  }

  /**
   * 清除过期缓存
   */
  clearOverdue() {
    // let cacheList = uni.getStorageInfoSync(),that = this;
    // if (typeof cacheList.keys === 'object'){
    // 	cacheList.keys.forEach(item=>{
    // 		that.getExpireCahe(item);
    // 	})
    // }
  }
}

export default new Cache()
```

#### 7.2 使用本地存储类

```typescript
import cache from '@/utils/cache'

// 保存数据
cache.set('key', 'value')
```

#### 7.3 全局状态管理中使用（vuex或pinia）

本处以pinia为例

```typescript

import { defineStore } from 'pinia'
import cache from '@/utils/cache'

export const useStore = defineStore('main', {
    state() {
        return {
            someState: cache.get('someState', 'hello pinia') // 第二个参数为默认值
        }
    },
    actions: {
        setSomeState() {
            cache.set('someState', 'hello pinia')
        }
    }
})
```

## 8. 注意事项
- 在app端使用`pinia-plugin-unistorage`，数据或者退出app后，数据没有持久化，可能无法使用

## 9. 参考文档

- [vuex](https://vuex.vuejs.org/zh/)
- [pinia](https://pinia.esm.dev/)
- [pinia持久化存储](https://ext.dcloud.net.cn/plugin?id=8081)


