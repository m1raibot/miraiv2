module.exports.config = {
    name: "setjoin",
    version: "1.0.2",
    hasPermssion: 1,
    credits: "Mirai Team",
    description: "Chỉnh sửa văn bản/ảnh động khi có thành viên mới tham gia",
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

    const path = join(__dirname, "..", "events", "cache", "joinGif");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });

    return;
}

module.exports.run = async function ({ args, event, api, Threads }) {
    try {
        const { existsSync, createReadStream } = global.nodemodule["fs-extra"];
        const { join } = global.nodemodule["path"];
        const { threadID, messageID } = event;
        const msg = args.slice(1, args.length).join(" ");
        var data = (await Threads.getData(threadID)).data;

        switch (args[0]) {
            case "text": {
                data["customJoin"] = msg;
                global.data.threadData.set(parseInt(threadID), data);
                await Threads.setData(threadID, { data });
                return api.sendMessage("Đã lưu tùy chỉnh của bạn thành công! dưới đây sẽ là phần preview:", threadID, function () {
                    const body = msg
                    .replace(/\{name}/g, "[Tên thành viên]")
                    .replace(/\{type}/g, "[Bạn/các bạn]")
                    .replace(/\{soThanhVien}/g, "[Số thành viên]")
                    .replace(/\{threadName}/g, "[Tên nhóm]");
                    return api.sendMessage(body, threadID);
                });
            }
            case "gif": {
                const path = join(__dirname, "..", "events", "cache", "joinGif");
                const pathGif = join(path, `${threadID}.gif`);
                if (msg == "remove") {
                    if (!existsSync(pathGif)) return api.sendMessage("Nhóm của bạn chưa từng cài đặt gif join", threadID, messageID);
                    unlinkSync(pathGif);
                    return api.sendMessage("Đã gỡ bỏ thành công file gif của nhóm bạn!", threadID, messageID);
                }
                else {
                    if (!msg.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:gif|GIF)/g)) return api.sendMessage("Url bạn nhập không phù hợp!", threadID, messageID);
                    try {
                        await global.utils.downloadFile(msg, pathGif);
                    } catch (e) { return api.sendMessage("Không thể tải file vì url không tồn tại hoặc bot đã xảy ra vấn đề về mạng!", threadID, messageID); }
                    return api.sendMessage({ body: "Đã lưu file gif của nhóm bạn thành công, bên dưới đây là preview:", attachment: createReadStream(pathGif) }, threadID, messageID);
                }
            }
            default: {
                return global.utils.throwError(this.config.name, threadID, messageID);
            }
        }
    } catch (e) { return console.log(e) };
}