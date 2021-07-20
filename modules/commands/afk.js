module.exports.config = {
	name: "afk",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Bật tắt chế độ afk!",
	commandCategory: "other",
	usages: "[reason]",
    cooldowns: 5
};

module.exports.languages = {
    "vi": {
        "turnOffAFK": "[ %1 ] Đã tắt chế độ AFK",
        "warningTag": "Hiện tại người dùng %1 đang bận %2",
        "turnOnAFK": "[ %1 ] Đã bật chế độ AFK",
        "reason": "với lý do: %1"
    },
    "en": {
        "turnOffAFK": "[ %1 ] Turned off AFK mode",
        "warningTag": "User %1 is currently busy %2",
        "turnOnAFK": "[ %1 ] Turned on AFK mode",
        "reason": "with reason: %1"
    }
}

module.exports.handleEvent = ({ event, api, getText }) => {
    const { senderID, threadID, messageID, mentions } = event;
    if (!mentions || !global.moduleData.afkList) return;
    const mention = Object.keys(mentions);
    if (global.moduleData.afkList.has(senderID)) {
        global.moduleData.afkList.delete(senderID);
        return api.sendMessage(getText("turnOffAFK", senderID), threadID, messageID);
    }
    for (const id of mention) {
        if (global.moduleData.afkList.has(id)) {
            const reason = global.moduleData.afkList.get(id);
            return api.sendMessage(getText("warningTag", event.mentions[id], (typeof reason == "string") ? getText("reason", reason) : ""), threadID, messageID);
        }
    };
    return;
};

module.exports.run = ({ event, api, args, getText }) => {
    const { threadID, senderID, messageID } = event;
    const content = args.slice(1, args.length);

    if (!global.moduleData.afkList) global.moduleData.afkList = new Map();
    
    global.moduleData.afkList.set(senderID, content.join(" ") || null);
    return api.sendMessage(getText("turnOnAFK", senderID), threadID, messageID);       
}