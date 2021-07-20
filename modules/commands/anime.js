module.exports.config = {
	name: "anime",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Random lấy ảnh anime! (Safe For Work)",
	commandCategory: "random-img",
	usages: "[tag]",
    cooldowns: 5,
	dependencies: {
        "request": "",
        "fs-extra": "",
        "path": ""
    }
};

module.exports.languages = {
    "vi": {
        "addTags": "=== Tất cả các tag của Anime ===\n%1"
    },
    "en": {
        "addTags": "=== Anime's tags ===\n%1"
    }
}

module.exports.getAnime = async function (type) {
    try {
        const { readFileSync } = global.nodemodule["fs-extra"];
        const { join } = global.nodemodule["path"];
        const { getContent, downloadFile, randomString } = global.utils;
        const animeData = JSON.parse(readFileSync(await global.utils.assets.data("ANIME")));
        const dataImage = (await getContent(animeData[type])).data;
        const urlImage = dataImage.data.response.url;
        const ext = urlImage.substring(urlImage.lastIndexOf(".") + 1);
        const string = randomString(5);
        const path = join(__dirname, "cache", `${string}.${ext}`);
        await downloadFile(urlImage, path);
        return path;
    } catch (e) { return console.log(e) };
}

module.exports.run = async function({ event, api, args, getText }) {
    const { createReadStream, unlinkSync, readFileSync } = global.nodemodule["fs-extra"];
    const { threadID, messageID } = event;

    const animeData = JSON.parse(readFileSync(await global.utils.assets.data("ANIME")));
    
    if (!animeData.hasOwnProperty(args[0])) {
        var list = [];
        Object.keys(animeData).forEach(endpoint => list.push(endpoint));
        return api.sendMessage(getText("addTags", list.join(", ")), event.threadID, event.messageID);
    }

    else {
        try {
            const path = await this.getAnime(args[0]);
            return api.sendMessage({ attachment: createReadStream(path) }, threadID,  function () { return unlinkSync(path) }, messageID);
        } catch (e) { return console.log(e) };
    }
};