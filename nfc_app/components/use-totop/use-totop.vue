<template>
	<view class="use-totop fixed-top animated" @tap.stop="totop" :class="{ 'fade-in': visible, 'dn': !visible, 'margin-b-50': type == 'tabbar', 'safe-area-inset-bottom-plus': safeAreaInsetBottom }"
		:style="{ bottom: bottom + 'rpx', right: right + 'rpx' }">
		<text class="iconfont iconzhiding"></text>
	</view>
</template>

<script>
	export default {
		props: {
			top: {
				type: Number,
				default: 100
			},
			right: {
				type: String,
				default: '30'
			},
			bottom: {
				type: String,
				default: '30'
			},
			duration: {
				type: Number,
				default: 120
			},
			scrollTop: {
				type: Number,
				default: 0
			},
			type: {
				type: String,
				default: 'normal'
			},
			safeAreaInsetBottom: {
				type: Boolean,
				default: false
			}
		},
		watch: {
			scrollTop(nv, ov) {
				this.s_top = nv;
				this.change();
			}
		},
		data() {
			return {
				s_top: 0,
				visible: false
			};
		},
		methods: {
			totop() {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: this.duration
				})

				this.$emit('to', {
					type: 'to',
					scrollTop: this.s_top
				});
			},
			change(scrollTop) {
				this.s_top = scrollTop;
				if (this.s_top > this.top) {
					if (!this.visible) this.visible = true;
				} else {
					if (this.visible) this.visible = false;
				}
			}
		}
	}
</script>

<style lang="scss">
	.use-totop {}
	
	.margin-b-50 {
		/* #ifdef H5 */
		margin-bottom: calc(env(safe-area-inset-bottom) + 50px);
		/* #endif */
	}
</style>
