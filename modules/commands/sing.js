module.exports.config = {
	name: "sing",
	version: "1.0.7",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Phát nhạc thông qua link YouTube hoặc từ khoá tìm kiếm",
	commandCategory: "media",
	usages: "[link or content need search]",
	cooldowns: 10,
	dependencies: {
		"ytdl-core": "",
		"simple-youtube-api": "",
		"fs-extra": ""
	},
	envConfig: {
		"YOUTUBE_API": "AIzaSyB6pTkV2PM7yLVayhnjDSIM0cE_MbEtuvo"
	}
};

module.exports.languages = {
	"vi": {
		"overSizeAllow": "Không thể gửi file vì dung lượng lớn hơn 25MB.",
		"returnError": "Đã xảy ra vấn đề khi đang xử lý request, lỗi: %1",
		"cantProcess": "Không thể xử lý yêu cầu của bạn!",
		"missingInput": "Phần tìm kiếm không được để trống!",
		"returnList": "🎼 Có %1 kết quả trùng với từ khoá tìm kiếm của bạn: \n%2\nHãy reply(phản hồi) chọn một trong những tìm kiếm trên"
	},
	"en": {
		"overSizeAllow": "Can't send fine because it's bigger than 25MB.",
		"returnError": "Have some problem when handling request, error: %1",
		"cantProcess": "Can't handle your request!",
		"missingInput": "Search section must not be blank!",
		"returnList": "🎼 Have %1 results with your imput: \n%2\nPlease reply choose 1 of these result"
	}
}

module.exports.handleReply = async function({ api, event, handleReply }) {
	const ytdl = global.nodemodule["ytdl-core"];
	const { createReadStream, createWriteStream, unlinkSync, statSync } = global.nodemodule["fs-extra"];
	try {
		ytdl(handleReply.link[event.body - 1])
			.pipe(createWriteStream(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`))
			.on("close", () => {
				if (statSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`).size > 26214400) return api.sendMessage(getText("overSizeAllow"), event.threadID, () => unlinkSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`), event.messageID);
				else return api.sendMessage({attachment: createReadStream(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`)}, event.threadID, () => unlinkSync(__dirname + `/cache/${handleReply.link[event.body - 1]}.m4a`), event.messageID)
			})
			.on("error", (error) => api.sendMessage(getText("returnError", error), event.threadID, event.messageID));
	}
	catch { api.sendMessage(getText("cantProcess"), event.threadID, event.messageID) }
	return api.unsendMessage(handleReply.messageID);
}

module.exports.run = async function({ api, event, args, getText }) {
	const ytdl = global.nodemodule["ytdl-core"];
	const YouTubeAPI = global.nodemodule["simple-youtube-api"];
	const { createReadStream, createWriteStream, unlinkSync, statSync } = global.nodemodule["fs-extra"];
	
	const youtube = new YouTubeAPI(global.configModule[this.config.name].YOUTUBE_API);
	
	if (args.length == 0 || !args) return api.sendMessage(getText("missingInput"), event.threadID, event.messageID);
	const keywordSearch = args.join(" ");
	const videoPattern = /^(https?:\/\/)?(www\.)?(m\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
	const urlValid = videoPattern.test(args[0]);
	
	if (urlValid) {
		try {
			var id = args[0].split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
            (id[2] !== undefined) ? id = id[2].split(/[^0-9a-z_\-]/i)[0] : id = id[0];
			ytdl(args[0])
				.pipe(createWriteStream(__dirname + `/cache/${id}.m4a`))
				.on("close", () => {
					if (statSync(__dirname + `/cache/${id}.m4a`).size > 26214400) return api.sendMessage(getText("overSizeAllow"), event.threadID, () => unlinkSync(__dirname + `/cache/${id}.m4a`), event.messageID);
					else return api.sendMessage({attachment: createReadStream(__dirname + `/cache/${id}.m4a`)}, event.threadID, () => unlinkSync(__dirname + `/cache/${id}.m4a`) , event.messageID)
				})
				.on("error", (error) => api.sendMessage(getText("returnError", error), event.threadID, event.messageID));
		}
		catch { return api.sendMessage(getText("cantProcess"), event.threadID, event.messageID) }
	}
	else {
		try {
			var link = [], msg = "", num = 1;
			let results = await youtube.searchVideos(keywordSearch, 5);
			for (const value of results) {
				if (typeof value.id !== 'undefined') {;
					link.push(value.id);
					msg += (`${num++}. ${value.title}\n`);
				}
			}
			return api.sendMessage(getText("returnList", link.length, msg), event.threadID,(error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID, link }), event.messageID);
		}
		catch (error) { return api.sendMessage(getText("returnError", JSON.stringify(error)), event.threadID, event.messageID) }
	}
}