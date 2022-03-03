module.exports.config = {
	name: "hentai2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "kkk",
	description: "kkk",
	commandCategory: "kkk",
	usages: "kkk",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://trungkien.tk/hentai.php').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/wibu2.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wibu2.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/wibu2.${ext}`)).on("close", callback);
			})
}