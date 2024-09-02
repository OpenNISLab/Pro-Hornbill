import Vue from 'vue'
import App from './App'

import $config from './common/config.js'
import $api from './common/common.js'
import $db from './common/db.js'
import $func from './common/func.js'
import $store from './common/store.js'



// #ifdef H5 || MP-360
// import $iscroll from './common/iscroll.js'
// Vue.prototype.$iscroll = $iscroll

uni.canIUse = function(name) {
	return name in uni;
}
// h5 下显示自定义头部
$config.navbar = 'custom';
// #endif

// #ifdef H5-WEIXIN
// h5 微信公众号下取消头部
$config.navbar = 'default';

// JS-SDK说明文档 https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html
import $h5wx from './common/h5wx.js';
Vue.prototype.$h5wx = $h5wx;
/**
 * h5wx 使用方法
 * 一. 
 * 	1.1 在页面 onLoad() 调用 this.$h5wx.init({ url: location.href.split('#')[0] }, (wx) => { }) 
 * 	1.2 在 callback 回调函数中使用 wx. 原官方文档调用方式
 * 
 * 二. 
 * 	2.1 除了在页面 onLoad() 调用 this.$h5wx.init({ url: location.href.split('#')[0] }); 初始化接口
 * 	2.2 其他接口与官方JS-SDK文档一致将 	wx. -> this.$h5wx.
 * 	2.3 如下调用自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
 * 		wx.updateAppMessageShareData({}) -> this.$h5wx.updateAppMessageShareData({})
 */ 
console.log('$h5wx', $h5wx);
// #endif

// 测试阶段
$config.debug = process.env.NODE_ENV === 'development';

if (!$config.debug) {
	// 取消日志打印功能
	console.log = () => { }
}

// 注册当前环境 
$api.register_env((env) => {
	Vue.prototype.$env = env;
});

Vue.config.productionTip = false

Vue.prototype.$config = $config
Vue.prototype.$api = $api
Vue.prototype.$db = $db
Vue.prototype.$dbcmd = uniCloud.database().command;
Vue.prototype.$func = $func
Vue.prototype.$store = $store

App.mpType = 'app'

const app = new Vue({
	...App
})

app.$mount()
