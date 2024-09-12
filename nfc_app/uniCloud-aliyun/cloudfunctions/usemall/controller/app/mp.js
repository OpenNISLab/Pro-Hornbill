'use strict';

const {
	Controller
} = require('uni-cloud-router');

module.exports = class MpController extends Controller {

	// get
	async get() {
		let {
			id
		} = this.ctx.data;

		let response = {};
		let query = {
		}
		if(id){
			query = {
				_id : id
			}
		}
		let dataRes = await this.db.collection('nfc_data')
			.where(query)
			.orderBy('create_time', 'desc')
			// .skip((page - 1) * rows)
			.limit(1)
			.get();
		console.log(dataRes.data)

		response.data = dataRes.data;

		let end = Date.now();
		response.code = 0;
		return response;
	}
	async update() {
		let {
			id,
			arr
		} = this.ctx.data;
		let response = {};
		response.code = 0;
		console.log(id,arr)
		const dbData = await this.db.collection('nfc_data').where({
			_id : id
		}).limit(1).get();
		console.log(dbData)
		if(dbData.data.length==0){
			response.msg = "当前ID不存在"
			return response;
		}

		let nfc_data = {
			arr: arr
		};

		let ret = await this.db.collection('nfc_data').where({
			_id : id
		}).update(nfc_data);
		console.log(ret)
		response.code = 200;
		response.data = ret.id;
		console.log("更新成功")
		return response;
	}
	async add() {
		// let {
		// 	str
		// } = this.ctx.data;
		let response = {};
		response.code = 0;

		const MAX_CYCLE_ID = await this.db.collection('nfc_data').orderBy('cycle_id', 'desc').limit(1).get();

		const maxCycleId = MAX_CYCLE_ID.data.length > 0 ? MAX_CYCLE_ID.data[0].cycle_id : 0;
		const newCycleId = maxCycleId + 1;

		let nfc_data = {
			cycle_id: newCycleId,
			setting: this.ctx.data,
			create_time: new Date().getTime()
		};

		let ret = await this.db.collection('nfc_data').add(nfc_data);
		console.log(ret)
		response.code = 200;
		response.data = ret.id;
		console.log("新增成功")
		return response;
	}
	// list
	async list() {
		let {

		} = this.ctx.data;

		let response = {};

		let dataRes = await this.db.collection('nfc_data')
			// .where(where_obj)
			.orderBy('create_time', 'desc')
			// .skip((page - 1) * rows)
			.limit(3000)
			.get();
		console.log(dataRes.data)

		response.data = dataRes.data;

		let end = Date.now();
		response.code = 0;
		return response;
	}

	// delete
	async delete() {
		let {

		} = this.ctx.data;

		let response = {};

		let dataRes = await this.db.collection('nfc_data').remove();


		let end = Date.now();
		response.code = 0;
		return response;
	}

	// download
	async download() {
		let {

		} = this.ctx.data;

		let response = {};

		let dataRes = await this.db.collection('nfc_data')
			// .where(where_obj)
			.orderBy('create_time', 'desc')
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
	}
}