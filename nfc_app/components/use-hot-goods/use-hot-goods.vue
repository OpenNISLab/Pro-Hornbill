<template>
	<!-- 热卖产品 -->
	<view class="use-hot-goods">
		<!-- 列表标题 -->
		<use-list-title v-if="hotDatas && hotDatas.length > 0" class="title" :title="title" size="32" fwt="600" :type="titleType" color="#333" iconfont="iconremen" @goto="hot"></use-list-title>
		
		<view class="list dflex-b dflex dflex-wrap-w w-full">
			<view v-for="(item, idx) in hotDatas" :key="idx" class="item pos-r border-radius padding-bottom-sm" @click="toDetail(item)">
				<view class="image-wrapper"><image mode="widthFix" class="border-radius-sm" lazy-load :src="item.img"></image></view>
				<text class="title clamp padding-sm">{{ item.name }}</text>
				<view class="padding-left-sm">
					<text class="price">{{ item.is_vip === '是' ? item.vip_price / 100 : item.price / 100 }}</text>
					<text v-if="item.is_vip === '是' ? item.price / 100 : item.market_price / 100" class="m-price">{{ item.is_vip === '是' ? item.price / 100 : item.market_price / 100 }}</text>
				</view>
				
				<view v-if="item.is_vip === '是'" class="use-tag pos-a pos-top bg-base">会员价</view>
			</view>
		</view>
		
		<!-- 上拉加载更多 -->
		<use-loadmore :type="loadmoreType"></use-loadmore>
		
		<!-- 尚福瑞版权 -->
		<use-copyright v-if="loadmoreType === 'nomore'"></use-copyright>
	</view>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '热卖产品'
		},
		titleType: {
			type: String,
			default: 'square'
		},
		autoload: {
			type: String,
			default: 'auto'
		},
		datas: {
			type: Array,
			default: () => []
		}
	},
	data() {
		return {
			reqData: {
				page: 1,
				rows: 10,
				orderby: 'sort asc'
			},
			// 加载更多状态
			loadmoreType: 'more',
			hotDatas: []
		};
	},
	watch: {
		datas(){
			this.hotDatas = this.datas;
		}
	},
	created() {
		if(this.autoload === 'auto'){
			this.loadData();
		}
	},
	methods: {
		loadData(type = 'add', loading) {
			if (this.loadmoreType === 'loading') {
				// 防止重复加载
				return;
			}
			
			if (loading == 1 || type == 'refresh') {
				// 从首页开始加载
				this.reqData.page = 1;
			}
			
			// 没有更多直接返回 
			if (type === 'add') {
				if (this.loadmoreType === 'nomore') {
					return;
				}
				// 加载中
				this.loadmoreType = 'loading';
			} else {
				// 更多
				this.loadmoreType = 'more'
			}
			
			this.$db['usemall-goods'].where('state == "销售中" && hot == 1').tolist(this.reqData)
				.then(res => {
					// console.log('usemall-goods',res);
					if(res.code === 200){
						if (loading == 1 || type == 'refresh') {
							this.hotDatas = [];
						}
						
						if (res.datas && res.datas.length > 0) {
							let _datas = [];
							res.datas.forEach((row) => {
								if(row.state === '销售中'){
									_datas.push(row);
								}
							});
							this.hotDatas = [...this.hotDatas, ..._datas];
						
							if (res.datas.length >= this.reqData.rows) {
								this.reqData.page++;
								this.loadmoreType = 'more'
							} else {
								this.loadmoreType = 'nomore'
							}
						} else {
							this.loadmoreType = 'nomore'
						}
					}
				})
		},
		goto() {
			console.log('goto');
			this.$emit('goto', {
				type: 'goto'
			});
		},
		hot() {
			this.$api.togoodslist({hot: 1});
		},
		toDetail(options) {
			uni.setStorage({
				key: '__goods_data',
				data: options
			});
			
			this.$api.togoods({id: options._id});
		}
	}
};
</script>

<style lang="scss">
.use-hot-goods {
	background-color: #f5f5f5;
	margin-left: 3vw;
	margin-right: 3vw;
	
	.list{
		padding: 0 0vw 20rpx;
	}
	
	.item { 
		width: 46vw;
		overflow: hidden;
		margin-top: 2vw;
		background: #fff;

		&:nth-child(2n) {
			margin-left: 1vw;
		}
		&:nth-child(2n + 1) {
			margin-right: 1vw;
		}
	}
	
	.image-wrapper {
		width: 100%;
		height: 320rpx;
		overflow: hidden;
	
		image {
			width: 100%;
			height: 100%;
			opacity: 1;
		}
	}
}
</style>
