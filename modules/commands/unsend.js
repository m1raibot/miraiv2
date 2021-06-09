module.exports.config = {
	name: "unsend",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Gỡ tin nhắn của bot",
	commandCategory: "system",
	usages: "unsend",
	cooldowns: 0
};

module.exports.run = function({ api, event }) {
	if (event.messageReply.senderID != api.getCurrentUserID()) return api.sendMessage('Không thể gỡ tin nhắn của người khác.', event.threadID, event.messageID);
	if (event.type != "message_reply") return api.sendMessage('Hãy reply tin nhắn cần gỡ.', event.threadID, event.messageID);
	return api.unsendMessage(event.messageReply.messageID);
}