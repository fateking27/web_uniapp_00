<template>
	<view>
		<map name="mymap" style="width: 750rpx;height: 100vh;"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				markers: [],
				lon: [],
				lat: [],
			};
		},
		onShow() {
			uni.getLocation({
				type: 'gcj02',
				success: res => {
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
					this.lon = res.longitude;
					this.lat = res.latitude;
					this.markers.push({
						id: 100000,
						latitude: res.latitude,
						longitude: res.longitude,
						title: '我的在这',
						iconPath: "/static/logo.png"
					})
				},
				fail(err) {
					console.log(444, err)
				},
				complete(err) {
					console.log(555, err)
				}
			});
			let allMarkers = [];
			wx.request({
				//地图WebserviceAPI地点搜索接口请求路径及参数（具体使用方法请参考开发文档）
				url: 'https://apis.map.qq.com/ws/place/v1/search?page_index=1&page_size=20&boundary=region(广州市,0)&keyword=咖啡&key=L6XBZ-T5HK4-SZNUI-KPJUR-QDHYF-3EFYW',
				success: (res) => {
					var result = res.data
					var pois = result.data
					for (var i = 0; i < pois.length; i++) {
						var title = pois[i].title
						var lat = pois[i].location.lat
						var lng = pois[i].location.lng
						console.log(title + "," + lat + "," + lng)
						let marker = {
							id: i,
							width: 50,
							height: 80,
							latitude: lat,
							longitude: lng,
							callout: {
								// 点击marker展示title
								content: title
							}
						}
						allMarkers.push(marker)
						marker = null
					}
					this.markers.push(...allMarkers);
				}
			})
		}
	}
</script>

<style lang="scss">

</style>