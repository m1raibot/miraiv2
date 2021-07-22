module.exports.config = {
	name: "baicao",
	version: "1.0.4",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Game bài cào dành cho nhóm có đặt cược",
	commandCategory: "game-mp",
	usages: "[start/join/info/leave]",
	cooldowns: 1
};

module.exports.handleEvent = async ({ event, api, Users }) => {
	const { senderID, threadID, body, messageID } = event;

	if (typeof body == "undefined") return;
	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	if (!global.moduleData.baicao.has(threadID)) return;
	var values = global.moduleData.baicao.get(threadID);
	if (values.start != 1) return;

	if (body.indexOf("chia bài") == 0) {
		if (values.chiabai == 1) return;
		for(const key in values.player) {
			const card1 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			const card2 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			const card3 = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
			var tong = (card1 + card2 + card3);
			if (tong >= 20) tong -= 20;
			if (tong >= 10) tong -= 10;
			values.player[key].card1 = card1;
			values.player[key].card2 = card2;
			values.player[key].card3 = card3;
			values.player[key].tong = tong;
			api.sendMessage(`Bài của bạn: ${card1} | ${card2} | ${card3} \n\nTổng bài của bạn: ${tong}`, values.player[key].id, (error, info) => {
				if (error) api.sendMessage(`Không thể chia bài cho người dùng: ${values.player[key].id}`, threadID)
			});
				
		}
		values.chiabai = 1;
		global.moduleData.baicao.set(threadID, values);
		return api.sendMessage("Bài đã được chia thành công! tất cả mọi người đều có 2 lượt đổi bài nêú không thâý bài hãy kiểm tra lại tin nhắn chờ", threadID);
	}

	if (body.indexOf("đổi bài") == 0) {
		if (values.chiabai != 1) return;
		var player = values.player.find(item => item.id == senderID);
		if (player.doibai == 0) return api.sendMessage("Bạn đã sử dụng toàn bộ lượt đổi bài", threadID, messageID);
		if (player.ready == true) return api.sendMessage("Bạn đã ready, bạn không thể đổi bài!", threadID, messageID);
		const card = ["card1","card2","card3"];
		player[card[(Math.floor(Math.random() * card.length))]] = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
		player.tong = (player.card1 + player.card2 + player.card3);
		if (player.tong >= 20) player.tong -= 20;
		if (player.tong >= 10) player.tong -= 10;
		player.doibai -= 1;
		global.moduleData.baicao.set(values);
		return api.sendMessage(`Bài của bạn sau khi được đổi: ${player.card1} | ${player.card2} | ${player.card3} \n\nTổng bài của bạn: ${player.tong}`, player.id, (error, info) => {
			if (error) api.sendMessage(`Không thể đổi bài cho người dùng: ${player.id}`, threadID)
		});
	}

	if (body.indexOf("ready") == 0) {
		if (values.chiabai != 1) return;
		var player = values.player.find(item => item.id == senderID);
		if (player.ready == true) return;
		const name = await Users.getNameUser(player.id);
		values.ready += 1;
		player.ready = true;
		if (values.player.length == values.ready) {
			const player = values.player;
			player.sort(function (a, b) { return b.tong - a.tong });

			var ranking = [], num = 1;

			for (const info of player) {
				const name = await Users.getNameUser(info.id);
				ranking.push(`${num++} • ${name} với ${info.card1} | ${info.card2} | ${info.card3} => ${info.tong} nút\n`);
			}

			global.moduleData.baicao.delete(threadID);
			return api.sendMessage(`Kết quả:\n\n ${ranking.join("\n")}`, threadID);
		}
		else return api.sendMessage(`Người chơi: ${name} Đã sẵn sàng lật bài, còn lại: ${values.player.length - values.ready} người chơi chưa lật bài`, event.threadID);
	}
	
	if (body.indexOf("nonready") == 0) {
		const data = values.player.filter(item => item.ready == false);
		var msg = [];

		for (const info of data) {
			const name = global.data.userName.get(info.id) || await Users.getNameUser(info.id);
			msg.push(name);
		}
		if (msg.length != 0) return api.sendMessage("Những người chơi chưa ready bao gồm: " + msg.join(", "), threadID);
		else return;
	}
}

module.exports.run = async ({ api, event, args }) => {
	var { senderID, threadID, messageID } = event;

	threadID = String(threadID);
	senderID = String(senderID);
	
	if (!global.moduleData.baicao) global.moduleData.baicao = new Map();
	var values = global.moduleData.baicao.get(threadID) || {};

	switch (args[0]) {
		case "create":
		case "-c": {
			if (global.moduleData.baicao.has(threadID)) return api.sendMessage("Hiện tại nhóm này đang có bàn bài cào đang được mở", threadID, messageID);
			global.moduleData.baicao.set(event.threadID, { "author": senderID, "start": 0, "chiabai": 0, "ready": 0, player: [ { "id": senderID, "card1": 0, "card2": 0, "card3": 0, "doibai": 2, "ready": false } ] });
			return api.sendMessage("Bàn bài cào của bạn đã được tạo thành công!, để tham gia bạn hãy nhập baicao join", threadID, messageID);
		}
		
		case "join":
		case "-j": {
			if (!values) return api.sendMessage("Hiện tại chưa có bàn bài cào nào, bạn có thể tạo bằng cách sử dụng baicao create", threadID, messageID);
			if (values.start == 1) return api.sendMessage("Hiện tại bàn bài cào đã được bắt đầu", threadID, messageID);
			if (values.player.find(item => item.id == senderID)) return api.sendMessage("Bạn đã tham gia vào bàn bài cào này!", threadID, messageID);
			values.player.push({ "id": senderID, "card1": 0, "card2": 0, "card3": 0, "tong": 0, "doibai": 2, "ready": false });
			global.moduleData.baicao.set(threadID, values);
			return api.sendMessage("Bạn đã tham gia thành công!", threadID, messageID);
		}

		case "leave":
		case "-l": {
			if (typeof values.player == "undefined") return api.sendMessage("Hiện tại chưa có bàn bài cào nào, bạn có thể tạo bằng cách sử dụng baicao create", threadID, messageID);
			if (!values.player.some(item => item.id == senderID)) return api.sendMessage("Bạn chưa tham gia vào bàn bài cào trong nhóm này!", threadID, messageID);
			if (values.start == 1) return api.sendMessage("Hiện tại bàn bài cào đã được bắt đầu", threadID, messageID);
			if (values.author == senderID) {
				global.moduleData.baicao.delete(threadID);
				api.sendMessage("Author đã rời khỏi bàn, đồng nghĩa với việc bàn sẽ bị giải tán!", threadID, messageID);
			}
			else {
				values.player.splice(values.player.findIndex(item => item.id === senderID), 1);
				api.sendMessage("Bạn đã rời khỏi bàn bài cào này!", threadID, messageID);
				global.moduleData.baicao.set(threadID, values);
			}
			return;
		}

		case "start":
		case "-s": {
			if (!values) return api.sendMessage("Hiện tại chưa có bàn bài cào nào, bạn có thể tạo bằng cách sử dụng baicao create", threadID, messageID);
			if (values.author !== senderID) return api.sendMessage("Bạn không phải là chủ bàn để có thể bắt đầu", threadID, messageID);
			if (values.player.length <= 1) return api.sendMessage("Hiện tại bàn của bạn không có người chơi nào tham gia, bạn có thể mời người đấy tham gia bằng cách yêu cầu người chơi khác nhập baicao join", threadID, messageID);
			if (values.start == 1) return api.sendMessage("Hiện tại bàn đã được bắt đầu bởi chủ bàn", threadID, messageID);
			values.start = 1;
			return api.sendMessage("Bàn bài cào của bạn được bắt đầu", threadID, messageID);
		}

		case "info":
		case "-i": {
			if (typeof values.player == "undefined") return api.sendMessage("Hiện tại chưa có bàn bài cào nào, bạn có thể tạo bằng cách sử dụng baicao create", threadID, messageID);
			return api.sendMessage(
				"=== Bàn Bài Cào ===" +
				"\n- Author Bàn: " + values.author +
				"\n- Tổng số người chơi: " + values.player.length + " Người"
			, threadID, messageID);
		}

		default: {
			return global.utils.throwError(this.config.name, threadID, messageID);
		}
	}
}