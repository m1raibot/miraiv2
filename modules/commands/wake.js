module.exports.config = {
	name: "wake",
	version: "1.0.1",
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

module.exports.run = function({ api, event, args }) {
	let { threadID, messageID } = event;
	const moment = global.nodemodule["moment-timezone"];
	var sleepTime = [];
	let content = args.join(" ");
	var contentHour = content.split(":")[0];
	var contentMinute = content.split(":")[1];
	if (isNaN(contentHour) || isNaN(contentMinute) || contentHour > 23 || contentMinute > 59 || contentHour < 0 || contentMinute < 0 || contentHour.length != 2 || contentMinute.length != 2)  return api.sendMessage(`Không đúng format, hãy xem trong ${global.config.PREFIX}help`, threadID, messageID);
	var getTime = moment().utcOffset("+07:00").format();
	var time = getTime.slice(getTime.indexOf("T") + 1, getTime.indexOf("+"));
	var wakeTime = getTime.replace(time.split(":")[0] + ":", contentHour + ":").replace(time.split(":")[1] + ":", contentMinute + ":");
	for (var i = 6; i > 0; i--) sleepTime.push(moment(wakeTime).utcOffset("+07:00").subtract(90 * i + 15, 'm').format("HH:mm"));
	return api.sendMessage("Nếu bạn muốn thức dậy vào lúc " + content + ", những thời gian hoàn hảo nhất để đi ngủ là:\n" + sleepTime.join(', ') + "\nFact: Thời gian để bạn vào giấc ngủ từ lúc nhắm mắt là 15-20 phút", threadID, messageID);
}