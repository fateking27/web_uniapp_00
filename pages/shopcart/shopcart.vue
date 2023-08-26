<template>
	<view>
		<view class="product" v-for="product in getListGoods">
			<view class="product_img">
				<image :src="product.productImg" style="width:90%;height:240rpx;"></image>
				<button style="width:180rpx;height:50rpx;line-height:50rpx;" @tap="delGoods(product)">删除</button>
			</view>
			<view class="product_title">
				<view>{{product.productName}}</view>
				<button style="width:80rpx;height:50rpx;line-height:50rpx;" @tap="changeNum(product, -1)">-</button>
				<view>数量：{{product.count}}</view>
				<button style="width:80rpx;height:50rpx;line-height:50rpx;" @tap="changeNum(product, 1)">+</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {createNamespacedHelpers} from "vuex";
	const {
		mapGetters
	} = createNamespacedHelpers("shorpcart");
	export default {
		data() {
			return {

			}
		},
		methods: {
			onchangeNum(product,num){
				this.$store.commit("")
			}
		},
		computed: {
			...mapGetters(["getListGoods"])
		}
	}
</script>

<style>

</style>