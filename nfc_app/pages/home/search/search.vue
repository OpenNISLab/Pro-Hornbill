<template>
	<view class="margin-sm">
		<use-navbar title="搜索"></use-navbar>
		
		<!-- 搜索内容区 -->
		<view class="search-area margin-bottom-sm pos-r w-full dflex-b border-radius-big margin-top-sm">
			<view class="dflex-c flex1">
				<view class="icon-search pos-a">
					<text class="iconfont iconsousuo-01"></text>
				</view>
				<input type="text" class="padding-left w-full padding-tb-xs  box-sizing-b" maxlength="20" 
					 style="border-top-right-radius: 0;border-bottom-right-radius: 0;" focus
					placeholder="请输入关键字" @confirm="search" v-model="keyword" />
			</view>
		
			<view class="bg-base padding-tb-16 padding-lr-lg" @click="search">搜索</view>
		</view>
		
		<!-- 搜索历史区 -->
		<view class="padding padding-bottom-xs pos-r w-full margin-bottom-sm bg-main border-radius" v-if="historyDatas && historyDatas.length > 0">
			<view class="padding-bottom-sm dflex-b">
				<view class="dflex margin-left-sm">
					<text class="fwb ft-dark">搜索历史</text>
				</view>
				<view class="iconfont iconlajitong-01 pos-a pos-right dflex-c ft-dark padding" @click="clear"></view>
			</view>
			<view class="dflex dflex-wrap-w">
				<view
					class="item margin-right-sm margin-bottom-sm dflex bg-drak border-radius-lg padding-tb-xs padding-lr"
					v-for="(item,index) in historyDatas" :key="index" @click="search('history', item)">
					<text class="clamp" style="max-width: 25vw;">{{item.keyword}}</text>
				</view>
			</view>
		</view>
		<!-- 热门搜索区 -->
		<view class="padding w-full bg-main padding-bottom-xs border-radius" v-if="hotDatas && hotDatas.length > 0">
			<view class="padding-bottom-sm dflex-b">
				<view class="dflex margin-left-sm">
					<text class="fwb ft-dark">热门搜索</text>
				</view>
			</view>
			<view class="dflex dflex-wrap-w">
				<view
					class="item margin-right-sm margin-bottom-sm dflex bg-drak border-radius-lg padding-tb-xs padding-lr"
					v-for="(item, index) in hotDatas" :key="index" @click="search('hot', item)">
					<text>{{item.keyword}}</text>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	const _history = 'usemall-search-history'
	const _hot = 'usemall-search-hot'
	import { mapState } from 'vuex';
	export default {
		computed: {
			...mapState(['islogin'])
		},
		data() {
			return {
				// 搜索关键字
				keyword: '',

				// 历史搜索
				historyDatas: [],
				// 热门搜索
				hotDatas: [],
			};
		},
		onShow() {
			// 初始化
			this.keyword = '';

			// 加载数据
			this.loadData();
		},
		methods: {
			loadData() {
				if (this.islogin) {
					this.$db[_history].where('create_uid == $env.uid').tolist({ orderby: 'last_modify_time desc' })
						.then(res => {
							if (res.code === 200) {
								this.historyDatas = res.datas
							}
						})
				}
				
				this.$db[_hot].tolist({orderby: 'search_cnt desc'})
					.then(res => {
						if (res.code === 200) {
							this.hotDatas = res.datas
						}
					})
			},

			// 搜索
			search(type, res) {
				switch (type) {
					case 'history':
						this.$api.togoodslist({
							keyword: res.keyword
						});
						break;
					case 'hot':
						this.$api.togoodslist({
							sid: res._id
						});
						break;
					default:
						this.$api.togoodslist({
							keyword: this.keyword
						});
						break;
				}
			},
			// 清空搜索历史
			clear() {

				let _this = this;

				uni.showModal({
					// title: '提示',
					content: '清空搜索历史',
					success: function(res) {
						if (res.confirm) {
							_this.$db[_history].where('create_uid == $env.uid').remove()
								.then(res => {
									if (res.code === 200) {
										_this.historyDatas = [];
										return;
									}
									_this.$api.msg(res.msg)
								})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	};
</script>

<style lang="scss">
	page {
		background: #f5f5f5;
	}
	
	.search-area {
		
		input {
			padding-left: 80rpx;
			height: 76rpx;
			line-height: 76rpx;
			background-color: #fff;
		}
		
		.icon-search {
			top: 50%;
			left: 30rpx;
			transform: translate(0, -50%);
			z-index: 1;
		
			text {
				color: #c0c0c0;
			}
		}
	}
</style>
