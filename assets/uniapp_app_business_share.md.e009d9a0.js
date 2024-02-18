import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.c3fd347f.js";const h=JSON.parse('{"title":"第十五集 分享","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/app/business/share.md","filePath":"uniapp/app/business/share.md","lastUpdated":1707147609000}'),l={name:"uniapp/app/business/share.md"},o=p(`<h1 id="第十五集-分享" tabindex="-1">第十五集 分享 <a class="header-anchor" href="#第十五集-分享" aria-label="Permalink to &quot;第十五集 分享&quot;">​</a></h1><h2 id="_1-uni-share分享" tabindex="-1">1. uni.share分享 <a class="header-anchor" href="#_1-uni-share分享" aria-label="Permalink to &quot;1. uni.share分享&quot;">​</a></h2><h4 id="前置条件" tabindex="-1">前置条件 <a class="header-anchor" href="#前置条件" aria-label="Permalink to &quot;前置条件&quot;">​</a></h4><ul><li>需要配置好manifest.json文件的第三方分享模块</li><li>配置好后，需要重新打包自定义基座，才能生效</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">uni.</span><span style="color:#B392F0;">share</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    provider: </span><span style="color:#9ECBFF;">&#39;weixin&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享服务提供商，通过uni.getProvider获取，在manifest.json的sdk配置中配的分享sdk厂商</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享类型，0图文，1纯文字，2纯图片，3音乐，4视频，5小程序，默认为0</span></span>
<span class="line"><span style="color:#E1E4E8;">    href: </span><span style="color:#9ECBFF;">&#39;https://uniapp.dcloud.io/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享网页地址，type=0时，必填</span></span>
<span class="line"><span style="color:#E1E4E8;">    scence: </span><span style="color:#9ECBFF;">&#39;WXSceneSession&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享场景，微信分享必填 WXSceneSession：分享到聊天界面；WXSceneTimeline：分享到朋友圈；WXSceneFavorite： 分享到微信收藏</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;Hello uni-app&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享标题</span></span>
<span class="line"><span style="color:#E1E4E8;">    summary: </span><span style="color:#9ECBFF;">&#39;Hello uni-app&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享内容摘要 分享类型为1时，必填</span></span>
<span class="line"><span style="color:#E1E4E8;">    imageUrl: </span><span style="color:#9ECBFF;">&#39;https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uniapp-assets/books.gif&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享图片，type=0或type=2或type=5时</span></span>
<span class="line"><span style="color:#E1E4E8;">    mediaUrl: </span><span style="color:#9ECBFF;">&#39;http://music.163.com/song/media/outer/url?id=108220.mp3&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享音视频地址，type=3、4时，必填</span></span>
<span class="line"><span style="color:#E1E4E8;">    openCustomerServiceChat: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 是否启用拉起客服功能（目前仅支持微信）</span></span>
<span class="line"><span style="color:#E1E4E8;">    corpid: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 客服ID（目前仅支持微信） openCustomerServiceChat为true时，必填</span></span>
<span class="line"><span style="color:#E1E4E8;">    customerUrl: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 客服消息打开的页面地址（目前仅支持微信） openCustomerServiceChat为true时，必填</span></span>
<span class="line"><span style="color:#E1E4E8;">    miniProgram: { </span><span style="color:#6A737D;">// 分享小程序，type=5时，必填</span></span>
<span class="line"><span style="color:#E1E4E8;">        id: </span><span style="color:#9ECBFF;">&#39;gh_3ac2059ac66f&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 小程序id</span></span>
<span class="line"><span style="color:#E1E4E8;">        path: </span><span style="color:#9ECBFF;">&#39;/pages/index/index&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 点击链接进入的页面</span></span>
<span class="line"><span style="color:#E1E4E8;">        type: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 小程序版本类型。可取值： 0-正式版； 1-测试版； 2-体验版。 默认值为0。</span></span>
<span class="line"><span style="color:#E1E4E8;">        webUrl: </span><span style="color:#9ECBFF;">&#39;https://uniapp.dcloud.io/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 兼容低版本的网页链接</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;success:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(res));</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fail:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(err));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">uni.</span><span style="color:#6F42C1;">share</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    provider: </span><span style="color:#032F62;">&#39;weixin&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享服务提供商，通过uni.getProvider获取，在manifest.json的sdk配置中配的分享sdk厂商</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享类型，0图文，1纯文字，2纯图片，3音乐，4视频，5小程序，默认为0</span></span>
<span class="line"><span style="color:#24292E;">    href: </span><span style="color:#032F62;">&#39;https://uniapp.dcloud.io/&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享网页地址，type=0时，必填</span></span>
<span class="line"><span style="color:#24292E;">    scence: </span><span style="color:#032F62;">&#39;WXSceneSession&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享场景，微信分享必填 WXSceneSession：分享到聊天界面；WXSceneTimeline：分享到朋友圈；WXSceneFavorite： 分享到微信收藏</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;Hello uni-app&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享标题</span></span>
<span class="line"><span style="color:#24292E;">    summary: </span><span style="color:#032F62;">&#39;Hello uni-app&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享内容摘要 分享类型为1时，必填</span></span>
<span class="line"><span style="color:#24292E;">    imageUrl: </span><span style="color:#032F62;">&#39;https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uniapp-assets/books.gif&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享图片，type=0或type=2或type=5时</span></span>
<span class="line"><span style="color:#24292E;">    mediaUrl: </span><span style="color:#032F62;">&#39;http://music.163.com/song/media/outer/url?id=108220.mp3&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享音视频地址，type=3、4时，必填</span></span>
<span class="line"><span style="color:#24292E;">    openCustomerServiceChat: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 是否启用拉起客服功能（目前仅支持微信）</span></span>
<span class="line"><span style="color:#24292E;">    corpid: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 客服ID（目前仅支持微信） openCustomerServiceChat为true时，必填</span></span>
<span class="line"><span style="color:#24292E;">    customerUrl: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 客服消息打开的页面地址（目前仅支持微信） openCustomerServiceChat为true时，必填</span></span>
<span class="line"><span style="color:#24292E;">    miniProgram: { </span><span style="color:#6A737D;">// 分享小程序，type=5时，必填</span></span>
<span class="line"><span style="color:#24292E;">        id: </span><span style="color:#032F62;">&#39;gh_3ac2059ac66f&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 小程序id</span></span>
<span class="line"><span style="color:#24292E;">        path: </span><span style="color:#032F62;">&#39;/pages/index/index&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 点击链接进入的页面</span></span>
<span class="line"><span style="color:#24292E;">        type: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 小程序版本类型。可取值： 0-正式版； 1-测试版； 2-体验版。 默认值为0。</span></span>
<span class="line"><span style="color:#24292E;">        webUrl: </span><span style="color:#032F62;">&#39;https://uniapp.dcloud.io/&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 兼容低版本的网页链接</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;success:&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(res));</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fail:&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(err));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h4 id="使用uni-ui组件uni-popup-share分享" tabindex="-1">使用<strong>uni-ui组件</strong><a href="https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html#uni-popup-share-%E5%88%86%E4%BA%AB%E7%A4%BA%E4%BE%8B" target="_blank" rel="noreferrer">uni-popup-share</a>分享 <a class="header-anchor" href="#使用uni-ui组件uni-popup-share分享" aria-label="Permalink to &quot;使用**uni-ui组件**[uni-popup-share](https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html#uni-popup-share-%E5%88%86%E4%BA%AB%E7%A4%BA%E4%BE%8B)分享&quot;">​</a></h4><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">uni-popup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;popup&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;share&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">	&lt;</span><span style="color:#85E89D;">uni-popup-share</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;分享到&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@select</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;select&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">uni-popup-share</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">uni-popup</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">uni-popup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;popup&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;share&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">	&lt;</span><span style="color:#22863A;">uni-popup-share</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;分享到&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@select</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;select&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">uni-popup-share</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">uni-popup</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_2-uni-sharewithsystem分享" tabindex="-1">2. uni.shareWithSystem分享 <a class="header-anchor" href="#_2-uni-sharewithsystem分享" aria-label="Permalink to &quot;2. uni.shareWithSystem分享&quot;">​</a></h2><p>调用系统分享组件发送分享消息，不需要配置分享SDK</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">uni.</span><span style="color:#B392F0;">shareWithSystem</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: </span><span style="color:#9ECBFF;">&#39;text&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享类型，只支持text，image，默认为text</span></span>
<span class="line"><span style="color:#E1E4E8;">    summary: </span><span style="color:#9ECBFF;">&#39;Hello uni-app&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    href: </span><span style="color:#9ECBFF;">&#39;https://uniapp.dcloud.io/&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享链接，ios端分享到微信时必填此字段</span></span>
<span class="line"><span style="color:#E1E4E8;">    imageUrl: </span><span style="color:#9ECBFF;">&#39;https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uniapp-assets/books.gif&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享图片，仅支持本地路径</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;success:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(res));</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fail</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">err</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;fail:&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(err));</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">uni.</span><span style="color:#6F42C1;">shareWithSystem</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    type: </span><span style="color:#032F62;">&#39;text&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享类型，只支持text，image，默认为text</span></span>
<span class="line"><span style="color:#24292E;">    summary: </span><span style="color:#032F62;">&#39;Hello uni-app&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享内容</span></span>
<span class="line"><span style="color:#24292E;">    href: </span><span style="color:#032F62;">&#39;https://uniapp.dcloud.io/&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享链接，ios端分享到微信时必填此字段</span></span>
<span class="line"><span style="color:#24292E;">    imageUrl: </span><span style="color:#032F62;">&#39;https://img-cdn-qiniu.dcloud.net.cn/uniapp/doc/uniapp-assets/books.gif&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享图片，仅支持本地路径</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">res</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;success:&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(res));</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fail</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">err</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;fail:&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(err));</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ul><li>Android端当msg参数中设置图片（imageUrl属性）时，分享类型自动变为为image，在分享时可能只会发送图片（如微信）；没有设置图片时分享类型则认为是文本text。</li><li>Android端高版本无法分析私有路径的图片，只能分享来自相册的图片（使用 uni.chooseImage 选择图像时请设置为原图）。</li><li>iOS端不同的分享程序对分享内容有要求，如微信分享时必需添加链接地址href，否则微信分享失败。 注：iOS8.0及以上系统触发成功回调则表示发送消息成功。</li></ul></div><h2 id="_3-使用plus-share-sendwithsystem分享" tabindex="-1">3. 使用plus.share.sendWithSystem分享 <a class="header-anchor" href="#_3-使用plus-share-sendwithsystem分享" aria-label="Permalink to &quot;3. 使用plus.share.sendWithSystem分享&quot;">​</a></h2><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">plus.share.</span><span style="color:#B392F0;">sendWithSystem</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type:</span><span style="color:#9ECBFF;">&#39;text&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享类型，仅支持text、image</span></span>
<span class="line"><span style="color:#E1E4E8;">    content:</span><span style="color:#9ECBFF;">&#39;分享内容&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 分享消息的文字内容</span></span>
<span class="line"><span style="color:#E1E4E8;">    pictures:[</span><span style="color:#9ECBFF;">&#39;_www/assets/books.gif&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">// 分享消息中包含的图片路径，仅支持本地路径。 若分享平台仅支持提交一张图片，传入多张图片则仅提交第一张图片。 如果未指定type类型，优先级顺序为：pictures&gt;content（即设置了pictures则认为分享图片类型）</span></span>
<span class="line"><span style="color:#E1E4E8;">    href:</span><span style="color:#9ECBFF;">&#39;https://www.dcloud.io/&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 分享独立的链接地址，仅支持网络地址（以http://或https://开头）。如果未指定type类型，优先级顺序为：href&gt;pictures&gt;content（即设置了href则认为分享网页类型）。</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;分享成功&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;分享失败：&#39;</span><span style="color:#F97583;">+</span><span style="color:#79B8FF;">JSON</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">stringify</span><span style="color:#E1E4E8;">(e));</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">plus.share.</span><span style="color:#6F42C1;">sendWithSystem</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    type:</span><span style="color:#032F62;">&#39;text&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享类型，仅支持text、image</span></span>
<span class="line"><span style="color:#24292E;">    content:</span><span style="color:#032F62;">&#39;分享内容&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 分享消息的文字内容</span></span>
<span class="line"><span style="color:#24292E;">    pictures:[</span><span style="color:#032F62;">&#39;_www/assets/books.gif&#39;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">// 分享消息中包含的图片路径，仅支持本地路径。 若分享平台仅支持提交一张图片，传入多张图片则仅提交第一张图片。 如果未指定type类型，优先级顺序为：pictures&gt;content（即设置了pictures则认为分享图片类型）</span></span>
<span class="line"><span style="color:#24292E;">    href:</span><span style="color:#032F62;">&#39;https://www.dcloud.io/&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 分享独立的链接地址，仅支持网络地址（以http://或https://开头）。如果未指定type类型，优先级顺序为：href&gt;pictures&gt;content（即设置了href则认为分享网页类型）。</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;分享成功&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(</span><span style="color:#E36209;">e</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;分享失败：&#39;</span><span style="color:#D73A49;">+</span><span style="color:#005CC5;">JSON</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">stringify</span><span style="color:#24292E;">(e));</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_4-参考文档" tabindex="-1">4. 参考文档 <a class="header-anchor" href="#_4-参考文档" aria-label="Permalink to &quot;4. 参考文档&quot;">​</a></h2><ul><li><a href="https://uniapp.dcloud.net.cn/api/plugins/share.html#share" target="_blank" rel="noreferrer">uni.share</a></li><li><a href="https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html#uni-popup-share-%E5%88%86%E4%BA%AB%E7%A4%BA%E4%BE%8B" target="_blank" rel="noreferrer">uni-popup-share</a></li><li><a href="https://ext.dcloud.net.cn/search?q=%E5%BA%95%E9%83%A8%E5%9B%BE%E6%A0%87%E8%8F%9C%E5%8D%95" target="_blank" rel="noreferrer">底部菜单插件市场</a></li></ul>`,15),e=[o];function t(r,c,E,y,i,u){return n(),a("div",null,e)}const F=s(l,[["render",t]]);export{h as __pageData,F as default};