module.exports.config = {
	name: "roleplay",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Hun, ôm, ... đủ thứ trò in here!",
	commandCategory: "random-img",
	cooldowns: 1,
	dependencies: {
        "request": "",
        "fs-extra": "",
        "path": ""
    }
};

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

module.exports.handleEvent = async ({ event, api }) => {
    if (event.type == "message_unsend") return;
    const {createReadStream, unlinkSync } = global.nodemodule["fs-extra"];

    const data = global.data.threadData.get(parseInt(event.threadID)) || {};
    const  mention = Object.keys(event.mentions);

    if (!data["roleplay"] || !data || mention.length == 0) return;
    
    if (event.body.indexOf("hug") == 0 || event.body.indexOf("ôm") == 0) {
        for (const id of mention) {
            const path = await this.getAnime("hug");
            api.sendMessage({ body: event.mentions[id] + ", I wanna hug you ❤️", mentions: [{ tag: event.mentions[id], id: id }], attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path), event.messageID);
        }
        return;
    }
    if (event.body.indexOf("kiss") == 0 || event.body.indexOf("hôn") == 0 || event.body.indexOf("hun") == 0) {
        for (const id of mention) {
            const path = await this.getAnime("kiss");
            api.sendMessage({ body: event.mentions[id] + ", I wanna kiss you ❤️", mentions: [{ tag: event.mentions[id], id: id }], attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path), event.messageID);
        }
        return;
    }
    if (event.body.indexOf("feed") == 0 || event.body.indexOf("đút") == 0 || event.body.indexOf("banh họng ra") == 0 || event.body.indexOf("mớm") == 0) {
        for (const id of mention) {
            const path = await this.getAnime("feed");
            api.sendMessage({ body: event.mentions[id] + ", say 'Ahhh'", mentions: [{ tag: event.mentions[id], id: id }], attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path), event.messageID);
        }
        return;
    }
    if (event.body.indexOf("pat") == 0 || event.body.indexOf("xoa đầu") == 0) {
        for (const id of mention) {
            const path = await this.getAnime("pat");
            api.sendMessage({ body: event.mentions[id] + ", ...", mentions: [{ tag: event.mentions[id], id: id }], attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path), event.messageID);
        }
        return;
    }
    if (event.body.indexOf("slap") == 0 || event.body.indexOf("tát") == 0 || event.body.indexOf("vả") == 0) {
        for (const id of mention) {
            const path = await this.getAnime("slap");
            api.sendMessage({ body: event.mentions[id] + ", take my slap, b*tch", mentions: [{ tag: event.mentions[id], id: id }], attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path), event.messageID);
        }
        return;
    }
    if (event.body.indexOf("poke") == 0 || event.body.indexOf("chọc") == 0) {
        for (const id of mention) {
            const path = await this.getAnime("poke");
            api.sendMessage({ body: event.mentions[id] + ", HEHEHE", mentions: [{ tag: event.mentions[id], id: id }], attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path), event.messageID);
        }
        return;
    }
}

module.exports.languages = {
	"vi": {
		"on": "bật",
		"off": "tắt",
		"successText": "thành công roleplay!"
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": "success roleplay!"
	}
}

module.exports.run = async ({ event, api, Threads, getText }) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data["roleplay"] == "undefined" || data["roleplay"] == false) data["roleplay"] = true;
	else data["roleplay"] = false;
	
	await Threads.setData(event.threadID, { data });
	global.data.threadData.set(parseInt(event.threadID), data);
	
	return api.sendMessage(`${(data["roleplay"] == true) ? getText("on") : getText("off")} ${getText("successText")}`, event.threadID);
}