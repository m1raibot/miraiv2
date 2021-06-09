module.exports.config = {
	name: "trans",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Dịch văn bản",
	commandCategory: "media",
	usages: "[en/ko/ja/vi] [Text]",
	cooldowns: 5,
	dependencies: {
		"request":  ""
	}
};

module.exports.run = async ({ api, event, args }) => {
	const request = global.nodemodule["request"];
	var content = args.join(" ");
	if (content.length == 0 && event.type != "message_reply") return global.utils.throwError(this.config.name, event.threadID,event.messageID);
	var translateThis = content.slice(0, content.indexOf(" ->"));
	var lang = content.substring(content.indexOf(" -> ") + 4);
	if (event.type == "message_reply") {
		translateThis = event.messageReply.body
		if (content.indexOf("-> ") !== -1) lang = content.substring(content.indexOf("-> ") + 3);
		else lang = 'vi';
	}
	else if (content.indexOf(" -> ") == -1) {
		translateThis = content.slice(0, content.length)
		lang = 'vi';
	}
	return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${translateThis}`), (err, response, body) => {
		if (err) return api.sendMessage("Đã có lỗi xảy ra!", event.threadID, event.messageID);
		var retrieve = JSON.parse(body);
		var text = '';
		retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
		var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
		api.sendMessage(`Bản dịch: ${text}\n - được dịch từ ${fromLang} sang ${lang}`, event.threadID, event.messageID);
	});
}