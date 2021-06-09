module.exports.config = {
	name: "anime",
	version: "1.0.0",
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

module.exports.onLoad = async function () {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, readFileSync } = global.nodemodule["fs-extra"];

    const path = resolve(__dirname, 'cache', 'anime.json');
    const url = "https://raw.githubusercontent.com/catalizcs/storage-data/master/anime/anime.json";

    try {
        if (!existsSync(path)) await global.utils.downloadFile(url, path);

        const data = JSON.parse(readFileSync(path));

        if (data.length == 0) await global.utils.downloadFile(url, path);
        return;
    } catch (error) { await global.utils.downloadFile(url, path) };
    
};

module.exports.getAnime = async function (type) {
    try {
        const { readFileSync } = global.nodemodule["fs-extra"];
        const { join } = global.nodemodule["path"];
        const { getContent, downloadFile, randomString } = global.utils;

        const animeData = JSON.parse(readFileSync(__dirname + "/cache/anime.json"));
        
        const dataImage = (await getContent(animeData[type])).data;

        const urlImage = dataImage.data.response.url;

        const ext = urlImage.substring(urlImage.lastIndexOf(".") + 1);

        const string = randomString(5);

        console.log(string)

        const path = join(__dirname, "cache", `${string}.${ext}`);

        await downloadFile(urlImage, path);

        return path;
    } catch (e) { return console.log(e) };
}

module.exports.run = async function({ event, api, args }) {
    const { createReadStream, unlinkSync, readFileSync } = global.nodemodule["fs-extra"];
    const { threadID, messageID } = event;

    const animeData = JSON.parse(readFileSync(__dirname + "/cache/anime.json"));

    if (!animeData.hasOwnProperty(args[0])) {
        var list = [];
        Object.keys(animeData).forEach(endpoint => list.push(endpoint));
        return api.sendMessage(`=== Tất cả các tag của Anime ===\n${list.join(", ")}`, event.threadID, event.messageID);
    }

    else {
        try {
            const path = await this.getAnime(args[0]);
            return api.sendMessage({ attachment: createReadStream(path) }, threadID,  function () { return unlinkSync(path) }, messageID);
        } catch (e) { return console.log(e) };
    }
};