<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="weburl"></web-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#ff6a6c'
					}
				},
				// 路径地址
				weburl: ''
			}
		},
		onLoad(res){
			this.weburl = res.url;
			
			uni.setNavigationBarTitle({
			    title: `${this.$config.appabbr} ${res.title || ''}`
			});
		}
	}
</script>

<style lang="scss">
</style>
