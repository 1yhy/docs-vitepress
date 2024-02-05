# 第十七集 位置定位

## 前置条件
- 需要配置好manifest.json文件的第三方定位模块（推荐使用高德定位）,填写相关key
- 配置好后，需要重新打包自定义基座，才能生效

## 1. uni.getLocation获取当前位置
```js
// 获取当前位置
uni.getLocation({
	type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回国测局坐标，可用于 uni.openLocation 和 map 组件坐标
  altitude: true, // 高度 传入 true 会返回高度信息，
  geocode: true, // 默认false，是否解析地址信息
  highAccuracyExpireTime: 30000, // 高精度定位超时时间(ms)，指定时间内返回最高精度，该值3000ms以上高精度定位才有效果
  isHighAccuracy: true, // 开启高精度定位
	success: function(res) {
		console.log('当前位置的经度：' + res.longitude);
		console.log('当前位置的纬度：' + res.latitude);
    console.log('当前位置的速度：' + res.speed);
    console.log('当前位置的精度：' + res.accuracy);
    console.log('当前位置的高度：' + res.altitude);
    console.log('当前位置的水平精度：' + res.horizontalAccuracy);
    console.log('当前位置的垂直精度：' + res.verticalAccuracy);
    console.log('当前位置的地址信息（仅App端支持，需配置geocode为true）：' + res.address);
	}
});

// address包含参数
{
  "country": "中国", // 国家
  "province": "广东省", // 省份
  "city": "广州市", // 城市
  "district": "海珠区", // 区县
  "street": "新港中路", // 街道
  "streetNum": "397号", // 街道门牌号
  "cityCode": "020", // 城市编码
  "postalCode": "440105", // 邮编
  "poiName": "广州市人民政府", // POI信息
}
```

## 2. uni.openLocation打开位置
```js
// 打开位置
uni.getLocation({
	type: 'gcj02', //返回可以用于uni.openLocation的经纬度
	success: function (res) {
		const latitude = res.latitude;
		const longitude = res.longitude;
		uni.openLocation({
			latitude: latitude, // 纬度，范围为-90~90，负数表示南纬，使用 gcj02 国测局坐标系
			longitude: longitude, // 经度，范围为-180~180，负数表示西经，使用 gcj02 国测局坐标系
      scale: 18, // 缩放比例，范围5~18 默认为18
      name: '我的位置' // 位置名
      address: '我的地址' // 地址的详细说明
			success: function () {
				console.log('success');
			}
		});
	}
});
```

## 3. uni.chooseLocation选择位置
```js
uni.chooseLocation({
  latitude: 0, // 目标地纬度
  longitude: 0, // 目标地经度
  keyword: '美食', // 搜索关键字，仅App平台支持 如果SDK配置百度地图，需要设置 keyword，才能显示相关地点
	success: function (res) {
		console.log('位置名称：' + res.name);
		console.log('详细地址：' + res.address);
		console.log('纬度：' + res.latitude);
		console.log('经度：' + res.longitude);
	}
});
```

## 参考文档
- [uni.getLocation](https://uniapp.dcloud.net.cn/api/location/location.html)
