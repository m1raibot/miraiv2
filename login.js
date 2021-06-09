const fs = require("fs-extra");
const login = require("fca-unofficial");
const readline = require("readline");
const totp = require("totp-generator");

let configPath = "";
let argv = process.argv.slice(2);
if (argv.length !== 0) configPath = argv[0];
else configPath = "./config.json";

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const option = {
	logLevel: "silent",
	forceLogin: true,
	userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.72 Safari/537.36"
};

const config = require(`./${configPath}`);
let email = config.EMAIL;
let password = config.PASSWORD;
let otpkey = config.OTPKEY.replace(/\s+/g, '').toLowerCase();

login({ email, password }, option, (err, api) => {
	if (err) {
		switch (err.error) {
			case "login-approval":
				if (otpkey) err.continue(totp(otpkey));
				else {
					console.log("Nhập mã xác minh 2 lớp:");
					rl.on("line", line => {
						err.continue(line);
						rl.close();
					});
				}
				break;
			default:
			console.error(err);
			process.exit(1);
		}
		return;
	}
	const json = JSON.stringify(api.getAppState());
	fs.writeFileSync(`./${config.APPSTATEPATH}`, json);
	console.log("Đã ghi xong appstate!");
	process.exit(0);
});
