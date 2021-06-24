const { existsSync, writeFileSync, removeSync, mkdirSync, copySync, readdirSync } = require("fs-extra"),
	git                                                                           = require("simple-git"),
	exec                                                                          = require('child_process').exec;

try {
	var configValue = require("./config.json");
	console.log("Đã tìm thấy file config");
}
catch (error) {
	if (error) return console.log("Không tìm thấy file config của bot!");
}

(async () => {
	console.log("====== VUI LÒNG KHÔNG TẮT CMD/TERMINAL NÀY CHO TỚI Khi UPDATE HOÀN TẤT ======");
	await backup();
	await clean();
	await clone();
	await install();
	await modules();
	await finish();
})();

function backup() {
	console.log('-> Đang xóa bản sao lưu cũ');
	removeSync('./tmp');
	console.log('-> Đang sao lưu dữ liệu');
	mkdirSync('./tmp');
	if (existsSync('./modules')) copySync('./modules', './tmp/modules');
	if (existsSync(`./${configValue.APPSTATEPATH}`)) copySync(`./${configValue.APPSTATEPATH}`, `./tmp/${configValue.APPSTATEPATH}`);
	if (existsSync('./config.json')) copySync('./config.json', './tmp/config.json');
	if (existsSync(`./includes/${configValue.DATABASE.sqlite.storage}`)) copySync(`./includes/${configValue.DATABASE.sqlite.storage}`, `./tmp/${configValue.DATABASE.sqlite.storage}`);
	return;
}

function clean() {
	console.log('-> Đang xóa bản cũ');
	readdirSync('.').forEach(item => { if (item != 'tmp' && item != "config.json") removeSync(item); });
	return;
}

function clone() {
	console.log('-> Đang tải bản cập nhật mới');
	return new Promise(function (resolve, reject) {
		git().clone('https://github.com/miraipr0ject/miraiv2', './tmp/newVersion', [], result => {
			if (result != null) reject('[!] Không thể tải xuống bản cập nhật [!]');
			resolve();
		});
	});
}

function install() {
	console.log('-> Đang cài đặt bản cập nhật mới');
	copySync('./tmp/newVersion', './');
	return;
}

function modules() {
	return new Promise(function (resolve, reject) {
		console.log('-> Đang cài đặt modules');
		let child = exec('npm install');
		child.stdout.on('end', resolve);
		child.stderr.on('data', data => {
			if (data.toLowerCase().includes('error')) {
				console.error('[!] Đã có lỗi xảy ra. Vui lòng tạo bài đăng và gửi file updateError.log ở mục Issue trên Github [!]');
				data = data.replace(/\r?\n|\r/g, '');
				writeFileSync('updateError.log', data);
				reject();
			}
		});
	});
}

function finish() {
	console.log('-> Đang hoàn tất');
	if (existsSync(`./tmp/${configValue.APPSTATEPATH}`)) copySync(`./tmp/${configValue.APPSTATEPATH}`, `./${configValue.APPSTATEPATH}`);
	if (existsSync(`./tmp/${configValue.DATABASE.sqlite.storage}`)) copySync(`./tmp/${configValue.DATABASE.sqlite.storage}`, `./includes/${configValue.DATABASE.sqlite.storage}`);
	
	if (existsSync("./tmp/newVersion")) removeSync("./tmp/newVersion");
	console.log('>> Cập nhật hoàn tất <<');
	console.log('>> TẤT CẢ NHỮNG DỮ LIỆU QUAN TRỌNG ĐÃ ĐƯỢC SAO LƯU VÀO THƯ MỤC "tmp" <<');
	return process.exit(0);
}