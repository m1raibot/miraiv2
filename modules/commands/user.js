module.exports.config = {
	name: "user",
	version: "0.0.3",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Cấm hoặc gỡ cấm người dùng",
	commandCategory: "system",
	usages: "[unban/ban/search] [ID or text]",
	cooldowns: 5
};

module.exports.handleReaction = async ({ event, api, Users, handleReaction }) => {
	if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
	switch (handleReaction.type) {
		case "ban": {
			const name = global.data.userName.get(handleReaction.target) || await Users.getNameUser(handleReaction.target);
			const data = (await Users.getData(handleReaction.target)).data || {};
			data.banned = 1;
			await Users.setData(handleReaction.target, { data });
			global.data.userBanned.set(parseInt(handleReaction.target), 1);
			api.sendMessage(`[${handleReaction.target} | ${name}] Đã ban thành công!`, event.threadID, () => api.unsendMessage(handleReaction.messageID));
			break;
		}
		case "unban": {
			const name = global.data.userName.get(handleReaction.target) || await Users.getNameUser(handleReaction.target);
			const data = (await Users.getData(handleReaction.target)).data || {};
			data.banned = 0;
			await Users.setData(handleReaction.target, { data });
			global.data.userBanned.delete(parseInt(handleReaction.target));
			api.sendMessage(`[${handleReaction.target} | ${name}] Đã unban thành công!`, event.threadID, () => api.unsendMessage(handleReaction.messageID));
			break;
		}
		default:
			break;
	}
}

module.exports.run = async ({ event, api, args, Users }) => {
	let content = args.slice(1, args.length);
	switch (args[0]) {
		case "ban": {
			if (content.length == 0) return api.sendMessage("Bạn cần phải nhập ID người dùng cần ban!", event.threadID);
			for (let idUser of content) {
				idUser = parseInt(idUser);
				if (isNaN(idUser)) return api.sendMessage(`[${idUser}] không phải là IDUser!`, event.threadID);
				let dataUser = (await Users.getData(idUser.toString()));
				if (!dataUser) return api.sendMessage(`[${idUser}] người dùng không tồn tại trong database!`, event.threadID);
				if (dataUser.banned) return api.sendMessage(`[${idUser}] Người dùng đã bị ban từ trước`, event.threadID);
				return api.sendMessage(`[${idUser}] Bạn muốn ban người dùng này ?\n\nHãy reaction vào tin nhắn này để ban!`, event.threadID, (error, info) => {
					global.client.handleReaction.push({
						name: this.config.name,
						messageID: info.messageID,
						author: event.senderID,
						type: "ban",
						target: idUser
					});
				})
			}
			break;
		}
		case "unban": {
			if (content.length == 0) return api.sendMessage("Bạn cần phải nhập ID thread cần ban!", event.threadID);
			for (let idUser of content) {
				idUser = parseInt(idUser);
				if (isNaN(idUser)) return api.sendMessage(`[${idUser}] không phải là ID người dùng!`, event.threadID);
				let dataUser = (await Users.getData(idUser)).data;
				if (!dataUser) return api.sendMessage(`[${idUser}] người dùng không tồn tại trong database!`, event.threadID);
				if (dataUser.banned != 1) return api.sendMessage(`[${idUser}] người dùng không bị ban từ trước`, event.threadID);
				return api.sendMessage(`[${idUser}] Bạn muốn unban người dùng này ?\n\nHãy reaction vào tin nhắn này để ban!`, event.threadID, (error, info) => {
					global.client.handleReaction.push({
						name: this.config.name,
						messageID: info.messageID,
						author: event.senderID,
						type: "unban",
						target: idUser
					});
				})
			}
			break;
		}
		case "search": {
			let contentJoin = content.join(" ");
			let getUsers = (await Users.getAll(['userID', 'name'])).filter(item => !!item.name);
			let matchUsers = [], a = '', b = 0;
			getUsers.forEach(i => {
				if (i.name.toLowerCase().includes(contentJoin.toLowerCase())) {
					matchUsers.push({
						name: i.name,
						id: i.userID
					});
				}
			});
			matchUsers.forEach(i => a += `\n${b += 1}. ${i.name} - ${i.id}`);
			(matchUsers.length > 0) ? api.sendMessage(`Đây là kết quả phù hợp: \n${a}`, event.threadID) : api.sendMessage("Không tìm thấy kết quả dựa vào tìm kiếm của bạn!", event.threadID);
			break;
		}
		default: {
			return global.utils.throwError(this.config.name, event.threadID, event.messageID)
		}
	}
}