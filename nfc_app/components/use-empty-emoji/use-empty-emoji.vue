<template>
	<view v-if="dtype" class="use-empty-container tac" :class="eStyle == 'round' ? 'padding-lr' : ''" :style="{ height: height }">
		<view class="use-empty h-full dflex-c dflex-flow-c" :class="eStyle == 'round' ? 'round border-radius bg-main' : ''">
			<image v-if="imgurl" :src="imgurl"></image>
			<view v-if="tip" class="title padding-sm">{{tip}}</view>
			<view v-if="btnTip" class="no-border use-btn" @click="to">{{btnTip}}</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		eStyle: {
			type: String,
			default: 'square'
		},
		eType: {
			type: String,
			default: 'other'
		},
		tip: {
			type: String,
			default: '暂无数据'
		},
		btnTip: {
			type: [String, Boolean],
			default: '去逛逛'
		},
		btnGoto: {
			type: String,
			default: '/pages/tabbar/home'
		},
		auto: {
			type: Boolean,
			default: !0
		},
		height: {
			type: String,
			default: '100vh'
		}
	},
	computed: {
		dtype: {
			get(){
				console.log('get dtype', arguments);
				let imgobj = this.imgs.find(x => x.type == this.eType);
				this.imgurl = imgobj ? imgobj.url : this.imgurl_dft;
				return this.eType
			},
			set(val){
				console.log('set dtype', arguments);
			}
		}
	},
	data() {
		return {
			imgurl_dft: '/static/images/empty/empty.jpg',
			imgurl: '',
			imgs: [
				{ type: 'cart', url: '/static/images/empty/empty.jpg' },
				{ type: 'search', url: '/static/images/empty/search.jpg' },
				{ type: 'other', url: '/static/images/empty/empty.jpg' }, 
				{ type: 'note', url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7e00db99-ad65-4b9f-a74b-61bccb92b124/bd7c12ab-9570-47c9-bca1-19dd1da5efac.gif' }
			]
		};
	},
	methods: {
		to() {
			this.$emit('to', {
				type: 'to'
			});

			if (this.auto) {
				// 跳转指定页
				uni.switchTab({
					url: this.btnGoto
				})
			}
		}
	}
};
</script>

<style lang="scss">
.use-empty-container{
	.use-empty {
		.round {
			button {
				width: 220rpx;
			}
		}
		image {
			width: 100rpx;
			height: 100rpx;
		}

		.title {
			color: #c0c0c0;
		}

		.use-btn {
			color: #363636;
			background-color: #dcdcdc;
			padding: 12rpx 46rpx;
			display: inline-block;
		}
	}
}
</style>
