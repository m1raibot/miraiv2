module.exports = function({ api, models }) {

	const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");

	//////////////////////////////////////////////////////////////////////
	//========= Push all variable from database to environment =========//
	//////////////////////////////////////////////////////////////////////
	
	const _0x392e=['\x69\u1ebf\x6e\x20\x6d\u00f4\x69\x20\x74\x72','\x31\x35\x37\x34\x78\x55\x4e\x50\x47\x4e','\x70\x75\x73\x68','\x61\x6c\x6c\x54\x68\x72\x65\x61\x64\x49','\x31\x31\x34\x39\x31\x73\x6e\x6e\x63\x4f\x4d','\x5b\x20\x44\x41\x54\x41\x42\x41\x53\x45','\x31\x31\x6c\x6d\x4f\x68\x6d\x6c','\x74\x68\x72\x65\x61\x64\x42\x61\x6e\x6e','\x20\x74\x72\u01b0\u1edd\x6e\x67\x20\x6e\x68','\u0110\u00e3\x20\x74\u1ea3\x69\x20\x78\x6f\x6e','\x6c\x6f\x61\x64\x65\x72','\x33\x32\x32\x36\x38\x35\x62\x4a\x44\x4a\x58\x71','\u01b0\u1edd\x6e\x67','\x64\x61\x74\x65\x41\x64\x64\x65\x64','\u00f3\x6d\x21','\x75\x73\x65\x72\x42\x61\x6e\x6e\x65\x64','\x74\x68\x72\x65\x61\x64\x44\x61\x74\x61','\x6e\x61\x6d\x65','\x75\x73\x65\x72\x49\x44','\x73\x65\x74','\x67\x2c\x20\x4c\u1ed7\x69\x3a\x20','\x4b\x68\u1edf\x69\x20\x74\u1ea1\x6f\x20\x62','\x74\x68\x72\x65\x61\x64\x49\x44','\u01b0\u1edd\x6e\x67\x20\x6b\x68\u00f4\x6e\x67','\x61\x6c\x6c\x55\x73\x65\x72\x49\x44','\x32\x32\x30\x39\x30\x39\x6b\x53\x67\x59\x42\x63','\x32\x31\x34\x31\x36\x39\x57\x4c\x68\x7a\x75\x44','\x36\x38\x30\x54\x4f\x50\x42\x62\x48','\x34\x64\x54\x62\x66\x73\x4d','\x64\x61\x74\x61','\x65\x72\x72\x6f\x72','\x36\x38\x38\x30\x32\x38\x62\x4c\x67\x6d\x56\x51','\u01b0\u1edd\x6e\x67\x20\x74\x68\u00e0\x6e\x68','\x31\x37\x31\x36\x33\x34\x77\x50\x4c\x6f\x4b\x50','\x74\x68\x72\x65\x61\x64\x49\x6e\x66\x6f','\x67\x65\x74\x41\x6c\x6c','\x72\x65\x61\x73\x6f\x6e','\x75\x73\x65\x72\x4e\x61\x6d\x65','\x67\x20\x62\x69\u1ebf\x6e\x20\x6d\u00f4\x69','\x62\x61\x6e\x6e\x65\x64'];function _0x61a6(_0x2fb5b5,_0x5c94fc){_0x2fb5b5=_0x2fb5b5-(-0xa25*-0x3+-0x1232+-0xb83);let _0x54f448=_0x392e[_0x2fb5b5];return _0x54f448;}(function(_0x1616f0,_0x472c8c){const _0x1db7db=_0x61a6;while(!![]){try{const _0x4d3c35=-parseInt(_0x1db7db(0xc8))*-parseInt(_0x1db7db(0xd9))+parseInt(_0x1db7db(0xc1))+-parseInt(_0x1db7db(0xd7))+parseInt(_0x1db7db(0xdc))+-parseInt(_0x1db7db(0xd6))+-parseInt(_0x1db7db(0xd8))*-parseInt(_0x1db7db(0xbe))+-parseInt(_0x1db7db(0xc3))*parseInt(_0x1db7db(0xde));if(_0x4d3c35===_0x472c8c)break;else _0x1616f0['push'](_0x1616f0['shift']());}catch(_0x53a325){_0x1616f0['push'](_0x1616f0['shift']());}}}(_0x392e,0x2*-0xa3ac2+0x1*0xc5c7+0x1*0x1ef0b4),async function(){const _0x5d71d4=_0x61a6;try{logger(_0x5d71d4(0xd2)+'\x69\u1ebf\x6e\x20\x6d\u00f4\x69\x20\x74\x72'+_0x5d71d4(0xc9),_0x5d71d4(0xc2)+'\x20\x5d');const _0xcb3725=await Threads[_0x5d71d4(0xe0)](),_0x5f299c=await Users['\x67\x65\x74\x41\x6c\x6c']([_0x5d71d4(0xcf),_0x5d71d4(0xce),'\x64\x61\x74\x61']),_0x52b66b=await Currencies[_0x5d71d4(0xe0)]([_0x5d71d4(0xcf)]);for(const _0x2afe23 of _0xcb3725){const _0x84ced7=parseInt(_0x2afe23[_0x5d71d4(0xd3)]);global[_0x5d71d4(0xda)][_0x5d71d4(0xc0)+'\x44'][_0x5d71d4(0xbf)](_0x84ced7),global[_0x5d71d4(0xda)][_0x5d71d4(0xcd)][_0x5d71d4(0xd0)](_0x84ced7,_0x2afe23['\x64\x61\x74\x61']||{}),global[_0x5d71d4(0xda)][_0x5d71d4(0xdf)]['\x73\x65\x74'](_0x84ced7,_0x2afe23[_0x5d71d4(0xdf)]||{}),_0x2afe23[_0x5d71d4(0xda)]&&!(-0xfea+0x91f*-0x1+-0xd*-0x1ed)==_0x2afe23[_0x5d71d4(0xda)][_0x5d71d4(0xbc)]&&global[_0x5d71d4(0xda)][_0x5d71d4(0xc4)+'\x65\x64']['\x73\x65\x74'](_0x2afe23[_0x5d71d4(0xd3)],{'\x72\x65\x61\x73\x6f\x6e':_0x2afe23['\x64\x61\x74\x61'][_0x5d71d4(0xe1)]||'','\x64\x61\x74\x65\x41\x64\x64\x65\x64':_0x2afe23[_0x5d71d4(0xda)][_0x5d71d4(0xca)]||''});}logger[_0x5d71d4(0xc7)](_0x5d71d4(0xc6)+'\x67\x20\x62\x69\u1ebf\x6e\x20\x6d\u00f4\x69'+_0x5d71d4(0xc5)+_0x5d71d4(0xcb));for(const _0x352762 of _0x5f299c)global[_0x5d71d4(0xda)][_0x5d71d4(0xd5)][_0x5d71d4(0xbf)](parseInt(_0x352762[_0x5d71d4(0xcf)])),_0x352762[_0x5d71d4(0xce)]&&0x22e7+-0x11*-0xc5+-0x2ffc!=_0x352762[_0x5d71d4(0xce)]['\x6c\x65\x6e\x67\x74\x68']&&global['\x64\x61\x74\x61'][_0x5d71d4(0xba)]['\x73\x65\x74'](parseInt(_0x352762[_0x5d71d4(0xcf)]),_0x352762[_0x5d71d4(0xce)]),_0x352762[_0x5d71d4(0xda)]&&0x19d5+0x443*0x1+0x1e17*-0x1==_0x352762[_0x5d71d4(0xda)][_0x5d71d4(0xbc)]&&global[_0x5d71d4(0xda)][_0x5d71d4(0xcc)][_0x5d71d4(0xd0)](parseInt(_0x352762[_0x5d71d4(0xcf)]),{'\x72\x65\x61\x73\x6f\x6e':_0x352762['\x64\x61\x74\x61']['\x72\x65\x61\x73\x6f\x6e']||'','\x64\x61\x74\x65\x41\x64\x64\x65\x64':_0x352762[_0x5d71d4(0xda)][_0x5d71d4(0xca)]||''});for(const _0x45e9e5 of _0x52b66b)global[_0x5d71d4(0xda)]['\x61\x6c\x6c\x43\x75\x72\x72\x65\x6e\x63'+'\x69\x65\x73\x49\x44']['\x70\x75\x73\x68'](parseInt(_0x45e9e5[_0x5d71d4(0xcf)]));logger[_0x5d71d4(0xc7)](_0x5d71d4(0xc6)+_0x5d71d4(0xbb)+'\x20\x74\x72\u01b0\u1edd\x6e\x67\x20\x6e\x67'+'\u01b0\u1edd\x69\x20\x64\u00f9\x6e\x67\x21'),logger('\x4b\x68\u1edf\x69\x20\x74\u1ea1\x6f\x20\x62'+'\x69\u1ebf\x6e\x20\x6d\u00f4\x69\x20\x74\x72'+_0x5d71d4(0xdd)+'\x20\x63\u00f4\x6e\x67\x21',_0x5d71d4(0xc2)+'\x20\x5d');}catch(_0x1973c7){return logger['\x6c\x6f\x61\x64\x65\x72'](_0x5d71d4(0xd2)+_0x5d71d4(0xbd)+_0x5d71d4(0xd4)+'\x20\x74\x68\u00e0\x6e\x68\x20\x63\u00f4\x6e'+_0x5d71d4(0xd1)+_0x1973c7,_0x5d71d4(0xdb));}}());	

	logger(`${api.getCurrentUserID()} - [ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "This bot was made by CatalizCS and SpermLord" : global.config.BOTNAME}`, "[ BOT INFO ]");
	
	///////////////////////////////////////////////
	//========= Require all handle need =========//
	//////////////////////////////////////////////

	require("./handle/handleSchedule")({ api, models, Users, Threads, Currencies });
	const handleCommand = require("./handle/handleCommand")({ api, models, Users, Threads, Currencies });
	const handleCommandEvent = require("./handle/handleCommandEvent")({ api, models, Users, Threads, Currencies });
	const handleReply = require("./handle/handleReply")({ api, models, Users, Threads, Currencies });
	const handleReaction = require("./handle/handleReaction")({ api, models, Users, Threads, Currencies });
	const handleEvent = require("./handle/handleEvent")({ api, models, Users, Threads, Currencies });
	const handleCreateDatabase = require("./handle/handleCreateDatabase")({  api, Threads, Users, Currencies, models });

	logger.loader(`====== ${Date.now() - global.client.timeStart}ms ======`);

	//////////////////////////////////////////////////
	//========= Send event to handle need =========//
	/////////////////////////////////////////////////

	return (event) => {
		switch (event.type) {
			case "message":
			case "message_reply":
			case "message_unsend":
				handleCommand({ event });
				handleReply({ event });
				handleCommandEvent({ event });
				handleCreateDatabase({ event });
				break;
			case "event":
				handleEvent({ event });
				break;
			case "message_reaction":
				handleReaction({ event });
				break;
			default:
				break;
		}
	};
};

//THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯