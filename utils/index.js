const assets = require('@miraipr0ject/assets');

module.exports.throwError = function (command, threadID, messageID) {
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	return global.client.api.sendMessage(`[!] » Lệnh bạn đang sử dụng không đúng cú pháp, vui lòng sử dụng ${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX}help ${command} để biết thêm chi tiết cách sử dụng!`, threadID, messageID);
}

module.exports.cleanAnilistHTML = function (text) {
	text = text
		.replace('<br>', '\n')
		.replace(/<\/?(i|em)>/g, '*')
		.replace(/<\/?b>/g, '**')
		.replace(/~!|!~/g, '||')
		.replace("&amp;", "&")
		.replace("&lt;", "<")
		.replace("&gt;", ">")
		.replace("&quot;", '"')
		.replace("&#039;", "'");
	return text;
}

module.exports.downloadFile = async function (url, path) {
	const { createWriteStream } = require('fs');
	const axios = require('axios');

	const response = await axios({
		method: 'GET',
		responseType: 'stream',
		url
	});

	const writer = createWriteStream(path);

	response.data.pipe(writer);

	return new Promise((resolve, reject) => {
		writer.on('finish', resolve);
		writer.on('error', reject);
	});
};

module.exports.getContent = async function(url) {
	try {
		const axios = require("axios");

		const response = await axios({
			method: 'GET',
			url
		});

		const data = response;

		return data;
	} catch (e) { return console.log(e); };
}

module.exports.randomString = function (length) {
	var result           = '';
	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+=-';
	var charactersLength = characters.length || 5;
	for ( var i = 0; i < length; i++ ) result += characters.charAt(Math.floor(Math.random() * charactersLength));
	return result;
}

module.exports.assets = {
	async font (name) {
		if (!assets.font.loaded) await assets.font.load();
		return assets.font.get(name);
	},
	async image (name) {
		if (!assets.image.loaded) await assets.image.load();
		return assets.image.get(name);
	},
	async data (name) {
		if (!assets.data.loaded) await assets.data.load();
		return assets.data.get(name);
	}

}