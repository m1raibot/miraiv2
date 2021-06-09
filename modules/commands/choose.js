module.exports.config = {
	name: "choose",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Nhờ bot chọn giúp một trong những thứ bạn cần làm ở bên dưới",
	commandCategory: "other",
	usages: "[Option 1] | [Option 2]",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;

	var input = args.join(" ").trim();
	if (!input)return api.sendMessage(`Bạn không nhập đủ thông tin kìa :(`, threadID, messageID);
	var array = input.split(" | ");
	return api.sendMessage(`Hmmmm, em sẽ chọn giúp cho là: ${array[Math.floor(Math.random() * array.length)]}.`,threadID, messageID);
}