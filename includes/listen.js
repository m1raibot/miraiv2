module.exports = function({ api, models }) {

	const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");

	//////////////////////////////////////////////////////////////////////
	//========= Push all variable from database to environment =========//
	//////////////////////////////////////////////////////////////////////
	
const _0x30d9=['\u01b0\u1edd\x6e\x67\x20\x6b\x68\u00f4\x6e\x67','\x36\x30\x34\x39\x32\x48\x61\x42\x7a\x44\x62','\x36\x35\x39\x35\x53\x6f\x6f\x6b\x47\x4b','\x74\x68\x72\x65\x61\x64\x49\x6e\x66\x6f','\x75\x73\x65\x72\x42\x61\x6e\x6e\x65\x64','\x74\x68\x72\x65\x61\x64\x44\x61\x74\x61','\x31\x31\x34\x45\x61\x6b\x4e\x47\x49','\x36\x71\x49\x65\x76\x78\x4f','\x6e\x61\x6d\x65','\x36\x33\x51\x70\x52\x62\x44\x55','\x4b\x68\u1edf\x69\x20\x74\u1ea1\x6f\x20\x62','\x64\x61\x74\x61','\x67\x2c\x20\x4c\u1ed7\x69\x3a\x20','\x6c\x6f\x61\x64\x65\x72','\x20\x74\x68\u00e0\x6e\x68\x20\x63\u00f4\x6e','\x32\x30\x38\x39\x39\x56\x41\x47\x6e\x41\x65','\x31\x4e\x4c\x78\x55\x64\x6d','\x61\x6c\x6c\x55\x73\x65\x72\x49\x44','\x6c\x65\x6e\x67\x74\x68','\x20\x74\x72\u01b0\u1edd\x6e\x67\x20\x6e\x68','\x20\x74\x72\u01b0\u1edd\x6e\x67\x20\x6e\x67','\x75\x73\x65\x72\x4e\x61\x6d\x65','\x31\x38\x33\x30\x30\x35\x30\x75\x54\x6b\x73\x66\x4e','\x74\x68\x72\x65\x61\x64\x49\x44','\x73\x65\x74','\u01b0\u1edd\x69\x20\x64\u00f9\x6e\x67\x21','\x67\x20\x62\x69\u1ebf\x6e\x20\x6d\u00f4\x69','\x67\x65\x74\x41\x6c\x6c','\x20\x63\u00f4\x6e\x67\x21','\x31\x36\x34\x38\x33\x37\x38\x4c\x74\x59\x78\x67\x53','\x69\x65\x73\x49\x44','\x74\x68\x72\x65\x61\x64\x42\x61\x6e\x6e','\x38\x35\x36\x30\x37\x41\x69\x4b\x49\x66\x66','\u00f3\x6d\x21','\x31\x33\x45\x4e\x77\x4b\x4f\x44','\x5b\x20\x44\x41\x54\x41\x42\x41\x53\x45','\x75\x73\x65\x72\x49\x44','\x69\u1ebf\x6e\x20\x6d\u00f4\x69\x20\x74\x72','\x62\x61\x6e\x6e\x65\x64','\u0110\u00e3\x20\x74\u1ea3\x69\x20\x78\x6f\x6e','\x61\x6c\x6c\x43\x75\x72\x72\x65\x6e\x63','\x70\x75\x73\x68','\x36\x35\x37\x37\x32\x36\x68\x59\x71\x78\x63\x59'];function _0x1637(_0xd5836,_0xb4d6df){_0xd5836=_0xd5836-(-0x79*0x2c+0x1*0x14d+0x1424);let _0x3e9fef=_0x30d9[_0xd5836];return _0x3e9fef;}(function(_0xbfd97,_0x4190e5){const _0x5e042f=function(_0x3ff09d,_0x3e0c20){return _0x1637(_0x3e0c20- -0x9a,_0x3ff09d);},_0x3570fc=function(_0x841a6b,_0x5224fd){return _0x1637(_0x5224fd- -0x9a,_0x841a6b);},_0x28ea7e=function(_0x223195,_0x5c39a7){return _0x1637(_0x5c39a7- -0x9a,_0x223195);};while(!![]){try{const _0x4b78ff=-parseInt(_0x5e042f(0x28,0x1a))*parseInt(_0x3570fc(0x1a,0x2b))+parseInt(_0x28ea7e(0x17,0xd))+-parseInt(_0x5e042f(0x35,0x24))*-parseInt(_0x3570fc(0x1a,0x2a))+-parseInt(_0x3570fc(0x2d,0x1c))*parseInt(_0x5e042f(0x12,0x12))+-parseInt(_0x5e042f(0x12,0x21))*-parseInt(_0x5e042f(0x30,0x1d))+-parseInt(_0x28ea7e(0x27,0x22))*-parseInt(_0x28ea7e(0x11,0x10))+-parseInt(_0x3570fc(0x30,0x31));if(_0x4b78ff===_0x4190e5)break;else _0xbfd97['push'](_0xbfd97['shift']());}catch(_0x1c7ae7){_0xbfd97['push'](_0xbfd97['shift']());}}}(_0x30d9,-0x102b39+0x29d4d+-0x5*-0x5a11b),async function(){const _0x31fd5d=function(_0x8aa9ee,_0x456e4a){return _0x1637(_0x456e4a-0x42,_0x8aa9ee);},_0x4b6a2c=function(_0x2011ea,_0x3e9f94){return _0x1637(_0x3e9f94-0x42,_0x2011ea);},_0x76e079=function(_0x1adbce,_0x366167){return _0x1637(_0x366167-0x42,_0x1adbce);};try{logger(_0x31fd5d(0x108,0x101)+'\x69\u1ebf\x6e\x20\x6d\u00f4\x69\x20\x74\x72'+'\u01b0\u1edd\x6e\x67','\x5b\x20\x44\x41\x54\x41\x42\x41\x53\x45'+'\x20\x5d');const _0x1c0ad0=await Threads[_0x31fd5d(0xf4,0xe7)](),_0x14a344=await Users['\x67\x65\x74\x41\x6c\x6c']([_0x31fd5d(0xf2,0xf0),_0x4b6a2c(0x10f,0xff),'\x64\x61\x74\x61']),_0xbd8037=await Currencies[_0x31fd5d(0xda,0xe7)]([_0x31fd5d(0xf4,0xf0)]);for(const _0x350e02 of _0x1c0ad0){const _0x113b2d=parseInt(_0x350e02[_0x76e079(0x11c,0x10e)]);global[_0x76e079(0xf2,0x102)]['\x61\x6c\x6c\x54\x68\x72\x65\x61\x64\x49'+'\x44'][_0x4b6a2c(0xf1,0xf5)](_0x113b2d),global[_0x76e079(0x108,0x102)][_0x76e079(0x100,0xfc)]['\x73\x65\x74'](_0x113b2d,_0x350e02[_0x76e079(0xf9,0x102)]||{}),global[_0x31fd5d(0x108,0x102)][_0x31fd5d(0x10e,0xfa)][_0x4b6a2c(0x10f,0x10f)](_0x113b2d,_0x350e02['\x74\x68\x72\x65\x61\x64\x49\x6e\x66\x6f']||{}),_0x350e02['\x64\x61\x74\x61']&&!(0x1ee1+0x511+-0x23f2)==_0x350e02[_0x76e079(0x114,0x102)][_0x76e079(0xe3,0xf2)]&&global['\x64\x61\x74\x61'][_0x4b6a2c(0xf4,0xeb)+'\x65\x64'][_0x76e079(0x116,0x10f)](_0x350e02[_0x76e079(0x10e,0x10e)],0xc3d+0x346*0x1+-0xf82);}logger['\x6c\x6f\x61\x64\x65\x72'](_0x31fd5d(0xfe,0xf3)+'\x67\x20\x62\x69\u1ebf\x6e\x20\x6d\u00f4\x69'+_0x76e079(0x119,0x10a)+_0x76e079(0xe0,0xed));for(const _0x3738da of _0x14a344)global['\x64\x61\x74\x61'][_0x4b6a2c(0xfa,0x108)][_0x31fd5d(0x107,0xf5)](parseInt(_0x3738da[_0x4b6a2c(0xe7,0xf0)])),_0x3738da[_0x31fd5d(0xee,0xff)]&&0x1ea3+-0x19f4+-0x4af*0x1!=_0x3738da[_0x76e079(0xfa,0xff)][_0x76e079(0x111,0x109)]&&global[_0x31fd5d(0x117,0x102)][_0x31fd5d(0x117,0x10c)][_0x4b6a2c(0x10d,0x10f)](parseInt(_0x3738da[_0x76e079(0xed,0xf0)]),_0x3738da[_0x76e079(0xea,0xff)]),_0x3738da[_0x31fd5d(0x113,0x102)]&&0xcb*-0x23+0x7c1*0x1+-0x9*-0x239==_0x3738da[_0x76e079(0x118,0x102)][_0x4b6a2c(0xeb,0xf2)]&&global[_0x31fd5d(0xf3,0x102)][_0x31fd5d(0xe5,0xfb)][_0x31fd5d(0x10d,0x10f)](parseInt(_0x3738da[_0x76e079(0xf1,0xf0)]),-0x3*0xc3b+0x1d1*0x4+0x1d6e*0x1);for(const _0x1b7a1d of _0xbd8037)global['\x64\x61\x74\x61'][_0x4b6a2c(0xf4,0xf4)+_0x4b6a2c(0xee,0xea)]['\x70\x75\x73\x68'](parseInt(_0x1b7a1d['\x75\x73\x65\x72\x49\x44']));logger[_0x76e079(0xf1,0x104)](_0x31fd5d(0xe9,0xf3)+_0x76e079(0x111,0x111)+_0x4b6a2c(0x114,0x10b)+_0x76e079(0x103,0x110)),logger('\x4b\x68\u1edf\x69\x20\x74\u1ea1\x6f\x20\x62'+_0x31fd5d(0xf0,0xf1)+'\u01b0\u1edd\x6e\x67\x20\x74\x68\u00e0\x6e\x68'+_0x4b6a2c(0xd7,0xe8),_0x76e079(0xfb,0xef)+'\x20\x5d');}catch(_0x177512){return logger[_0x4b6a2c(0xfc,0x104)](_0x4b6a2c(0xff,0x101)+_0x4b6a2c(0x100,0xf1)+_0x76e079(0x10d,0xf7)+_0x31fd5d(0x111,0x105)+_0x31fd5d(0x10b,0x103)+_0x177512,'\x65\x72\x72\x6f\x72');}}());
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