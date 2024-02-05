# vscode插件开发-chatgpt插件

# VSCode-ChatGPT插件

​<img src="https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/icon.png" alt="icon" style="width: 60%; margin: 0px 20%; zoom: 50%;" />

最近，由于现在大多ChatGPT插件都需要付费，自己想着刚好有个账号，开发一个简单的方便自己使用(希望能用上🙄)。不过使用还是需要科学上网，而且目前存在一些小Bug😂。在这篇文章中，我将会介绍这个插件的开发流程和代码讲解👇。

## 开发流程

### 确定需求

在开发插件之前，我们需要先确定需求。功能基本参照[ChatGPT中文版](https://marketplace.visualstudio.com/items?itemName=WhenSunset.chatgpt-china)。在这个插件中，我们需要实现以下功能：

- 用户可以在VSCode中输入文本，然后使用ChatGPT进行自然语言处理。可以对答案进行复制。
- 用户可以选择[github开源项目](https://github.com/PlexPt/awesome-chatgpt-prompts-zh/blob/main/prompts-zh.json)提供的角色Prompt方便提问。
- 可以选择代码进行快捷提问(快捷键目前仍有问题)，主要包括解释代码、优化代码、找代码存在的未知问题。

### 选择开发语言和框架

在确定需求之后，我们需要选择开发语言和框架。由于Vscode插件是基于Node.js开发的，因此我们选择使用Node.js作为开发语言，并使用Vscode提供的插件开发框架进行开发，使用ts语言，通过使用axios进行请求。

### 编写代码

在选择好开发语言和框架之后，我们开始编写代码。在这个插件中，我们需要实现以下功能：

- 在Vscode中添加一个命令输入框，让用户输入请求接口Token。

  ```javascript
    // 添加命令
    "contributes": {
      "commands": [
        {
          "command": "UsefulCode.InputToken",
          "title": "InputToken"
        }
       ]
    }
    // Vscode设置区配置
  	"configuration": {
        "title": "UsefulCode",
        "properties": {
          "UsefulCode.token": {
            "type": "string",
            "default": "",
            "$comment": "输入OpenAI的token",
            "description": "Enter your OpenAPI token."
          }
        }
      },
  
  // 注册输入token命令
  	context.subscriptions.push(
  		vscode.commands.registerCommand('UsefulCode.InputToken', async () => {
  			const userToken = await vscode.window.showInputBox({
  				prompt: 'Enter your OpenAI API token',
  				placeHolder: 'Token'
  			});
  
  			if (userToken) {
  				// 保存用户的Token
  				saveToken(userToken);
  				vscode.window.showInformationMessage('设置Token成功');
  			}
  		})
  	);
  
  // 保存token到全局设置，方便调用
  function saveToken(token: string) {
  	const config = vscode.workspace.getConfiguration(CONFIG_SECTION);
  	config.update('token', token, vscode.ConfigurationTarget.Global);
  }
  ```

  

- 在Vscode中添加一个侧边栏还有webView视图，作为主要问答区。

  ```javascript
      "viewsContainers": {
        // 侧边栏图标配置
        "activitybar": [
          {
            "id": "useful_code_sidebar",
            "title": "UsefulCode",
            "icon": "./assets/icon.svg"
          }
        ],
      },
        // 侧边栏视图
      "views": {
        "useful_code_sidebar": [
          {
            "id": "useful_code_sidebar-view",
            "name": "询问窗口",
            "type": "webview",
            "initialSize": 1
          }
        ]
      }
  
  	const provider = new ChatViewProvider(context.extensionUri);
  	// 注册 Webview 视图提供程序，第一个参数就是展示视图区域Id，第二个参数是视图主类实现
  	context.subscriptions.push(
  vscode.window.registerWebviewViewProvider('useful_code_sidebar-view', provider)
  	);
  
   // 创建webView主类
  class ChatViewProvider implements vscode.WebviewViewProvider {
  	public _view?: vscode.WebviewView;
  
  	constructor(
  		private readonly _extensionUri: vscode.Uri,
  	) { }
  
  	public resolveWebviewView(webviewView: vscode.WebviewView) {
  		this._view = webviewView;
  		console.log(webviewView.webview == this._view?.webview);
  
  		// 设置 Webview 的 HTML 内容
  		webviewView.webview.html = this.getWebviewContent(webviewView.webview);
      
  		webviewView.webview.options = {
  			enableScripts: true,
  			localResourceRoots: [
          this._extensionUri
        ], // 允许访问其他本地资源，并定义加载本地内容的根 URI
  		};
  		// 处理 Webview 的消息和事件
  		webviewView.webview.onDidReceiveMessage(async message => {
  			// 处理来自 Webview 的消息
  			if (message.type === 'message' || message.type === 'askQuestion') {
  				const res = await callOpenAI(message.value);
  				// 处理收到的消息
  				if(res) {
  					const responseMessage = `${res.content}`;
  					// 发送响应消息给 Webview
  					webviewView?.webview.postMessage({ type: 'response', value: responseMessage });
  				}
  			}
  		});
  	}
  
  	// 处理 Webview 的消息和事件
  	public postMessage(message: string) {
  		if (this._view) {
  			this._view.webview?.postMessage({ type: 'askQuestion', value: message });
  		}
  	}
  
    // webView内容
  	private getWebviewContent(webview: vscode.Webview): string {
  		const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.js'));
  		const promptScriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'prompt.json'));
  
  		// Do the same for the stylesheet.
  		const styleResetUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'reset.css'));
  		const styleVSCodeUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'vscode.css'));
  		const styleMainUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'main.css'));
  
  		const nonce = getNonce();
  		return `
  			<!DOCTYPE html>
  			<html lang="en">
  			<head>
    <meta charset="UTF-8">
  	<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
  
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  	<link href="${styleResetUri}" rel="stylesheet">
  	<link href="${styleVSCodeUri}" rel="stylesheet">
  	<link href="${styleMainUri}" rel="stylesheet">
    <title>UsefulCode</title>
  </head>
  					<body>
  							<div class="chat-container">
  									<div class="chat-messages" id="chatMessages"></div>
  									<div class="chat-input">
  										<textarea placeholder="请输入你的问题，（输入'/'可以触发提示词）" class="messageInput" id="messageInput"></textarea>
  										<button class="send-btn" id="sendButton">Send</button>
  										<div class="position" id="position">
  									  <span>角色</span>
  									</div>
  										</div>
  							</div>
  							<script nonce="${nonce}" src="${promptScriptUri}"></script>
  							<script nonce="${nonce}" src="${scriptUri}"></script>
  					</body>
  					</html>
  			`;
  	}
  
  
  ```

  webView基本js逻辑就是按钮发送消息还有接受回答消息展示，另写在`main.js`文件中。

- 在Vscode中添加右键菜单提问,选中时才显示快捷菜单，还有绑定快捷键。

  ```javascript
  "commands": [
        {
          "command": "UsefulCode.FindProblemsOfCode",
          "title": "查看代码是否存在问题"
        },
        {
          "command": "UsefulCode.OptimizeCode",
          "title": "优化代码"
        },
        {
          "command": "UsefulCode.ExplainCode",
          "title": "解释代码"
        }
      ],
      "keybindings": [
        {
          "command": "UsefulCode.FindProblemsOfCode",
          "key": "ctrl+alt+f",
          "when": "editorTextFocus"
        },
        {
          "command": "UsefulCode.OptimizeCode",
          "key": "ctrl+alt+o",
          "when": "editorTextFocus"
        },
        {
          "command": "UsefulCode.ExplainCode",
          "key": "ctrl+alt+e",
          "when": "editorTextFocus"
        }
      ],
      "menus": {
        "editor/context": [
          {
            "command": "UsefulCode.FindProblemsOfCode",
            "group": "askGroup@1",
            "when": "editorHasSelection"
          },
          {
            "command": "UsefulCode.OptimizeCode",
            "group": "askGroup@1",
            "when": "editorHasSelection"
          },
          {
            "command": "UsefulCode.ExplainCode",
            "group": "askGroup@1",
            "when": "editorHasSelection"
          }
        ]
      },
        
     // 注册右键菜单命令 -- 优化代码（其他雷同）
  	context.subscriptions.push(
  		vscode.commands.registerCommand("UsefulCode.OptimizeCode", async () => {
  			const editor = vscode.window.activeTextEditor;
  			const selection = editor?.selection;
  			const text = editor?.document.getText(selection) || '';
  			provider.postMessage('请你帮我优化一下这段代码\n' + text);
  		}));
  
      ......
      
  ```

  

- 在处理完成后，将结果显示在Vscode中。

### 发布和维护

在测试和调试完成之后，我们将插件发布到[Vscode插件市场](https://marketplace.visualstudio.com/)中。

##### **完善插件基本信息**

- 完善package.json配置
  - 添加图标
  - 添加license
  - 添加作者
  - 添加仓库
  - 添加关键词

- 修改`README`

### vsce打包

- 安装官方工具 vsce （Visual Studio Code Extensions）


```shell
npm install -g vsce
```

- 打包

  ```go
  vsce package
  ```

- 通过 [create-publisher](https://marketplace.visualstudio.com/manage/createpublisher) 创建发布者 ，登录即可上传打包文件



## 基本模样

<img src="https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230530014625627.png" alt="image-20230530014625627" style="zoom:50%;" />

<img src="https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230530014538287.png" alt="image-20230530014538287" style="zoom:50%;" />

<img src="https://yhyblog-2023-2-8.oss-cn-hangzhou.aliyuncs.com/md/2023/05/image-20230530015237731.png" alt="image-20230530015237731" style="zoom: 67%;" />

## 总结

ok,一个简单的插件就初步完成了😁。在这篇文章中，我们介绍了开发一个能够使用ChatGPT的Vscode插件的完整流程和代码讲解。通过这个插件的开发，我们可以更加方便地使用ChatGPT进行自然语言处理，提高工作效率。

- 
