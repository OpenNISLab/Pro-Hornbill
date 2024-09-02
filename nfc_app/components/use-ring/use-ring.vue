<template>
	<view class="use-ring pos-r">
		<view class="circle-ring pos-r">
			<view class="circle-left" :style="circleLeftCss" @transitionend="leftSuccess"></view>
			<view class="circle-right" :style="circleRightCss" @transitionend="rightSuccess"></view>
			<view class="circle-bottom-left" :style="{ 'background': activeColor }"></view>
			<view class="circle-bottom-right" :style="{ 'background': activeColor }"></view>
		</view>
		<view class="pos-a pos-tl-c ft-white">
			<slot />
		</view>
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
				default: '#ffbc49'
			},
			baseColor: {
				type: String,
				default: '#fff'
			}
		},
		data() {
			return {
				circleLeftCss: '',
				circleRightCss: '',
				type: 'right'
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
				
				const percent = val / total || 0;
				
				if (percent <= 0.5) {
					this.circleRightCss = `transform: rotate(${percent * 360}deg)`;
					this.type = 'right';
				} else {
					this.circleRightCss =
						`transform: rotate(180deg); transition: opacity 0s step-end 1s, transform 1s linear; opacity: 0`;
					this.circleLeftCss =
						`transition: transform ${(percent - 0.5) / 0.5}s linear 1s; transform: rotate(${percent * 360 - 180}deg)`;
					this.type = 'left';
				}
			},
			leftSuccess() {
				if (this.type == 'left') {
					this.$emit('success');
				}
			},
			rightSuccess() {
				if (this.type == 'right') {
					this.$emit('success');
				}
			}
		}
	}
</script>

<style lang="scss">
	.use-ring {
		
		.circle-ring {
			width: 220rpx;
			height: 220rpx;
			
			-webkit-mask: radial-gradient(transparent 96rpx, #fff 98rpx);
			overflow: hidden;
			border-radius: 50%;
			
			view {
				width: 50%;
				height: 100%;
				position: absolute;
			}
		}
		
		.circle-left {
			background: #fff;
			transform-origin: 100% 50%;
			left: 0;
			z-index: 0;
		}

		.circle-right {
			background: #fff;
			transition: transform 1s linear;
			transform-origin: 0% 50%;
			right: 0;
			z-index: 2;
		}

		.circle-bottom-left {
			background: #ffbc49;
			left: 0;
			z-index: -1;
		}

		.circle-bottom-right {
			background: #ffbc49;
			right: 0;
			z-index: 1;
		}
	}
</style>
