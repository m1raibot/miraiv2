module.exports.config = {
    name: "morse",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Mã hoá đoạn văn bản của bạn trở thành mã morse",
    commandCategory: "cipher",
    usages: "[encode hoặc decode] [đoạn text ASCII cần mã hoá]",
    cooldowns: 5,
    dependencies: {
        "morsify": ""
    }
};

module.exports.run = function({ api, event, args }) {
   const morsify = global.nodemdule["morsify"];
   switch (event.type) {
       case "message_reply": {
        const content = event.messageReply.body || "";
           switch (args[0]) {
               case "encode":
                   case "en": {
                       return api.sendMessage(morsify.encode(content), event.threadID, event.messageID);
                   }
                case "decode":
                    case "de": {
                        return api.sendMessage(morsify.decode(content), event.threadID, event.messageID);
                    }
               default:
                    return global.utils.throwError("morse", event.threadID, event.messageID);
           }
       }
       default: {
           const content = args.slice(1, args.length);
            switch (args[0]) {
                case "encode":
                    case "en": {
                        return api.sendMessage(morsify.encode(content), event.threadID, event.messageID);
                    }
                case "decode":
                    case "de": {
                        return api.sendMessage(morsify.decode(content), event.threadID, event.messageID);
                    }
                default:
                    return global.utils.throwError("morse", event.threadID, event.messageID);
            }
       }
   }
}