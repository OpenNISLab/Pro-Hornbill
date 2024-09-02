<script>
	/**
	 * vuex 管理登陆状态，具体可以参考官方登陆模板示例 
	 */
	import {
		mapState,
		mapMutations
	} from 'vuex';

	import uapi from 'common/common.js';
	import config from 'common/config.js';

	const db = uniCloud.database();

	export default {
		computed: {
		},
		methods: {
			
		},
		onLaunch: function(options) {
			console.log('App Launch', options, config);

		},
		onShow: function(options) {
			// console.log('App Show', options);
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 全局字体图标和公共样式 */
	@import url("/components/iconfont/iconfont.css");
	@import url("/common/common.scss");
</style>
