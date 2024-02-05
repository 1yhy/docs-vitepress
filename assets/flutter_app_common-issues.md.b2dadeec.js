import{_ as s,o as e,c as n,Q as a}from"./chunks/framework.c3fd347f.js";const h=JSON.parse('{"title":"Flutter 常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"flutter/app/common-issues.md","filePath":"flutter/app/common-issues.md","lastUpdated":1707147609000}'),l={name:"flutter/app/common-issues.md"},p=a(`<h1 id="flutter-常见问题" tabindex="-1">Flutter 常见问题 <a class="header-anchor" href="#flutter-常见问题" aria-label="Permalink to &quot;Flutter 常见问题&quot;">​</a></h1><h2 id="_1-getx-报错" tabindex="-1">1. getx 报错 <a class="header-anchor" href="#_1-getx-报错" aria-label="Permalink to &quot;1. getx 报错&quot;">​</a></h2><h3 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[Get] the improper use of a GetX has been detected. You should only use GetX or Obx </span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> the specific widget that will be updated. If you are seeing this error, you probably did not insert any observable variables into GetX/Obx or insert them outside the scope that GetX considers suitable for an update (example: GetX =&gt; HeavyWidget =&gt; variableObservable). If you need to update a parent widget and a child widget, wrap each one </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> an Obx/GetX.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[Get] the improper use of a GetX has been detected. You should only use GetX or Obx </span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> the specific widget that will be updated. If you are seeing this error, you probably did not insert any observable variables into GetX/Obx or insert them outside the scope that GetX considers suitable for an update (example: GetX =&gt; HeavyWidget =&gt; variableObservable). If you need to update a parent widget and a child widget, wrap each one </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> an Obx/GetX.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">出现场景： 在一段在代码中同时使用了 GetBuilder 和 Obx 时，会出现这个问题，解决方案是保留其中一个</span></span>
<span class="line"><span style="color:#e1e4e8;">1、Obx:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Obx是用于监听Rx类型（例如RxInt, RxString, RxList等）的变化。</span></span>
<span class="line"><span style="color:#e1e4e8;">当您使用.obs创建一个可观察对象时，您应该使用Obx来监听这个对象的变化。</span></span>
<span class="line"><span style="color:#e1e4e8;">使用Obx时，您不需要手动更新状态。当可观察对象的值改变时，Obx会自动重建其子部件。</span></span>
<span class="line"><span style="color:#e1e4e8;">示例：RxInt counter = 0.obs;，当counter值改变时，使用Obx可以自动重建UI。</span></span>
<span class="line"><span style="color:#e1e4e8;">GetBuilder:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">2、GetBuilder用于监听GetxController的状态变化。</span></span>
<span class="line"><span style="color:#e1e4e8;">当您在控制器中更改状态时，您需要手动调用update()方法来通知听众。</span></span>
<span class="line"><span style="color:#e1e4e8;">GetBuilder更适合那些不经常改变的状态，或者当您需要更多的控制权来决定何时重建UI时。</span></span>
<span class="line"><span style="color:#e1e4e8;">示例：在一个函数中执行某些操作后，您可以调用update()来重建与该控制器关联的所有GetBuilder小部件。</span></span>
<span class="line"><span style="color:#e1e4e8;">3、建议:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">如果您的状态是使用.obs创建的可观察对象，并且您希望在这些对象的值改变时自动重建UI，那么使用Obx可能更合适。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">如果您的状态是在GetxController中定义的，并且您希望有更多的控制权来决定何时重建UI，那么使用GetBuilder可能更合适。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">在您提供的代码中，如果currentIndex是一个可观察对象（例如RxInt），那么使用Obx可能更简单和直观。但如果您在其他地方需要手动控制何时更新UI，那么GetBuilder可能更合适。</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">出现场景： 在一段在代码中同时使用了 GetBuilder 和 Obx 时，会出现这个问题，解决方案是保留其中一个</span></span>
<span class="line"><span style="color:#24292e;">1、Obx:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Obx是用于监听Rx类型（例如RxInt, RxString, RxList等）的变化。</span></span>
<span class="line"><span style="color:#24292e;">当您使用.obs创建一个可观察对象时，您应该使用Obx来监听这个对象的变化。</span></span>
<span class="line"><span style="color:#24292e;">使用Obx时，您不需要手动更新状态。当可观察对象的值改变时，Obx会自动重建其子部件。</span></span>
<span class="line"><span style="color:#24292e;">示例：RxInt counter = 0.obs;，当counter值改变时，使用Obx可以自动重建UI。</span></span>
<span class="line"><span style="color:#24292e;">GetBuilder:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">2、GetBuilder用于监听GetxController的状态变化。</span></span>
<span class="line"><span style="color:#24292e;">当您在控制器中更改状态时，您需要手动调用update()方法来通知听众。</span></span>
<span class="line"><span style="color:#24292e;">GetBuilder更适合那些不经常改变的状态，或者当您需要更多的控制权来决定何时重建UI时。</span></span>
<span class="line"><span style="color:#24292e;">示例：在一个函数中执行某些操作后，您可以调用update()来重建与该控制器关联的所有GetBuilder小部件。</span></span>
<span class="line"><span style="color:#24292e;">3、建议:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">如果您的状态是使用.obs创建的可观察对象，并且您希望在这些对象的值改变时自动重建UI，那么使用Obx可能更合适。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">如果您的状态是在GetxController中定义的，并且您希望有更多的控制权来决定何时重建UI，那么使用GetBuilder可能更合适。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">在您提供的代码中，如果currentIndex是一个可观察对象（例如RxInt），那么使用Obx可能更简单和直观。但如果您在其他地方需要手动控制何时更新UI，那么GetBuilder可能更合适。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div>`,6),t=[p];function r(o,i,c,d,b,u){return e(),n("div",null,t)}const m=s(l,[["render",r]]);export{h as __pageData,m as default};
