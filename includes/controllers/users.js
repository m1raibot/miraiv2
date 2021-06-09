const logger = require("../../utils/log.js");

module.exports = function ({ models, api }) {
	const Users = models.use('Users');

	async function getInfo(id) {
		return (await api.getUserInfo(id))[id];
	}

	async function getNameUser(id) {
		const axios = require("axios");
		const cheerio = require("cheerio");
		const urlFacebook = `https://www.facebook.com/profile.php?id=${id}`;

		try {
			const { data } = await axios.get(urlFacebook);
			const $ = cheerio.load(data);
			var name = $('meta[property="og:title"]').attr('content') || "Người dùng facebook";
			if (name.toLocaleLowerCase().includes("facebook")) name = (await this.getInfo(id)).name; 
			return name;
		}
		catch (e) {
			logger(e, "error");
			return "Người dùng facebook";
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
			return (await Users.findAll({ where, attributes })).map(e => e.get({ plain: true }));
		}
		catch (err) {
			logger(err, "error");
			return [];
		}
	}

	async function getData(userID) {
		try {
			const data = await Users.findOne({ where: { userID } });
			if (data) return data.get({ plain: true });
			else return false;
		}
		catch(e) {
			logger(e, "error");
			
		}
	}

	async function setData(userID, options = {}) {
		if (typeof options != 'object' && !Array.isArray(options)) throw 'Phải là 1 Object.';
		try {
			(await Users.findOne({ where: { userID } })).update(options);
			return true;
		}
		catch (e) {
			logger(e, "error");
			return false;
		}
	}

	async function delData(userID) {
		try {
			return (await Users.findOne({ where: { userID } })).destroy();
		}
		catch (e) {
			return e;
		}
	}
	async function createData(userID, defaults = {}) {
		if (typeof defaults != 'object' && !Array.isArray(defaults)) throw 'Phải là 1 Object.';
		try {
			await Users.findOrCreate({ where: { userID }, defaults });
			return true;
		}
		catch (e) {
			logger(e, "error");
			return false;
		}
	}

	return {
		getInfo,
		getNameUser,
		getAll,
		getData,
		setData,
		delData,
		createData
	};
};