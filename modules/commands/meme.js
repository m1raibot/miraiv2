module.exports.config = {
	name: "meme",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Random ảnh chế :D",
	commandCategory: "random-img",
	cooldowns: 1,
	dependencies: {
		"request": "",
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = ({ event, api }) => {
    const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	const { join } = global.nodemodule["path"];
    return request("https://meme-api.herokuapp.com/gimme/memes", async (err, response, body) => {
        if (err) throw err;
        var content = JSON.parse(body);
		const path = join(__dirname, "cache", `${event.threadID}-${event.senderID}-meme.jpg`);
		await global.utils.downloadFile(content.url, path);
		api.sendMessage({body: `${content.title}`, attachment: createReadStream(path)}, event.threadID, () => unlinkSync(path), event.messageID);
    });
}