<template>
	<view>
		<rich-text class="pro-detail" :nodes="content"></rich-text>
	</view>
</template>

<script>
	// #ifdef MP-ALIPAY
	import aliParse from 'mini-html-parser2';
	// #endif
	
	export default {
		data() {
			return {
				content: ''
			};
		},
		onShow() {
			let richtext = uni.getStorageSync('__rich_text');
			
			// #ifdef MP-ALIPAY
			aliParse(richtext, (err, nodes) => {
				if (!err) {
					this.content = nodes;
				}
			});
			// #endif
			
			// #ifndef MP-ALIPAY
			this.content = richtext;
			// #endif
		},
	}
</script>

<style lang="scss">
	.pro-detail {
		width: 100%;
		overflow: hidden;
		-webkit-touch-callout: none;

		img {
			width: 100%;
			max-width: 100%;
			overflow: hidden;
		}
	}
	
	/deep/ .__rich_text { padding-bottom: 20px; }
	/deep/ .__rich_text p, /deep/ .use-p{line-height: 26px;text-indent: 30px;margin-top: 16px;padding: 0 16px;}
</style>
