const logger = require("../../utils/log.js");

module.exports = function ({ models, api }) {
	const Threads = models.use('Threads');

	async function getInfo(threadID) {
		try {
			return await api.getThreadInfo(threadID);
		}
		catch (e) {
			logger(e, "error");
		}
	}

	async function getAll(...data) {
		var where, attributes;
		for (let i of data) {
			if (typeof i != 'object') throw 'Phải là 1 Array hoặc Object hoặc cả 2.';
			if (Array.isArray(i)) attributes = i;
			else where = i;
		}
		try {
			return (await Threads.findAll({ where, attributes })).map(e => e.get({ plain: true }));
		}
		catch (err) {
			logger(err, "error");
			return [];
		}
	}

	async function getData(threadID) {
		const data = await Threads.findOne({ where: { threadID }});
		if (data) return data.get({ plain: true });
		else return false;
	}

	async function setData(threadID, options = {}) {
		if (typeof options != 'object' && !Array.isArray(options)) throw 'Phải là 1 Object.';
		try {
			(await Threads.findOne({ where: { threadID } })).update(options);
			return true;
		}
		catch (e) {
			logger(e, "error");
			return false;
		}
	}

	async function delData(threadID) {
		return (await Threads.findOne({ where: { threadID } })).destroy();
	}

	async function createData(threadID, defaults = {}) {
		if (typeof defaults != 'object' && !Array.isArray(defaults)) throw 'Phải là 1 Object.';
		try {
			await Threads.findOrCreate({ where: { threadID }, defaults });
			return true;
		}
		catch (e) {
			logger(e, "error");
			return false;
		}
	}

	return {
		getInfo,
		getAll,
		getData,
		setData,
		delData,
		createData
	};
};