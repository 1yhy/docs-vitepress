import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.c3fd347f.js";const u=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"scrcpy/quick-start.md","filePath":"scrcpy/quick-start.md","lastUpdated":1707147609000}'),e={name:"scrcpy/quick-start.md"},p=l(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="什么是scrcpy" tabindex="-1">什么是scrcpy <a class="header-anchor" href="#什么是scrcpy" aria-label="Permalink to &quot;什么是scrcpy&quot;">​</a></h2><p>scrcpy就是通过adb调试的方式来将手机屏幕投到电脑上，并可以通过电脑控制您的Android设备。它可以通过USB连接，也可以通过Wifi连接（类似于隔空投屏），而且不需要任何root权限，不需要在手机里安装任何程序。scrcpy同时适用于GNU / Linux，Windows和macOS。</p><h2 id="使用scrcpy的要求" tabindex="-1">使用scrcpy的要求 <a class="header-anchor" href="#使用scrcpy的要求" aria-label="Permalink to &quot;使用scrcpy的要求&quot;">​</a></h2><ul><li>Android设备至少需要API 21（Android 5.0以上版本）;</li><li>确保在您的设备上启用了adb调试;</li><li>在某些设备上，您还需要启用其他选项以使用键盘和鼠标控制它。</li></ul><h2 id="安装scrcpy" tabindex="-1">安装scrcpy <a class="header-anchor" href="#安装scrcpy" aria-label="Permalink to &quot;安装scrcpy&quot;">​</a></h2><h3 id="_1-安装scrcpy" tabindex="-1">1. 安装scrcpy <a class="header-anchor" href="#_1-安装scrcpy" aria-label="Permalink to &quot;1. 安装scrcpy&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/Genymobile/scrcpy.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">或者</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">下载安装包</span></span>
<span class="line"><span style="color:#B392F0;">https://github.com/Genymobile/scrcpy/releases</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/Genymobile/scrcpy.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">或者</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">下载安装包</span></span>
<span class="line"><span style="color:#6F42C1;">https://github.com/Genymobile/scrcpy/releases</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>打开cmd定位到此目录（在地址栏中输入cmd回车），或者将该目录如D:\\scrcpy-win64-v2.1.1加入到系统环境变量中，程序的使用都在cmd命令行中操作。</p><h2 id="使用usb进行连接" tabindex="-1">使用USB进行连接 <a class="header-anchor" href="#使用usb进行连接" aria-label="Permalink to &quot;使用USB进行连接&quot;">​</a></h2><p>此方式推荐使用，相对更加流畅。</p><p>手机通过USB连接到PC上，首次连接会弹出是否信任该电脑，点击始终信任即可。</p><ul><li>运行adb usb查看是否连接成功</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">D:\\scrcpy-win64-v1.10&gt;adb</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">usb</span></span>
<span class="line"><span style="color:#B392F0;">restarting</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">USB</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mode</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">D:\\scrcpy-win64-v1.10&gt;adb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">usb</span></span>
<span class="line"><span style="color:#6F42C1;">restarting</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">USB</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mode</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>运行scrcpy</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">D:\\scrcpy-win64-v1.10&gt;scrcpy.exe</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">D:\\scrcpy-win64-v1.10&gt;scrcpy.exe</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="使用无线连接" tabindex="-1">使用无线连接 <a class="header-anchor" href="#使用无线连接" aria-label="Permalink to &quot;使用无线连接&quot;">​</a></h2><p>此连接方式更加方便快捷，若宽带速率高，使用效果更佳，使用方法也非常简单。</p><ul><li>确保PC和手机在同一Wifi中</li><li>手机先通过USB与PC相连</li><li>在PC上运行 adb tcpip 服务端口，如端口为5555</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">D:\\scrcpy-win64-v1.10&gt;adb</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tcpip</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5555</span></span>
<span class="line"><span style="color:#B392F0;">restarting</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">TCP</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mode</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">port:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">5555</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">D:\\scrcpy-win64-v1.10&gt;adb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tcpip</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5555</span></span>
<span class="line"><span style="color:#6F42C1;">restarting</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">TCP</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mode</span><span style="color:#24292E;"> </span><span style="color:#032F62;">port:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5555</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>拔下你的设备，断开USB连接</li><li>在PC上运行 adb connect 手机IP:服务端口（手机IP可通过手机的状态信息查看，或者登录路由器查看，一般以192.168开头）</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">D:\\scrcpy-win64-v1.10&gt;adb</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">connect</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">192.168</span><span style="color:#9ECBFF;">.0.4:5555</span></span>
<span class="line"><span style="color:#B392F0;">connected</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">192.168</span><span style="color:#9ECBFF;">.0.4:5555</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">D:\\scrcpy-win64-v1.10&gt;adb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">connect</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">192.168</span><span style="color:#032F62;">.0.4:5555</span></span>
<span class="line"><span style="color:#6F42C1;">connected</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">192.168</span><span style="color:#032F62;">.0.4:5555</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>运行scrcpy，在cmd中输入scrcpy.exe</li><li>性能与USB不同，默认的scrcpy比特率是8Mbps，这对于Wi-Fi连接来说可能太多了。根据使用情况，降低比特率和分辨率可能是一个很好的折中方案。</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">scrcpy</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--bit-rate</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">M</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">--max-size</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">800</span></span>
<span class="line"><span style="color:#6A737D;"># 或者简写</span></span>
<span class="line"><span style="color:#B392F0;">scrcpy</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-b2M</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m800</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">scrcpy</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--bit-rate</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#032F62;">M</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--max-size</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">800</span></span>
<span class="line"><span style="color:#6A737D;"># 或者简写</span></span>
<span class="line"><span style="color:#6F42C1;">scrcpy</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-b2M</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m800</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="切回usb连接" tabindex="-1">切回USB连接 <a class="header-anchor" href="#切回usb连接" aria-label="Permalink to &quot;切回USB连接&quot;">​</a></h2><ul><li>运行adb usb</li></ul><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">D:\\scrcpy-win64-v1.10&gt;adb</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">usb</span></span>
<span class="line"><span style="color:#B392F0;">restarting</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">USB</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">mode</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">D:\\scrcpy-win64-v1.10&gt;adb</span><span style="color:#24292E;"> </span><span style="color:#032F62;">usb</span></span>
<span class="line"><span style="color:#6F42C1;">restarting</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">USB</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mode</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="常用快捷键-重要" tabindex="-1">常用快捷键（重要） <a class="header-anchor" href="#常用快捷键-重要" aria-label="Permalink to &quot;常用快捷键（重要）&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">描述</th><th style="text-align:left;">快捷键</th></tr></thead><tbody><tr><td style="text-align:left;">切换全屏模式</td><td style="text-align:left;">Ctrl+f</td></tr><tr><td style="text-align:left;">点击手机电源</td><td style="text-align:left;">Ctrl+p</td></tr><tr><td style="text-align:left;">返回</td><td style="text-align:left;">Ctrl+b</td></tr><tr><td style="text-align:left;">返回到HOME</td><td style="text-align:left;">Ctrl+h</td></tr><tr><td style="text-align:left;">多任务</td><td style="text-align:left;">Ctrl+s</td></tr><tr><td style="text-align:left;">更多操作</td><td style="text-align:left;">长按鼠标左键</td></tr><tr><td style="text-align:left;">显示最佳窗口</td><td style="text-align:left;">Ctrl+g</td></tr><tr><td style="text-align:left;">调节音量</td><td style="text-align:left;">Ctrl+上下键</td></tr><tr><td style="text-align:left;">关闭设备屏幕（保持镜像）</td><td style="text-align:left;">Ctrl+o</td></tr><tr><td style="text-align:left;">将设备剪贴板复制到计算机</td><td style="text-align:left;">Ctrl+c</td></tr><tr><td style="text-align:left;">将计算机剪贴板粘贴到设备</td><td style="text-align:left;">Ctrl+v</td></tr></tbody></table>`,30),t=[p];function o(c,r,i,d,y,b){return a(),n("div",null,t)}const E=s(e,[["render",o]]);export{u as __pageData,E as default};