<template>
	<view class="w-full dflex padding-bottom-sm">
		<view class="iconfont iconyanzheng margin-right"></view>
		<view class="border-line flex1 dflex">
			<input class="padding-sm flex1" type="number" data-key="code" maxlength="6" :focus="codeFocus" :value="code" @confirm="confirm" @input="inputChange" placeholder="请输入验证码" />
			
			<view class="pos-r">
				<view class="vertical-line" style="right: calc(100% + 20rpx);"></view>
				<view v-if="!send" class="padding-tb-sm ft-dark-4" @click="sendCode">发送验证码</view>
				<view v-else class="padding-tb-sm ft-dark-4">{{code_time}}s 重新获取</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"use-smscode",
		props: {
			agreement: {
				type: Boolean,
				default: true
			},
			agreementContent: {
				type: String,
				default: ''
			},
			mobile: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: 'register'
			}
		},
		data() {
			return {
				send: false,
				code_time: 60,
				code: '',
				codeFocus: false
			};
		},
		methods: {
			inputChange(e) {
				this.$emit('change', e.detail.value);
			},
			sendCode() {
				let _this = this;
				if (this.send) return;
				
				if (!this.agreement) {
					this.$api.msg(this.agreementContent);
					return;
				}
				
				if (!this.mobile) {
					this.$api.msg('请输入手机号');
					return;
				}
				if (!/(^1[3|4|5|7|8|9][0-9]{9}$)/.test(this.mobile)) {
					this.$api.msg('请输入正确的手机号码');
					return;
				}
			
				uni.showLoading({
					title: '发送中'
				})
				
				this.send = true;
				this.code_time = 30;
			
				this.$func.usemall.call('member/sendSmsCode', {
					mobile: this.mobile,
					type: this.type
				}).then(res => {
					uni.hideLoading();
					if (res.code == 200) {
						// this.$api.alert('验证码已发送', () => {
						// 	this.codeFocus = true;
						// 	let timer = setInterval(() => {
						// 		--this.code_time;
								
						// 		if (this.code_time <= 0) {
						// 			clearInterval(this.timer)
						// 			this.send = false;
						// 			this.code_time = 30;
						// 			return;
						// 		}
						// 	}, 1000);
						// });
						
						this.$api.msg('验证码已发送');
						this.codeFocus = true;
						let timer = setInterval(() => {
							--this.code_time;
							
							if (this.code_time <= 0) {
								clearInterval(this.timer)
								this.send = false;
								this.code_time = 30;
								return;
							}
						}, 1000);
						return;
					}
			
					this.send = false;
					this.code_time = 30;
					this.$api.msg(res.msg);
				});
			},
			confirm() {
				this.$emit('confirm', this.code);
			}
		}
	}
</script>

<style>

</style>
