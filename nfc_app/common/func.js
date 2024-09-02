
import $config from './config.js'
import $api from './common.js'

let func = {};

func = new Proxy(func, {
	get: function(target, key) {
		return new FuncContext(key);
	}
});

function FuncContext(name) {
	this.funcname = name;
	this.response = {
		code: 200,
		datas: {},
		msg: ''
	}
}

FuncContext.prototype = {
	funcname: '',	// 云函数名称
	response: {} 	// 统一响应格式
};

/**
 * 调尚福瑞函数
 * action controller 函数路径
 * data controller 数据参数
 * */
FuncContext.prototype.call = function(action, data) {
	// #ifndef APP || APP-NVUE
	uni.showNavigationBarLoading();
	// #endif
	return uniCloud.callFunction({
		name: this.funcname,
		data: {
			action,
			data
		}
	}).then(res => {
		if ($config.debug) {
			console.log(this.funcname + '/' + action + ' call', res);
		}
		if (res.result) {
			this.response.code = res.result.code === 0 ? 200 : res.result.code;
			if (this.response.code != 200) {
				this.response.msg = res.result.msg || res.result.message;
			} else {
				this.response.msg = res.result.msg
			}
			this.response.datas = res.result.datas || res.result;
			this.response.result = res.result;
			return Promise.resolve(this.response);
		}
		
		return Promise.reject(res);
	}).catch(err => {
		if ($config.debug) {
			console.log(this.funcname + '/' + action + ' call catch', err);
			$api.alert(JSON.stringify(err));
		}
		return Promise.reject(err);
	}).finally(res => {
		// #ifndef APP || APP-NVUE
		uni.hideNavigationBarLoading();
		// #endif
	});
}

export default func;
