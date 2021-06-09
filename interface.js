const readline = require("readline");
const chalk = require("chalk");
const figlet = require("figlet");
const fs = require("fs-extra");
const os = require("os");
const { execSync } = require('child_process');

require("npmlog").emitLog = () => {};

let rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: '> '
});

let commands = {
	1: {
		"de": "Lấy appstate bot",
		run: function() {
			try {
				delete require.cache[require.resolve(`./login.js`)];
				execSync('node login', {stdio: 'inherit'});
			} catch (e) {
				console.log(e.message);
				console.log(chalk.bold.red("Failed!"));
			}
		}
	},
	2: {
		"de": "Khởi động bot",
		run: function() {
			try {
				delete require.cache[require.resolve(`./mirai.js`)];
				execSync('node mirai', {stdio: 'inherit'});
			} catch (e) {
				console.log(e.message);
				console.log(chalk.bold.red("Failed!"));
			}
		}
	},
	3: {
		"de": "Khởi động bot bypass lỗi",
		run: function() {
			const start = () => execSync('node mirai', {stdio: 'inherit'});
			try {
				delete require.cache[require.resolve(`./mirai.js`)];
				start();
			} catch (e) {
				delete require.cache[require.resolve(`./mirai.js`)];
				start();
			}
		}
	},
	4: {
		"de": "Sao lưu giữ liệu bot",
		run: function() {
			//db, module, cache module, appstate, config.json => zip
			console.log("im working later xD");
		}
	},
	5: {
		"de": "Đặt lại toàn bộ module command",
		run: function() {
			console.log("im working later xD");
		}
	},
	6: {
		"de": "Xoá cache, Giải phóng dung lượng",
		run: function() {
			console.log("im working later xD");
		}
	},
	7: {
		"de": "Đặt chế độ tự động chạy",
		run: function() {
			if (fs.existsSync(__dirname + "/.autorun")) {
				var content = fs.readFileSync(__dirname + "/.autorun");
				console.log(`Hiện tại bạn đang đặt tự chạy mặc định là: ${commands[content].de}`);
				rl.question("Nhập tuỳ chọn bạn muốn tự động chạy: ", (termIn) => {
					if (!commands[termIn].de) return console.log(chalk.bold.red("Tuỳ chọn của bạn không tồn tại"));
					fs.writeFileSync(__dirname + "/.autorun", termIn);
					console.log(chalk.bold.blue("Bạn đã đặt tự động chạy là: ") + commands[termIn].de);
					return console.log(chalk.bold.green("Đã lưu lại cài đặt của bạn thành công, hãy restart để có thể áp dụng!"));
				});
			}
			else {
				console.log(`Hiện tại bạn chưa đặt mặc định tự động chạy`);
				rl.question("Nhập tuỳ chọn bạn muốn tự động chạy: ", (termIn) => {
					if (!commands[termIn].de) return console.log(chalk.bold.red("Tuỳ chọn của bạn không tồn tại"));
					fs.writeFileSync(__dirname + "/.autorun", termIn);
					console.log(chalk.bold.blue("Bạn đã đặt tự động chạy là: ") + commands[termIn].de);
					return console.log(chalk.bold.green("Đã lưu lại cài đặt của bạn thành công, hãy restart để có thể áp dụng!"));
				});
			}
		}
	},
	8: {
		"de": "Exit",
		run: function() {
			process.exit();
		}
	}
}

if (fs.existsSync(__dirname + "/.autorun")) {
	async function Loop() {
		var content = fs.readFileSync(__dirname + "/.autorun");
		console.log(`Hiện tại bạn đang đặt tự chạy mặc định là: ${commands[content].de}, bắt đầu thực thi sau 500ms`);
		console.log(`Để có thể ngưng tự động chạy, bạn chỉ cần xoá file ${chalk.bold.red(".autorun")} để tắt chức năng này`);
		await execSync('npm update --force', {stdio: 'inherit'});
		console.log(`Đã cập nhật toàn bộ package lên phiên bản cao nhất!`);
		await new Promise(resolve => setTimeout(resolve, 500));
		await commands[content].run();
	}
	try {
		Loop();
	}
	catch (e) {
		Loop();
	}
}
else {
	console.clear();
	console.log(chalk.yellow(figlet.textSync('Mirai Panel', { horizontalLayout: 'full' })));
	console.log(chalk.blue("	================== © 2020 CatalizCS ==================\n"));
	console.log(
		`${chalk.blueBright("> ")}Version Bot: ${chalk.cyan(JSON.parse(fs.readFileSync('package.json')).version)}\n` +
		`${chalk.blueBright("> ")}Device Information: ${chalk.cyan(os.version())}\n` +
		`${chalk.blueBright("> ")}Node Version: ${chalk.cyan(process.versions.node)}\n` + 
		`${chalk.blueBright("> ")}CPU Name: ${chalk.cyan(os.cpus()[0].model)}(Cores/Threads: ${chalk.cyan(os.cpus().length)})\n` 
	);
	console.log(chalk.blue("	============ " + chalk.bold.magenta("Hãy chọn một trong những tuỳ chọn bên dưới") + " ============\n"));
	let choose = "";
	let objectKey = Object.keys(commands);
	objectKey.forEach(item => {
		choose += `${item}/ ${commands[item].de}\n`
	});
	console.log(choose);
	
	rl.prompt();
	
	rl.on('line', async (input) => {
		input = input.toLowerCase();
		if (!input) {
			console.log(chalk.bold.red("Bạn cần phải lựa chọn và nhập các tuỳ chọn có sẵn ở trên"));
			rl.prompt();
			return;
		}
		if (input in commands) {
			await commands[input].run();
			rl.prompt();
			return;
		}
		else {
			console.log(chalk.bold.red("Tuỳ chọn của bạn không tồn tại"));
			rl.prompt();
			return;
		}
	});
}