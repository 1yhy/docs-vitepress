# 第九集 文件和媒体

&emsp;&emsp;本文档主要介绍uniapp中文件和媒体常用相关的api。完整的api文档请参考[官方文档](https://uniapp.dcloud.net.cn/api/media/image.html)。
## 1. 图片

### 1.1 选择图片

```typescript
uni.chooseImage({
    count: 1, // 最多可以选择的图片张数，默认9
    sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
    sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
    crop: {
        width: 100,
        height: 100,
        quality: 100, // 图片压缩质量，仅对jpg格式有效，默认值为80
    },
    success: (res) => {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
    }
})
```

### 1.2 预览图片

```typescript
uni.previewImage({
    current: '', // 当前显示图片的链接/索引值，不填或填写的值无效则为 urls 的第一张。App平台在 1.9.5至1.9.8之间，current为必填。不填会报错
    urls: [], // 需要预览的图片http链接列表
    indicator: 'default', // 图片指示器样式，有效值：default, number, none
    loop: false, // 是否开启图片轮播，有效值：true, false
    longPressActions: {
        itemList: ['发送给朋友', '保存图片', '收藏'],
        success: function(data) {
            console.log('选中了第' + (data.tapIndex + 1) + '个按钮');
        },
        fail: function(err) {
            console.log(err.errMsg);
        }
    },
    success: (res) => {
        console.log('预览图片成功');
    },
    fail: (err) => {
        console.log('预览图片失败');
    },
})
```

### 1.3 关闭预览图片

```typescript
uni.closePreviewImage({
    success: (res) => {
        console.log('关闭预览图片成功');
    },
    fail: (err) => {
        console.log('关闭预览图片失败');
    },
})
```

### 1.4 保存图片到系统相册

```typescript
uni.saveImageToPhotosAlbum({
    filePath: '', // 图片文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络图片路径
    success: (res) => {
        console.log('保存图片成功');
    },
    fail: (err) => {
        console.log('保存图片失败');
    },
})
```

### 1.5 获取图片信息

```typescript
uni.getImageInfo({
    src: '', // 图片的路径，可以是相对路径、临时文件路径、存储文件路径、网络图片路径
    success: (res) => {
        console.log('获取图片信息成功');
    },
    fail: (err) => {
        console.log('获取图片信息失败');
    },
})
```

### 1.6 压缩图片

```typescript
uni.compressImage({
    src: '', // 图片路径，图片的路径，可以是相对路径、临时文件路径、存储文件路径
    quality: 80, // 压缩质量，仅对jpg有效，范围为0-100
    width: 'auto', // 缩放图片的宽度，支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据width与源图宽的缩放比例计算，若未设置width则使用源图宽度）
    height: 'auto', // 缩放图片的高度，支持像素值（如"100px"）、百分比（如"50%"）、自动计算（如"auto"，即根据height与源图高的缩放比例计算，若未设置height则使用源图高度）
    compressedWidth: 100, // 压缩后图片的宽度，单位为px，若不填写则默认以 compressHeight 为准等比缩放
    compressedHeight: 100, // 压缩后图片的高度，单位为px，若不填写则默认以 compressWidth 为准等比缩放
    roate: 0, // 旋转角度，顺时针旋转的角度，范围为0-360，原图默认不旋转
    success: (res) => {
        console.log('压缩图片成功');
    },
    fail: (err) => {
        console.log('压缩图片失败');
    },
})
```

## 2. 文件

### 2.1 保存文件到本地
  
  ```typescript
  uni.saveFile({
      tempFilePath: '', // 需要保存的文件的临时路径
      success: (res) => {
          console.log('保存文件成功');
      },
      fail: (err) => {
          console.log('保存文件失败');
      },
  })
  ```

### 2.2 获取保存的文件列表
  
  ```typescript
  uni.getSavedFileList({
      success: (res) => {
          console.log('获取保存的文件列表成功');
      },
      fail: (err) => {
          console.log('获取保存的文件列表失败');
      },
  })
  ```

### 2.3 获取本地文件的文件信息
  
  ```typescript
  uni.getSavedFileInfo({
      filePath: '', // 文件路径
      success: (res) => {
          console.log('获取本地文件的文件信息成功');
      },
      fail: (err) => {
          console.log('获取本地文件的文件信息失败');
      },
  })
  ```

### 2.4 删除本地存储的文件
  
  ```typescript
  uni.removeSavedFile({
      filePath: '', // 需要删除的文件路径
      success: (res) => {
          console.log('删除本地存储的文件成功');
      },
      fail: (err) => {
          console.log('删除本地存储的文件失败');
      },
  })
  ```

### 2.5 获取文件信息
  
  ```typescript
  uni.getFileInfo({
      filePath: '', // 本地文件路径
      digestAlgorithm: 'md5', // 计算文件摘要的算法，默认值 md5，有效值：md5，sha1
      success: (res) => {
          console.log('获取文件信息成功');
      },
      fail: (err) => {
          console.log('获取文件信息失败');
      },
  })
  ```

### 2.6 新开页面打开文档
  
  ```typescript
  uni.openDocument({
      filePath: '', // 文件路径，可通过 downFile 获得
      fileType: 'pdf', // 文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx
      showMenu: true, // 是否显示右上角菜单按钮
      success: (res) => {
          console.log('新开页面打开文档成功');
      },
      fail: (err) => {
          console.log('新开页面打开文档失败');
      },
  })
  ```
## 3. 视频

### 3.1 拍摄视频或从手机相册中选视频

```typescript
uni.chooseVideo({
    sourceType: ['album', 'camera'], // album 从相册选视频，camera 使用相机拍摄，默认二者都有
    compressed: true, // 是否压缩所选的视频源文件，默认值为true，需要压缩
    maxDuration: 60, // 拍摄视频最长拍摄时间，单位秒。最长支持60秒
    camera: 'back', // 前置或后置摄像头，默认为前后都有，即：['front', 'back']
    success: (res) => {
        console.log('拍摄视频或从手机相册中选视频成功');
    },
    fail: (err) => {
        console.log('拍摄视频或从手机相册中选视频失败');
    },
})
```

### 3.2 保存视频到系统相册

```typescript
uni.saveVideoToPhotosAlbum({
    filePath: '', // 视频文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络视频路径
    success: (res) => {
        console.log('保存视频到系统相册成功');
    },
    fail: (err) => {
        console.log('保存视频到系统相册失败');
    },
})
```

### 3.3 获取视频信息

```typescript
uni.getVideoInfo({
    src: '', // 视频文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络视频路径
    success: (res) => {
        console.log('获取视频信息成功');
    },
    fail: (err) => {
        console.log('获取视频信息失败');
    },
})
```

### 3.4 压缩视频


```typescript
uni.compressVideo({
    src: '', // 视频文件路径，可以是临时文件路径也可以是永久文件路径，不支持网络视频路径
    quality: 'low', // 压缩质量，low, medium, high, 不设置则使用原视频质量
    bitrate: 0, // 视频码率，单位为kbps，最小值为100，最大值为10000，不设置则使用原视频码率
    resolution: 0, // 视频分辨率，值为0-3对应分辨率：360p, 480p, 720p, 1080p，不设置则使用原视频分辨率
    fps: 0, // 帧率，最小值为15，最大值为30，不设置则使用原视频帧率
    success: (res) => {
        console.log('压缩视频成功');
    },
    fail: (err) => {
        console.log('压缩视频失败');
    },
})
```

## 4. 使用[plus.io模块](https://www.html5plus.org/doc/zh_cn/io.html)进行文件操作

plus的io模块是拥有更加强大的文件操作能力的模块，uniapp中可以通过plus.io模块进行文件操作。完整的api文档请参考[官方文档](https://www.html5plus.org/doc/zh_cn/io.html)。

## 5. 参考文档
- [媒体Api](https://uniapp.dcloud.net.cn/api/media/image.html)
- [文件Api](https://uniapp.dcloud.net.cn/api/file/file.html#)
- [plus.io模块](https://www.html5plus.org/doc/zh_cn/io.html)
