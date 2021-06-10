module.exports.config = {
	name: "sauce",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Tìm kiếm thông tin ảnh thông qua ảnh (chỉ dành cho anime và hentai)",
	commandCategory: "media",
	cooldowns: 5,
	dependencies: {
		"sagiri": "",
		"axios": ""
	},
	envConfig: {
		"SAUCENAO_API": "61e802b1478f8e85198f28ed6ac2de6efe5d0a41"
	}
};

module.exports.run = async ({ api, event }) => {
	const sagiri = global.nodemodule["sagiri"], search = sagiri(global.configModule[this.config.name].SAUCENAO_API);
	if (event.type != "message_reply") return api.sendMessage(`Vui lòng bạn reply bức ảnh cần phải tìm!`, event.threadID, event.messageID);
	if (event.messageReply.attachments.length > 1) return api.sendMessage(`Vui lòng reply chỉ một ảnh!`, event.threadID, event.messageID);
	if (event.messageReply.attachments[0].type == 'photo') {
		return search(event.messageReply.attachments[0].url).then(response => {
			const data = response[0],
				results = {
					similarity: data.similarity,
					material: data.raw.data.material || 'Không có',
					characters: data.raw.data.characters || 'Original',
					creator: data.raw.data.creator || 'Không biết',
					site: data.site,
					url: data.url
				},
				minSimilarity = 50;
			if (minSimilarity <= ~~results.similarity) {
				return api.sendMessage(
					'Đây là kết quả tìm kiếm được\n' +
					'-------------------------\n' +
					'- Độ tương tự: ' + results.similarity + '%\n' +
					'- Material: ' + results.material + '\n' +
					'- Characters: ' + results.characters + '\n' +
					'- Creator: ' + results.creator + '\n' +
					'- Original site: ' + results.site + ' - ' + results.url,
					event.threadID, event.messageID
				);
			}
			else return api.sendMessage(`Không thấy kết quả nào trùng với ảnh bạn đang tìm kiếm :'(`, event.threadID, event.messageID);
		});
	}
}