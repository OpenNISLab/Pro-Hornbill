<template>
  <view class="container">
    <view v-if="loading" class="loading">Loading...</view>
    <view v-else>
      <view class="list">
        <view v-for="(item, index) in itemList" :key="index" class="item" @click="detail(item)">
          <!-- Displays the contents of a list item -->
          <text class="item-info">{{ item.setting }}</text>
          <text class="item-info">{{ $api.format(item.create_time, 'yyyy/MM/dd hh:mm:ss') }}</text>
        </view>
      </view>
      <view class="button-group">
        <button @click="back" class="button">Back</button>
        <button @click="loadMore" class="button">More</button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        itemList: [], // Store the query list data
        loading: false, // Indicates whether data is being loaded
        currentPage: 1, // Current page number
        pageSize: 10, // Number of pieces of data displayed per page
      };
    },
    onLoad() {
      // Queries are executed automatically when the page loads
      // this.queryList();
    },
	onShow() {
	  // Queries are executed automatically when the page loads
	  this.queryList();
	},
    methods: {
      async queryList() {
        let that = this;
        try {
          this.loading = true; // The loading state is set to true to indicate that data is being loaded
          // Send an HTTP GET request to retrieve the data, assuming the interface address is '/api/queryList'
          this.$func.usemall.call('app/mp/list', {}).then(resGet => {
            console.log(resGet.result.data)
            that.itemList = resGet.result.data
			that.loading = false;
            // for(let i=0;i<resGet.result.data.length;i++) {
            //     that.itemList = response.data;
            // }
          })

        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
           // The request ends, and the loading state is set to false
        }
      },
	  detail(item) {
		  uni.navigateTo({
		    url: `/pages/tabbar/start?setting=${item.setting}&arr=${item.arr}`
		  });
	  },
      back() {
        // Return to previous page
        uni.navigateTo({
          url: `/pages/tabbar/home`
        });
      },
      loadMore() {
		  uni.navigateTo({
		    url: `/pages/tabbar/more`
		  });
      },
    },
  };
</script>

<style lang="scss">
  .container {
	  width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .list {
    width: 100%;
  }

  .item {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item-info {
    flex: 1; /* Makes the text content fill the width automatically */
    margin-right: 10px; /* Setting the spacing */
    overflow: hidden; /* Beyond part hiding */
    text-overflow: ellipsis; /* Display ellipses when text overflows */
    white-space: nowrap; /* nowrap */
  }

  .loading {
    margin-top: 20px;
  }

  .button-group {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
  }

  .button {
	
    padding: 10px 50px;
	margin: 10px;
    border-radius: 5px;
    background-color: #007AFF;
    color: white;
    border: none;
    cursor: pointer;
  }
</style>
