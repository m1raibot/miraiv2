module.exports.config = {
    name: "caesar",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Mã hóa đoạn văn bản của bạn trở thành Mật Mã Caesar",
    commandCategory: "cipher",
    usages: "[encode/decode] [đoạn text cần mã hóa]",
    cooldowns: 5,
    dependencies:{
        "caesar-salad": ""
    },
    envConfig: {
        "caeserPassword": "266303"
    }
};

module.exports.run = function({ api, event, args }) {
    const Caesar = (global.nodemodule["caesar-salad"]).Caesar;
    const password = global.configModule[this.config.name].caeserPassword;

    const { threadID, messageID, type } = event;

    var content = args.join(" ");

    if (type == "message_reply") (content.indexOf('encode') == 0) ? api.sendMessage(Caesar.Cipher(password).crypt(messageReply.body), threadID, messageID) : (content.indexOf('decode') == 0) ? api.sendMessage(Caesar.Decipher(password).crypt(messageReply.body), threadID, messageID) : global.utils.throwError(this.config.name, threadID, messageID)
    else (content.indexOf('encode') == 0) ? api.sendMessage(Caesar.Cipher(password).crypt(`${args.slice(1, args.length)}`), threadID, messageID) : (content.indexOf('decode') == 0) ? api.sendMessage(Caesar.Decipher(password).crypt(`${args.slice(1, args.length)}`), threadID, messageID) : global.utils.throwError(this.config.name, threadID, messageID);

    return;
}