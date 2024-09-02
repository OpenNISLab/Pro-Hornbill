<template>
	<view>
		<view class="use-header dflex padding-lr-sm w-full" :class="{ 'fixed': fixed, 'bg-main': type == 'white', 'bg-drak': type == 'gray' }">
			<!-- 头部组件 -->
			<view class="use-search dflex-b border-radius-lg padding-lr w-full use-hover" :class="{ 'bg-drak': type == 'white', 'bg-main': type == 'gray' }" @click="search">
				<text>{{ searchTip }}</text>
				<view class="iconfont iconsousuo-01"></view>
			</view>
		</view>
		
		<!-- 头部组件占位符 -->
		<view v-if="fixed && placeholder" class="use-header-placeholder"></view>
	</view>
</template>

<script>
export default {
	props: {
		fixed: {
			type: [Number, Boolean],
			default: false
		},
		placeholder: {
			type: [Number, Boolean],
			default: !0
		},
		searchAuto: {
			type: [Number, Boolean],
			default: !0
		},
		searchTip: {
			type: String,
			default: '搜索关键字'
		},
		type: {
			type: String,
			default: 'white'
		}
	},
	data() {
		return {};
	},
	methods: {
		search() {
			this.$emit('search', {
				type: 'search'
			});

			if (this.searchAuto) {
				// 跳转搜索页
				uni.navigateTo({
					url: '/pages/home/search/search'
				})
			}
		}
	}
};
</script>

<style lang="scss">
.use-header-placeholder {
	height: 100rpx;
}

.use-header {
	height: 100rpx;
}

.use-search {
	height: 70rpx;
	line-height: 70rpx;

	text {
		color: #c0c0c0;
	}

	.iconfont {
		font-size: $font-base + 6upx;
		color: #c0c0c0;
	}
}
</style>
