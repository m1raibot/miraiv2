module.exports.config = {
	name: "penis",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "( ͡° ͜ʖ ͡°)",
	commandCategory: "random-text",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`8${'='.repeat(Math.floor(Math.random() * 10))}D`, event.threadID, event.messageID);