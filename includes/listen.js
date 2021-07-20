module.exports = function({ api, models }) {

	const Users = require("./controllers/users")({ models, api }),
				Threads = require("./controllers/threads")({ models, api }),
				Currencies = require("./controllers/currencies")({ models });
	const logger = require("../utils/log.js");

	//////////////////////////////////////////////////////////////////////
	//========= Push all variable from database to environment =========//
	//////////////////////////////////////////////////////////////////////
	
	const _0x4a52=['\x74\x68\x72\x65\x61\x64\x41\x6c\x6c\x6f','\x67\x65\x74\x54\x65\x78\x74','\x73\x74\x61\x72\x74\x4c\x6f\x61\x64\x45','\x74\x68\x72\x65\x61\x64\x42\x61\x6e\x6e','\x72\x6f\x6e\x6d\x65\x6e\x74\x55\x73\x65','\x75\x73\x65\x72\x4e\x61\x6d\x65','\x69\x65\x73\x49\x44','\x61\x6c\x6c\x54\x68\x72\x65\x61\x64\x49','\x5b\x20\x44\x41\x54\x41\x42\x41\x53\x45','\x64\x61\x74\x65\x41\x64\x64\x65\x64','\x62\x61\x6e\x6e\x65\x64','\x73\x65\x74','\x6e\x61\x6d\x65','\x38\x33\x39\x36\x39\x75\x67\x46\x61\x64\x72','\x6e\x65\x64','\x37\x35\x39\x31\x32\x33\x58\x78\x59\x53\x4f\x62','\x34\x33\x30\x38\x36\x39\x4e\x78\x46\x74\x73\x70','\x6c\x6f\x61\x64\x65\x72','\x33\x37\x33\x35\x37\x35\x73\x72\x69\x5a\x4c\x75','\x6e\x76\x69\x72\x6f\x6e\x6d\x65\x6e\x74','\x75\x73\x65\x72\x49\x44','\x73\x75\x63\x63\x65\x73\x73\x4c\x6f\x61','\x61\x6c\x6c\x55\x73\x65\x72\x49\x44','\x74\x68\x72\x65\x61\x64\x49\x6e\x66\x6f','\x35\x38\x32\x37\x32\x37\x59\x76\x64\x4a\x42\x68','\x6c\x6f\x61\x64\x65\x64\x45\x6e\x76\x69','\x31\x36\x4d\x45\x56\x67\x6e\x4b','\x77\x4e\x53\x46\x57','\x75\x73\x65\x72\x42\x61\x6e\x6e\x65\x64','\x67\x65\x74\x41\x6c\x6c','\x74\x68\x72\x65\x61\x64\x44\x61\x74\x61','\x72\x65\x61\x73\x6f\x6e','\x31\x30\x35\x34\x31\x39\x32\x43\x79\x74\x56\x76\x43','\x6c\x65\x6e\x67\x74\x68','\x64\x45\x6e\x76\x69\x72\x6f\x6e\x6d\x65','\x34\x33\x38\x39\x33\x38\x44\x6e\x5a\x61\x45\x71','\x64\x61\x74\x61','\x72\x6f\x6e\x6d\x65\x6e\x74\x54\x68\x72','\x70\x75\x73\x68','\x74\x68\x72\x65\x61\x64\x49\x44','\x6c\x69\x73\x74\x65\x6e','\x61\x6c\x6c\x43\x75\x72\x72\x65\x6e\x63','\x65\x61\x64','\x31\x71\x55\x53\x75\x4b\x4f','\x31\x63\x63\x47\x48\x67\x4b','\x63\x6f\x6d\x6d\x61\x6e\x64\x42\x61\x6e'];function _0x252d(_0x5cd652,_0xbab093){return _0x252d=function(_0x8441cf,_0x3bd714){_0x8441cf=_0x8441cf-(-0x1*0x246b+-0xca5*-0x3+-0x1b);let _0x4b7bd7=_0x4a52[_0x8441cf];return _0x4b7bd7;},_0x252d(_0x5cd652,_0xbab093);}(function(_0x56ba8e,_0x2db6c3){const _0x4170ee=_0x252d;while(!![]){try{const _0x77a488=parseInt(_0x4170ee(0x179))+-parseInt(_0x4170ee(0x16b))+parseInt(_0x4170ee(0x171))+-parseInt(_0x4170ee(0x185))*-parseInt(_0x4170ee(0x17c))+-parseInt(_0x4170ee(0x184))*-parseInt(_0x4170ee(0x196))+-parseInt(_0x4170ee(0x169))+-parseInt(_0x4170ee(0x194))*parseInt(_0x4170ee(0x173));if(_0x77a488===_0x2db6c3)break;else _0x56ba8e['push'](_0x56ba8e['shift']());}catch(_0x5b50a0){_0x56ba8e['push'](_0x56ba8e['shift']());}}}(_0x4a52,0x14b61b+0x710ce+-0x5c3bb*0x3),async function(){const _0x54f7bc=_0x252d;try{logger(global[_0x54f7bc(0x188)]('\x6c\x69\x73\x74\x65\x6e',_0x54f7bc(0x189)+_0x54f7bc(0x16c)),_0x54f7bc(0x18f)+'\x20\x5d');let _0x5ca033=await Threads[_0x54f7bc(0x176)](),_0x3c278a=await Users['\x67\x65\x74\x41\x6c\x6c'](['\x75\x73\x65\x72\x49\x44',_0x54f7bc(0x193),_0x54f7bc(0x17d)]),_0x595b88=await Currencies[_0x54f7bc(0x176)]([_0x54f7bc(0x16d)]);for(const _0x50a2a8 of _0x5ca033){const _0x4f08fa=String(_0x50a2a8[_0x54f7bc(0x180)]);global['\x64\x61\x74\x61'][_0x54f7bc(0x18e)+'\x44'][_0x54f7bc(0x17f)](_0x4f08fa),global[_0x54f7bc(0x17d)][_0x54f7bc(0x177)][_0x54f7bc(0x192)](_0x4f08fa,_0x50a2a8[_0x54f7bc(0x17d)]||{}),global[_0x54f7bc(0x17d)]['\x74\x68\x72\x65\x61\x64\x49\x6e\x66\x6f'][_0x54f7bc(0x192)](_0x4f08fa,_0x50a2a8[_0x54f7bc(0x170)]||{});if(_0x50a2a8[_0x54f7bc(0x17d)]&&_0x50a2a8['\x64\x61\x74\x61'][_0x54f7bc(0x191)]==!![])global['\x64\x61\x74\x61'][_0x54f7bc(0x18a)+'\x65\x64']['\x73\x65\x74'](_0x4f08fa,{'\x72\x65\x61\x73\x6f\x6e':_0x50a2a8[_0x54f7bc(0x17d)][_0x54f7bc(0x178)]||'','\x64\x61\x74\x65\x41\x64\x64\x65\x64':_0x50a2a8['\x64\x61\x74\x61'][_0x54f7bc(0x190)]||''});if(_0x50a2a8[_0x54f7bc(0x17d)]&&_0x50a2a8[_0x54f7bc(0x17d)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x42\x61\x6e'+_0x54f7bc(0x195)]&&_0x50a2a8[_0x54f7bc(0x17d)][_0x54f7bc(0x186)+_0x54f7bc(0x195)][_0x54f7bc(0x17a)]!=0x9f5+0x16c6+0x7*-0x4ad)global[_0x54f7bc(0x17d)][_0x54f7bc(0x186)+_0x54f7bc(0x195)][_0x54f7bc(0x192)](_0x4f08fa,_0x50a2a8[_0x54f7bc(0x17d)][_0x54f7bc(0x186)+_0x54f7bc(0x195)]);if(_0x50a2a8['\x64\x61\x74\x61']&&_0x50a2a8[_0x54f7bc(0x17d)]['\x4e\x53\x46\x57'])global[_0x54f7bc(0x17d)][_0x54f7bc(0x187)+_0x54f7bc(0x174)][_0x54f7bc(0x17f)](_0x4f08fa);}logger[_0x54f7bc(0x16a)](global[_0x54f7bc(0x188)](_0x54f7bc(0x181),_0x54f7bc(0x172)+_0x54f7bc(0x17e)+_0x54f7bc(0x183)));for(const _0x104342 of _0x3c278a){const _0x4c0ad1=String(_0x104342[_0x54f7bc(0x16d)]);global[_0x54f7bc(0x17d)][_0x54f7bc(0x16f)]['\x70\x75\x73\x68'](_0x4c0ad1);if(_0x104342['\x6e\x61\x6d\x65']&&_0x104342[_0x54f7bc(0x193)]['\x6c\x65\x6e\x67\x74\x68']!=0x2066+0x6d*0x2c+-0x253*0x16)global[_0x54f7bc(0x17d)][_0x54f7bc(0x18c)][_0x54f7bc(0x192)](_0x4c0ad1,_0x104342['\x6e\x61\x6d\x65']);if(_0x104342[_0x54f7bc(0x17d)]&&_0x104342[_0x54f7bc(0x17d)][_0x54f7bc(0x191)]==-0x1*-0x15be+0x1*0x1d94+-0x3351)global['\x64\x61\x74\x61'][_0x54f7bc(0x175)]['\x73\x65\x74'](_0x4c0ad1,{'\x72\x65\x61\x73\x6f\x6e':_0x104342[_0x54f7bc(0x17d)][_0x54f7bc(0x178)]||'','\x64\x61\x74\x65\x41\x64\x64\x65\x64':_0x104342['\x64\x61\x74\x61'][_0x54f7bc(0x190)]||''});if(_0x104342[_0x54f7bc(0x17d)]&&_0x104342[_0x54f7bc(0x17d)][_0x54f7bc(0x186)+_0x54f7bc(0x195)]&&_0x104342[_0x54f7bc(0x17d)][_0x54f7bc(0x186)+_0x54f7bc(0x195)][_0x54f7bc(0x17a)]!=-0x1*-0x853+-0x1574+0xd21*0x1)global[_0x54f7bc(0x17d)][_0x54f7bc(0x186)+_0x54f7bc(0x195)][_0x54f7bc(0x192)](_0x4c0ad1,_0x104342[_0x54f7bc(0x17d)][_0x54f7bc(0x186)+_0x54f7bc(0x195)]);}for(const _0x59e7a5 of _0x595b88)global[_0x54f7bc(0x17d)][_0x54f7bc(0x182)+_0x54f7bc(0x18d)][_0x54f7bc(0x17f)](String(_0x59e7a5[_0x54f7bc(0x16d)]));logger[_0x54f7bc(0x16a)](global[_0x54f7bc(0x188)](_0x54f7bc(0x181),_0x54f7bc(0x172)+_0x54f7bc(0x18b)+'\x72')),logger(global['\x67\x65\x74\x54\x65\x78\x74'](_0x54f7bc(0x181),_0x54f7bc(0x16e)+_0x54f7bc(0x17b)+'\x6e\x74'),_0x54f7bc(0x18f)+'\x20\x5d');}catch(_0x52c6ec){return logger[_0x54f7bc(0x16a)](global[_0x54f7bc(0x188)](_0x54f7bc(0x181),'\x66\x61\x69\x6c\x4c\x6f\x61\x64\x45\x6e'+'\x76\x69\x72\x6f\x6e\x6d\x65\x6e\x74',_0x52c6ec),'\x65\x72\x72\x6f\x72');}}());

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