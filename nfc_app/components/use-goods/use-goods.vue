<template>
	<!-- 猜你喜欢 -->
	<view class="use-goods">
		<!-- 标题 -->
		<view class="padding-top">
			<view class="dotted-line">{{title}}</view>
		</view>

		<view v-if="goodsDatas && goodsDatas.length > 0" class="use-list margin-top-sm w-full">
			<view class="margin-right-xs wpre-50 overflow-hidden">
				<view v-for="(item, index) in goodsLeftDatas" :key="index"
					class="pos-r bg-main w-full margin-bottom-sm border-radius-sm padding-bottom-sm use-hover"
					@click="toDetail(item)">
					<view class="image-wrapper">
						<image mode="aspectFill" :lazy-load="true" :src="item.img"></image>
					</view>
					<text class="clamp padding-sm">{{ item.name }}</text>
					<view class="padding-left-sm">
						<text class="price">{{ item.vip_price / 100 }}</text>
						<text class="m-price">{{ item.price / 100 }}</text>
					</view>

					<view class="use-tag pos-a pos-top bg-base">会员价</view>
				</view>
			</view>
			<view class="margin-left-xs wpre-50 overflow-hidden">
				<view v-for="(item, index) in goodsRightDatas" :key="index"
					class="pos-r bg-main w-full margin-bottom-sm border-radius-sm padding-bottom-sm use-hover"
					@click="toDetail(item)">
					<view class="image-wrapper">
						<image mode="aspectFill" :lazy-load="true" :src="item.img"></image>
					</view>
					<text class="clamp padding-sm">{{ item.name }}</text>
					<view class="padding-left-sm">
						<text class="price">{{ item.vip_price / 100 }}</text>
						<text class="m-price">{{ item.price / 100 }}</text>
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
				default: '猜你喜欢'
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
				this.$db['usemall-goods'].where('state == "销售中" && is_vip == "是"').tolist({
						rows: 30,
						orderby: 'sort asc'
					})
					.then(res => {
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
			toDetail(options) {
				this.$api.togoods({
					id: options._id
				});
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
