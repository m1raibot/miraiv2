module.exports.config = {
    name: "setrankup",
    version: "1.0.5",
    hasPermssion: 1,
    credits: "Mirai Team",
    description: "Chỉnh sửa văn bản/ảnh động khi có thành viên mới vừa lên cấp",
    commandCategory: "config",
    usages: "[gif/text] [Text hoặc url tải ảnh gif]",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "path": ""
    }
}

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const path = join(__dirname, "cache", "rankup");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });

    return;
}

module.exports.languages = {
    "vi": {
        "savedConfig": "Đã lưu tùy chỉnh của bạn thành công! dưới đây sẽ là phần preview:",
        "tagMember": "[Tên thành viên]",
        "tagLevel": "[Level của thành viên]",
        "gifPathNotExist": "Nhóm của bạn chưa từng cài đặt gif rankup",
        "removeGifSuccess": "Đã gỡ bỏ thành công file gif của nhóm bạn!",
        "invaildURL": "Url bạn nhập không phù hợp!",
        "internetError": "Không thể tải file vì url không tồn tại hoặc bot đã xảy ra vấn đề về mạng!",
        "saveGifSuccess": "Đã lưu file gif của nhóm bạn thành công, bên dưới đây là preview:"
    },
    "en": {
        "savedConfig": "Saved your config, here is preview:",
        "tagMember": "[Member's name]",
        "tagLevel": "[Member level]",
        "gifPathNotExist":"Your thread didn't set gif join",
        "removeGifSuccess": "Removed thread's gif!",
        "invaildURL": "Invalid url!",
        "internetError": "Can't load file because url doesn't exist or internet have some problem!",
        "saveGifSuccess": "Saved file gif, here is preview:"
    }
}

module.exports.run = async function ({ args, event, api, Threads, getText }) {
    try {
        const { existsSync, createReadStream } = global.nodemodule["fs-extra"];
        const { join } = global.nodemodule["path"];
        const { threadID, messageID } = event;
        const msg = args.slice(1, args.length).join(" ");
        var data = (await Threads.getData(threadID)).data;

        switch (args[0]) {
            case "text": {
                data["customRankup"] = msg;
                global.data.threadData.set(parseInt(threadID), data);
                await Threads.setData(threadID, { data });
                return api.sendMessage(getText("savedConfig"), threadID, function () {
                    const body = msg
                    .replace(/\{name}/g, getText("tagMember"))
                    .replace(/\{level}/g, getText("tagLevel"));
                    return api.sendMessage(body, threadID);
                });
            }
            case "gif": {
                const path = join(__dirname, "cache", "rankup");
                const pathGif = join(path, `${threadID}.gif`);
                if (msg == "remove") {
                    if (!existsSync(pathGif)) return api.sendMessage(getText("gifPathNotExist"), threadID, messageID);
                    unlinkSync(pathGif);
                    return api.sendMessage(getText("removeGifSuccess"), threadID, messageID);
                }
                else {
                    if (!msg.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:gif|GIF)/g)) return api.sendMessage(getText("invaildURL"), threadID, messageID);
                    try {
                        await global.utils.downloadFile(msg, pathGif);
                    } catch (e) { return api.sendMessage(getText("internetError"), threadID, messageID) }
                    return api.sendMessage({ body: getText("saveGifSuccess"), attachment: createReadStream(pathGif) }, threadID, messageID);
                }
            }
            default: {
                return global.utils.throwError(this.config.name, threadID, messageID);
            }
        }
    } catch (e) { return console.log(e) };
}