<template>
	<view>
		<use-popup mode="bottom" bgclass=" " v-model="payShow" @open="payOpen">
			<view class="bg-main border-radius-top safe-area-inset-bottom" style="">
				<view class="fs-sm" style="margin-top: 66rpx;margin-bottom: 17rpx;">
					<view class="dflex-col-c line-height-1" style="align-items: flex-end;">{{title}}￥<text class="fs-xxl fwbd" style="position: relative; top: 6rpx;">{{money}}</text></view>
					<view v-if="subTitle" class="dflex-col-c fs-xxs ft-base-1 margin-top-xs">{{subTitle}}</view>
				</view>

				<view class="pay-type-list">

					<view v-if="moneyPay" class="type-item dflex-b pos-r padding-tb-sm" @click="changePayType('零钱支付')">
						<text class="freefont freeicon-qianbao"></text>
						<view class="item flex1">
							<text class="tit">零钱支付</text>
							<text v-if="userMoney < money" class="ft-base-1">余额不足</text>
							<text v-else>￥{{userMoney}}</text>
						</view>
						<label class="radio">
							<radio value="" color="#fcbe46" :checked="pay_way == '零钱支付'" :disabled="userMoney < money" /></radio>
						</label>
					</view>

					<!-- #ifdef MP-WEIXIN || APP -->
					<view class="type-item dflex-b pos-r padding-tb-sm" @click="changePayType('微信支付')">
						<text class="iconfont iconweixin"></text>
						<view class="item flex1">
							<text class="tit">微信支付</text>
							<text>推荐使用</text>
						</view>
						<label class="radio">
							<radio value="" color="#fcbe46" :checked="pay_way == '微信支付'" :disabled="money <= 0" />
							</radio>
						</label>
					</view>
					<!-- #endif -->

					<!-- #ifdef MP-ALIPAY || APP -->
					<view class="type-item dflex-b pos-r padding-tb-sm" @click="changePayType('支付宝')">
						<text class="iconfont iconalipay"></text>
						<view class="item flex1">
							<text class="tit">支付宝支付</text>
							<text v-if="pay_way == '支付宝'">当前使用</text>
						</view>
						<label class="radio">
							<radio value="" color="#fcbe46" :checked="pay_way == '支付宝'" :disabled="money <= 0" />
							</radio>
						</label>
					</view>
					<!-- #endif -->
					
					<!-- #ifdef H5 -->
					<view class="type-item dflex-b pos-r padding-tb-sm" @click="changePayType('微信支付', '微信支付', 'MWEB')">
						<text class="iconfont iconweixin"></text>
						<view class="item flex1">
							<text class="tit">微信支付</text>
							<text>推荐使用，拉起微信支付</text>
						</view>
						<label class="radio">
							<radio value="wxpay" color="#ff6a6c" colors="#ff6a6c"
								:checked="pay_way == '微信支付' && pay_trade_type == 'MWEB'" :disabled="money <= 0" />
							</radio>
						</label>
					</view>
					<!-- #endif -->
				</view>

				<view class="dflex-col-c margin-bottom-lg">
					<view class="confirm-btn tac fs-xl" :class="{ 'bg-base': usablePay, 'bg-disabled': !usablePay }"
						@click="toPayment">支 付</view>
				</view>
			</view>
		</use-popup>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex';
	export default {
		props: {
			title: {
				type: String,
				default: '支付'
			},
			subTitle: {
				type: String,
				default: ''
			},
			id: {
				type: String,
				default: ''
			},
			money: {
				type: Number,
				default: 0
			},
			moneyPay: {
				type: Boolean,
				default: true
			},
			dftPay: {
				type: String,
				default: '微信支付'
			},
			loaded: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				usablePay: true,
				userMoney: 0,
				payShow: false,
				
				pay_code: '',
				pay_way: '微信支付',		// 平台支付方式
				pay_original: '',		// 原始支付方式 微信支付 支付宝支付
				pay_trade_type: ''		// JSAPI，NATIVE，APP，H5支付固定传 MWEB
			};
		},
		computed: {
			...mapState(['islogin', 'member'])
		},
		created() {
			this.userMoney = (this.member.member_amount / 100) || 0;
			
			if (!this.loaded)
				this.$func.usemall.call('money/data').then(res => {
					if (res.code == 200) {
						if (this.member.member_amount != res.datas.member_amount) {
							this.userMoney = (res.datas.member_amount / 100) || 0;
							// 更新用户 member_amount
							this.member.member_amount = res.datas.member_amount;
							this.putMember(this.member);
						}
					}
				});
			
			// #ifdef MP-WEIXIN  || APP
			this.pay_way = '微信支付';
			this.pay_original = '微信支付';
			this.pay_trade_type = 'JSAPI';
			// #ifdef APP
			this.pay_trade_type = 'APP';
			// #endif
			// #endif
			
			// #ifdef MP-ALIPAY || APP
			this.pay_way = '支付宝';
			this.pay_original = '支付宝支付';
			this.pay_trade_type = '';
			// #ifdef APP
			this.pay_trade_type = 'APP';
			// #endif
			// #endif
			// #ifdef MP-BAIDU 
			this.pay_way = '百度钱包';
			// #endif
			// #ifdef MP-QQ
			this.pay_way = 'QQ钱包';
			// #endif
			
			this.pay_way = this.dftPay;
			
			// #ifdef APP
			if (this.member.payway == '支付宝') {
				this.pay_way = '支付宝';
				this.pay_original = '支付宝支付';
			} else {
				this.pay_way = '微信支付';
				this.pay_original = '微信支付';
			}
			// #endif
			
			// #ifdef H5
			this.pay_way = '微信支付';
			this.pay_original = '微信支付';
			this.pay_trade_type = 'MWEB';
			// #endif
		},
		methods: {
			...mapMutations(['putMember']),
			open() {
				this.payShow = true;
			},
			close() {
				this.payShow = false;
			},
			payOpen() {
				
			},
			async toPayment() {
				if (this.pay_way == '零钱支付') {
					const [, res] = await uni.showModal({ title: `支付￥${this.money}`, confirmColor: '#ff6a6c', confirmText: '支付' });
					console.log('res', res);
					if (!res.confirm) return;
				}
				
				this.$emit('pay', { 
					pay_way: this.pay_way,
					pay_original: this.pay_original,
					pay_trade_type: this.pay_trade_type
				});
			},
			changePayType(type, original, trade_type) {
				if (this.money <= 0) return;
				if (type === '零钱支付' && this.userMoney < this.money) return;
				
				this.pay_way = type;
				switch (this.pay_way){
					case '微信支付':
						this.pay_original = '微信支付';
						break;
					case '支付宝':
						this.pay_original = '支付宝支付';
						break;
				}
				
				// #ifdef APP
				this.pay_trade_type = 'APP';
				// #endif
				
				if (original) this.pay_original = original;
				if (trade_type) this.pay_trade_type = trade_type;
			}

		}
	};
</script>

<style lang="scss">
	.confirm-btn {
		width: 420rpx;
		height: 90rpx;
		font-weight: 800;
		line-height: 90rpx;
		border-radius: 50px;
		margin-top: 52rpx;
	}
	
	.pay-type-list {
		padding-left: 60rpx;
		padding-right: 60rpx;
	
		.type-item {
			height: 120rpx;
			font-size: 30rpx;
		}
	
		.iconfont, .freefont {
			width: 100rpx;
			font-size: 52rpx;
		}
	
		.iconhuiyuan {
			color: #fe8e2e;
		}
	
		.iconweixin {
			color: #36cb59;
		}
	
		.iconalipay {
			color: #01aaef;
		}
	
		.freeicon-qianbao {
			color: #fcbe46;
		}
	
		.iconbaidu {
			color: #306cff;
		}
	
		.icontoutiao {
			color: #f85959;
		}
	
		.tit {
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 4rpx;
		}
	
		.item {
			display: flex;
			flex-direction: column;
			font-size: $font-sm;
			color: $font-color-light;
		}
	}
</style>
