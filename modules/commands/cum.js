const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "cum",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Kiểm tra thông tin người dùng.",
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

let { data } = await axios.get('https://nekos.life/api/v2/img/cum_jpg');
 var callback = () => api.sendMessage({body:`nhìn phát nứng`,attachment: fs.createReadStream(__dirname + '/cache/1.jpg')}, event.threadID, () => fs.unlinkSync(__dirname + '/cache/1.jpg'));	
      return request(encodeURI(`${data.url}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.jpg')).on("close",() => callback());
		
		};