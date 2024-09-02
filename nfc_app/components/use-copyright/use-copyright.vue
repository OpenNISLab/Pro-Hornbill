<template>
	<view>
		<!-- #ifndef MP-TOUTIAO -->
		<!-- 尚福瑞版权 -->
		<view class="use-copyright dflex-c padding-lr w-full" @click="to">
			<image class="headimg dflex-c margin-right-sm" src="/static/images/logo.png"></image>
			<view class="dflex fs-xs">
				<text>{{ appslogan }}</text>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
export default {
	props: {
		
	},
	computed: {
		appslogan() {
			return this.$config.appslogan;
		}
	},
	data() {
		return {
			
		};
	},
	methods: {
		to() {
			this.$emit('to', {
				type: 'to'
			});
		}
	}
};
</script>

<style lang="scss">
.use-copyright {
	height: 160rpx;
}

.use-copyright {
	.headimg {
		width: 34rpx;
		height: 34rpx;
	}
	
	text {
		color: #c0c0c0;
	}
}
</style>
