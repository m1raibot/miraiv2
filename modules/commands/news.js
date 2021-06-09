module.exports.config = {
    name: "news",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Mirai Team",
    description: "Tin tức trên vnexpress.net",
    commandCategory: "news",
    usages: "[từ khóa]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "cheerio": "",
        "https": ""
    }
};

module.exports.run = async function({ api, event, args }) {
    const axios = global.nodemodule["axios"];
    const https = global.nodemodule["https"];
    const cheerio = global.nodemodule["cheerio"];
    var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
    var url = "https://timkiem.vnexpress.net/?q=";
    var q = args.join(" ");
    if (!q) return out("Hãy nhập từ khóa bạn muốn tìm kiếm");

    function certificate({ url }) {
        return new Promise(async function(resolve, reject) {
            try {
                var data = (await axios({
                    url: url,
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    responseType: "",
                    httpsAgent: new https.Agent({ rejectUnauthorized: false })
                })).data;
                return resolve(data);
            } catch (e) {
                return reject(e);
            }
        })
    };

    url = url + encodeURIComponent(q);
    var data = await certificate({ url });
    var $ = cheerio.load(data);

    if (!$('h3.title-news').eq(0).text()) return out("Không có kết quả nào với từ khóa của bạn");
    for (let e = 0; e < 3; e++) {
        var title = JSON.stringify($('h3.title-news').eq(e).text()).replace(/\\n|\\t|\"/g, "");
        var desc = $('p.description').eq(e).text();
        var link = $('h3.title-news a').eq(e).attr('href');
        out(`${title}\n\n${desc}\n${link}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}
