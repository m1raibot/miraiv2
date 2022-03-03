module.exports.config = {
  name: "kuni",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "VDT&NTH",
  description: "kuni",
  commandCategory: "ANIME V2",
  usages: "kuni [Text]",
  cooldowns: 1,
  
  };
      
module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://nekos.life/api/v2/img/kuni').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  
  let callback = function () {
          api.sendMessage({
            attachment: fs.createReadStream(__dirname + `/cache/dog.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/dog.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/dog.${ext}`)).on("close", callback);
      })
}