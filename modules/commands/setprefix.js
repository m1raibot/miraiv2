module.exports.config = {
	name: "setprefix",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "Đặt lại prefix của nhóm",
	commandCategory: "config",
	usages: "[prefix/reset]",
	cooldowns: 5
};

module.exports.handleReaction = async function({ api, event, Threads, handleReaction }) {
	try {
		if (event.userID != handleReaction.author) return;
		const { threadID, messageID } = event;
		var data = (await Threads.getData(threadID)).data || {};
		data["PREFIX"] = handleReaction.PREFIX;
		await Threads.setData(threadID, { data });
		await global.data.threadData.set(parseInt(threadID), data);
		return api.sendMessage(`Đã chuyển đổi prefix của nhóm thành: ${handleReaction.PREFIX}`, threadID, messageID);
	} catch (e) { return console.log(e) }
}

module.exports.run = async ({ api, event, args, Threads }) => {
	if (typeof args[0] == "undefined") return api.sendMessage("Phần prefix cần đặt không được để trống", event.threadID, event.messageID);
	let prefix = args[0].trim();
	if (!prefix) return api.sendMessage("Phần prefix cần đặt không được để trống", event.threadID, event.messageID);
	if (prefix == "reset") {
		var data = (await Threads.getData(event.threadID)).data || {};
		data["PREFIX"] = global.config.PREFIX;
		await Threads.setData(event.threadID, { data });
		await global.data.threadData.set(parseInt(event.threadID), data);
		return api.sendMessage(`Đã reset prefix về mặc định ${global.config.PREFIX}`, event.threadID, event.messageID);
	} else return api.sendMessage("Bạn có chắc bạn muốn đổi prefix của nhóm thành: " + prefix, event.threadID, (error, info) => {
		global.client.handleReaction.push({
			name: "setprefix",
			messageID: info.messageID,
			author: event.senderID,
			PREFIX: prefix
		})
	})
}