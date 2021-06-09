module.exports.config = {
	name: "wiki",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Tìm mọi thông tin cần biêt thông qua Wikipedia",
	commandCategory: "study",
	usages: "[en] [thông tin cần tìm kiếm]",
	cooldowns: 1,
	dependencies: {
        "wikijs": ""
    }
}

module.exports.run = ({ event, args, api }) => {
    const wiki = (global.nodemodule["wikijs"]).default;
    let content = args.join(" ");
    let url = 'https://vi.wikipedia.org/w/api.php';
    if (args[0] == "en") {
        url = 'https://en.wikipedia.org/w/api.php';
        content = args.slice(1, args.length);
    }
    if (!content) return api.sendMessage("Nội dung cần tìm kiếm không được để trống!", event.threadID, event.messageID);
    return wiki({ apiUrl: url }).page(content).catch(() => api.sendMessage("Không tìm thấy nội dung bạn cần tìm!", event.threadID, event.messageID)).then(page => (typeof page != 'undefined') ? Promise.resolve(page.summary()).then(val => api.sendMessage(val, event.threadID, event.messageID)) : '');

}