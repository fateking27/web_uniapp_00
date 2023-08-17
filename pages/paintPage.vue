<template>
	<view class="painting">
		<canvas style="height: 80vh;background-color: cadetblue;width: 100vw;" canvas-id="mycanvas" class="mycanvas" @touchstart="startdraw" @touchmove="drawline"
			@touchend="enddraw"></canvas>
		<button @tap="saveimg">保存签名</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				context: 0,
				startx: 0,
				satrty: 0,
			}
		},

		methods: {
			startdraw(ev) {
				this.context = uni.createCanvasContext('mycanvas');
				this.startx = ev.touches[0].x;
				this.starty = ev.touches[0].y;
				console.log(ev, 111)
			},
			drawline(ev) {
				console.log(ev, 555)
				let endx = ev.touches[0].x;
				let endy = ev.touches[0].y;
				this.context.setStrokeStyle("#000")
				this.context.setLineWidth(5)
				this.context.moveTo(this.startx, this.starty)
				this.context.lineTo(endx, endy);
				this.context.stroke();
				this.context.draw(true)
				this.startx = endx;
				this.starty = endy;
				console.log(333, endx, endy)
			},
			enddraw(ev) {
				console.log(ev, 333)
			},
			saveimg() {
				uni.canvasToTempFilePath({
					canvasId: 'mycanvas',
					success: function(res) {
						uni.uploadFile({
							url: 'http://localhost:3000/api/uploadImg', //仅为示例，非真实的接口地址
							filePath: res.tempFilePath,
							name: 'file',
							formData: {},
							success: (uploadFileRes) => {
								let result = JSON.parse(uploadFileRes.data);
							}
						});
						console.log(res, 333)
					}
				})
			}
		}
	}
</script>

<style>

</style>