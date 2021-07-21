module.exports.config = {
	name: "daily",
	version: "1.0.2",
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

module.exports.languages = {
    "vi": {
        "cooldown": "Bạn đang trong thời gian chờ\nVui lòng thử lại sau: %1 giờ %2 phút %3 giây!",
        "rewarded": "Bạn đã nhận %1$, để có thể tiếp tục nhận, vui lòng quay lại sau 12 tiếng"
    },
    "en": {
        "cooldown": "You received today's rewards, please come back after: %1 hours %2 minutes %3 seconds.",
        "rewarded": "You received %1$, to continue to receive, please try again after 12 hours"
    }
}

module.exports.run = async ({ event, api, Currencies, getText }) => {
    const { daily } = global.configModule,
        cooldownTime = daily.cooldownTime,
        rewardCoin = daily.rewardCoin;

    var { senderID, threadID } = event;

    let data = (await Currencies.getData(senderID)).data || {};
    if (typeof data !== "undefined" && cooldownTime - (Date.now() - (data.dailyCoolDown || 0)) > 0) {
        var time = cooldownTime - (Date.now() - data.dailyCoolDown),
            seconds = Math.floor( (time/1000) % 60 ),
            minutes = Math.floor( (time/1000/60) % 60 ),
            hours = Math.floor( (time/(1000*60*60)) % 24 );

		return api.sendMessage(getText("cooldown", hours, minutes, (seconds < 10 ? "0" : "") + seconds), threadID);
    }

    else return api.sendMessage(getText("rewarded", rewardCoin), threadID, async () => {
        await Currencies.increaseMoney(senderID, rewardCoin);
        data.dailyCoolDown = Date.now();
        await Currencies.setData(senderID, { data });
        return;
    });
}