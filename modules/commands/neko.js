module.exports.config = {
    name: "neko",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "HTHB",
    description: "Kho Ảnh của NEKOS",
    commandCategory: "nsfw",
    usages: "neko",
    cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const { threadID, messageID } = event;
  var type;
  switch(args[0]) {
  case "futanari": {
        type = "futanari";
        break;
    }
    case "anal": {
        type = "anal";
        break;
    }  
case "pussy_jpg": {
        type = "pussy_jpg";
        break;
    } 
case "ngif": {
        type = "ngif";
        break;
    }  
case "lewdk": {
        type = "lewdk";
        break;
    } 
case "lewd": {
        type = "lewd";
        break;
    }
    case "trap": {
        type = "trap";
        break;
    }
    case "boobs": {
        type = "boobs";
        break;
    }
    case "femdom": {
        type = "femdom";
        break;
    }
    case "waifu": {
        type = "waifu";
        break;
    } 
     case "classic": {
        type = "classic";
        break;
    }
    case "kuni": {
        type = "kuni";
        break;
    }
    case "spank": {
        type = "spank";
        break;
    }
    case "blowjob": {
        type = "blowjob";
        break;
    }
    case "kiss": {
        type = "kiss";
        break;
    }
    case "meow": {
        type = "meow";
        break;
    }
    case "erofeet": {
        type = "erofeet";
        break;
    }
    case "nsfw_avatar": {
        type = "nsfw_avatar";
        break;
    }
    case "erok": {
        type = "erok";
        break;
    }
    case "eron": {
        type = "eron";
        break;
    }
    case "feetg": {
        type = "feetg";
        break;
    }
    case "hentai": {
        type = "hentai";
        break;
    } 
case "kemonomimi": {
        type = "kemonomimi";
        break;
    }
    case "baka": {
        type = "baka";
        break;
    }
    case "hentai": {
        type = "hentai";
        break;
    }
    case "neko": {
        type = "neko";
        break;
    }
    case "keta": {
        type = "keta";
        break;
    } 
case "yuri": {
        type = "yuri";
        break;
    }
    case "lizard": {
        type = "lizard";
        break;
    }
  case "solog": {
        type = "solog";
        break;
    }
    case "smug": {
        type = "smug";
        break;
    }  
case "smallboobs": {
        type = "smallboobs";
        break;
    } 
case "lewdkemo": {
        type = "lewdkemo";
        break;
    }
    case "woof": {
        type = "woof";
        break;
    }
    case "gasm": {
        type = "gasm";
        break;
    }
    case "solo": {
        type = "solo";
        break;
    }
    case "8ball": {
        type = "8ball";
        break;
    } 
case "goose": {
        type = "goose";
        break;
    }
    case "cuddle": {
        type = "cuddle";
        break;
    }
    case "avatar": {
        type = "avatar";
        break;
    }
    case "cum": {
        type = "cum";
        break;
    }
    case "pussy": {
        type = "pussy";
        break;
    }
    case "holoero": {
        type = "holoero";
        break;
    }
    case "eroyuri": {
        type = "eroyuri";
        break;
    }
    case "feed": {
        type = "feed";
        break;
    }
    case "erokemo": {
        type = "erokemo";
        break;
    }
    case "pwankg": {
        type = "pwankg";
        break;
    }
    case "nekoapi_v3.1": {
        type = "nekoapi_v3.1";
        break;
    }
    case "smallboobs": {
        type = "smallboobs";
        break;
    } 
case "lewdkemo": {
        type = "lewdkemo";
        break;
    }
    case "woof": {
        type = "woof";
        break;
    }
    case "gasm": {
        type = "gasm";
        break;
    }
    case "ero": {
        type = "ero";
        break;
    }
    case "hololewd": {
        type = "hololewd";
        break;
    } 
case "pat": {
        type = "pat";
        break;
    }
    case "gecg": {
        type = "gecg";
        break;
    }
    case "pat": {
        type = "pat";
        break;
    }
    case "holo": {
        type = "holo";
        break;
    }
    case "poke": {
        type = "poke";
        break;
    }
    case "les": {
        type = "les";
        break;
    }
    case "v3": {
        type = "v3";
        break;
    }
    case "bj": {
        type = "bj";
        break;
    }
    case "erokemo": {
        type = "erokemo";
        break;
    }
    case "pwankg": {
        type = "pwankg";
        break;
    }
    case "nekoapi_v3.1": {
        type = "nekoapi_v3.1";
        break;
    }
    case "girlSoloGif": {
        type = "girlSoloGif";
        break;
    }
    default:
    return api.sendMessage(`Sai định dạng!\n${global.config.PREFIX}nekos solog, smug, feet, smallboobs, lewdkemo, woof, gasm, solo, 8ball, goose, cuddle, avatar, cum, slap, les, v3, erokemo, bj, pwankg, nekoapi_v3.1, ero, hololewd, pat, gecg, holo, poke, feed, fox_girl, tits, nsfw_neko_gif, eroyuri, holoero, pussy, Random_hentai_gif, lizard, yuri, keta, neko, hentai, feetg, eron, erok, baka, kemonomimi, hug, cum_jpg, nsfw_avatar, erofeet, meow, kiss, wallpaper, tickle, blowjob, spank, kuni, classic, waifu, femdom, boobs, trap, lewd, pussy_jpg, anal, futanari, ngif, lewdk,girlSoloGif`, threadID, messageID);
    break;
  }
axios.get(`https://nekos.life/api/v2/img/${type}`).then(res => {
let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
    let callback = function () {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/${type}.${ext}`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/${type}.${ext}`), event.messageID);
                };
                request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/${type}.${ext}`)).on("close", callback);
            })
}