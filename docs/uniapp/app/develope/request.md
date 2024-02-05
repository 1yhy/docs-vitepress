# 发起网络请求

## 一、uniapp网络请求介绍

&emsp;&emsp;在uniapp中，可以使用uni.request方法进行网络请求。该方法可以发送各种类型的请求，包括GET、POST、PUT、DELETE等。可以通过在请求参数中设置`method`字段来指定请求类型。

uni.request的语法如下：

```typescript
uni.request({
  url: string, // 请求的地址
  data?: any, // 请求的数据，可以是普通的对象、数组、字符串等
  header?: any, // 请求头部，可以设置Content-Type等信息
  method?: string, // 请求的方法，支持GET、POST、PUT、DELETE等
  dataType?: string, // 返回的数据格式，支持json、string等
  responseType?: string, // 响应的数据类型，支持arraybuffer、text等
  success?: (res: any) => void, // 请求成功的回调函数
  fail?: (err: any) => void, // 请求失败的回调函数
  complete?: () => void, // 请求结束的回调函数（无论成功或失败都会执行）
})
```

## 二、请求工具类的封装

&emsp;&emsp;在项目中，我们需要在多个页面中频繁使用网络请求，为了避免重复编写代码，可以将网络请求封装成一个工具类，以便在需要时直接调用。

&emsp;&emsp;下面是一个请求工具类的封装示例，支持设置请求的基础URL、超时时间、请求头等信息，以及对请求响应进行统一的处理。

```typescript
/**
 * 接口响应数据格式
 */
interface ResponseData {
  code: number;
  message: string;
  data: any;
}

/**
 * 请求工具类
 */
export default class Request {
  /**
   * 请求的基础URL
   */
  static baseUrl: string = 'http://your_api_base_url.com';

  /**
   * 请求超时时间
   */
  static timeout: number = 5000;

  /**
   * 请求头部
   */
  static headers: any = {
    'Content-Type': 'application/json',
    // 在这里可以添加其他的请求头信息
  };

  /**
   * 发送请求
   * @param options 请求参数
   * @returns Promise对象
   */
  static request(options: any): Promise<any> {
    // 添加公共的请求头、请求参数等信息
    options.url = this.baseUrl + options.url;
    options.header = this.headers;
    options.timeout = this.timeout;

    return new Promise((resolve, reject) => {
      uni.request({
        ...options,
        success: (res: any) => {
          const response = res.data as ResponseData;
          if (response.code !== 200) {
            // 返回的状态码不是200时，可以在这里进行一些错误处理
            console.log(response.message);
            reject(response.message || 'Error');
          } else {
            resolve(response.data);
          }
        },
        fail: (err: any) => {
          console.log('request fail:', err);
          reject(err.errMsg || 'Error');
        }
      });
    });
  }

  /**
   * 发送GET请求
   * @param url 请求地址
   * @param params 请求参数
   * @returns Promise对象
   */
  static get(url: string, params?: any): Promise<any> {
    return this.request({
      url,
      data: params,
      method: 'GET'
    });
  }

  /**
   * 发送POST请求
   * @param url 请求地址
   * @param data 请求数据
   * @returns Promise对象
   */
  static post(url: string, data?: any): Promise<any> {
    return this.request({
      url,
      data,
      method: 'POST'
    });
  }
}
```

这是一个名为Request的类，该类提供了三个静态属性baseUrl、timeout和headers，分别用于设置请求的基础URL、超时时间和请求头信息。还提供了一个静态方法request，用于发送请求，并对响应进行统一的处理。最后，提供了两个静态方法get和post，用于发送GET和POST请求。

需要注意的是，这个工具类可以根据自己的实际需求来修改它，比如添加请求超时时间、修改请求响应数据的格式等。


## 三、根据环境配置请求的基础URL

&emsp;&emsp;在实际开发中，我们可能需要根据不同的环境来配置请求的基础URL，比如在开发环境中使用本地的API接口，而在生产环境中使用线上的API接口。

uniapp提供了一个全局变量`process.env.NODE_ENV`，可以用来获取当前运行的环境，包括`development`、`production`、`test`等。

我们可以根据`process.env.NODE_ENV`来配置请求的基础URL，示例如下：

在`main.ts`中配置请求的基础URL

```typescript
// 导入Request工具类
import Request from '@/utils/request';

// 根据环境配置请求的基础URL
if (process.env.NODE_ENV === 'development') {
  Request.baseUrl = 'http://localhost:3000';
} else if (process.env.NODE_ENV === 'production') {
  Request.baseUrl = 'http://your_api_base_url.com';
}
```

## 四、请求使用

```typescript
// 导入Request工具类
import Request from '@/utils/request';

// 发送GET请求
Request.get('/user', { id: 1 }).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});

// 发送POST请求
Request.post('/login', { username: 'admin', password: '123456' }).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});
```

## 五、使用uView封装的请求工具类

uView是uniapp生态中的一个UI框架，它提供了一个请求工具类[http](https://uviewui.com/js/http.html)，可以用来发送请求。详细的使用方法可以参考[官方文档](https://uviewui.com/js/http.html)。

