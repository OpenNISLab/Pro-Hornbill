'use strict';

import $config from './config.js'

let menuButtonInfo = {
	top: 6,
	width: 0,
	height: 30
};
// #ifdef MP-WEIXIN
menuButtonInfo = uni.getMenuButtonBoundingClientRect();
// #endif

// #ifdef H5
menuButtonInfo.top = 6;
// #endif

// #ifdef H5-WEIXIN
menuButtonInfo.top = 6;
// #endif


class Common {
	constructor(arg) {
		this.navbar = menuButtonInfo;
		this.menuButtonInfo = menuButtonInfo;
		this.navbarTitleHeight = menuButtonInfo.height;
		this.navbarHeight = menuButtonInfo.top + menuButtonInfo.height + 6;
		
		console.log('menuButtonInfo', menuButtonInfo);
	}

	/**
	 * @description 日期格式化
	 */
	format(date, fmt) {
		if (typeof date === 'string') {
			date = date.replace(/\.|\-/g, '/');
		}
		if (typeof date !== 'object') {
			date = new Date(date);
		}

		fmt = fmt || 'yyyy-MM-dd hh:mm:ss'
		let o = {
			"M+": date.getMonth() + 1, //月份   
			"d+": date.getDate(), //日   
			"h+": date.getHours(), //小时   
			"m+": date.getMinutes(), //分   
			"s+": date.getSeconds(), //秒
			"q+": Math.floor((date.getMonth() + 3) / 3), //季度
			"S": date.getMilliseconds() //毫秒
		};
		if (/(y+)/.test(fmt))
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (let k in o)
			if (new RegExp("(" + k + ")").test(fmt))
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k])
					.length)));
		return fmt;
	}

	format_price(_number, _sep) {
		_number = typeof _number != "undefined" && _number > 0 ? _number + '' : "";
		if (_number.indexOf('.') != -1) {
			_number = _number.split('.')[0];
		}
		_number = _number.replace(new RegExp("^(\\d{" + (_number.length % 3 ? _number.length % 3 : 0) +
				"})(\\d{3})", "g"),
			"$1 $2").replace(/(\d{3})+?/gi, "$1 ").trim()
		if (typeof _sep != "undefined" && _sep != " ") {
			_number = _number.replace(/\s/g, _sep);
		}
		return _number;
	}

	get_price_decimal(_price) {
		_price = _price + '';

		if (_price.indexOf('.') != -1) {
			return '.' + _price.split('.')[1];
		} else {
			_price = Math.random(2).toFixed(2);
		}

		return this.get_price_decimal(_price);
	}
	
	
	/**
	 * @description 数值格式化
	 */
	format_number(number) {
		try{
			number = parseFloat(number);
			if (isNaN(number)) return 0;
			
			if (number > 10000 * 1000) {
				return (number / (10000 * 10000)).toFixed(1) + '亿';
			}
			
			if (number > 10000) {
				return (number / (10000 * 1)).toFixed(1) + '万';
			}
			 
			 return number;
		} catch(e) {
			return number;
		} 
	}
	
	/**
	 * @description float 格式化，防止 js 精度丢失
	 */
	format_float(number) {
		number = parseFloat(number);
		if (isNaN(number)) return 0;
		
		number = parseInt((number * 100).toFixed(2));
		
		return number / 100;
	}
	
	/**
	 * @description float 格式化，防止 js 精度丢失
	 */
	format_int(number) {
		number = parseFloat(number);
		if (isNaN(number)) return 0;
		
		number = parseInt(number.toFixed(0));
		
		return number;
	}
	
	/**
	 * @description 全球唯一 guid
	 */
	guid() {
		return (this.__s4() + this.__s4() + "-" + this.__s4() + "-" + this.__s4() + "-" + this.__s4() + "-" + this
			.__s4() +
			this.__s4() + this.__s4());
	}
	__s4() {
		return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}

	/**
	 * @description 消息提示 toast
	 */
	msg(title, duration = 1500, mask = false, icon = 'none') {
		if (!title) return;
		if (typeof title !== 'string') title = JSON.stringify(title);

		uni.showToast({
			title,
			duration,
			mask,
			icon
		});
	}

	/**
	 * @description 消息提示 alert
	 */
	alert(content, callback) {
		if (typeof content !== 'string') content = JSON.stringify(content);
		
		uni.showModal({
			// title: '提示',
			content: content,
			showCancel: false,
			success(res) {
				if (res.confirm) {
					if (typeof callback === 'function') {
						callback();
					}

				} else if (res.cancel) {}
			}
		})
	}

	/**
	 * @description 获取路径参数
	 */
	get_params(data) {
		let params = '';
		if (typeof data === 'object') {
			for (let _ in data) {
				params += '&' + encodeURIComponent(_) + '=' + encodeURIComponent(data[_]);
			}
			params = '?' + params.slice(1);
		} else if (typeof data === 'string') {
			if (data.indexOf('?') != -1) params = data;
			else params = '?' + data;
		} else {
			params = data;
		}

		return params;
	}

	/**
	 * @param {Object} url路径
	 * @description 获取路径参数对象
	 */
	request(url) {
		var href = decodeURIComponent(url || location.href).split('#')[0];
		if (href.indexOf('?') == -1) return {};

		var params = href.split('?')[1];
		if (params === "") return {};

		params = params || '';
		var obj = {};

		if (params.indexOf('&') <= -1) {
			obj[params.split('=')[0]] = params.split('=')[1];
			return obj;
		}

		var arr = params.split('&'),
			len = arr.length,
			i = 0;

		for (i = 0; i < len; i++) {
			if (arr[i] != "") {
				obj[arr[i].split('=')[0]] = arr[i].split('=')[1];
			}
		}

		return obj;
	}

	/**
	 * @description 去除两端空格
	 * */
	trim(str) {
		return str.replace(/\s+/g, "");
	}

	/**
	 * @description 注册当前环境
	 * */
	register_env(callback) {
		let _this = this;
		uni.getSystemInfo({
			success(sis) {
				let env = {
					platform: ''
				};

				// #ifdef MP-WEIXIN || MP-QQ || MP-BAIDU || MP-KUAISHOU
				if (uni.canIUse('getAccountInfoSync')) {
					{
						const accountInfo = uni.getAccountInfoSync();
						if (accountInfo && accountInfo.miniProgram) {
							env.appid = accountInfo.miniProgram.appId;
						}
					}
				}
				// #endif

				env.brand = sis.brand;
				env.language = sis.language;
				env.model = sis.model;
				env.platform = sis.platform;
				env.screenHeight = sis.screenHeight;
				env.screenWidth = sis.screenWidth;
				env.statusBarHeight = sis.statusBarHeight;
				env.system = sis.system;
				env.version = sis.version;
				env.windowHeight = sis.windowHeight;
				env.windowWidth = sis.windowWidth;
				env.pixelRatio = sis.pixelRatio;
				env.pixelRatio = sis.pixelRatio;
				env.mobileType = sis.platform;
				env.is_mp = false;
				env.is_wx = false;
				env.is_h5 = false;
				env.is_app = false;

				// 计算底部安全区域距离
				env.safeBottom = sis.screenHeight - sis.safeArea.height - env.statusBarHeight;
				// #ifndef H5
				if (env.safeBottom == 0) env.safeBottom = 12;
				// #endif
				
				// #ifdef MP-WEIXIN
				env.platform = "weixin";
				env.platform_name = "微信";
				env.is_mp = true;
				env.is_wx = true;
				// #endif
				// #ifdef MP-QQ
				env.platform = "qq";
				env.platform_name = "QQ";
				env.is_mp = true;
				env.app_name = sis.AppPlatform;
				// #endif
				// #ifdef MP-ALIPAY
				env.platform = "alipay";
				env.platform_name = "支付宝";
				env.is_mp = true;
				env.app_name = sis.app;
				// #endif
				// #ifdef MP-BAIDU
				env.platform = "baidu";
				env.platform_name = "百度";
				env.is_mp = true;
				env.app_name = sis.host;
				// #endif
				// #ifdef MP-TOUTIAO
				env.platform = "toutiao";
				env.platform_name = "头条";
				env.is_mp = true;
				env.app_name = sis.appName;
				// #endif					
				// #ifdef MP-360
				env.platform = "360";
				env.platform_name = "360";
				env.is_h5 = true;
				env.app_name = "360小程序";
				// #endif
				// #ifdef H5
				env.platform = "h5";
				env.platform_name = "h5";
				env.is_h5 = true;
				// #endif
				// #ifdef H5-WEIXIN
				env.platform = "h5Weixin";
				env.platform_name = "微信公众号";
				env.is_h5 = true;
				env.is_wx = true;
				// #endif
				// #ifdef APP || APP-NVUE
				env.platform = "app";
				env.platform_name = "app";
				env.is_app = true;
				env.runtime = {};
				for (let key in plus.runtime) {
					if (typeof plus.runtime[key] === 'function') continue;
					env.runtime[key] = plus.runtime[key];
				}
				if (plus.runtime.isApplicationExist({
						pname: 'com.tencent.mm',
						action: 'weixin://'
					})) {
					console.log("微信应用已安装");
				} else {
					console.log("微信应用未安装");
				}
				env.os = {};
				for (let key in plus.os) {
					if (typeof plus.os[key] === 'function') continue;
					env.os[key] = plus.os[key].toLowerCase();
				}
				// #endif

				env.platform_icon = "icon" + env.platform;
				env.sis = sis;

				uni.getNetworkType({
					success(res) {
						console.log(res.networkType);
						env.networkType = res.networkType
					},
					complete() {
						console.log('set storage env', env);
						_this.env = env;
						if (env.statusBarHeight) {
							_this.navbar.top = env.statusBarHeight + 6;
							_this.navbar.statusBarHeight = env.statusBarHeight;
							_this.navbarHeight = _this.navbar.top + menuButtonInfo.height + 6;
							console.log('navbar', _this.navbar);
						}
						
						uni.setStorage({
							key: '__env',
							data: env
						})

						if (typeof callback === 'function') {
							callback(env);
						}
					}
				});
			}
		});

	}

	/**
	 * @description 运行环境
	 * */
	get_env(callback) {
		// return uni.getStorageSync('env');
		uni.getStorage({
			key: '__env',
			success(res) {
				if (typeof callback === 'function') {
					callback(res.data || {});
				}
			}
		})
	}

	dom(a, b) {
		if (arguments.length === 1 && typeof arguments[0] == 'string') {
			if (document.querySelector) {
				return document.querySelector(arguments[0])
			}
		} else if (arguments.length === 2) {
			if (typeof a === 'string')
				a = this.dom(a);
			if (a.querySelector) {
				return a.querySelector(b)
			}
		}
		return a
	}

	domAll(a, b) {
		if (arguments.length === 1 && typeof arguments[0] == 'string') {
			if (document.querySelectorAll) {
				return document.querySelectorAll(arguments[0])
			}
		} else if (arguments.length === 2) {
			if (typeof a === 'string')
				a = this.dom(a);
			if (a.querySelectorAll) {
				return a.querySelectorAll(b)
			}
		}
		return a
	}

	/**
	 * @description 打印 info 日志
	 * */
	info(msg) {
		console.info(msg)
	}

	/**
	 * @description 当前页面数组
	 * */
	pages() {
		return getCurrentPages();
	}

	/**
	 * @description 返回上一级页面|跳转首页
	 * */
	back() {
		if (getCurrentPages().length > 1) {
			uni.navigateBack({})
			return
		}

		this.tohome();
	}

	/**
	 * @description 指定元素选择器 offset
	 */
	offset(selector, callback) {
		let query = uni.createSelectorQuery().select(selector);
		// console.log('offset query', query);
		if (typeof callback === 'function') {
			query.boundingClientRect((res) => {
				callback(res);
			});
		}
	}

	/**
	 * @description 超时
	 */
	timerout(callback, timer = 1000) {
		let _timer = setTimeout(() => {
			if (typeof callback === 'function') {
				callback();
			}
			clearTimeout(_timer);
		}, timer);
	}

	/**
	 * @description 复制
	 */
	toCopy(content) {
		uni.setClipboardData({
			data: content,
			success: (res) => {
				uni.showToast({
					title: '复制成功'
				});
			}
		});
	}

	/**
	 * @description 跳转登录页
	 */
	tologin(redirect) {
		if (redirect) {
			uni.redirectTo({
				url: $config.route.login
			});
			return;
		}

		uni.navigateTo({
			url: $config.route.login
		});
	}

	/**
	 * @description 跳转首页
	 */
	tohome() {
		uni.switchTab({
			url: $config.route.home
		});
	}

	/**
	 * @description 跳转订单页
	 */
	toorder() {
		uni.redirectTo({
			url: $config.route.order
		});
	}

	/**
	 * @description 跳转支付页
	 */
	topay(params) {
		params.money = params.money || 0;
		params.type = params.type || 'navigate';

		if (params.type == 'redirect') {
			uni.redirectTo({
				url: $config.route.pay + this.get_params(params)
			});
			return;
		}

		uni.navigateTo({
			url: $config.route.pay + this.get_params(params)
		});
	}

	/**
	 * @description 跳转搜索页
	 */
	tosearch() {
		uni.reLaunch({
			url: $config.route.search
		});
	}

	/**
	 * @description 跳转产品详情页
	 */
	togoods(params) {
		console.log('togoods params', params);
		uni.navigateTo({
			url: $config.route.goods + this.get_params(params)
		});
	}

	/**
	 * @description 跳转产品列表页
	 */
	togoodslist(params) {
		uni.navigateTo({
			url: $config.route.goodslist + this.get_params(params)
		});
	}
	
	/**
	 * @description 跳转指定 url
	 */
	toPage(url) {
		uni.navigateTo({
			url: url
		});
	}

	/**
	 * @description 自定义状态栏高度
	 */
	navbarHeight() {
		const {
			platform,
			statusBarHeight
		} = uni.getSystemInfoSync();

		let height = statusBarHeight;
		height += 4;
		if (platform == 'android') {
			height += 4;
		}

		return height + 32 + 6;
	}

	/**
	 * @description 获取路径文件名称
	 */
	getFileName(path) {
		if (path.indexOf('/') === -1) return path;
		
		return path.split('/').reverse()[0];
	}

	/**
	 * @description 上传文件
	 */
	async uploadFile(url, path, progress) {
		return new Promise((resolve, reject) => {
			uniCloud.uploadFile({
				filePath: url,
				cloudPath: path,
				onUploadProgress: (progressEvent) => {
					var percentCompleted = Math.round((progressEvent.loaded * 100) /
						progressEvent.total);
					if (typeof progress === 'function') {
						progress(percentCompleted, progressEvent);
					}
				}
			}).then(async uRes => {
				console.log('use-upload', uRes);
				uRes.url = uRes.fileID;
				// 兼容腾讯云上传文件
				if (uRes.url.indexOf('cloud://') != -1) {
					const tempRes = await uniCloud.getTempFileURL({
						fileList: [uRes.url]
					});

					if (tempRes.fileList && tempRes.fileList.length > 0) {
						uRes.url = tempRes.fileList[0].tempFileURL;
					}
				}

				resolve(uRes);
			}).catch(err => {
				console.log('use-upload', err);
				reject(err);
			});
		});
	}

	// 获取 uni-sec-check 安全内容检测响应消息
	getSecMessage(res) {
		switch (res.errCode) {
			case 'uni-sec-check-system-error':
				return '系统错误，操作失败';
			case 'uni-sec-check-risk-content':
				const type = res.type || '';
				if (typeof res.idx === 'number') {
					return `${type}[${res.idx++}]存在风险内容`;
				}
				return `${type}存在风险内容`;
			case 'uni-sec-check-invalid-file-type':
				return '错误的文件类型';
			case 'uni-sec-check-invalid-image-size':
				return '图片大小超出限制';
			case 'uni-sec-check-invoke-out-of-limit':
				return '调用过于频繁，稍后再试';
			default:
				return `${res.errCode} ${res.errMsg}`;
		}
	}

	// 版本号比较
	compareVersion(curr, prev) {
		const prevs = prev.split('.');
		const currs = curr.split('.');
		let flag = false;
		let prevVal = 0;
		let currVal = 0;
		for (let i = 0; i < currs.length; i++) {
			prevVal = parseInt(prevs[i]);
			currVal = parseInt(currs[i]);
			if (prevVal > currVal) {
				break;
			}
			if (currVal > prevVal) {
				flag = true;
				break;
			}
		}

		return flag;
	}
	
	// 微信内部浏览器
	isInternalWeixin() {
		// 测试阶段，默认为 true
		if ($config.debug) return true;
		return location.href.indexOf('code') !== -1 && navigator.userAgent.toLowerCase().match(/MicroMessenger/i);
	}
	
	// 获取当前 page
	getCurPage() {
		const pages = this.pages();
		const curPage = pages[pages.length - 1];
		
		return curPage;
	}
	// 获取当前 page 请求参数
	getCurPageParamObj() {
		return this.getCurPage().options;
	}
	// 获取当前 page 请求参数
	getCurPageParam(param, allowParams = []) {
		const page = this.getCurPage();
		
		const options = [];
		param = {
			...page.options,
			...param
		};
		for (let key in param) {
			if (allowParams.length && !allowParams.includes(key)) {
				continue;
			}
			options.push(`${key}=${param[key]}`);
		}
		
		return options.join('&');
	}
	// 获取当前 page 完整请求 url
	getCurPageFullUrl(param, allowParams = []) {
		const page = this.getCurPage();
		const options = this.getCurPageParam(param, allowParams);
		
		return `${page.route}?${options}`;
	}
	// 获取对应的设备类型
	os() {
		var ua = navigator.userAgent,
			isWindowsPhone = /(?:Windows Phone)/.test(ua),
			isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
			isAndroid = /(?:Android)/.test(ua),
			isFireFox = /(?:Firefox)/.test(ua),
			isChrome = /(?:Chrome|CriOS)/.test(ua),
			isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
			isPhone = /(?:iPhone)/.test(ua) && !isTablet,
			isPc = !isPhone && !isAndroid && !isSymbian;

		return {
			isTablet: isTablet,
			isPhone: isPhone,
			isAndroid: isAndroid,
			isPc: isPc
		};
	}
	// pc 端
	ispc() {
	 	const { isPc } = this.os();
		return isPc;
	}
	
}

export default new Common()
