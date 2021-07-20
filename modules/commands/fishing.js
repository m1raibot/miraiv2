module.exports.config = {
    name: "fishing",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Tham gia câu cá ngay trên chính nhóm của bạn",
    commandCategory: "game-mp",
    usages: "help",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "path": "",
        "moment-timezone": "",
        "semver": ""
    }
}

module.exports.onLoad = async function () {
    const _0x2b70=['\x73\x65\x6d\x76\x65\x72','\x32\x34\x34\x34\x35\x48\x4d\x73\x66\x68\x4e','\x33\x67\x74\x52\x69\x48\x65','\x33\x38\x38\x34\x36\x33\x65\x50\x59\x45\x6d\x41','\x63\x6c\x69\x65\x6e\x74','\x37\x32\x34\x34\x35\x49\x61\x48\x6e\x47\x74','\x63\x6f\x6e\x66\x69\x67','\x64\x61\x74\x61','\x63\x6f\x6d\x6d\x61\x6e\x64\x73','\x61\x73\x73\x65\x74\x73','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x6d\x6f\x64\x75\x6c\x65\x73','\x70\x61\x72\x73\x65','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x33\x78\x4b\x4f\x59\x6f\x4c','\x35\x49\x63\x70\x44\x59\x78','\x63\x61\x63\x68\x65','\x70\x61\x74\x68','\x34\x34\x33\x32\x34\x38\x4a\x58\x41\x45\x49\x44','\x34\x33\x39\x35\x30\x35\x4d\x75\x53\x52\x50\x61','\x6e\x61\x6d\x65','\x6c\x6f\x67','\x66\x69\x73\x68\x44\x61\x74\x61','\x34\x35\x36\x37\x31\x30\x50\x61\x57\x4f\x66\x45','\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e\x6a','\x66\x73\x2d\x65\x78\x74\x72\x61','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\u00d4\x4e\x47\x20\x48\u1ed6\x20\x54\x52\u1ee2','\x6d\x61\x69\x6e\x50\x61\x74\x68','\x33\x31\x36\x38\x34\x32\x4c\x6f\x73\x43\x6a\x4b','\x35\x31\x64\x64\x70\x69\x50\x57','\x72\x6f\x64\x44\x61\x74\x61','\x70\x75\x73\x68','\x31\x75\x78\x41\x44\x75\x56','\x20\x43\x48\x4f\x20\x53\x4f\x55\x52\x43','\x76\x65\x72\x73\x69\x6f\x6e','\x45\x20\x43\x4f\x44\x45\x20\x43\u0168\x20','\x75\x74\x69\x6c\x73'];const _0x29913a=_0x281a;function _0x281a(_0x19c8a5,_0x1b212f){return _0x281a=function(_0x4133d0,_0x437583){_0x4133d0=_0x4133d0-(-0x400+0x9a5+-0x2*0x287);let _0x18c4ac=_0x2b70[_0x4133d0];return _0x18c4ac;},_0x281a(_0x19c8a5,_0x1b212f);}(function(_0x2d4da5,_0x273fda){const _0x6b7aea=_0x281a;while(!![]){try{const _0x39a42e=-parseInt(_0x6b7aea(0x99))*parseInt(_0x6b7aea(0xb6))+-parseInt(_0x6b7aea(0xab))+parseInt(_0x6b7aea(0xb5))*parseInt(_0x6b7aea(0xa7))+-parseInt(_0x6b7aea(0xaa))+-parseInt(_0x6b7aea(0x9b))*-parseInt(_0x6b7aea(0x9a))+parseInt(_0x6b7aea(0xb9))*parseInt(_0x6b7aea(0xaf))+parseInt(_0x6b7aea(0xa6))*-parseInt(_0x6b7aea(0x9d));if(_0x39a42e===_0x273fda)break;else _0x2d4da5['push'](_0x2d4da5['shift']());}catch(_0x40879f){_0x2d4da5['push'](_0x2d4da5['shift']());}}}(_0x2b70,-0x21e*0x375+0x33989+0x1135b3));const {mkdirSync,existsSync,readFileSync}=global[_0x29913a(0xa5)][_0x29913a(0xb1)],{join}=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x29913a(0xa9)],semver=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x29913a(0x98)],dirmain=join(global[_0x29913a(0x9c)][_0x29913a(0xb4)],_0x29913a(0xa3),_0x29913a(0xa0),_0x29913a(0xa8),'\x46\x69\x73\x68\x69\x6e\x67\x44\x61\x74'+'\x61'),local=JSON['\x70\x61\x72\x73\x65'](readFileSync(global[_0x29913a(0x9c)][_0x29913a(0xb4)]+(_0x29913a(0xb0)+'\x73\x6f\x6e')));if(!global[_0x29913a(0x9e)][_0x29913a(0xbb)]||semver['\x6c\x74'](local['\x76\x65\x72\x73\x69\x6f\x6e'],global[_0x29913a(0x9e)][_0x29913a(0xbb)]))return console[_0x29913a(0xad)]('\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x20\x4b\x48'+_0x29913a(0xb3)+_0x29913a(0xba)+_0x29913a(0xbc)+'\x3d\x3d\x3d\x3d\x3d\x3d\x3d');if(!existsSync(dirmain))mkdirSync(dirmain);if(typeof global['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75'+'\x6c\x65'][this[_0x29913a(0x9e)][_0x29913a(0xac)]]==_0x29913a(0xb2))global[_0x29913a(0xa2)+'\x6c\x65'][this['\x63\x6f\x6e\x66\x69\x67'][_0x29913a(0xac)]]={};if(typeof global[_0x29913a(0xa2)+'\x6c\x65'][this[_0x29913a(0x9e)][_0x29913a(0xac)]][_0x29913a(0xae)]=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64')global['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75'+'\x6c\x65'][this['\x63\x6f\x6e\x66\x69\x67'][_0x29913a(0xac)]][_0x29913a(0xae)]=[];if(typeof global[_0x29913a(0xa2)+'\x6c\x65'][this[_0x29913a(0x9e)][_0x29913a(0xac)]][_0x29913a(0xb7)]==_0x29913a(0xb2))global[_0x29913a(0xa2)+'\x6c\x65'][this[_0x29913a(0x9e)]['\x6e\x61\x6d\x65']]['\x72\x6f\x64\x44\x61\x74\x61']=[];global[_0x29913a(0xa2)+'\x6c\x65'][this[_0x29913a(0x9e)][_0x29913a(0xac)]]['\x64\x69\x72\x44\x61\x74\x61']=dirmain||null;if(global[_0x29913a(0xa2)+'\x6c\x65'][this[_0x29913a(0x9e)][_0x29913a(0xac)]][_0x29913a(0xae)]['\x6c\x65\x6e\x67\x74\x68']==-0x12c7+0x1f63+0x3*-0x434){const fishData=JSON[_0x29913a(0xa4)](readFileSync(await global[_0x29913a(0x97)]['\x61\x73\x73\x65\x74\x73'][_0x29913a(0x9f)]('\x46\x49\x53\x48\x44\x41\x54\x41')));for(const singleData of fishData)await global['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75'+'\x6c\x65'][this['\x63\x6f\x6e\x66\x69\x67'][_0x29913a(0xac)]][_0x29913a(0xae)][_0x29913a(0xb8)](singleData);}if(global[_0x29913a(0xa2)+'\x6c\x65'][this['\x63\x6f\x6e\x66\x69\x67'][_0x29913a(0xac)]]['\x72\x6f\x64\x44\x61\x74\x61']['\x6c\x65\x6e\x67\x74\x68']==-0x2*-0xc5b+-0x1f9e+0x2*0x374){const rodData=JSON[_0x29913a(0xa4)](readFileSync(await global[_0x29913a(0x97)][_0x29913a(0xa1)][_0x29913a(0x9f)]('\x52\x4f\x44\x44\x41\x54\x41')));for(const singleData of rodData)await global[_0x29913a(0xa2)+'\x6c\x65'][this[_0x29913a(0x9e)][_0x29913a(0xac)]][_0x29913a(0xb7)]['\x70\x75\x73\x68'](singleData);}return;
}

module.exports.makeEmptySlot = function () {
    var fishingSlot = [];
    for (i = 0; i <9; i++) fishingSlot.push({
        name: "Empty",
        size: 0.0,
        price: 0
    })
    return fishingSlot;
}

module.exports.getRarity = function () {
    return this.getRarityRecursion(Math.floor(Math.random() * Math.floor(100)), -1, 0)
}

module.exports.getFish = function (fishRarity, currentHour) {
    return global.configModule[this.config.name].fishData.filter(fish => fish.time.includes(currentHour) && fish.rarity.includes(fishRarity));
}

module.exports.addToInventory = (dataUser, critter) => {
    try {
        if (dataUser.inventory[dataUser.inventory.length - 1].price != 0 || typeof dataUser.inventory[dataUser.inventory.length - 1].price == "undefined") throw "[ Fishing ] Túi của bạn không còn đủ không gian lưu trữ";
        else {
            for (i = 0; i < dataUser.inventory.length; i++) {
                if (dataUser.inventory[i].price == 0) {
                    dataUser.inventory[i] = critter;f
                    i = dataUser.inventory.length;
                }
            }
        }
        return [null, dataUser.inventory];
    }
    catch (error) { return [error, null] }
}

module.exports.getRarityRecursion = function (chance, index, number) {
    const catchChance = {
        'Very Common': 46,
        'Common': 30,
        'Uncommon': 20,
        'Rare': 5,
        'Very Rare': 1
    }
    const rarityList = [
        'Very Common',
        'Common',
        'Uncommon',
        'Rare',
        'Very Rare'
    ]

    if (index === 0 && chance <= catchChance[rarityList[0]]) return rarityList[0]
    else if (index >= rarityList.length - 1 && chance >= catchChance[rarityList[rarityList.length - 1]]) return rarityList[rarityList.length - 1]
    else if (chance > number && chance <= (number + catchChance[rarityList[index + 1]])) return rarityList[index + 1];
    else return this.getRarityRecursion(chance, index + 1, (number + catchChance[rarityList[index + 1]]));
}

module.exports.handleReply = async function ({ event, api, Currencies, handleReply }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { increaseMoney, decreaseMoney } = Currencies;
    const { body, threadID, messageID, senderID } = event;
    const { type, dirUser } = handleReply;

    switch (type) {
        case "menushop": {
            if (isNaN(body)) return api.sendMessage("[ Fishing Shop ] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
            if (body > 4 || body < 1) return api.sendMessage("[ Fishing Shop ] Lựa chọn của bạn không tồn tại!", threadID, messageID);
            switch (body) {
                case "1": {
                    var listItems = [], i = 1;
                    for (const item of global.configModule[this.config.name].rodData) listItems.push(`❯ ${i++}/ ${item.name}: ${item.cost}$ - Độ bền: ${item.durability}, thời gian chờ: ${item.cooldown} giây(s)`);
                    return api.sendMessage(`「 Fishing Buy 」\nHãy reply(Phản hồi) tin nhắn này số bạn chọn\n\n${listItems.join("\n")}`, event.threadID, (error, info) => {
                        client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: event.senderID,
                            type: "buymenu",
                            dirUser
                        });
                    }, event.messageID);
                }

                case "2": {
                    return api.sendMessage("「 Fishing Buy 」\nHãy reply(Phản hồi) tin nhắn này số bạn chọn\n\n❯ 1/ Bán toàn bộ.\n❯ 2/ Bán cá loại 'Rare'.\n❯ 3/ Bán cá loại 'Common'\n❯ 4/ Bán cá loại 'Uncommon'\n❯ 5/ Bán cá loại 'Very common'\n❯ 6/ Bán cá loại 'Very Rare'", threadID, (error, info) => {
                        client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: senderID,
                            type: "sellmenu",
                            dirUser
                        });
                    }, messageID);
                }

                case "3": {
                    return api.sendMessage("「 Fishing Upgrade 」\nHãy reply(Phản hồi) tin nhắn này số bạn chọn\n\n❯ 1/ Upgrade inventory - Nâng cấp túi đồ\n❯ 2/ Fix fishing rod - Sửa chữa cần câu của bạn",threadID, (error, info) => {
                        client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: event.senderID,
                            type: "upgrademenu",
                            dirUser
                        });
                    }, messageID);
                }
            }
        }

        case "buymenu": {
            try {
                if (isNaN(body)) return api.sendMessage("[ Fishing Buy ] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
                const dataItems = global.configModule[this.config.name].rodData
                if (body > dataItems.length || body < 1) return api.sendMessage("[ Fishing Buy ] Lựa chọn của bạn không tồn tại!", threadID, messageID);
                var dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                let userMoney = (await Currencies.getData(senderID)).money;
                const itemUserChoose = dataItems[parseInt(body) - 1];
                if (userMoney < itemUserChoose.cost) return api.sendMessage(`[ Fishing Buy ] Bạn không đủ tiền để có thể mua cần câu mà bạn đã chọn, bạn còn thiếu khoảng ${itemUserChoose.cost - userMoney}$`, threadID, messageID);
                dataUser.fishingrod.rodType = itemUserChoose.rodType;
                dataUser.fishingrod.rodName = itemUserChoose.name;
                dataUser.fishingrod.cooldownTime = itemUserChoose.cooldown;
                dataUser.fishingrod.durability = dataUser.fishingrod.durabilityDefault = itemUserChoose.durability;
                dataUser.fishingrod.moneyFix = Math.floor(Math.random() * (itemUserChoose.moneyFix[1] - itemUserChoose.moneyFix[0] + 1) + itemUserChoose.moneyFix[0]);
                dataUser.fishingrod.rateBroken = itemUserChoose.rateBroken;
                await decreaseMoney(senderID, itemUserChoose.cost);
                writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");
                return api.sendMessage(`[ Fishing Buy ] Bạn đã mua thành công "${itemUserChoose.name}" với giá ${itemUserChoose.cost}$`, threadID, messageID);
            } catch (error) { console.log(error); return api.sendMessage("[ Fishing Buy ] Đã xảy ra lỗi không mong muốn khi bạn đang giao dịch!", threadID, messageID) }
        }

        case "sellmenu": {
            if (isNaN(body)) return api.sendMessage("[ Fishing Sell ] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
            if (body > 6 || body < 1) return api.sendMessage("[ Fishing Sell ] Lựa chọn của bạn không tồn tại!", threadID, messageID);
            switch (body) {
                case "1": {
                    try {
                        var dataUser = JSON.parse(readFileSync(dirUser, "utf-8")), index = 0, totalAll = 0;
                        for (item of dataUser.inventory) {
                            totalAll += item.price;
                            dataUser.inventory[index++] = {
                                name: "Empty",
                                size: 0.0,
                                price: 0
                            };
                        }
                        await increaseMoney(senderID, totalAll);
                        writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");
                        return api.sendMessage(`[ Fishing Sell ] Bạn đã bán thành công toàn bộ cá trong túi và thu về được ${totalAll}$`, threadID, messageID);
                    } catch (error) { console.log(error); return api.sendMessage("[ Fishing Sell ] Đã xảy ra lỗi không mong muốn khi bạn đang giao dịch!", threadID, messageID) }
                }

                case "2": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 

                case "3": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 

                case "4": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 

                case "5": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 

                case "6": {
                    return api.sendMessage("WIP", threadID, messageID);
                } 
            }
        }

        case "upgrademenu": {
            if (isNaN(body)) return api.sendMessage("[ Fishing Sell ] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
            if (body > 2 || body < 1) return api.sendMessage("[ Fishing Sell ] Lựa chọn của bạn không tồn tại!", threadID, messageID);
            switch (body) {
                case "1": {
                    const dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                    return api.sendMessage(`[ Fishing Upgrage ] Hiện tại bạn đang có ${dataUser.inventory.length + 1} vị trí có thể chứa đồ\nĐể mua thêm vị trí chứa đồ, bạn hãy reply(phản hồi) tin nhắn này số lượng vị trí bạn muốn mua!`, threadID, (error, info) => {
                        client.handleReply.push({
                            name: this.config.name,
                            messageID: info.messageID,
                            author: senderID,
                            type: "upgradestorage",
                            dirUser
                        });
                    }, messageID);
                }
                
                case "2": {
                    try {
                        var dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                        let userMoney = (await Currencies.getData(event.senderID)).money;
                        if (dataUser.fishingrod.durability > dataUser.fishingrod.durabilityDefault / 2) return api.sendMessage("[ Fishing Upgrade ] Cần câu của bạn hiện tại vẫn chưa cần sửa chữa", threadID, messageID);
                        if (userMoney < dataUser.fishingrod.moneyFix) return api.sendMessage(`[ Fishing Upgrade ] Bạn không đủ tiền để có thể sửa chữa cần câu của bạn, bạn còn thiếu khoảng ${moneyOfUpgrade - userMoney}$`, threadID, messageID);
                        dataUser.fishingrod.durability = dataUser.fishingrod.durabilityDefault;
                        await decreaseMoney(senderID, dataUser.fishingrod.moneyFix);
                        writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");
                        return api.sendMessage(`[ Fishing Upgrade ] Bạn đã sửa chữa thành công cần câu với giá ${dataUser.fishingrod.moneyFix}$`, threadID, messageID);
                    } catch (error) { console.log(error); return api.sendMessage("[ Fishing Upgrade ] Đã xảy ra lỗi không mong muốn khi bạn đang giao dịch!", threadID, messageID) }
                }
            }
        }

        case "upgradestorage": {
            try {
                if (isNaN(body)) return api.sendMessage("[ Fishing Upgrade ] Lựa chọn của bạn không phải là một con số!", threadID, messageID);
                if (body < 0) return api.sendMessage("[ Fishing Upgrade ] Lựa chọn của bạn không phải là số âm!", threadID, messageID);
                var dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                let userMoney = (await Currencies.getData(senderID)).money;
                const moneyOfUpgrade = parseInt(body) * 2000;
                if (userMoney < moneyOfUpgrade) return api.sendMessage(`[ Fishing Upgrade ] Bạn không đủ tiền để có thể mua thêm vị trí chứa đồ, bạn còn thiếu khoảng ${moneyOfUpgrade - userMoney}$`, threadID, messageID);
                for (var i = 0; i < parseInt(body) - 1; i++) dataUser.inventory.push({
                    name: "Empty",
                    size: 0.0,
                    price: 0,
                });
                await decreaseMoney(senderID, moneyOfUpgrade);
                writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");
                return api.sendMessage(`[ Fishing Upgrade ] Bạn đã mua thành công ${body} vị trí với giá ${moneyOfUpgrade}$!`, threadID, messageID);
            } catch (error) { console.log(error); return api.sendMessage("[ Fishing Upgrade ] Đã xảy ra lỗi không mong muốn khi bạn đang giao dịch!", threadID, messageID) }
        }

        
    }
}

module.exports.run = async function ({ event, api, args }) {
    const { readFileSync, writeFileSync, existsSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const moment = global.nodemodule["moment-timezone"];
    const { threadID, messageID, senderID } = event;
    const dirUser = join(global.configModule[this.config.name].dirData, `${senderID}.json`);

    switch ((args[0] || "").toLowerCase()) {
        case "register":
        case "-r": {
            try {
                if (existsSync(dirUser)) return api.sendMessage("[ Fishing ] Bạn đã từng đăng ký câu cá tại khu vực này!", threadID, messageID);
                var newData = {};
                newData.fishingrod = {
                    "rodType": 0,
                    "enchantRod": {}
                };
                newData.inventory = this.makeEmptySlot();
                newData.totalCatch = newData.totalMoney = newData.point = newData.lastTimeFishing = 0;
                writeFileSync(dirUser, JSON.stringify(newData, null, 4), "utf-8");
                return api.sendMessage("[ Fishing Register ] Bạn đã đăng ký câu cá thành công!", threadID, messageID);
            } catch { return api.sendMessage("[ Fishing Register ] Đã có xảy ra lỗi không mong muốn!", threadID, messageID) }
        }

        case "shop": {
            if (!existsSync(dirUser)) return api.sendMessage("[ Fishing Shop ] Bạn chưa đăng ký câu cá để có thể sử dụng chức năng mua đồ!", threadID, messageID);
            return api.sendMessage("‏‏‎「 Fishing Shop 」\nHãy reply(Phản hồi) tin nhắn này số bạn chọn\n\n❯ 1/ Buy - Mua vật phẩm.\n❯ 2/ Sell - Bán vật phẩm câu được.\n❯ 3/ Upgrade - Nâng cấp vật phẩm.\n❯ 4/ Enchant - Phù phép vật phẩm.", threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "menushop",
                    dirUser
                })
            }, messageID);
        }

        case "inventory":
        case "inv": {
            if (!existsSync(dirUser)) return api.sendMessage("[ Fishing ] Bạn chưa đăng ký câu cá để có thể sử dụng chức năng mua đồ!", threadID, messageID);
            return api.sendMessage("「 Fishing Shop 」\nHãy reply(Phản hồi) tin nhắn này số bạn chọn\n\n❯ 1/ Xem thông số cần câu\n❯ 2/ Xem túi đồ", threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "inventorymenu",
                    dirUser
                })
            }, messageID);
        }
        
        default: {
            try {
                if (!existsSync(dirUser)) return api.sendMessage("[ Fishing ] Bạn chưa đăng ký câu cá tại khu vực này!", threadID, messageID);
                var dataUser = JSON.parse(readFileSync(dirUser, "utf-8"));
                const dateNow = moment().tz("Asia/Ho_Chi_minh");
                const format = new Intl.NumberFormat();
                if (dataUser.fishingrod.rodType == 0) return api.sendMessage("[ Fishing ] Hiện tại bạn chưa có cần câu, hãy mua cần câu mới và thử lại!", threadID, messageID);
                if (dataUser.fishingrod.durability <= 0) return api.sendMessage("[ Fishing ] Cần câu của bạn đã bị gãy từ trước, hãy sửa chữa lại hoặc mua mới để có thể tiếp tục câu cá", threadID, messageID);
                if (Math.floor((dataUser.fishingrod.cooldownTime) - (dateNow.unix() - dataUser.lastTimeFishing)) > 0) return api.sendMessage("[ Fishing ] Hiện tại bạn đang trong thời gian chờ, vui lòng đợi một chút và sau đó thử lại", threadID, messageID);
                
                const fishRarity = this .getRarity();
                const currentHour = dateNow.hours();
                const fishData = await this.getFish(fishRarity, currentHour);
                if (!fishData) return api.sendMessage("[ Fishing ] Hiện tại trong hồ không có cá để câu", threadID, messageID);

                var caught = fishData[Math.floor(Math.random() * ((fishData.length - 1) - 0 + 1)) + 0];
                caught.size = (typeof caught.size != "array") ? caught.size : (Math.random() * (caught.size[1] - caught.size[0]) + caught.size[0]).toFixed(1);
                dataUser.fishingrod.durability = dataUser.fishingrod.durability - Math.floor(Math.random() * (dataUser.fishingrod.rateBroken[1] - dataUser.fishingrod.rateBroken[0] + 1) + dataUser.fishingrod.rateBroken[0]);
                dataUser.lastTimeFishing = dateNow.unix();
                dataUser.totalCatch += 1;
                dataUser.point += caught.price;
                const [error, inventory] = this.addToInventory(dataUser, caught);
                if (error) return api.sendMessage(error, threadID, messageID);
                dataUser.inventory = inventory;
                writeFileSync(dirUser, JSON.stringify(dataUser, null, 4), "utf-8");

                return api.sendMessage(`=== Bạn đã bắt được một con: ${caught.name} ===\n\n❯ Kích thước: ${caught.size} cm\n❯ Độ hiếm: ${caught.rarity}\n❯ Số tiền kiếm được: ${format.format(caught.price)}$`, threadID, messageID);
            } catch (error) { console.log(error); return api.sendMessage("[ Fishing ] Đã có lỗi xảy ra không mong muốn\n'Tau quên dọn hồ nên cá chết hết rồi bây' - CatalizCS", threadID, messageID) }
        }
    }
}