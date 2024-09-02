// 包路径
const package_NdefRecord = 'android.nfc.NdefRecord';
const package_NdefMessage = 'android.nfc.NdefMessage';
const package_TECH_DISCOVERED = 'android.nfc.action.TECH_DISCOVERED';
const package_Intent = 'android.content.Intent';
const package_Activity = 'android.app.Activity';
const package_PendingIntent = 'android.app.PendingIntent';
const package_IntentFilter = 'android.content.IntentFilter';
const package_NfcAdapter = 'android.nfc.NfcAdapter';
const package_Ndef = 'android.nfc.tech.Ndef';
const package_NdefFormatable = 'android.nfc.tech.NdefFormatable';
const package_Parcelable = 'android.os.Parcelable';
const package_String = 'java.lang.String';




let NfcAdapter;
let NdefRecord;
let NdefMessage;
let readyWriteData = false;
let readyRead = false;
let noNFC = false;
let readCallback = function() {}
let writeCallback = function() {}
let techListsArray = [
	['android.nfc.tech.IsoDep'],
	['android.nfc.tech.NfcA'],
	['android.nfc.tech.NfcB'],
	['android.nfc.tech.NfcF'],
	['android.nfc.tech.Nfcf'],
	['android.nfc.tech.NfcV'],
	['android.nfc.tech.NdefFormatable'],
	['android.nfc.tech.MifareClassi'],
	['android.nfc.tech.MifareUltralight']
];
// 要写入的数据
let text = '{id:123,name:nfc,stie:cssmini.com}';

export default {
	initReadNfcAdapter: function(fun) {
		let main = plus.android.runtimeMainActivity();
		let PendingIntent = plus.android.importClass('android.app.PendingIntent');
		let Intent = plus.android.importClass('android.content.Intent');
		let intent = new Intent(main, main.getClass());
		let pendingIntent = PendingIntent.getActivity(main, 0, intent, 0);
		let IntentFilter = plus.android.importClass('android.content.IntentFilter');
		let ndef = new IntentFilter("android.nfc.action.TECH_DISCOVERED");
		ndef.addDataType("*/*");
		let intentFiltersArray = [ndef];
		NfcAdapter = plus.android.importClass('android.nfc.NfcAdapter');
		let nfcAdapter = NfcAdapter.getDefaultAdapter(main);

		readyRead = true;

		nfcAdapter.disableForegroundDispatch(main);

		console.log('2 新的意图');
		// 轮询调用 NFC
		this.nfcRuning()

		NfcAdapter = nfcAdapter.enableForegroundDispatch(main, pendingIntent, intentFiltersArray, techListsArray);

		readCallback = fun
		return NfcAdapter;
	},
	removeNFCStatus: function() {
		//1 暂停 初始化
		plus.globalEvent.removeEventListener('pause', function(e) {
			console.log(e)
		});

		plus.globalEvent.removeEventListener('newintent', function(e) {
			console.log(e)
		});

		plus.globalEvent.removeEventListener('resume', function(e) {
			console.log(e)
		});

	},
	listenNFCStatus: function() {
		readyWriteData = false;
		readyRead = false;

		console.log("listenNFCStatus")
		// toast("listenNFCStatus");
		let that = this;
		try {
			let main = plus.android.runtimeMainActivity();
			let Intent = plus.android.importClass('android.content.Intent');
			let Activity = plus.android.importClass('android.app.Activity');
			let PendingIntent = plus.android.importClass('android.app.PendingIntent');
			let IntentFilter = plus.android.importClass('android.content.IntentFilter');
			NfcAdapter = plus.android.importClass('android.nfc.NfcAdapter');
			let nfcAdapter = NfcAdapter.getDefaultAdapter(main);

			if (nfcAdapter == null) {
				uni.showToast({
					title: 'The device does not support NFC',
					icon: 'none'
				})
				noNFC = true;
				return;
			}

			if (!nfcAdapter.isEnabled()) {
				uni.showToast({
					title: 'Please enable NFC function in system settings first',
					icon: 'none'
				});
				noNFC = true;
				return;
			} else {
				noNFC = false;
			}

			let intent = new Intent(main, main.getClass());
			intent.addFlags(Intent.FLAG_ACTIVITY_SINGLE_TOP);
			let pendingIntent = PendingIntent.getActivity(main, 0, intent, 0);
			let ndef = new IntentFilter("android.nfc.action.TECH_DISCOVERED");
			ndef.addDataType("*/*");
			let intentFiltersArray = [ndef];
			// toast("addEventListener");
			//1 暂停 初始化
			plus.globalEvent.addEventListener('pause', function(e) {
				// toast('1 暂停');
				// console.log('1 暂停');
				if (nfcAdapter) {
					//关闭前台调度系统
					//恢复默认状态
					nfcAdapter.disableForegroundDispatch(main);
				}
			});
			plus.globalEvent.addEventListener('nfcDiscovered', function(event) {
				console.log('=========================NFC tag disconnected:', event);

				// 在断开连接后重新链接
				// reConnectNFC(); // 自定义函数，用于重新链接 NFC 标签
			});
			//2 新的意图
			plus.globalEvent.addEventListener('newintent', function() {
				// console.log('2 新的意图');
				// toast('2 新的意图');
				// 轮询调用 NFC
				that.nfcRuning()
			});

			//3 继续
			plus.globalEvent.addEventListener('resume', function(e) {
				// console.log('3 继续');
				// toast('3 继续');
				if (nfcAdapter) {
					//开启前台调度系统
					// 优于所有其他NFC
					nfcAdapter.enableForegroundDispatch(main, pendingIntent, intentFiltersArray,
						techListsArray);
				}
			});

			//初始化
			nfcAdapter.enableForegroundDispatch(main, pendingIntent, intentFiltersArray, techListsArray);
			// toast('初始化完成');
			console.log("初始化完成")
		} catch (e) {
			toast(e);
			console.error(e);
		}
	},
	nfcRuning: function() {
		NdefRecord = plus.android.importClass("android.nfc.NdefRecord");
		NdefMessage = plus.android.importClass("android.nfc.NdefMessage");
		let main = plus.android.runtimeMainActivity();
		let intent = main.getIntent();
		let that = this;

		// console.log("nfcRuning:" + intent.getAction());
		// toast("nfcRuning:" + intent.getAction());
		if (package_TECH_DISCOVERED == intent.getAction()) {
			console.log("if", readyWriteData, readyRead)
			// toast(readyWriteData);
			if (readyWriteData) {
				that.write(intent);
				console.log("write")
				readyWriteData = false;
			} else if (readyRead) {
				console.log("read1")
				that.read(intent);
				readyRead = false;
			}
		}
	},
	write(intent) {
		try {
			toast('Please do not remove the tag');
			console.log("text=" + text);

			let textBytes = plus.android.invoke(text, "getBytes");
			console.log(textBytes)
			// image/jpeg text/plain  
			let textRecord = new NdefRecord(NdefRecord.TNF_MIME_MEDIA,
				plus.android.invoke("text/plain", "getBytes"),
				plus.android.invoke("", "getBytes"), textBytes);
			let message = new NdefMessage([textRecord]);
			let Ndef = plus.android.importClass('android.nfc.tech.Ndef');
			let NdefFormatable = plus.android.importClass('android.nfc.tech.NdefFormatable');
			let tag = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG);
			let ndef = Ndef.get(tag);
			if (ndef != null) {
				// 待写入的数据长度
				let size = message.toByteArray().length;
				ndef.connect();
				if (!ndef.isWritable()) {
					toast('tag error！');
					return;
				}
				if (ndef.getMaxSize() < size) {
					toast(`The file size exceeds the capacity! max ${ndef.getMaxSize()}  current ${size}`);
					return;
				}
				ndef.writeNdefMessage(message);
				toast('Write data successfully！size:' + size);
			} else {
				let format = NdefFormatable.get(tag);
				if (format != null) {
					try {
						format.connect();
						format.format(message);
						toast('format tag');
					} catch (e) {
						toast('format tag error');
					}
				} else {
					toast('Tag Not Supported NDEF');
				}
			}
		} catch (e) {
			toast('write error');
			console.log("error=" + e);
		}
		console.log("write done")
		writeCallback()
	},
	readFromSector() {
		toast('请勿移开标签正在读取数据');

		readyRead = true;
		
		
		// 在代码顶部导入 MifareClassic 类
		const package_MifareClassic = 'android.nfc.tech.MifareClassic';

		// 然后在使用 MifareClassic 的地方，确保已经正确导入
		let main = plus.android.runtimeMainActivity();
		let intent = main.getIntent();
		let tag = intent.getParcelableExtra(NfcAdapter.EXTRA_TAG);
		let MifareClassic = plus.android.importClass("android.nfc.tech.MifareClassic");
		console.log(MifareClassic)
		let mifareTag = MifareClassic.get(tag);
		console.log(mifareTag)
		if (mifareTag != null) {
			try {
				mifareTag.connect();
				let sectorIndex = 1; // 示例：读取第2个扇区（索引从0开始）
				let authenticated = mifareTag.authenticateSectorWithKeyA(sectorIndex, MifareClassic.KEY_DEFAULT);
				console.log(authenticated)
				if (authenticated) {
					// 读取扇区中的块
					let blockIndex = mifareTag.sectorToBlock(sectorIndex);
					let blockData = mifareTag.readBlock(blockIndex);
					let dataStr = byteArrayToHexString(blockData);
					toast('NFC 数据：' + dataStr);
					console.log('NFC 数据：', dataStr);
					readCallback(dataStr);
				} else {
					toast('扇区认证失败');
				}
			} catch (e) {
				console.log(e);
				toast('读取过程中发生错误');
			} finally {
				if (mifareTag.isConnected()) {
					mifareTag.close();
				}
			}
		} else {
			toast('不支持MifareClassic标签');
		}
	},

	read() {
		// toast('请勿移开标签正在读取数据');

		let main = plus.android.runtimeMainActivity();
		let intent = main.getIntent();
		readyRead = true;

		let that = this;
		// NFC id
		let bytesId = intent.getByteArrayExtra(NfcAdapter.EXTRA_ID);
		let nfc_id = that.byteArrayToHexString(bytesId);
		console.log('nfc_id:', nfc_id);
		let Parcelable = plus.android.importClass("android.os.Parcelable");
		let rawmsgs = intent.getParcelableArrayExtra("android.nfc.extra.NDEF_MESSAGES");
		console.log(rawmsgs ? rawmsgs.length : 0)

		if (rawmsgs != null && rawmsgs.length > 0) {
			let data = ""
			for (let i = 0; i < rawmsgs.length; i++) {
				console.log("i:" + i)
				// toast("i:" + i);
				let records = rawmsgs[i].getRecords();
				for (let j = 0; j < records.length; j++) {
					// toast("j" + j);
					console.log("j" + j)
					let result = records[j].getPayload();
					console.log("============read==========")
					data += plus.android.newObject(
						"java.lang.String", result);
					// toast('NFC 数据：' + data);
					console.log('NFC 数据：', data);

				}


			}

			readCallback(data)

		} else {
			toast('没有读取到数据');
		}
	},
	read1() {
		// toast('请勿移开标签正在读取数据');

		let main = plus.android.runtimeMainActivity();
		let intent = main.getIntent();
		readyRead = true;

		let that = this;

		// NFC id
		// let bytesId = intent.getByteArrayExtra("android.nfc.NfcAdapter.EXTRA_ID");
		// let nfc_id = that.byteArrayToHexString(bytesId);
		// console.log('nfc_id:', nfc_id);

		// 尝试获取MifareUltralight实例
		let tag = intent.getParcelableExtra("android.nfc.extra.TAG");
		let MifareUltralight = plus.android.importClass("android.nfc.tech.MifareUltralight");
		let mifareUltralight = MifareUltralight.get(tag);

		try {
			// mifareUltralight.connect();
			console.log(mifareUltralight.readPages)
			let payload = mifareUltralight.readPages(4); // 从第0页开始读取
			let dataStr = plus.android.newObject("java.lang.String", payload);
			console.log('读取到的数据：', dataStr);
			// 处理或显示读取到的数据
			toast('读取到的数据：' + dataStr);
			readCallback(dataStr)
		} catch (e) {
			console.error('读取过程中发生错误：', e);
			toast('读取过程中发生错误');
		} finally {
			if (mifareUltralight.isConnected()) {
				mifareUltralight.close();
			}
		}

	},
	byteArrayToHexString: function(inarray) { // converts byte arrays to string  
		let i, j, inn;
		let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
		let out = "";

		for (j = 0; j < inarray.length; ++j) {
			inn = inarray[j] & 0xff;
			i = (inn >>> 4) & 0x0f;
			out += hex[i];
			i = inn & 0x0f;
			out += hex[i];
		}
		return out;
	},
	writeData: function(data,fun) {
		if (noNFC) {
			toast('Please check if the device supports and enables NFC');
			return;
		}
		// 轮询条件
		readyWriteData = true;
		text = data
		writeCallback = fun;
		toast('Close to the NFC tag');
	},
	readData: function(fun) {
		if (noNFC) {
			toast('Please check if the device supports and enables NFC');
			return;
		}
		// 轮询条件
		readyRead = true;
		readCallback = fun
		toast('Close to the NFC tag');
	}
}

function toast(content) {
	uni.showToast({
		title: content,
		icon: 'none',
		duration: 3000
	})
}