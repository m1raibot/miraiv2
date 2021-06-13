module.exports.config = {
    name: "caesar",
    version: "1.0.1",
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

    const { threadID, messageID, type , messageReply} = event;

    switch (type) {
        case "message_reply": {
         const content = messageReply.body || "";
            switch (args[0]) {
                case "encode":
                    case "en": {
                        return api.sendMessage(Caesar.Cipher(password).crypt(content), threadID, messageID);
                    }
                 case "decode":
                     case "de": {
                         return api.sendMessage(Caesar.Decipher(password).crypt(content), threadID, messageID);
                     }
                default:
                     return global.utils.throwError("morse", threadID, emessageID);
            }
        }
        default: {
            const content = args.slice(1, args.length);
             switch (args[0]) {
                 case "encode":
                     case "en": {
                         return api.sendMessage(Caesar.Cipher(password).crypt(content), threadID, emessageID);
                     }
                 case "decode":
                     case "de": {
                         return api.sendMessage(Caesar.Decipher(password).crypt(content), threadID, messageID);
                     }
                 default:
                     return global.utils.throwError(this.config.name, threadID, messageID);
             }
        }
    }
}