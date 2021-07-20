module.exports = function({ api, models }) {

	const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");

	//////////////////////////////////////////////////////////////////////
	//========= Push all variable from database to environment =========//
	//////////////////////////////////////////////////////////////////////
	
	const _0x1705=['\x77\x4e\x53\x46\x57','\x74\x68\x72\x65\x61\x64\x41\x6c\x6c\x6f','\x72\x6f\x6e\x6d\x65\x6e\x74\x54\x68\x72','\x31\x6e\x6f\x4b\x58\x71\x4f','\x65\x72\x72\x6f\x72','\x5b\x20\x44\x41\x54\x41\x42\x41\x53\x45','\x75\x73\x65\x72\x42\x61\x6e\x6e\x65\x64','\x73\x65\x74','\x6e\x76\x69\x72\x6f\x6e\x6d\x65\x6e\x74','\x6e\x61\x6d\x65','\x36\x35\x34\x34\x33\x30\x62\x68\x78\x62\x58\x4f','\x4e\x53\x46\x57','\x63\x6f\x6d\x6d\x61\x6e\x64\x42\x61\x6e','\x37\x31\x36\x38\x37\x35\x7a\x62\x6b\x62\x6f\x6c','\x72\x65\x61\x73\x6f\x6e','\x70\x75\x73\x68','\x74\x68\x72\x65\x61\x64\x49\x6e\x66\x6f','\x38\x37\x30\x37\x4d\x43\x43\x45\x58\x57','\x69\x65\x73\x49\x44','\x67\x65\x74\x54\x65\x78\x74','\x61\x6c\x6c\x55\x73\x65\x72\x49\x44','\x37\x39\x38\x32\x39\x67\x66\x76\x55\x42\x46','\x62\x61\x6e\x6e\x65\x64','\x36\x30\x31\x38\x31\x45\x43\x6e\x41\x46\x42','\x74\x68\x72\x65\x61\x64\x42\x61\x6e\x6e','\x36\x35\x46\x66\x4e\x61\x4a\x71','\x39\x4a\x54\x4f\x69\x64\x6c','\x72\x6f\x6e\x6d\x65\x6e\x74\x55\x73\x65','\x38\x34\x34\x32\x34\x34\x66\x4e\x69\x76\x4f\x53','\x6c\x6f\x61\x64\x65\x64\x45\x6e\x76\x69','\x64\x61\x74\x61','\x6c\x69\x73\x74\x65\x6e','\x65\x61\x64','\x6c\x65\x6e\x67\x74\x68','\x6e\x65\x64','\x64\x61\x74\x65\x41\x64\x64\x65\x64','\x64\x45\x6e\x76\x69\x72\x6f\x6e\x6d\x65','\x67\x65\x74\x41\x6c\x6c','\x76\x69\x72\x6f\x6e\x6d\x65\x6e\x74','\x31\x32\x34\x30\x34\x36\x56\x52\x53\x6e\x45\x6b','\x31\x32\x56\x6b\x55\x4d\x67\x4d','\x75\x73\x65\x72\x49\x44'];function _0x5ba9(_0x2f140a,_0x2d61a2){return _0x5ba9=function(_0xf44fbf,_0x1755db){_0xf44fbf=_0xf44fbf-(-0x1df6+0x1*-0x192a+0x382f);let _0x36d869=_0x1705[_0xf44fbf];return _0x36d869;},_0x5ba9(_0x2f140a,_0x2d61a2);}(function(_0x167049,_0x180c20){function _0x57347b(_0x373417,_0x213df1){return _0x5ba9(_0x373417- -0x381,_0x213df1);}while(!![]){try{const _0x413eb8=-parseInt(_0x57347b(-0x24f,-0x243))*-parseInt(_0x57347b(-0x268,-0x27a))+-parseInt(_0x57347b(-0x25a,-0x24b))*parseInt(_0x57347b(-0x252,-0x251))+parseInt(_0x57347b(-0x254,-0x25d))*parseInt(_0x57347b(-0x26d,-0x26c))+-parseInt(_0x57347b(-0x261,-0x25b))+-parseInt(_0x57347b(-0x251,-0x23c))*-parseInt(_0x57347b(-0x256,-0x253))+parseInt(_0x57347b(-0x26e,-0x273))+-parseInt(_0x57347b(-0x25e,-0x259));if(_0x413eb8===_0x180c20)break;else _0x167049['push'](_0x167049['shift']());}catch(_0x31ba52){_0x167049['push'](_0x167049['shift']());}}}(_0x1705,0x5cb88+0x623a4+-0x4bcbd),async function(){function _0x3c98f5(_0x145212,_0x4f7c0d){return _0x5ba9(_0x145212- -0x281,_0x4f7c0d);}try{logger(global[_0x3c98f5(-0x158,-0x158)]('\x6c\x69\x73\x74\x65\x6e','\x73\x74\x61\x72\x74\x4c\x6f\x61\x64\x45'+_0x3c98f5(-0x163,-0x166)),_0x3c98f5(-0x166,-0x17b)+'\x20\x5d');let _0xacec3e=await Threads[_0x3c98f5(-0x170,-0x16c)](),_0x19d0d5=await Users[_0x3c98f5(-0x170,-0x17e)](['\x75\x73\x65\x72\x49\x44',_0x3c98f5(-0x162,-0x15d),'\x64\x61\x74\x61']),_0x2a3d16=await Currencies['\x67\x65\x74\x41\x6c\x6c']([_0x3c98f5(-0x16c,-0x181)]);for(const _0xe938f5 of _0xacec3e){const _0x2256b0=String(_0xe938f5['\x74\x68\x72\x65\x61\x64\x49\x44']);global[_0x3c98f5(-0x14d,-0x14a)]['\x61\x6c\x6c\x54\x68\x72\x65\x61\x64\x49'+'\x44']['\x70\x75\x73\x68'](_0x2256b0),global[_0x3c98f5(-0x14d,-0x14b)]['\x74\x68\x72\x65\x61\x64\x44\x61\x74\x61'][_0x3c98f5(-0x164,-0x170)](_0x2256b0,_0xe938f5[_0x3c98f5(-0x14d,-0x154)]||{}),global['\x64\x61\x74\x61'][_0x3c98f5(-0x15b,-0x159)][_0x3c98f5(-0x164,-0x16e)](_0x2256b0,_0xe938f5[_0x3c98f5(-0x15b,-0x170)]||{});if(_0xe938f5[_0x3c98f5(-0x14d,-0x13a)]&&_0xe938f5['\x64\x61\x74\x61']['\x62\x61\x6e\x6e\x65\x64']==!![])global[_0x3c98f5(-0x14d,-0x148)][_0x3c98f5(-0x153,-0x165)+'\x65\x64'][_0x3c98f5(-0x164,-0x16e)](_0x2256b0,{'\x72\x65\x61\x73\x6f\x6e':_0xe938f5[_0x3c98f5(-0x14d,-0x13f)][_0x3c98f5(-0x15d,-0x166)]||'','\x64\x61\x74\x65\x41\x64\x64\x65\x64':_0xe938f5['\x64\x61\x74\x61'][_0x3c98f5(-0x172,-0x16c)]||''});if(_0xe938f5[_0x3c98f5(-0x14d,-0x13e)]&&_0xe938f5[_0x3c98f5(-0x14d,-0x15a)][_0x3c98f5(-0x15f,-0x14b)+_0x3c98f5(-0x149,-0x13c)]&&_0xe938f5['\x64\x61\x74\x61']['\x63\x6f\x6d\x6d\x61\x6e\x64\x42\x61\x6e'+_0x3c98f5(-0x149,-0x156)][_0x3c98f5(-0x14a,-0x13f)]!=0x5dd+-0x1467+0x2*0x745)global[_0x3c98f5(-0x14d,-0x13e)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x42\x61\x6e'+'\x6e\x65\x64'][_0x3c98f5(-0x164,-0x172)](_0x2256b0,_0xe938f5[_0x3c98f5(-0x14d,-0x15c)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x42\x61\x6e'+_0x3c98f5(-0x149,-0x14b)]);if(_0xe938f5[_0x3c98f5(-0x14d,-0x155)]&&_0xe938f5['\x64\x61\x74\x61'][_0x3c98f5(-0x160,-0x171)])global[_0x3c98f5(-0x14d,-0x15f)][_0x3c98f5(-0x16a,-0x15d)+_0x3c98f5(-0x16b,-0x15a)]['\x70\x75\x73\x68'](_0x2256b0);}logger['\x6c\x6f\x61\x64\x65\x72'](global[_0x3c98f5(-0x158,-0x14d)]('\x6c\x69\x73\x74\x65\x6e',_0x3c98f5(-0x14e,-0x13e)+_0x3c98f5(-0x169,-0x172)+_0x3c98f5(-0x14b,-0x147)));for(const _0x2c3146 of _0x19d0d5){const _0x43186b=String(_0x2c3146['\x75\x73\x65\x72\x49\x44']);global[_0x3c98f5(-0x14d,-0x144)][_0x3c98f5(-0x157,-0x147)][_0x3c98f5(-0x15c,-0x14f)](_0x43186b);if(_0x2c3146[_0x3c98f5(-0x162,-0x15a)]&&_0x2c3146[_0x3c98f5(-0x162,-0x15e)][_0x3c98f5(-0x14a,-0x15c)]!=0x14f*-0xe+-0x29b+-0x1e7*-0xb)global['\x64\x61\x74\x61']['\x75\x73\x65\x72\x4e\x61\x6d\x65'][_0x3c98f5(-0x164,-0x172)](_0x43186b,_0x2c3146[_0x3c98f5(-0x162,-0x164)]);if(_0x2c3146[_0x3c98f5(-0x14d,-0x139)]&&_0x2c3146['\x64\x61\x74\x61'][_0x3c98f5(-0x155,-0x153)]==-0x2284+0x28+0x225d*0x1)global['\x64\x61\x74\x61'][_0x3c98f5(-0x165,-0x15c)][_0x3c98f5(-0x164,-0x178)](_0x43186b,{'\x72\x65\x61\x73\x6f\x6e':_0x2c3146[_0x3c98f5(-0x14d,-0x153)][_0x3c98f5(-0x15d,-0x156)]||'','\x64\x61\x74\x65\x41\x64\x64\x65\x64':_0x2c3146['\x64\x61\x74\x61'][_0x3c98f5(-0x172,-0x173)]||''});if(_0x2c3146['\x64\x61\x74\x61']&&_0x2c3146['\x64\x61\x74\x61']['\x63\x6f\x6d\x6d\x61\x6e\x64\x42\x61\x6e'+_0x3c98f5(-0x149,-0x15c)]&&_0x2c3146[_0x3c98f5(-0x14d,-0x148)][_0x3c98f5(-0x15f,-0x162)+_0x3c98f5(-0x149,-0x137)][_0x3c98f5(-0x14a,-0x14b)]!=0x4*-0x562+-0x55*-0x1a+0xce6)global['\x64\x61\x74\x61'][_0x3c98f5(-0x15f,-0x16b)+_0x3c98f5(-0x149,-0x158)][_0x3c98f5(-0x164,-0x177)](_0x43186b,_0x2c3146['\x64\x61\x74\x61'][_0x3c98f5(-0x15f,-0x158)+_0x3c98f5(-0x149,-0x13b)]);}for(const _0xbff8d8 of _0x2a3d16)global[_0x3c98f5(-0x14d,-0x147)]['\x61\x6c\x6c\x43\x75\x72\x72\x65\x6e\x63'+_0x3c98f5(-0x159,-0x15e)][_0x3c98f5(-0x15c,-0x152)](String(_0xbff8d8[_0x3c98f5(-0x16c,-0x163)]));logger['\x6c\x6f\x61\x64\x65\x72'](global[_0x3c98f5(-0x158,-0x147)]('\x6c\x69\x73\x74\x65\x6e',_0x3c98f5(-0x14e,-0x139)+_0x3c98f5(-0x150,-0x159)+'\x72')),logger(global['\x67\x65\x74\x54\x65\x78\x74']('\x6c\x69\x73\x74\x65\x6e','\x73\x75\x63\x63\x65\x73\x73\x4c\x6f\x61'+_0x3c98f5(-0x171,-0x180)+'\x6e\x74'),_0x3c98f5(-0x166,-0x159)+'\x20\x5d');}catch(_0x52ceeb){return logger['\x6c\x6f\x61\x64\x65\x72'](global['\x67\x65\x74\x54\x65\x78\x74'](_0x3c98f5(-0x14c,-0x141),'\x66\x61\x69\x6c\x4c\x6f\x61\x64\x45\x6e'+_0x3c98f5(-0x16f,-0x177),_0x52ceeb),_0x3c98f5(-0x167,-0x175));}}());

	logger(`${api.getCurrentUserID()} - [ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "This bot was made by CatalizCS and SpermLord" : global.config.BOTNAME}`, "[ BOT INFO ]");
	
	///////////////////////////////////////////////
	//========= Require all handle need =========//
	//////////////////////////////////////////////

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