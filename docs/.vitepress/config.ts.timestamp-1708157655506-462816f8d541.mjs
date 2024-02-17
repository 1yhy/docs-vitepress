// docs/.vitepress/config.ts
import { basename } from "node:path";
import { defineConfig } from "file:///D:/project/docs-vitepress/node_modules/.pnpm/vitepress@1.0.0-rc.20_@algolia+client-search@4.22.1_@types+node@18.19.14_postcss@8.4.33_sass@_z57iorjop4zece23d723wv3nie/node_modules/vitepress/dist/node/index.js";
import MarkdownPreview from "file:///D:/project/docs-vitepress/node_modules/.pnpm/vite-plugin-markdown-preview@1.1.1/node_modules/vite-plugin-markdown-preview/dist/index.js";

// docs/.vitepress/configs/head.ts
var head = [
  ["meta", { name: "theme-color", content: "#3eaf7c" }],
  ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
  ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
  ["link", { rel: "apple-touch-icon", href: "/favicon.ico" }],
  ["link", { rel: "mask-icon", href: "/favicon.ico", color: "#3eaf7c" }],
  ["meta", { name: "msapplication-TileImage", content: "/favicon.ico" }],
  ["meta", { name: "msapplication-TileColor", content: "#000000" }]
];

// docs/.vitepress/configs/nav.ts
var nav = [
  { text: "Home", link: "/" },
  { text: "\u5BFC\u822A\u9875", link: "/nav/" },
  {
    text: "\u524D\u7AEF",
    items: [
      { text: "Uniapp", link: "/uniapp/app/start/create-app-project" },
      { text: "Vue", link: "/vue/" },
      { text: "CSS", link: "/css/grid" },
      { text: "Flutter", link: "/flutter/app/start/splash-and-appIcon" }
      // { text: 'sentry', link: '/sentry/index'},
    ]
  },
  {
    text: "\u540E\u7AEF",
    items: [
      { text: "Java", link: "/java/" }
    ]
  },
  {
    text: "\u63D0\u6548\u5DE5\u5177",
    items: [
      { text: "Typora", link: "/tools/typora/" },
      { text: "\u6D4F\u89C8\u5668\u63D2\u4EF6", link: "/tools/chrome/" }
    ]
  },
  {
    text: "\u5176\u4ED6",
    items: [
      { text: "Git", link: "/git/command" },
      { text: "Linux", link: "/linux/start" },
      { text: "Vscode", link: "/vscode/index" },
      { text: "scrcpy", link: "/scrcpy/quick-start" }
    ]
  }
];

// docs/.vitepress/configs/sidebar.ts
var sidebar = {
  "/uniapp/": [
    {
      text: "App\u4E13\u9898",
      items: [
        {
          text: "\u9879\u76EE\u8D77\u6B65",
          collapsed: true,
          items: [
            { text: "\u7B2C\u4E00\u96C6 \u521B\u5EFAAPP\u9879\u76EE", link: "/uniapp/app/start/create-app-project" },
            { text: "\u7B2C\u4E8C\u96C6 CLI\u9879\u76EE\u914D\u7F6E", link: "/uniapp/app/start/project-init" },
            { text: "\u7B2C\u4E09\u96C6 \u7EC4\u4EF6\u4E0E\u7EC4\u4EF6\u5E93", link: "/uniapp/app/start/component-selected" }
          ]
        },
        {
          text: "\u5F00\u59CB\u5F00\u53D1",
          collapsed: true,
          items: [
            { text: "\u7B2C\u56DB\u96C6 \u65B0\u5EFA\u9875\u9762", link: "/uniapp/app/develope/create-new-page" },
            { text: "\u7B2C\u4E94\u96C6 \u8BBE\u8BA1\u7A3F\u8FD8\u539F", link: "/uniapp/app/develope/restorate-design-draft" },
            { text: "\u7B2C\u516D\u96C6 \u63A5\u53E3\u8BF7\u6C42", link: "/uniapp/app/develope/request" },
            { text: "\u7B2C\u4E03\u96C6 \u9875\u9762\u901A\u4FE1", link: "/uniapp/app/develope/router" },
            { text: "\u7B2C\u516B\u96C6 \u6570\u636E\u7F13\u5B58", link: "/uniapp/app/develope/storage" },
            { text: "\u7B2C\u4E5D\u96C6 \u6587\u4EF6\u548C\u5A92\u4F53", link: "/uniapp/app/develope/file-and-media" },
            { text: "\u7B2C\u5341\u96C6 \u754C\u9762\u548C\u5143\u7D20", link: "/uniapp/app/develope/views" },
            { text: "\u7B2C\u5341\u4E00\u96C6 nvue\u9875\u9762\u5F00\u53D1", link: "/uniapp/app/develope/nvue" }
          ]
        },
        {
          text: "\u5E38\u7528\u4E1A\u52A1\u529F\u80FD",
          collapsed: true,
          items: [
            { text: "\u7B2C\u5341\u4E8C\u96C6 manifest\u6587\u4EF6\u914D\u7F6E", link: "/uniapp/app/business/manifest" },
            { text: "\u7B2C\u5341\u4E09\u96C6 \u767B\u5F55", link: "/uniapp/app/business/login" },
            { text: "\u7B2C\u5341\u56DB\u96C6 \u652F\u4ED8", link: "/uniapp/app/business/payment" },
            { text: "\u7B2C\u5341\u4E94\u96C6 \u5206\u4EAB", link: "/uniapp/app/business/share" },
            { text: "\u7B2C\u5341\u516D\u96C6 \u83B7\u53D6\u7CFB\u7EDF\u6743\u9650", link: "/uniapp/app/business/permission" },
            { text: "\u7B2C\u5341\u4E03\u96C6 \u4F4D\u7F6E\u5B9A\u4F4D", link: "/uniapp/app/business/position" },
            { text: "\u7B2C\u5341\u516B\u96C6 \u4F7F\u7528render.js", link: "/uniapp/app/business/render.js" },
            { text: "\u7B2C\u5341\u4E5D\u96C6 uni-app\u70ED\u66F4\u65B0", link: "/uniapp/app/business/hotpatch" },
            { text: "\u7B2C\u4E8C\u5341\u96C6 Android\u539F\u751F\u9690\u79C1\u653F\u7B56\u5F39\u7A97", link: "/uniapp/app/business/androidPrivacy" }
          ]
        },
        {
          text: "app\u6253\u5305\u4E0E\u53D1\u5E03",
          collapsed: true,
          items: [
            { text: "\u7B2C\u4E8C\u5341\u4E00\u96C6 App\u4E91\u7AEF\u6253\u5305", link: "/uniapp/app/package/cloud" },
            { text: "\u7B2C\u4E8C\u5341\u4E8C\u96C6 Android\u672C\u5730\u79BB\u7EBF\u6253\u5305", link: "/uniapp/app/package/android-local" }
          ]
        },
        {
          text: "uni-app\u63D2\u4EF6\u5F00\u53D1",
          collapsed: true,
          items: [
            { text: "\u7B2C\u4E8C\u5341\u4E09\u96C6 \u5B89\u5353\u539F\u751F\u63D2\u4EF6\u5F00\u53D1", link: "/uniapp/app/plugin/android-native" },
            { text: "\u7B2C\u4E8C\u5341\u56DB\u96C6 ios\u539F\u751F\u63D2\u4EF6\u5F00\u53D1", link: "/uniapp/app/plugin/ios-native" },
            { text: "\u7B2C\u4E8C\u5341\u4E94\u96C6 uts\u63D2\u4EF6\u5F00\u53D1", link: "/uniapp/app/plugin/uts" }
          ]
        }
      ]
    },
    {
      text: "uni-app\u5E38\u89C1\u95EE\u9898",
      link: "/uniapp/app/common-issues"
    }
  ],
  "/css/": [
    {
      text: "grid\u5E03\u5C40",
      link: "/css/grid"
    },
    {
      text: "\u300ACSS\u63ED\u79D8\u300B",
      link: "/css/css-secret/index",
      items: [
        {
          text: "CSS\u7F16\u7801\u6280\u5DE7",
          link: "/css/css-secret/css-tips"
        },
        {
          text: "\u80CC\u666F\u548C\u8FB9\u6846",
          collapsed: true,
          items: [
            { text: "\u534A\u900F\u660E\u8FB9\u6846", link: "/css/css-secret/background-and-border/translucent-border" },
            { text: "\u591A\u91CD\u8FB9\u6846", link: "/css/css-secret/background-and-border/mult-border" },
            { text: "\u7075\u6D3B\u7684\u80CC\u666F\u5B9A\u4F4D", link: "/css/css-secret/background-and-border/background-position" },
            { text: "\u8FB9\u6846\u5185\u5706\u89D2", link: "/css/css-secret/background-and-border/border-radius-inset" },
            { text: "\u6761\u7EB9\u80CC\u666F", link: "/css/css-secret/background-and-border/striped-background" },
            { text: "\u80CC\u666F\u56FE\u6848", link: "/css/css-secret/background-and-border/background-image" },
            { text: "\u56FE\u50CF\u8FB9\u6846", link: "/css/css-secret/background-and-border/border-image" }
          ]
        },
        {
          text: "\u884C\u72B6",
          collapsed: true,
          items: [
            { text: "\u81EA\u9002\u5E94\u692D\u5706", link: "/css/css-secret/shape/ellipse" },
            { text: "\u4E09\u89D2\u5F62", link: "/css/css-secret/shape/triangle" },
            { text: "\u5E73\u884C\u56DB\u8FB9\u5F62", link: "/css/css-secret/shape/parallelogram" },
            { text: "\u83F1\u5F62", link: "/css/css-secret/shape/diamond" },
            { text: "\u5207\u89D2\u6548\u679C", link: "/css/css-secret/shape/bevel" },
            { text: "\u68AF\u5F62\u6807\u7B7E\u9875", link: "/css/css-secret/shape/trapezoid" },
            { text: "\u997C\u56FE", link: "/css/css-secret/shape/pie" }
          ]
        },
        {
          text: "\u89C6\u89C9\u6548\u679C",
          collapsed: true,
          items: [
            { text: "\u5355\u4FA7\u6295\u5F71", link: "/css/css-secret/vision/single-side-shadow" },
            { text: "\u4E0D\u89C4\u5219\u6295\u5F71", link: "/css/css-secret/vision/irregular-shadow" },
            { text: "\u67D3\u8272\u6548\u679C", link: "/css/css-secret/vision/tint" },
            { text: "\u6BDB\u73BB\u7483\u6548\u679C", link: "/css/css-secret/vision/frosted-glass" },
            { text: "\u6298\u89D2\u6548\u679C", link: "/css/css-secret/vision/folded-corner" }
          ]
        },
        {
          text: "\u5B57\u4F53\u6392\u5370",
          collapsed: true,
          items: [
            { text: "\u8FDE\u5B57\u7B26\u65AD\u884C", link: "/css/css-secret/font/hyphenation" },
            { text: "\u63D2\u5165\u6362\u884C", link: "/css/css-secret/font/insert-break" },
            { text: "\u6587\u672C\u884C\u7684\u6591\u9A6C\u6761\u7EB9", link: "/css/css-secret/font/stripes" },
            { text: "\u8C03\u6574tab\u7684\u5BBD\u5EA6", link: "/css/css-secret/font/tab-width" },
            { text: "\u8FDE\u5B57", link: "/css/css-secret/font/ligatures" },
            { text: "\u534E\u4E3D\u7684 & \u7B26\u53F7", link: "/css/css-secret/font/ampersands" },
            { text: "\u81EA\u5B9A\u4E49\u4E0B\u5212\u7EBF", link: "/css/css-secret/font/custom-underlines" },
            { text: "\u6587\u5B57\u6548\u679C", link: "/css/css-secret/font/text-effects" },
            { text: "\u73AF\u5F62\u6587\u5B57", link: "/css/css-secret/font/circular-text" }
          ]
        },
        {
          text: "\u7528\u6237\u4F53\u9A8C",
          collapsed: true,
          items: [
            { text: "\u81EA\u5B9A\u4E49\u590D\u9009\u6846", link: "/css/css-secret/user-experience/custom-check" },
            { text: "\u906E\u7F69\u5C42", link: "/css/css-secret/user-experience/mask" },
            { text: "\u6EDA\u52A8\u63D0\u793A", link: "/css/css-secret/user-experience/scroll-tips" },
            { text: "\u81EA\u9002\u5E94\u5185\u90E8\u5143\u7D20", link: "/css/css-secret/user-experience/adapt-inner-element" }
          ]
        },
        {
          text: "\u8FC7\u6E21\u4E0E\u52A8\u753B",
          collapsed: true,
          items: [
            { text: "\u7F13\u52A8\u6548\u679C", link: "/css/css-secret/transition-and-animation/easing" },
            { text: "\u9010\u5E27\u6548\u679C", link: "/css/css-secret/transition-and-animation/frame-by-frame" },
            { text: "\u95EA\u70C1\u6548\u679C", link: "/css/css-secret/transition-and-animation/blink" },
            { text: "\u6253\u5B57\u6548\u679C", link: "/css/css-secret/transition-and-animation/typing" },
            { text: "\u5F39\u6027\u8FC7\u6E21", link: "/css/css-secret/transition-and-animation/elastic" },
            { text: "\u6CBF\u73AF\u5F62\u8DEF\u5F84\u5E73\u79FB\u7684\u52A8\u753B", link: "/css/css-secret/transition-and-animation/circular-translation" }
          ]
        }
      ]
    }
  ],
  "/flutter/": [
    {
      text: "App\u4E13\u9898",
      items: [
        {
          text: "\u5FEB\u901F\u5F00\u59CB",
          collapsed: true,
          items: [
            { text: "\u7B2C\u4E00\u96C6 windows\u73AF\u5883\u5B89\u88C5", link: "/flutter/app/start/index" },
            { text: "\u7B2C\u4E8C\u96C6 app\u542F\u52A8\u56FE\u548C\u56FE\u6807\u914D\u7F6E", link: "/flutter/app/start/splash-and-appIcon" }
          ]
        }
      ]
    },
    {
      text: "\u5E38\u89C1\u95EE\u9898",
      link: "/flutter/app/common-issues"
    }
  ],
  "/git/": [
    {
      text: "git\u5E38\u7528\u547D\u4EE4",
      link: "/git/command"
    },
    {
      text: "git\u547D\u4EE4\u522B\u540D",
      link: "/git/alias"
    },
    {
      text: "\u4FEE\u6539GitHub\u7684\u4E2A\u4EBA\u4E3B\u9875",
      link: "/git/profile"
    },
    {
      text: "\u4FEE\u6539GitHub\u7684\u4E2A\u4EBA\u4E3B\u9875",
      link: "/git/profile"
    }
  ],
  "/scrcpy/": [
    {
      text: "\u5FEB\u901F\u5F00\u59CB",
      link: "/scrcpy/quick-start"
    },
    {
      text: "\u5E38\u7528\u547D\u4EE4",
      link: "/scrcpy/command"
    },
    {
      text: "\u5E38\u89C1\u95EE\u9898",
      link: "/scrcpy/issues"
    }
  ],
  "/vscode/": [
    {
      text: "vscode\u63D2\u4EF6",
      link: "/vscode/index"
    },
    {
      text: "vscode\u63D2\u4EF6\u5F00\u53D1-chatgpt\u63D2\u4EF6",
      link: "/vscode/develope/chatgpt"
    }
  ],
  "/linux/": [
    {
      text: "\u57FA\u7840\u77E5\u8BC6",
      link: "/linux/start"
    },
    {
      text: "\u5E38\u7528\u547D\u4EE4",
      link: "/linux/commond"
    },
    {
      text: "\u5B89\u88C5mysql",
      link: "/linux/\u5B89\u88C5mysql"
    },
    {
      text: "\u5B89\u88C5nginx",
      link: "/linux/\u5B89\u88C5nginx"
    },
    {
      text: "docker\u5B89\u88C5jenkins",
      link: "/linux/docker\u5B89\u88C5jenkins"
    }
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
  "/collect/": [
    {
      text: "\u8BBE\u8BA1",
      link: "/collect/design"
    },
    {
      text: "\u524D\u7AEF",
      link: "/collect/front-end"
    },
    {
      text: "\u540E\u7AEF",
      link: "/collect/back-end"
    },
    {
      text: "\u5DE5\u5177",
      link: "/collect/tools"
    },
    {
      text: "\u5176\u4ED6",
      link: "/collect/other"
    }
  ],
  "/tools/": [
    {
      text: "Typora\u96C6\u6210PicGo\u56FE\u5E8A\u5DE5\u5177",
      link: "/tools/typora"
    }
  ]
};

// docs/.vitepress/config.ts
var APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || "");
var config_default = defineConfig({
  outDir: "../dist",
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : "/",
  lang: "zh-CN",
  title: "\u524D\u7AEF\u63A2\u7D22",
  description: "\u524D\u7AEF\u6210\u957F\u4E4B\u8DEF\uFF0C\u5305\u542B\u524D\u7AEF\u5E38\u7528\u77E5\u8BC6\u3001\u6E90\u7801\u9605\u8BFB\u7B14\u8BB0\u3001\u5404\u79CD\u5947\u6DEB\u6280\u5DE7\u3001\u65E5\u5E38\u63D0\u6548\u5DE5\u5177\u7B49",
  head,
  lastUpdated: true,
  cleanUrls: true,
  /* markdown 配置 */
  markdown: {
    lineNumbers: true
  },
  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    logo: "/assets/books.gif",
    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: "deep",
      label: "\u672C\u9875\u76EE\u5F55"
    },
    socialLinks: [{ icon: "github", link: "https://github.com/1yhy" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright \xA9 2024-present Yang"
    },
    darkModeSwitchLabel: "\u5916\u89C2",
    returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
    lastUpdatedText: "\u4E0A\u6B21\u66F4\u65B0",
    docFooter: {
      prev: "\u4E0A\u4E00\u7BC7",
      next: "\u4E0B\u4E00\u7BC7"
    }
  },
  vite: {
    plugins: [MarkdownPreview()]
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlncy9oZWFkLnRzIiwgImRvY3MvLnZpdGVwcmVzcy9jb25maWdzL25hdi50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlncy9zaWRlYmFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxkb2NzLXZpdGVwcmVzc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcZG9jcy12aXRlcHJlc3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC9kb2NzLXZpdGVwcmVzcy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgYmFzZW5hbWUgfSBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcclxuaW1wb3J0IE1hcmtkb3duUHJldmlldyBmcm9tICd2aXRlLXBsdWdpbi1tYXJrZG93bi1wcmV2aWV3J1xyXG5cclxuaW1wb3J0IHsgaGVhZCwgbmF2LCBzaWRlYmFyIH0gZnJvbSAnLi9jb25maWdzJ1xyXG5cclxuY29uc3QgQVBQX0JBU0VfUEFUSCA9IGJhc2VuYW1lKHByb2Nlc3MuZW52LkdJVEhVQl9SRVBPU0lUT1JZIHx8ICcnKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBvdXREaXI6ICcuLi9kaXN0JyxcclxuICBiYXNlOiBBUFBfQkFTRV9QQVRIID8gYC8ke0FQUF9CQVNFX1BBVEh9L2AgOiAnLycsXHJcblxyXG4gIGxhbmc6ICd6aC1DTicsXHJcbiAgdGl0bGU6ICdcdTUyNERcdTdBRUZcdTYzQTJcdTdEMjInLFxyXG4gIGRlc2NyaXB0aW9uOiAnXHU1MjREXHU3QUVGXHU2MjEwXHU5NTdGXHU0RTRCXHU4REVGXHVGRjBDXHU1MzA1XHU1NDJCXHU1MjREXHU3QUVGXHU1RTM4XHU3NTI4XHU3N0U1XHU4QkM2XHUzMDAxXHU2RTkwXHU3ODAxXHU5NjA1XHU4QkZCXHU3QjE0XHU4QkIwXHUzMDAxXHU1NDA0XHU3OUNEXHU1OTQ3XHU2REVCXHU2MjgwXHU1REU3XHUzMDAxXHU2NUU1XHU1RTM4XHU2M0QwXHU2NTQ4XHU1REU1XHU1MTc3XHU3QjQ5JyxcclxuICBoZWFkLFxyXG5cclxuICBsYXN0VXBkYXRlZDogdHJ1ZSxcclxuICBjbGVhblVybHM6IHRydWUsXHJcblxyXG4gIC8qIG1hcmtkb3duIFx1OTE0RFx1N0Y2RSAqL1xyXG4gIG1hcmtkb3duOiB7XHJcbiAgICBsaW5lTnVtYmVyczogdHJ1ZSxcclxuICB9LFxyXG5cclxuICAvKiBcdTRFM0JcdTk4OThcdTkxNERcdTdGNkUgKi9cclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgaTE4blJvdXRpbmc6IGZhbHNlLFxyXG5cclxuICAgIGxvZ286ICcvYXNzZXRzL2Jvb2tzLmdpZicsXHJcblxyXG4gICAgbmF2LFxyXG4gICAgc2lkZWJhcixcclxuICAgIC8qIFx1NTNGM1x1NEZBN1x1NTkyN1x1N0VCMlx1OTE0RFx1N0Y2RSAqL1xyXG4gICAgb3V0bGluZToge1xyXG4gICAgICBsZXZlbDogJ2RlZXAnLFxyXG4gICAgICBsYWJlbDogJ1x1NjcyQ1x1OTg3NVx1NzZFRVx1NUY1NScsXHJcbiAgICB9LFxyXG5cclxuICAgIHNvY2lhbExpbmtzOiBbeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS8xeWh5JyB9XSxcclxuXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgbWVzc2FnZTogJ1JlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4nLFxyXG4gICAgICBjb3B5cmlnaHQ6ICdDb3B5cmlnaHQgXHUwMEE5IDIwMjQtcHJlc2VudCBZYW5nJyxcclxuICAgIH0sXHJcblxyXG4gICAgZGFya01vZGVTd2l0Y2hMYWJlbDogJ1x1NTkxNlx1ODlDMicsXHJcbiAgICByZXR1cm5Ub1RvcExhYmVsOiAnXHU4RkQ0XHU1NkRFXHU5ODc2XHU5MEU4JyxcclxuICAgIGxhc3RVcGRhdGVkVGV4dDogJ1x1NEUwQVx1NkIyMVx1NjZGNFx1NjVCMCcsXHJcblxyXG4gICAgZG9jRm9vdGVyOiB7XHJcbiAgICAgIHByZXY6ICdcdTRFMEFcdTRFMDBcdTdCQzcnLFxyXG4gICAgICBuZXh0OiAnXHU0RTBCXHU0RTAwXHU3QkM3JyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgdml0ZToge1xyXG4gICAgcGx1Z2luczogW01hcmtkb3duUHJldmlldygpXSxcclxuICB9LFxyXG59KVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcZG9jcy12aXRlcHJlc3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcZG9jcy12aXRlcHJlc3NcXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ3NcXFxcaGVhZC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC9kb2NzLXZpdGVwcmVzcy9kb2NzLy52aXRlcHJlc3MvY29uZmlncy9oZWFkLnRzXCI7aW1wb3J0IHR5cGUgeyBIZWFkQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGhlYWQ6IEhlYWRDb25maWdbXSA9IFtcclxuICBbJ21ldGEnLCB7IG5hbWU6ICd0aGVtZS1jb2xvcicsIGNvbnRlbnQ6ICcjM2VhZjdjJyB9XSxcclxuICBbJ21ldGEnLCB7IG5hbWU6ICdhcHBsZS1tb2JpbGUtd2ViLWFwcC1jYXBhYmxlJywgY29udGVudDogJ3llcycgfV0sXHJcbiAgWydtZXRhJywgeyBuYW1lOiAnYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZScsIGNvbnRlbnQ6ICdibGFjaycgfV0sXHJcbiAgWydsaW5rJywgeyByZWw6ICdhcHBsZS10b3VjaC1pY29uJywgaHJlZjogJy9mYXZpY29uLmljbycgfV0sXHJcbiAgWydsaW5rJywgeyByZWw6ICdtYXNrLWljb24nLCBocmVmOiAnL2Zhdmljb24uaWNvJywgY29sb3I6ICcjM2VhZjdjJyB9XSxcclxuICBbJ21ldGEnLCB7IG5hbWU6ICdtc2FwcGxpY2F0aW9uLVRpbGVJbWFnZScsIGNvbnRlbnQ6ICcvZmF2aWNvbi5pY28nIH1dLFxyXG4gIFsnbWV0YScsIHsgbmFtZTogJ21zYXBwbGljYXRpb24tVGlsZUNvbG9yJywgY29udGVudDogJyMwMDAwMDAnIH1dLFxyXG5dXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxkb2NzLXZpdGVwcmVzc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdFxcXFxkb2NzLXZpdGVwcmVzc1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnc1xcXFxuYXYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3QvZG9jcy12aXRlcHJlc3MvZG9jcy8udml0ZXByZXNzL2NvbmZpZ3MvbmF2LnRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tICd2aXRlcHJlc3MnXG5cbmV4cG9ydCBjb25zdCBuYXY6IERlZmF1bHRUaGVtZS5Db25maWdbJ25hdiddID0gW1xuICB7IHRleHQ6ICdIb21lJywgbGluazogJy8nIH0sXG4gIHsgdGV4dDogJ1x1NUJGQ1x1ODIyQVx1OTg3NScsIGxpbms6ICcvbmF2LycgfSxcbiAge1xuICAgIHRleHQ6ICdcdTUyNERcdTdBRUYnLCBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnVW5pYXBwJywgbGluazogJy91bmlhcHAvYXBwL3N0YXJ0L2NyZWF0ZS1hcHAtcHJvamVjdCcgfSxcbiAgICAgIHsgdGV4dDogJ1Z1ZScsIGxpbms6ICcvdnVlLycgfSxcbiAgICAgIHsgdGV4dDogJ0NTUycsIGxpbms6ICcvY3NzL2dyaWQnIH0sXG4gICAgICB7IHRleHQ6ICdGbHV0dGVyJywgbGluazogJy9mbHV0dGVyL2FwcC9zdGFydC9zcGxhc2gtYW5kLWFwcEljb24nIH0sXG4gICAgICAvLyB7IHRleHQ6ICdzZW50cnknLCBsaW5rOiAnL3NlbnRyeS9pbmRleCd9LFxuICAgIF1cbiAgfSxcbiAge1xuICAgIHRleHQ6ICdcdTU0MEVcdTdBRUYnLCBpdGVtczogW1xuICAgICAgeyB0ZXh0OiAnSmF2YScsIGxpbms6ICcvamF2YS8nIH0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgdGV4dDogJ1x1NjNEMFx1NjU0OFx1NURFNVx1NTE3NycsIGl0ZW1zOiBbXG4gICAgICB7IHRleHQ6ICdUeXBvcmEnLCBsaW5rOiAnL3Rvb2xzL3R5cG9yYS8nIH0sXG4gICAgICB7IHRleHQ6ICdcdTZENEZcdTg5QzhcdTU2NjhcdTYzRDJcdTRFRjYnLCBsaW5rOiAnL3Rvb2xzL2Nocm9tZS8nIH0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgdGV4dDogJ1x1NTE3Nlx1NEVENicsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGV4dDogJ0dpdCcsIGxpbms6ICcvZ2l0L2NvbW1hbmQnIH0sXG4gICAgICB7IHRleHQ6ICdMaW51eCcsIGxpbms6ICcvbGludXgvc3RhcnQnIH0sXG4gICAgICB7IHRleHQ6ICdWc2NvZGUnLCBsaW5rOiAnL3ZzY29kZS9pbmRleCcgfSxcbiAgICAgIHsgdGV4dDogJ3NjcmNweScsIGxpbms6ICcvc2NyY3B5L3F1aWNrLXN0YXJ0JyB9LFxuICAgIF1cbiAgfVxuXVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXGRvY3Mtdml0ZXByZXNzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXGRvY3Mtdml0ZXByZXNzXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxjb25maWdzXFxcXHNpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3QvZG9jcy12aXRlcHJlc3MvZG9jcy8udml0ZXByZXNzL2NvbmZpZ3Mvc2lkZWJhci50c1wiO2ltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSAndml0ZXByZXNzJ1xuXG5leHBvcnQgY29uc3Qgc2lkZWJhcjogRGVmYXVsdFRoZW1lLkNvbmZpZ1snc2lkZWJhciddID0ge1xuICAnL3VuaWFwcC8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0FwcFx1NEUxM1x1OTg5OCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1OTg3OVx1NzZFRVx1OEQ3N1x1NkI2NScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTdCMkNcdTRFMDBcdTk2QzYgXHU1MjFCXHU1RUZBQVBQXHU5ODc5XHU3NkVFJywgbGluazogJy91bmlhcHAvYXBwL3N0YXJ0L2NyZWF0ZS1hcHAtcHJvamVjdCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1N0IyQ1x1NEU4Q1x1OTZDNiBDTElcdTk4NzlcdTc2RUVcdTkxNERcdTdGNkUnLCBsaW5rOiAnL3VuaWFwcC9hcHAvc3RhcnQvcHJvamVjdC1pbml0JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU3QjJDXHU0RTA5XHU5NkM2IFx1N0VDNFx1NEVGNlx1NEUwRVx1N0VDNFx1NEVGNlx1NUU5MycsIGxpbms6ICcvdW5pYXBwL2FwcC9zdGFydC9jb21wb25lbnQtc2VsZWN0ZWQnIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NUYwMFx1NTlDQlx1NUYwMFx1NTNEMScsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTdCMkNcdTU2REJcdTk2QzYgXHU2NUIwXHU1RUZBXHU5ODc1XHU5NzYyJywgbGluazogJy91bmlhcHAvYXBwL2RldmVsb3BlL2NyZWF0ZS1uZXctcGFnZScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1N0IyQ1x1NEU5NFx1OTZDNiBcdThCQkVcdThCQTFcdTdBM0ZcdThGRDhcdTUzOUYnLCBsaW5rOiAnL3VuaWFwcC9hcHAvZGV2ZWxvcGUvcmVzdG9yYXRlLWRlc2lnbi1kcmFmdCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1N0IyQ1x1NTE2RFx1OTZDNiBcdTYzQTVcdTUzRTNcdThCRjdcdTZDNDInLCBsaW5rOiAnL3VuaWFwcC9hcHAvZGV2ZWxvcGUvcmVxdWVzdCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1N0IyQ1x1NEUwM1x1OTZDNiBcdTk4NzVcdTk3NjJcdTkwMUFcdTRGRTEnLCBsaW5rOiAnL3VuaWFwcC9hcHAvZGV2ZWxvcGUvcm91dGVyJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU3QjJDXHU1MTZCXHU5NkM2IFx1NjU3MFx1NjM2RVx1N0YxM1x1NUI1OCcsIGxpbms6ICcvdW5pYXBwL2FwcC9kZXZlbG9wZS9zdG9yYWdlJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU3QjJDXHU0RTVEXHU5NkM2IFx1NjU4N1x1NEVGNlx1NTQ4Q1x1NUE5Mlx1NEY1MycsIGxpbms6ICcvdW5pYXBwL2FwcC9kZXZlbG9wZS9maWxlLWFuZC1tZWRpYScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1N0IyQ1x1NTM0MVx1OTZDNiBcdTc1NENcdTk3NjJcdTU0OENcdTUxNDNcdTdEMjAnLCBsaW5rOiAnL3VuaWFwcC9hcHAvZGV2ZWxvcGUvdmlld3MnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTdCMkNcdTUzNDFcdTRFMDBcdTk2QzYgbnZ1ZVx1OTg3NVx1OTc2Mlx1NUYwMFx1NTNEMScsIGxpbms6ICcvdW5pYXBwL2FwcC9kZXZlbG9wZS9udnVlJyB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTVFMzhcdTc1MjhcdTRFMUFcdTUyQTFcdTUyOUZcdTgwRkQnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnXHU3QjJDXHU1MzQxXHU0RThDXHU5NkM2IG1hbmlmZXN0XHU2NTg3XHU0RUY2XHU5MTREXHU3RjZFJywgbGluazogJy91bmlhcHAvYXBwL2J1c2luZXNzL21hbmlmZXN0JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU3QjJDXHU1MzQxXHU0RTA5XHU5NkM2IFx1NzY3Qlx1NUY1NScsIGxpbms6ICcvdW5pYXBwL2FwcC9idXNpbmVzcy9sb2dpbicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1N0IyQ1x1NTM0MVx1NTZEQlx1OTZDNiBcdTY1MkZcdTRFRDgnLCBsaW5rOiAnL3VuaWFwcC9hcHAvYnVzaW5lc3MvcGF5bWVudCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1N0IyQ1x1NTM0MVx1NEU5NFx1OTZDNiBcdTUyMDZcdTRFQUInLCBsaW5rOiAnL3VuaWFwcC9hcHAvYnVzaW5lc3Mvc2hhcmUnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTdCMkNcdTUzNDFcdTUxNkRcdTk2QzYgXHU4M0I3XHU1M0Q2XHU3Q0ZCXHU3RURGXHU2NzQzXHU5NjUwJywgbGluazogJy91bmlhcHAvYXBwL2J1c2luZXNzL3Blcm1pc3Npb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTdCMkNcdTUzNDFcdTRFMDNcdTk2QzYgXHU0RjREXHU3RjZFXHU1QjlBXHU0RjREJywgbGluazogJy91bmlhcHAvYXBwL2J1c2luZXNzL3Bvc2l0aW9uJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU3QjJDXHU1MzQxXHU1MTZCXHU5NkM2IFx1NEY3Rlx1NzUyOHJlbmRlci5qcycsIGxpbms6ICcvdW5pYXBwL2FwcC9idXNpbmVzcy9yZW5kZXIuanMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTdCMkNcdTUzNDFcdTRFNURcdTk2QzYgdW5pLWFwcFx1NzBFRFx1NjZGNFx1NjVCMCcsIGxpbms6ICcvdW5pYXBwL2FwcC9idXNpbmVzcy9ob3RwYXRjaCcgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1N0IyQ1x1NEU4Q1x1NTM0MVx1OTZDNiBBbmRyb2lkXHU1MzlGXHU3NTFGXHU5NjkwXHU3OUMxXHU2NTNGXHU3QjU2XHU1RjM5XHU3QTk3JywgbGluazogJy91bmlhcHAvYXBwL2J1c2luZXNzL2FuZHJvaWRQcml2YWN5JyB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdhcHBcdTYyNTNcdTUzMDVcdTRFMEVcdTUzRDFcdTVFMDMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnXHU3QjJDXHU0RThDXHU1MzQxXHU0RTAwXHU5NkM2IEFwcFx1NEU5MVx1N0FFRlx1NjI1M1x1NTMwNScsIGxpbms6ICcvdW5pYXBwL2FwcC9wYWNrYWdlL2Nsb3VkJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU3QjJDXHU0RThDXHU1MzQxXHU0RThDXHU5NkM2IEFuZHJvaWRcdTY3MkNcdTU3MzBcdTc5QkJcdTdFQkZcdTYyNTNcdTUzMDUnLCBsaW5rOiAnL3VuaWFwcC9hcHAvcGFja2FnZS9hbmRyb2lkLWxvY2FsJyB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICd1bmktYXBwXHU2M0QyXHU0RUY2XHU1RjAwXHU1M0QxJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1N0IyQ1x1NEU4Q1x1NTM0MVx1NEUwOVx1OTZDNiBcdTVCODlcdTUzNTNcdTUzOUZcdTc1MUZcdTYzRDJcdTRFRjZcdTVGMDBcdTUzRDEnLCBsaW5rOiAnL3VuaWFwcC9hcHAvcGx1Z2luL2FuZHJvaWQtbmF0aXZlJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU3QjJDXHU0RThDXHU1MzQxXHU1NkRCXHU5NkM2IGlvc1x1NTM5Rlx1NzUxRlx1NjNEMlx1NEVGNlx1NUYwMFx1NTNEMScsIGxpbms6ICcvdW5pYXBwL2FwcC9wbHVnaW4vaW9zLW5hdGl2ZScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1N0IyQ1x1NEU4Q1x1NTM0MVx1NEU5NFx1OTZDNiB1dHNcdTYzRDJcdTRFRjZcdTVGMDBcdTUzRDEnLCBsaW5rOiAnL3VuaWFwcC9hcHAvcGx1Z2luL3V0cycgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAndW5pLWFwcFx1NUUzOFx1ODlDMVx1OTVFRVx1OTg5OCcsXG4gICAgICBsaW5rOiAnL3VuaWFwcC9hcHAvY29tbW9uLWlzc3VlcycsXG4gICAgfVxuICBdLFxuICAnL2Nzcy8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ2dyaWRcdTVFMDNcdTVDNDAnLFxuICAgICAgbGluazogJy9jc3MvZ3JpZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHUzMDBBQ1NTXHU2M0VEXHU3OUQ4XHUzMDBCJyxcbiAgICAgIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvaW5kZXgnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdDU1NcdTdGMTZcdTc4MDFcdTYyODBcdTVERTcnLFxuICAgICAgICAgIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvY3NzLXRpcHMnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1ODBDQ1x1NjY2Rlx1NTQ4Q1x1OEZCOVx1Njg0NicsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTUzNEFcdTkwMEZcdTY2MEVcdThGQjlcdTY4NDYnLCBsaW5rOiAnL2Nzcy9jc3Mtc2VjcmV0L2JhY2tncm91bmQtYW5kLWJvcmRlci90cmFuc2x1Y2VudC1ib3JkZXInIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTU5MUFcdTkxQ0RcdThGQjlcdTY4NDYnLCBsaW5rOiAnL2Nzcy9jc3Mtc2VjcmV0L2JhY2tncm91bmQtYW5kLWJvcmRlci9tdWx0LWJvcmRlcicgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NzA3NVx1NkQzQlx1NzY4NFx1ODBDQ1x1NjY2Rlx1NUI5QVx1NEY0RCcsIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvYmFja2dyb3VuZC1hbmQtYm9yZGVyL2JhY2tncm91bmQtcG9zaXRpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdThGQjlcdTY4NDZcdTUxODVcdTU3MDZcdTg5RDInLCBsaW5rOiAnL2Nzcy9jc3Mtc2VjcmV0L2JhY2tncm91bmQtYW5kLWJvcmRlci9ib3JkZXItcmFkaXVzLWluc2V0JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU2NzYxXHU3RUI5XHU4MENDXHU2NjZGJywgbGluazogJy9jc3MvY3NzLXNlY3JldC9iYWNrZ3JvdW5kLWFuZC1ib3JkZXIvc3RyaXBlZC1iYWNrZ3JvdW5kJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU4MENDXHU2NjZGXHU1NkZFXHU2ODQ4JywgbGluazogJy9jc3MvY3NzLXNlY3JldC9iYWNrZ3JvdW5kLWFuZC1ib3JkZXIvYmFja2dyb3VuZC1pbWFnZScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NTZGRVx1NTBDRlx1OEZCOVx1Njg0NicsIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvYmFja2dyb3VuZC1hbmQtYm9yZGVyL2JvcmRlci1pbWFnZScgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU4ODRDXHU3MkI2JyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1ODFFQVx1OTAwMlx1NUU5NFx1NjkyRFx1NTcwNicsIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvc2hhcGUvZWxsaXBzZScgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NEUwOVx1ODlEMlx1NUY2MicsIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvc2hhcGUvdHJpYW5nbGUnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTVFNzNcdTg4NENcdTU2REJcdThGQjlcdTVGNjInLCBsaW5rOiAnL2Nzcy9jc3Mtc2VjcmV0L3NoYXBlL3BhcmFsbGVsb2dyYW0nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTgzRjFcdTVGNjInLCBsaW5rOiAnL2Nzcy9jc3Mtc2VjcmV0L3NoYXBlL2RpYW1vbmQnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTUyMDdcdTg5RDJcdTY1NDhcdTY3OUMnLCBsaW5rOiAnL2Nzcy9jc3Mtc2VjcmV0L3NoYXBlL2JldmVsJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU2OEFGXHU1RjYyXHU2ODA3XHU3QjdFXHU5ODc1JywgbGluazogJy9jc3MvY3NzLXNlY3JldC9zaGFwZS90cmFwZXpvaWQnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTk5N0NcdTU2RkUnLCBsaW5rOiAnL2Nzcy9jc3Mtc2VjcmV0L3NoYXBlL3BpZScgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU4OUM2XHU4OUM5XHU2NTQ4XHU2NzlDJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NTM1NVx1NEZBN1x1NjI5NVx1NUY3MScsIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvdmlzaW9uL3NpbmdsZS1zaWRlLXNoYWRvdycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NEUwRFx1ODlDNFx1NTIxOVx1NjI5NVx1NUY3MScsIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvdmlzaW9uL2lycmVndWxhci1zaGFkb3cnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTY3RDNcdTgyNzJcdTY1NDhcdTY3OUMnLCBsaW5rOiAnL2Nzcy9jc3Mtc2VjcmV0L3Zpc2lvbi90aW50JyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU2QkRCXHU3M0JCXHU3NDgzXHU2NTQ4XHU2NzlDJywgbGluazogJy9jc3MvY3NzLXNlY3JldC92aXNpb24vZnJvc3RlZC1nbGFzcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NjI5OFx1ODlEMlx1NjU0OFx1Njc5QycsIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvdmlzaW9uL2ZvbGRlZC1jb3JuZXInIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NUI1N1x1NEY1M1x1NjM5Mlx1NTM3MCcsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdcdThGREVcdTVCNTdcdTdCMjZcdTY1QURcdTg4NEMnLCBsaW5rOiAnL2Nzcy9jc3Mtc2VjcmV0L2ZvbnQvaHlwaGVuYXRpb24nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTYzRDJcdTUxNjVcdTYzNjJcdTg4NEMnLCBsaW5rOiAnL2Nzcy9jc3Mtc2VjcmV0L2ZvbnQvaW5zZXJ0LWJyZWFrJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU2NTg3XHU2NzJDXHU4ODRDXHU3Njg0XHU2NTkxXHU5QTZDXHU2NzYxXHU3RUI5JywgbGluazogJy9jc3MvY3NzLXNlY3JldC9mb250L3N0cmlwZXMnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdThDMDNcdTY1NzR0YWJcdTc2ODRcdTVCQkRcdTVFQTYnLCBsaW5rOiAnL2Nzcy9jc3Mtc2VjcmV0L2ZvbnQvdGFiLXdpZHRoJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU4RkRFXHU1QjU3JywgbGluazogJy9jc3MvY3NzLXNlY3JldC9mb250L2xpZ2F0dXJlcycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NTM0RVx1NEUzRFx1NzY4NCAmIFx1N0IyNlx1NTNGNycsIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvZm9udC9hbXBlcnNhbmRzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU4MUVBXHU1QjlBXHU0RTQ5XHU0RTBCXHU1MjEyXHU3RUJGJywgbGluazogJy9jc3MvY3NzLXNlY3JldC9mb250L2N1c3RvbS11bmRlcmxpbmVzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU2NTg3XHU1QjU3XHU2NTQ4XHU2NzlDJywgbGluazogJy9jc3MvY3NzLXNlY3JldC9mb250L3RleHQtZWZmZWN0cycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NzNBRlx1NUY2Mlx1NjU4N1x1NUI1NycsIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvZm9udC9jaXJjdWxhci10ZXh0JyB9LFxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRleHQ6ICdcdTc1MjhcdTYyMzdcdTRGNTNcdTlBOEMnLFxuICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcbiAgICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnXHU4MUVBXHU1QjlBXHU0RTQ5XHU1OTBEXHU5MDA5XHU2ODQ2JywgbGluazogJy9jc3MvY3NzLXNlY3JldC91c2VyLWV4cGVyaWVuY2UvY3VzdG9tLWNoZWNrJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU5MDZFXHU3RjY5XHU1QzQyJywgbGluazogJy9jc3MvY3NzLXNlY3JldC91c2VyLWV4cGVyaWVuY2UvbWFzaycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NkVEQVx1NTJBOFx1NjNEMFx1NzkzQScsIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvdXNlci1leHBlcmllbmNlL3Njcm9sbC10aXBzJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU4MUVBXHU5MDAyXHU1RTk0XHU1MTg1XHU5MEU4XHU1MTQzXHU3RDIwJywgbGluazogJy9jc3MvY3NzLXNlY3JldC91c2VyLWV4cGVyaWVuY2UvYWRhcHQtaW5uZXItZWxlbWVudCcgfSxcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0ZXh0OiAnXHU4RkM3XHU2RTIxXHU0RTBFXHU1MkE4XHU3NTNCJyxcbiAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXG4gICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1N0YxM1x1NTJBOFx1NjU0OFx1Njc5QycsIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvdHJhbnNpdGlvbi1hbmQtYW5pbWF0aW9uL2Vhc2luZycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1OTAxMFx1NUUyN1x1NjU0OFx1Njc5QycsIGxpbms6ICcvY3NzL2Nzcy1zZWNyZXQvdHJhbnNpdGlvbi1hbmQtYW5pbWF0aW9uL2ZyYW1lLWJ5LWZyYW1lJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU5NUVBXHU3MEMxXHU2NTQ4XHU2NzlDJywgbGluazogJy9jc3MvY3NzLXNlY3JldC90cmFuc2l0aW9uLWFuZC1hbmltYXRpb24vYmxpbmsnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTYyNTNcdTVCNTdcdTY1NDhcdTY3OUMnLCBsaW5rOiAnL2Nzcy9jc3Mtc2VjcmV0L3RyYW5zaXRpb24tYW5kLWFuaW1hdGlvbi90eXBpbmcnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTVGMzlcdTYwMjdcdThGQzdcdTZFMjEnLCBsaW5rOiAnL2Nzcy9jc3Mtc2VjcmV0L3RyYW5zaXRpb24tYW5kLWFuaW1hdGlvbi9lbGFzdGljJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU2Q0JGXHU3M0FGXHU1RjYyXHU4REVGXHU1Rjg0XHU1RTczXHU3OUZCXHU3Njg0XHU1MkE4XHU3NTNCJywgbGluazogJy9jc3MvY3NzLXNlY3JldC90cmFuc2l0aW9uLWFuZC1hbmltYXRpb24vY2lyY3VsYXItdHJhbnNsYXRpb24nIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG4gICcvZmx1dHRlci8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ0FwcFx1NEUxM1x1OTg5OCcsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgdGV4dDogJ1x1NUZFQlx1OTAxRlx1NUYwMFx1NTlDQicsXG4gICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTdCMkNcdTRFMDBcdTk2QzYgd2luZG93c1x1NzNBRlx1NTg4M1x1NUI4OVx1ODhDNScsIGxpbms6ICcvZmx1dHRlci9hcHAvc3RhcnQvaW5kZXgnIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdcdTdCMkNcdTRFOENcdTk2QzYgYXBwXHU1NDJGXHU1MkE4XHU1NkZFXHU1NDhDXHU1NkZFXHU2ODA3XHU5MTREXHU3RjZFJywgbGluazogJy9mbHV0dGVyL2FwcC9zdGFydC9zcGxhc2gtYW5kLWFwcEljb24nIH0sXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTVFMzhcdTg5QzFcdTk1RUVcdTk4OTgnLFxuICAgICAgbGluazogJy9mbHV0dGVyL2FwcC9jb21tb24taXNzdWVzJyxcbiAgICB9XG4gIF0sXG4gICcvZ2l0Lyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnZ2l0XHU1RTM4XHU3NTI4XHU1NDdEXHU0RUU0JyxcbiAgICAgIGxpbms6ICcvZ2l0L2NvbW1hbmQnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ2dpdFx1NTQ3RFx1NEVFNFx1NTIyQlx1NTQwRCcsXG4gICAgICBsaW5rOiAnL2dpdC9hbGlhcycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU0RkVFXHU2NTM5R2l0SHViXHU3Njg0XHU0RTJBXHU0RUJBXHU0RTNCXHU5ODc1JyxcbiAgICAgIGxpbms6ICcvZ2l0L3Byb2ZpbGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1NEZFRVx1NjUzOUdpdEh1Ylx1NzY4NFx1NEUyQVx1NEVCQVx1NEUzQlx1OTg3NScsXG4gICAgICBsaW5rOiAnL2dpdC9wcm9maWxlJyxcbiAgICB9LFxuICBdLFxuICAnL3NjcmNweS8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1x1NUZFQlx1OTAxRlx1NUYwMFx1NTlDQicsXG4gICAgICBsaW5rOiAnL3NjcmNweS9xdWljay1zdGFydCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1RTM4XHU3NTI4XHU1NDdEXHU0RUU0JyxcbiAgICAgIGxpbms6ICcvc2NyY3B5L2NvbW1hbmQnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ1x1NUUzOFx1ODlDMVx1OTVFRVx1OTg5OCcsXG4gICAgICBsaW5rOiAnL3NjcmNweS9pc3N1ZXMnLFxuICAgIH1cbiAgXSxcbiAgJy92c2NvZGUvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICd2c2NvZGVcdTYzRDJcdTRFRjYnLFxuICAgICAgbGluazogJy92c2NvZGUvaW5kZXgnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogJ3ZzY29kZVx1NjNEMlx1NEVGNlx1NUYwMFx1NTNEMS1jaGF0Z3B0XHU2M0QyXHU0RUY2JyxcbiAgICAgIGxpbms6ICcvdnNjb2RlL2RldmVsb3BlL2NoYXRncHQnLFxuICAgIH0sXG4gIF0sXG4gICcvbGludXgvJzogW1xuICAgIHtcbiAgICAgIHRleHQ6ICdcdTU3RkFcdTc4NDBcdTc3RTVcdThCQzYnLFxuICAgICAgbGluazogJy9saW51eC9zdGFydCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1RTM4XHU3NTI4XHU1NDdEXHU0RUU0JyxcbiAgICAgIGxpbms6ICcvbGludXgvY29tbW9uZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1Qjg5XHU4OEM1bXlzcWwnLFxuICAgICAgbGluazogJy9saW51eC9cdTVCODlcdTg4QzVteXNxbCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1Qjg5XHU4OEM1bmdpbngnLFxuICAgICAgbGluazogJy9saW51eC9cdTVCODlcdTg4QzVuZ2lueCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnZG9ja2VyXHU1Qjg5XHU4OEM1amVua2lucycsXG4gICAgICBsaW5rOiAnL2xpbnV4L2RvY2tlclx1NUI4OVx1ODhDNWplbmtpbnMnLFxuICAgIH0sXG4gIF0sXG4gIC8vICcvc2VudHJ5Lyc6IFtcbiAgLy8gICB7XG4gIC8vICAgICB0ZXh0OiAnc2VudHJ5XHU0RjdGXHU3NTI4JyxcbiAgLy8gICAgIGxpbms6ICcvc2VudHJ5L2luZGV4JyxcbiAgLy8gICB9LFxuICAvLyAgIHtcbiAgLy8gICAgIHRleHQ6ICdcdTUzQzJcdTgwMDNcdTY1ODdcdTdBRTAnLFxuICAvLyAgICAgbGluazogJy9zZW50cnkvbGlua3MnLFxuICAvLyAgIH0sXG4gIC8vIF0sXG4gICcvY29sbGVjdC8nOiBbXG4gICAge1xuICAgICAgdGV4dDogJ1x1OEJCRVx1OEJBMScsXG4gICAgICBsaW5rOiAnL2NvbGxlY3QvZGVzaWduJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6ICdcdTUyNERcdTdBRUYnLFxuICAgICAgbGluazogJy9jb2xsZWN0L2Zyb250LWVuZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1NDBFXHU3QUVGJyxcbiAgICAgIGxpbms6ICcvY29sbGVjdC9iYWNrLWVuZCcsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1REU1XHU1MTc3JyxcbiAgICAgIGxpbms6ICcvY29sbGVjdC90b29scycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiAnXHU1MTc2XHU0RUQ2JyxcbiAgICAgIGxpbms6ICcvY29sbGVjdC9vdGhlcicsXG4gICAgfVxuICBdLFxuICAnL3Rvb2xzLyc6IFtcbiAgICB7XG4gICAgICB0ZXh0OiAnVHlwb3JhXHU5NkM2XHU2MjEwUGljR29cdTU2RkVcdTVFOEFcdTVERTVcdTUxNzcnLFxuICAgICAgbGluazogJy90b29scy90eXBvcmEnLFxuICAgIH1cbiAgXSxcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNlMsU0FBUyxnQkFBZ0I7QUFDdFUsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxxQkFBcUI7OztBQ0FyQixJQUFNLE9BQXFCO0FBQUEsRUFDaEMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxlQUFlLFNBQVMsVUFBVSxDQUFDO0FBQUEsRUFDcEQsQ0FBQyxRQUFRLEVBQUUsTUFBTSxnQ0FBZ0MsU0FBUyxNQUFNLENBQUM7QUFBQSxFQUNqRSxDQUFDLFFBQVEsRUFBRSxNQUFNLHlDQUF5QyxTQUFTLFFBQVEsQ0FBQztBQUFBLEVBQzVFLENBQUMsUUFBUSxFQUFFLEtBQUssb0JBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQUEsRUFDMUQsQ0FBQyxRQUFRLEVBQUUs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
