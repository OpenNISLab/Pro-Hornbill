<template>
  <view class="container dflex-col">
	<view class="title">Testing...</view>
    <view class="countdown">Remaining time： {{ countdown }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
		setting : null,
      countdown: 0 // Initialize the countdown to 60 seconds
    };
  },
  created() {
    // this.startCountdown(); // The countdown starts when the page is created
  },
  onLoad(options) {
  	console.log("onLoad",options)
  	this.countdown = parseInt(options.second)
  	this.startCountdown(options.id)
	this.setting = options.setting
  },
  methods: {
    startCountdown(id) {
		let that = this;
      const interval = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--; // Decrement by 1 per second
        } else {
          clearInterval(interval); // At the end of the countdown, clear the timer
		  uni.navigateTo({
		    url: `/pages/tabbar/start?id=${id}&setting=${that.setting}`
		  });
        }
      }, 1000);
    }
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color:#fff;
  background-color: orange;
}
.title {
  font-size: 26px;
}
.countdown {
	padding-top: 20px;
  font-size: 16px;
  font-weight: bold;
}
</style>
