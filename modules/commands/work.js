module.exports.config = {
	name: "work",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Có làm thì mới có ăn!",
	commandCategory: "Economy",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 1200000
    }
};

module.exports.run = async ({ event, api, Currencies }) => {
    const { threadID, messageID, senderID } = event;
    
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
        var time = cooldown - (Date.now() - data.workTime),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0);
        
		return api.sendMessage(`Bạn đang trong thời gian chờ\nVui lòng thử lại sau: ${minutes} phút ${(seconds < 10 ? "0" : "")}${seconds} giây!`, event.threadID, event.messageID);
    }
    else {
        const job = [
            "đi bán vé số",
            "đi sửa xe",
            "làm nhân viên lập trình",
            "đi hack facebook",
            "làm thợ sửa ống nước ( ͡° ͜ʖ ͡°)",
            "làm đầu bếp",
            "làm thợ hồ",
            "fake taxi",
            "đi gangbang người khác",
            "làm re sờ chym mờ",
            "đi bán hàng online",
            "làm nội trợ",
            "đi vả mấy thằng sao đỏ, giun vàng",
            "đi bán hoa",
            "tìm jav/hentai code cho Nghĩa",
            "đi chơi Yasuo trong rank và gánh team"
        ];
        const amount = Math.floor(Math.random() * 600);
        return api.sendMessage(`Bạn ${job[Math.floor(Math.random() * job.length)]} và đã nhận được số tiền là: ${amount} coins`, threadID, async () => {
            await Currencies.increaseMoney(senderID, parseInt(amount));
            data.workTime = Date.now();
            await Currencies.setData(event.senderID, { data });
            return;
        }, messageID);
    }     
}