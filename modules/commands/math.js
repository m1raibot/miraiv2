module.exports.config = {
	name: "math",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Làm toán",
	commandCategory: "study",
	usages: "math 1 + 2",
	cooldowns: 5,
	dependencies: {
		"axios": "",
		"fs-extra": ""
	},
	info: [
		{
			key: 'none',
			prompt: '',
			type: 'Phép toán',
			example: 'math x+1=2'
		},
		{
			key: '-p',
			prompt: 'Nguyên Hàm',
			type: 'Phương trình',
			example: 'math -p xdx'
		},
		{
			key: '-p',
			prompt: 'Tích Phân',
			type: 'Phương trình',
			example: 'math -p xdx from 0 to 2'
		},
		{
			key: '-g',
			prompt: 'Đồ Thị',
			type: 'Phương trình',
			example: 'math -g y = x^3 - 9'
		},
		{
			key: '-v',
			prompt: 'Vector',
			type: 'Tọa độ vector',
			example: 'math -v (1, 2, 3) - (5, 6, 7)'
		}
	],
	envConfig: {
		"WOLFRAM": "T8J8YV-H265UQ762K"
	}
};
module.exports.run = async function ({ api, event, args }) {
	var axios = global.nodemodule["axios"];
	var fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	var out = (msg) => api.sendMessage(msg, threadID, messageID);
	var text = [], key = global.configModule.math.WOLFRAM;
	var content = (event.type == 'message_reply') ? event.messageReply.body : args.join(" ");
	if (!content) return out("Vui lòng nhập phép tính");
	else if (content.indexOf("-p") == 0) {
		try {
			content = "primitive " + content.slice(3, content.length);
			var data = (await axios.get(`http://api.wolframalpha.com/v2/query?appid=${key}&input=${encodeURIComponent(content)}&output=json`)).data;
			if (content.includes("from") && content.includes("to")) {
				var value = data.queryresult.pods.find(e => e.id == "Input").subpods[0].plaintext;
				if (value.includes("≈")) {
					var a = value.split("≈"), b = a[0].split(" = ")[1], c = a[1];
					return out(`Fractional: ${b}\nDecimal: ${c}`);
				}
				else return out(value.split(" = ")[1]);
			}
			else return out((data.queryresult.pods.find(e => e.id == "IndefiniteIntegral").subpods[0].plaintext.split(" = ")[1]).replace("+ constant", ""));
		}
		catch (e) {
			out(`${e}`);
		}
	}
	else if (content.indexOf("-g") == 0) {
		try {
			content = "plot " + content.slice(3, content.length);
			var data = (await axios.get(`http://api.wolframalpha.com/v2/query?appid=${key}&input=${encodeURIComponent(content)}&output=json`)).data;
			var src = (data.queryresult.pods.some(e => e.id == "Plot")) ? data.queryresult.pods.find(e => e.id == "Plot").subpods[0].img.src : data.queryresult.pods.find(e => e.id == "ImplicitPlot").subpods[0].img.src;
			var img = (await axios.get(src, { responseType: 'stream' })).data;
			img.pipe(fs.createWriteStream("./graph.png")).on("close", () => api.sendMessage({ attachment: fs.createReadStream("./graph.png") }, threadID, () => fs.unlinkSync("./graph.png"), messageID));
		}
		catch (e) {
			out(`${e}`);
		}
	}
	else if (content.indexOf("-v") == 0) {
		try {
			content = "vector " + content.slice(3, content.length).replace(/\(/g, "<").replace(/\)/g, ">");
			var data = (await axios.get(`http://api.wolframalpha.com/v2/query?appid=${key}&input=${encodeURIComponent(content)}&output=json`)).data;
			var src = data.queryresult.pods.find(e => e.id == "VectorPlot").subpods[0].img.src;
			var vector_length = data.queryresult.pods.find(e => e.id == "VectorLength").subpods[0].plaintext, result;
			if (data.queryresult.pods.some(e => e.id == "Result")) result = data.queryresult.pods.find(e => e.id == "Result").subpods[0].plaintext;
			var img = (await axios.get(src, { responseType: 'stream' })).data;
			img.pipe(fs.createWriteStream("./graph.png")).on("close", () => api.sendMessage({ body: (!result) ? '' : result + "\nVector Length: " + vector_length, attachment: fs.createReadStream("./graph.png") }, threadID, () => fs.unlinkSync("./graph.png"), messageID));
		}
		catch (e) {
			out(`${e}`);
		}
	}
	else {
		try {
			var data = (await axios.get(`http://api.wolframalpha.com/v2/query?appid=${key}&input=${encodeURIComponent(content)}&output=json`)).data;
			if (data.queryresult.pods.some(e => e.id == "Solution")) {
				var value = data.queryresult.pods.find(e => e.id == "Solution");
				for (let e of value.subpods) text.push(e.plaintext);
				return out(text.join("\n"));
			}
			else if (data.queryresult.pods.some(e => e.id == "ComplexSolution")) {
				var value = data.queryresult.pods.find(e => e.id == "ComplexSolution");
				for (let e of value.subpods) text.push(e.plaintext);
				return out(text.join("\n"));
			}
			else if (data.queryresult.pods.some(e => e.id == "Result")) return out(data.queryresult.pods.find(e => e.id == "Result").subpods[0].plaintext);
		}
		catch (e) {
			out(`${e}`);
		}
	}
}