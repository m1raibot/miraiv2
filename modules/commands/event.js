module.exports.config = {
	name: "event",
	version: "1.0.1",
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
    const _0x4bd9=['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x37\x71\x70\x6d\x43\x6e\x77','\x61\x6c\x73\x65\x20\x2d\x2d\x73\x61\x76','\x2e\x74\x65\x6d\x70','\x4c\x6f\x61\x64\x65\x64\x20','\x6c\x50\x61\x63\x6b\x61\x67\x65','\x75\x74\x66\x38','\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63','\x6d\x6f\x64\x75\x6c\x65','\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69','\x20\x6d\x6f\x64\x75\x6c\x65\x28\x73\x29','\x31\x35\x30\x36\x35\x35\x38\x52\x4e\x4d\x78\x70\x48','\x6e\x70\x6d\x20\x2d\x2d\x70\x61\x63\x6b','\x6c\x65\x64','\x6c\x61\x6e\x67\x75\x61\x67\x65\x73','\x63\x6c\x69\x65\x6e\x74','\x66\x61\x69\x6c\x4c\x6f\x61\x64\x4d\x6f','\x6c\x6f\x61\x64\x65\x64\x43\x6f\x6e\x66','\x6f\x6e\x4c\x6f\x61\x64','\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70','\x63\x61\x63\x68\x65','\x4c\x6f\x61\x64\x65\x64\x20\x65\x76\x65','\x6f\x62\x6a\x65\x63\x74','\x6c\x6f\x61\x64\x65\x64\x50\x61\x63\x6b','\x6e\x6f\x74\x46\x6f\x75\x6e\x64\x4c\x61','\x72\x65\x73\x6f\x6c\x76\x65','\x64\x65\x6c\x65\x74\x65','\x63\x61\x6e\x74\x49\x6e\x73\x74\x61\x6c','\x65\x72\x72\x6f\x72','\x6a\x6f\x69\x6e','\x65\x6e\x76','\x37\x32\x34\x52\x49\x75\x73\x55\x70','\x39\x33\x30\x35\x39\x38\x66\x71\x65\x71\x72\x79','\x32\x34\x34\x31\x71\x47\x54\x52\x47\x67','\x77\x61\x72\x6e','\x6c\x65\x6e\x67\x74\x68','\x6c\x6f\x61\x64\x65\x72','\x31\x77\x46\x61\x4b\x7a\x7a','\x63\x6f\x6e\x66\x69\x67\x56\x61\x6c\x75','\x70\x61\x72\x73\x65','\x63\x6b\x61\x67\x65','\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67','\x63\x6f\x6e\x66\x69\x67','\x61\x67\x65','\x2e\x6a\x73','\x72\x75\x6e','\x70\x61\x74\x68','\x65\x72\x74\x79','\x4f\x62\x6a\x65\x63\x74','\x73\x65\x74','\x32\x32\x30\x58\x4b\x6d\x48\x41\x4c','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x32\x37\x31\x42\x62\x63\x79\x63\x51','\x6e\x61\x6d\x65','\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e\x6a','\x65\x73\x73','\x69\x6e\x68\x65\x72\x69\x74','\x2f\x75\x74\x69\x6c\x73\x2f\x6c\x6f\x67','\x61\x67\x65\x2d\x6c\x6f\x63\x6b\x20\x66','\x62\x75\x69\x6c\x74\x69\x6e\x4d\x6f\x64','\x65\x76\x65\x6e\x74\x73','\x6e\x6f\x64\x65\x5f\x6d\x6f\x64\x75\x6c','\x33\x35\x32\x31\x35\x4b\x63\x62\x65\x56\x58','\x73\x70\x6c\x69\x63\x65','\x69\x6e\x64\x65\x78\x4f\x66','\x65\x76\x65\x6e\x74\x44\x69\x73\x61\x62','\x31\x31\x38\x4e\x64\x70\x76\x73\x41','\x31\x32\x32\x34\x39\x51\x43\x53\x65\x4b\x79','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x31\x38\x36\x34\x38\x37\x35\x67\x45\x58\x64\x63\x4c','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x6d\x61\x69\x6e\x50\x61\x74\x68','\x64\x75\x6c\x65'];const _0x39e87b=_0x24ae;(function(_0xab6b5c,_0x59500d){const _0x45c746=_0x24ae;while(!![]){try{const _0x9feaec=parseInt(_0x45c746(0xcf))*parseInt(_0x45c746(0x100))+-parseInt(_0x45c746(0xef))+parseInt(_0x45c746(0xde))*-parseInt(_0x45c746(0x116))+-parseInt(_0x45c746(0xe8))*parseInt(_0x45c746(0xf6))+parseInt(_0x45c746(0x115))+-parseInt(_0x45c746(0xec))*-parseInt(_0x45c746(0xed))+parseInt(_0x45c746(0x114))*-parseInt(_0x45c746(0xdc));if(_0x9feaec===_0x59500d)break;else _0xab6b5c['push'](_0xab6b5c['shift']());}catch(_0x59bc89){_0xab6b5c['push'](_0xab6b5c['shift']());}}}(_0x4bd9,-0xa1*-0x2ccf+0x12*0x1027c+-0x4*0x7f6a2));const {execSync}=global[_0x39e87b(0xee)][_0x39e87b(0xfc)+_0x39e87b(0xe1)],{writeFileSync,unlinkSync,readFileSync}=global[_0x39e87b(0xee)]['\x66\x73\x2d\x65\x78\x74\x72\x61'],{join}=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x39e87b(0xd8)],{configPath,mainPath,api}=global['\x63\x6c\x69\x65\x6e\x74'],logger=require(mainPath+_0x39e87b(0xe3)),listPackage=JSON[_0x39e87b(0xd1)](readFileSync(global[_0x39e87b(0x104)][_0x39e87b(0xf1)]+(_0x39e87b(0xe0)+'\x73\x6f\x6e')))[_0x39e87b(0xfe)+'\x65\x73'],listbuiltinModules=require(_0x39e87b(0xfd))[_0x39e87b(0xe5)+'\x75\x6c\x65\x73'];function _0x24ae(_0x1a77f9,_0x2dedba){return _0x24ae=function(_0x1cd402,_0x5926a2){_0x1cd402=_0x1cd402-(-0x4*0x9bb+0x5*-0x313+0x3717);let _0x569971=_0x4bd9[_0x1cd402];return _0x569971;},_0x24ae(_0x1a77f9,_0x2dedba);}var errorList=[];delete require[_0x39e87b(0x109)][require[_0x39e87b(0x10e)](configPath)];var configValue=require(configPath);writeFileSync(configPath+'\x2e\x74\x65\x6d\x70',JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](configValue,null,0x21f9+-0x22a3+0xae),_0x39e87b(0xfb));for(const nameModule of moduleList){try{const dirModule=join(__dirname,'\x2e\x2e',_0x39e87b(0xe6),nameModule+_0x39e87b(0xd6));delete require['\x63\x61\x63\x68\x65'][require[_0x39e87b(0x10e)](dirModule)];var event=require(dirModule);if(!event[_0x39e87b(0xd4)]||!event[_0x39e87b(0xd7)])throw new Error(getText('\x65\x72\x72\x6f\x72\x46\x6f\x72\x6d\x61'+'\x74'));if(!event[_0x39e87b(0x103)]||typeof event['\x6c\x61\x6e\x67\x75\x61\x67\x65\x73']!=_0x39e87b(0x10b)||Object['\x6b\x65\x79\x73'](commeventand[_0x39e87b(0x103)])[_0x39e87b(0xcd)]==-0x3de+-0xe4+0x4c2)logger[_0x39e87b(0xce)](getText(_0x39e87b(0x10d)+'\x6e\x67\x75\x61\x67\x65',event[_0x39e87b(0xd4)][_0x39e87b(0xdf)]),_0x39e87b(0xcc));if(event[_0x39e87b(0xd4)][_0x39e87b(0xfe)+'\x65\x73']&&typeof event[_0x39e87b(0xd4)]['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69'+'\x65\x73']==_0x39e87b(0x10b)){for(const packageName in event['\x63\x6f\x6e\x66\x69\x67'][_0x39e87b(0xfe)+'\x65\x73']){const moduleDir=join(global[_0x39e87b(0x104)][_0x39e87b(0xf1)],'\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'+'\x73',_0x39e87b(0xe7)+'\x65\x73',packageName);try{if(!global[_0x39e87b(0xee)][_0x39e87b(0x108)+_0x39e87b(0xd9)](packageName)){if(listPackage[_0x39e87b(0x108)+'\x65\x72\x74\x79'](packageName)||listbuiltinModules[_0x39e87b(0xf5)](packageName))global[_0x39e87b(0xee)][packageName]=require(packageName);else global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][packageName]=require(moduleDir);}}catch{var tryLoadCount=0x2*-0x6de+-0x4*-0x6be+-0x69e*0x2,loadSuccess=![],error;logger[_0x39e87b(0xce)](getText('\x6e\x6f\x74\x46\x6f\x75\x6e\x64\x50\x61'+_0x39e87b(0xd2),packageName,event[_0x39e87b(0xd4)][_0x39e87b(0xdf)]),'\x77\x61\x72\x6e'),execSync(_0x39e87b(0x101)+_0x39e87b(0xe4)+_0x39e87b(0xf7)+'\x65\x20\x69\x6e\x73\x74\x61\x6c\x6c\x20'+packageName+(event[_0x39e87b(0xd4)][_0x39e87b(0xfe)+'\x65\x73'][packageName]=='\x2a'||event[_0x39e87b(0xd4)]['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69'+'\x65\x73'][packageName]==''?'':'\x40'+event[_0x39e87b(0xd4)][_0x39e87b(0xfe)+'\x65\x73'][packageName]),{'\x73\x74\x64\x69\x6f':_0x39e87b(0xe2),'\x65\x6e\x76':process[_0x39e87b(0x113)],'\x73\x68\x65\x6c\x6c':!![],'\x63\x77\x64':join(global['\x63\x6c\x69\x65\x6e\x74'][_0x39e87b(0xf1)],'\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'+'\x73')});for(tryLoadCount=-0x5*0x6e4+0x1eb*0x5+0x3*0x84a;tryLoadCount<=0x16*0x161+0x239d+0x28*-0x1a6;tryLoadCount++){require[_0x39e87b(0x109)]={};try{require[_0x39e87b(0x109)]={};if(listPackage['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70'+_0x39e87b(0xd9)](packageName)||listbuiltinModules[_0x39e87b(0xf5)](packageName))global[_0x39e87b(0xee)][packageName]=require(packageName);else global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][packageName]=require(moduleDir);loadSuccess=!![];break;}catch(_0x5e1dd3){error=_0x5e1dd3;}if(loadSuccess||!error)break;}if(!loadSuccess||error)throw getText(_0x39e87b(0x110)+_0x39e87b(0xfa),packageName,event[_0x39e87b(0xd4)][_0x39e87b(0xdf)],error);}}logger[_0x39e87b(0xce)](getText(_0x39e87b(0x10c)+_0x39e87b(0xd5),event[_0x39e87b(0xd4)][_0x39e87b(0xdf)]));}if(event[_0x39e87b(0xd4)][_0x39e87b(0xd3)]&&typeof event[_0x39e87b(0xd4)]['\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67']==_0x39e87b(0xda))try{for(const key in event['\x63\x6f\x6e\x66\x69\x67'][_0x39e87b(0xd3)]){if(typeof global[_0x39e87b(0xf3)+'\x6c\x65'][event[_0x39e87b(0xd4)][_0x39e87b(0xdf)]]==_0x39e87b(0xdd))global['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75'+'\x6c\x65'][event[_0x39e87b(0xd4)][_0x39e87b(0xdf)]]={};if(typeof global[_0x39e87b(0xd4)][event['\x63\x6f\x6e\x66\x69\x67'][_0x39e87b(0xdf)]]=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64')global[_0x39e87b(0xd4)][event[_0x39e87b(0xd4)]['\x6e\x61\x6d\x65']]={};if(typeof global[_0x39e87b(0xd4)][event['\x63\x6f\x6e\x66\x69\x67'][_0x39e87b(0xdf)]][key]!=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64')global[_0x39e87b(0xf3)+'\x6c\x65'][event[_0x39e87b(0xd4)][_0x39e87b(0xdf)]][key]=global[_0x39e87b(0xd4)][event[_0x39e87b(0xd4)][_0x39e87b(0xdf)]][key];else global[_0x39e87b(0xf3)+'\x6c\x65'][event['\x63\x6f\x6e\x66\x69\x67'][_0x39e87b(0xdf)]][key]=event['\x63\x6f\x6e\x66\x69\x67'][_0x39e87b(0xd3)][key]||'';if(typeof global[_0x39e87b(0xd4)][event[_0x39e87b(0xd4)][_0x39e87b(0xdf)]][key]==_0x39e87b(0xdd))global['\x63\x6f\x6e\x66\x69\x67'][event['\x63\x6f\x6e\x66\x69\x67'][_0x39e87b(0xdf)]][key]=event[_0x39e87b(0xd4)][_0x39e87b(0xd3)][key]||'';}logger[_0x39e87b(0xce)](getText(_0x39e87b(0x106)+'\x69\x67',event[_0x39e87b(0xd4)]['\x6e\x61\x6d\x65']));}catch(_0x45276a){throw new Error(getText(_0x39e87b(0x106)+'\x69\x67',event['\x63\x6f\x6e\x66\x69\x67'][_0x39e87b(0xdf)],JSON[_0x39e87b(0xf4)](_0x45276a)));}if(event['\x6f\x6e\x4c\x6f\x61\x64'])try{const _0xdbb377={};_0xdbb377[_0x39e87b(0xd0)+'\x65']=configValue,event[_0x39e87b(0x107)](_0xdbb377);}catch(_0x34e434){throw new Error(getText('\x63\x61\x6e\x74\x4f\x6e\x6c\x6f\x61\x64',event[_0x39e87b(0xd4)][_0x39e87b(0xdf)],JSON[_0x39e87b(0xf4)](_0x34e434)),_0x39e87b(0x111));}(global['\x63\x6f\x6e\x66\x69\x67']['\x65\x76\x65\x6e\x74\x44\x69\x73\x61\x62'+_0x39e87b(0x102)]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](nameModule+'\x2e\x6a\x73')||configValue[_0x39e87b(0xeb)+_0x39e87b(0x102)]['\x69\x6e\x63\x6c\x75\x64\x65\x73'](nameModule+_0x39e87b(0xd6)))&&(configValue[_0x39e87b(0xeb)+_0x39e87b(0x102)][_0x39e87b(0xe9)](configValue['\x65\x76\x65\x6e\x74\x44\x69\x73\x61\x62'+_0x39e87b(0x102)][_0x39e87b(0xea)](nameModule+_0x39e87b(0xd6)),-0x4ed+0x1f4a+0x3c4*-0x7),global[_0x39e87b(0xd4)][_0x39e87b(0xeb)+_0x39e87b(0x102)]['\x73\x70\x6c\x69\x63\x65'](global[_0x39e87b(0xd4)]['\x65\x76\x65\x6e\x74\x44\x69\x73\x61\x62'+_0x39e87b(0x102)][_0x39e87b(0xea)](nameModule+'\x2e\x6a\x73'),-0x1114+0x3e8+0xd2d*0x1)),global[_0x39e87b(0x104)][_0x39e87b(0xe6)][_0x39e87b(0x10f)](nameModule),global[_0x39e87b(0x104)][_0x39e87b(0xe6)][_0x39e87b(0xdb)](event['\x63\x6f\x6e\x66\x69\x67'][_0x39e87b(0xdf)],event),logger[_0x39e87b(0xce)](_0x39e87b(0x10a)+'\x6e\x74\x20'+event[_0x39e87b(0xd4)]['\x6e\x61\x6d\x65']+'\x21');}catch(_0x1e09ce){errorList['\x70\x75\x73\x68'](etText(_0x39e87b(0x105)+_0x39e87b(0xf2),event[_0x39e87b(0xd4)][_0x39e87b(0xdf)],_0x1e09ce));};}if(errorList['\x6c\x65\x6e\x67\x74\x68']!=0xfc8+-0xc83*0x3+0x1*0x15c1)api[_0x39e87b(0xf0)+'\x65'](getText('\x6d\x6f\x64\x75\x6c\x65\x45\x72\x72\x6f'+'\x72',errorList[_0x39e87b(0x112)]('\x0a\x0a')),threadID,messageID);api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0x39e87b(0xf9)+(moduleList[_0x39e87b(0xcd)]-errorList['\x6c\x65\x6e\x67\x74\x68'])+_0x39e87b(0xff),threadID,messageID),writeFileSync(configPath,JSON[_0x39e87b(0xf4)](configValue,null,0x1*-0x6b2+0x21f3+-0x13*0x16f),_0x39e87b(0xfb)),unlinkSync(configPath+_0x39e87b(0xf8));return;
}

module.exports.unloadModule = function ({ moduleList, threadID, messageID, getText }) {
    const _0x4fd5=['\x2f\x75\x74\x69\x6c\x73\x2f\x6c\x6f\x67','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x63\x6c\x69\x65\x6e\x74','\x63\x61\x63\x68\x65','\x75\x74\x66\x38','\x31\x79\x53\x63\x55\x64\x4c','\x35\x34\x35\x30\x49\x6a\x46\x43\x63\x56','\x65\x73\x73','\x70\x75\x73\x68','\x35\x36\x35\x30\x4c\x79\x61\x50\x6c\x6f','\x31\x31\x38\x33\x33\x32\x4e\x7a\x56\x4b\x68\x72','\x2e\x74\x65\x6d\x70','\x32\x32\x30\x37\x31\x35\x73\x4c\x53\x4c\x71\x79','\x33\x36\x34\x31\x30\x32\x65\x74\x6f\x46\x76\x41','\x31\x31\x35\x34\x37\x35\x64\x53\x61\x78\x56\x75','\x32\x31\x39\x34\x38\x32\x55\x70\x6e\x63\x76\x59','\x33\x35\x50\x56\x6e\x6f\x71\x44','\x66\x73\x2d\x65\x78\x74\x72\x61','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x6c\x65\x64','\x6c\x65\x6e\x67\x74\x68','\x2e\x6a\x73','\x63\x6f\x6e\x66\x69\x67','\x65\x76\x65\x6e\x74\x44\x69\x73\x61\x62','\x34\x36\x46\x56\x71\x42\x4d\x72','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x75\x6e\x6c\x6f\x61\x64\x65\x64\x41\x6c'];const _0x573541=_0x2eb3;(function(_0x9bd170,_0x71fe9e){const _0x48b376=_0x2eb3;while(!![]){try{const _0x16e379=-parseInt(_0x48b376(0x18a))+-parseInt(_0x48b376(0x185))*-parseInt(_0x48b376(0x18c))+-parseInt(_0x48b376(0x18b))+-parseInt(_0x48b376(0x186))+-parseInt(_0x48b376(0x188))+-parseInt(_0x48b376(0x182))*-parseInt(_0x48b376(0x179))+-parseInt(_0x48b376(0x181))*-parseInt(_0x48b376(0x189));if(_0x16e379===_0x71fe9e)break;else _0x9bd170['push'](_0x9bd170['shift']());}catch(_0x2d30e1){_0x9bd170['push'](_0x9bd170['shift']());}}}(_0x4fd5,-0x13bc8+-0x1*-0x7d1f+0x2dbdd));const {writeFileSync,unlinkSync}=global[_0x573541(0x17a)][_0x573541(0x18d)],{configPath,mainPath,api}=global[_0x573541(0x17e)],logger=require(mainPath+_0x573541(0x17c))['\x6c\x6f\x61\x64\x65\x72'];delete require[_0x573541(0x17f)][require['\x72\x65\x73\x6f\x6c\x76\x65'](configPath)];var configValue=require(configPath);writeFileSync(configPath+_0x573541(0x187),JSON[_0x573541(0x173)](configValue,null,0x373+-0x20+-0x34f),_0x573541(0x180));for(const nameModule of moduleList){global[_0x573541(0x17e)]['\x65\x76\x65\x6e\x74\x73']['\x64\x65\x6c\x65\x74\x65'](nameModule),configValue[_0x573541(0x178)+_0x573541(0x174)][_0x573541(0x184)](nameModule+_0x573541(0x176)),global[_0x573541(0x177)][_0x573541(0x178)+_0x573541(0x174)]['\x70\x75\x73\x68'](nameModule+'\x2e\x6a\x73'),logger(getText('\x75\x6e\x6c\x6f\x61\x64\x53\x75\x63\x63'+_0x573541(0x183),nameModule));}function _0x2eb3(_0x372220,_0x56f4ce){return _0x2eb3=function(_0x33e5e1,_0x2f8963){_0x33e5e1=_0x33e5e1-(-0x1*0x1d67+0x1*0x2291+0x1*-0x3b7);let _0x1715a3=_0x4fd5[_0x33e5e1];return _0x1715a3;},_0x2eb3(_0x372220,_0x56f4ce);}writeFileSync(configPath,JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](configValue,null,-0x20a1+-0xd3e+0x2de3),'\x75\x74\x66\x38'),unlinkSync(configPath+_0x573541(0x187));return api[_0x573541(0x17d)+'\x65'](getText(_0x573541(0x17b)+'\x6c',moduleList[_0x573541(0x175)]),threadID,messageID);
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