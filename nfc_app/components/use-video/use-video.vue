<template>
	<view v-if="videoShow" class="pos-f pos-full dflex-c" style="background: #000; z-index: 99999;" @dblclick="videoExit">
		<video @play="videoPlay" @pause="videoPause" @ended="videoEnded" @click="videoTap"
			@fullscreenchange="videoChange" autoplay enable-play-gesture id="use-video" :src="videoObj.url"
			:poster="videoObj.cover" :poster-for-crawler="videoObj.cover" :vslide-gesture-in-fullscreen="false"
			:direction="0" :show-play-btn="true" :show-fullscreen-btn="false"
			:style="{ width: videoWidth + 'px', height: videoHeight + 'px', 'position': 'relative', 'top': '-30px' }"></video>
			
		<!-- 暂停播放图标 -->
		<!-- <cover-image v-if="videoShow && !videoPlaying" src="/static/images/video-play-w.png" class="border-radius-c pos-a pos-tl-c dflex-c" style="width: 100rpx; height: 100rpx;"  @click="videoTap"></cover-image> -->
		
		<!-- 关闭按钮 -->
		<image v-if="videoShow" src="/static/images/close-w.png" class="border-radius-c pos-a pos-l-c dflex-c use-close" style="z-index: 999999;" @click="videoExit"></image>
	</view>
</template>

<script>
	export default {
		computed: {
			videoHeight() {
				const {
					windowHeight
				} = uni.getSystemInfoSync();
		
				let height = windowHeight - 110;
				
				return height;
			},
			videoWidth() {
				if (this.videoObj && Object.keys(this.videoObj).length) {
					return this.videoObj.width * (this.videoHeight / this.videoObj.height);
				}
				
				return 0;
			}
		},
		name: "use-video",
		props: {
			videoObj: {
				type: Object
			},
			value: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				videoShow: false,
				videoContext: null,
				videoPlaying: false,
				videoDblClick: false,
				touchTime: new Date().getTime()
			};
		},
		watch: {
			value(val) {
				console.log('watch', val);
				this.videoShow = val;
			}
		},
		methods: {
			videoPlay(event) {
				console.log('video-play', event);
				this.videoPlaying = true;
			},
			videoPause(event) {
				console.log('video-pause', event);
				this.videoPlaying = false;
			},
			videoEnded(event) {
				console.log('video-ended', event);
			},
			videoTap(event) {
				console.log('video-tap', event);
				this.videoDblClick = false;
			
				this.$api.timerout(() => {
					if (new Date().getTime() - this.touchTime < 260) {
						this.videoDblClick = true;
						console.log('dblclick', this.videoContext);
			
						this.videoExit();
					} else if (!this.videoDblClick) {
						console.log('click', this.videoContext);
			
						if (this.videoPlaying) {
							this.videoContext.pause();
						} else {
							this.videoContext.play();
						}
					}
				}, 260);
			
				this.touchTime = new Date().getTime();
			},
			videoExit() {
				this.videoContext.stop();
				this.videoContext.pause();
				this.videoShow = false;
				this.$emit('exit');
			},
			videoChange(event) {
				console.log('video-change', event);
			}
		},
		created() {
			this.videoShow = this.value;
		},
		mounted() {
			this.videoContext = uni.createVideoContext('use-video', this);
		}
	}
</script>

<style>
	.use-close {
		bottom: 30px;
		width: 68rpx;
		height: 68rpx;
		background: rgba(0, 0, 0, .58);
	}
</style>
