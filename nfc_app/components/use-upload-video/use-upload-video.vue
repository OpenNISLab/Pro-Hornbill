<template>
	<view class="use-upload-video dgrid dgrid-col-3">
		<view v-if="video.url" class="item pos-r">
			<!-- <image v-if="video.poster" class="wh-full border-radius-sm" :src="video.poster" mode="aspectFit"></image> -->
			<video class="border-radius-sm" :src="video.url"></video>
			<view class="del pos-a bg-main dflex-c border-radius-c iconfont iconlajitong-01 ft-dark" @tap.stop="delVideo"></view>
		</view>

		<view v-else class="item border-radius-sm dflex-c dflex-flow-c bg-dark" style="color: #b0b0b0;" @click="chooseVideo">
			<view class="iconfont iconjia fs-xl fwbd"></view>
			<view class="fs-xs">添加视频</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		compressed: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			video: {
				url: '',
				poster: ''
			}
		};
	},
	created() {
		
	},
	methods: {
		chooseVideo() {
			uni.chooseVideo({
				count: 1,
				compressed: this.compressed,
				success: async res => {
					uni.showLoading({
						title: '上传中',
						mask: true
					});
					
					console.log('chooseVideo', res);
					
					// if (res.thumbTempFilePath) {
					// 	const result = await uniCloud
					// 		.uploadFile({
					// 			filePath: res.thumbTempFilePath,
					// 			cloudPath: res.thumbTempFilePath.split('/').reverse()[0],
					// 			onUploadProgress: function(progressEvent) {
					// 				var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
					// 				console.log('视频封面上传进度：', percentCompleted);
					// 			}
					// 		})
					// 		.catch(err => {
					// 			console.log('use-upload-video', err);
					// 		});

					// 	let poster = result.fileID;
					// 	// 兼容腾讯云上传文件
					// 	if (poster.indexOf('cloud://') != -1) {
					// 		const tempRes = await uniCloud.getTempFileURL({
					// 			fileList: [poster]
					// 		});

					// 		if (tempRes.fileList && tempRes.fileList.length > 0) {
					// 			poster = tempRes.fileList[0].tempFileURL;
					// 		}
					// 	}

					// 	this.video.poster = poster;
					// }

					let filename = res.tempFilePath;
					if (res.tempFile && res.tempFile.name) {
						filename = res.tempFile.name;
					}

					uniCloud
						.uploadFile({
							filePath: res.tempFilePath,
							cloudPath: this.$api.getFileName(filename),
							onUploadProgress: function(progressEvent) {
								var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
							}
						})
						.then(async uRes => {
							uni.hideLoading();
							
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
							this.video.url = uRes.url;
							this.video.type = res.type || 'video/';
							this.video.size = res.size;
							this.video.duration = res.duration;
							this.video.width = res.width;
							this.video.height = res.height;
							this.video.poster = this.video.poster || uRes.url + '?x-oss-process=video/snapshot,t_1000,f_jpg,w_750,m_fast';
							console.log('use-upload-video', this.video);
							this.sendData();
						})
						.catch(err => {
							console.log('use-upload-video', err);
						});

				}
			});
		},
		dftVideo(video) {
			this.video = video;
		},
		delVideo(idx) {
			this.video = {
				url: '',
				poster: ''
			};
			this.sendData();
		},

		sendData() {
			this.$emit('upload', this.video);
		}
	}
};
</script>

<style lang="scss">
.use-upload-video {
	.item {
		width: 210rpx;
		height: 210rpx;
		border: 1px solid #f0f0f0;
		
		image,
		video {
			width: 100%;
			height: 100%;
		}
	}

	.del {
		top: -22rpx;
		right: -16rpx;
		width: 40rpx;
		height: 40rpx;
		z-index: 99;
	}
}
</style>
