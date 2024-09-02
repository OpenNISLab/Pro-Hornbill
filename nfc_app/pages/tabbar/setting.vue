<template>
	<view class="container">
		<view class="header">Setting</view>
		<form class="form">
			<view class="form-item">
				<text class="form-label">Init E(V):</text>
				<input class="form-input" type="number" v-model="a" placeholder="Enter initial E value" />
			</view>
			<view class="form-item">
				<text class="form-label">Final E(V):</text>
				<input class="form-input" type="number" v-model="b" placeholder="Enter final E value" />
			</view>
			<view class="form-item">
				<text class="form-label">Incr E(V):</text>
				<input class="form-input" type="number" v-model="c" placeholder="Enter increment E value" />
			</view>
			<view class="form-item">
				<text class="form-label">Amplitude(V):</text>
				<input class="form-input" type="number" v-model="d" placeholder="Enter amplitude value" />
			</view>
			<view class="form-item">
				<text class="form-label">Sensitivity(A/V):</text>
				<picker mode="selector" :range="pickerRange" @change="onPickerChange">
					<view class="form-input">
						{{e}}
					</view>
				</picker>
			</view>

			<view class="button-group">
				<button class="action-button" @click="back">Back</button>
				<button class="action-button" @click="save">Save</button>
				<!-- <button class="action-button" @click="save1">test save</button> -->
			</view>
		</form>
	</view>
</template>

<script>
	import nfc from '@/js_sdk/hexiii-nfc/hexiii-nfc.js'

	export default {
		data() {
			return {
				// A list of drop-down options
				pickerRange: ['1e-5', '1e-4', '1e-3', '1e-2', 'Default'],
				a: 0.4,
				b: 0.9,
				c: 0.005,
				d: 0.05,
				e: 'Default',
			};
		},
		onLoad(options) {
			console.log(options)
			if (options.setting) {

				let temp = options.setting.split(',')
				this.a = temp[0];
				this.b = temp[1];
				this.c = temp[2];
				this.d = temp[3];
				this.e = temp[4];
			}
			nfc.listenNFCStatus();
		},
		methods: {
			onPickerChange(event) {
				// event.detail.value is the index of the selected item
				this.e = this.pickerRange[event.detail.value];
			},
			read() {
				let _this = this;
				console.log(this.a, this.b, this.c, this.d, this.e);
				nfc.readData(function(res) {
					console.log(res);
				});

				setInterval(function() {
					console.log("setTimeout")
					nfc.initReadNfcAdapter(function(res) {
						console.log(res)
					});
				}, 5000)
			},
			back() {
				uni.navigateBack();
			},
			save1() {
				nfc.writeData(
					`b/10485,0102,0202/10616,0104,0204/10747,0106,0206/10878,0108,0208/11009,0110,0210/11140,0112,0212/11271,0114,0214/11402,0116,0216/11533,0118,0218/11664,0120,0220/11795,0122,0222/11926,0124,0224/12057,0126,0226/12188,0128,0228/12319,0130,0230/12450,0132,0232/12581,0134,0234/12712,0136,0236/12843,0138,0238/12974,0140,0240/13105,0142,0242/13236,0144,0244/13367,0146,0246/13498,0148,0248`
					,function(){});
			},
			save() {

				let _this = this;
				if (this.a < 0) {
					this.a = 0;
				}
				if (this.a > 1.5) {
					this.a = 1.5
				}
				if (this.b < 0) {
					this.b = 0;
				}
				if (this.b > 1.5) {
					this.b = 1.5
				}
				if (this.c < 0.001) {
					this.c = 0.001;
				}
				if (this.c > 0.05) {
					this.c = 0.05
				}
				if (this.d < 0.001) {
					this.d = 0.001;
				}
				if (this.d > 0.1) {
					this.d = 0.1
				}
				if (!this.e) {
					this.e = 'Default'
				}


				console.log(this.e)

				let writeData = `a[${_this.a},${_this.b},${_this.c},${_this.d},${_this.e}]`;
				console.log(writeData)
				nfc.writeData(writeData, function() {
					_this.$func.usemall.call('app/mp/add',
						`${_this.a},${_this.b},${_this.c},${_this.d},${_this.e}`).then(res => {
						//The operation jumped successfully
						uni.showToast({
							title: res.code,
							icon: 'none',
							duration: 3000
						})
						if (res.code == 200) {
							console.log(res.result.data)
							let second = (_this.b - _this.a) / _this.c * 0.5;
							uni.showToast({
								title: second,
								icon: 'none',
								duration: 3000
							})
							console.log(second)
							uni.navigateTo({
								url: `/pages/tabbar/countdown?id=${res.result.data}&second=${second}&setting=${_this.a},${_this.b},${_this.c},${_this.d},${_this.e}`
							});
						}
						// console.log(res)
					})
				});

			}
		}
	}
</script>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 50rpx;
		background-color: #f0f0f0;
		height: 100vh;
	}

	.header {
		font-size: 60rpx;
		font-weight: bold;
		margin-bottom: 60rpx;
	}

	.form {
		width: 100%;
		max-width: 600rpx;
	}

	.form-item {
		display: flex;
		flex-direction: column;
		margin-bottom: 30rpx;
	}

	.form-label {
		font-size: 36rpx;
		color: #333;
		margin-bottom: 10rpx;
	}

	.form-input {
		border: none;
		border-radius: 10rpx;
		padding: 20rpx;
		font-size: 36rpx;
		background-color: #ffffff;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.05);
	}

	.button-group {
		display: flex;
		justify-content: space-between;
	}

	.action-button {
		flex-grow: 1;
		margin: 10rpx;
		padding: 20rpx;
		font-size: 36rpx;
		color: #fff;
		background-color: #007aff;
		border-radius: 10rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);
	}
</style>