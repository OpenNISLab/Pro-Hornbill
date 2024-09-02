<template>
	<!-- 默认使用系统头部，如需开启自定义头部配置
		1. pages.json -> globalStyle -> navigationStyle: custom 
		2. common -> config -> navbar: custom 
	-->
	<view v-if="iShow">
		<view class="use-navbar w-full pos-t-full" style="padding-bottom: 6px;" :style="{ 'background': bgColor, 'opacity': bgOpacity }" :class="{ 'fixed': fixed, 'bg-main': type == 'white', 'bg-drak': type == 'gray' }">
			<view class="w-full" :style="{ height: menuButtonInfo.top + 'px' }"></view>

			<!-- 头部导航 -->
			<view class="dflex-b border-radius-lg padding-lr w-full use-hover" :style="{ height: navbarTitleHeight + 'px' }">
				<view class="wpre-30 dflex">
					<view v-if="back" class="iconfont fwbd" :class="leftIconfont" @click="toback"></view>
					<block v-else>
						<slot name="left" />
					</block>
				</view>
				<view>
					<block v-if="type == 'custom'">
						<slot />
					</block>
					<block v-else>
						<text class="fwbd fs">{{ apptitle }}</text>
					</block>
				</view>
				<view class="wpre-30">
					<slot name="right" />
				</view>
			</view>
		</view>

		<!-- 头部组件占位符 -->
		<view v-if="fixed && placeholder" :style="{ height: navbarHeight + 'px' }"></view>
	</view>
</template>

<script>
	export default {
		props: {
			fixed: {
				type: [Number, Boolean],
				default: !0
			},
			placeholder: {
				type: [Number, Boolean],
				default: !0
			},
			back: {
				type: Boolean,
				default: !0
			},
			title: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: 'gray'
			},
			leftIcon: {
				type: String,
				default: 'iconfanhui'
			},
			bgColor: {
				type: String,
				default: '#f5f5f5'
			},
			bgOpacity: {
				type: Number,
				default: .97
			},
			show: {
				type: Boolean,
				default: null
			}
		},
		data() {
			return {
				apptitle: ''
			};
		},
		watch: {
			title (nv, ov) {
				this.apptitle = nv;
			}
		},
		computed: {
			menuButtonInfo() {
				return this.$api.navbar;
			},
			navbarTitleHeight() {
				return this.$api.navbar.height;
			},
			navbarHeight() {
				if (this.iShow) {
					return this.$api.navbar.height + 12;
				}
				
				return 0;
			},
			leftIconfont() {
				const pageArrs = getCurrentPages();
				
				if (!pageArrs.length) return '';
				
				if (pageArrs[pageArrs.length - 1].route.indexOf('/tabbar/') !== -1) {
					return '';
				}
				
				if (pageArrs.length < 2) {
					return 'iconshouye- fs-xl';
				}
				
				return this.leftIcon
			},
			config() {
				return this.$config;
			},
			iShow() {
				return this.show !== null ? this.show : this.config.navbar == 'custom';
			}
		},
		methods: {
			toback() {
				if (getCurrentPages().length < 2) {
					this.$api.tohome();
					return;
				}
				
				uni.navigateBack({
					delta: 1
				});
			},
		},
		created() {
			this.apptitle = this.$config.appname;
		}
	};
</script>

<style lang="scss">
	.use-navbar-placeholder {
		min-height: 44px;
	}

	.use-navbar {
		min-height: 44px;
		z-index: 99999;
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
