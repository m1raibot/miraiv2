module.exports.config = {
	name: "owo",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Just owo",
	commandCategory: "other",
	cooldowns: 5
};

module.exports.run = ({event, api, args}) => {
    let faces = ['(・`ω´・)', ';;w;;', 'owo', 'UwU', '>w<', '^w^'];
    return api.sendMessage(`${ args.join(" ").replace(/(?:r|l)/g, 'w').replace(/(?:R|L)/g, 'W').replace(/n([aeiou])/g, 'ny$1').replace(/N([aeiou])/g, 'Ny$1').replace(/N([AEIOU])/g, 'NY$1').replace(/ove/g, 'uv').replace(/!+/g, ` ${faces[Math.floor(Math.random() * faces.length)]} `).trim()}`, event.threadID, event.messageID);
}