import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '常用工具',
    items: [
      {
        icon: 'https://caniuse.com/img/favicon-128.png',
        title: 'Can I use',
        desc: '前端 API 兼容性查询',
        link: 'https://caniuse.com',
      },
      {
        icon: 'https://tinypng.com/images/apple-touch-icon.png',
        title: 'TinyPNG',
        desc: '在线图片压缩工具',
        link: 'https://tinypng.com',
      },
      {
        icon: 'https://devtool.tech/logo.svg',
        title: '开发者武器库',
        desc: '开发者武器库，做开发者最专业最好用的专业工具箱',
        link: 'https://devtool.tech',
      },
      {
        icon: 'https://tool.lu/favicon.ico',
        title: '在线工具',
        desc: '开发人员的工具箱',
        link: 'https://tool.lu',
      },
      {
        icon: 'https://excalidraw.com/favicon-32x32.png',
        title: '前端手绘白板',
        desc: '在线手绘画图白板',
        link: 'https://excalidraw.com/',
      },
      {
        icon: '/icons/json-cn.ico',
        title: 'Json 中文网',
        desc: 'JSON 在线解析及格式化验证',
        link: 'https://www.json.cn',
      },
      {
        icon: 'https://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/fd31bfa6cbc14800be44964c0480f7d6~tplv-49unhts6dw-image.image',
        title: '前端知识库_前端字母B分类_第1页_第1子页',
        desc: '前端知识库的一个分类页面',
        link: 'https://frontend.devrank.cn/traffic-catalogue/1-B',
      },
      {
        icon: 'https://survey.devographics.com/favicon.ico',
        title: 'State of JavaScript',
        desc: '关于JavaScript的年度调查报告',
        link: 'https://stateofjs.com/zh-Hans/',
      },
      {
        icon: 'https://roadmap.sh/manifest/icon16.png',
        title: 'Frontend Developer',
        desc: '前端开发者的学习路线图',
        link: 'https://roadmap.sh/frontend',
      },
      {
        icon: 'https://qwerty.fe-mm.com/apple-touch-icon.png',
        title: 'Qwerty Learner',
        desc: '为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件',
        link: 'https://qwerty.fe-mm.com',
      },
      {
        icon: 'https://ssl.gstatic.com/pagespeed/insights/ui/logo/favicon_48.png',
        title: 'PageSpeed Insights',
        desc: '页面性能分析',
        link: 'https://pagespeed.web.dev/',
      }
    ],
  },
  {
    title: '工具合集',
    items: [
      {
        icon: 'https://convertio.co/favicon.ico',
        title: 'SVG到PNG转换器(以及其他转换)',
        desc: '在线转换SVG到PNG的工具',
        link: 'https://convertio.co/zh/svg-png/',
      },
      {
        icon: 'https://www.appicon.co/favicon.ico',
        title: 'App Icon Generator',
        desc: '生成App图标的工具',
        link: 'https://www.appicon.co/',
      },
      {
        icon: 'https://transform.tools/static/favicon.png',
        title: 'TypeScript to plain JavaScript(以及其他多种转换)',
        desc: '在线转换TypeScript到JavaScript的工具',
        link: 'https://transform.tools/typescript-to-javascript',
      },
      {
        icon: 'https://cdn.sojson.com/sojson/favicon48.png',
        title: '图片转base64',
        desc: '在线将图片转换为base64的工具',
        link: 'https://www.sojson.com/image2base64.html',
      },
      {
        icon: 'https://readme.so/favicon.ico',
        title: '快速生成readme',
        desc: '快速生成README文件的工具',
        link: 'https://readme.so/',
      },
      {
        icon: 'https://shields.io/favicon.ico',
        title: 'shields',
        desc: '创建项目徽章的工具',
        link: 'https://shields.io/',
      },
      {
        icon: 'https://carbon.now.sh/favicon.ico',
        title: '代码生成漂亮的图片格式：Carbon',
        desc: '将代码转换为漂亮图片的工具',
        link: 'https://carbon.now.sh/?bg=rgba%2860%2C115%2C162%2C1%29&t=monokai&wt=none&l=text&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false',
      },
      {
        icon: 'https://www.favicon.cc/favicon.ico',
        title: 'favicon.ico Generator',
        desc: '生成favicon.ico的工具',
        link: 'https://www.favicon.cc/?',
      },
      {
        icon: 'https://icoconvert.com/images/xx6.png',
        title: 'png/jpg转ico',
        desc: '在线将png/jpg转换为ico的工具',
        link: 'https://icoconvert.com/',
      },
      {
        icon: 'https://qwerty.liumingye.cn/favicon.ico',
        title: '背单词',
        desc: '在线背单词的工具',
        link: 'https://qwerty.liumingye.cn/',
      },
      {
        icon: 'https://static.deepl.com/img/favicon/favicon_32.png',
        title: '文件内容翻译',
        desc: '在线翻译文件内容的工具',
        link: 'https://www.deepl.com/translator/files',
      },
      {
        icon: 'https://static.typingclub.com/m/favicon.png',
        title: '打字练习',
        desc: '在线打字练习的工具',
        link: 'https://www.typingclub.com/sportal/program-3.game',
      },
      {
        icon: 'https://www.wecompress.com/favicon.ico',
        title: '在线文件压缩器',
        desc: '在线压缩文件的工具',
        link: 'https://www.wecompress.com/zh-Hans/',
      },
      {
        icon: 'https://tools.pdf24.org/favicon.ico',
        title: 'PDF24 Tools-免费且易于使用的在线PDF工具',
        desc: '在线处理PDF文件的工具',
        link: 'https://tools.pdf24.org/zh/',
      },
      {
        icon: 'https://www.youxiaohou.com/favicon.ico',
        title: '油小猴',
        desc: '油小猴的下载页面',
        link: 'https://www.youxiaohou.com/download.html',
      },
      {
        icon: 'https://www.remove.bg/favicon-32x32.png?v=YAXaAv7pao',
        title: 'Upload Image – remove.bg',
        desc: '提供在线移除图片背景的工具',
        link: 'https://www.remove.bg/upload',
      },
      {
        icon: 'https://jakearchibald.github.io/svgomg/imgs/icon.png',
        title: 'svgomg',
        desc: '提供在线修改SVG的工具',
        link: 'https://jakearchibald.github.io/svgomg/',
      },
      {
        icon: 'https://hotpot.ai/images/apple-touch-icon.png',
        title: '修改图标尺寸',
        desc: '提供在线修改图标尺寸的工具',
        link: 'https://hotpot.ai/icon-resizer?s=tools',
      },
    ],
  },
  {
    title: 'CSS',
    items: [
      {
        icon: 'https://loading.io/favicon.ico',
        title: 'Loading.io',
        desc: '创建加载动画的工具',
        link: 'https://loading.io/',
      },
      {
        icon: 'https://icons8.com/preloaders/img/favicons/favicon-32x32.png',
        title: 'Loading, waiting,and spinning animations',
        desc: '提供各种加载动画的网站',
        link: 'https://icons8.com/preloaders/',
      },
      {
        icon: 'https://cssfx.lovejade.cn/favicon-16x16.png',
        title: 'css动画代码',
        desc: '收集了各种CSS动画的网站',
        link: 'https://cssfx.lovejade.cn/',
      },
      {
        icon: 'https://tsejx.github.io/css-guidebook/favicon.ico',
        title: 'CSS Guidebook',
        desc: 'CSS指南',
        link: 'https://tsejx.github.io/css-guidebook/',
      },
      {
        icon: 'https://greensock.com/favicon.ico',
        title: 'gsap',
        desc: '一个强大的JavaScript动画库',
        link: 'https://greensock.com/gsap/',
      },
      {
        icon: 'https://postcss.org/assets/logo-tq8kLoG9.svg',
        title: 'PostCSS',
        desc: '一个用 JavaScript 转换 CSS 的工具',
        link: 'https://postcss.org',
      },
      {
        icon: 'https://sass-lang.com/icon.png',
        title: 'Sass',
        desc: '一个成熟，稳定，功能强大的专业级 CSS 扩展语言',
        link: 'https://sass-lang.com',
      },
      {
        icon: 'https://www.tailwindcss.cn/favicons/favicon-32x32.png?v=3',
        title: 'TailwindCSS 中文网',
        desc: '一个功能类优先的 CSS 框架',
        link: 'https://www.tailwindcss.cn',
      },
      {
        icon: 'https://codeadrian.github.io/clay.css/favicon-32x32.png',
        title: 'clay.css',
        desc: '添加黏土形状CSS',
        link: 'https://codeadrian.github.io/clay.css/',
      },
    ],
  },
  {
    title: 'JavaScript 框架类库',
    items: [
      {
        icon: 'https://risingstars.js.org/favicon.ico',
        title: 'JavaScript 明星项目',
        desc: '展示每年最受欢迎的JavaScript项目',
        link: 'https://risingstars.js.org/2022/zh',
      },
      {
        icon: 'https://svelte.dev/svelte-logo-horizontal.svg',
        title: 'Svelte',
        desc: '将声明性组件转换为精准高效更新 DOM 的 JavaScript 代码',
        link: 'https://svelte.dev',
      },
      {
        // icon: 'https://simpleicons.org/icons/jquery.svg',
        icon: '/icons/jquery.svg',
        title: 'jQuery API 中文文档',
        desc: '一个兼容多浏览器的 JavaScript 框架',
        link: 'https://jquery.cuishifeng.cn',
      },
    ],
  },
  {
    title: 'AI 导航',
    items: [
      {
        icon: 'https://poe.com/favicon.ico',
        title: 'poe',
        link: 'https://poe.com/',
      },
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT',
        link: 'https://chat.openai.com/chat',
      },
      {
        icon: '/icons/chatgpt.png',
        title: 'ChatGPT 后台',
        link: 'https://platform.openai.com/api-keys',
      },
      {
        icon: 'https://xinghuo.xfyun.cn/favicon.ico',
        title: '讯飞星火大模型',
        link: 'https://xinghuo.xfyun.cn/desk',
      },
      {
        icon: 'https://www.notion.so/images/logo-ios.png',
        title: 'Notion AI（笔记）',
        link: 'https://www.notion.so',
      },
      {
        icon: 'https://www.midjourney.com/apple-touch-icon.png',
        title: 'Midjourney（绘画）',
        link: 'https://www.midjourney.com',
      },
      {
        icon: 'https://global-uploads.webflow.com/59deb588800ae30001ec19c9/5d4891e0e260e3c1bc37b100_beautiful%20ai%20favicon%20%20blue%20square.png',
        title: 'Beautiful.ai（PPT）',
        link: 'https://www.beautiful.ai',
      },
    ],
  },
  {
    title: '设计导航',
    items: [
      {
        icon: 'https://cdn.meigong8.com/2022/03/logo.png',
        title: '美工吧',
        desc: '日常笔记记录（零零散散啥都记系列）',
        link: 'https://www.meigong8.com/',
      },
      {
        icon: 'https://static.zcool.cn/git_z/z/site/favicon.ico?version=1618914637608',
        title: '站酷',
        desc: '在线手绘画图白板',
        link: 'https://www.zcool.com.cn/',
      },
      {
        icon: 'https://huaban.com/img/touch-icon-iphone-retina.png',
        title: '花瓣',
        desc: '为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件',
        link: 'https://huaban.com/',
      },
      {
        icon: '/assets/books.gif',
        title: '手机屏幕尺寸大全-优优教程网',
        desc: '屏幕尺寸、设计师规范、网址导航',
        link: 'https://uiiiuiii.com/screen/',
      },
      {
        icon: 'https://ui8.net/favicon-32x32.png',
        title: 'ui8设计稿',
        desc: '屏幕尺寸、设计师规范、网址导航',
        link: 'https://ui8.net/',
      },
      {
        icon: 'https://www.gstatic.com/images/icons/material/apps/fonts/1x/catalog/v5/favicon.svg',
        title: '谷歌字体',
        desc: '屏幕尺寸、设计师规范、网址导航',
        link: 'https://fonts.google.com/',
      },
      {
        icon: 'https://materialui.co/favicon.gif',
        title: '🎨 Material Design Colors, Color Palette | Material UI',
        desc: '屏幕尺寸、设计师规范、网址导航',
        link: 'https://materialui.co/colors',
      },
      {
        icon: 'https://www.chinavid.com/wp-content/themes/Vstyle/assets/img/favicon.ico',
        title: 'Color Scheme Designer',
        desc: '在线配色器-在线色彩搭配和色彩配色方案',
        link: 'https://www.chinavid.com/color.html',
      },
      {
        icon: 'https://unpkg.byted-static.com/byted/arco-config/1.0.12/assets/arco_palette.ico',
        title: 'palette',
        desc: '在线配色器-在线色彩搭配和色彩配色方案',
        link: 'https://arco.design/palette/list',
      },
    ],
  },
  {
    title: '图标库/插图库',
    items: [
      {
        icon: 'https://img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg',
        title: 'iconfont',
        desc: '国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能',
        link: 'https://www.iconfont.cn',
      },
      {
        icon: 'https://lf1-cdn2-tos.bytegoofy.com/bydesign/iconparksite/logo.svg',
        title: 'IconPark 图标库',
        desc: 'IconPark图标库是一个通过技术驱动矢量图标样式的开源图标库，可以实现根据单一 SVG 源文件变换出多种主题， 具备丰富的分类、更轻量的代码和更灵活的使用场景；致力于构建高质量、统一化、可定义的图标资源，让大多数人都能够选择适合自己的风格图标',
        link: 'https://iconpark.oceanengine.com/official',
      },
      {
        icon: 'https://unpkg.byted-static.com/byted/arco-config/1.0.12/assets/arco_iconbox.ico',
        title: 'Iconbox',
        desc: 'Arco Design的图标库',
        link: 'https://arco.design/iconbox/libs',
      },
      {
        icon: 'https://undraw.co/favicon.ico',
        title: 'unDraw',
        desc: '提供免费插图的网站',
        link: 'https://undraw.co/illustrations',
      },
      {
        icon: 'https://iconscout.com/favicon.ico',
        title: 'iconscout',
        desc: '提供各种图标和插图的网站',
        link: 'https://iconscout.com/',
      },
      {
        icon: 'https://remixicon.com/favicon.ico',
        title: 'REMIX ICON',
        desc: '提供免费图标的网站',
        link: 'https://remixicon.com/',
      },
      {
        icon: 'https://iconic.app/wp-content/themes/basis-iconic/icon.png',
        title: 'iconic',
        desc: '提供各种图标的网站',
        link: 'https://iconic.app/',
      },
      {
        icon: 'https://icones.js.org/favicon.svg',
        title: '前端图标：icones',
        desc: '提供前端图标的网站',
        link: 'https://icones.js.org/',
      },
      {
        icon: 'https://maxst.icons8.com/vue-static/landings/primary-landings/favs/icons8_fav_32%C3%9732.png',
        title: 'icons8',
        desc: '提供各种图标和插图的网站',
        link: 'https://icons8.com/',
      },
      {
        icon: 'https://storytale.io/favicons/favicon-64.png',
        title: 'Storytale',
        desc: '提供插画的网站',
        link: 'https://storytale.io/',
      }
    ],
  },
  {
    title: '后端导航',
    items: [
      {
        icon: 'https://p9-armor.byteimg.com/tos-cn-i-49unhts6dw/08369b0024f04bbbb1b8662a9d7a34b2~tplv-49unhts6dw-image.image',
        title: '掘金后端知识库',
        desc: '后端知识库_后端字母B分类_第1页_第1子页',
        link: 'https://backend.devrank.cn/traffic-catalogue/1-A-1-41',
      },
      {
        icon: 'https://opencv.apachecn.org/assets/images/favicon.png',
        title: 'opencv',
        desc: 'OpenCV的中文文档',
        link: 'https://opencv.apachecn.org/#/docs/4.0.0/1.1-tutorial_py_intro',
      }
    ],
  },
  {
    title: '博客站',
    items: [
      {
        icon: 'https://jefferyxzf.github.io/favicon.ico',
        title: 'Jefferyxzf',
        link: 'https://webjeffery.github.io/jeffery-blog/',
      },
      {
        icon: 'https://notes.fe-mm.com/logo.png',
        title: '茂茂',
        link: 'https://notes.fe-mm.com/',
      },
      {
        icon: 'https://rualc.com/favicon.ico',
        title: '前端指南博客',
        link: 'https://rualc.com/',
      },
      {
        icon: 'https://nlrx-wjc.github.io/Learn-Vue-Source-Code/logo.png',
        title: '逐行剖析 Vue.js 源码',
        desc: '逐行剖析Vue.js源码的教程',
        link: 'https://nlrx-wjc.github.io/Learn-Vue-Source-Code/',
      },
      {
        icon: 'https://www.yuque.com/favicon.ico',
        title: '前端工程师成长之路',
        link: 'https://www.yuque.com/lizhiyao/dxydance/tpz004',
      },
      {
        icon: 'https://awps-assets.meituan.net/mit/blog/v20190629/asset/icon/favicon.ico?v=Whistle&t=20181017-1r',
        title: '美团技术团队',
        desc: '美团技术团队的博客',
        link: 'https://tech.meituan.com/',
      },
      {
        icon: 'https://developer.mozilla.org/apple-touch-icon.6803c6f0.png',
        title: 'MDN | Web 开发者指南',
        desc: 'Mozilla 的开发者平台，提供了大量关于 HTML、CSS 和 JavaScript 的详细文档以及广泛的 Web API 参考资',
        link: 'https://developer.mozilla.org/zh-CN',
      },
      {
        icon: 'https://static.jyshare.com/images/favicon.ico',
        title: '菜鸟教程',
        desc: '学的不仅是技术，更是梦想！',
        link: 'https://www.runoob.com',
      },
      {
        icon: '/icons/es6.svg',
        title: 'ES6 入门教程',
        desc: '阮一峰的网络日志',
        link: 'http://es6.ruanyifeng.com',
      },
      {
        icon: 'https://www.foreverblog.cn/favicon.ico',
        title: '虫洞',
        desc: 'Foreverblog的虫洞公告',
        link: 'https://www.foreverblog.cn/notice/16.html',
      },
      {
        icon: 'https://www.travellings.cn/assets/img/mini-logo.svg',
        title: '开往',
        desc: 'Travellings的官方网站',
        link: 'https://www.travellings.cn/',
      },
      {
        icon: 'https://www.travellings.cn/assets/img/mini-logo.svg',
        title: '博客列表',
        desc: '开往项目中的个人博客',
        link: 'https://list.travellings.cn/',
      },
      {
        icon: 'https://avatars.githubusercontent.com/u/5512552?s=48&v=4',
        title: '中文独立博客列表',
        desc: 'github项目-中文独立博客列表',
        link: 'https://github.com/timqian/chinese-independent-blogs',
      }
    ],
  },
  {
    title: 'Vue 生态',
    items: [
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 3',
        desc: '渐进式 JavaScript 框架',
        link: 'https://cn.vuejs.org',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue 2',
        desc: '渐进式 JavaScript 框架',
        link: 'https://v2.cn.vuejs.org',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'Vue Router',
        desc: 'Vue.js 的官方路由\n为 Vue.js 提供富有表现力、可配置的、方便的路由',
        link: 'https://router.vuejs.org/zh',
      },
      {
        icon: 'https://pinia.vuejs.org/logo.svg',
        title: 'Pinia',
        desc: '符合直觉的 Vue.js 状态管理库',
        link: 'https://pinia.vuejs.org/zh',
      },
      {
        icon: 'https://nuxt.com/icon.png',
        title: 'Nuxt.js',
        desc: '一个基于 Vue.js 的通用应用框架',
        link: 'https://nuxt.com',
      },
      {
        icon: 'https://vueuse.org/favicon.svg',
        title: 'VueUse',
        desc: 'Vue Composition API 的常用工具集',
        link: 'https://vueuse.org',
      },
      {
        icon: 'https://element-plus.org/images/element-plus-logo-small.svg',
        title: 'Element Plus',
        desc: '基于 Vue 3，面向设计师和开发者的组件库',
        link: 'https://element-plus.org',
      },
      {
        icon: 'https://www.antdv.com/assets/logo.1ef800a8.svg',
        title: 'Ant Design Vue',
        desc: 'Ant Design 的 Vue 实现，开发和服务于企业级后台产品',
        link: 'https://antdv.com',
      },
      {
        icon: 'https://fastly.jsdelivr.net/npm/@vant/assets/logo.png',
        title: 'Vant',
        desc: '轻量、可定制的移动端 Vue 组件库',
        link: 'https://vant-ui.github.io/vant',
      },
      {
        icon: 'https://webapp.didistatic.com/static/webapp/shield/Cube-UI_logo.ico',
        title: 'Cube UI',
        desc: '基于 Vue.js 实现的精致移动端组件库',
        link: 'https://didi.github.io/cube-ui',
      },
      {
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png',
        title: 'NutUI',
        desc: '京东风格的轻量级移动端组件库',
        link: 'https://nutui.jd.com',
      },
    ],
  },
  {
    title: 'Node 相关',
    items: [
      {
        icon: '/icons/nodejs.svg',
        title: 'Node.js',
        desc: 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境',
        link: 'https://nodejs.org/zh-cn',
      },
      {
        icon: 'https://expressjs.com/images/favicon.png',
        title: 'Express',
        desc: '基于 Node.js 平台，快速、开放、极简的 Web 开发框架',
        link: 'https://expressjs.com',
      },
      {
        icon: '/icons/koa.svg',
        title: 'Koa',
        desc: '基于 Node.js 平台的下一代 web 开发框架',
        link: 'https://koajs.com',
      },
      {
        icon: 'https://www.eggjs.org/favicon.png',
        title: 'Egg',
        desc: '为企业级框架和应用而生',
        link: 'https://www.eggjs.org/zh-CN',
      },
      {
        icon: 'https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg',
        title: 'Nest.js 中文文档',
        desc: '用于构建高效且可伸缩的服务端应用程序的渐进式 Node.js 框架',
        link: 'https://docs.nestjs.cn',
      },
    ],
  },
  {
    title: '可视化',
    items: [
      {
        icon: 'https://echarts.apache.org/zh/images/favicon.png',
        title: 'ECharts',
        desc: '一个基于 JavaScript 的开源可视化图表库',
        link: 'https://echarts.apache.org/zh/index.html',
      },
      {
        icon: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*7svFR6wkPMoAAAAAAAAAAAAADmJ7AQ/original',
        title: 'AntV',
        desc: '蚂蚁集团全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、无限可能的数据可视化最佳实践。',
        link: 'https://antv.vision/zh/',
      },
      {
        icon: 'https://d3js.org/logo.png',
        title: 'D3.js',
        desc: '一个遵循 Web 标准用于可视化数据的 JavaScript 库',
        link: 'https://d3js.org',
      },
      {
        icon: 'https://www.chartjs.org/favicon.ico',
        title: 'Chart.js',
        desc: '一个简单而灵活的 JavaScript 图表库',
        link: 'https://www.chartjs.org',
      },
      {
        icon: 'https://threejs.org/files/favicon.ico',
        // icon: 'https://threejs.org/files/favicon_white.ico',
        title: 'Three.js',
        desc: 'JavaScript 3d 库',
        link: 'https://threejs.org',
      },
    ],
  },
  {
    title: 'React 生态',
    items: [
      {
        icon: 'https://zh-hans.reactjs.org/favicon.ico',
        title: 'React',
        desc: '用于构建用户界面的 JavaScript 库',
        link: 'https://zh-hans.reactjs.org',
      },
      {
        icon: 'https://reactrouter.com/favicon-light.png',
        title: 'React Router',
        desc: 'React 的声明式路由',
        link: 'https://reactrouter.com',
      },
      {
        icon: 'https://nextjs.org/static/favicon/safari-pinned-tab.svg',
        title: 'Next.js',
        desc: '一个用于 Web 的 React 框架',
        link: 'https://nextjs.org',
      },
      {
        icon: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
        title: 'UmiJS',
        desc: '插件化的企业级前端应用框架',
        link: 'https://umijs.org',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png',
        title: 'Ant Design',
        desc: '一套企业级 UI 设计语言和 React 组件库',
        link: 'https://ant.design',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
        title: 'Ant Design Mobile',
        desc: '构建移动 WEB 应用程序的 React 组件库',
        link: 'https://mobile.ant.design',
      },
      {
        icon: 'https://docs.pmnd.rs/apple-touch-icon.png',
        title: 'Zustand',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
      },
      {
        icon: 'https://valtio.pmnd.rs/favicon.ico',
        title: 'Valtio',
        desc: 'makes proxy-state simple for React and Vanilla',
        link: 'https://valtio.pmnd.rs',
      },
      {
        icon: 'https://jotai.org/favicon.svg',
        title: 'Jotai',
        desc: 'primitive and flexible state management for React',
        link: 'https://jotai.org',
      },
      {
        icon: 'https://cn.redux.js.org/img/redux.svg',
        title: 'Redux',
        desc: 'JavaScript 应用的状态容器，提供可预测的状态管理',
        link: 'https://cn.redux.js.org',
      },
      {
        icon: 'https://zh.mobx.js.org/assets/mobx.png',
        title: 'MobX',
        desc: '一个小型、快速、可扩展的 React 状态管理解决方案',
        link: 'https://zh.mobx.js.org',
      },
      {
        icon: 'https://ahooks.js.org/simple-logo.svg',
        title: 'ahooks',
        desc: '一套高质量可靠的 React Hooks 库',
        link: 'https://ahooks.js.org/zh-CN',
      },
    ],
  },
  {
    title: '小程序相关',
    items: [
      {
        icon: 'https://res.wx.qq.com/a/wx_fed/assets/res/OTE0YTAw.png',
        title: '微信小程序文档',
        desc: '微信小程序官方开发者文档',
        link: 'https://developers.weixin.qq.com/miniprogram/dev/framework/',
      },
      {
        icon: '/icons/taro.svg',
        title: 'Taro',
        desc: '多端统一开发解决方案',
        link: 'https://taro.jd.com',
      },
      {
        icon: 'https://web-assets.dcloud.net.cn/unidoc/zh/icon.png',
        title: 'uni-app',
        desc: '一个使用 Vue.js 开发所有前端应用的框架',
        link: 'https://uniapp.dcloud.net.cn',
      },
      {
        icon: 'https://mpxjs.cn/favicon.ico',
        title: 'Mpx',
        desc: '增强型跨端小程序框架',
        link: 'https://mpxjs.cn',
      },
    ],
  },
  {
    title: 'Flutter',
    items: [
      {
        icon: 'https://gallery.flutter.dev/favicon.ico',
        title: 'Gallery',
        desc: '展示Flutter的各种组件和设计',
        link: 'https://gallery.flutter.dev/#/',
      },
      {
        icon: 'https://book.flutterchina.club/assets/img/logo.png',
        title: '《Flutter实战·第二版》',
        desc: 'Flutter实战的在线书籍',
        link: 'https://book.flutterchina.club/chapter1/mobile_development_intro.html',
      },
      {
        icon: 'https://raw.githubusercontent.com/rydmike/flex_color_scheme_docs/master/docs/images/favicon.png',
        title: 'FlexColorScheme ',
        desc: 'FlexColorScheme ',
        link: 'https://docs.flexcolorscheme.com/',
      },
      {
        icon: 'https://material-foundation.github.io/material-theme-builder/icons/Icon-192.png',
        title: 'Material Theme Builder',
        desc: '主题色定制',
        link: 'https://material-foundation.github.io/material-theme-builder/',
      },
      {
        icon: 'https://m3.material.io/static/assets/m3-favicon.ico',
        title: 'Material Design',
        desc: 'Material Design',
        link: 'https://m3.material.io/',
      },
    ],
  },
  {
    title: '其他',
    items: [
      {
        icon: 'https://code.fun/favicon.ico',
        title: 'CodeFun',
        desc: 'UI 设计稿智能生成前端源代码',
        link: 'https://code.fun/',
      },
      {
        icon: 'https://www.youtube.com/favicon.ico',
        title: 'Programming & Web Development Crash Courses - Traversy Media',
        desc: 'Traversy Media的编程和Web开发速成课程',
        link: 'https://www.youtube.com/playlist?list=PLillGF-RfqbYeckUaD1z6nviTp31GLTH8',
      },
      {
        icon: 'https://rxresu.me/icon/dark.svg',
        title: 'Rx Resume',
        desc: '创建个人简历',
        link: 'https://rxresu.me/',
      },
      {
        title: 'Resume Genius',
        desc: '创建个人简历',
        link: 'https://resumegenius.co/resume-builder/app/how-to-start',
      },
      {
        icon: 'https://ph-static.imgix.net/ph-favicon-coral.ico',
        title: 'ProductHunt',
        desc: '一个产品曝光社区，有很多新的产品和创意产品',
        link: 'https://www.producthunt.com/',
      },
    ],
  },
  {
    title: '编译&构建&打包',
    items: [
      {
        icon: 'https://www.webpackjs.com/icon_180x180.png',
        title: 'Webpack 中文网',
        desc: '一个用于现代 JavaScript 应用程序的静态模块打包工具',
        link: 'https://www.webpackjs.com',
      },
      {
        icon: 'https://cn.vitejs.dev/logo.svg',
        title: 'Vite 中文文档',
        desc: '下一代前端工具链',
        link: 'https://cn.vitejs.dev',
      },
      {
        icon: 'https://www.rollupjs.com/img/favicon.png',
        title: 'Rollup',
        desc: 'Rollup 是一个 JavaScript 模块打包器',
        link: 'https://www.rollupjs.com',
      },
      {
        icon: 'https://turbo.build/images/favicon-dark/apple-touch-icon.png',
        title: 'Turbo',
        desc: 'Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust',
        link: 'https://turbo.build',
      },
      {
        icon: 'https://www.babeljs.cn/img/favicon.png',
        title: 'Babel',
        desc: 'Babel 是一个 JavaScript 编译器',
        link: 'https://www.babeljs.cn',
      },
      {
        icon: 'https://esbuild.github.io/favicon.svg',
        title: 'esbuild',
        desc: 'An extremely fast bundler for the web',
        link: 'https://esbuild.github.io',
      },
      {
        icon: 'https://swc.rs/favicon/apple-touch-icon.png',
        title: 'SWC',
        desc: 'Rust-based platform for the Web',
        link: 'https://swc.rs',
      },
    ],
  },
  {
    title: '站点生成器',
    items: [
      {
        icon: 'https://astro.build/favicon.svg',
        title: 'Astro',
        desc: '一个现代化的轻量级静态站点生成器',
        link: 'https://astro.build',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VitePress',
        desc: '由 Vite 和 Vue 驱动的静态网站生成器',
        link: 'https://vitepress.dev',
      },
      {
        icon: 'https://cn.vuejs.org/logo.svg',
        title: 'VuePress',
        desc: 'Vue 驱动的静态网站生成器',
        link: 'https://vuepress.vuejs.org/zh',
      },
      {
        icon: 'https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png',
        title: 'dumi',
        desc: '基于 Umi 为组件研发而生的静态站点框架',
        link: 'https://d.umijs.org',
      },
      {
        icon: 'https://docusaurus.io/zh-CN/img/docusaurus.ico',
        title: 'Docusaurus',
        desc: '基于 React 的静态网站生成器',
        link: 'https://docusaurus.io/zh-CN',
      },
      {
        icon: 'https://mdit-plugins.github.io/logo.svg',
        title: 'Markdown It',
        desc: 'Markdown It',
        link: 'https://mdit-plugins.github.io/zh/demo.html',
      },
      {
        title: 'VitePress Vue预览插件',
        desc: 'Vitepress 插件',
        link: 'https://github.com/xinlei3166/vitepress-theme-demoblock',
      },
    ],
  },
  {
    title: '社区',
    items: [
      {
        title: 'Github',
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
        },
        desc: '一个面向开源及私有软件项目的托管平台',
        link: 'https://github.com',
      },
      {
        icon: 'https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon.png?v=c78bd457575a',
        title: 'Stack Overflow',
        desc: '全球最大的技术问答网站',
        link: 'https://stackoverflow.com',
      },
      {
        title: '稀土掘金',
        icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web//static/favicons/apple-touch-icon.png',
        desc: '面向全球中文开发者的技术内容分享与交流平台',
        link: 'https://juejin.cn',
      },
      {
        title: 'V2EX',
        icon: 'https://www.v2ex.com/static/icon-192.png',
        desc: '一个关于分享和探索的地方',
        link: 'https://www.v2ex.com',
      },
      {
        title: 'SegmentFault 思否',
        icon: 'https://static.segmentfault.com/main_site_next/0dc4bace/touch-icon.png',
        desc: '技术问答开发者社区',
        link: 'https://segmentfault.com',
      },
      {
        title: '博客园',
        // icon: 'https://common.cnblogs.com/favicon.ico',
        icon: '/icons/cnblogs.svg',
        desc: '博客园是一个面向开发者的知识分享社区',
        link: 'https://www.cnblogs.com',
      },
      {
        title: '知乎',
        icon: 'https://static.zhihu.com/heifetz/assets/apple-touch-icon-60.362a8eac.png',
        desc: '中文互联网高质量的问答社区和创作者聚集的原创内容平台',
        link: 'https://juejin.cn',
      },
    ],
  },
  {
    title: '摸鱼专用',
    items: [
      {
        icon: 'https://momoyu.cc/icon-192.png',
        title: '摸摸鱼热榜',
        // desc: '聚合每日热门、搞笑、有趣、适合摸鱼的资讯',
        link: 'https://momoyu.cc',
      },
      {
        icon: 'https://v.qq.com/favicon.ico',
        title: '腾讯视频',
        // desc: '中国领先的在线视频媒体平台，海量高清视频在线观看',
        link: 'https://v.qq.com',
      },
      {
        icon: 'https://static.hdslb.com/mobile/img/512.png',
        title: '哔哩哔哩',
        // desc: '',
        link: 'https://www.bilibili.com',
      },
      {
        icon: 'https://www.youtube.com/s/desktop/014dbbed/img/favicon_48x48.png',
        title: 'YouTube',
        // desc: '',
        link: 'https://www.youtube.com',
      },
      {
        icon: '/icons/twitter.svg',
        title: 'Twitter',
        // desc: '',
        link: 'https://twitter.com',
      },
      {
        icon: '/icons/pixiv.png',
        title: 'Pixiv',
        // desc: '',
        link: 'https://www.pixiv.net',
      },
    ],
  },
]
