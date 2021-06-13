module.exports.config = {
	name: "daily",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Nhận 200 coins mỗi ngày!",
	commandCategory: "economy",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 43200000,
        rewardCoin: 200
    }
};

module.exports.run = async ({ event, api, Currencies }) => {
    const { daily } = global.configModule,
        cooldownTime = daily.cooldownTime,
        rewardCoin = daily.rewardCoin;

    var { senderID, threadID } = event;

    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldownTime - (Date.now() - (data.dailyCoolDown || 0)) > 0) {
        var time = cooldownTime - (Date.now() - data.dailyCoolDown),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0);

		return api.sendMessage(`Bạn đang trong thời gian chờ\nVui lòng thử lại sau: ${minutes} phút ${(seconds < 10 ? "0" : "")}${seconds} giây!`, threadID);
    }

    else return api.sendMessage(`Bạn đã nhận ${rewardCoin} coins, để có thể tiếp tục nhận, vui lòng quay lại sau 12 tiếng`, threadID, async () => {
        await Currencies.increaseMoney(senderID, rewardCoin);
        data.dailyCoolDown = Date.now();
        await Currencies.setData(senderID, { data });
        return;
    });
}