const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "loli2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HĐGN",
  description: "Siêu phẩm loli2",
  commandCategory: "Nsfw",
  usages: "walmp",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

let { data } = await axios.get('https://loli-api.glitch.me/api/v1/twintails');
 var callback = () => api.sendMessage({body:`hay`,attachment: fs.createReadStream(__dirname + '/cache/102.jpg')}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/102.jpg'));	
      return request(encodeURI(`${data.url}`)).pipe(fs.createWriteStream(__dirname+'/cache/102.jpg')).on("close",() => callback());
		
		};