# 第十九集 uni-app热更新

## 1. App热更新
&emsp;&emsp;App热更新是指在不重新发布App的情况下，通过服务器下发补丁包，实现App的更新。uni-app的App热更新分为两种，一种是整包更新，一种是wgt更新。
- ios暂时不支持整包更新
- wgt更新是指只更新wgt包，不更新整个App，wgt包是指uni-app编译后生成的文件，包含了所有的资源文件，包括js、css、图片等，wgt包的大小一般在1M左右，wgt包的更新速度比整包更新快，但是wgt包的更新需要下载wgt包，然后解压，然后替换原来的wgt包，这个过程需要一定的时间，所以wgt包的更新速度也不是很快。

## 2. 获取wgt包
- 使用HBuilderX打开项目，修改版本号，点击发行，选择原生App-制作应用wgt包，等待编译完成，把wgt包上传到服务器
- 用户在打开App时判断和服务器返回的版本号进行比对（或者服务器直接返回是否需要更新），需要更新时调用uni.downloadFile方法下载wgt包安装完成后，App会自动重启，然后就可以使用新的wgt包了。

## 3. 热更新实现
- 比对服务器和本地的版本号，如果服务器版本号大于本地版本号，就需要更新
- 在App.vue页面或者main.js页面引入fCheckVersion方法，启动App时调用fCheckVersion方法判断是否需要更新

**获取服务器版本号**
```javascript
const fCheckVersion = () => {
  // #ifdef APP-PLUS
  plus.runtime.getProperty(plus.runtime.appid!, async function (widgetInfo) {
    const nVerSta = compare(plus.runtime.version, widgetInfo.version)
    let sLaststVer = plus.runtime.version
    if (widgetInfo.version) {
      if (nVerSta == 1) {
        sLaststVer = plus.runtime.version
      } else if (nVerSta == -1) {
        sLaststVer = widgetInfo.version
      }
    }
    console.log(sLaststVer)
    //发送请求进行匹对,我这里数据库设定的是如果返回版本号自行比对!!!
      const { data } = await getLatestVersion()
      if (data) {
        const { versionUrl, name, versionCode， type } = data
        const verSta = compare(sLaststVer, versionCode)

        // 版本号比服务器版本低，需要更新
        if(verSta === -1){
          updateUseModal({
            title: 'xxx更新', // 标题
            contents: '检测到有新版本，立即更新！', // 升级内容
            is_mandatory: true, // 是否强制更新
            url: versionUrl, // 安装包下载地址
            platform: name, // 安装包平台
            type, // 安装包类型 可以是wgt或者apk
          })
        } 
      }
  })
  // #endif
}
```
**更新弹窗**
```javascript
const updateUseModal = (packageInfo) => {
  const {
    title, // 标题
    contents, // 升级内容
    is_mandatory, // 是否强制更新
    url, // 安装包下载地址
    platform, // 安装包平台
    type, // 安装包类型
  } = packageInfo

  const isWGT = type === 'wgt'
  const isiOS = !isWGT ? platform.includes('iOS') : false
  const confirmText = isiOS ? '立即跳转更新' : '立即下载更新'

  return uni.showModal({
    title,
    content: contents,
    showCancel: !is_mandatory,
    confirmText,
    success: (res) => {
      if (res.cancel) return

      // iosWgt更新下载， 暂不支持ios整包更新
      if (isiOS && isWGT) {
        plus.runtime.openURL(url)
        return
      }
      const waiting = plus.nativeUI.showWaiting('正在下载 - 0%')
      if (!isWGT) {
        // 整包更新
        const dtask = plus.downloader.createDownload(
          url,
          {
            method: 'GET',
          },
          function (d, status) {
            if (status == 200) {
              uni.showToast({
                title: '版本更新成功',
                icon: 'success',
                duration: 2000,
                mask: true,
              })
              const path = d.filename
              plus.runtime.install(path!)
            } else {
              plus.nativeUI.alert('版本更新失败:' + status)
            }
          },
        )
        dtask.addEventListener('statechanged', function (task) {
          // 给下载任务设置一个监听 并根据状态操作
          switch (task.state) {
            case 1:
              uni.showLoading({ title: '正在下载' })
              break
            case 3: {
              const progress = parseInt(
                String(
                  (parseFloat(String(task.downloadedSize)) /
                    parseFloat(String(task.totalSize))) *
                    100,
                ),
              )
              waiting.setTitle('正在下载 - ' + progress + '%')
              break
            }
            case 4:
              plus.nativeUI.closeWaiting()
              //下载完成 做相应操作
              plus.runtime.restart()
              break
          }
        })
        dtask.start()
      } else {
        // wgt热更新
        // 下载好直接安装，下次启动生效
        // 发行，制作应用wgt包，将wgt包放到oss，后台返回wgt地址。
        // 存在问题：使用wgt文件升级问题，安装wgt文件失败[-1205]，WGT安装包中mainfest.json文件的version版本不匹配。
        // 解决方法1，把线上的version版本号的首个数字调高；
        // 解决方法2，在安装WGT的时候，添加一个参数，不进行版本对比。force: true
        const downloadTask = uni.downloadFile({
          url,
          success: (res) => {
            if (res.statusCode !== 200) {
              console.error('下载安装包失败', res)
              return
            }

            plus.runtime.install(
              res.tempFilePath,
              {
                force: true,
              },
              () => {
                if (is_mandatory) {
                  //更新完重启app
                  plus.runtime.restart()
                  return
                }
                uni.showModal({
                  title: '安装成功是否重启？',
                  success: (res) => {
                    if (res.confirm) {
                      downloadTask.offProgressUpdate(() => {
                        console.log('取消监听加载进度')
                      }) //取消监听加载进度
                      //更新完重启app
                      plus.runtime.restart()
                    }
                  },
                })
              },
              (err) => {
                uni.hideLoading()
                uni.showModal({
                  title: '更新失败',
                  content: err.message,
                  showCancel: false,
                })
              },
            )
          },
          //接口调用结束
          complete: () => {
            uni.hideLoading()
            downloadTask.offProgressUpdate(() => {
              console.log('取消监听加载进度')
            }) //取消监听加载进度
            plus.nativeUI.closeWaiting() //关闭等待消息对话框
          },
        })
        //监听下载进度
        downloadTask.onProgressUpdate((res) => {
          waiting.setTitle('正在下载 - ' + res.progress + '%')
        })
      }
    },
  })
}
```
**比对版本号**
```javascript
/**
 * 对比版本号，如需要，请自行修改判断规则
 * 支持比对	("3.0.0.0.0.1.0.1", "3.0.0.0.0.1")	("3.0.0.1", "3.0")	("3.1.1", "3.1.1.1") 之类的
 * @param {Object} v1
 * @param {Object} v2
 * v1 > v2 return 1
 * v1 < v2 return -1
 * v1 == v2 return 0
 */
function compare(v1 = '0', v2 = '0') {
  const versionOne = String(v1).split('.')
  const versionTwo = String(v2).split('.')
  const minVersionLens = Math.min(versionOne.length, versionTwo.length)

  let result = 0
  for (let i = 0; i < minVersionLens; i++) {
    const curV1 = Number(versionOne[i])
    const curV2 = Number(versionTwo[i])

    if (curV1 > curV2) {
      result = 1
      break
    } else if (curV1 < curV2) {
      result = -1
      break
    }
  }

  if (result === 0 && versionOne.length !== versionTwo.length) {
    const v1BiggerThenv2 = versionOne.length > versionTwo.length
    const maxLensVersion = v1BiggerThenv2 ? versionOne : versionTwo
    for (let i = minVersionLens; i < maxLensVersion.length; i++) {
      const curVersion = Number(maxLensVersion[i])
      if (curVersion > 0) {
        v1BiggerThenv2 ? (result = 1) : (result = -1)
        break
      }
    }
  }
  return result
}
```
