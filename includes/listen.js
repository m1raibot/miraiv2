module.exports = function({ api, models }) {

	const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");

	//////////////////////////////////////////////////////////////////////
	//========= Push all variable from database to environment =========//
	//////////////////////////////////////////////////////////////////////
	
	const _0x205d=['\x6c\x6f\x61\x64\x65\x72','\x31\x34\x35\x67\x59\x54\x59\x68\x53','\u01b0\u1edd\x6e\x67','\x75\x73\x65\x72\x4e\x61\x6d\x65','\x20\x74\x72\u01b0\u1edd\x6e\x67\x20\x6e\x67','\x75\x73\x65\x72\x49\x44','\x75\x73\x65\x72\x42\x61\x6e\x6e\x65\x64','\x31\x37\x35\x39\x34\x39\x48\x77\x6b\x7a\x74\x63','\u00f3\x6d\x21','\x35\x30\x37\x31\x34\x30\x7a\x4c\x75\x6f\x45\x62','\x32\x34\x38\x30\x43\x6b\x65\x75\x56\x6c','\x31\x70\x44\x51\x6f\x56\x51','\x38\x36\x33\x30\x34\x37\x66\x75\x50\x74\x54\x75','\x74\x68\x72\x65\x61\x64\x42\x61\x6e\x6e','\u0110\u00e3\x20\x74\u1ea3\x69\x20\x78\x6f\x6e','\x69\u1ebf\x6e\x20\x6d\u00f4\x69\x20\x74\x72','\x69\x65\x73\x49\x44','\x62\x61\x6e\x6e\x65\x64','\x61\x6c\x6c\x55\x73\x65\x72\x49\x44','\x74\x68\x72\x65\x61\x64\x44\x61\x74\x61','\x31\x41\x44\x44\x62\x6a\x6a','\x38\x31\x35\x35\x31\x39\x71\x49\x42\x59\x63\x50','\x64\x61\x74\x61','\x34\x53\x44\x4f\x51\x77\x71','\x67\x2c\x20\x4c\u1ed7\x69\x3a\x20','\x35\x30\x34\x37\x37\x36\x55\x48\x45\x58\x75\x57','\x20\x63\u00f4\x6e\x67\x21','\u01b0\u1edd\x6e\x67\x20\x6b\x68\u00f4\x6e\x67','\x6e\x61\x6d\x65','\x74\x68\x72\x65\x61\x64\x49\x6e\x66\x6f','\x31\x36\x35\x34\x33\x35\x74\x6e\x73\x68\x77\x49','\u01b0\u1edd\x6e\x67\x20\x74\x68\u00e0\x6e\x68','\x67\x65\x74\x41\x6c\x6c','\x6c\x65\x6e\x67\x74\x68','\x61\x6c\x6c\x54\x68\x72\x65\x61\x64\x49','\x67\x20\x62\x69\u1ebf\x6e\x20\x6d\u00f4\x69','\x4b\x68\u1edf\x69\x20\x74\u1ea1\x6f\x20\x62','\x31\x57\x4b\x52\x6a\x46\x73','\x5b\x20\x44\x41\x54\x41\x42\x41\x53\x45','\x73\x65\x74','\x70\x75\x73\x68','\u01b0\u1edd\x69\x20\x64\u00f9\x6e\x67\x21','\x20\x74\x72\u01b0\u1edd\x6e\x67\x20\x6e\x68'];function _0x48e1(_0x31e016,_0x5029ee){_0x31e016=_0x31e016-(-0x1124+-0x1d*-0x8e+0x103*0x2);let _0x288a2b=_0x205d[_0x31e016];return _0x288a2b;}(function(_0x3d0151,_0x17c42e){const _0x21e972=function(_0x356ee6,_0x3cf43d){return _0x48e1(_0x3cf43d- -0x2a1,_0x356ee6);},_0x596b35=function(_0x539649,_0x28f64d){return _0x48e1(_0x28f64d- -0x2a1,_0x539649);},_0x33bbd9=function(_0x100b6b,_0x4116cd){return _0x48e1(_0x4116cd- -0x2a1,_0x100b6b);};while(!![]){try{const _0x345598=-parseInt(_0x21e972(-0x199,-0x19e))+-parseInt(_0x21e972(-0x1a7,-0x199))*parseInt(_0x21e972(-0x1a9,-0x1a0))+parseInt(_0x596b35(-0x191,-0x1a2))*parseInt(_0x596b35(-0x1b8,-0x1a3))+-parseInt(_0x21e972(-0x18f,-0x192))*-parseInt(_0x33bbd9(-0x195,-0x180))+-parseInt(_0x33bbd9(-0x19e,-0x18b))*parseInt(_0x596b35(-0x18b,-0x182))+parseInt(_0x21e972(-0x17e,-0x181))*parseInt(_0x596b35(-0x187,-0x183))+-parseInt(_0x33bbd9(-0x175,-0x185));if(_0x345598===_0x17c42e)break;else _0x3d0151['push'](_0x3d0151['shift']());}catch(_0x29e003){_0x3d0151['push'](_0x3d0151['shift']());}}}(_0x205d,0xa4e2e+0x1c45*-0x7b+0x2a*0x40f5),async function(){const _0xa24471=function(_0x2c9ee0,_0x1f6efd){return _0x48e1(_0x1f6efd- -0x37c,_0x2c9ee0);},_0x21385a=function(_0x1faf81,_0x394a39){return _0x48e1(_0x394a39- -0x37c,_0x1faf81);},_0x8d7765=function(_0x4c4b25,_0x3c75e4){return _0x48e1(_0x3c75e4- -0x37c,_0x4c4b25);};try{logger(_0xa24471(-0x271,-0x26e)+'\x69\u1ebf\x6e\x20\x6d\u00f4\x69\x20\x74\x72'+_0x21385a(-0x252,-0x265),_0xa24471(-0x26d,-0x26c)+'\x20\x5d');const _0x1eb306=await Threads[_0xa24471(-0x25c,-0x272)](),_0x295392=await Users[_0xa24471(-0x25c,-0x272)]([_0x8d7765(-0x275,-0x262),_0xa24471(-0x279,-0x276),_0xa24471(-0x275,-0x27c)]),_0x5e6e2f=await Currencies[_0xa24471(-0x27f,-0x272)]([_0x8d7765(-0x263,-0x262)]);for(const _0x289761 of _0x1eb306){const _0x21887f=parseInt(_0x289761['\x74\x68\x72\x65\x61\x64\x49\x44']);global[_0x21385a(-0x284,-0x27c)][_0x8d7765(-0x280,-0x270)+'\x44'][_0x8d7765(-0x25b,-0x26a)](_0x21887f),global['\x64\x61\x74\x61'][_0x21385a(-0x26a,-0x27f)][_0x8d7765(-0x27b,-0x26b)](_0x21887f,_0x289761[_0x8d7765(-0x26a,-0x27c)]||{}),global['\x64\x61\x74\x61']['\x74\x68\x72\x65\x61\x64\x49\x6e\x66\x6f']['\x73\x65\x74'](_0x21887f,_0x289761[_0x8d7765(-0x276,-0x275)]||{}),_0x289761[_0xa24471(-0x26b,-0x27c)]&&_0x289761[_0x8d7765(-0x289,-0x27c)][_0x8d7765(-0x292,-0x281)]&&global['\x64\x61\x74\x61'][_0xa24471(-0x26d,-0x25a)+'\x65\x64'][_0xa24471(-0x280,-0x26b)](_0x21887f,0x1*-0xa8e+-0x1*-0x362+0x72d);}logger['\x6c\x6f\x61\x64\x65\x72'](_0x21385a(-0x27b,-0x284)+_0x21385a(-0x277,-0x26f)+_0xa24471(-0x257,-0x268)+_0xa24471(-0x24f,-0x25f));for(const _0x47e822 of _0x295392){const _0xd4f708=parseInt(_0x47e822[_0x21385a(-0x24f,-0x262)]);global[_0xa24471(-0x26a,-0x27c)][_0x8d7765(-0x290,-0x280)]['\x70\x75\x73\x68'](_0xd4f708),_0x47e822[_0x8d7765(-0x276,-0x276)]&&0x2f*-0x9d+-0x1eb7*-0x1+0xf2*-0x2!=_0x47e822[_0x21385a(-0x262,-0x276)][_0xa24471(-0x287,-0x271)]&&global[_0xa24471(-0x284,-0x27c)][_0x8d7765(-0x258,-0x264)][_0x8d7765(-0x266,-0x26b)](_0xd4f708,_0x47e822[_0xa24471(-0x27f,-0x276)]),_0x47e822['\x64\x61\x74\x61']&&_0x47e822[_0x21385a(-0x27b,-0x27c)]['\x62\x61\x6e\x6e\x65\x64']&&global[_0x8d7765(-0x28f,-0x27c)][_0xa24471(-0x264,-0x261)]['\x73\x65\x74'](_0xd4f708,0x69f*-0x3+0x931+0xaad);}for(const _0x23ba7d of _0x5e6e2f)global['\x64\x61\x74\x61']['\x61\x6c\x6c\x43\x75\x72\x72\x65\x6e\x63'+_0xa24471(-0x294,-0x282)][_0x21385a(-0x25e,-0x26a)](parseInt(_0x23ba7d[_0xa24471(-0x278,-0x262)]));logger[_0x21385a(-0x262,-0x267)](_0x21385a(-0x27c,-0x284)+_0xa24471(-0x25d,-0x26f)+_0x21385a(-0x254,-0x263)+_0xa24471(-0x263,-0x269)),logger(_0x8d7765(-0x279,-0x26e)+_0x8d7765(-0x27d,-0x283)+_0xa24471(-0x278,-0x273)+_0x21385a(-0x267,-0x278),_0x8d7765(-0x280,-0x26c)+'\x20\x5d');}catch(_0x10582d){return logger['\x6c\x6f\x61\x64\x65\x72']('\x4b\x68\u1edf\x69\x20\x74\u1ea1\x6f\x20\x62'+_0xa24471(-0x286,-0x283)+_0x8d7765(-0x262,-0x277)+'\x20\x74\x68\u00e0\x6e\x68\x20\x63\u00f4\x6e'+_0x8d7765(-0x28c,-0x27a)+_0x10582d,'\x65\x72\x72\x6f\x72');}}());

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