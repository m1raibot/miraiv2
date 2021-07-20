module.exports.config = {
	name: "wake",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Tính thời gian thức dậy hoàn hảo cho bạn",
	commandCategory: "health",
	usages: "[Time]",
	cooldowns: 5,
	dependencies: {
		"moment-timezone": ""
	}
};

module.exports.languages = {
	"vi": {
		"returnTimeSet": "Nếu bạn thức vào lúc %1, những thời gian hoàn hảo nhất để ngủ là:\n%2"	
	},
	"en": {
		"returnTimeSet": "If you wake up at %1, perfect times to go to sleep is:\n%2"	
	}
}

module.exports.run = function({ api, event, args, getText }) {
	let { threadID, messageID } = event;
	const moment = global.nodemodule["moment-timezone"];
	var sleepTime = [];
	let content = args.join(" ");
	var contentHour = content.split(":")[0];
	var contentMinute = content.split(":")[1];
	if (isNaN(contentHour) || isNaN(contentMinute) || contentHour > 23 || contentMinute > 59 || contentHour < 0 || contentMinute < 0 || contentHour.length != 2 || contentMinute.length != 2)  return global.utils.throwError(this.config.name, threadID, messageID);
	var getTime = moment().tz("Asia/Ho_Chi_Minh").format();
	var time = getTime.slice(getTime.indexOf("T") + 1, getTime.indexOf("+"));
	var wakeTime = getTime.replace(time.split(":")[0] + ":", contentHour + ":").replace(time.split(":")[1] + ":", contentMinute + ":");
	for (var i = 6; i > 0; i--) sleepTime.push(moment(wakeTime).tz("Asia/Ho_Chi_Minh").subtract(90 * i + 15, 'm').format("HH:mm"));
	return api.sendMessage(getText("returnTimeSet", content, sleepTime.join(', ')), threadID, messageID);
}