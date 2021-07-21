module.exports.config = {
	name: "event",
	version: "1.0.2",
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

module.exports.languages = {
    "vi": {
        "nameExist": "Tên module bị trùng với một module mang cùng tên khác!",
        "notFoundLanguage": "Module %1 không hỗ trợ ngôn ngữ ngôn ngữ của bạn",
        "notFoundPackage": "Không tìm thấy package %1 hỗ trợ cho module %2, tiến hành cài đặt...",
        "cantInstallPackage": "Không thể cài đặt package %1 cho module %2, lỗi: %3",
        "loadedPackage": "Đã tải thành công toàn bộ package cho module %1",
        "loadedConfig": "Đã tải thành công config cho module %1",
        "cantLoadConfig": "Không thể tải config của module %1, lỗi: %2",
        "cantOnload": "Không thể khởi chạy setup của module %1, lỗi: %1",
        "successLoadModule": "Đã tải thành công module %1",
        "failLoadModule": "Không thể tải thành công module %1, lỗi: %2",
        "moduleError": "Những module đã xảy ra sự cố không mong muốn khi đang tải: \n\n%1",

        "unloadSuccess": "Đã hủy tải module %1",
        "unloadedAll": "Đã hủy tải %1 module",

        "missingInput": "Tên module không được để trống!",
        "moduleNotExist": "Module bạn nhập không tồn tại!",
        "dontHavePackage": "Không có",
        "infoModule": "=== %1 ===\n- Được code bởi: %2\n- Phiên bản: %3\n- Các package yêu cầu: %4"
    },
    "en": {
        "nameExist": "Module's name is similar to another module!",
        "notFoundLanguage": "Module %1 does not support your language",
        "notFoundPackage": "Can't find package %1 for module %2, install...",
        "cantInstallPackage": "Can't install package %1 for module %2, error: %3",
        "loadedPackage": "Loaded package for module %1",
        "loadedConfig": "Loaded config for module %1",
        "cantLoadConfig": "Can't load config for module %1, error: %2",
        "cantOnload": "Can't load setup for module %1, error: %1",
        "successLoadModule": "Loaded module %1",
        "failLoadModule": "Can't load module %1, error: %2",
        "moduleError": "Modules which have unexpected error when loading: \n\n%1",

        "unloadSuccess": "Unloaded module %1",
        "unloadedAll": "Unloaded %1 module",

        "missingInput": "Module's name can't be left blank!",
        "moduleNotExist": "Module you enter doesn't exist!",
        "dontHavePackage": "None",
        "infoModule": "=== %1 ===\n- Coded by: %2\n- Version: %3\n- Required package: %4"
    }
}

module.exports.loadCommand = function ({ moduleList, threadID, messageID, getText }) {
    const _0x48a8=['\x31\x54\x4d\x75\x43\x41\x4a','\x6e\x6f\x74\x46\x6f\x75\x6e\x64\x50\x61','\x61\x67\x65\x2d\x6c\x6f\x63\x6b\x20\x66','\x6c\x65\x64','\x65\x73\x73','\x20\x6d\x6f\x64\x75\x6c\x65\x28\x73\x29','\x38\x58\x78\x4f\x77\x4d\x54','\x6d\x61\x69\x6e\x50\x61\x74\x68','\x6e\x6f\x64\x65\x5f\x6d\x6f\x64\x75\x6c','\x63\x6f\x6e\x66\x69\x67','\x65\x72\x74\x79','\x39\x33\x39\x31\x39\x34\x6f\x6a\x4f\x48\x6a\x47','\x6c\x6f\x61\x64\x65\x72','\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63','\x4c\x6f\x61\x64\x65\x64\x20','\x61\x67\x65','\x75\x74\x66\x38','\x6a\x6f\x69\x6e','\x2e\x74\x65\x6d\x70','\x72\x65\x73\x6f\x6c\x76\x65','\x34\x50\x67\x78\x67\x49\x5a','\x75\x6c\x65\x73','\x36\x33\x30\x30\x39\x35\x51\x41\x55\x77\x6d\x76','\x32\x32\x32\x31\x33\x36\x64\x79\x6f\x68\x6d\x77','\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e\x6a','\x63\x61\x6e\x74\x4f\x6e\x6c\x6f\x61\x64','\x63\x61\x63\x68\x65','\x6c\x6f\x61\x64\x65\x64\x50\x61\x63\x6b','\x61\x6c\x73\x65\x20\x2d\x2d\x73\x61\x76','\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67','\x73\x6f\x6e','\x33\x32\x31\x30\x34\x4d\x79\x43\x63\x62\x58','\x70\x61\x74\x68','\x77\x61\x72\x6e','\x6d\x6f\x64\x75\x6c\x65','\x73\x70\x6c\x69\x63\x65','\x63\x6c\x69\x65\x6e\x74','\x2e\x6a\x73','\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70','\x62\x75\x69\x6c\x74\x69\x6e\x4d\x6f\x64','\x65\x76\x65\x6e\x74\x44\x69\x73\x61\x62','\x6f\x62\x6a\x65\x63\x74','\x6c\x50\x61\x63\x6b\x61\x67\x65','\x65\x72\x72\x6f\x72\x46\x6f\x72\x6d\x61','\x38\x32\x36\x37\x33\x46\x6f\x45\x4c\x4d\x43','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x31\x31\x55\x46\x7a\x44\x76\x66','\x6c\x6f\x61\x64\x65\x64\x43\x6f\x6e\x66','\x65\x6e\x76','\x6e\x74\x20','\x4c\x6f\x61\x64\x65\x64\x20\x65\x76\x65','\x63\x6b\x61\x67\x65','\x65\x76\x65\x6e\x74\x73','\x65\x20\x69\x6e\x73\x74\x61\x6c\x6c\x20','\x37\x31\x33\x31\x38\x32\x64\x64\x65\x6e\x65\x55','\x37\x6f\x63\x54\x77\x64\x6c','\x31\x38\x31\x30\x37\x44\x4f\x55\x78\x72\x6e','\x64\x65\x6c\x65\x74\x65','\x6e\x61\x6d\x65','\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x6f\x6e\x4c\x6f\x61\x64','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x61\x70\x69','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x6c\x65\x6e\x67\x74\x68'];(function(_0x207c15,_0x41605f){function _0x4e4b09(_0x4ab502,_0x5219cf){return _0x3ece(_0x4ab502- -0x2cf,_0x5219cf);}while(!![]){try{const _0x4d2eb4=parseInt(_0x4e4b09(-0x226,-0x240))*-parseInt(_0x4e4b09(-0x230,-0x22c))+parseInt(_0x4e4b09(-0x23f,-0x25c))*-parseInt(_0x4e4b09(-0x214,-0x216))+-parseInt(_0x4e4b09(-0x232,-0x213))*parseInt(_0x4e4b09(-0x227,-0x217))+-parseInt(_0x4e4b09(-0x204,-0x1f4))+-parseInt(_0x4e4b09(-0x20f,-0x216))+-parseInt(_0x4e4b09(-0x21a,-0x209))*-parseInt(_0x4e4b09(-0x203,-0x220))+-parseInt(_0x4e4b09(-0x228,-0x245))*-parseInt(_0x4e4b09(-0x206,-0x1f1));if(_0x4d2eb4===_0x41605f)break;else _0x207c15['push'](_0x207c15['shift']());}catch(_0x61ed14){_0x207c15['push'](_0x207c15['shift']());}}}(_0x48a8,0x2e77f+-0x5*0x2e66+0x45e2*0x13));const {execSync}=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x1b878e(0x291,0x27e)+_0x1b878e(0x256,0x275)],{writeFileSync,unlinkSync,readFileSync}=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65']['\x66\x73\x2d\x65\x78\x74\x72\x61'],{join}=global[_0x1b878e(0x249,0x26a)][_0x1b878e(0x26c,0x24d)],{configPath,mainPath,api}=global[_0x1b878e(0x245,0x251)],logger=require(mainPath+'\x2f\x75\x74\x69\x6c\x73\x2f\x6c\x6f\x67'),listPackage=JSON['\x70\x61\x72\x73\x65'](readFileSync(global['\x63\x6c\x69\x65\x6e\x74'][_0x1b878e(0x281,0x278)]+(_0x1b878e(0x28a,0x289)+_0x1b878e(0x289,0x28f))))['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69'+'\x65\x73'],listbuiltinModules=require(_0x1b878e(0x230,0x24f))[_0x1b878e(0x25e,0x254)+_0x1b878e(0x270,0x286)];function _0x1b878e(_0x5228f3,_0x29ccde){return _0x3ece(_0x29ccde-0x1bc,_0x5228f3);}var errorList=[];delete require[_0x1b878e(0x26d,0x28b)][require[_0x1b878e(0x269,0x284)](configPath)];var configValue=require(configPath);function _0x3ece(_0x31c23f,_0x236178){return _0x3ece=function(_0x421479,_0x11aeb2){_0x421479=_0x421479-(0x1*0x1945+-0x1cac+0x3f7);let _0x2a9c3c=_0x48a8[_0x421479];return _0x2a9c3c;},_0x3ece(_0x31c23f,_0x236178);}writeFileSync(configPath+_0x1b878e(0x28e,0x283),JSON[_0x1b878e(0x26c,0x25a)](configValue,null,0x1*-0x24e4+-0x72*0x3d+-0x2*-0x2009),_0x1b878e(0x25f,0x281));for(const nameModule of moduleList){try{const dirModule=join(__dirname,'\x2e\x2e','\x65\x76\x65\x6e\x74\x73',nameModule+_0x1b878e(0x23f,0x252));delete require[_0x1b878e(0x29b,0x28b)][require[_0x1b878e(0x282,0x284)](dirModule)];var event=require(dirModule);if(!event[_0x1b878e(0x281,0x27a)]||!event['\x72\x75\x6e'])throw new Error(getText(_0x1b878e(0x244,0x258)+'\x74'));if(event['\x63\x6f\x6e\x66\x69\x67'][_0x1b878e(0x266,0x268)+'\x65\x73']&&typeof event['\x63\x6f\x6e\x66\x69\x67'][_0x1b878e(0x28a,0x268)+'\x65\x73']==_0x1b878e(0x239,0x256)){for(const packageName in event['\x63\x6f\x6e\x66\x69\x67'][_0x1b878e(0x25d,0x268)+'\x65\x73']){const moduleDir=join(global[_0x1b878e(0x270,0x251)][_0x1b878e(0x267,0x278)],_0x1b878e(0x281,0x26a)+'\x73',_0x1b878e(0x27d,0x279)+'\x65\x73',packageName);try{if(!global[_0x1b878e(0x262,0x26a)][_0x1b878e(0x25c,0x253)+'\x65\x72\x74\x79'](packageName)){if(listPackage[_0x1b878e(0x231,0x253)+_0x1b878e(0x27f,0x27b)](packageName)||listbuiltinModules['\x69\x6e\x63\x6c\x75\x64\x65\x73'](packageName))global[_0x1b878e(0x28a,0x26a)][packageName]=require(packageName);else global[_0x1b878e(0x263,0x26a)][packageName]=require(moduleDir);}}catch{var tryLoadCount=-0x222b+0x46*-0x57+-0x1*-0x39f5,loadSuccess=![],error;logger['\x6c\x6f\x61\x64\x65\x72'](getText(_0x1b878e(0x25f,0x272)+_0x1b878e(0x267,0x260),packageName,event[_0x1b878e(0x296,0x27a)][_0x1b878e(0x275,0x267)]),_0x1b878e(0x243,0x24e)),execSync('\x6e\x70\x6d\x20\x2d\x2d\x70\x61\x63\x6b'+_0x1b878e(0x281,0x273)+_0x1b878e(0x295,0x28d)+_0x1b878e(0x251,0x262)+packageName+(event['\x63\x6f\x6e\x66\x69\x67']['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69'+'\x65\x73'][packageName]=='\x2a'||event[_0x1b878e(0x278,0x27a)][_0x1b878e(0x24e,0x268)+'\x65\x73'][packageName]==''?'':'\x40'+event['\x63\x6f\x6e\x66\x69\x67'][_0x1b878e(0x27d,0x268)+'\x65\x73'][packageName]),{'\x73\x74\x64\x69\x6f':'\x69\x6e\x68\x65\x72\x69\x74','\x65\x6e\x76':process[_0x1b878e(0x272,0x25d)],'\x73\x68\x65\x6c\x6c':!![],'\x63\x77\x64':join(global[_0x1b878e(0x260,0x251)][_0x1b878e(0x267,0x278)],'\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'+'\x73')});for(tryLoadCount=0x5b3*-0x2+-0x1430+0x1f97*0x1;tryLoadCount<=-0x144*-0xa+0x1fe1+-0x1*0x2c86;tryLoadCount++){require[_0x1b878e(0x287,0x28b)]={};try{require[_0x1b878e(0x26c,0x28b)]={};if(listPackage[_0x1b878e(0x268,0x253)+_0x1b878e(0x27c,0x27b)](packageName)||listbuiltinModules[_0x1b878e(0x289,0x26d)](packageName))global[_0x1b878e(0x264,0x26a)][packageName]=require(packageName);else global[_0x1b878e(0x272,0x26a)][packageName]=require(moduleDir);loadSuccess=!![];break;}catch(_0x189210){error=_0x189210;}if(loadSuccess||!error)break;}if(!loadSuccess||error)throw getText('\x63\x61\x6e\x74\x49\x6e\x73\x74\x61\x6c'+_0x1b878e(0x24a,0x257),packageName,event[_0x1b878e(0x270,0x27a)]['\x6e\x61\x6d\x65'],error);}}logger['\x6c\x6f\x61\x64\x65\x72'](getText(_0x1b878e(0x2a1,0x28c)+_0x1b878e(0x27b,0x280),event[_0x1b878e(0x271,0x27a)][_0x1b878e(0x251,0x267)]));}if(event['\x63\x6f\x6e\x66\x69\x67']['\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67']&&typeof event[_0x1b878e(0x26b,0x27a)][_0x1b878e(0x279,0x28e)]=='\x4f\x62\x6a\x65\x63\x74')try{for(const key in event[_0x1b878e(0x294,0x27a)][_0x1b878e(0x27e,0x28e)]){if(typeof global[_0x1b878e(0x249,0x26b)+'\x6c\x65'][event['\x63\x6f\x6e\x66\x69\x67'][_0x1b878e(0x267,0x267)]]==_0x1b878e(0x254,0x269))global[_0x1b878e(0x25b,0x26b)+'\x6c\x65'][event['\x63\x6f\x6e\x66\x69\x67'][_0x1b878e(0x24a,0x267)]]={};if(typeof global['\x63\x6f\x6e\x66\x69\x67'][event[_0x1b878e(0x273,0x27a)]['\x6e\x61\x6d\x65']]=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64')global[_0x1b878e(0x282,0x27a)][event[_0x1b878e(0x270,0x27a)]['\x6e\x61\x6d\x65']]={};if(typeof global['\x63\x6f\x6e\x66\x69\x67'][event[_0x1b878e(0x274,0x27a)]['\x6e\x61\x6d\x65']][key]!==_0x1b878e(0x267,0x269))global[_0x1b878e(0x250,0x26b)+'\x6c\x65'][event['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']][key]=global[_0x1b878e(0x296,0x27a)][event['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']][key];else global[_0x1b878e(0x259,0x26b)+'\x6c\x65'][event[_0x1b878e(0x281,0x27a)]['\x6e\x61\x6d\x65']][key]=event[_0x1b878e(0x25c,0x27a)][_0x1b878e(0x2ab,0x28e)][key]||'';if(typeof global[_0x1b878e(0x293,0x27a)][event[_0x1b878e(0x299,0x27a)][_0x1b878e(0x248,0x267)]][key]==_0x1b878e(0x24c,0x269))global[_0x1b878e(0x28b,0x27a)][event['\x63\x6f\x6e\x66\x69\x67'][_0x1b878e(0x285,0x267)]][key]=event[_0x1b878e(0x285,0x27a)][_0x1b878e(0x2a6,0x28e)][key]||'';}logger[_0x1b878e(0x25c,0x27d)](getText(_0x1b878e(0x27a,0x25c)+'\x69\x67',event['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']));}catch(_0x1a4069){throw new Error(getText(_0x1b878e(0x260,0x25c)+'\x69\x67',event[_0x1b878e(0x26e,0x27a)]['\x6e\x61\x6d\x65'],JSON[_0x1b878e(0x23f,0x25a)](_0x1a4069)));}if(event['\x6f\x6e\x4c\x6f\x61\x64'])try{const _0x5b383e={};_0x5b383e[_0x1b878e(0x28c,0x26e)]=api,event[_0x1b878e(0x256,0x26c)](_0x5b383e);}catch(_0x6fe28c){throw new Error(getText(_0x1b878e(0x26d,0x28a),event[_0x1b878e(0x266,0x27a)][_0x1b878e(0x245,0x267)],JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x6fe28c)),'\x65\x72\x72\x6f\x72');}(global['\x63\x6f\x6e\x66\x69\x67'][_0x1b878e(0x240,0x255)+_0x1b878e(0x252,0x274)]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](nameModule+_0x1b878e(0x26c,0x252))||configValue[_0x1b878e(0x25f,0x255)+'\x6c\x65\x64'][_0x1b878e(0x25a,0x26d)](nameModule+'\x2e\x6a\x73'))&&(configValue[_0x1b878e(0x241,0x255)+_0x1b878e(0x254,0x274)]['\x73\x70\x6c\x69\x63\x65'](configValue[_0x1b878e(0x238,0x255)+_0x1b878e(0x296,0x274)]['\x69\x6e\x64\x65\x78\x4f\x66'](nameModule+'\x2e\x6a\x73'),-0x1108+0x147f+-0x376),global['\x63\x6f\x6e\x66\x69\x67']['\x65\x76\x65\x6e\x74\x44\x69\x73\x61\x62'+'\x6c\x65\x64'][_0x1b878e(0x254,0x250)](global[_0x1b878e(0x258,0x27a)][_0x1b878e(0x249,0x255)+_0x1b878e(0x28d,0x274)]['\x69\x6e\x64\x65\x78\x4f\x66'](nameModule+_0x1b878e(0x268,0x252)),-0x1*-0x19ef+0x1460+-0x2e4e)),global[_0x1b878e(0x245,0x251)][_0x1b878e(0x24b,0x261)][_0x1b878e(0x275,0x266)](nameModule),global['\x63\x6c\x69\x65\x6e\x74']['\x65\x76\x65\x6e\x74\x73']['\x73\x65\x74'](event[_0x1b878e(0x277,0x27a)]['\x6e\x61\x6d\x65'],event),logger['\x6c\x6f\x61\x64\x65\x72'](_0x1b878e(0x24a,0x25f)+_0x1b878e(0x24b,0x25e)+event[_0x1b878e(0x27a,0x27a)][_0x1b878e(0x25d,0x267)]+'\x21');}catch(_0x17210f){errorList['\x70\x75\x73\x68'](getText('\x66\x61\x69\x6c\x4c\x6f\x61\x64\x4d\x6f'+'\x64\x75\x6c\x65',event[_0x1b878e(0x275,0x27a)][_0x1b878e(0x253,0x267)],_0x17210f));};}if(errorList[_0x1b878e(0x25d,0x270)]!=-0x2d3*0x3+-0x1353+0x1bcc)api[_0x1b878e(0x272,0x26f)+'\x65'](getText('\x6d\x6f\x64\x75\x6c\x65\x45\x72\x72\x6f'+'\x72',errorList[_0x1b878e(0x29a,0x282)]('\x0a\x0a')),threadID,messageID);api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x1b878e(0x27c,0x27f)+(moduleList[_0x1b878e(0x275,0x270)]-errorList[_0x1b878e(0x291,0x270)])+_0x1b878e(0x276,0x276),threadID,messageID),writeFileSync(configPath,JSON[_0x1b878e(0x26f,0x25a)](configValue,null,0x1991+0xe43+0x31*-0xd0),_0x1b878e(0x26f,0x281)),unlinkSync(configPath+_0x1b878e(0x288,0x283));return;
}

module.exports.unloadModule = function ({ moduleList, threadID, messageID, getText }) {
   const _0x146b=['\x70\x75\x73\x68','\x33\x36\x35\x37\x39\x34\x48\x64\x64\x62\x76\x47','\x32\x38\x33\x32\x35\x34\x57\x68\x61\x69\x59\x57','\x31\x31\x30\x39\x30\x38\x38\x7a\x78\x44\x73\x73\x48','\x31\x77\x71\x46\x64\x6f\x52','\x31\x6f\x70\x45\x67\x4e\x58','\x31\x31\x31\x31\x37\x39\x33\x47\x4b\x6d\x62\x5a\x6c','\x66\x73\x2d\x65\x78\x74\x72\x61','\x75\x74\x66\x38','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x6c\x6f\x61\x64\x65\x72','\x2e\x6a\x73','\x2e\x74\x65\x6d\x70','\x65\x73\x73','\x32\x35\x32\x36\x36\x33\x75\x46\x56\x6d\x74\x6b','\x65\x76\x65\x6e\x74\x44\x69\x73\x61\x62','\x33\x59\x45\x50\x49\x6c\x4d','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x63\x6f\x6e\x66\x69\x67','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x63\x61\x63\x68\x65','\x6c\x65\x64','\x75\x6e\x6c\x6f\x61\x64\x53\x75\x63\x63','\x34\x30\x35\x32\x35\x33\x4b\x4f\x55\x69\x72\x62','\x63\x6c\x69\x65\x6e\x74','\x34\x31\x36\x37\x36\x37\x51\x4d\x4b\x6b\x4d\x52','\x64\x65\x6c\x65\x74\x65'];(function(_0x1a2ee1,_0x141d45){function _0x40c86d(_0x35d4d0,_0x30b674){return _0x4803(_0x30b674- -0x1f0,_0x35d4d0);}while(!![]){try{const _0x381f6b=-parseInt(_0x40c86d(-0x85,-0x92))+parseInt(_0x40c86d(-0x90,-0x8d))+parseInt(_0x40c86d(-0x7b,-0x79))*parseInt(_0x40c86d(-0x7d,-0x8b))+-parseInt(_0x40c86d(-0x81,-0x82))+parseInt(_0x40c86d(-0x91,-0x8a))*parseInt(_0x40c86d(-0x86,-0x8c))+-parseInt(_0x40c86d(-0x83,-0x8e))+-parseInt(_0x40c86d(-0x88,-0x80))*parseInt(_0x40c86d(-0x8a,-0x8f));if(_0x381f6b===_0x141d45)break;else _0x1a2ee1['push'](_0x1a2ee1['shift']());}catch(_0x27735c){_0x1a2ee1['push'](_0x1a2ee1['shift']());}}}(_0x146b,0x2*0x10f15+-0x1aa67*-0x7+-0x4fcb7));const {writeFileSync,unlinkSync}=global[_0x15f3e5(0x1ed,0x1fb)][_0x15f3e5(0x1e3,0x1ec)],{configPath,mainPath,api}=global[_0x15f3e5(0x1f4,0x1ec)],logger=require(mainPath+'\x2f\x75\x74\x69\x6c\x73\x2f\x6c\x6f\x67')[_0x15f3e5(0x1e6,0x1f2)];delete require[_0x15f3e5(0x1f0,0x1e6)][require['\x72\x65\x73\x6f\x6c\x76\x65'](configPath)];var configValue=require(configPath);writeFileSync(configPath+'\x2e\x74\x65\x6d\x70',JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](configValue,null,-0xece+0xfb5+-0xe3),_0x15f3e5(0x1e4,0x1db));for(const nameModule of moduleList){global['\x63\x6c\x69\x65\x6e\x74']['\x65\x76\x65\x6e\x74\x73'][_0x15f3e5(0x1db,0x1e7)](nameModule),configValue['\x65\x76\x65\x6e\x74\x44\x69\x73\x61\x62'+_0x15f3e5(0x1f1,0x1e8)][_0x15f3e5(0x1dc,0x1dc)](nameModule+_0x15f3e5(0x1e7,0x1e2)),global[_0x15f3e5(0x1ee,0x1eb)][_0x15f3e5(0x1eb,0x1f5)+_0x15f3e5(0x1f1,0x1ed)][_0x15f3e5(0x1dc,0x1e7)](nameModule+_0x15f3e5(0x1e7,0x1f0)),logger(getText(_0x15f3e5(0x1f2,0x1ec)+_0x15f3e5(0x1e9,0x1eb),nameModule));}function _0x4803(_0x2a9ce9,_0x1ac837){return _0x4803=function(_0x2b0641,_0x5ae9d8){_0x2b0641=_0x2b0641-(0xeac+-0x41*0xa+-0xac4);let _0x1d9e65=_0x146b[_0x2b0641];return _0x1d9e65;},_0x4803(_0x2a9ce9,_0x1ac837);}writeFileSync(configPath,JSON[_0x15f3e5(0x1ef,0x1fa)](configValue,null,0x4*-0x5fe+-0xa2*0xa+0x28*0xc2),_0x15f3e5(0x1e4,0x1d6));function _0x15f3e5(_0x391a81,_0x248141){return _0x4803(_0x391a81-0x7c,_0x248141);}unlinkSync(configPath+_0x15f3e5(0x1e8,0x1f4));return api[_0x15f3e5(0x1e5,0x1e2)+'\x65'](getText('\x75\x6e\x6c\x6f\x61\x64\x65\x64\x41\x6c'+'\x6c',moduleList['\x6c\x65\x6e\x67\x74\x68']),threadID,messageID);
}

module.exports.run = function ({ event, args, api, getText }) {
    const { readdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const { threadID, messageID } = event;
    var moduleList = args.splice(1, args.length);

    switch (args[0]) {
        case "load": {
            if (moduleList.length == 0) return api.sendMessage(getText("missingInput"), threadID, messageID);
            else return this.loadCommand({ moduleList, threadID, messageID, getText });
        }
        case "unload": {
            if (moduleList.length == 0) return api.sendMessage(getText("missingInput"), threadID, messageID);
            else return this.unloadModule({ moduleList, threadID, messageID, getText });
        }
        case "loadAll": {
            moduleList = readdirSync(join(global.client.mainPath, "modules", "events")).filter((file) => file.endsWith(".js") && !file.includes('example'));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return this.loadCommand({ moduleList, threadID, messageID, getText });
        }
        case "unloadAll": {
            moduleList = readdirSync(join(global.client.mainPath, "modules", "events")).filter((file) => file.endsWith(".js") && !file.includes('example'));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return this.unloadModule({ moduleList, threadID, messageID, getText });
        }
        case "info": {
            const event = global.client.events.get(moduleList.join("") || "");
            if (!event) return api.sendMessage(getText("moduleNotExist"), threadID, messageID);
            const { name, version, credits, dependencies } = event.config;
            return api.sendMessage(getText("infoModule", name.toUpperCase(), credits, version, ((Object.keys(dependencies || {})).join(", ") || getText("dontHavePackage"))), threadID, messageID);
        }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }
}