<template>
  <view class="container">
    <!-- This is where you can put the navigation bar components -->
    <!-- <use-navbar :title="apptitle"></use-navbar> -->
    <view class="button-group">
		<view class="dflex-b">
		  <view class="button" style="background-color: #007aff;width: 90px;" @click="setting">
			  <view class="iconfont1 icon-a-013shuangchilun"></view>
			  <view>Setting</view>
		  </view>
		  <view class="button" style="background-color: orange;width: 90px;" @click="start">
			  <view class="iconfont1 icon-kaishi"></view>
			  <view>Start</view>
		  </view>
	  </view>
      <view class="button" style="background-color: gray;" @click="history">
		  <view class="dflex-a">
			  <view class="iconfont1 icon-caozuo"></view>
			  <view>History data</view>
		  </view>
	  </view>
    </view>
  </view>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        apptitle: state => state.appname // Let's assume the appname is defined in vuex state management
      })
    },
    data() {
      return {
        // data definition
      };
    },
    onLoad() {
      // Actions taken when the page loads
    },
    onPageScroll(e) {
      // When a page is scrolling
    },
    onShow() {
      // Action taken when the page is displayed
    },
    methods: {
      setting() {
        console.log('home setting');
        uni.navigateTo({
          url: `/pages/tabbar/setting`
        });
      },
      start() {
        console.log('home start');
        uni.navigateTo({
          url: `/pages/tabbar/start`
        });
      },
      history() {
        console.log('home history');
        uni.navigateTo({
          url: `/pages/tabbar/history`
        });
      },
    },
  };
</script>

<style lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .button-group {
    display: flex;
    flex-direction: column;
	padding-top: 100upx;
  }

  .button {
    margin: 10px;
    padding: 20px;
    border-radius: 5px;
    background-color: #007AFF;
    color: white;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>
