<template>
	<view class="use-loadmore padding-tb-sm dflex-c">
		<view v-if="type !== 'nomore'" class="iconfont iconxiangqing animated rotate margin-right-sm ft-base"></view>
		<text class="ft-dark">{{ tip || tip_defaults[type] }}</text>
	</view>
</template>

<script>
export default {
	props: {
		type: {
			type: String,
			default: "more"
		},
		tip: {
			type: String,
			default: ""
		},
		defaults: {
			type: Object,
			default () {
				return {}
			}
		} 
	},
	data() {
		return {
			tip_defaults: {}
		};
	},
	watch: {
		defaults(nv, ov) {
			this.tip_defaults = nv;
		}
	},
	methods: {
		
	},
	created() {
		this.tip_defaults = {
			more: '上拉显示更多',
			loading: this.$config.appslogan,
			nomore: '已经到底了'
		};
	}
};
</script>

<style lang="scss">
.use-loadmore {}
</style>
