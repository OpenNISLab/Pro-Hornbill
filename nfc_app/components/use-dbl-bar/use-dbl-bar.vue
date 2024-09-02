<template>
	<view class="use-dbl-bar pos-r" style="height: 18rpx;">

		<view class="pos-a bg-base border-radius animated-all" style="left:0; z-index: 1;height: 18rpx;" :style="barLeftCss" @transitionend="leftSuccess"></view>
		<view class="pos-a bg-warn border-radius animated-all" style="right:0; z-index: 2;height: 18rpx;" :style="barRightCss" @transitionend="rightSuccess"></view>
		
		<view class="pos-a bg-base border-radius-c animated-all" style="top: 50%; transform: translate(-50%, -50%); width: 38rpx; height: 38rpx; border: 3px solid #fff;z-index: 3;" :style="barTipCss"></view>
		<view class="pos-a bg-base border-radius-xs dflex-c fs-xxs animated-all" style="padding: 2rpx 4rpx; min-width: 60rpx; top: -22rpx;transform: translate(-50%, -100%);" :style="barTipCss">
			<text>{{value}}</text>
		</view>
		<view class="triangle-b pos-a animated-all" style="top: 6rpx;transform: translate(-50%, -50%); z-index: 4;" :style="barTipCss"></view>

	</view>
</template>

<script>
	export default {
		props: {
			value: {
				type: [Number, String],
				default: 0
			},
			max: {
				type: [Number, String],
				default: 100
			},
			activeColor: {
				type: String,
				default: '#ff6a6c'
			},
			baseColor: {
				type: String,
				default: '#ffbc49'
			}
		},
		watch:{
			value: function() {
				this.draw()
			}
		},
		data() {
			return {
				barLeftPre: '0',
				barTipCss: 'left: 0',
				barLeftCss: 'width: 0',
				barRightCss: 'width: 0'
			}
		},
		methods: {
			draw(val, total) {
				if (val !== 0) {
					val = val || this.value;
				}

				if (total !== 0) {
					total = total || this.max;
				}

				const percent = (val / total * 100).toFixed(2) || 0;
				console.log('percent', percent, total, val)
				this.barLeftPre = percent;
				
				this.barLeftCss = `width: ${percent}%;`;
				this.barRightCss = `width: ${100 - percent}%;`;
				
				this.barTipCss = `left: ${percent}%;`;
			},
			leftSuccess() {
				this.$emit('left-success');
			},
			rightSuccess() {
				this.$emit('right-success');
			}
		},
		mounted() {
			this.draw();
		}
	}
</script>

<style lang="scss">
	.use-dbl-bar {}
</style>
