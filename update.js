try {
	var { existsSync, writeFileSync, removeSync, mkdirSync, copySync, readdirSync, createWriteStream } = require("fs-extra"),
			axios = require("axios"),
			extract = require("extract-zip"),
			exec = require('child_process').exec;
} catch { return console.error("[!] Hiện tại bạn chưa cài đặt các package hỗ trợ việc update, nhập vào cmd/terminal 'npm install --save fs-extra axios extract-zip child_process'"); }

try {
	var configValue = require("./config.json");
	console.log("Đã tìm thấy file config");
}
catch (error) {
if (error) return console.log("Không tìm thấy file config của bot!");
}

(async () => {
	try {
		console.log("====== VUI LÒNG KHÔNG TẮT CMD/TERMINAL NÀY CHO TỚI KHI UPDATE HOÀN TẤT ======");
		await backup(configValue);
		await clone();
		await clean();
        await unzip();
		await install();
		await modules();
		await finish(configValue);
	} catch (e) { console.log(e) }
})();

async function backup(configValue) {
	console.log('-> Đang xóa bản sao lưu cũ');
	removeSync(process.cwd() + '/tmp');
	console.log('-> Đang sao lưu dữ liệu');
	mkdirSync(process.cwd() + '/tmp');
    mkdirSync(process.cwd() + "/tmp/main")
	if (existsSync('./modules')) copySync('./modules', './tmp/modules');
	if (existsSync(`./${configValue.APPSTATEPATH}`)) copySync(`./${configValue.APPSTATEPATH}`, `./tmp/${configValue.APPSTATEPATH}`);
	if (existsSync('./config.json')) copySync('./config.json', './tmp/config.json');
	if (existsSync(`./includes/${configValue.DATABASE.sqlite.storage}`)) copySync(`./includes/${configValue.DATABASE.sqlite.storage}`, `./tmp/${configValue.DATABASE.sqlite.storage}`);
}

async function clean() {
	console.log('-> Đang xóa bản cũ');
	readdirSync('.').forEach(item => { if (item != 'tmp') removeSync(item); });
}

async function clone() {
	console.log('-> Đang tải bản cập nhật mới');
	const response = await axios({
		method: 'GET',
		url: "https://github.com/miraiPr0ject/miraiv2/archive/refs/heads/main.zip",
		responseType: "stream"
	});

	const writer = createWriteStream("./tmp/main.zip");

	response.data.pipe(writer);

	return new Promise((resolve, reject) => {
		writer.on('finish', resolve);
		writer.on('error', (e) => reject('[!] Không thể tải xuống bản cập nhật [!] ' + e));
	});
}

function unzip() {
	console.log('-> Unzip bản cập nhật mới');
	return extract("./tmp/main.zip", { dir: process.cwd() + "/tmp/main" }, (error) => {
		console.log(error);
        if (error) throw new Error(error);
        else return;
	});
}

function install () {
    console.log('-> Đang cài đặt bản cập nhật mới');
    copySync(process.cwd() + '/tmp/main/miraiv2-main/', './');
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
				console.log("[!] Hủy quá trình cài đặt modules do đã có lỗi xảy ra buộc người dùng phải cài đặt modules bằng tay, tiến hành cài đặt những bước cuối cùng [!]");
				resolve();
			}
		});
	});
}

async function finish(configValue) {
	console.log('-> Đang hoàn tất');
	if (existsSync(`./tmp/${configValue.APPSTATEPATH}`)) copySync(`./tmp/${configValue.APPSTATEPATH}`, `./${configValue.APPSTATEPATH}`);
	if (existsSync(`./tmp/${configValue.DATABASE.sqlite.storage}`)) copySync(`./tmp/${configValue.DATABASE.sqlite.storage}`, `./includes/${configValue.DATABASE.sqlite.storage}`);
	if (existsSync("./tmp/newVersion")) removeSync("./tmp/newVersion");
	console.log('>> Cập nhật hoàn tất <<');
	console.log('>> TẤT CẢ NHỮNG DỮ LIỆU QUAN TRỌNG ĐÃ ĐƯỢC SAO LƯU VÀO THƯ MỤC "tmp" <<');
	return process.exit(0);
}