<template>
	<view class="category">
		<view class="saech_warp">
			<u-search placeholder="搜你想搜的~" :showAction="false"></u-search>
		</view>
<!-- 		<view class="">
			<u-calendar :show="showcalender" @close="showcalender = false"></u-calendar>
			<u-button @click="showcalender = true">打开</u-button>
		</view> -->
<!-- 		<view class="">
			<u-picker :show="showpcker" ref="uPicker" :columns="columns" @confirm="confirm"
				@change="changeHandler"></u-picker>
			<u-button @click="showpcker = true">打开多列联动</u-button>
		</view> -->
		<view class="container">
			<view class="first_warp">
				<scroll-view scroll-y="true" class="scroll-Y">
					<view class="first_item" :class="{first_action: cursecond == 's' + index}"
						v-for="(item,index) in 20" @tap="changefirst(index)">电器{{index}}</view>
				</scroll-view>
			</view>
			<view class="second_warp">
				<scroll-view :scroll-y="true" class="scroll-Y">
					<view class="first_item" :class="{first_action: cursecond == 's' + index}"
						v-for="(item,index) in 20" @tap="changefirst(index)"></view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import ecom from"@/utils/ecom.js"
	export default {
		data() {
			return {
				cursecond: 's0',
				showcalender: false,
				showpcker: false,
				columns: [
					['中国', '美国'],
					['深圳', '厦门', '上海', '拉萨']
				],
				columnData: [
					['深圳', '厦门', '上海', '拉萨'],
					['得州', '华盛顿', '纽约', '阿拉斯加']
				]
			}
		},
		methods: {
			changefirst(por) {
				this.cursecond = "s" + por
			},
			confirm(ev) {
				this.showpcker = false
				console.log("confirm", ev)
			},
			changeHandler(ev) {
				let columnIndex = ev.columnIndex;
				let index = ev.index;
				if (0 == columnIndex) {
					this.columns.splice(1, 1, this.columnData[index]);
				}
			}
		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #fff;
		display: flex;

		.saech_warp {
			height: 15vh;
			padding-top: 10rpx;
		}

		.first_warp {
			width: 20vw;
			background-color: #bcbcbc;

			.scroll-Y {
				height: 100vh;

				.first_item {
					height: 35px;
					width: 100%;
					border-bottom: 1rpx solid #bc3204;
				}
			}
		}

		.second_warp {
			width: 80vw;
			height: 100vh;
			background-color: #e7f7f5;
		}
	}
</style>