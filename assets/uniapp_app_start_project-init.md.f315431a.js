import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.c3fd347f.js";const m=JSON.parse('{"title":"第二集：CLI项目配置","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/app/start/project-init.md","filePath":"uniapp/app/start/project-init.md","lastUpdated":1707147609000}'),l={name:"uniapp/app/start/project-init.md"},p=e(`<h1 id="第二集-cli项目配置" tabindex="-1">第二集：CLI项目配置 <a class="header-anchor" href="#第二集-cli项目配置" aria-label="Permalink to &quot;第二集：CLI项目配置&quot;">​</a></h1><p>  通过上集，我们已经创建了一个项目，但是项目还没有配置好，我们需要对CLI项目进行完整配置。如果你是使用HbuilderX创建的项目，那么你可以跳过这一集。</p><h2 id="_1-修改项目编译器版本" tabindex="-1">1. 修改项目编译器版本 <a class="header-anchor" href="#_1-修改项目编译器版本" aria-label="Permalink to &quot;1. 修改项目编译器版本&quot;">​</a></h2><p><strong>可以比对官方更新版本内容，版本太低一定要更新，一定要更新，一定要更新，避免开发出现问题不好排查</strong> 从cli下载的工程编译器版本可能很低，需要手动修改编译器版本。避免编译器版本过低导致的问题。修改方法如下：</p><ol><li>打开项目目录下的package.json文件</li><li>修改下面的内容，修改为最新版本，主要修改自己项目打包的平台，比如我这里是app，那么就修改app的版本号。</li></ol><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">&quot;@dcloudio/uni-app&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3.0.0-3080720230630001&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;@dcloudio/uni-app-plus&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3.0.0-3080720230630001&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;@dcloudio/uni-components&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3.0.0-3080720230630001&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;@dcloudio/uni-h5&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3.0.0-3080720230630001&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">&quot;@dcloudio/uni-app&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3.0.0-3080720230630001&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;@dcloudio/uni-app-plus&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3.0.0-3080720230630001&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;@dcloudio/uni-components&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3.0.0-3080720230630001&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#032F62;">&quot;@dcloudio/uni-h5&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3.0.0-3080720230630001&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_2-项目完整配置" tabindex="-1">2. 项目完整配置 <a class="header-anchor" href="#_2-项目完整配置" aria-label="Permalink to &quot;2. 项目完整配置&quot;">​</a></h2><h3 id="_1-1-项目初始化" tabindex="-1">1.1 项目初始化 <a class="header-anchor" href="#_1-1-项目初始化" aria-label="Permalink to &quot;1.1 项目初始化&quot;">​</a></h3><p>从0开始搭建一个vue3版本的项目模板。一个项目要有统一的规范，需要使用eslint+stylelint+prettier来对我们的代码质量做检测和修复，需要使用husky来做commit拦截，需要使用commitlint来统一提交规范，需要使用preinstall来统一包管理工具。</p><p>下面我们就用这一套规范来初始化我们的项目，集成一个规范的模版。</p><h4 id="_1-1-1环境准备" tabindex="-1">1.1.1环境准备 <a class="header-anchor" href="#_1-1-1环境准备" aria-label="Permalink to &quot;1.1.1环境准备&quot;">​</a></h4><ul><li>node v16.14.2</li><li>pnpm 8.0.0</li></ul><h4 id="_1-1-2初始化项目" tabindex="-1">1.1.2初始化项目 <a class="header-anchor" href="#_1-1-2初始化项目" aria-label="Permalink to &quot;1.1.2初始化项目&quot;">​</a></h4><p>本项目使用vite进行构建，vite官方中文文档参考：<a href="https://cn.vitejs.dev/guide/" target="_blank" rel="noreferrer">cn.vitejs.dev/guide/</a></p><p><strong>pnpm:performant npm ，意味“高性能的 npm”。<a href="https://so.csdn.net/so/search?q=pnpm&amp;spm=1001.2101.3001.7020" target="_blank" rel="noreferrer">pnpm</a>由npm/yarn衍生而来，解决了npm/yarn内部潜在的bug，极大的优化了性能，扩展了使用场景。被誉为“最先进的包管理工具”</strong></p><p>pnpm安装指令</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npm i -g pnpm</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npm i -g pnpm</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>项目初始化命令:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm create vite</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm create vite</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>进入到项目根目录pnpm install安装全部依赖.安装完依赖运行程序:pnpm run dev</p><p>运行完毕项目跑在<a href="http://127.0.0.1:5173/,%E5%8F%AF%E4%BB%A5%E8%AE%BF%E9%97%AE%E4%BD%A0%E5%BE%97%E9%A1%B9%E7%9B%AE%E5%95%A6" target="_blank" rel="noreferrer">http://127.0.0.1:5173/,可以访问你得项目啦</a></p><h3 id="_1-2项目配置" tabindex="-1">1.2项目配置 <a class="header-anchor" href="#_1-2项目配置" aria-label="Permalink to &quot;1.2项目配置&quot;">​</a></h3><h4 id="一、eslint配置" tabindex="-1">一、eslint配置 <a class="header-anchor" href="#一、eslint配置" aria-label="Permalink to &quot;一、eslint配置&quot;">​</a></h4><p><strong>eslint中文官网:<a href="http://eslint.cn/" target="_blank" rel="noreferrer">http://eslint.cn/</a></strong></p><p>ESLint最初是由<a href="http://nczonline.net/" target="_blank" rel="noreferrer">Nicholas C. Zakas</a> 于2013年6月创建的开源项目。它的目标是提供一个插件化的<strong>javascript代码检测工具</strong></p><p>首先安装eslint</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm i eslint -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm i eslint -D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>生成配置文件:.eslint.cjs</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npx eslint --init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npx eslint --init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>.eslint.cjs配置文件</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  env: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    browser: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    es2021: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    node: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    jest: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  extends: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;eslint:recommended&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;plugin:vue/vue3-essential&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;plugin:@typescript-eslint/recommended&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;plugin:prettier/recommended&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  ],</span></span>
<span class="line"><span style="color:#e1e4e8;">  globals: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    uni: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    plus: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    getCurrentPages: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  overrides: [],</span></span>
<span class="line"><span style="color:#e1e4e8;">  /* 指定如何解析语法 */</span></span>
<span class="line"><span style="color:#e1e4e8;">  parser: &#39;vue-eslint-parser&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  /** 优先级低于 parse 的语法解析配置 */</span></span>
<span class="line"><span style="color:#e1e4e8;">  parserOptions: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    ecmaVersion: &#39;latest&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    sourceType: &#39;module&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    parser: &#39;@typescript-eslint/parser&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    jsxPragma: &#39;React&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    ecmaFeatures: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      jsx: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  plugins: [&#39;vue&#39;, &#39;@typescript-eslint&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">  rules: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // eslint（https://eslint.bootcss.com/docs/rules/）</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;no-var&#39;: &#39;error&#39;, // 要求使用 let 或 const 而不是 var</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;no-multiple-empty-lines&#39;: [&#39;warn&#39;, { max: 1 }], // 不允许多个空行</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;no-console&#39;: p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;no-debugger&#39;: p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;no-unexpected-multiline&#39;: &#39;error&#39;, // 禁止空余的多行</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;no-useless-escape&#39;: &#39;off&#39;, // 禁止不必要的转义字符</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // typeScript (https://typescript-eslint.io/rules)</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;@typescript-eslint/no-unused-vars&#39;: &#39;error&#39;, // 禁止定义未使用的变量</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;@typescript-eslint/prefer-ts-expect-error&#39;: &#39;error&#39;, // 禁止使用 @ts-ignore</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;@typescript-eslint/no-explicit-any&#39;: &#39;off&#39;, // 禁止使用 any 类型</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;@typescript-eslint/no-non-null-assertion&#39;: &#39;off&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;@typescript-eslint/no-namespace&#39;: &#39;off&#39;, // 禁止使用自定义 TypeScript 模块和命名空间。</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;@typescript-eslint/semi&#39;: &#39;off&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;@typescript-eslint/no-this-alias&#39;: [&#39;off&#39;], // 允许给 this 起别名（const that = this）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;vue/multi-word-component-names&#39;: &#39;off&#39;, // 要求组件名称始终为 “-” 链接的单词</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;vue/script-setup-uses-vars&#39;: &#39;error&#39;, // 防止&lt;script setup&gt;使用的变量&lt;template&gt;被标记为未使用</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;vue/no-mutating-props&#39;: &#39;off&#39;, // 不允许组件 prop的改变</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;vue/attribute-hyphenation&#39;: &#39;off&#39;, // 对模板中的自定义组件强制执行属性命名样式</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  env: {</span></span>
<span class="line"><span style="color:#24292e;">    browser: true,</span></span>
<span class="line"><span style="color:#24292e;">    es2021: true,</span></span>
<span class="line"><span style="color:#24292e;">    node: true,</span></span>
<span class="line"><span style="color:#24292e;">    jest: true,</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  extends: [</span></span>
<span class="line"><span style="color:#24292e;">    &#39;eslint:recommended&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;plugin:vue/vue3-essential&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;plugin:@typescript-eslint/recommended&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;plugin:prettier/recommended&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;">  globals: {</span></span>
<span class="line"><span style="color:#24292e;">    uni: true,</span></span>
<span class="line"><span style="color:#24292e;">    plus: true,</span></span>
<span class="line"><span style="color:#24292e;">    getCurrentPages: true,</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  overrides: [],</span></span>
<span class="line"><span style="color:#24292e;">  /* 指定如何解析语法 */</span></span>
<span class="line"><span style="color:#24292e;">  parser: &#39;vue-eslint-parser&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  /** 优先级低于 parse 的语法解析配置 */</span></span>
<span class="line"><span style="color:#24292e;">  parserOptions: {</span></span>
<span class="line"><span style="color:#24292e;">    ecmaVersion: &#39;latest&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    sourceType: &#39;module&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    parser: &#39;@typescript-eslint/parser&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    jsxPragma: &#39;React&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    ecmaFeatures: {</span></span>
<span class="line"><span style="color:#24292e;">      jsx: true,</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [&#39;vue&#39;, &#39;@typescript-eslint&#39;],</span></span>
<span class="line"><span style="color:#24292e;">  rules: {</span></span>
<span class="line"><span style="color:#24292e;">    // eslint（https://eslint.bootcss.com/docs/rules/）</span></span>
<span class="line"><span style="color:#24292e;">    &#39;no-var&#39;: &#39;error&#39;, // 要求使用 let 或 const 而不是 var</span></span>
<span class="line"><span style="color:#24292e;">    &#39;no-multiple-empty-lines&#39;: [&#39;warn&#39;, { max: 1 }], // 不允许多个空行</span></span>
<span class="line"><span style="color:#24292e;">    &#39;no-console&#39;: p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;no-debugger&#39;: p<wbr>rocess.env.NODE_ENV === &#39;production&#39; ? &#39;error&#39; : &#39;off&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;no-unexpected-multiline&#39;: &#39;error&#39;, // 禁止空余的多行</span></span>
<span class="line"><span style="color:#24292e;">    &#39;no-useless-escape&#39;: &#39;off&#39;, // 禁止不必要的转义字符</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // typeScript (https://typescript-eslint.io/rules)</span></span>
<span class="line"><span style="color:#24292e;">    &#39;@typescript-eslint/no-unused-vars&#39;: &#39;error&#39;, // 禁止定义未使用的变量</span></span>
<span class="line"><span style="color:#24292e;">    &#39;@typescript-eslint/prefer-ts-expect-error&#39;: &#39;error&#39;, // 禁止使用 @ts-ignore</span></span>
<span class="line"><span style="color:#24292e;">    &#39;@typescript-eslint/no-explicit-any&#39;: &#39;off&#39;, // 禁止使用 any 类型</span></span>
<span class="line"><span style="color:#24292e;">    &#39;@typescript-eslint/no-non-null-assertion&#39;: &#39;off&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;@typescript-eslint/no-namespace&#39;: &#39;off&#39;, // 禁止使用自定义 TypeScript 模块和命名空间。</span></span>
<span class="line"><span style="color:#24292e;">    &#39;@typescript-eslint/semi&#39;: &#39;off&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;@typescript-eslint/no-this-alias&#39;: [&#39;off&#39;], // 允许给 this 起别名（const that = this）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)</span></span>
<span class="line"><span style="color:#24292e;">    &#39;vue/multi-word-component-names&#39;: &#39;off&#39;, // 要求组件名称始终为 “-” 链接的单词</span></span>
<span class="line"><span style="color:#24292e;">    &#39;vue/script-setup-uses-vars&#39;: &#39;error&#39;, // 防止&lt;script setup&gt;使用的变量&lt;template&gt;被标记为未使用</span></span>
<span class="line"><span style="color:#24292e;">    &#39;vue/no-mutating-props&#39;: &#39;off&#39;, // 不允许组件 prop的改变</span></span>
<span class="line"><span style="color:#24292e;">    &#39;vue/attribute-hyphenation&#39;: &#39;off&#39;, // 对模板中的自定义组件强制执行属性命名样式</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h5 id="_1-1vue3环境代码校验插件" tabindex="-1">1.1vue3环境代码校验插件 <a class="header-anchor" href="#_1-1vue3环境代码校验插件" aria-label="Permalink to &quot;1.1vue3环境代码校验插件&quot;">​</a></h5><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 让所有与prettier规则存在冲突的Eslint rules失效，并使用prettier进行代码检查</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;eslint-config-prettier&quot;: &quot;^8.6.0&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;eslint-plugin-import&quot;: &quot;^2.27.5&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;eslint-plugin-node&quot;: &quot;^11.1.0&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"># 运行更漂亮的Eslint，使prettier规则优先级更高，Eslint优先级低</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;eslint-plugin-prettier&quot;: &quot;^4.2.1&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"># vue.js的Eslint插件（查找vue语法错误，发现错误指令，查找违规风格指南</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;eslint-plugin-vue&quot;: &quot;^9.9.0&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;"># 该解析器允许使用Eslint校验所有babel code</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;@babel/eslint-parser&quot;: &quot;^7.19.1&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;@typescript-eslint/eslint-plugin&quot;: &quot;^5.60.1&quot;,</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 让所有与prettier规则存在冲突的Eslint rules失效，并使用prettier进行代码检查</span></span>
<span class="line"><span style="color:#24292e;">&quot;eslint-config-prettier&quot;: &quot;^8.6.0&quot;,</span></span>
<span class="line"><span style="color:#24292e;">&quot;eslint-plugin-import&quot;: &quot;^2.27.5&quot;,</span></span>
<span class="line"><span style="color:#24292e;">&quot;eslint-plugin-node&quot;: &quot;^11.1.0&quot;,</span></span>
<span class="line"><span style="color:#24292e;"># 运行更漂亮的Eslint，使prettier规则优先级更高，Eslint优先级低</span></span>
<span class="line"><span style="color:#24292e;">&quot;eslint-plugin-prettier&quot;: &quot;^4.2.1&quot;,</span></span>
<span class="line"><span style="color:#24292e;"># vue.js的Eslint插件（查找vue语法错误，发现错误指令，查找违规风格指南</span></span>
<span class="line"><span style="color:#24292e;">&quot;eslint-plugin-vue&quot;: &quot;^9.9.0&quot;,</span></span>
<span class="line"><span style="color:#24292e;"># 该解析器允许使用Eslint校验所有babel code</span></span>
<span class="line"><span style="color:#24292e;">&quot;@babel/eslint-parser&quot;: &quot;^7.19.1&quot;,</span></span>
<span class="line"><span style="color:#24292e;">&quot;@typescript-eslint/eslint-plugin&quot;: &quot;^5.60.1&quot;,</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>安装指令</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser @typescript-eslint/eslint-plugin</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser @typescript-eslint/eslint-plugin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="_1-2-eslintignore忽略文件" tabindex="-1">1.2.eslintignore忽略文件 <a class="header-anchor" href="#_1-2-eslintignore忽略文件" aria-label="Permalink to &quot;1.2.eslintignore忽略文件&quot;">​</a></h5><p>dist node_modules *.md <em>.nvue /src/uni_modules/</em></p><h5 id="_1-3运行脚本" tabindex="-1">1.3运行脚本 <a class="header-anchor" href="#_1-3运行脚本" aria-label="Permalink to &quot;1.3运行脚本&quot;">​</a></h5><p>package.json新增两个运行脚本</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;lint&quot;: &quot;eslint src&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;fix&quot;: &quot;eslint src --fix&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;lint&quot;: &quot;eslint src&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;fix&quot;: &quot;eslint src --fix&quot;,</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="二、配置prettier" tabindex="-1">二、配置<strong>prettier</strong> <a class="header-anchor" href="#二、配置prettier" aria-label="Permalink to &quot;二、配置**prettier**&quot;">​</a></h4><p>有了eslint，为什么还要有prettier？eslint针对的是javascript，他是一个检测工具，包含js语法以及少部分格式问题，在eslint看来，语法对了就能保证代码正常运行，格式问题属于其次；</p><p>而prettier属于格式化工具，它看不惯格式不统一，所以它就把eslint没干好的事接着干，另外，prettier支持</p><p>包含js在内的多种语言。</p><p>总结起来，<strong>eslint和prettier这俩兄弟一个保证js代码质量，一个保证代码美观。</strong></p><h5 id="_2-1安装依赖包" tabindex="-1">2.1安装依赖包 <a class="header-anchor" href="#_2-1安装依赖包" aria-label="Permalink to &quot;2.1安装依赖包&quot;">​</a></h5><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="_2-2-prettierrc-json添加规则" tabindex="-1">2.2.prettierrc.json添加规则 <a class="header-anchor" href="#_2-2-prettierrc-json添加规则" aria-label="Permalink to &quot;2.2.prettierrc.json添加规则&quot;">​</a></h5><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;singleQuote&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;semi&quot;: false,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;bracketSpacing&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;htmlWhitespaceSensitivity&quot;: &quot;ignore&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;endOfLine&quot;: &quot;auto&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;trailingComma&quot;: &quot;all&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;tabWidth&quot;: 2</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;singleQuote&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;semi&quot;: false,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;bracketSpacing&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;htmlWhitespaceSensitivity&quot;: &quot;ignore&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;endOfLine&quot;: &quot;auto&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;trailingComma&quot;: &quot;all&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;tabWidth&quot;: 2</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h5 id="_2-3-prettierignore忽略文件" tabindex="-1">2.3.prettierignore忽略文件 <a class="header-anchor" href="#_2-3-prettierignore忽略文件" aria-label="Permalink to &quot;2.3.prettierignore忽略文件&quot;">​</a></h5><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/dist/*</span></span>
<span class="line"><span style="color:#e1e4e8;">/html/*</span></span>
<span class="line"><span style="color:#e1e4e8;">.local</span></span>
<span class="line"><span style="color:#e1e4e8;">/node_modules/**</span></span>
<span class="line"><span style="color:#e1e4e8;">**/*.svg</span></span>
<span class="line"><span style="color:#e1e4e8;">**/*.sh</span></span>
<span class="line"><span style="color:#e1e4e8;">/public/*</span></span>
<span class="line"><span style="color:#e1e4e8;">*.md</span></span>
<span class="line"><span style="color:#e1e4e8;">/src/uni_modules/*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/dist/*</span></span>
<span class="line"><span style="color:#24292e;">/html/*</span></span>
<span class="line"><span style="color:#24292e;">.local</span></span>
<span class="line"><span style="color:#24292e;">/node_modules/**</span></span>
<span class="line"><span style="color:#24292e;">**/*.svg</span></span>
<span class="line"><span style="color:#24292e;">**/*.sh</span></span>
<span class="line"><span style="color:#24292e;">/public/*</span></span>
<span class="line"><span style="color:#24292e;">*.md</span></span>
<span class="line"><span style="color:#24292e;">/src/uni_modules/*</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>通过pnpm run lint去检测语法，如果出现不规范格式,通过pnpm run fix 修改</strong></p><h4 id="三、配置stylelint" tabindex="-1">三、配置stylelint <a class="header-anchor" href="#三、配置stylelint" aria-label="Permalink to &quot;三、配置stylelint&quot;">​</a></h4><p><a href="https://stylelint.io/" target="_blank" rel="noreferrer">stylelint</a>为css的lint工具。可格式化css代码，检查css语法错误与不合理的写法，指定css书写顺序等。</p><p>我们的项目中使用scss作为预处理器，安装以下依赖：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm add sass sass-loader stylelint postcss postcss-scss postcss-html stylelint-config-prettier stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="_3-1-stylelintrc-cjs配置文件" tabindex="-1">3.1<code>.stylelintrc.cjs</code><strong>配置文件</strong> <a class="header-anchor" href="#_3-1-stylelintrc-cjs配置文件" aria-label="Permalink to &quot;3.1\`.stylelintrc.cjs\`**配置文件**&quot;">​</a></h5><p><strong>官网:<a href="https://stylelint.bootcss.com/" target="_blank" rel="noreferrer">https://stylelint.bootcss.com/</a></strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// @see https://stylelint.bootcss.com/</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  root: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">  plugins: [&#39;stylelint-order&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">  extends: [</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;stylelint-config-standard&#39;, // 配置stylelint拓展插件</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;stylelint-config-html/vue&#39;, // 配置 vue 中 template 样式格式化</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;stylelint-config-standard-scss&#39;, // 配置stylelint scss插件</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;stylelint-config-recommended-vue/scss&#39;, // 配置 vue 中 scss 样式格式化</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;stylelint-config-recess-order&#39;, // 配置stylelint css属性书写顺序插件,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;stylelint-config-prettier&#39;, // 配置stylelint和prettier兼容</span></span>
<span class="line"><span style="color:#e1e4e8;">  ],</span></span>
<span class="line"><span style="color:#e1e4e8;">  rules: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;selector-class-pattern&#39;: null, // 允许下划线：eg:goods_info</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;selector-pseudo-class-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ignorePseudoClasses: [&#39;global&#39;, &#39;v-deep&#39;, &#39;deep&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;selector-type-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ignoreTypes: [</span></span>
<span class="line"><span style="color:#e1e4e8;">          &#39;page&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">          &#39;cover-view&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">          &#39;uni-button&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">          &#39;uni-text&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">          &#39;checkbox&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">          &#39;uni-cover-view&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        ],</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;at-rule-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ignoreAtRules: [&#39;function&#39;, &#39;if&#39;, &#39;each&#39;, &#39;include&#39;, &#39;mixin&#39;, &#39;for&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;no-duplicate-selectors&#39;: null,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;no-empty-source&#39;: null,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;no-descending-specificity&#39;: null,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;font-family-no-missing-generic-family-keyword&#39;: null,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;property-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ignoreProperties: [&#39;lines&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;media-feature-name-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ignoreMediaFeatureNames: &#39;min-device-pixel-ratio&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;unit-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ignoreUnits: [&#39;rpx&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;selector-pseudo-element-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        ignorePseudoElements: [&#39;v-deep&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    // 指定声明块内属性的字母顺序</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;order/properties-order&#39;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;position&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;top&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;right&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;bottom&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;left&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;z-index&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;display&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;float&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;height&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;max-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;max-height&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;min-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;min-height&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;padding&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;padding-top&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;padding-right&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;padding-bottom&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;padding-left&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin-top&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin-right&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin-bottom&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin-left&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin-collapse&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin-top-collapse&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin-right-collapse&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin-bottom-collapse&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;margin-left-collapse&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;overflow&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;overflow-x&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;overflow-y&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;clip&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;clear&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;font&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;font-family&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;font-size&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;font-smoothing&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;osx-font-smoothing&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;font-style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;font-weight&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;hyphens&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;src&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;line-height&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;letter-spacing&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;word-spacing&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;text-align&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;text-decoration&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;text-indent&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;text-overflow&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;text-rendering&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;text-size-adjust&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;text-shadow&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;text-transform&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;word-break&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;word-wrap&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;white-space&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;vertical-align&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;list-style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;list-style-type&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;list-style-position&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;list-style-image&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;pointer-events&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;cursor&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background-attachment&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background-color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background-image&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background-position&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background-repeat&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background-size&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-collapse&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-top&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-right&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-bottom&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-left&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-image&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-top-color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-right-color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-bottom-color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-left-color&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-spacing&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-top-style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-right-style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-bottom-style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-left-style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-top-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-right-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-bottom-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-left-width&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-radius&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-top-right-radius&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-bottom-right-radius&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-bottom-left-radius&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-top-left-radius&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-radius-topright&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-radius-bottomright&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-radius-bottomleft&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;border-radius-topleft&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;content&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;quotes&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;outline&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;outline-offset&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;opacity&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;filter&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;visibility&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;size&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;zoom&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;transform&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;box-align&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;box-flex&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;box-orient&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;box-pack&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;box-shadow&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;box-sizing&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;table-layout&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;animation&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;animation-delay&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;animation-duration&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;animation-iteration-count&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;animation-name&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;animation-play-state&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;animation-timing-function&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;animation-fill-mode&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;transition&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;transition-delay&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;transition-duration&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;transition-property&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;transition-timing-function&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;background-clip&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;backface-visibility&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;resize&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;appearance&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;user-select&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;interpolation-mode&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;direction&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;marks&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;page&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;set-link-source&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;unicode-bidi&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;speak&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// @see https://stylelint.bootcss.com/</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  root: true,</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [&#39;stylelint-order&#39;],</span></span>
<span class="line"><span style="color:#24292e;">  extends: [</span></span>
<span class="line"><span style="color:#24292e;">    &#39;stylelint-config-standard&#39;, // 配置stylelint拓展插件</span></span>
<span class="line"><span style="color:#24292e;">    &#39;stylelint-config-html/vue&#39;, // 配置 vue 中 template 样式格式化</span></span>
<span class="line"><span style="color:#24292e;">    &#39;stylelint-config-standard-scss&#39;, // 配置stylelint scss插件</span></span>
<span class="line"><span style="color:#24292e;">    &#39;stylelint-config-recommended-vue/scss&#39;, // 配置 vue 中 scss 样式格式化</span></span>
<span class="line"><span style="color:#24292e;">    &#39;stylelint-config-recess-order&#39;, // 配置stylelint css属性书写顺序插件,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;stylelint-config-prettier&#39;, // 配置stylelint和prettier兼容</span></span>
<span class="line"><span style="color:#24292e;">  ],</span></span>
<span class="line"><span style="color:#24292e;">  rules: {</span></span>
<span class="line"><span style="color:#24292e;">    &#39;selector-class-pattern&#39;: null, // 允许下划线：eg:goods_info</span></span>
<span class="line"><span style="color:#24292e;">    &#39;selector-pseudo-class-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#24292e;">      true,</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        ignorePseudoClasses: [&#39;global&#39;, &#39;v-deep&#39;, &#39;deep&#39;],</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;selector-type-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#24292e;">      true,</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        ignoreTypes: [</span></span>
<span class="line"><span style="color:#24292e;">          &#39;page&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          &#39;cover-view&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          &#39;uni-button&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          &#39;uni-text&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          &#39;checkbox&#39;,</span></span>
<span class="line"><span style="color:#24292e;">          &#39;uni-cover-view&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        ],</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;at-rule-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#24292e;">      true,</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        ignoreAtRules: [&#39;function&#39;, &#39;if&#39;, &#39;each&#39;, &#39;include&#39;, &#39;mixin&#39;, &#39;for&#39;],</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;no-duplicate-selectors&#39;: null,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;no-empty-source&#39;: null,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;no-descending-specificity&#39;: null,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;font-family-no-missing-generic-family-keyword&#39;: null,</span></span>
<span class="line"><span style="color:#24292e;">    &#39;property-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#24292e;">      true,</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        ignoreProperties: [&#39;lines&#39;],</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;media-feature-name-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#24292e;">      true,</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        ignoreMediaFeatureNames: &#39;min-device-pixel-ratio&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;unit-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#24292e;">      true,</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        ignoreUnits: [&#39;rpx&#39;],</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;selector-pseudo-element-no-unknown&#39;: [</span></span>
<span class="line"><span style="color:#24292e;">      true,</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        ignorePseudoElements: [&#39;v-deep&#39;],</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">    // 指定声明块内属性的字母顺序</span></span>
<span class="line"><span style="color:#24292e;">    &#39;order/properties-order&#39;: [</span></span>
<span class="line"><span style="color:#24292e;">      &#39;position&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;top&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;bottom&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;left&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;z-index&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;display&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;float&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;height&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;max-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;max-height&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;min-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;min-height&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;padding&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;padding-top&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;padding-right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;padding-bottom&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;padding-left&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin-top&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin-right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin-bottom&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin-left&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin-collapse&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin-top-collapse&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin-right-collapse&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin-bottom-collapse&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;margin-left-collapse&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;overflow&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;overflow-x&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;overflow-y&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;clip&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;clear&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;font&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;font-family&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;font-size&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;font-smoothing&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;osx-font-smoothing&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;font-style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;font-weight&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;hyphens&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;src&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;line-height&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;letter-spacing&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;word-spacing&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;text-align&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;text-decoration&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;text-indent&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;text-overflow&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;text-rendering&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;text-size-adjust&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;text-shadow&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;text-transform&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;word-break&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;word-wrap&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;white-space&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;vertical-align&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;list-style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;list-style-type&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;list-style-position&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;list-style-image&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;pointer-events&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;cursor&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;background&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;background-attachment&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;background-color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;background-image&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;background-position&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;background-repeat&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;background-size&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-collapse&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-top&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-right&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-bottom&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-left&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-image&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-top-color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-right-color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-bottom-color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-left-color&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-spacing&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-top-style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-right-style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-bottom-style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-left-style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-top-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-right-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-bottom-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-left-width&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-radius&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-top-right-radius&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-bottom-right-radius&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-bottom-left-radius&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-top-left-radius&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-radius-topright&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-radius-bottomright&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-radius-bottomleft&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;border-radius-topleft&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;content&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;quotes&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;outline&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;outline-offset&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;opacity&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;filter&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;visibility&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;size&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;zoom&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;transform&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;box-align&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;box-flex&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;box-orient&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;box-pack&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;box-shadow&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;box-sizing&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;table-layout&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;animation&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;animation-delay&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;animation-duration&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;animation-iteration-count&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;animation-name&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;animation-play-state&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;animation-timing-function&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;animation-fill-mode&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;transition&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;transition-delay&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;transition-duration&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;transition-property&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;transition-timing-function&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;background-clip&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;backface-visibility&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;resize&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;appearance&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;user-select&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;interpolation-mode&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;direction&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;marks&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;page&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;set-link-source&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;unicode-bidi&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;speak&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br></div></div><h5 id="_3-2-stylelintignore忽略文件" tabindex="-1">3.2.stylelintignore忽略文件 <a class="header-anchor" href="#_3-2-stylelintignore忽略文件" aria-label="Permalink to &quot;3.2.stylelintignore忽略文件&quot;">​</a></h5><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/node_modules/*</span></span>
<span class="line"><span style="color:#e1e4e8;">/dist/*</span></span>
<span class="line"><span style="color:#e1e4e8;">/html/*</span></span>
<span class="line"><span style="color:#e1e4e8;">/public/*</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/node_modules/*</span></span>
<span class="line"><span style="color:#24292e;">/dist/*</span></span>
<span class="line"><span style="color:#24292e;">/html/*</span></span>
<span class="line"><span style="color:#24292e;">/public/*</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="_3-3运行脚本" tabindex="-1">3.3运行脚本 <a class="header-anchor" href="#_3-3运行脚本" aria-label="Permalink to &quot;3.3运行脚本&quot;">​</a></h5><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;lint:style&quot;: &quot;stylelint src/**/*.{css,scss,vue} --cache --fix&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">	&quot;lint:style&quot;: &quot;stylelint src/**/*.{css,scss,vue} --cache --fix&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>最后配置统一的prettier来格式化我们的js和css，html代码</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"> &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;lint&quot;: &quot;eslint ./src&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;fix&quot;: &quot;eslint ./src --fix&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;format&quot;: &quot;prettier --write \\&quot;./**/*.{html,vue,ts,js,json,md}\\&quot;&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;lint:eslint&quot;: &quot;eslint ./src/**/*.{ts,vue} --cache --fix&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;lint:style&quot;: &quot;stylelint ./src/**/*.{css,scss,vue} --cache --fix&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"> &quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;lint&quot;: &quot;eslint ./src&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;fix&quot;: &quot;eslint ./src --fix&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;format&quot;: &quot;prettier --write \\&quot;./**/*.{html,vue,ts,js,json,md}\\&quot;&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;lint:eslint&quot;: &quot;eslint ./src/**/*.{ts,vue} --cache --fix&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;lint:style&quot;: &quot;stylelint ./src/**/*.{css,scss,vue} --cache --fix&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><strong>当我们运行<code>pnpm run format</code>的时候，会把代码直接格式化</strong></p><h4 id="四、配置husky" tabindex="-1">四、配置husky <a class="header-anchor" href="#四、配置husky" aria-label="Permalink to &quot;四、配置husky&quot;">​</a></h4><p>在上面我们已经集成好了我们代码校验工具，但是需要每次手动的去执行命令才会格式化我们的代码。如果有人没有格式化就提交了远程仓库中，那这个规范就没什么用。所以我们需要强制让开发人员按照代码规范来提交。</p><p>要做到这件事情，就需要利用husky在代码提交之前触发git hook(git在客户端的钩子)，然后执行<code>pnpm run format</code>来自动的格式化我们的代码。</p><p>安装<code>husky</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm install -D husky</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm install -D husky</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>执行</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npx husky-init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npx husky-init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>会在根目录下生成个一个.husky目录，在这个目录下面会有一个pre-commit文件，这个文件里面的命令在我们执行commit的时候就会执行</p><p>在<code>.husky/pre-commit</code>文件添加如下命令：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/usr/bin/env sh</span></span>
<span class="line"><span style="color:#e1e4e8;">. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">pnpm run format</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/usr/bin/env sh</span></span>
<span class="line"><span style="color:#24292e;">. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#24292e;">pnpm run format</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>当我们对代码进行commit操作的时候，就会执行命令，对代码进行格式化，然后再提交。</p><h4 id="五、配置commitlint" tabindex="-1">五、配置commitlint <a class="header-anchor" href="#五、配置commitlint" aria-label="Permalink to &quot;五、配置commitlint&quot;">​</a></h4><p>对于我们的commit信息，也是有统一规范的，不能随便写,要让每个人都按照统一的标准来执行，我们可以利用<strong>commitlint</strong>来实现。</p><p>安装包</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm add @commitlint/config-conventional @commitlint/cli -D</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm add @commitlint/config-conventional @commitlint/cli -D</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>添加配置文件，新建<code>commitlint.config.cjs</code>(注意是cjs)，然后添加下面的代码：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">module.exports = {</span></span>
<span class="line"><span style="color:#e1e4e8;">  extends: [&#39;@commitlint/config-conventional&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">  // 校验规则</span></span>
<span class="line"><span style="color:#e1e4e8;">  rules: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;type-enum&#39;: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      2,</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;always&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      [</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;feat&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;fix&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;docs&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;style&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;refactor&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;perf&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;test&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;chore&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;revert&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        &#39;build&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">      ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;type-case&#39;: [0],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;type-empty&#39;: [0],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;scope-empty&#39;: [0],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;scope-case&#39;: [0],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;subject-full-stop&#39;: [0, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;subject-case&#39;: [0, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &#39;header-max-length&#39;: [0, &#39;always&#39;, 72],</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">module.exports = {</span></span>
<span class="line"><span style="color:#24292e;">  extends: [&#39;@commitlint/config-conventional&#39;],</span></span>
<span class="line"><span style="color:#24292e;">  // 校验规则</span></span>
<span class="line"><span style="color:#24292e;">  rules: {</span></span>
<span class="line"><span style="color:#24292e;">    &#39;type-enum&#39;: [</span></span>
<span class="line"><span style="color:#24292e;">      2,</span></span>
<span class="line"><span style="color:#24292e;">      &#39;always&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      [</span></span>
<span class="line"><span style="color:#24292e;">        &#39;feat&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;fix&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;docs&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;style&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;refactor&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;perf&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;test&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;chore&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;revert&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        &#39;build&#39;,</span></span>
<span class="line"><span style="color:#24292e;">      ],</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;type-case&#39;: [0],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;type-empty&#39;: [0],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;scope-empty&#39;: [0],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;scope-case&#39;: [0],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;subject-full-stop&#39;: [0, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;subject-case&#39;: [0, &#39;never&#39;],</span></span>
<span class="line"><span style="color:#24292e;">    &#39;header-max-length&#39;: [0, &#39;always&#39;, 72],</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>在<code>package.json</code>中配置scripts命令</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># 在scrips中添加下面的代码</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;commitlint&quot;: &quot;commitlint --config commitlint.config.cjs -e -V&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># 在scrips中添加下面的代码</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;commitlint&quot;: &quot;commitlint --config commitlint.config.cjs -e -V&quot;</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>配置结束，现在当我们填写<code>commit</code>信息的时候，前面就需要带着下面的<code>subject</code></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&#39;feat&#39;,//新特性、新功能</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;fix&#39;,//修改bug</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;docs&#39;,//文档修改</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;style&#39;,//代码格式修改, 注意不是 css 修改</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;refactor&#39;,//代码重构</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;perf&#39;,//优化相关，比如提升性能、体验</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;test&#39;,//测试用例修改</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;chore&#39;,//其他修改, 比如改变构建流程、或者增加依赖库、工具等</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;revert&#39;,//回滚到上一个版本</span></span>
<span class="line"><span style="color:#e1e4e8;">&#39;build&#39;,//编译相关的修改，例如发布版本、对项目构建或者依赖的改动</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&#39;feat&#39;,//新特性、新功能</span></span>
<span class="line"><span style="color:#24292e;">&#39;fix&#39;,//修改bug</span></span>
<span class="line"><span style="color:#24292e;">&#39;docs&#39;,//文档修改</span></span>
<span class="line"><span style="color:#24292e;">&#39;style&#39;,//代码格式修改, 注意不是 css 修改</span></span>
<span class="line"><span style="color:#24292e;">&#39;refactor&#39;,//代码重构</span></span>
<span class="line"><span style="color:#24292e;">&#39;perf&#39;,//优化相关，比如提升性能、体验</span></span>
<span class="line"><span style="color:#24292e;">&#39;test&#39;,//测试用例修改</span></span>
<span class="line"><span style="color:#24292e;">&#39;chore&#39;,//其他修改, 比如改变构建流程、或者增加依赖库、工具等</span></span>
<span class="line"><span style="color:#24292e;">&#39;revert&#39;,//回滚到上一个版本</span></span>
<span class="line"><span style="color:#24292e;">&#39;build&#39;,//编译相关的修改，例如发布版本、对项目构建或者依赖的改动</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>配置husky</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npx husky add .husky/commit-msg</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npx husky add .husky/commit-msg</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在生成的commit-msg文件中添加下面的命令</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">#!/usr/bin/env sh</span></span>
<span class="line"><span style="color:#e1e4e8;">. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">pnpm commitlint</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">#!/usr/bin/env sh</span></span>
<span class="line"><span style="color:#24292e;">. &quot;$(dirname -- &quot;$0&quot;)/_/husky.sh&quot;</span></span>
<span class="line"><span style="color:#24292e;">pnpm commitlint</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>当我们 commit 提交信息时，就不能再随意写了，必须是 git commit -m &#39;fix: xxx&#39; 符合类型的才可以，<strong>需要注意的是类型的后面需要用英文的 :，并且冒号后面是需要空一格的，这个是不能省略的</strong></p><h4 id="六、强制使用pnpm包管理器工具" tabindex="-1">六、强制使用pnpm包管理器工具 <a class="header-anchor" href="#六、强制使用pnpm包管理器工具" aria-label="Permalink to &quot;六、强制使用pnpm包管理器工具&quot;">​</a></h4><p>团队开发项目的时候，需要统一包管理器工具,因为不同包管理器工具下载同一个依赖,可能版本不一样,</p><p>导致项目出现bug问题,因此包管理器工具需要统一管理！！！</p><p>安装<code>only-allow</code>依赖</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">only-allow</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">only-allow</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>配置命令</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">	&quot;preinstall&quot;: &quot;npx only-allow pnpm&quot;</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&quot;scripts&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">	&quot;preinstall&quot;: &quot;npx only-allow pnpm&quot;</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>当我们使用npm或者yarn来安装包的时候，就会报错了。原理就是在install的时候会触发preinstall（npm提供的生命周期钩子）这个文件里面的代码。</strong></p><h2 id="_3-项目集成" tabindex="-1">3. 项目集成 <a class="header-anchor" href="#_3-项目集成" aria-label="Permalink to &quot;3. 项目集成&quot;">​</a></h2><h3 id="_3-1src别名的配置" tabindex="-1">3.1src别名的配置 <a class="header-anchor" href="#_3-1src别名的配置" aria-label="Permalink to &quot;3.1src别名的配置&quot;">​</a></h3><p>在开发项目的时候文件与文件关系可能很复杂，因此我们需要给src文件夹配置一个别名！！！</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// vite.config.ts</span></span>
<span class="line"><span style="color:#e1e4e8;">import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import { resolve } from &#39;path&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">import uni from &#39;@dcloudio/vite-plugin-uni&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  plugins: [uni()],</span></span>
<span class="line"><span style="color:#e1e4e8;">  resolve: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    alias: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &#39;@&#39;: resolve(__dirname, &#39;./src&#39;),</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  //发布时删除console</span></span>
<span class="line"><span style="color:#e1e4e8;">  build: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    minify: &#39;terser&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    terserOptions: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      compress: {</span></span>
<span class="line"><span style="color:#e1e4e8;">        drop_console: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">      },</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// vite.config.ts</span></span>
<span class="line"><span style="color:#24292e;">import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span style="color:#24292e;">import { resolve } from &#39;path&#39;</span></span>
<span class="line"><span style="color:#24292e;">import uni from &#39;@dcloudio/vite-plugin-uni&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  plugins: [uni()],</span></span>
<span class="line"><span style="color:#24292e;">  resolve: {</span></span>
<span class="line"><span style="color:#24292e;">    alias: {</span></span>
<span class="line"><span style="color:#24292e;">      &#39;@&#39;: resolve(__dirname, &#39;./src&#39;),</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  //发布时删除console</span></span>
<span class="line"><span style="color:#24292e;">  build: {</span></span>
<span class="line"><span style="color:#24292e;">    minify: &#39;terser&#39;,</span></span>
<span class="line"><span style="color:#24292e;">    terserOptions: {</span></span>
<span class="line"><span style="color:#24292e;">      compress: {</span></span>
<span class="line"><span style="color:#24292e;">        drop_console: true,</span></span>
<span class="line"><span style="color:#24292e;">      },</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p><strong>TypeScript 编译配置</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">// tsconfig.json</span></span>
<span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;baseUrl&quot;: &quot;.&quot;, // 解析非相对模块的基地址，默认是当前目录</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;paths&quot;: { //路径映射，相对于baseUrl</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;@/*&quot;: [&quot;./src/*&quot;] </span></span>
<span class="line"><span style="color:#e1e4e8;">    }</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">// tsconfig.json</span></span>
<span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;baseUrl&quot;: &quot;.&quot;, // 解析非相对模块的基地址，默认是当前目录</span></span>
<span class="line"><span style="color:#24292e;">    &quot;paths&quot;: { //路径映射，相对于baseUrl</span></span>
<span class="line"><span style="color:#24292e;">      &quot;@/*&quot;: [&quot;./src/*&quot;] </span></span>
<span class="line"><span style="color:#24292e;">    }</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_3-2集成sass" tabindex="-1">3.2集成sass <a class="header-anchor" href="#_3-2集成sass" aria-label="Permalink to &quot;3.2集成sass&quot;">​</a></h3><p>HbuilderX创建项目自动使用scss，无需自己安装依赖，而cli项目需要自己手动安装，目前在组件内部已经可以使用scss样式,因为在配置styleLint工具的时候，项目当中已经安装过sass sass-loader,因此我们再组件内可以使用scss语法！！！需要加上lang=&quot;scss&quot;</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;style scoped lang=&quot;scss&quot;&gt;&lt;/style&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;style scoped lang=&quot;scss&quot;&gt;&lt;/style&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_3-3-typescrpit集成" tabindex="-1">3.3 TypeScrpit集成 <a class="header-anchor" href="#_3-3-typescrpit集成" aria-label="Permalink to &quot;3.3 TypeScrpit集成&quot;">​</a></h3><p>tsconfig.json配置文件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">{</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;extends&quot;: &quot;@vue/tsconfig/tsconfig.json&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;ignoreDeprecations&quot;: &quot;5.0&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;sourceMap&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;target&quot;: &quot;esnext&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;module&quot;: &quot;esnext&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;strict&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;jsx&quot;: &quot;preserve&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;moduleResolution&quot;: &quot;node&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;esModuleInterop&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;skipLibCheck&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;importHelpers&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;allowSyntheticDefaultImports&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;useDefineForClassFields&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;resolveJsonModule&quot;: true,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;baseUrl&quot;: &quot;.&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;paths&quot;: {</span></span>
<span class="line"><span style="color:#e1e4e8;">      &quot;@/*&quot;: [&quot;./src/*&quot;]</span></span>
<span class="line"><span style="color:#e1e4e8;">    },</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;lib&quot;: [&quot;esnext&quot;, &quot;dom&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;types&quot;: [&quot;@dcloudio/types&quot;, &quot;node&quot;],</span></span>
<span class="line"><span style="color:#e1e4e8;">    &quot;typeRoots&quot;: [&quot;src/types/env.d.ts&quot;, &quot;node_modules/&quot;, &quot;node_modules/@types/&quot;] // 根据项目实际情况配置</span></span>
<span class="line"><span style="color:#e1e4e8;">  },</span></span>
<span class="line"><span style="color:#e1e4e8;">  &quot;include&quot;: [&quot;src/**/*.ts&quot;, &quot;src/**/*.d.ts&quot;, &quot;src/**/*.tsx&quot;, &quot;src/**/*.vue&quot;] // 根据项目实际情况配置</span></span>
<span class="line"><span style="color:#e1e4e8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">{</span></span>
<span class="line"><span style="color:#24292e;">  &quot;extends&quot;: &quot;@vue/tsconfig/tsconfig.json&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">    &quot;ignoreDeprecations&quot;: &quot;5.0&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;sourceMap&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;target&quot;: &quot;esnext&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;module&quot;: &quot;esnext&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;strict&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;jsx&quot;: &quot;preserve&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;moduleResolution&quot;: &quot;node&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;esModuleInterop&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;skipLibCheck&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;importHelpers&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;allowSyntheticDefaultImports&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;useDefineForClassFields&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;resolveJsonModule&quot;: true,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;baseUrl&quot;: &quot;.&quot;,</span></span>
<span class="line"><span style="color:#24292e;">    &quot;paths&quot;: {</span></span>
<span class="line"><span style="color:#24292e;">      &quot;@/*&quot;: [&quot;./src/*&quot;]</span></span>
<span class="line"><span style="color:#24292e;">    },</span></span>
<span class="line"><span style="color:#24292e;">    &quot;lib&quot;: [&quot;esnext&quot;, &quot;dom&quot;],</span></span>
<span class="line"><span style="color:#24292e;">    &quot;types&quot;: [&quot;@dcloudio/types&quot;, &quot;node&quot;],</span></span>
<span class="line"><span style="color:#24292e;">    &quot;typeRoots&quot;: [&quot;src/types/env.d.ts&quot;, &quot;node_modules/&quot;, &quot;node_modules/@types/&quot;] // 根据项目实际情况配置</span></span>
<span class="line"><span style="color:#24292e;">  },</span></span>
<span class="line"><span style="color:#24292e;">  &quot;include&quot;: [&quot;src/**/*.ts&quot;, &quot;src/**/*.d.ts&quot;, &quot;src/**/*.tsx&quot;, &quot;src/**/*.vue&quot;] // 根据项目实际情况配置</span></span>
<span class="line"><span style="color:#24292e;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>`,112),o=[p];function r(t,c,i,u,b,y){return n(),a("div",null,o)}const h=s(l,[["render",r]]);export{m as __pageData,h as default};
