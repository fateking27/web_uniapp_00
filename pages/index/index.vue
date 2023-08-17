<template>
	<div class="content">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="2000" :duration="500">
				<swiper-item v-for="item in banners" :key="item.id">
					<view class="swiper-item uni-bg-red">
						<img style="width: 100%;border-radius: 10px;display: block;" :src="item.imgURL" alt="">
					</view>
				</swiper-item>
			</swiper>
		</view>

		<view class="notice_">
			<u-notice-bar class="notice_bar" :text="text1" mode="link" speed="250" direction="column" bgColor="#fff"
				color="#000"></u-notice-bar>
		</view>

		<view class="grid">
			<u-scroll-list class="grid_">
				<!-- <u-scroll-list></u-scroll-list> -->
				<view class="img" v-for="item in listGoodsType" :key="item.id">
					<img :src="item.icon" alt="">
					<view style="text-align: center;">
						{{item.typeName}}
					</view>
				</view>
			</u-scroll-list>
		</view>

		<view class="scroll_list">
			<view class="title">
				<span style="font-weight: 800;">领取优惠卷</span>
				<span style="font-size: 14px;">查看更多></span>
			</view>

			<u-scroll-list class="img">
				<img v-for="(item, index) in 5" src="/static/0c49fa42bbfaf0abd0c93095c976199.png" :key="index"/>
			</u-scroll-list>
		</view>

		<view class="container">
			<view class="title">
				<span style="font-weight: bolder;font-size: 20px;font-family: 幼圆;">拼团惠</span>
				<span
					style="font-size: 14px;background-color: #fafa69;color:#e79a00;border-radius: 15px;height: 5px;line-height: 5px;margin-top: 10px;margin-right: 20px;">GO></span>
			</view>
		</view>

		<view class="loading" v-if="curPage != maxPage">
			<u-loadmore status="loading" iconColor="#FF0000"></u-loadmore>
		</view>
	</div>

</template>

<script>
	import ecom from '@/utils/ecom.js'
	export default {
		data() {
			return {
				text1: [
					'uView UI众多组件覆盖开发过程的各个需求',
					'组件功能丰富，多端兼容。',
					'让您快速集成，开箱即用'
				],
				banners: [],
				listGoodsType: [],
				listGoods: [],
				curPage: 1,
				pageSize: 4,
				maxPage: 0,
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			init() {
				ecom.getAllMtSwiper({}).then(res => {
					this.banners = res.data.rows
					console.log(this.banners)
				})
				ecom.getAllInfoProducttype({}).then(res => {
					this.listGoodsType = res.data.rows.filter(item => item.parentId != "0");
					console.log(this.listGoodsType)
				})
				ecom.searchEcomProduct({
					curPage: 1,
					pageSize: 10
				}).then(res => {
					this.listGoods = res.data.rows;
					console.log(this.listGoods)
				})
			},
		}
	}
</script>

<style lang="scss">
	.content {
		// position: relative;
		width: 750rpx;
		display: flex;
		flex-wrap: wrap;
		background: linear-gradient(to bottom, #40b3ff, #e8e8e8);

		.container {
			background-color: #fff;
			border-radius: 6px;
			width: 90%;
			height: 120px;
			margin: 0 auto;
			margin-top: 10px;

			.title {
				display: flex;
				justify-content: space-between;

				span {
					padding: 10px;
				}
			}
		}

		.scroll_list {
			background-color: #fff;
			// border: solid 1px #999;
			border-radius: 6px;
			width: 90%;
			// height: 120px;
			margin: 0 auto;
			margin-top: 10px;
			.title {
				display: flex;
				justify-content: space-between;

				span {
					padding: 10px;
				}
			}

			.img {
				display: flex;
				width: 95%;
				margin: 0 auto;
				// overflow-y: auto;

				img {
					display: block;
					width: 140px;
					padding-right: 10px;

				}
			}

		}

		.grid {
			width: 100%;
			margin-top: 10px;
			// position: absolute;

			.grid_ {
				margin: 0 auto;
				background-color: #fff;
				// border: solid 1px #999;
				width: 90%;
				// height: 190px;
				border-radius: 6px;
				// display: flex;
				// flex-wrap: wrap;
				justify-content: space-around;

				// align-items: center;
				img {
					display: block;
					width: 50px;
					padding: 5px 5px;
				}
			}
		}

		.notice_ {
			margin-top: 400rpx;
			// position: absolute;
			width: 100%;

			.notice_bar {
				margin: 0 auto;
				width: 85%;
				border-radius: 6px;
			}

		}

		.uni-margin-wrap {
			width: 100%;
			position: absolute;
			margin-top: 100rpx;

			.swiper {
				height: 280rpx;

				.swiper-item {
					width: 90%;
					display: block;
					height: 300rpx;
					line-height: 300rpx;
					text-align: center;
					margin: 0 auto;
				}
			}
		}
	}
</style>