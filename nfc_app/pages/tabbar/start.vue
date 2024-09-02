<template>
	<view class="container">
		<view>AChE DPV</view>
		<canvas canvas-id="lineChart1" style="width: 100%; height: 300px;"></canvas>
		<view style="padding-bottom: 20px;">Potential (V)</view>
		<view>BChE DPV</view>
		<canvas canvas-id="lineChart2" style="width: 100%; height: 300px;"></canvas>
		<view>Potential (V)</view>
		<view class="button-group">
			<view class="button" @click="Back">Back</view>
			<view class="button" @click="Param">Param</view>
		</view>
	</view>

</template>

<script>
	import nfc from '@/js_sdk/hexiii-nfc/hexiii-nfc.js'
	const db = uniCloud.database();
	export default {
		data() {
			return {
				chartWidth: 0,
				chartHeight: 300,
				context1: null,
				context2: null,
				setting : null,
				e : '',
				mockData1: [
					// { x: '5', y: 20 },
				],
				mockData2: [
					// { x: '5', y: 20 },
				],
			};
		},
		
		onLoad(options) {
			const res = uni.getSystemInfoSync();
			this.chartWidth = res.windowWidth;
			this.context1 = uni.createCanvasContext('lineChart1', this);
			this.drawChart(this.context1,this.mockData1);
			this.context2 = uni.createCanvasContext('lineChart2', this);
			this.drawChart(this.context2,this.mockData2);
			console.log("onLoad",options)
			if(options.arr){
				this.setting = options.setting
				this.e = this.setting.split(',')[4]
				this.renderArr(options.arr.substring(2).split('/'))
			}else if(options.id){
				this.setting = options.setting
				this.e = this.setting.split(',')[4]
				nfc.listenNFCStatus();
				this.fetchDataPeriodically(options.id);
			}else {
				console.log("enter start")
				this.fetchDataPeriodically();
			}
			
		},
		methods: {
			drawChart(ctx,data) {
				let that = this;
				let xMin = 0.4;
				let xMax = 0.9;
				if(this.setting) { 
					let setting = this.setting.split(',')
					xMin = parseFloat(setting[0]);
					xMax = parseFloat(setting[1]);
				}
				console.log(this.setting)
				
				const padding = 50;
				console.log(data);
				const xPoints = data.length < 10 ? data.length : 10; // A maximum of 10 x-coordinate points are displayed
				// Fix: Use the actual X-axis range to calculate the interval
				
				const xRange = xMax - xMin; // Actual X-axis range
				
				const yMax = Math.max(...data.map((p) => p.y));
				
				// Fix: calculate scale based on actual X-axis range
				const yRatio = (this.chartHeight - padding * 2) / yMax;
				const xRatio = (this.chartWidth - padding * 2) / xRange;
				
				ctx.clearRect(0, 0, this.chartWidth, this.chartHeight); // Clears the previous drawing
				
				
				// Draw y-coordinate points (unchanged)
				for (let i = 0; i <= xPoints; i++) {
				    let yValue = (yMax / xPoints) * i;
				    let y = this.chartHeight - padding - yValue * yRatio;
				    ctx.fillText((yValue).toFixed(2), padding - 30, y + 3); // Y-axis value
				    ctx.beginPath();
				    ctx.arc(padding, y, 2, 0, Math.PI * 2);
				    ctx.fill();
				}
				if(that.e == '1e-5') {
					ctx.fillText("10^-5", 30,  30);
				}else if(that.e == '1e-4') {
					ctx.fillText("10^-4", 30,  30);
				}else if(that.e == '1e-3') {
					ctx.fillText("10^-3", 30,  30);
				}else if(that.e == '1e-2') {
					ctx.fillText("10^-2", 30,  30);
				}else if(that.e == 'Default') {
					//ctx.fillText("10^-4", 30,  30);
					ctx.fillText("10^-5", 30,  30);
				}
				
				
				
				
				// Fix: Draw X-axis coordinate points to consider the actual X-axis range
				for (let i = 0; i <= xPoints; i++) {
				    let xValue = xMin + (xRange / xPoints) * i; // Calculate the x value based on the actual range
				    let x = padding + (xValue - xMin) * xRatio; // Adjust how the x position is calculated
				    let y = this.chartHeight - padding; // The y-coordinate is fixed at the bottom
					ctx.fillText(xValue.toFixed(2), x - 10, y + 20); // X-axis values, adjusted slightly for readability
				    
				    ctx.beginPath();
				    ctx.arc(x, y, 2, 0, Math.PI * 2);
				    ctx.fill();
				}
				
				// Draw axes (unchanged)
				ctx.setStrokeStyle('blue');
				ctx.beginPath();
				ctx.moveTo(padding, padding);
				ctx.lineTo(padding, this.chartHeight - padding);
				ctx.lineTo(this.chartWidth - padding, this.chartHeight - padding);
				ctx.stroke();
				
				// Draw coordinates and curves (unchanged)
				ctx.setStrokeStyle('red');
				ctx.setLineWidth(1.5);
				ctx.beginPath();
				data.forEach((point, index) => {
				    let x = padding + (point.x - xMin) * xRatio; // Adjust how the x position is calculated
				    let y = this.chartHeight - padding - point.y * yRatio;
				
				    if (index === 0) {
				        ctx.moveTo(x, y);
				    } else {
				        ctx.lineTo(x, y);
				    }
				
				    if (index === data.length - 1) {
				        ctx.fillText(`(${point.x}, ${point.y})`, x, y - 10); // Display coordinates
				    }
				
				    ctx.arc(x, y, 1.5, 0, Math.PI * 2); // Plotting points
					ctx.moveTo(x, y);
					//ctx.lineTo(x, y);
					
				});
				ctx.stroke();
				
				
				
				
				ctx.translate(15,150); // Moves the origin to the draw position
				ctx.rotate(-Math.PI / 2); // Rotate 90°
				
				// Drawing text
				ctx.fillText("Current(A)", 0, 0);
				
				ctx.restore(); // Restores the previously saved plotting state
				ctx.draw();

			},
			renderArr(arr) {
				console.log(arr)
				let that = this;
				// arr = arr.slice(0, 3)
				arr.forEach((item, index) => {
					// console.log(subArr)
					setTimeout(() => {
						let subArr = item.split(',')
						// console.log(subArr);
						let x = parseFloat(subArr[0])
						let y1 = parseFloat(subArr[1])
						let y2 = parseFloat(subArr[2])
						
						//26214
						x=(2.5*x/65535).toFixed(2)
						
						if(that.e == '1e-5') {
							//0.32
							y1=(1.5*y1/1023/15000*100000).toFixed(2)
							//0.32
							y2=(1.5*y2/1023/15000*100000).toFixed(2)
						}else if(that.e == '1e-4') {
							//0.32
							y1=(1.5*y1/1023/1500*10000).toFixed(2)
							//0.32
							y2=(1.5*y2/1023/1500*10000).toFixed(2)
						}else if(that.e == '1e-3') {
							//0.32
							y1=(1.5*y1/1023/150*1000).toFixed(2)
							//0.32
							y2=(1.5*y2/1023/150*1000).toFixed(2)
						}else if(that.e == '1e-2') {
							//0.32
							y1=(1.5*y1/1023/15*100).toFixed(2)
							//0.32
							y2=(1.5*y2/1023/15*100).toFixed(2)
						}else if(that.e == 'Default') {
							//0.32
							y1=(3.3*y1/1023/10000*100000).toFixed(2)
							//0.32
							y2=(3.3*y2/1023/10000*100000).toFixed(2)
							
							//y1=(8*y1/1023/10000*10000).toFixed(2)
							//y2=(8*y2/1023/10000*10000).toFixed(2)
						}
						
																	
						that.mockData1.push({
							x: `${x}`,
							y: `${y1}`
						});
						that.mockData2.push({
							x: `${x}`,
							y: `${y2}`
						});
						//Plotting
						that.drawChart(that.context1,that.mockData1);
						that.drawChart(that.context2,that.mockData2);
					}, 500 * index); // The delay time is set as the number of iterations multiplied by the interval time
				});
			},
			fetchDataPeriodically(id) {
				let that = this;
				let arr = []
				//The case where no id exists is just clicked in, so you need to set Settings
				if(!id){
					that.$func.usemall.call('app/mp/get').then(resGet => {
						console.log(resGet.result.data.length)
						for (let i = 0; i < resGet.result.data.length; i++) {
							let item = resGet.result.data[i]
							arr = item.arr.substring(2).split('/');
							that.setting = item.setting
							that.e = that.setting.split(',')[4]
						}
						console.log(arr)
						that.renderArr(arr)
						
					});
				}else{
					nfc.readData(function(str) {
						//`b/26214,0.32,0.32/26224,0.36,0.328/26234,0.4,0.5/26244,0.6,0.7`
						console.log(str)
						that.$func.usemall.call('app/mp/update', {
							id : id,
							arr : str
						}).then(res => {
							
							that.$func.usemall.call('app/mp/get',{
								id : id
							}).then(resGet => {
								console.log(resGet.result.data.length)
								for (let i = 0; i < resGet.result.data.length; i++) {
									let item = resGet.result.data[i]
									arr = item.arr.substring(2).split('/');
								}
								console.log(arr)
								that.renderArr(arr)
								
							});
						});
						
					
					
					})
				}
				

			},
			Back() {
				console.log('Back start');
				uni.navigateTo({
					url: `/pages/tabbar/home`
				});
			},
			Param() {
				console.log('Param start',this.setting);
				uni.navigateTo({
					url: `/pages/tabbar/setting?setting=${this.setting}`
				});
			},

		},
	};
</script>

<style>
	canvas {
		width: 100%;
		height: 300px;
	}

	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #f0f0f0;
		height: 100vh;
	}

	.button-group {
		width: 80%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.button {
		margin: 10px 0;
		padding: 20px;
		border-radius: 5px;
		background-color: #007AFF;
		color: white;
		text-align: center;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>