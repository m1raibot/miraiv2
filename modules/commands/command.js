module.exports.config = {
	name: "command",
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
        "user": "Người dùng",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Quản trị viên bot",
        "dontHavePackage": "Không có",
        "infoModule": "=== %1 ===\n- Được code bởi: %2\n- Phiên bản: %3\n- Yêu cầu quyền hạn: %4\n- Thời gian chờ: %5 giây(s)\n- Các package yêu cầu: %6"
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
        "user": "User",
        "adminGroup": "Group admin",
        "adminBot": "Bot admin",
        "dontHavePackage": "None",
        "infoModule": "=== %1 ===\n- Coded by: %2\n- Version: %3\n- Permission: %4\n- Waiting time: %5(s)\n- Required package: %6"
    }
}

module.exports.loadCommand = function ({ moduleList, threadID, messageID, getText }) {
    const _0x16f8=['\x73\x65\x74','\x34\x6a\x50\x44\x6e\x77\x6e','\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69','\x75\x74\x66\x38','\x31\x31\x30\x49\x7a\x58\x6d\x72\x4a','\x77\x61\x72\x6e','\x65\x20\x69\x6e\x73\x74\x61\x6c\x6c\x20','\x31\x30\x37\x36\x36\x37\x35\x45\x59\x74\x47\x69\x42','\x66\x69\x6c\x74\x65\x72','\x37\x32\x37\x36\x36\x75\x65\x6c\x4a\x79\x5a','\x61\x67\x65','\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67','\x68\x61\x6e\x64\x6c\x65\x45\x76\x65\x6e','\x2e\x6a\x73','\x73\x75\x63\x63\x65\x73\x73\x4c\x6f\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x65\x76\x65\x6e\x74\x52\x65\x67\x69\x73','\x6c\x65\x6e\x67\x74\x68','\x63\x6c\x69\x65\x6e\x74','\x73\x6f\x6e','\x6e\x6f\x74\x46\x6f\x75\x6e\x64\x50\x61','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x72\x75\x6e','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x66\x73\x2d\x65\x78\x74\x72\x61','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x63\x61\x6e\x74\x49\x6e\x73\x74\x61\x6c','\x4c\x6f\x61\x64\x65\x64\x20','\x64\x75\x6c\x65','\x6e\x67\x75\x61\x67\x65','\x6c\x61\x6e\x67\x75\x61\x67\x65\x73','\x73\x70\x6c\x69\x63\x65','\x63\x61\x63\x68\x65','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x6d\x61\x69\x6e\x50\x61\x74\x68','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x62\x75\x69\x6c\x74\x69\x6e\x4d\x6f\x64','\x6c\x6f\x61\x64\x65\x64\x43\x6f\x6e\x66','\x38\x30\x30\x39\x77\x69\x64\x63\x62\x55','\x2f\x75\x74\x69\x6c\x73\x2f\x6c\x6f\x67','\x6c\x50\x61\x63\x6b\x61\x67\x65','\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70','\x6f\x62\x6a\x65\x63\x74','\x32\x35\x37\x30\x77\x52\x55\x46\x47\x47','\x6d\x6f\x64\x75\x6c\x65\x45\x72\x72\x6f','\x65\x72\x72\x6f\x72','\x72\x65\x73\x6f\x6c\x76\x65','\x6b\x65\x79\x73','\x65\x73\x73','\x32\x31\x39\x32\x31\x38\x4b\x68\x49\x6f\x4e\x45','\x31\x69\x73\x4a\x75\x72\x69','\x63\x61\x6e\x74\x4f\x6e\x6c\x6f\x61\x64','\x4f\x62\x6a\x65\x63\x74','\x63\x6f\x6e\x66\x69\x67','\x70\x75\x73\x68','\x61\x62\x6c\x65\x64','\x74\x65\x72\x65\x64','\x32\x31\x36\x34\x39\x53\x4d\x54\x46\x42\x6d','\x31\x77\x64\x48\x64\x58\x76','\x63\x6f\x6d\x6d\x61\x6e\x64\x73','\x2e\x74\x65\x6d\x70','\x63\x6f\x6d\x6d\x61\x6e\x64\x43\x61\x74','\x33\x31\x37\x30\x32\x36\x79\x53\x42\x45\x7a\x4f','\x31\x69\x4b\x64\x69\x78\x77','\x63\x6f\x6d\x6d\x61\x6e\x64\x44\x69\x73','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x61\x6c\x73\x65\x20\x2d\x2d\x73\x61\x76','\x6e\x6f\x64\x65\x5f\x6d\x6f\x64\x75\x6c','\x65\x72\x72\x6f\x72\x46\x6f\x72\x6d\x61','\x6d\x6f\x64\x75\x6c\x65','\x70\x61\x74\x68','\x6e\x6f\x74\x46\x6f\x75\x6e\x64\x4c\x61','\x35\x30\x45\x52\x52\x53\x45\x6d','\x6e\x61\x6d\x65','\x65\x67\x6f\x72\x79','\x6c\x6f\x61\x64\x65\x72','\x6f\x6e\x4c\x6f\x61\x64','\x63\x6b\x61\x67\x65','\x61\x70\x69'];(function(_0x59900c,_0x2c13b3){function _0x24660e(_0x4f04ad,_0x87b9bf){return _0x5732(_0x4f04ad- -0x3df,_0x87b9bf);}while(!![]){try{const _0x2e2176=parseInt(_0x24660e(-0x2fc,-0x309))*-parseInt(_0x24660e(-0x304,-0x2e4))+-parseInt(_0x24660e(-0x301,-0x30e))*parseInt(_0x24660e(-0x329,-0x305))+parseInt(_0x24660e(-0x32e,-0x31f))*-parseInt(_0x24660e(-0x30c,-0x2fd))+parseInt(_0x24660e(-0x322,-0x32e))*-parseInt(_0x24660e(-0x323,-0x321))+parseInt(_0x24660e(-0x31b,-0x32e))*parseInt(_0x24660e(-0x31a,-0x2f5))+parseInt(_0x24660e(-0x316,-0x326))+-parseInt(_0x24660e(-0x2fe,-0x2ee))*-parseInt(_0x24660e(-0x315,-0x304));if(_0x2e2176===_0x2c13b3)break;else _0x59900c['push'](_0x59900c['shift']());}catch(_0x28f017){_0x59900c['push'](_0x59900c['shift']());}}}(_0x16f8,-0x8*-0x22d8+0x2*-0x1db4b+0x602b4));const {execSync}=global[_0x5caff7(-0x80,-0x69)]['\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63'+_0x5caff7(-0x91,-0x82)],{writeFileSync,unlinkSync,readFileSync}=global[_0x5caff7(-0x80,-0x67)][_0x5caff7(-0x5a,-0x80)],{join}=global[_0x5caff7(-0x80,-0xa0)][_0x5caff7(-0x7b,-0x72)],{configPath,mainPath,api}=global['\x63\x6c\x69\x65\x6e\x74'];function _0x5caff7(_0x7b2042,_0x147117){return _0x5732(_0x7b2042- -0x14c,_0x147117);}const logger=require(mainPath+_0x5caff7(-0x9a,-0x8e)),listPackage=JSON['\x70\x61\x72\x73\x65'](readFileSync(global[_0x5caff7(-0x60,-0x4d)]['\x6d\x61\x69\x6e\x50\x61\x74\x68']+('\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e\x6a'+_0x5caff7(-0x5f,-0x86))))[_0x5caff7(-0x70,-0x64)+'\x65\x73'],listbuiltinModules=require(_0x5caff7(-0x7c,-0x72))[_0x5caff7(-0x9d,-0x8a)+'\x75\x6c\x65\x73'];var errorList=[];delete require[_0x5caff7(-0xa1,-0x93)][require[_0x5caff7(-0x93,-0x9c)](configPath)];function _0x5732(_0x574674,_0x17449a){return _0x5732=function(_0x42d8e9,_0x5c4f17){_0x42d8e9=_0x42d8e9-(0x10c2+0x7a7*0x5+-0x365f);let _0x57679e=_0x16f8[_0x42d8e9];return _0x57679e;},_0x5732(_0x574674,_0x17449a);}var configValue=require(configPath);writeFileSync(configPath+_0x5caff7(-0x85,-0x98),JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](configValue,null,-0x341*-0xa+-0x27*-0xc5+-0x1*0x3e89),'\x75\x74\x66\x38');for(const nameModule of moduleList){try{const dirModule=__dirname+'\x2f'+nameModule+'\x2e\x6a\x73';delete require[_0x5caff7(-0xa1,-0xbb)][require[_0x5caff7(-0x93,-0x86)](dirModule)];var command=require(dirModule);if(!command[_0x5caff7(-0x8c,-0x81)]||!command[_0x5caff7(-0x5c,-0x3b)]||!command[_0x5caff7(-0x8c,-0x69)][_0x5caff7(-0x84,-0x6e)+_0x5caff7(-0x77,-0x5d)])throw new Error(getText(_0x5caff7(-0x7d,-0x96)+'\x74'));if(!command[_0x5caff7(-0xa3,-0x81)]||typeof command['\x6c\x61\x6e\x67\x75\x61\x67\x65\x73']!=_0x5caff7(-0x97,-0xb7)||Object[_0x5caff7(-0x92,-0x89)](command['\x6c\x61\x6e\x67\x75\x61\x67\x65\x73'])[_0x5caff7(-0x61,-0x48)]==0x1*0x293+0x223f+-0x24d2)logger['\x6c\x6f\x61\x64\x65\x72'](getText(_0x5caff7(-0x7a,-0x66)+_0x5caff7(-0xa4,-0xaf),command[_0x5caff7(-0x8c,-0x6d)][_0x5caff7(-0x78,-0x6c)]),'\x77\x61\x72\x6e');global['\x63\x6c\x69\x65\x6e\x74']['\x65\x76\x65\x6e\x74\x52\x65\x67\x69\x73'+'\x74\x65\x72\x65\x64']=global[_0x5caff7(-0x60,-0x45)][_0x5caff7(-0x62,-0x56)+'\x74\x65\x72\x65\x64'][_0x5caff7(-0x6a,-0x4f)](_0x321f6f=>_0x321f6f!=command[_0x5caff7(-0x8c,-0x79)]['\x6e\x61\x6d\x65']);if(command[_0x5caff7(-0x8c,-0x76)][_0x5caff7(-0x70,-0x74)+'\x65\x73']&&typeof command[_0x5caff7(-0x8c,-0x7f)][_0x5caff7(-0x70,-0x93)+'\x65\x73']==_0x5caff7(-0x97,-0xae)){for(const packageName in command[_0x5caff7(-0x8c,-0xae)][_0x5caff7(-0x70,-0x78)+'\x65\x73']){const moduleDir=join(global[_0x5caff7(-0x60,-0x67)][_0x5caff7(-0x9f,-0x90)],_0x5caff7(-0x80,-0x87)+'\x73',_0x5caff7(-0x7e,-0x78)+'\x65\x73',packageName);try{if(!global[_0x5caff7(-0x80,-0x82)]['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70'+'\x65\x72\x74\x79'](packageName)){if(listPackage['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70'+'\x65\x72\x74\x79'](packageName)||listbuiltinModules['\x69\x6e\x63\x6c\x75\x64\x65\x73'](packageName))global[_0x5caff7(-0x80,-0x96)][packageName]=require(packageName);else global[_0x5caff7(-0x80,-0xa3)][packageName]=require(moduleDir);}}catch{var tryLoadCount=0xdf*0x1+0x2638+0x1*-0x2717,loadSuccess=![],error;logger['\x6c\x6f\x61\x64\x65\x72'](getText(_0x5caff7(-0x5e,-0x4f)+_0x5caff7(-0x74,-0x6d),packageName,command[_0x5caff7(-0x8c,-0xb2)][_0x5caff7(-0x78,-0x5b)]),_0x5caff7(-0x6d,-0x57)),execSync('\x6e\x70\x6d\x20\x2d\x2d\x70\x61\x63\x6b'+'\x61\x67\x65\x2d\x6c\x6f\x63\x6b\x20\x66'+_0x5caff7(-0x7f,-0xa4)+_0x5caff7(-0x6c,-0x5c)+packageName+(command['\x63\x6f\x6e\x66\x69\x67'][_0x5caff7(-0x70,-0x4b)+'\x65\x73'][packageName]=='\x2a'||command[_0x5caff7(-0x8c,-0xae)][_0x5caff7(-0x70,-0x77)+'\x65\x73'][packageName]==''?'':'\x40'+command[_0x5caff7(-0x8c,-0x9c)][_0x5caff7(-0x70,-0x4d)+'\x65\x73'][packageName]),{'\x73\x74\x64\x69\x6f':'\x69\x6e\x68\x65\x72\x69\x74','\x65\x6e\x76':process['\x65\x6e\x76'],'\x73\x68\x65\x6c\x6c':!![],'\x63\x77\x64':join(global[_0x5caff7(-0x60,-0x76)]['\x6d\x61\x69\x6e\x50\x61\x74\x68'],_0x5caff7(-0x80,-0xa1)+'\x73')});for(tryLoadCount=-0x2309*-0x1+-0x8*-0x4b7+0x8*-0x918;tryLoadCount<=-0xe6d+-0x3f1*0x6+-0xa*-0x3cf;tryLoadCount++){try{require[_0x5caff7(-0xa1,-0x8a)]={};if(listPackage[_0x5caff7(-0x98,-0x82)+'\x65\x72\x74\x79'](packageName)||listbuiltinModules['\x69\x6e\x63\x6c\x75\x64\x65\x73'](packageName))global[_0x5caff7(-0x80,-0x70)][packageName]=require(packageName);else global[_0x5caff7(-0x80,-0x71)][packageName]=require(moduleDir);loadSuccess=!![];break;}catch(_0x1da637){error=_0x1da637;}if(loadSuccess||!error)break;}if(!loadSuccess||error)throw getText(_0x5caff7(-0x58,-0x7c)+_0x5caff7(-0x99,-0x72),packageName,command[_0x5caff7(-0x8c,-0x8d)]['\x6e\x61\x6d\x65'],error);}}logger[_0x5caff7(-0x76,-0x94)](getText('\x6c\x6f\x61\x64\x65\x64\x50\x61\x63\x6b'+_0x5caff7(-0x68,-0x5d),command[_0x5caff7(-0x8c,-0xac)][_0x5caff7(-0x78,-0x86)]));}if(command[_0x5caff7(-0x8c,-0xa7)][_0x5caff7(-0x67,-0x77)]&&typeof command['\x63\x6f\x6e\x66\x69\x67'][_0x5caff7(-0x67,-0x54)]==_0x5caff7(-0x8d,-0x6f))try{for(const key in command[_0x5caff7(-0x8c,-0x9b)][_0x5caff7(-0x67,-0x4a)]){if(typeof global[_0x5caff7(-0xa0,-0x82)+'\x6c\x65'][command['\x63\x6f\x6e\x66\x69\x67'][_0x5caff7(-0x78,-0x92)]]==_0x5caff7(-0x5b,-0x4d))global[_0x5caff7(-0xa0,-0xa5)+'\x6c\x65'][command[_0x5caff7(-0x8c,-0x78)][_0x5caff7(-0x78,-0x69)]]={};if(typeof global[_0x5caff7(-0x8c,-0x97)][command[_0x5caff7(-0x8c,-0xb1)]['\x6e\x61\x6d\x65']]==_0x5caff7(-0x5b,-0x4c))global[_0x5caff7(-0x8c,-0x84)][command['\x63\x6f\x6e\x66\x69\x67'][_0x5caff7(-0x78,-0x5c)]]={};if(typeof global[_0x5caff7(-0x8c,-0x9c)][command[_0x5caff7(-0x8c,-0x8a)][_0x5caff7(-0x78,-0x90)]][key]!=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64')global[_0x5caff7(-0xa0,-0xa5)+'\x6c\x65'][command['\x63\x6f\x6e\x66\x69\x67'][_0x5caff7(-0x78,-0x79)]][key]=global[_0x5caff7(-0x8c,-0x97)][command['\x63\x6f\x6e\x66\x69\x67'][_0x5caff7(-0x78,-0x7b)]][key];else global[_0x5caff7(-0xa0,-0x85)+'\x6c\x65'][command[_0x5caff7(-0x8c,-0x6f)]['\x6e\x61\x6d\x65']][key]=command[_0x5caff7(-0x8c,-0x8c)]['\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67'][key]||'';if(typeof global[_0x5caff7(-0x8c,-0xb2)][command['\x63\x6f\x6e\x66\x69\x67'][_0x5caff7(-0x78,-0x75)]][key]=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64')global[_0x5caff7(-0x8c,-0xb1)][command[_0x5caff7(-0x8c,-0x7c)][_0x5caff7(-0x78,-0x85)]][key]=command['\x63\x6f\x6e\x66\x69\x67'][_0x5caff7(-0x67,-0x89)][key]||'';}logger[_0x5caff7(-0x76,-0x62)](getText(_0x5caff7(-0x9c,-0x7f)+'\x69\x67',command[_0x5caff7(-0x8c,-0xa0)][_0x5caff7(-0x78,-0x86)]));}catch(_0xfe37cc){throw new Error(getText(_0x5caff7(-0x9c,-0x8f)+'\x69\x67',command['\x63\x6f\x6e\x66\x69\x67'][_0x5caff7(-0x78,-0x88)],JSON[_0x5caff7(-0x5d,-0x50)](_0xfe37cc)));}if(command[_0x5caff7(-0x75,-0x56)])try{const _0x2563d6={};_0x2563d6[_0x5caff7(-0x73,-0x4f)]=api,command[_0x5caff7(-0x75,-0x99)](_0x2563d6);}catch(_0x51eb1d){throw new Error(getText(_0x5caff7(-0x8e,-0x9d),command[_0x5caff7(-0x8c,-0xab)][_0x5caff7(-0x78,-0x6e)],JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x51eb1d)),_0x5caff7(-0x94,-0x73));}if(command[_0x5caff7(-0x66,-0x54)+'\x74'])global[_0x5caff7(-0x60,-0x7a)][_0x5caff7(-0x62,-0x70)+_0x5caff7(-0x89,-0x7e)]['\x70\x75\x73\x68'](command[_0x5caff7(-0x8c,-0x75)][_0x5caff7(-0x78,-0x6d)]);(global[_0x5caff7(-0x8c,-0x9a)][_0x5caff7(-0x81,-0x99)+'\x61\x62\x6c\x65\x64']['\x69\x6e\x63\x6c\x75\x64\x65\x73'](nameModule+_0x5caff7(-0x65,-0x57))||configValue[_0x5caff7(-0x81,-0x65)+_0x5caff7(-0x8a,-0x6f)][_0x5caff7(-0x9e,-0x8b)](nameModule+_0x5caff7(-0x65,-0x5f)))&&(configValue[_0x5caff7(-0x81,-0x9c)+_0x5caff7(-0x8a,-0xa9)][_0x5caff7(-0xa2,-0x9f)](configValue[_0x5caff7(-0x81,-0x73)+_0x5caff7(-0x8a,-0x9c)]['\x69\x6e\x64\x65\x78\x4f\x66'](nameModule+_0x5caff7(-0x65,-0x64)),0x786+-0xe8*0x8+-0x45*0x1),global[_0x5caff7(-0x8c,-0x89)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x44\x69\x73'+_0x5caff7(-0x8a,-0x98)][_0x5caff7(-0xa2,-0xa2)](global[_0x5caff7(-0x8c,-0x6b)][_0x5caff7(-0x81,-0x9d)+_0x5caff7(-0x8a,-0x9c)][_0x5caff7(-0x63,-0x70)](nameModule+_0x5caff7(-0x65,-0x70)),-0x23c3+-0x1b8f+0x22f*0x1d)),global['\x63\x6c\x69\x65\x6e\x74']['\x63\x6f\x6d\x6d\x61\x6e\x64\x73']['\x64\x65\x6c\x65\x74\x65'](nameModule),global[_0x5caff7(-0x60,-0x4c)][_0x5caff7(-0x86,-0x9b)][_0x5caff7(-0x72,-0x4c)](command[_0x5caff7(-0x8c,-0x6f)]['\x6e\x61\x6d\x65'],command),logger[_0x5caff7(-0x76,-0x8b)](getText(_0x5caff7(-0x64,-0x65)+'\x64\x4d\x6f\x64\x75\x6c\x65',command[_0x5caff7(-0x8c,-0xb0)][_0x5caff7(-0x78,-0x8c)]));}catch(_0x580583){errorList[_0x5caff7(-0x8b,-0xa6)](getText('\x66\x61\x69\x6c\x4c\x6f\x61\x64\x4d\x6f'+_0x5caff7(-0xa5,-0x9d),command['\x63\x6f\x6e\x66\x69\x67'][_0x5caff7(-0x78,-0x74)],_0x580583));};}if(errorList['\x6c\x65\x6e\x67\x74\x68']!=-0x108c+-0x68b*-0x5+-0x102b)api[_0x5caff7(-0x59,-0x66)+'\x65'](getText(_0x5caff7(-0x95,-0x73)+'\x72',errorList['\x6a\x6f\x69\x6e']('\x0a\x0a')),threadID,messageID);else api[_0x5caff7(-0x59,-0x65)+'\x65'](_0x5caff7(-0xa6,-0x90)+(moduleList[_0x5caff7(-0x61,-0x6e)]-errorList[_0x5caff7(-0x61,-0x53)])+'\x20\x6d\x6f\x64\x75\x6c\x65\x28\x73\x29',threadID,messageID);writeFileSync(configPath,JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](configValue,null,-0x846+-0x82f+-0x1*-0x1079),_0x5caff7(-0x6f,-0x92)),unlinkSync(configPath+_0x5caff7(-0x85,-0x6f));return;
}

module.exports.unloadModule = function ({ moduleList, threadID, messageID, getText }) {
   const _0x329c=['\x2e\x6a\x73','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x2e\x74\x65\x6d\x70','\x75\x6e\x6c\x6f\x61\x64\x53\x75\x63\x63','\x65\x76\x65\x6e\x74\x52\x65\x67\x69\x73','\x2f\x75\x74\x69\x6c\x73\x2f\x6c\x6f\x67','\x31\x45\x51\x73\x6f\x57\x56','\x75\x74\x66\x38','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x37\x33\x30\x30\x36\x4c\x6f\x75\x52\x6b\x75','\x33\x4a\x41\x6e\x6f\x63\x49','\x31\x30\x36\x32\x31\x36\x4e\x52\x5a\x41\x65\x50','\x63\x6c\x69\x65\x6e\x74','\x61\x62\x6c\x65\x64','\x35\x69\x6b\x45\x62\x53\x41','\x34\x46\x65\x48\x71\x41\x4a','\x34\x30\x35\x37\x31\x6b\x4a\x4f\x48\x6a\x44','\x74\x65\x72\x65\x64','\x63\x6f\x6d\x6d\x61\x6e\x64\x73','\x72\x65\x73\x6f\x6c\x76\x65','\x31\x31\x34\x37\x33\x34\x4d\x66\x43\x55\x65\x76','\x37\x37\x35\x31\x30\x32\x42\x4f\x73\x6e\x4b\x6b','\x66\x73\x2d\x65\x78\x74\x72\x61','\x75\x6e\x6c\x6f\x61\x64\x65\x64\x41\x6c','\x31\x32\x32\x32\x36\x55\x65\x6b\x59\x53\x4a','\x70\x75\x73\x68','\x31\x30\x31\x30\x34\x37\x52\x4c\x6f\x7a\x4d\x63','\x6c\x6f\x61\x64\x65\x72','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x63\x6f\x6d\x6d\x61\x6e\x64\x44\x69\x73'];function _0x51e4(_0xdc780d,_0xd0bdd6){return _0x51e4=function(_0x281eed,_0xe6c174){_0x281eed=_0x281eed-(0x91*-0xd+-0x174c+0x19*0x143);let _0x1a5f43=_0x329c[_0x281eed];return _0x1a5f43;},_0x51e4(_0xdc780d,_0xd0bdd6);}(function(_0x10d8be,_0x496559){function _0x482c28(_0x4f8208,_0x55c666){return _0x51e4(_0x55c666-0x1df,_0x4f8208);}while(!![]){try{const _0x163e64=-parseInt(_0x482c28(0x2d2,0x2cf))*-parseInt(_0x482c28(0x2cd,0x2cc))+parseInt(_0x482c28(0x2d9,0x2d5))*parseInt(_0x482c28(0x2e6,0x2de))+-parseInt(_0x482c28(0x2d8,0x2da))*-parseInt(_0x482c28(0x2c1,0x2d0))+parseInt(_0x482c28(0x2d0,0x2d4))*parseInt(_0x482c28(0x2c0,0x2c2))+-parseInt(_0x482c28(0x2cd,0x2d6))+parseInt(_0x482c28(0x2cb,0x2d1))+-parseInt(_0x482c28(0x2de,0x2db));if(_0x163e64===_0x496559)break;else _0x10d8be['push'](_0x10d8be['shift']());}catch(_0x53ce19){_0x10d8be['push'](_0x10d8be['shift']());}}}(_0x329c,-0x3646f*-0x1+-0x2afb*0x29+0x77cc6));const {writeFileSync,unlinkSync}=global[_0x338e29(-0x112,-0x11c)][_0x338e29(-0x104,-0xff)],{configPath,mainPath,api}=global[_0x338e29(-0x10e,-0x111)],logger=require(mainPath+_0x338e29(-0x115,-0x10e))[_0x338e29(-0x11d,-0x117)];delete require['\x63\x61\x63\x68\x65'][require[_0x338e29(-0x107,-0xff)](configPath)];var configValue=require(configPath);writeFileSync(configPath+'\x2e\x74\x65\x6d\x70',JSON[_0x338e29(-0x119,-0x110)](configValue,null,-0x1b41*0x1+-0x1177*0x1+0x2cbc),'\x75\x74\x66\x38');for(const nameModule of moduleList){global[_0x338e29(-0x10e,-0x116)][_0x338e29(-0x108,-0x107)]['\x64\x65\x6c\x65\x74\x65'](nameModule),global[_0x338e29(-0x10e,-0x115)][_0x338e29(-0x116,-0x112)+_0x338e29(-0x109,-0x104)]=global['\x63\x6c\x69\x65\x6e\x74'][_0x338e29(-0x116,-0x123)+'\x74\x65\x72\x65\x64']['\x66\x69\x6c\x74\x65\x72'](_0x3789ab=>_0x3789ab!==nameModule),configValue['\x63\x6f\x6d\x6d\x61\x6e\x64\x44\x69\x73'+_0x338e29(-0x10d,-0x10c)][_0x338e29(-0x11f,-0x12a)](nameModule+_0x338e29(-0x11a,-0x118)),global['\x63\x6f\x6e\x66\x69\x67'][_0x338e29(-0x11b,-0x11c)+_0x338e29(-0x10d,-0x103)]['\x70\x75\x73\x68'](nameModule+_0x338e29(-0x11a,-0x10c)),logger(getText(_0x338e29(-0x117,-0x11b)+'\x65\x73\x73',nameModule));}writeFileSync(configPath,JSON[_0x338e29(-0x119,-0x11c)](configValue,null,-0x1073*-0x2+0x1*-0x203e+-0xa4),_0x338e29(-0x113,-0x112)),unlinkSync(configPath+_0x338e29(-0x118,-0x117));function _0x338e29(_0x5823c9,_0x4c532a){return _0x51e4(_0x5823c9- -0x201,_0x4c532a);}return api[_0x338e29(-0x11c,-0x127)+'\x65'](getText(_0x338e29(-0x103,-0x112)+'\x6c',moduleList['\x6c\x65\x6e\x67\x74\x68']),threadID,messageID);
}

module.exports.run = function ({ event, args, api, getText }) {
    const { readdirSync } = global.nodemodule["fs-extra"];
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
            moduleList = readdirSync(__dirname).filter((file) => file.endsWith(".js") && !file.includes('example'));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return this.loadCommand({ moduleList, threadID, messageID, getText });
        }
        case "unloadAll": {
            moduleList = readdirSync(__dirname).filter((file) => file.endsWith(".js") && !file.includes('example') && !file.includes("command"));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return this.unloadModule({ moduleList, threadID, messageID, getText });
        }
        case "info": {
            const command = global.client.commands.get(moduleList.join("") || "");
            if (!command) return api.sendMessage(getText("moduleNotExist"), threadID, messageID);
            const { name, version, hasPermssion, credits, cooldowns, dependencies } = command.config;
            return api.sendMessage(getText("infoModule", name.toUpperCase(), credits, version, ((hasPermssion == 0) ? getText("user") : (hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), cooldowns, ((Object.keys(dependencies || {})).join(", ") || getText("dontHavePackage"))), threadID, messageID);
        }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }
}