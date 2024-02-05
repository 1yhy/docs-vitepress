# 第十八集 使用render.js

## 1. 什么是render.js

简单理解：renderjs运行在视图层，可以直接操作视图层的元素，避免通信折损。App 里没有window和dom，如果你不开发小程序，想使用一些操作了dom、window的库，其实可以使用renderjs来解决。在app-vue环境下，视图层由webview渲染，而renderjs运行在视图层，自然可以操作dom和window。

## 2. renderjs的使用
#### 2.1 在App中使用renderjs使用html2canvas将页面指定元素Id生成图片并保存到相册
```html
<template>
  <!-- 生成图片的元素 -->
  <view id="share" style="width: 100rpx; height: 100rpx; background-color: blue;">我是一个元素</view>
  <!-- save改变时，调用canvasImage.emitData方法， canvasImage是renderjs'script'标签上的module名字 -->
  <view :save="save" :change:save="canvasImage.emitData"></view>
</template>
```
```javascript
// vue3使用setup语法糖好像不行，需要使用vue2的写法,使用时可以分两个script标签
<script lang="ts">
export default {
  setup() {
     // 保存分享图片
    const save = ref()
    // 保存图片loading
    const showLoading = () => {
      uni.showLoading({
        title: '保存中',
      })
    }

    // 保存图片失败
    const saveError = () => {
      uni.$u.toast('保存失败')
      uni.hideLoading()
    }

    // 生成base64图片结束
    const renderFinish = (data: any) => {
      const base64 = data.path
      const bitmap = new plus.nativeObj.Bitmap!('base64')
      bitmap.loadBase64Data(
        base64,
        () => {
          const url = '_doc/' + new Date().getTime() + '.png' // url为时间戳命名方式
          bitmap.save(
            url,
            {
              overwrite: true, // 是否覆盖
              quality: 100, // 图片清晰度
            },
            () => {
              uni.saveImageToPhotosAlbum({
                filePath: url,
                success: function () {
                  uni.showToast({
                    title: '保存成功',
                    icon: 'none',
                  })
                  bitmap.clear()
                },
              })
            },
            () => {
              uni.showToast({
                title: '保存失败',
                icon: 'none',
              })
              bitmap.clear()
            },
          )
        },
        () => {
          uni.showToast({
            title: '保存失败',
            icon: 'none',
          })
          bitmap.clear()
        },
      )
    }
    return {
      showLoading,
      renderFinish,
      saveError,
      save,
    }
  },
}
</script>
<script lang="renderjs" module="canvasImage">
import html2canvas from 'html2canvas'
export default {
	methods: {
		emitData() {
			// 根据自己需要截图区域
			this.create('share');
		},
		async create(id) {
			if (!id) {
				return false;
			}
			try {
				this.$ownerInstance?.callMethod('showLoading');
				const timeout = setTimeout(async () => {
					const dom = document.getElementById(id);
					const canvas = await html2canvas(dom, {
						width: dom?.clientWidth, //设置canvas尺寸与所截图尺寸相同，防止白边
						height: dom?.clientHeight, //防止白边
						logging: true,
						useCORS: true
					});
					const base64 = canvas.toDataURL('image/jpeg');
					this.$ownerInstance?.callMethod('renderFinish', {
						path: base64,
					});
					clearTimeout(timeout);
				}, 500);
			} catch (error) {
				this.$ownerInstance?.callMethod('saveError');
			}
		}
	}
}
</script>
```

## 3. 参考文档
- [renderjs](https://uniapp.dcloud.net.cn/tutorial/renderjs.html)

