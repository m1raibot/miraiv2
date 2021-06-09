module.exports.config = {
    name: "nhentai",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Tìm kiếm thông tin truyện trên nhentai",
    commandCategory: "nsfw",
    usages: "[ID truyện]",
    cooldowns: 5,
    dependencies: {
        "request": ""
    },
};

module.exports.run = ({ api, event, args }) => {
    const request = global.nodemodule["request"];
    if (!args[0] || typeof parseInt(args[0]) !== "number") return api.sendMessage(`Code lý tưởng dành cho người anh em là: ${Math.floor(Math.random() * 99999)}`, event.threadID, event.messageID);
    return request(`https://nhentai.net/api/gallery/${parseInt(args[0])}`, (error, response, body) => {
        try {
           var codeData = JSON.parse(body);
           if (codeData.error == true) throw new Error();
        }
        catch {
            return api.sendMessage("Không thể tìm thấy truyện bạn yêu cầu!", event.threadID, event.messageID);
        }

        const title = codeData.title.pretty;
        var tagList = [],
            artistList = [],
            characterList = [];
        codeData.tags.forEach(item => (item.type == "tag") ? tagList.push(item.name) : (item.type == "artist") ? artistList.push(item.name) : (item.type == "character") ? characterList.push(item.name) : '');
        var tags = tagList.join(', ');
        var artists = artistList.join(', ');
        var characters = characterList.join(', ');
        if (characters == '') characters = 'Original';
        api.sendMessage(`» Tên: ${title}\n» Tác giả: ${artists}\n» Nhân vật: ${characters}\n» Tags: ${tags}\n» Liên kết: https://nhentai.net/g/${args[0]}`, event.threadID, event.messageID);
    });
}