# Sentry

## 安装sentry

```js
npm install --save @sentry/vue
```

```js
import { createApp } from "vue";
import { createRouter } from "vue-router";
import * as Sentry from "@sentry/vue";

const app = createApp({
  // ...
});
const router = createRouter({
  // ...
});

Sentry.init({
  app,
  dsn: "https://a0127a5c0dbe35d19e39ae2999f083f1@o4506264488574976.ingest.sentry.io/4506298452279296",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

app.use(router);
app.mount("#app");
```



## 配置项

```js
Sentry.init({
  // DSN: 用于标识你的 Sentry 项目的唯一密钥
  dsn: "你的DSN",

  // 应用实例，对于Vue应用来说非常重要
  app,

  // 集成配置，用于增强 Sentry 的功能
  integrations: [
    // 浏览器追踪，用于性能监控
    new Sentry.BrowserTracing({
      // 控制哪些URL启用分布式追踪
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
      // Vue路由器的追踪
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    // 会话回放
    new Sentry.Replay(),
  ],

  // 性能监控的采样率，1.0表示捕获100%的事务
  tracesSampleRate: 1.0,

  // 会话回放的采样率，0.1表示10%的采样率
  replaysSessionSampleRate: 0.1,

  // 当发生错误时的会话回放采样率，1.0表示100%
  replaysOnErrorSampleRate: 1.0,

    // Vue 特有的配置项
  attachProps: true, // 包含所有Vue组件的props
  logErrors: true, // 是否调用Vue的原始logError函数
  trackComponents: false, // 是否跟踪应用的组件

  // 设置错误级别的阈值，低于此级别的错误不会被发送
  // 可选值：'fatal', 'error', 'warning', 'log', 'info', 'debug', 'critical'
  beforeSend(event) {
    if (event.level === 'info') {
      return null;
    }
    return event;
  },

  // 自定义标签，用于过滤和搜索错误
  tags: {
    environment: "production",
    project: "my-project"
  },

  // 用户信息，帮助识别错误影响的用户
  user: {
    id: "user-id",
    email: "user@example.com"
  },

  // 额外信息，提供更多上下文
  extra: {
    myExtraData: "some value"
  },

  // 面包屑，记录用户的操作历史
  maxBreadcrumbs: 50, // 最多记录50条面包屑

  // 是否自动捕获异常
  autoSessionTracking: true, // 自动会话跟踪

  // 是否附加堆栈跟踪
  attachStacktrace: true,

  // 忽略特定的错误
  ignoreErrors: ['ignore_this_error'],

  // 设置采样率，0.5表示50%的错误事件被发送
  sampleRate: 0.5,

  // 设置静态资源错误的捕获
  allowUrls: ['https://yourapp.com/js/'], // 只捕获来自这些URL的错误
  denyUrls: ['http://cdn.example.com/'], // 忽略来自这些URL的错误

  // 设置最大事件大小
  maxValueLength: 250, // 最大事件大小为250个字符

  // 设置会话持续时间的阈值
  sessionTrackingIntervalMillis: 30000, // 30秒

  // 设置自定义事务名称
  transactionName: "my-transaction-name",

  // 设置是否启用跨域追踪
  crossOrigin: "anonymous", // 设置跨域资源的CORS设置
});

```

### 1. 说明

- **DSN**：这是连接你的应用程序和 Sentry 服务的唯一密钥。
- **integrations**：这里可以添加多种集成来增强 Sentry 的功能，如性能监控和会话回放。
- **tracesSampleRate**：设置性能监控的采样率。
- **replaysSessionSampleRate** 和 **replaysOnErrorSampleRate**：控制会话回放的采样率。
- `attachProps`, `logErrors`, `trackComponents` 是 Sentry Vue SDK 特有的配置项，用于增强 Vue 应用中的错误跟踪和性能监控。
- **beforeSend**：在发送事件之前进行处理，可以用来修改事件或根据条件过滤事件。
- **tags**、**user** 和 **extra**：提供额外的上下文信息，有助于错误分析。
- **maxBreadcrumbs**：设置面包屑的最大数量，用于记录用户操作历史。
- **autoSessionTracking** 和 **attachStacktrace**：控制会话跟踪和堆栈跟踪的行为。
- **ignoreErrors**：定义要忽略的错误类型。
- **sampleRate**：设置错误事件的采样率。
- **allowUrls** 和 **denyUrls**：控制哪些URL的错误被捕获或忽略。
- **maxValueLength**：设置事件内容的最大长度。
- **sessionTrackingIntervalMillis**：设置会话跟踪的时间间隔。
- **transactionName**：自定义事务名称。
- **crossOrigin**：设置跨域资源的 CORS 设置。

## 初始化

**前提：不影响页面的首屏渲染，延后加载，又不会造成数据上报的遗漏**

```js
// main.js
import { createApp } from 'vue';
import App from './App.vue';

const earlyErrors = [];
// 在项目的入口文件中，设置全局的错误处理器，以捕获同步和异步错误。
window.addEventListener('error', function(event) {
  if (event.target !== window) {
    // 处理静态资源加载失败的错误
    console.log('静态资源加载失败:', event.target);
    // 可以在这里将错误信息发送到 Sentry
  } else {
    // 处理 JavaScript 运行时错误
    console.log('JavaScript 运行时错误:', event.message);
    // 可以在这里将错误信息发送到 Sentry
  }
}, true); // 使用捕获模式


window.onunhandledrejection = function (event) {
  earlyErrors.push(event.reason);
};

const app = createApp(App);

// 在 Vue 应用中，设置一个全局的错误处理器，以捕获 Vue 组件中的错误。
app.config.errorHandler = (err, vm, info) => {
  earlyErrors.push({ err, vm, info });
};

app.mount('#app');

app.config.globalProperties.$nextTick(() => {
  import('@sentry/vue').then(Sentry => {
    Sentry.init({
      app,
      // ...其他 Sentry 配置
    });

   //  一旦 Sentry 加载并初始化，发送之前捕获的所有错误。
    earlyErrors.forEach(error => {
      Sentry.captureException(error);
    });

   // 初始化 Sentry 后，清理之前设置的全局和 Vue 错误处理器，并让 Sentry 接管未来的错误捕获。
    earlyErrors.length = 0;

    window.addEventListener('error');
    window.onunhandledrejection = null;
    app.config.errorHandler = null;
  });
});

```

### 1. window.onerror和window.addEventListener('error', function(event) {})的区别

#### 1.1 静态资源错误的捕获

- `window.onerror` 主要用于捕获 JavaScript 运行时错误，包括语法错误、运行时异常等。它不会捕获静态资源（如图片、脚本文件、CSS 文件等）加载失败的错误。
- 要捕获静态资源加载失败的错误，您需要使用 `window.addEventListener('error', function(event) {})`。这个事件处理器能够监听到更广泛的错误事件，包括静态资源加载失败的情况。这是因为这类错误事件不会冒泡，所以无法被 `window.onerror` 捕获，但可以通过事件捕获机制（event capturing）来监听。

#### 1.2 `window.onerror` 与 `window.addEventListener('error', function(event) {})` 的区别

- **捕获范围**：`window.onerror` 主要用于捕获 JavaScript 运行时的错误。而 `window.addEventListener('error', ...)` 能够捕获更广泛的错误事件，包括静态资源加载错误。
- **事件对象**：在 `window.onerror` 中，错误信息通过参数传递。而在 `window.addEventListener('error', ...)` 中，错误信息包含在事件对象（`event`）中。
- **灵活性**：使用 `addEventListener` 可以添加多个监听器，而 `window.onerror` 在任何时候只能有一个处理函数。

## 错误类型

### 1. JavaScript 异常

  这是最常见的异常类型，包括运行时错误（如引用错误、类型错误等）和通过 `throw` 语句抛出的异常。

1. **Vue 错误处理器捕获的异常**：
   - Sentry 针对 Vue 提供了特定的集成，可以捕获由 Vue 应用程序中的组件渲染和观察者中抛出的异常。这包括 Vue 生命周期钩子中的错误和事件处理器中的错误。
2. **Promise 异常**：
   - 未被捕获的 Promise 错误（即那些没有 `.catch()` 处理的 rejected Promises）也会被 Sentry 自动捕获。
3. **网络请求错误**：
   - 虽然 Sentry 不会自动记录所有网络请求错误，但它会捕获由于网络请求失败（如 AJAX 或 Fetch 请求）引起的异常。
4. **控制台错误**：
   - 如果配置了 Sentry 的 `captureConsole` 选项，某些控制台消息（如 `console.error`）也可以被捕获。

### 2. 静态资源错误

1. **JavaScript 和 CSS 文件**：

   - 如果一个 JavaScript 或 CSS 文件未能加载（例如，因为 404 错误），这通常会在浏览器的 JavaScript 控制台中生成一个错误。Sentry 的前端库可以捕获这些控制台错误。
   - **JavaScript 和 CSS 文件为什么会被sentry捕获到错误**
     1. **错误冒泡**：当一个 JavaScript 或 CSS 文件加载失败时（例如，由于 404 错误），这通常会在浏览器中生成一个错误事件。对于 JavaScript，这类错误会冒泡到 `window` 对象，并且可以被全局的错误处理器捕获。
     2. **控制台错误**：这些错误也会在浏览器的控制台中显示为错误消息，Sentry 的前端库能够监听这些错误并自动捕获它们。

2. **图片和其他媒体文件**：

   - 对于图片和其他媒体文件，浏览器可能不会在控制台中生成标准的 JavaScript 错误。在这种情况下，你可能需要使用 JavaScript 的事件监听器来捕获这些错误，并手动将它们报告给 Sentry。
   - **图片和其他媒体文件不会被sentry捕获到错误**
     1. **错误不冒泡**：对于 HTML 元素（如 `<img>`），加载错误（如图片的 404 错误）不会冒泡到 `window` 级别，因此不会被全局错误处理器捕获。
     2. **事件监听器**：为了捕获这类错误，你需要在具体的元素上（如每个 `<img>` 标签上）设置事件监听器。这些监听器可以捕获到元素级别的 `error` 事件，并且可以手动将这些错误报告给 Sentry。
     3. **静默失败**：浏览器通常会“静默地”处理这些资源加载失败的情况，不会在控制台中生成 JavaScript 错误，这是为了避免在正常浏览过程中产生大量的错误消息。

   ```js
   document.addEventListener('error', function(event) {
     if (event.target.tagName === 'IMG') {
       Sentry.captureException(new Error(`Image failed to load: ${event.target.src}`), {
         level: 'warning' // 设置错误级别
       });
     }
   }, true); // 使用事件捕获模式

   ```

   ### 注意事项

   - **性能考虑**：频繁地捕获和报告静态资源错误可能会对性能产生影响，尤其是在资源经常缺失的情况下。
   - **错误过滤**：在某些情况下，你可能不希望报告所有类型的静态资源错误（例如，某些可忽略的小图标文件）。在这种情况下，可以在发送错误之前对其进行过滤。
   - **网络问题**：静态资源加载失败可能是由于用户的网络问题，而不一定是应用本身的问题。在分析这些错误时应考虑这一点。

## 规范上报数据

### 1. 为错误添加上下文

使用 Sentry 的附加功能来为错误提供更多上下文。这包括设置标签（tags）、用户信息（user）、额外信息（extra）和面包屑（breadcrumbs）。

- **标签（Tags）**：用于分类和过滤错误。
- **用户信息（User）**：提供发生错误的用户的详细信息。
- **额外信息（Extra）**：提供错误相关的额外数据。
- **面包屑（Breadcrumbs）**：记录用户在错误发生前的操作历史。

```js
Sentry.configureScope(scope => {
  scope.setTag("my-tag", "my value");
  scope.setUser({ id: "user-id" });
  scope.setExtra("my-extra-data", { foo: "bar" });
  scope.addBreadcrumb({
    message: "User action or state change",
    category: 'action',
    level: Sentry.Severity.Info,
  });
});

```

### 2. 使用错误级别

Sentry 支持不同的错误级别，如 `fatal`, `error`, `warning`, `info`, 和 `debug`。合理使用这些级别可以帮助你区分错误的严重性。

```js
Sentry.captureException(new Error("Critical error"), {
  level: Sentry.Severity.Fatal
});
```

### 3. 自定义错误类

对于特定类型的错误，创建自定义错误类。这可以帮助你在 Sentry 中更清晰地识别和过滤这些错误。

```js
class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}

try {
  // 抛出自定义错误
  throw new MyCustomError("Something went wrong");
} catch (e) {
  Sentry.captureException(e);
}
```

### 4. 分组和聚合规则

在 Sentry 设置中，你可以定义错误的分组和聚合规则。这有助于将相似的错误归类在一起，使错误报告更加清晰。

- 1. **理解 Sentry 的默认分组行为**

  首先，了解 Sentry 默认是如何分组错误的。Sentry 通常根据错误的堆栈跟踪（stack trace）来分组错误。如果两个错误有相似的堆栈跟踪，Sentry 会将它们归为同一组。

  2. **使用指纹（Fingerprints）**

  Sentry 允许你使用“指纹”来自定义错误分组。指纹是一个或多个字符串，Sentry 使用它们来确定哪些错误应该被分组在一起。

  - **自定义指纹**：你可以在上报错误时指定一个自定义指纹。

    ```js
    Sentry.captureException(new Error("Something broke"), {
      fingerprint: ['my-custom-fingerprint']
    });
    ```

  - **基于错误内容的指纹**：你可以根据错误的特定内容来生成指纹，例如错误消息或错误类型。

  3. **使用规则设置**

  在 Sentry 的项目设置中，你可以定义更复杂的分组规则。这些规则可以基于错误的各种属性，如错误类型、错误消息、堆栈跟踪中的特定行等。

  - 进入 Sentry 项目的设置。
  - 寻找“Issue Grouping”（问题分组）部分。
  - 在这里，你可以定义自己的分组规则或修改现有规则。

  4. **聚合规则**

  聚合规则通常是基于标签或错误级别来设置的。你可以在 Sentry 的界面中创建和管理这些规则，以便更好地组织和查看错误。

  - 在 Sentry 仪表板中，使用搜索和过滤功能来创建聚合视图。
  - 你可以保存这些视图以便将来使用。

### 	5. 分组和聚合设计

- **分组规则设计**

  - 基于错误类型和关键函数

    - **规则**：根据错误类型（如 `TypeError`, `SyntaxError`）和关键函数或组件名称进行分组。

    - **目的**：将相似类型的错误和在相同代码路径中发生的错误归为一组。

  - 基于错误消息模式

    - **规则**：对于具有相似错误消息模式的错误进行分组，例如，使用正则表达式匹配错误消息。

    - **目的**：捕获由相同原因引起的不同错误实例。

  - 特定于业务逻辑的分组

    - **规则**：对于特定业务逻辑相关的错误，使用自定义指纹进行分组。

    - **示例**：对于电子商务网站，可能需要将与支付流程相关的所有错误分为一组。

- 聚合规则设计

  - 按错误严重性聚合

    - **规则**：根据错误级别（如 `fatal`, `error`, `warning`）进行聚合。

    - **目的**：快速识别和优先处理最严重的问题。

  - 按用户影响聚合

    - **规则**：根据影响用户的数量进行聚合。

    - **目的**：优先处理影响最多用户的问题。

  - 按模块或组件聚合

    - **规则**：根据错误发生的应用模块或组件进行聚合。

    - **目的**：便于特定模块的负责人跟踪和解决问题。

  - 按时间或版本聚合

    - **规则**：根据错误发生的时间段或应用版本进行聚合。

    - **目的**：识别特定时间或版本引入的问题。

### 6. 命名规范

##### 1. **事件标题（Event Title）**

- **规范**：`[错误类型] - [简短描述]`
- **目的**：快速识别错误的本质。
- **示例**：`DatabaseError - 连接失败`

##### 2. **事件名称（Event Name）**

- **规范**：`[模块/功能]_[动作/结果]`
- **目的**：描述错误发生的模块和具体动作或结果。
- **示例**：`auth_login_failure`

##### 3. **标签（Tags）**

- **环境**：`environment: production/staging/development`
- **版本**：`version: 1.0.3`
- **时间**：通常由 Sentry 自动记录，但可以添加特定的时间标签，如 `time_of_day: morning/afternoon/evening`
- **用户类型**：`user_type: admin/regular`
- **其他重要信息**：根据应用的特点，可以添加如 `feature: payment_gateway`, `region: EU`, 等等。

##### 4. **错误代码（Error Codes）**

- **规范**：`[模块缩写]_[错误序号]`
- **目的**：提供一个唯一的、可查询的错误代码。
- **示例**：`DB_101`

##### 5. **日志消息（Log Messages）**

- **规范**：`[时间戳] [日志级别] [消息]`
- **目的**：提供详细的错误上下文和发生时间。
- **示例**：`2023-03-15 14:22:05 ERROR 数据库连接失败，检查配置。`

##### 6. 示例

假设您正在处理一个数据库连接失败的错误，您可能会这样配置 Sentry：

```js
Sentry.captureException(new Error("数据库连接失败"), {
  tags: {
    environment: "production",
    version: "1.0.3",
    user_type: "admin"
  },
  extra: {
    module: "database",
    action: "connect"
  },
  message: `2023-03-15 14:22:05 ERROR 数据库连接失败，检查配置。`,
  logger: "server-logger"
});
```

在这个例子中：

- **事件标题** 是 `"DatabaseError - 连接失败"`，它清晰地描述了错误的类型和本质。
- **事件名称** 可以是 `"database_connect_failure"`，它描述了发生错误的模块和结果。
- **标签** 包括环境、版本和用户类型，提供了错误发生时的上下文。
- **错误代码**（如果适用）可以是 `"DB_101"`。
- **日志消息** 提供了详细的错误上下文和时间戳。

## 数据过滤

### 1. **使用 Sentry 规则**

Sentry 允许您设置一系列的规则来过滤和分类事件。这些规则可以基于事件的特定属性，如错误类型、消息内容、标签等来定义。

- **忽略特定类型的错误**：您可以设置规则来忽略常见的、不重要的错误。
- **设置警报条件**：例如，只有当某个错误在短时间内多次出现时才发送通知。

### 2. **在客户端进行过滤**

在错误发送到 Sentry 之前，您可以在客户端代码中进行过滤。Sentry SDK 提供了 `beforeSend` 钩子，允许您检查和修改事件，或者决定不发送某些事件。

```js
Sentry.init({
  // ...
  beforeSend(event) {
    if (shouldIgnoreError(event)) {
      return null; // 不发送事件
    }
    return event; // 发送事件
  }
});
```

### 3. **使用标签和环境**

通过在不同的环境中（如开发、测试、生产）标记错误，或者使用自定义标签，您可以更容易地过滤和区分错误。

- **环境**：在初始化 Sentry 时指定环境，如 `environment: 'production'`。
- **标签**：使用标签来标记特定类型的错误或相关的上下文信息。

### 4. **错误去重**

Sentry 自动对相似的错误进行分组，但您也可以通过调整分组设置来影响这一行为。

- **自定义分组规则**：在 Sentry 设置中，您可以自定义错误分组的逻辑，以更好地符合您的需求。

  - **基于错误类型和模块分组**
    - 将错误按类型（如网络错误、数据库错误）和发生错误的模块或组件进行分组。
    - 这有助于快速定位问题所在的系统部分。
  - **考虑错误的上下文**
    - 使用错误发生的上下文（如特定的用户操作或应用状态）来分组。
    - 这可以帮助识别特定场景下的错误模式。
  - **利用堆栈跟踪信息**
    - 堆栈跟踪中的文件名、函数名和行号是分组的重要依据。
    - 为常见的库或框架代码设置分组规则，以避免由于外部代码更新导致的错误分组变化。
  - **忽略不重要的堆栈帧**
    - 对于不影响错误分析的堆栈帧（如通用的中间件或助手函数），可以设置规则将其忽略。
    - 这有助于减少错误分组的噪音。
  - **版本控制**
    - 考虑应用的版本信息作为分组的一部分，特别是当您频繁发布新版本时。
    - 这有助于追踪特定版本引入的错误。

  - 示例规则

  假设您的应用有多个模块，且您希望根据模块和错误类型进行分组：

  1. **按模块分组**

     ```js
     type:stacktrace function:auth* -> 'auth-module-errors'
     type:stacktrace function:payment* -> 'payment-module-errors'
     type:stacktrace function:database* -> 'database-module-errors'
     ```

  2. **按错误类型分组**

     ```js
     type:error error.type:NetworkError -> 'network-errors'
     type:error error.type:DatabaseError -> 'database-errors'
     ```

  3. **忽略通用中间件堆栈帧**

     ```js
     type:stacktrace module:express* -> ignored
     ```

  4. **版本控制**

     ```js
     type:error tags.version:1.0.0 -> 'errors-in-v1.0.0'
     type:error tags.version:1.1.0 -> 'errors-in-v1.1.0'
     ```

### 5. **版本追踪**

通过在 Sentry 中记录应用的版本号，您可以看到错误是在哪个版本首次出现的，以及是否在某次更新后重新出现。

- **版本标签**：在发送事件时附加应用版本的标签。

##### 示例：使用 `beforeSend` 过滤

```js
javascriptCopy codeSentry.init({
  // ...
  beforeSend(event) {
    // 忽略特定消息的错误
    if (event.message && event.message.includes("特定错误消息")) {
      return null;
    }
    // 忽略已知不重要的异常类型
    if (event.exception && event.exception.values) {
      for (let exc of event.exception.values) {
        if (["NonImportantError", "AnotherIgnoredError"].includes(exc.type)) {
          return null;
        }
      }
    }
    return event;
  }
});
```

在这个示例中，`beforeSend` 钩子用于检查事件的消息内容和异常类型，以决定是否忽略某些错误。

## sourceMap

[官方文档](https://docs.sentry.io/platforms/node/guides/koa/sourcemaps/uploading/vite/)

1. 安装

```js
npm install @sentry/vite-plugin --save-dev
```

2. 获取token
   - 手动生成：https://test-001-gf.sentry.io/settings/auth-tokens/
   - [官方文档](https://docs.sentry.io/platforms/node/guides/koa/sourcemaps/uploading/vite/)自动生成
3. 配置

```js
import { defineConfig } from "vite";
import { sentryVitePlugin } from "@sentry/vite-plugin";

export default defineConfig({
  build: {
    sourcemap: true, // Source map generation must be turned on
  },
  plugins: [
    // Put the Sentry vite plugin after all other plugins
    sentryVitePlugin({
      org: "test-001-gf",
      project: "javascript-vue",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
});
```

4. 打包项目校验
   - 在线验证上传是否成功： https://sourcemaps.io/

## CI/CD集成

- ### 集成钉钉机器人

  - **创建钉钉自定义机器人**：
    - 在钉钉群里添加一个自定义机器人。
    - 设置机器人的安全设置，例如“自定义关键词”或“加签”。
    - 记下生成的Webhook URL，这将用于Sentry中的配置。
  - **在Sentry中设置Webhook**：
    - 登录到你的Sentry账户。
    - 选择你想要接收通知的项目。
    - 进入项目设置，找到“Integrations”或“Alerts”部分。
    - 在这里，你可能需要添加一个新的“Webhook”集成。
    - 将钉钉机器人的Webhook URL粘贴到相应的字段中。
  - **配置通知规则**：
    - 在Sentry项目的“Alerts”设置中，创建或编辑通知规则。
    - 设置你希望在何种情况下发送通知（例如，每次出现新错误，或错误达到一定数量时）。
    - 确保选择Webhook作为通知方式。
  - **测试通知**：
    - 你可以通过触发一个已知错误来测试设置是否正确。
    - 检查钉钉群是否收到了相应的通知。

- ### 集成云效

  - 根据需求和云效提供api编写相关接口

  - sentry配置webhooks触发接口请求

  - Sentry 发送的 Webhook 请求通常包括以下信息：

    1. **事件类型**：这表明触发 Webhook 的事件类型，例如错误报告、警告等。
    2. **项目信息**：包括项目的名称、ID 和其他相关信息。
    3. **错误详情**：具体的错误信息，如错误消息、错误类型、发生错误的环境（开发、生产等）、错误发生的时间等。
    4. **堆栈跟踪**：如果可用，Sentry 会包括错误的堆栈跟踪信息。
    5. **触发规则**：如果 Webhook 是由 Sentry 中的特定警报规则触发的，这些信息也会包括在内。
    6. **其他元数据**：如错误发生时的用户信息、浏览器信息、操作系统信息等。

    7. 一个典型的 Sentry Webhook 请求的 JSON 数据可能看起来像这样：

    ```js
    {
      "action": "triggered",
      "data": {
        "event": {
          "id": "12345",
          "project": "project_name",
          "release": "release_version",
          "error_type": "ErrorType",
          "error_message": "Error message here",
          "stack_trace": "Stack trace here",
          // 其他错误详情
        },
        "triggered_rule": "rule_name",
        // 其他数据
      },
      "installation": {
        // 安装相关信息
      },
      "actor": {
        // 触发事件的用户信息
      }
    }
    ```

- ### 集成gitlab

  - **在 Sentry 中添加 GitLab 集成**:
    - 登录到你的 Sentry 账户。
    - 选择你想要集成的项目。
    - 进入项目的设置，找到“Integrations”部分。
    - 在集成列表中找到 GitLab 并选择“Add Integration”。
  - **配置 GitLab 集成**:
    - 你将需要提供 GitLab 的实例 URL（如果你使用的是 GitLab.com，那么就是 `https://gitlab.com`）。
    - 接下来，Sentry 会要求你授权访问你的 GitLab 账户。按照指示完成授权。
  - **设置 GitLab 仓库**:
    - 在 Sentry 的 GitLab 集成页面，你需要连接一个或多个 GitLab 仓库到你的 Sentry 项目。
    - 这样可以使 Sentry 跟踪这些仓库中的提交，并在出现错误时提供更多上下文信息。
  - **配置错误追踪和通知**:
    - 在 Sentry 中，你可以设置特定的规则来决定何时创建 GitLab 问题。
    - 例如，你可以配置为每个新的错误创建一个 GitLab 问题，或者当错误达到一定数量时创建。
  - **测试集成**:
    - 为了确保一切设置正确，你可以触发一个已知错误，并检查是否在 GitLab 中正确创建了问题。
    - 同时检查提交信息是否正确关联到错误。
