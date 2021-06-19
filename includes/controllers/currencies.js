const logger = require("../../utils/log.js");

module.exports = function ({ models }) {
	const Currencies = models.use('Currencies');

	async function getAll(...data) {
		var where, attributes;
		for (let i of data) {
			if (typeof i != 'object') throw 'Phải là 1 Array hoặc Object hoặc cả 2.';
			if (Array.isArray(i)) attributes = i;
			else where = i;
		}
		try {
			return (await Currencies.findAll({ where, attributes })).map(e => e.get({ plain: true }));
		}
		catch (err) {
			logger(err, "error");
			return [];
		}
	}

	async function getData(userID) {
		const data = await Currencies.findOne({ where: { userID }});
		if (data) return data.get({ plain: true });
		else return false;
	}

	async function setData(userID, options = {}) {
		if (typeof options != 'object' && !Array.isArray(options)) throw 'Phải là 1 Object.';
		try {
			(await Currencies.findOne({ where: { userID } })).update(options);
			return true;
		}
		catch (err) {
			logger(err, "error");
			return false;
		}
	}

	async function delData(userID) {
		return (await Currencies.findOne({ where: { userID } })).destroy();
	}

	async function createData(userID, defaults = {}) {
		if (typeof defaults != 'object' && !Array.isArray(defaults)) throw 'Phải là 1 Object.';
		try {
			await Currencies.findOrCreate({ where: { userID }, defaults });
			return true;
		}
		catch (err) {
			logger(err, "error");
			return false;
		}
	}

	async function increaseMoney(userID, money) {
		if (typeof money != 'number') throw 'Phải là 1 số.';
		try {
			let balance = (await getData(userID)).money;
			await setData(userID, { money: balance + money });
			return true;
		}
		catch (err) {
			logger(err, "error");
			return false;
		}
	}

	async function decreaseMoney(userID, money) {
		if (typeof money != 'number') throw 'Phải là 1 số.';
		try {
			let balance = (await getData(userID)).money;
			if (balance < money) return false;
			await setData(userID, { money: balance - money });
			return true;
		}
		catch (err) {
			logger(err, "error");
			return false;
		}
	}

	return {
		getAll,
		getData,
		setData,
		delData,
		createData,
		increaseMoney,
		decreaseMoney
	};
};