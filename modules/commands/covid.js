module.exports.config = {
	name: "covid",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy thông tin về tình hình dịch bệnh COVID-19",
	commandCategory: "other",
	cooldowns: 5,
	dependencies: {
		"axios": ""
	}
};

module.exports.languages = {
	"vi": {
		"return": "====== Thế Giới ======\n😷 Nhiễm: %1\n💚 Đã hồi phục: %2\n💀 Tử vong: %3\n====== Việt Nam ======\n😷 Nhiễm: %4\n💚 Đã hồi phục: %5\n💀 Tử vong: %6\n📰 Tin tức mới nhất: %7\nDữ liệu được cập nhật vào lúc: %8 (UTC +7)"
	},
	"en": {
		"return": "====== World ======\n😷 Cases: %1\n💚 Recovered: %2\n💀 Deaths: %3\n====== VietNam ======\n😷 Cases: %4\n💚 Recovered: %5\n💀 Deaths: %6\n📰 News: %7\nData is updated at: %8 (UTC +7)"
	}
}

module.exports.run = async function({ api, event, getText }) {
	const axios = global.nodemodule["axios"];
	let data = (await axios.get('https://www.spermlord.ga/covid')).data;
	return api.sendMessage(getText("return", data.thegioi.nhiem, data.thegioi.hoiphuc, data.thegioi.tuvong, data.vietnam.nhiem, data.vietnam.hoiphuc, data.vietnam.tuvong, data.tintuc, data.updatedAt), event.threadID, event.messageID);
}