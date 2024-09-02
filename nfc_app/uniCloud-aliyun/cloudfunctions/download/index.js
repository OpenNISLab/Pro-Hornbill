'use strict';
const db = uniCloud.database();
const dbcmd = db.command;
exports.main = async (event, context) => {
	// let {

	// } = this.ctx.data;

	let response = {};

	let dataRes = await db.collection('nfc_data')
		// .where(where_obj)
		.orderBy('create_time', 'asc')
		// .skip((page - 1) * rows)
		.limit(3000)
		.get();
	console.log(dataRes.data)

	const headers = {
		'Content-Type': 'application/octet-stream', // 表明这是一个二进制文件
		'Content-Disposition': `attachment; filename="filename.txt"` // 指定下载的文件名
	};

	// 返回HTTP响应
	return {
		statusCode: 200, // HTTP状态码
		headers: headers, // 设置响应头
		body: dataRes.data // 文件内容
	};
};