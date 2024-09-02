'use strict';

let config = {
	// 自定义头部 custom: 自定义，default: 系统默认
	navbar: 'default',
	debug: !0,
	version: '2.3.6',			// 版本号
	appname: 'Hornbill',			// 应用名称
	appabbr: '尚福瑞',			// 简称
	appslogan: '尚福瑞 · 让开发更简单',
	pcUrl: 'https://www.shang77.com',
	
	route: {
		home: '/pages/tabbar/home',
		login: '/pages/login/login',
		search: '/pages/home/search/search',
		order: '/sub-user/pages/order/order',
		pay: '/sub-goods/pages/pay/pay',
		goods: '/sub-goods/pages/detail',
		goodslist: '/sub-goods/pages/list'
	},
	provider: '',
	provider_names: {
		'weixin': '微信',
		'qq': 'QQ',
		'alipay': '支付宝',
		'baidu': '百度',
		'toutiao': '头条',
	},
	
	const: {
		__app: '__app',
		__member: '__member',
		__access_token: 'USE_ACCESS_TOKEN',
		__sign_time: 'usemall-sign-time'
	},
	
};

export default config