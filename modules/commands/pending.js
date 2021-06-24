module.exports.config = {
	name: "pending",
	version: "1.0.4",
	credits: "Mirai Team",
	hasPermssion: 2,
	description: "Quản lý tin nhắn chờ của bot",
	commandCategory: "system",
	cooldowns: 5
};

module.exports.handleReply = async function({ api, event, handleReply }) {
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`${singleIndex} Không phải là một con số hợp lệ`, threadID, messageID);
            api.removeUserFromGroup(api.getCurrentUserID(), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(`Đã từ chối thành công ${count} nhóm!`, threadID, messageID);
    }
    else {
        const index = body.split(/\s+/);
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`${singleIndex} Không phải là một con số hợp lệ`, threadID, messageID);
            api.sendMessage("Box của bạn đã được admin phê duyệt để có thể sử dụng bot!", handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(`Đã phê duyệt thành công ${count} nhóm!`, threadID, messageID);
    }
}

module.exports.run = async function({ api, event }) {
	const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;

    try {
		var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
		var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
	}
	catch (e) {
		return api.sendMessage("Không thể lấy danh sách các nhóm đang chờ!", threadID, messageID);
	}

	const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`»「PENDING」«\n❯ Tổng số nhóm cần duyệt: ${list.length} nhóm ❮\n⥥⥥⥥ Reply số thư tự bên dưới để duyệt ⥥⥥⥥\n${msg}`, threadID, (error, info) => {
		global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
	}, messageID);
    else return api.sendMessage("»「PENDING」«\n❯ Hiện tại không có nhóm nào trong hàng chờ ❮", threadID, messageID);
	
}