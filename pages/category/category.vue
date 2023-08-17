<template>
  <view class="category">
    <view class="saech_warp">
      <u-search placeholder="搜你想搜的~" :showAction="true"></u-search>
    </view>
    <view class="container">
      <view class="first_warp">
        <scroll-view scroll-y="true" class="scroll-Y">
          <view
            class="first_item"
            :class="{ first_action: cursecond == 's' + index }"
            v-for="(item, index) in listGoodsType"
            :key="item.id"
            >{{ item.typeName }}</view
          >
        </scroll-view>
      </view>
      <view class="second_warp">
        <scroll-view :scroll-y="true" class="scroll-Y">
          <view></view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<script>
import ecom from "@/utils/ecom.js";
export default {
  data() {
    return {
      cursecond: "s0",
      showcalender: false,
      showpcker: false,
      listGoodsType: [],
      listGoods: [],
    };
  },
  onLoad() {
	ecom.getAllInfoProducttype().then(res => {
		let listFirst = res.data.rows.filter(item => item.parentId == "0")
		for(let first of listFirst){
			let listSecond = res.data.rows.filter(item => item.parentId == first.id)
			first.children = listSecond
		}
		this.listType = listFirst
	})
    this.init();
  },
  onReady(){
	 setTimeout(() =>{
		let objObserve = uni.createIntersectionObserver(this,{
			observeAll:true
		})
		objObserve.relativeTo(".second_warp",{top: -10})
		objObserve.observe(".secondname",(res) =>{
			console.log(4444,res)
			if(res.intersectionRatio > 0 && res.boundingClientRect.top < 500){
				this.leftid = res.id
			}
		})
	 },500)
  },
  methods: {
    init() {
      ecom.getAllInfoProducttype({}).then((res) => {
        this.listGoodsType = res.data.rows.filter(
          (item) => item.parentId == "0"
        );
        console.log(this.listGoodsType);
      });
    },
  },
};
</script>

<style lang="scss">
.category {
  .saech_warp {
	height: 25px;
  }
  .container {
    background-color: #fff;
    display: flex;
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
}
</style>