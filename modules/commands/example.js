module.exports.config = {
	name: "nameCommand", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "version", // phiên bản của module này
	hasPermssion: 0/1/2, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "Name need credit", // Công nhận module sở hữu là ai
	description: "say bla bla ở đây", // Thông tin chi tiết về lệnh
	commandCategory: "group", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "[option] [text]", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
	dependencies: {
		"packageName": "version"
	}, //Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
	envConfig: {
		//Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
	}
};

module.exports.languages = {
	"vi": {
		//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
	},
	"en": {
		//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
	}
}

module.exports.onLoad = function ({ configValue }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
}

module.exports.handleReaction = function({ api, event, models, Users, Threads, Currencies, handleReaction, models }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
}

module.exports.handleReply = function({ api, event, models, Users, Threads, Currencies, handleReply, models }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
}

module.exports.handleEvent = function({ event, api, models, Users, Threads, Currencies }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
}

module.exports.handleSedule = function({ event, api, models, Users, Threads, Currencies, scheduleItem }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
}

module.exports.run = function({ api, event, args, models, Users, Threads, Currencies, permssion }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
}