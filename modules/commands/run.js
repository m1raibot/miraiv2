module.exports.config = {
	name: "run",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "running shell",
	commandCategory: "system",
	usages: "[Script]",
	cooldowns: 5,
	dependencies: {
		"vm2": ""
	}
};

module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {
	const { VM } = global.nodemodule["vm2"];
	var out = async (a) => api.sendMessage(`${a}`, event.threadID, event.messageID);
	const vm = new VM({
		eval: false,
		wasm: false,
		timeout: 100,
		console: 'inherit',
		sandbox: { process, out, api, event, args, Threads, Users, Currencies, models, global },
	});
	try {
		vm.run(args.join(" "), vm.js);
	}
	catch (e) {
		out(`${e.name}: ${e.message}`);
	}
}
