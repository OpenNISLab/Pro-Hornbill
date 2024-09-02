### 导入代码后打开 manifest.json 重新获取 appid
	小程序端，配置微信小程序 appid

### 前端文件
	common -> config.js
	1.可配置应用基础信息

### uniCloud 云函数
	uni-config-center					修改配置文件，切记右键上传 uni-config-center
		uni-id -> config.json			具体配置查看 readme.md 快速上手部分
		uni-open-bridge -> config.json	统一接管微信等三方平台认证凭据
		uni-sec-check -> config.json	配置内容安全检测（笔记、评价等）
		use-pay -> config.sjon 			配置提现相关参数
	
	右键 uniCloud -> cloudfunctions 上传所有云函数、公共模块及actions

### 消息通知配置文档
	https://www.yuque.com/docs/share/ba6cc7f8-f02c-4926-ae46-95d7dc706753

### 腾讯云 - agent 配置文档
	https://www.yuque.com/docs/share/9db635ec-d120-4abd-9118-dbbd719f00f4

### 数据库数据右键 db_init.json 初始化云数据库

### 运行查看 readme.md 快速上手部分