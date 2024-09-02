<template>
	<!-- 猜你喜欢 -->
	<view class="use-goods">
		<!-- 标题 -->
		<view class="padding-top">
			<view class="dotted-line">{{title}}</view>
		</view>

		<view v-if="goodsDatas && goodsDatas.length > 0" class="use-list margin-top-sm w-full">
			<view class="margin-right-xs wpre-50 overflow-hidden">
				<view v-for="(item, idx) in goodsLeftDatas" :key="idx"
					class="pos-r bg-main w-full margin-bottom-sm border-radius-sm padding-bottom-sm use-hover"
					@click="toDetail(item)">
					<view class="image-wrapper">
						<image :src="item.img" mode="aspectFit" class="border-radius-sm" lazy-load></image>
					</view>
					<text class="clamp padding-sm">{{ item.name }}</text>
					<view class="padding-left-sm">
						<text class="price">{{ item.price / 100 }}</text>
						<text class="m-price">{{ item.market_price / 100 }}</text>
					</view>

					<view class="use-tag pos-a pos-top bg-base">会员价</view>
				</view>
			</view>
			<view class="margin-left-xs wpre-50 overflow-hidden">
				<view v-for="(item, idx) in goodsRightDatas" :key="idx"
					class="pos-r bg-main w-full margin-bottom-sm border-radius-sm padding-bottom-sm use-hover"
					@click="toDetail(item)">
					<view class="image-wrapper">
						<image :src="item.img" mode="aspectFit" class="border-radius-sm" lazy-load></image>
					</view>
					<text class="clamp padding-sm">{{ item.name }}</text>
					<view class="padding-left-sm">
						<text class="price">{{ item.price / 100 }}</text>
						<text class="m-price">{{ item.market_price / 100 }}</text>
					</view>

					<view class="use-tag pos-a pos-top bg-base">会员价</view>
				</view>
			</view>
		</view>

		<!-- 空白页 -->
		<use-empty v-if="empty" e-style="round" tip="无商品数据" height="66vh"></use-empty>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '商品列表'
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
				loaded: false,
				goodsDatas: [],
				goodsLeftDatas: [],
				goodsRightDatas: [],
			};
		},
		computed: {
			empty() {
				return this.loaded && this.goodsDatas.length <= 0;
			}
		},
		watch: {
			datas() {
				this.goodsDatas = this.datas;
				this.workData(this.datas);
			}
		},
		created() {
			if (this.autoload === 'auto') {
				this.loadData();
			}
		},
		methods: {
			loadData() {
				uni.showLoading({
					title: '请求中'
				})
				this.$db['usemall-goods'].where('state == "销售中"').tolist({
						rows: 30,
						orderby: 'sort asc'
					})
					.then(res => {
						uni.hideLoading();
						this.loaded = true;
						// console.log('usemall-goods',res);
						if (res.code === 200) {
							this.goodsDatas = res.datas;
							this.workData(res.datas);
						}
					})
			},
			workData(datas) {
				let leftDatas = [];
				let rightDatas = [];
				datas.forEach((x, i) => {
					if (i % 2 == 0) {
						leftDatas.push(x);
						return;
					}

					rightDatas.push(x);
				});

				this.goodsLeftDatas = [...this.goodsLeftDatas, ...leftDatas];
				this.goodsRightDatas = this.goodsRightDatas.concat(rightDatas);
			},
			to() {
				this.$emit('to', {
					type: 'to'
				});
			},
			toDetail(res) {
				this.$emit('change', res);
			}
		}
	};
</script>

<style lang="scss">
	.use-goods {
		background-color: #f5f5f5;

		.use-list {
			display: flex;
		}

		.image-wrapper {
			overflow: hidden;

			image {
				width: 100%;
				max-height: 300rpx;
				opacity: 1;
			}
		}
	}
</style>
