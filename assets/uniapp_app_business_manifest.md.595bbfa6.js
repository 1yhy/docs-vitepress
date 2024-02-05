import{_ as t,o as s,c as a,Q as e}from"./chunks/framework.c3fd347f.js";const E=JSON.parse('{"title":"manifest配置","description":"","frontmatter":{},"headers":[],"relativePath":"uniapp/app/business/manifest.md","filePath":"uniapp/app/business/manifest.md","lastUpdated":1707147609000}'),n={name:"uniapp/app/business/manifest.md"},l=e(`<h1 id="manifest配置" tabindex="-1">manifest配置 <a class="header-anchor" href="#manifest配置" aria-label="Permalink to &quot;manifest配置&quot;">​</a></h1><h2 id="_1-什么是manifest-json" tabindex="-1">1. 什么是manifest.json <a class="header-anchor" href="#_1-什么是manifest-json" aria-label="Permalink to &quot;1. 什么是manifest.json&quot;">​</a></h2><p>  manifest.json是uni-app项目的配置文件，用于指定项目的图标、页面路径、网络超时时间、界面样式等。<br>   manifest.json是一个JSON对象，包含了应用的配置信息，如图标、界面样式、网络超时时间等。manifest.json的配置项非常多，但大部分都有默认值，只有少数是必填项,其中包含许多业务模块的配置。<br>   本文只介绍uni-app开发中常用的配置项，详细的配置项请参考<a href="https://uniapp.dcloud.net.cn/collocation/manifest-app.html" target="_blank" rel="noreferrer">manifest.json配置项说明</a>。</p><h2 id="_2-manifest-json的位置" tabindex="-1">2. manifest.json的位置 <a class="header-anchor" href="#_2-manifest-json的位置" aria-label="Permalink to &quot;2. manifest.json的位置&quot;">​</a></h2><p>manifest.json的位置在项目的根目录下，如下图所示：<br> HBuilderX创建的uni-app项目默认包含manifest.json文件，并且已经配置了一些默认值，HBuiderX会根据manifest.json的配置项生成对应的原生配置文件，如Android平台的AndroidManifest.xml、iOS平台的Info.plist等。</p><ul><li>使用HBuilderX创建的uni-app项目，点击<code>manifest.json</code>文件的可视化界面，方便操作。</li><li>使用cli创建的uni-app项目，可以直接在项目根目录下的manifest.json文件中进行配置。也可以使用HBuilderX打开项目，然后点击<code>manifest.json</code>文件的可视化界面，方便操作。</li></ul><h2 id="_3-manifest-json开发app端常用的配置项" tabindex="-1">3. manifest.json开发App端常用的配置项 <a class="header-anchor" href="#_3-manifest-json开发app端常用的配置项" aria-label="Permalink to &quot;3. manifest.json开发App端常用的配置项&quot;">​</a></h2><p>以上均以项目实际情况为准，不一定全部需要配置，根据实际情况进行配置即可。不需要使用的暂时不勾选，<strong>选择新模块或者插件后需要重新打包项目自定义基座</strong>。</p><h4 id="_3-1-基础配置" tabindex="-1">3.1 基础配置 <a class="header-anchor" href="#_3-1-基础配置" aria-label="Permalink to &quot;3.1 基础配置&quot;">​</a></h4><table><thead><tr><th style="text-align:left;"></th><th style="text-align:center;">基础配置</th></tr></thead><tbody><tr><td style="text-align:left;">AppID</td><td style="text-align:center;">AppID是应用的唯一标识，一般使用包名的形式，如<code>com.example.demo</code>。使用默认值即可，不需要修改。一般为<code>__UNI__XXXXX</code>。</td></tr><tr><td style="text-align:left;">应用名称</td><td style="text-align:center;">app应用的名称</td></tr><tr><td style="text-align:left;">应用描述</td><td style="text-align:center;">app应用的描述信息</td></tr><tr><td style="text-align:left;">应用版本名称</td><td style="text-align:center;">默认值：1.0.0</td></tr><tr><td style="text-align:left;">应用版本号</td><td style="text-align:center;">默认为：100</td></tr><tr><td style="text-align:left;">vue版本选择</td><td style="text-align:center;">值为创建项目的vue版本</td></tr></tbody></table><h4 id="_3-2-启动界面配置" tabindex="-1">3.2 启动界面配置 <a class="header-anchor" href="#_3-2-启动界面配置" aria-label="Permalink to &quot;3.2 启动界面配置&quot;">​</a></h4><table><thead><tr><th style="text-align:left;"></th><th style="text-align:center;">启动界面配置</th></tr></thead><tbody><tr><td style="text-align:left;">是否等待首页渲染完毕后再关闭启动界面</td><td style="text-align:center;">根据实际勾选</td></tr><tr><td style="text-align:left;">是否在程序启动界面显示等待雪花</td><td style="text-align:center;">根据实际勾选</td></tr><tr><td style="text-align:left;">Android启动图</td><td style="text-align:center;">有启动图尽量选择自定义启动图进行配置</td></tr><tr><td style="text-align:left;">使用原生隐私政策框</td><td style="text-align:center;">勾选，上架App需要配置</td></tr><tr><td style="text-align:left;">ios通用启动界面</td><td style="text-align:center;">勾选通用启动界面,根据实际情况选择</td></tr></tbody></table><h4 id="_3-2-app模块配置" tabindex="-1">3.2 App模块配置 <a class="header-anchor" href="#_3-2-app模块配置" aria-label="Permalink to &quot;3.2 App模块配置&quot;">​</a></h4><p>根据项目实际情况选择需要的模块，不需要的模块不勾选即可。大多数需要密钥，需要到对应的平台申请密钥，然后填写到对应的位置。</p><h4 id="_3-3-app权限配置" tabindex="-1">3.3 App权限配置 <a class="header-anchor" href="#_3-3-app权限配置" aria-label="Permalink to &quot;3.3 App权限配置&quot;">​</a></h4><ul><li>Android平台默认会配置好权限，无需修改。</li><li>iOS平台上架时，需要在下面配置权限使用场景描述。</li></ul><div class="language-json vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 仅列出部分权限使用场景描述，根据实际情况进行配置，可自行查找对应的权限使用场景描述</span></span>
<span class="line"><span style="color:#9ECBFF;">&quot;privacyDescription&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;NSPhotoLibraryUsageDescription&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;APP需要您的同意，才能访问相册，以便于图片选取、上传、发布&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;NSPhotoLibraryAddUsageDescription&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;APP需要您的同意，才能访问相册，以便于保存图片&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;NSCameraUsageDescription&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;APP需要您的同意，才能使用摄像头，以便于相机拍摄，上传、发布照片&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;NSLocationWhenInUseUsageDescription&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;APP需要您的同意，才能在使用时获取位置信息，以便于搜索附近的合作门店位置&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;NSMicrophoneUsageDescription&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;APP需要您的同意，才能使用麦克风，以便于视频录制、语音识别、语音聊天&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;NSLocationAlwaysAndWhenInUseUsageDescription&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;App需要您的同意，才能始终访问位置信息，以便于搜索附近的合作门店位置&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;NSContactsUsageDescription&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;APP需要您的同意，才能访问通讯录 (通讯录信息仅用于查找联系人，并会得到严格保密)&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 仅列出部分权限使用场景描述，根据实际情况进行配置，可自行查找对应的权限使用场景描述</span></span>
<span class="line"><span style="color:#032F62;">&quot;privacyDescription&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;NSPhotoLibraryUsageDescription&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;APP需要您的同意，才能访问相册，以便于图片选取、上传、发布&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;NSPhotoLibraryAddUsageDescription&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;APP需要您的同意，才能访问相册，以便于保存图片&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;NSCameraUsageDescription&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;APP需要您的同意，才能使用摄像头，以便于相机拍摄，上传、发布照片&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;NSLocationWhenInUseUsageDescription&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;APP需要您的同意，才能在使用时获取位置信息，以便于搜索附近的合作门店位置&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;NSMicrophoneUsageDescription&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;APP需要您的同意，才能使用麦克风，以便于视频录制、语音识别、语音聊天&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;NSLocationAlwaysAndWhenInUseUsageDescription&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;App需要您的同意，才能始终访问位置信息，以便于搜索附近的合作门店位置&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;NSContactsUsageDescription&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;APP需要您的同意，才能访问通讯录 (通讯录信息仅用于查找联系人，并会得到严格保密)&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="_3-3-app原生插件配置" tabindex="-1">3.3 App原生插件配置 <a class="header-anchor" href="#_3-3-app原生插件配置" aria-label="Permalink to &quot;3.3 App原生插件配置&quot;">​</a></h4><ul><li><strong>使用新插件时，需要重新打包项目自定义基座才能生效。</strong></li></ul><h4 id="_3-4-app常用其他配置" tabindex="-1">3.4 App常用其他配置 <a class="header-anchor" href="#_3-4-app常用其他配置" aria-label="Permalink to &quot;3.4 App常用其他配置&quot;">​</a></h4><table><thead><tr><th style="text-align:left;"></th><th style="text-align:center;">App常用其他配置</th></tr></thead><tbody><tr><td style="text-align:left;">自定义404等错误页面</td><td style="text-align:center;">根据文档进行配置，暂时可以不配置</td></tr><tr><td style="text-align:left;">fast启动模式</td><td style="text-align:center;">根据实际勾选，推荐勾选</td></tr><tr><td style="text-align:left;">纯nvue项目</td><td style="text-align:center;">根据实际勾选</td></tr><tr><td style="text-align:left;">安卓urlSchemes</td><td style="text-align:center;">根据实际情况填写，主要用于使用第三方sdk时跳转自己app</td></tr><tr><td style="text-align:left;">minSdkVersion</td><td style="text-align:center;">Android平台最低支持版本，详情参考：<a href="https://uniapp.dcloud.net.cn/tutorial/app-android-minsdkversion.html" target="_blank" rel="noreferrer">Android平台设置minSdkVersion</a></td></tr><tr><td style="text-align:left;">iosUrlSchemes</td><td style="text-align:center;">根据实际情况填写，主要用于使用第三方sdk时跳转自己app,对应原生ios配置的<strong>在 Xcode 中，点击「TARGETS」，在「info」标签栏的最下面的 URL Types 的 URL Schemes</strong></td></tr><tr><td style="text-align:left;">ios应用访问白名单</td><td style="text-align:center;">根据实际情况填写，对应原生ios配置的<strong>在 Xcode 中，在「info.plist」的<code>LSApplicationQueriesSchemes</code>配置</strong></td></tr><tr><td style="text-align:left;">使用广告标识</td><td style="text-align:center;">不使用不建议勾选，ios上架不通过</td></tr></tbody></table><h2 id="_4-源码视图" tabindex="-1">4.源码视图 <a class="header-anchor" href="#_4-源码视图" aria-label="Permalink to &quot;4.源码视图&quot;">​</a></h2><p>以上配置均可在源码视图json文件中进行配置，HBuilderX只是提供了可视化界面，方便操作，更多额外配置需要参考<a href="https://uniapp.dcloud.net.cn/collocation/manifest-app.html" target="_blank" rel="noreferrer">官方文档</a>说明。</p><h2 id="_5-参考文档" tabindex="-1">5.参考文档 <a class="header-anchor" href="#_5-参考文档" aria-label="Permalink to &quot;5.参考文档&quot;">​</a></h2><ul><li><a href="https://uniapp.dcloud.net.cn/tutorial/app-base.html" target="_blank" rel="noreferrer">App打包配置</a></li><li><a href="https://uniapp.dcloud.net.cn/collocation/manifest-app.html" target="_blank" rel="noreferrer">manifest.json配置项说明</a></li></ul>`,25),o=[l];function p(r,i,c,d,u,y){return s(),a("div",null,o)}const f=t(n,[["render",p]]);export{E as __pageData,f as default};
