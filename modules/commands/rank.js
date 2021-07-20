module.exports.config = {
	name: "rank",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "CataliCS",
	description: "Lấy rank hiện tại của bạn trên hệ thống bot, remake rank_card from canvacord",
	commandCategory: "system",
	cooldowns: 20,
	dependencies: {
		"fs-extra": "",
		"path": "",
		"jimp": "",
		"node-superfetch": "",
		"canvas": "",
		"@miraipr0ject/assets": ""
	},
	envConfig: {
		APIKEY: "571752207151901|AC-zG86sv6U6kpnT0_snIHBOHJc"
	}
};

module.exports.makeRankCard = async (data) => {    
    /*
    * 
    * Remake from Canvacord
    * 
    */

    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
	const Canvas = global.nodemodule["canvas"];
	const request = global.nodemodule["node-superfetch"];
	const __root = path.resolve(__dirname, "cache");
	const PI = Math.PI;

    const { id, name, rank, level, expCurrent, expNextLevel } = data;
	
	console.log(await global.utils.assets.font("REGULAR-FONT"));

	Canvas.registerFont(await global.utils.assets.font("REGULAR-FONT"), {
		family: "Manrope",
		weight: "regular",
		style: "normal"
	});
	Canvas.registerFont(await global.utils.assets.font("BOLD-FONT"), {
		family: "Manrope",
		weight: "bold",
		style: "normal"
	});

	let rankCard = await Canvas.loadImage(await global.utils.assets.image("RANKCARD"));
	const pathImg = __root + `/rank_${id}.png`;
	
	var expWidth = (expCurrent * 615) / expNextLevel;
	if (expWidth > 615 - 18.5) expWidth = 615 - 18.5;
	
	let avatar = await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=${global.configModule[this.config.name].APIKEY}`);

	avatar = await this.circle(avatar.body);

	const canvas = Canvas.createCanvas(934, 282);
	const ctx = canvas.getContext("2d");

	ctx.drawImage(rankCard, 0, 0, canvas.width, canvas.height);
	ctx.drawImage(await Canvas.loadImage(avatar), 45, 50, 180, 180);

	ctx.font = `bold 36px Manrope`;
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "start";
	ctx.fillText(name, 270, 164);
	ctx.font = `36px Manrope`;
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "center";

	ctx.font = `bold 32px Manrope`;
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "end";
	ctx.fillText(level, 934 - 55, 82);
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText("Lv.", 934 - 55 - ctx.measureText(level).width - 10, 82);

	ctx.font = `bold 32px Manrope`;
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "end";
	ctx.fillText(rank, 934 - 55 - ctx.measureText(level).width - 16 - ctx.measureText(`Lv.`).width - 25, 82);
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText("#", 934 - 55 - ctx.measureText(level).width - 16 - ctx.measureText(`Lv.`).width - 16 - ctx.measureText(rank).width - 16, 82);

	ctx.font = `bold 26px Manrope`;
	ctx.fillStyle = "#FFFFFF";
	ctx.textAlign = "start";
	ctx.fillText("/ " + expNextLevel, 710 + ctx.measureText(expCurrent).width + 10, 164);
	ctx.fillStyle = "#FFFFFF";
	ctx.fillText(expCurrent, 710, 164);

	ctx.beginPath();
	ctx.fillStyle = "#4283FF";
	ctx.arc(257 + 18.5, 147.5 + 18.5 + 36.25, 18.5, 1.5 * PI, 0.5 * PI, true);
	ctx.fill();
	ctx.fillRect(257 + 18.5, 147.5 + 36.25, expWidth, 37.5);
	ctx.arc(257 + 18.5 + expWidth, 147.5 + 18.5 + 36.25, 18.75, 1.5 * PI, 0.5 * PI, false);
	ctx.fill();

	const imageBuffer = canvas.toBuffer();
	fs.writeFileSync(pathImg, imageBuffer);
	return pathImg;
}

module.exports.circle = async (image) => {
    const jimp = global.nodemodule["jimp"];
	image = await jimp.read(image);
	image.circle();
	return await image.getBufferAsync("image/png");
}

module.exports.expToLevel = (point) => {
	if (point < 0) return 0;
	return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
}

module.exports.levelToExp = (level) => {
	if (level <= 0) return 0;
	return 3 * level * (level - 1);
}

module.exports.getInfo = async (uid, Currencies) => {
	let point = (await Currencies.getData(uid)).exp;
	const level = this.expToLevel(point);
	const expCurrent = point - this.levelToExp(level);
	const expNextLevel = this.levelToExp(level + 1) - this.levelToExp(level);
	return { level, expCurrent, expNextLevel };
}

module.exports.languages = {
	"vi": {
		"userNotExist": "Bạn hiện không có trong cơ sở dữ liệu nên không thể thấy thứ hạng của mình, vui lòng thử lại sau 5 giây."
	},
	"en" :{
		"userNotExist": "You are not currently in the database so you cannot see your rank, please try again in 5 seconds."
	}
}

module.exports.run = async ({ event, api, Currencies, Users, getText }) => {
	const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
	
	let dataAll = (await Currencies.getAll(["userID", "exp"]));

	dataAll.sort(function (a, b) { return b.exp - a.exp });

	const rank = dataAll.findIndex(item => parseInt(item.userID) == parseInt(event.senderID)) + 1;
	if (rank == 0) return api.sendMessage(getText("userNotExist"), event.threadID, event.messageID);
	const name = await Users.getNameUser(event.senderID);
	const point = await this.getInfo(event.senderID, Currencies);
	const timeStart = Date.now();
	let pathRankCard = await this.makeRankCard({ id: event.senderID, name, rank, ...point })
	return api.sendMessage({body: `${Date.now() - timeStart}`, attachment: createReadStream(pathRankCard, {'highWaterMark': 128 * 1024}) }, event.threadID, () => unlinkSync(pathRankCard), event.messageID);
}