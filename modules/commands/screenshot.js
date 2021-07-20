module.exports.config = {
	name: "screenshot",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Screenshot một trang web nào đó (NOT ALLOW NSFW PAGE)",
	commandCategory: "other",
	usages: "[url site]",
	cooldowns: 5,
	dependencies: {
        "fs-extra": "",
        "path": "",
        "url": ""
    }
};

module.exports.languages = {
    "vi": {
        "returnPornWeb": "Trang web bạn nhập không an toàn!!(NSFW PAGE)",
        "returnNull": "Không tìm thấy url này, định dạng không đúng?"
    },
    "en": {
        "returnPornWeb": "Your web is no safe for work!!(NSFW PAGE)",
        "returnNull":"Can't find url, wrong format?"
    }
}

module.exports.run = async ({ event, api, args, getText }) => {
    const { readFileSync, createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
    const url = global.nodemodule["url"];

    if (!global.moduleData.pornList) global.moduleData.pornList = readFileSync(await global.utils.assets.data("PORNLIST"), "utf-8").split('\n').filter(site => site && !site.startsWith('#')).map(site => site.replace(/^(0.0.0.0 )/, ''));
    const urlParsed = url.parse(args[0]);

    if (global.moduleData.pornList.some(pornURL => urlParsed.host == pornURL)) return api.sendMessage(getText("returnPornWeb"), event.threadID, event.messageID);

    try {
        const path = __dirname + `/cache/${global.utils.randomString()}.png`;
        await global.utils.downloadFile(`https://image.thum.io/get/width/1920/crop/400/fullpage/noanimate/${args[0]}`, path);
        api.sendMessage({ attachment: createReadStream(path) }, event.threadID, () => unlinkSync(path));
    }
    catch {
        return api.sendMessage(getText("returnNull"), event.threadID, event.messageID);
    }
}