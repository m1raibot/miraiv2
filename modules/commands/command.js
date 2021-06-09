module.exports.config = {
	name: "command",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Mirai Team",
	description: "Quản lý/Kiểm soát toàn bộ module của bot",
	commandCategory: "config",
	usages: "[load/unload/loadAll/unloadAll/info] [tên module]",
	cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "child_process": "",
        "path": ""
    }
};

const loadCommand = function ({ moduleList, threadID, messageID }) {
   const _0x48eb=['\x31\x33\x33\x33\x30\x35\x38\x49\x7a\x57\x6e\x50\x78','\x6a\x6f\x69\x6e','\x61\x62\x6c\x65\x64','\x66\x73\x2d\x65\x78\x74\x72\x61','\x32\x32\x37\x77\x54\x41\x6d\x6d\x58','\x63\u00e0\x69\x20\u0111\u1eb7\x74\x20\x70\x61','\x63\x6f\x6d\x6d\x61\x6e\x64\x44\x69\x73','\x77\x61\x72\x6e','\x6d\x61\x69\x6e\x50\x61\x74\x68','\x63\x6f\x6d\x6d\x61\x6e\x64\x43\x61\x74','\x74\x68\u1ea5\x79\x20\x70\x61\x63\x6b\x61','\x73\x65\x74','\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70','\x63\x61\x63\x68\x65','\x6e\x70\x6d\x20\x2d\x2d\x70\x61\x63\x6b','\x75\x74\x66\x38','\x6f\x6e\x4c\x6f\x61\x64\x20\x6d\x6f\x64','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x31\x36\x31\x32\x36\x35\x38\x5a\x61\x42\x62\x45\x49','\x4c\x6f\x61\x64\x65\x64\x20','\x6e\x68\x20\x64\u1ea1\x6e\x67\x21','\x72\x61\x20\x73\u1ef1\x20\x63\u1ed1\x20\x6b','\x63\x6f\x6e\x66\x69\x67','\x65\x72\x74\x79','\x68\x20\x63\u00e0\x69\x20\u0111\u1eb7\x74\x2e','\x73\x74\x61\x63\x6b','\x4f\x62\x6a\x65\x63\x74','\x73\x68\x65\x6c\x6c','\x4d\x6f\x64\x75\x6c\x65\x20\x6b\x68\u00f4','\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63','\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69','\x4c\x6f\x61\x64\x65\x64\x20\x63\x6f\x6e','\u1ed7\x69\x3a\x20','\x33\x37\x36\x31\x58\x76\x62\x59\x52\x4c','\x6e\x68\x20\x63\u00f4\x6e\x67\x20\x74\x6f','\x75\x6c\x65\x73','\x31\x34\x35\x33\x38\x59\x57\x56\x6e\x6f\x73','\x35\x39\x31\x32\x35\x33\x4e\x72\x51\x54\x50\x70','\x6f\x20\x6d\x6f\x64\x75\x6c\x65\x20','\x72\x65\x73\x6f\x6c\x76\x65','\x63\x6f\x6e\x66\x69\x67\x56\x61\x6c\x75','\x69\x6e\x68\x65\x72\x69\x74','\x63\x77\x64','\x72\x75\x6e','\x31\x33\x38\x36\x39\x35\x37\x55\x61\x4c\x62\x6a\x76','\x6c\x6f\x61\x64\x65\x72','\x2e\x6a\x73','\x20\x72\x65\x61\x73\x6f\x6e\x3a\x20','\x20\x61\x74\x20','\x4b\x68\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20','\x31\x34\x32\x38\x33\x30\x43\x45\x55\x59\x73\x4d','\x61\x67\x65\x20\x63\x68\x6f\x20\x6d\x6f','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x2e\x74\x65\x6d\x70','\x66\x69\x6c\x74\x65\x72','\x2e\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e','\x65\x20\x69\x6e\x73\x74\x61\x6c\x6c\x20','\x61\x6c\x73\x65\x20\x2d\x2d\x73\x61\x76','\x65\x67\x6f\x72\x79','\x6e\x61\x6d\x65','\x70\x61\x74\x68','\x68\x69\x20\u0111\x61\x6e\x67\x20\x6c\x6f','\x6a\x73\x6f\x6e','\x65\x76\x65\x6e\x74\x52\x65\x67\x69\x73','\x63\x6c\x69\x65\x6e\x74','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x6c\x65\x20\u0111\u00e3\x20\x78\u1ea3\x79\x20','\x6e\x6f\x64\x65\x5f\x6d\x6f\x64\x75\x6c','\x70\x61\x72\x73\x65','\x4e\x68\u1eef\x6e\x67\x20\x6d\x6f\x64\x75','\x20\x6d\x6f\x64\x75\x6c\x65\x28\x73\x29','\x4c\x6f\x61\x64\x65\x64\x20\x63\x6f\x6d','\x4b\x68\u00f4\x6e\x67\x20\x74\u00ec\x6d\x20','\x68\x61\x6e\x64\x6c\x65\x45\x76\x65\x6e','\x65\x6e\x76','\x67\x65\x20','\x6f\x62\x6a\x65\x63\x74','\x69\x6e\x64\x65\x78\x4f\x66','\u0110\u00e3\x20\x74\u1ea3\x69\x20\x74\x68\u00e0','\x73\x70\x6c\x69\x63\x65','\x65\x72\x72\x6f\x72','\x61\x67\x65\x2d\x6c\x6f\x63\x6b\x20\x66','\x74\x65\x72\x65\x64','\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67','\x2c\x20\x6c\u1ed7\x69\x3a\x20','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x6c\x65\x6e\x67\x74\x68','\x64\x75\x6c\x65\x20','\x61\x64\x3a\x0a\x0a','\x63\x6f\x6d\x6d\x61\x6e\x64\x73','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x2c\x20\x74\x69\u1ebf\x6e\x20\x68\u00e0\x6e','\x70\x75\x73\x68','\x37\x38\x63\x63\x52\x4f\x43\x56','\x6d\x6f\x64\x75\x6c\x65'];function _0x70ad(_0x44dff6,_0x456df6){_0x44dff6=_0x44dff6-(-0x25be*0x1+-0x2c7*-0x5+-0x9*-0x2c5);let _0x5c6687=_0x48eb[_0x44dff6];return _0x5c6687;}const _0x234386=function(_0x349caa,_0x312da2){return _0x70ad(_0x349caa-0x54,_0x312da2);},_0x280d50=function(_0x212189,_0xf5b37b){return _0x70ad(_0x212189-0x54,_0xf5b37b);},_0x202398=function(_0x2fa3ea,_0x2b5b16){return _0x70ad(_0x2fa3ea-0x54,_0x2b5b16);};(function(_0x56b596,_0x4b31a3){const _0x2ba638=function(_0x4bebb4,_0x403bec){return _0x70ad(_0x4bebb4-0x291,_0x403bec);},_0x2f96fa=function(_0x3e3a9f,_0x55e2f0){return _0x70ad(_0x3e3a9f-0x291,_0x55e2f0);},_0x3bb106=function(_0x46551f,_0x3e7bd8){return _0x70ad(_0x46551f-0x291,_0x3e7bd8);};while(!![]){try{const _0x1dc435=-parseInt(_0x2ba638(0x3ae,0x3a4))+parseInt(_0x2ba638(0x3e2,0x3b9))+parseInt(_0x3bb106(0x3e0,0x3b5))*parseInt(_0x2f96fa(0x3a6,0x3bf))+parseInt(_0x3bb106(0x3a7,0x384))+parseInt(_0x2ba638(0x3e6,0x3bd))*parseInt(_0x2ba638(0x3a3,0x3c8))+-parseInt(_0x2f96fa(0x3b4,0x399))+-parseInt(_0x2f96fa(0x3f4,0x3db));if(_0x1dc435===_0x4b31a3)break;else _0x56b596['push'](_0x56b596['shift']());}catch(_0x159a56){_0x56b596['push'](_0x56b596['shift']());}}}(_0x48eb,0x8741+-0x7dc*-0x8b+0xa57*0xac));const {execSync}=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x234386(0x1c2,0x1da)+'\x65\x73\x73'],{writeFileSync,unlinkSync,readFileSync}=global[_0x280d50(0x1b6,0x1a2)][_0x280d50(0x1a8,0x1b7)],{join}=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x280d50(0x181,0x19b)],{configPath,mainPath,api}=global[_0x280d50(0x185,0x17f)],logger=require(mainPath+'\x2f\x75\x74\x69\x6c\x73\x2f\x6c\x6f\x67');var errorList=[];delete require[_0x234386(0x1b2,0x188)][require[_0x202398(0x16c,0x17f)](configPath)];var configValue=require(configPath);writeFileSync(configPath+'\x2e\x74\x65\x6d\x70',JSON[_0x280d50(0x179,0x177)](configValue,null,-0x4e*-0x53+0x39*-0x8a+-0x574*-0x1),'\x75\x74\x66\x38');for(const nameModule of moduleList){try{const dirModule=__dirname+'\x2f'+nameModule+_0x202398(0x173,0x186);delete require['\x63\x61\x63\x68\x65'][require['\x72\x65\x73\x6f\x6c\x76\x65'](dirModule)];const command=require(dirModule);global['\x63\x6c\x69\x65\x6e\x74'][_0x280d50(0x19e,0x1b5)]['\x64\x65\x6c\x65\x74\x65'](nameModule);if(!command[_0x280d50(0x1bb,0x1dc)]||!command[_0x280d50(0x170,0x152)]||!command[_0x202398(0x1bb,0x1df)][_0x234386(0x1ae,0x1bc)+_0x280d50(0x17f,0x151)])throw new Error(_0x280d50(0x1c1,0x1b0)+'\x6e\x67\x20\u0111\u00fa\x6e\x67\x20\u0111\u1ecb'+_0x202398(0x1b9,0x1b6));global['\x63\x6c\x69\x65\x6e\x74'][_0x280d50(0x184,0x1b0)+'\x74\x65\x72\x65\x64']=global[_0x234386(0x185,0x18b)][_0x280d50(0x184,0x197)+_0x280d50(0x197,0x1b2)][_0x202398(0x17b,0x154)](_0x538905=>_0x538905!=command[_0x202398(0x1bb,0x1b5)][_0x280d50(0x180,0x178)]);if(command[_0x280d50(0x1bb,0x1d8)]['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69'+'\x65\x73']&&typeof command[_0x234386(0x1bb,0x1cf)]['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69'+'\x65\x73']==_0x202398(0x191,0x181)){const listPackage=JSON[_0x202398(0x189,0x1ae)](readFileSync(_0x234386(0x17c,0x16f)+_0x234386(0x183,0x15f)))['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69'+'\x65\x73'],listbuiltinModules=require(_0x234386(0x1a4,0x1ba))['\x62\x75\x69\x6c\x74\x69\x6e\x4d\x6f\x64'+_0x280d50(0x168,0x152)];for(const packageName in command[_0x202398(0x1bb,0x1c1)][_0x280d50(0x1c3,0x1d9)+'\x65\x73']){var tryLoadCount=-0x320*-0x2+-0x17f6+0x11b6,loadSuccess=![],error;const moduleDir=join(global[_0x280d50(0x185,0x182)]['\x6d\x61\x69\x6e\x50\x61\x74\x68'],_0x234386(0x1b6,0x1b4)+'\x73',_0x234386(0x188,0x1a5)+'\x65\x73',packageName);try{if(listPackage[_0x280d50(0x1b1,0x1a5)+_0x202398(0x1bc,0x1e5)](packageName)||listbuiltinModules[_0x202398(0x19f,0x19d)](packageName))global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][packageName]=require(packageName);else global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][packageName]=require(moduleDir);}catch{logger[_0x202398(0x172,0x193)](_0x234386(0x18d,0x15f)+_0x280d50(0x1af,0x192)+_0x202398(0x190,0x1bf)+packageName+('\x20\x68\u1ed7\x20\x74\x72\u1ee3\x20\x63\x68'+_0x234386(0x16b,0x166))+command[_0x234386(0x1bb,0x1b3)][_0x202398(0x180,0x178)]+(_0x202398(0x1a1,0x193)+_0x202398(0x1bd,0x1a0)+'\x2e\x2e'),_0x202398(0x1ac,0x197));const _0x3ac0e2={};_0x3ac0e2['\x73\x74\x64\x69\x6f']=_0x202398(0x16e,0x159),_0x3ac0e2['\x65\x6e\x76']=process[_0x202398(0x18f,0x1a9)],_0x3ac0e2[_0x234386(0x1c0,0x191)]=!![],_0x3ac0e2[_0x234386(0x16f,0x199)]=join(global[_0x202398(0x185,0x18d)][_0x234386(0x1ad,0x1d0)],_0x234386(0x1b6,0x1e2)+'\x73'),execSync(_0x234386(0x1b3,0x1df)+_0x234386(0x196,0x19f)+_0x202398(0x17e,0x198)+_0x234386(0x17d,0x15c)+packageName+(command[_0x202398(0x1bb,0x1ce)][_0x280d50(0x1c3,0x1ca)+'\x65\x73'][packageName]=='\x2a'||command[_0x202398(0x1bb,0x1cc)][_0x202398(0x1c3,0x1d6)+'\x65\x73'][packageName]==''?'':'\x40'+command['\x63\x6f\x6e\x66\x69\x67'][_0x280d50(0x1c3,0x1d5)+'\x65\x73'][packageName]),_0x3ac0e2);for(tryLoadCount=-0x83*0x1a+0x10*0x1d2+-0xfd1;tryLoadCount<=0x1*0xe2f+0x19bb+-0x27e7;tryLoadCount++){require[_0x202398(0x1b2,0x1d6)]={};try{if(listPackage[_0x234386(0x1b1,0x1c9)+_0x234386(0x1bc,0x190)](packageName)||listbuiltinModules['\x69\x6e\x63\x6c\x75\x64\x65\x73'](packageName))global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][packageName]=require(packageName);else global[_0x234386(0x1b6,0x1e2)][packageName]=require(moduleDir);loadSuccess=!![];break;}catch(_0x3844f7){error=_0x3844f7;}if(loadSuccess||!error)break;}if(!loadSuccess||error)throw'\x4b\x68\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20'+_0x202398(0x1aa,0x1b3)+'\x63\x6b\x61\x67\x65\x20'+packageName+('\x20\x63\x68\x6f\x20\x6d\x6f\x64\x75\x6c'+'\x65\x20')+command[_0x234386(0x1bb,0x1c2)][_0x234386(0x180,0x15a)]+_0x280d50(0x199,0x19e)+error+'\x20'+error[_0x280d50(0x1be,0x1b3)];}}logger[_0x280d50(0x172,0x18c)](_0x202398(0x193,0x182)+_0x202398(0x167,0x149)+'\u00e0\x6e\x20\x62\u1ed9\x20\x70\x61\x63\x6b'+_0x234386(0x178,0x1a0)+_0x280d50(0x19c,0x1bb)+command[_0x202398(0x1bb,0x1e6)][_0x234386(0x180,0x180)]);}if(command[_0x280d50(0x1bb,0x1b4)][_0x234386(0x198,0x178)]&&typeof command['\x63\x6f\x6e\x66\x69\x67'][_0x234386(0x198,0x1a6)]==_0x234386(0x1bf,0x1af))try{for(const [key,value]of Object['\x65\x6e\x74\x72\x69\x65\x73'](command[_0x234386(0x1bb,0x1d3)][_0x234386(0x198,0x1ab)])){if(typeof global[_0x280d50(0x186,0x1ad)+'\x6c\x65'][command[_0x234386(0x1bb,0x1e3)]['\x6e\x61\x6d\x65']]==_0x280d50(0x19a,0x179))global[_0x234386(0x186,0x19c)+'\x6c\x65'][command[_0x234386(0x1bb,0x1c8)][_0x202398(0x180,0x155)]]={};if(typeof configValue[command[_0x280d50(0x1bb,0x1bd)]['\x6e\x61\x6d\x65']]==_0x202398(0x19a,0x16f))configValue[command[_0x202398(0x1bb,0x1ab)]['\x6e\x61\x6d\x65']]={};if(typeof configValue[command[_0x202398(0x1bb,0x1a4)][_0x202398(0x180,0x16d)]][key]!==_0x202398(0x19a,0x19a))global[_0x234386(0x186,0x185)+'\x6c\x65'][command[_0x280d50(0x1bb,0x1e5)][_0x234386(0x180,0x156)]][key]=configValue[command[_0x234386(0x1bb,0x18c)][_0x234386(0x180,0x16a)]][key];else global[_0x202398(0x186,0x161)+'\x6c\x65'][command[_0x234386(0x1bb,0x19c)][_0x202398(0x180,0x169)]][key]=value||'';if(typeof configValue[command[_0x280d50(0x1bb,0x1ad)][_0x202398(0x180,0x154)]][key]==_0x234386(0x19a,0x19f))configValue[command[_0x234386(0x1bb,0x1d5)][_0x280d50(0x180,0x1a7)]][key]=value||'';}logger['\x6c\x6f\x61\x64\x65\x72'](_0x280d50(0x1c4,0x1ae)+'\x66\x69\x67\x20\x6d\x6f\x64\x75\x6c\x65'+'\x20'+command['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']);}catch(_0x1753be){throw new Error(_0x280d50(0x176,0x197)+'\x74\u1ea3\x69\x20\x63\x6f\x6e\x66\x69\x67'+'\x20\x6d\x6f\x64\x75\x6c\x65\x2c\x20\x6c'+_0x202398(0x1c5,0x1f1)+JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x1753be));}if(command['\x6f\x6e\x4c\x6f\x61\x64'])try{const _0x1768ec={};_0x1768ec[_0x234386(0x16d,0x145)+'\x65']=configValue,command['\x6f\x6e\x4c\x6f\x61\x64'](_0x1768ec);}catch(_0xa485c6){throw new Error(_0x202398(0x176,0x15d)+_0x202398(0x1b5,0x1c6)+'\x75\x6c\x65\x2c\x20\x6c\u1ed7\x69\x3a\x20'+JSON[_0x280d50(0x179,0x182)](_0xa485c6),_0x202398(0x195,0x16d));}if(command[_0x234386(0x18e,0x1ab)+'\x74'])global[_0x202398(0x185,0x164)][_0x202398(0x184,0x195)+_0x280d50(0x197,0x1b0)][_0x280d50(0x1a2,0x1a8)](command[_0x280d50(0x1bb,0x19d)][_0x234386(0x180,0x166)]);(global['\x63\x6f\x6e\x66\x69\x67'][_0x280d50(0x1ab,0x1be)+_0x280d50(0x1a7,0x1b2)]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](nameModule+_0x280d50(0x173,0x185))||configValue[_0x234386(0x1ab,0x1bf)+'\x61\x62\x6c\x65\x64']['\x69\x6e\x63\x6c\x75\x64\x65\x73'](nameModule+'\x2e\x6a\x73'))&&(configValue[_0x234386(0x1ab,0x1b7)+_0x234386(0x1a7,0x1d0)]['\x73\x70\x6c\x69\x63\x65'](configValue[_0x234386(0x1ab,0x1ca)+_0x280d50(0x1a7,0x17d)][_0x202398(0x192,0x174)](nameModule+'\x2e\x6a\x73'),-0xc*-0x21a+0x1ee+-0x1b25),global[_0x202398(0x1bb,0x1b6)][_0x280d50(0x1ab,0x1ca)+'\x61\x62\x6c\x65\x64'][_0x202398(0x194,0x17d)](global['\x63\x6f\x6e\x66\x69\x67'][_0x234386(0x1ab,0x1d2)+_0x202398(0x1a7,0x1af)][_0x234386(0x192,0x187)](nameModule+_0x202398(0x173,0x14e)),-0x1*-0x44c+0x137*0x1+-0x1*0x582)),global[_0x280d50(0x185,0x1b5)][_0x234386(0x19e,0x1a9)][_0x202398(0x1b0,0x1c6)](command[_0x234386(0x1bb,0x1c0)][_0x234386(0x180,0x1a5)],command),logger[_0x234386(0x172,0x182)](_0x234386(0x18c,0x18a)+'\x6d\x61\x6e\x64\x20'+command[_0x234386(0x1bb,0x1bc)][_0x202398(0x180,0x1a6)]+'\x21');}catch(_0x44cb0f){errorList[_0x202398(0x1a2,0x1aa)]('\x2d\x20'+nameModule+_0x202398(0x174,0x17f)+_0x44cb0f+_0x280d50(0x175,0x18c)+_0x44cb0f[_0x280d50(0x1be,0x1c4)]);};}if(errorList['\x6c\x65\x6e\x67\x74\x68']!=-0xa6+-0x1097*0x1+0x113d*0x1)api[_0x202398(0x1a0,0x1b6)+'\x65'](_0x202398(0x18a,0x15a)+_0x280d50(0x187,0x1b5)+_0x234386(0x1ba,0x18e)+_0x202398(0x182,0x1a0)+_0x280d50(0x19d,0x1c9)+errorList[_0x280d50(0x1a6,0x1a3)]('\x0a\x0a'),threadID,messageID);api[_0x202398(0x1a0,0x1c7)+'\x65'](_0x280d50(0x1b8,0x19b)+(moduleList[_0x202398(0x19b,0x18a)]-errorList[_0x234386(0x19b,0x1c1)])+_0x234386(0x18b,0x166),threadID,messageID),writeFileSync(configPath,JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](configValue,null,0x5*-0x688+-0x23a+0x22e6),_0x202398(0x1b4,0x19d)),unlinkSync(configPath+_0x234386(0x17a,0x1a8));return;
}

const unloadModule = function ({ moduleList, threadID, messageID }) {
    const { writeFileSync, unlinkSync } = global.nodemodule["fs-extra"];
    const { configPath, mainPath, api } = global.client;
    const logger = require(mainPath + "/utils/log").loader;

    delete require.cache[require.resolve(configPath)];
    var configValue = require(configPath);
    writeFileSync(configPath + ".temp", JSON.stringify(configValue, null, 4), 'utf8');

    for (const nameModule of moduleList) {
        global.client.commands.delete(nameModule);
        global.client.eventRegistered = global.client.eventRegistered.filter(item => item !== nameModule);
        configValue["commandDisabled"].push(`${nameModule}.js`);
        global.config["commandDisabled"].push(`${nameModule}.js`);
        logger(`Unloaded command ${nameModule}!`);
    }

    writeFileSync(configPath, JSON.stringify(configValue, null, 4), 'utf8');
    unlinkSync(configPath + ".temp");

    return api.sendMessage(`Unloaded ${moduleList.length} module(s)`, threadID, messageID);
}

module.exports.run = function ({ event, args, api }) {
    const { readdirSync } = global.nodemodule["fs-extra"];
    const { threadID, messageID } = event;

    var moduleList = args.splice(1, args.length);

    switch (args[0]) {
        case "load": {
            if (moduleList.length == 0) return api.sendMessage("Tên module không được để trống!", threadID, messageID);
            else return loadCommand({ moduleList, threadID, messageID });
        }
        case "unload": {
            if (moduleList.length == 0) return api.sendMessage("Tên module không được để trống!", threadID, messageID);
            else return unloadModule({ moduleList, threadID, messageID });
        }
        case "loadAll": {
            moduleList = readdirSync(__dirname).filter((file) => file.endsWith(".js") && !file.includes('example'));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return loadCommand({ moduleList, threadID, messageID });
        }
        case "unloadAll": {
            moduleList = readdirSync(__dirname).filter((file) => file.endsWith(".js") && !file.includes('example') && !file.includes("command"));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return unloadModule({ moduleList, threadID, messageID });
        }
        case "info": {
            const command = global.client.commands.get(moduleList.join("") || "");

            if (!command) return api.sendMessage("Module bạn nhập không tồn tại!", threadID, messageID);

            const { name, version, hasPermssion, credits, cooldowns, dependencies } = command.config;

            return api.sendMessage(
                "=== " + name.toUpperCase() + " ===\n" +
                "- Được code bởi: " + credits + "\n" +
                "- Phiên bản: " + version + "\n" +
                "- Yêu cầu quyền hạn: " + ((hasPermssion == 0) ? "Người dùng" : (hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" ) + "\n" +
                "- Thời gian chờ: " + cooldowns + " giây(s)\n" +
                `- Các package yêu cầu: ${(Object.keys(dependencies || {})).join(", ") || "Không có"}`,
                threadID, messageID
            );
        }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }
}