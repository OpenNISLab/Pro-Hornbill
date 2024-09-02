let uposter = {
	// 产品海报
	goods: {
		width: '750rpx',
		height: '1114rpx',
		background: '#ff6a6c',
		radius: '12rpx',
		views: [{
				type: 'view',
				css: {
					left: '40rpx',
					top: '144rpx',
					background: '#fff',
					radius: '30rpx',
					width: '670rpx',
					height: '900rpx',
					shadow: '0 20rpx 48rpx rgba(0,0,0,.05)'
				}
			},
			// 1. 会员头像
			{
				type: 'image',
				src: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLj1JIHX0icWAu4Jw920k6ZIAqNd9ZfHLalqWsweMLphLrcwRJCYr0hcyeY6Y5Kyaqibl6icTAykDWRA/132',
				mode: 'widthFix',
				css: {
					left: '50rpx',
					top: '40rpx',
					width: '84rpx',
					height: '84rpx',
					radius: '50%',
					color: '#999',
					shadow: '0px 0px 7px #f0f0f0'
				}
			},
			// 2. 会员名称
			{
				type: 'text',
				text: 'Usecloud',
				css: {
					color: '#fff',
					left: '154rpx',
					top: '40rpx',
					fontSize: '32rpx',
					fontWeight: 'bold'
				}
			},
			{
				type: 'text',
				text: '为您挑选了一个好物',
				css: {
					color: '#fff',
					left: '154rpx',
					top: '90rpx',
					fontSize: '24rpx'
				}
			},
			// 4. 产品图
			{
				type: 'image',
				src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7e00db99-ad65-4b9f-a74b-61bccb92b124/11bd19fa-6a70-49fd-9e71-72950828f6a8.jpg',
				mode: 'widthFix',
				css: {
					left: '72rpx',
					top: '176rpx',
					width: '606rpx',
					height: '606rpx',
					radius: '12rpx'
				}
			},
			{
				type: 'text',
				text: '￥',
				css: {
					color: '#ff6a6c',
					left: '70rpx',
					top: '840rpx',
					fontSize: '26rpx',
				}
			},
			// 6. 产品价格
			{
				type: 'text',
				text: '1339.90',
				css: {
					color: '#ff6a6c',
					left: '94rpx',
					top: '812rpx',
					fontSize: '56rpx',
					fontWeight: 'bold'
				}
			},
			// 7. 产品介绍
			{
				type: 'text',
				text: '小米10 Xiaomi/小米手机小米10手机骁龙865 1亿像素双模5G官方正品 骁龙865旗舰处理器 1亿像素8K电影相机',
				css: {
					maxLines: 2,
					width: '450rpx',
					color: '#333',
					left: '76rpx',
					top: '908rpx',
					fontSize: '30rpx',
					lineHeight: '50rpx'
				}
			},
			// 8. 产品二维码
			{
				type: 'image',
				src: '',
				mode: 'widthFix',
				css: {
					left: '545rpx',
					top: '875rpx',
					width: '135rpx',
					height: '135rpx',
					background: '#fff'
				}
			},
			{
				type: 'view',
				css: {
					top: '1040rpx',
					height: '10rpx',
					background: '#ff6a6c'
				}
			},
			{
				type: 'view',
				css: {
					left: '190rpx',
					top: '1078rpx',
					border: '1px solid #fff',
					width: '70rpx'
				}
			},
			// 11 slogan
			{
				type: 'text',
				text: '尚福瑞 · 让开发更简单',
				css: {
					color: '#fff',
					left: '276rpx',
					top: '1060rpx',
					fontSize: '24rpx',
				}
			},
			{
				type: 'view',
				css: {
					left: '496rpx',
					top: '1078rpx',
					border: '1px solid #fff',
					width: '64rpx'
				}
			}
		]
	},
	// 产品海报数据
	getGoodsData: function (member, goods, qrcode, config) {
		// 会员头像
		this.goods.views[1].src = member.member_headimg;
		// 会员名称
		this.goods.views[2].text = member.member_nickname;
		// 产品图
		this.goods.views[4].src = goods.img;
		// 产品价格
		this.goods.views[6].text = '' + goods.price / 100;
		// 产品名称
		this.goods.views[7].text = goods.name + ' ' + goods.name_pw;
		
		// 二维码
		this.goods.views[8].src = qrcode;
		
		// slogan
		this.goods.views[11].text = config.appslogan || '尚福瑞 · 让开发更简单';
		return this.goods;
	},
	
	// 会员海报
	member: {

	},
	// 分销商海报
	fxs: {
		width: '750rpx',
		height: '1114rpx',
		background: '#ff6a6c',
		radius: '12rpx',
		views: [{
				type: 'view',
				css: {
					left: '40rpx',
					top: '40rpx',
					background: '#fff',
					radius: '30rpx',
					width: '670rpx',
					height: '740rpx',
					shadow: '0 20rpx 48rpx rgba(0,0,0,.05)'
				}
			},
			// 1. 会员头像
			{
				type: 'image',
				src: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLj1JIHX0icWAu4Jw920k6ZIAqNd9ZfHLalqWsweMLphLrcwRJCYr0hcyeY6Y5Kyaqibl6icTAykDWRA/132',
				mode: 'widthFix',
				css: {
					left: '210rpx',
					top: '140rpx',
					width: '120rpx',
					height: '120rpx',
					radius: '50%',
					color: '#999',
					shadow: '0px 0px 7px #f0f0f0'
				}
			},
			// 2. 会员名称
			{
				type: 'text',
				text: 'Usecloud',
				css: {
					color: '#000',
					left: '350rpx',
					top: '148rpx',
					fontSize: '34rpx',
					fontWeight: 'bold'
				}
			},
			// 3. 分销商
			{
				type: 'text',
				text: '分销商',
				css: {
					color: '#fff',
					left: '350rpx',
					top: '202rpx',
					fontSize: '24rpx',
					background: '#ff6a6c',
					radius: '12rpx',
					padding: '6rpx 16rpx'
				}
			},
			// 4. 分销商二维码
			{
				type: 'image',
				src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-7e00db99-ad65-4b9f-a74b-61bccb92b124/11bd19fa-6a70-49fd-9e71-72950828f6a8.jpg',
				mode: 'widthFix',
				css: {
					left: '200rpx',
					top: '310rpx',
					width: '350rpx',
					height: '350rpx'
				}
			},
			// 5. 扫一扫加入
			{
				type: 'text',
				text: '扫一扫加入',
				css: {
					width: '450rpx',
					color: '#000',
					left: '308rpx',
					top: '680rpx'
				}
			},
			// 6. LOGO
			{
				type: 'image',
				src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-501e5c39-483c-4b6a-99f8-2ddec33e7186/4b3b84c2-ca00-4b64-b942-3405df10455f.png',
				mode: 'widthFix',
				css: {
					left: '295rpx',
					top: '830rpx',
					width: '160rpx',
					height: '160rpx',
					radius: '50%'
				}
			},
			// 7. slogan
			{
				type: 'text',
				text: '尚福瑞 · 让开发更简单',
				css: {
					color: '#fff',
					left: '192rpx',
					top: '980rpx',
					fontSize: '40rpx',
					fontWeight: 'bold'
				}
			}
		]
	},
	getFxsData: function (member, qrcode, config) {
		// 会员头像
		this.fxs.views[1].src = member.member_headimg;
		// 会员名称
		this.fxs.views[2].text = member.member_nickname;
		
		// 二维码
		this.fxs.views[4].src = qrcode;
		
		// slogan
		this.goods.views[7].text = config.appslogan || '尚福瑞 · 让开发更简单';
		return this.fxs;
	}
};

export default uposter;
