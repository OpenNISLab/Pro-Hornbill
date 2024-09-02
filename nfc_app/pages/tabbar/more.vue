<template>
	<view class="container">
		<view v-if="loading" class="loading">loading...</view>
		<view v-else>
			<!-- <view class="select-all-container">
				<text style="padding-right: 10px;">check all</text>
				<checkbox class="select-all" @click="toggleAll" :checked="isAllSelected"></checkbox>
			</view> -->
			<checkbox-group v-model="selectedItems" class="list">
				<view class="list">
					<view v-for="(item, index) in itemList" :key="index" class="item">
						<!-- Displays the contents of a list item -->
						<text class="item-info">{{ item.cycle_id }}</text>
						<text class="item-info">{{ $api.format(item.create_time, 'yyyy/MM/dd hh:mm') }}</text>
						<!-- Check box at the end of the line -->
						<!-- <checkbox :value="item.cycle_id.toString()"></checkbox> -->
					</view>
				</view>
			</checkbox-group>
			<view class="button-group">
				<button @click="back" class="button">Back</button>
				<button @click="deleteSelected" class="button">Delete</button>
				<button @click="download" class="button">Download</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemList: [],
				loading: false,
				selectedItems: [], // Store an array of ids for the selected option
			};
		},
		computed: {
			isAllSelected() {
				return this.selectedItems.length === this.itemList.length;
			}
		},
		onLoad() {
			this.queryList();
		},
		methods: {
			async queryList() {
				this.loading = true;
				try {
					const response = await this.$func.usemall.call('app/mp/list', {});
					console.log(response.result.data)
					this.itemList = response.result.data;
				} catch (error) {
					console.error('Error fetching data:', error);
				} finally {
					this.loading = false;
				}
			},
			back() {
				uni.navigateTo({
					url: `/pages/tabbar/start`
				});
			},
			async deleteSelected() {
				console.log('Remove selected items:', this.selectedItems);
				const response = await this.$func.usemall.call('app/mp/delete', {});
				this.queryList();
			},
			async download() {
				uni.downloadFile({
					url: 'https://fc-mp-48620b57-0666-42bf-bcc4-433ef36d034d.next.bspapp.com/download',
					success: (res) => {
						console.log("===============")
						console.log(JSON.stringify(res))
						if (res.statusCode === 200) {
							// 下The download was successful. Open the file using plus.runtime.openFile
							const filePath = res.tempFilePath;
							console.log(filePath)
							uni.setClipboardData({
								data: 'https://fc-mp-48620b57-0666-42bf-bcc4-433ef36d034d.next.bspapp.com/download',
								success: (res) => {
									// uni.showToast({
									// 	title: 'Copy successfully'
									// });
								}
							});
							uni.showModal({
								title: 'It has been copied. Please open it in your browser',
								content: 'https://fc-mp-48620b57-0666-42bf-bcc4-433ef36d034d.next.bspapp.com/download',
								showCancel: false,
								success(res) {
									if (res.confirm) {
										uni.saveFile({
											tempFilePath: filePath,
											success: (saveRes) => {
												uni.showToast({
													title: 'The file downloaded successfully.',
													icon: 'success'
												});
												console.log('Path to the saved file:', saveRes.savedFilePath);
												// You can add code to open the file here if needed
												plus.runtime.openFile(saveRes.savedFilePath)
											},
											fail: (saveErr) => {
												console.error('File save failure:', saveErr);
												uni.showToast({
													title: 'File save failure',
													icon: 'none'
												});
											}
										});
							
									} else if (res.cancel) {}
								}
							})
							
							


							
						} else {
							// The server response code is not 200, the download failed
							uni.showModal({
								title: 'download failed',
								content: 'Server response error, status code:' + res.statusCode
							});
						}
					},
					fail: (error) => {
						// Download the failed callback
						uni.showModal({
							title: 'download failed',
							content: 'An error occurred during the download process. Error message:' + error.message
						});
					}
				});
				
			},
			toggleAll() {
				console.log(this.isAllSelected)
				if (this.isAllSelected) {
					this.selectedItems = this.itemList.map(item => item.cycle_id.toString());
				} else {
					this.selectedItems = [];
				}
				// Note: Update the all-selected state
				this.isAllSelected = !this.isAllSelected;
			},
		}
	};
</script>

<style lang="scss">
	.select-all-container {
		text-align: right;
		padding: 10px;
	}

	.select-all {
		margin-bottom: 10px;
	}

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
		flex: 1;
		
		margin-right: 10px;
		
		overflow: hidden;
		
		text-overflow: ellipsis;
		
		white-space: nowrap;
		
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

		padding: 10px 20px;
		margin: 10px;
		border-radius: 5px;
		background-color: #007AFF;
		color: white;
		border: none;
		cursor: pointer;
	}

	.button-group {
		display: flex;
		justify-content: flex-end;
		
		align-items: center;
		
		width: 100%;
		margin-top: 20px;
	}

	.select-all {
		margin-left: auto;
		
	}
</style>