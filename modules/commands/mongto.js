module.exports.config = {
	name: "mongto",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH với sự Sp của DũngUwU",
	description: "Random ảnh vú có phí",
	commandCategory: "random-img",
	usages: "boy",
	cooldowns: 5
};

module.exports.run = async ({ api, event, Currencies }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	var money = (await Currencies.getData(event.senderID)).money
	if (money >= 1000) {
		axios.get('https://api.leanhtruong.com/img/mong/mong.php').then(res => {
		var callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + '/cache/boy.jpg')
					}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/boy.jpg'), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + '/cache/boy.jpg')).on("close", callback);
				Currencies.setData(event.senderID, options = {money: money - 1000})
			})
	} else return api.sendMessage("Bạn cần 1000 đô ?",event.threadID,event.messageID);
}
