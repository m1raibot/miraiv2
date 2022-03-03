const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "pussy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho",
  description: "Kiểm tra thông tin nhs chat.",
  commandCategory: "Hình ảnh",
  usages: "boxinfo",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
     let tagg = await api.getUserInfo(event.senderID);
    let namee = await tagg[event.senderID].name;
  
 
let { data } = await axios.get('https://nekos.life/api/v2/img/pussy_jpg');
 var callback = () => api.sendMessage({body:`Lồn`,attachment: fs.createReadStream(__dirname + "/src/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/src/1.jpg"));  
      return request(encodeURI(`${data.url}`)).pipe(fs.createWriteStream(__dirname+'/src/1.jpg')).on('close',() => callback());
    
    };