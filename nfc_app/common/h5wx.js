'use strict';

import $config from './config.js';
import $func from './func.js';
import $api from './common.js';

const jweixin = require('jweixin-module');
const signUrls = [];
// 初始化
jweixin.init = (req, callback) => {
	
	if (signUrls.includes(req.url)) {
		// console.log('signUrls url 已签名，直接触发回调', req.url, signUrls);
		if (typeof callback === 'function') {
			callback(jweixin);
		}
		return;
	}
	
	signUrls.push(req.url);
	
	// 获取 JS-SDK 签名
	$func.usemall.call('wxservice/getJssdkSignature', {
		url: req.url
	}).then(res => {
		if ($config.debug) {
			console.log('wxservice/getJssdkSignature res', res);
		}
		
		if (res.code == 200) {
			req.jsApiList = req.jsApiList || [];
			
			const h5wxConfig = {
				// 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
				// debug: $config.debug, 
				debug: false, 
				// 必填，公众号的唯一标识
				appId: '', 
				// 必填，生成签名的时间戳
				timestamp: 0, 
				// 必填，生成签名的随机串
				nonceStr: '', 
				// 必填，签名
				signature: '',
				// 必填，需要使用的 JS 接口列表
				jsApiList: [
					'updateAppMessageShareData',
					'updateTimelineShareData',
					...req.jsApiList
				]
			};
			const cfg = {
				...h5wxConfig,
				...res.datas
			};
			// console.log('h5wx cfg', cfg);
			// 通过 config 接口注入权限验证配置
			jweixin.config(cfg);
			return;
		}
		
		$api.msg(res.msg);
	})
	
	// config信息验证后会执行 ready 方法
	jweixin.ready(() => {
		if ($config.debug) {
			console.log('jweixin ready', arguments);
		}
		
		if (typeof callback === 'function') {
			callback(jweixin);
		}
	});
	// config信息验证失败会执行 error 函数
	jweixin.error(() => {
		if ($config.debug) {
			console.log('jweixin error', arguments);
		}
	})
}

const h5wx = new Proxy({}, {
	get: (target, key) => {
		try {
			return jweixin[key];
		} catch(e) {
			console.log('h5wx err', e);
		}
	}
});

export default h5wx;
