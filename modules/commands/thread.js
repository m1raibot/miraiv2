module.exports.config = {
	name: "thread",
	version: "0.0.1",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Cấm hoặc gỡ cấm nhóm",
	commandCategory: "system",
	usages: "[unban/ban/search] [ID or text]",
	cooldowns: 5
};

module.exports.handleReaction = async ({ event, api, Threads, handleReaction }) => {
	if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
	switch (handleReaction.type) {
		case "ban": {
			await Threads.setData(handleReaction.target, { banned: 1 });
			let dataThread = global.data.threadBanned.get(parseInt(handleReaction.target)) || {};
			dataThread["banned"] = 1;
			global.data.threadBanned.set(parseInt(handleReaction.target), dataThread);
			api.sendMessage(`[${handleReaction.target}] Đã ban thành công!`, event.threadID, () => api.unsendMessage(handleReaction.messageID));
			break;
		}
		case "unban": {
			await Threads.setData(handleReaction.target, { banned: 0 });
			global.data.threadBanned.delete(parseInt(handleReaction.target));
			api.sendMessage(`[${handleReaction.target}] Đã unban thành công!`, event.threadID, () => api.unsendMessage(handleReaction.messageID));
			break;
		}
		default:
			break;
	}
}

module.exports.run = async ({ event, api, args, Threads }) => {
    let content = args.slice(1, args.length);
	switch (args[0]) {
		case "ban": {
			if (content.length == 0) return api.sendMessage("Bạn cần phải nhập ID thread cần ban!", event.threadID);
			for (let idThread of content) {
				idThread = parseInt(idThread);
				if (isNaN(idThread)) return api.sendMessage(`[${idThread}] không phải là IDthread!`, event.threadID);
				let dataThread = (await Threads.getData(idThread.toString()));
				if (!dataThread) return api.sendMessage(`[${idThread}] thread không tồn tại trong database!`, event.threadID);
				if (dataThread.banned) return api.sendMessage(`[${idThread}] Đã bị ban từ trước`, event.threadID);
				return api.sendMessage(`[${idThread}] Bạn muốn ban thread này ?\n\nHãy reaction vào tin nhắn này để ban!`, event.threadID, (error, info) => {
					global.client.handleReaction.push({
						name: this.config.name,
						messageID: info.messageID,
						author: event.senderID,
						type: "ban",
						target: idThread
					});
				})
			}
			break;
		}
		case "unban": {
			if (content.length == 0) return api.sendMessage("Bạn cần phải nhập ID thread cần ban!", event.threadID);
			for (let idThread of content) {
				idThread = parseInt(idThread);
				if (isNaN(idThread)) return api.sendMessage(`[${idThread}] không phải là IDthread!`, event.threadID);
				let dataThread = (await Threads.getData(idThread.toString()));
				if (!dataThread) return api.sendMessage(`[${idThread}] thread không tồn tại trong database!`, event.threadID);
				if (!dataThread.banned) return api.sendMessage(`[${idThread}] Không bị ban từ trước`, event.threadID);
				return api.sendMessage(`[${idThread}] Bạn muốn unban thread này ?\n\nHãy reaction vào tin nhắn này để ban!`, event.threadID, (error, info) => {
					global.client.handleReaction.push({
						name: this.config.name,
						messageID: info.messageID,
						author: event.senderID,
						type: "unban",
						target: idThread
					});
				})
			}
			break;
		}
		case "search": {
			let contentJoin = content.join(" ");
			let getThreads =  (await Threads.getAll(['threadID', 'name'])).filter(item => !!item.name);
			let matchThreads = [], a = '', b = 0;
			getThreads.forEach(i => {
				if (i.name.toLowerCase().includes(contentJoin.toLowerCase())) {
					matchThreads.push({
						name: i.name,
						id: i.threadID
					});
				}
			});
			matchThreads.forEach(i => a += `\n${b += 1}. ${i.name} - ${i.id}`);
			(matchThreads.length > 0) ? api.sendMessage(`Đây là kết quả phù hợp: \n${a}`, event.threadID) : api.sendMessage("Không tìm thấy kết quả dựa vào tìm kiếm của bạn!", event.threadID);
			break;
		}
		default: {
			return global.utils.throwError(this.config.name, event.threadID, event.messageID)
		}
	}
}