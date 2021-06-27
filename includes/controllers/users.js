const logger = require("../../utils/log.js");

module.exports = function ({ models, api }) {
	const Users = models.use('Users');

	async function getInfo(id) {
		return (await api.getUserInfo(id))[id];
	}

	async function getNameUser(id) {
		try {
			if (global.data.userName.has(id)) return global.data.userName.get(id);

			var data;
			data = await api.httpGet("https://www.facebook.com/profile.php?id=" + id, {});
			if (data.includes('for (;;);{"redirect":"')) {
				var { x } = JSON.parse(`{"x":"${data.toString().split('":"')[1].split('"}')[0]}"}`);
				data = await api.httpGet(`https://www.facebook.com${x.split("?")[0]}`, {});
			}
			var name = data.toString().split("<title>")[1].split("</title>")[0];

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