import type { DefaultTheme } from 'vitepress'

export const sidebar: DefaultTheme.Config['sidebar'] = {
  '/uniapp/': [
    {
      text: 'App专题',
      items: [
        {
          text: '项目起步',
          collapsed: true,
          items: [
            { text: '第一集 创建APP项目', link: '/uniapp/app/start/create-app-project' },
            { text: '第二集 CLI项目配置', link: '/uniapp/app/start/project-init' },
            { text: '第三集 组件与组件库', link: '/uniapp/app/start/component-selected' },
          ]
        },
        {
          text: '开始开发',
          collapsed: true,
          items: [
            { text: '第四集 新建页面', link: '/uniapp/app/develope/create-new-page' },
            { text: '第五集 设计稿还原', link: '/uniapp/app/develope/restorate-design-draft' },
            { text: '第六集 接口请求', link: '/uniapp/app/develope/request' },
            { text: '第七集 页面通信', link: '/uniapp/app/develope/router' },
            { text: '第八集 数据缓存', link: '/uniapp/app/develope/storage' },
            { text: '第九集 文件和媒体', link: '/uniapp/app/develope/file-and-media' },
            { text: '第十集 界面和元素', link: '/uniapp/app/develope/views' },
            { text: '第十一集 nvue页面开发', link: '/uniapp/app/develope/nvue' },
          ]
        },
        {
          text: '常用业务功能',
          collapsed: true,
          items: [
            { text: '第十二集 manifest文件配置', link: '/uniapp/app/business/manifest' },
            { text: '第十三集 登录', link: '/uniapp/app/business/login' },
            { text: '第十四集 支付', link: '/uniapp/app/business/payment' },
            { text: '第十五集 分享', link: '/uniapp/app/business/share' },
            { text: '第十六集 获取系统权限', link: '/uniapp/app/business/permission' },
            { text: '第十七集 位置定位', link: '/uniapp/app/business/position' },
            { text: '第十八集 使用render.js', link: '/uniapp/app/business/render.js' },
            { text: '第十九集 uni-app热更新', link: '/uniapp/app/business/hotpatch' },
            { text: '第二十集 Android原生隐私政策弹窗', link: '/uniapp/app/business/androidPrivacy' },
          ]
        },
        {
          text: 'app打包与发布',
          collapsed: true,
          items: [
            { text: '第二十一集 App云端打包', link: '/uniapp/app/package/cloud' },
            { text: '第二十二集 Android本地离线打包', link: '/uniapp/app/package/android-local' },
          ]
        },
        {
          text: 'uni-app插件开发',
          collapsed: true,
          items: [
            { text: '第二十三集 安卓原生插件开发', link: '/uniapp/app/plugin/android-native' },
            { text: '第二十四集 ios原生插件开发', link: '/uniapp/app/plugin/ios-native' },
            { text: '第二十五集 uts插件开发', link: '/uniapp/app/plugin/uts' },
          ]
        },
      ]
    },
    {
      text: 'uni-app常见问题',
      link: '/uniapp/app/common-issues',
    }
  ],
  '/css/': [
    {
      text: 'grid布局',
      link: '/css/grid',
    },
    {
      text: '《CSS揭秘》',
      link: '/css/css-secret/index',
      items: [
        {
          text: 'CSS编码技巧',
          link: '/css/css-secret/css-tips',
        },
        {
          text: '背景和边框',
          collapsed: true,
          items: [
            { text: '半透明边框', link: '/css/css-secret/background-and-border/translucent-border' },
            { text: '多重边框', link: '/css/css-secret/background-and-border/mult-border' },
            { text: '灵活的背景定位', link: '/css/css-secret/background-and-border/background-position' },
            { text: '边框内圆角', link: '/css/css-secret/background-and-border/border-radius-inset' },
            { text: '条纹背景', link: '/css/css-secret/background-and-border/striped-background' },
            { text: '背景图案', link: '/css/css-secret/background-and-border/background-image' },
            { text: '图像边框', link: '/css/css-secret/background-and-border/border-image' },
          ]
        },
        {
          text: '行状',
          collapsed: true,
          items: [
            { text: '自适应椭圆', link: '/css/css-secret/shape/ellipse' },
            { text: '三角形', link: '/css/css-secret/shape/triangle' },
            { text: '平行四边形', link: '/css/css-secret/shape/parallelogram' },
            { text: '菱形', link: '/css/css-secret/shape/diamond' },
            { text: '切角效果', link: '/css/css-secret/shape/bevel' },
            { text: '梯形标签页', link: '/css/css-secret/shape/trapezoid' },
            { text: '饼图', link: '/css/css-secret/shape/pie' },
          ]
        },
        {
          text: '视觉效果',
          collapsed: true,
          items: [
            { text: '单侧投影', link: '/css/css-secret/vision/single-side-shadow' },
            { text: '不规则投影', link: '/css/css-secret/vision/irregular-shadow' },
            { text: '染色效果', link: '/css/css-secret/vision/tint' },
            { text: '毛玻璃效果', link: '/css/css-secret/vision/frosted-glass' },
            { text: '折角效果', link: '/css/css-secret/vision/folded-corner' },
          ]
        },
        {
          text: '字体排印',
          collapsed: true,
          items: [
            { text: '连字符断行', link: '/css/css-secret/font/hyphenation' },
            { text: '插入换行', link: '/css/css-secret/font/insert-break' },
            { text: '文本行的斑马条纹', link: '/css/css-secret/font/stripes' },
            { text: '调整tab的宽度', link: '/css/css-secret/font/tab-width' },
            { text: '连字', link: '/css/css-secret/font/ligatures' },
            { text: '华丽的 & 符号', link: '/css/css-secret/font/ampersands' },
            { text: '自定义下划线', link: '/css/css-secret/font/custom-underlines' },
            { text: '文字效果', link: '/css/css-secret/font/text-effects' },
            { text: '环形文字', link: '/css/css-secret/font/circular-text' },
          ]
        },
        {
          text: '用户体验',
          collapsed: true,
          items: [
            { text: '自定义复选框', link: '/css/css-secret/user-experience/custom-check' },
            { text: '遮罩层', link: '/css/css-secret/user-experience/mask' },
            { text: '滚动提示', link: '/css/css-secret/user-experience/scroll-tips' },
            { text: '自适应内部元素', link: '/css/css-secret/user-experience/adapt-inner-element' },
          ]
        },
        {
          text: '过渡与动画',
          collapsed: true,
          items: [
            { text: '缓动效果', link: '/css/css-secret/transition-and-animation/easing' },
            { text: '逐帧效果', link: '/css/css-secret/transition-and-animation/frame-by-frame' },
            { text: '闪烁效果', link: '/css/css-secret/transition-and-animation/blink' },
            { text: '打字效果', link: '/css/css-secret/transition-and-animation/typing' },
            { text: '弹性过渡', link: '/css/css-secret/transition-and-animation/elastic' },
            { text: '沿环形路径平移的动画', link: '/css/css-secret/transition-and-animation/circular-translation' },
          ]
        }
      ],
    },
  ],
  '/flutter/': [
    {
      text: 'App专题',
      items: [
        {
          text: '快速开始',
          collapsed: true,
          items: [
            { text: '第一集 windows环境安装', link: '/flutter/app/start/index' },
            { text: '第二集 app启动图和图标配置', link: '/flutter/app/start/splash-and-appIcon' },
          ]
        },
      ],
    },
    {
      text: '常见问题',
      link: '/flutter/app/common-issues',
    }
  ],
  '/todo/': [
    {
      text: '2024',
      link: '/todo/2024/'
    }
  ],
  '/other/git/': [
    {
      text: 'git常用命令',
      link: '/other/git/command',
    },
    {
      text: '修改GitHub的个人主页',
      link: '/other/git/profile',
    }
  ],
  '/other/cli/': [
    {
      text: 'git命令别名',
      link: '/other/cli/alias',
    }
  ],
  '/other/scrcpy/': [
    {
      text: '快速开始',
      link: '/other/scrcpy/quick-start',
    },
    {
      text: '常用命令',
      link: '/other/scrcpy/command',
    },
    {
      text: '常见问题',
      link: '/other/scrcpy/issues',
    }
  ],
  '/other/vscode/': [
    {
      text: 'vscode插件开发-chatgpt插件',
      link: '/other/vscode/develope/chatgpt',
    },
  ],
  '/other/vitepress/': [
    {
      text: 'VitePress集成  Giscus 评论',
      link: '/other/vitepress/add-comments',
    },
  ],
  '/other/linux/': [
    {
      text: '基础知识',
      link: '/other/linux/start',
    },
    {
      text: '常用命令',
      link: '/other/linux/commond',
    },
    {
      text: '安装mysql',
      link: '/other/linux/安装mysql',
    },
    {
      text: '安装nginx',
      link: '/other/linux/安装nginx',
    },
    {
      text: 'centos安装docker',
      link: '/other/linux/centos安装docker',
    },
    {
      text: 'docker安装jenkins',
      link: '/other/linux/docker安装jenkins',
    },
    {
      text: '安装nginx proxy manager',
      link: '/other/linux/安装nginx-proxy-manager',
    },
  ],
  // '/sentry/': [
  //   {
  //     text: 'sentry使用',
  //     link: '/sentry/index',
  //   },
  //   {
  //     text: '参考文章',
  //     link: '/sentry/links',
  //   },
  // ],
  '/tools/': [
    {
      text: '实用软件',
      link: '/tools/soft',
    },
    {
      text: 'Chrome插件',
      link: '/tools/chrome/',
    },
    {
      text: 'Vscode插件',
      link: '/tools/other/vscode/',
    },
    {
      text: 'Typora集成PicGo图床工具',
      link: '/tools/typora/',
    }
  ],
}
