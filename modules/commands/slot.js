module.exports.config = {
    name: "slot",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Đánh bạc bằng hình thức hoa quả",
    commandCategory: "game-sp",
    usages: "[số coin cần đặt]",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, Currencies }) {
    const slotItems = ["🍇", "🍉", "🍊", "🍏", "7⃣", "🍓", "🍒", "🍌", "🥝", "🥑", "🌽"];
    const moneyUser = (await Currencies.getData(event.senderID)).money;
    var moneyBet = parseInt(args[0]);
    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage("[ SLOT ] Số coin đặt cược không được để trống hoặc là số coin âm", event.threadID, event.messageID);
	if (moneyBet > moneyUser) return api.sendMessage("[ SLOT ] Số coin bạn đặt lớn hơn số dư của bạn!", event.threadID, event.messageID);
	if (moneyBet < 50) return api.sendMessage("[ SLOT ] Số coin đặt không được dưới 50 coin!", event.threadID, event.messageID);
    var number = [], win = false;
    for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
    if (number[0] == number[1] && number[1] == number[2]) {
        moneyBet *= 9;
        win = true;
    }
    else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
        moneyBet *= 2;
        win = true;
    }
    switch (win) {
        case true: {
            api.sendMessage(`🎰 ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} 🎰\nBạn đã thắng với ${moneyBet} coin`, event.threadID, event.messageID);
            await Currencies.increaseMoney(event.senderID, moneyBet);
            break;
        }
        case false: {
            api.sendMessage(`🎰 » ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} « 🎰\nBạn đã thua và mất ${moneyBet} coin`, event.threadID, event.messageID);
            await Currencies.decreaseMoney(event.senderID, moneyBet);
            break;
        }
    }
}