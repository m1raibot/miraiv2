module.exports.config = {
	name: "afk",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Bật tắt chế độ afk!",
	commandCategory: "other",
	usages: "[reason]",
    cooldowns: 5
};

module.exports.handleEvent = ({ event, api }) => {
    const { senderID, threadID, messageID, mentions } = event;

    if (!mentions || !global.moduleData.afkList) return;

    const mention = Object.keys(mentions);
    if (global.moduleData.afkList.has(senderID)) {
        global.moduleData.afkList.delete(senderID);
        return api.sendMessage(`[ ${senderID} ] Đã tắt chế độ afk`, threadID, messageID);
    }
    for (const id of mention) {
        if (global.moduleData.afkList.has(id)) {
            const reason = global.moduleData.afkList.get(id);
            return api.sendMessage(`Hiện tại người dùng ${event.mentions[id]} đang bận ${(typeof reason == "string") ? `với lý do: ${reason}` : ""}`, threadID, messageID);
        }
    };
    return;
};

module.exports.run = ({ event, api, args }) => {
    const { threadID, senderID, messageID } = event;
    const content = args.slice(1, args.length);

    if (!global.moduleData.afkList) global.moduleData.afkList = new Map();
    
    global.moduleData.afkList.set(senderID, content.join(" ") || null);
    return api.sendMessage(`[ ${senderID} ] Đã bật chế độ afk`, threadID, messageID);       
}

