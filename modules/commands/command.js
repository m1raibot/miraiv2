module.exports.config = {
	name: "command",
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
    const _0x5967=['\x2e\x6a\x73','\x73\x70\x6c\x69\x63\x65','\x75\x74\x66\x38','\x69\x6e\x68\x65\x72\x69\x74','\x63\x61\x6e\x74\x4f\x6e\x6c\x6f\x61\x64','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x63\x6f\x6e\x66\x69\x67','\x6e\x70\x6d\x20\x2d\x2d\x70\x61\x63\x6b','\x31\x33\x39\x30\x39\x34\x73\x64\x6c\x69\x43\x5a','\x2e\x74\x65\x6d\x70','\x31\x39\x31\x33\x53\x66\x69\x4e\x4e\x64','\x6e\x67\x75\x61\x67\x65','\x6e\x61\x6d\x65','\x6f\x62\x6a\x65\x63\x74','\x65\x72\x74\x79','\x70\x61\x72\x73\x65','\x32\x37\x38\x35\x39\x34\x6a\x67\x42\x78\x53\x46','\x6e\x6f\x64\x65\x5f\x6d\x6f\x64\x75\x6c','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x65\x76\x65\x6e\x74\x52\x65\x67\x69\x73','\x31\x46\x48\x73\x55\x41\x4e','\x77\x61\x72\x6e','\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69','\x63\x6f\x6e\x66\x69\x67\x56\x61\x6c\x75','\x2f\x75\x74\x69\x6c\x73\x2f\x6c\x6f\x67','\x6c\x6f\x61\x64\x65\x72','\x6c\x61\x6e\x67\x75\x61\x67\x65\x73','\x6e\x6f\x74\x46\x6f\x75\x6e\x64\x50\x61','\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63','\x37\x66\x78\x77\x4a\x74\x54','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x62\x75\x69\x6c\x74\x69\x6e\x4d\x6f\x64','\x61\x67\x65','\x64\x4d\x6f\x64\x75\x6c\x65','\x31\x34\x38\x36\x4a\x6c\x79\x52\x6c\x7a','\x69\x6e\x64\x65\x78\x4f\x66','\x64\x75\x6c\x65','\x61\x62\x6c\x65\x64','\x66\x69\x6c\x74\x65\x72','\x6d\x6f\x64\x75\x6c\x65','\x65\x72\x72\x6f\x72\x46\x6f\x72\x6d\x61','\x31\x36\x35\x33\x68\x53\x4b\x76\x74\x58','\x74\x65\x72\x65\x64','\x61\x6c\x73\x65\x20\x2d\x2d\x73\x61\x76','\x32\x6c\x51\x46\x66\x4a\x73','\x6c\x6f\x61\x64\x65\x64\x43\x6f\x6e\x66','\x65\x72\x72\x6f\x72','\x4f\x62\x6a\x65\x63\x74','\x66\x61\x69\x6c\x4c\x6f\x61\x64\x4d\x6f','\x63\x6f\x6d\x6d\x61\x6e\x64\x73','\x38\x34\x37\x33\x39\x6d\x75\x48\x78\x4c\x4f','\x36\x31\x37\x38\x77\x6a\x49\x58\x74\x77','\x6d\x6f\x64\x75\x6c\x65\x45\x72\x72\x6f','\x63\x6b\x61\x67\x65','\x73\x65\x74','\x20\x6d\x6f\x64\x75\x6c\x65\x28\x73\x29','\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70','\x32\x33\x34\x72\x71\x66\x54\x71\x78','\x64\x65\x6c\x65\x74\x65','\x6d\x61\x69\x6e\x50\x61\x74\x68','\x65\x73\x73','\x6e\x6f\x74\x46\x6f\x75\x6e\x64\x4c\x61','\x63\x6f\x6d\x6d\x61\x6e\x64\x44\x69\x73','\x73\x75\x63\x63\x65\x73\x73\x4c\x6f\x61','\x66\x73\x2d\x65\x78\x74\x72\x61','\x63\x61\x63\x68\x65','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x72\x75\x6e','\x65\x67\x6f\x72\x79','\x6c\x6f\x61\x64\x65\x64\x50\x61\x63\x6b','\x65\x6e\x76','\x31\x30\x37\x4a\x61\x78\x44\x6f\x78','\x6c\x65\x6e\x67\x74\x68','\x63\x6c\x69\x65\x6e\x74','\x6f\x6e\x4c\x6f\x61\x64','\x61\x67\x65\x2d\x6c\x6f\x63\x6b\x20\x66','\x35\x31\x42\x59\x4e\x52\x4a\x70','\x70\x61\x74\x68','\x65\x20\x69\x6e\x73\x74\x61\x6c\x6c\x20','\x70\x75\x73\x68'];const _0x39a094=_0x1600;function _0x1600(_0x3a0868,_0x5d025e){return _0x1600=function(_0x33ffa0,_0x4545e8){_0x33ffa0=_0x33ffa0-(-0x1f9d*-0x1+-0x14e6+-0x90f);let _0x2c0163=_0x5967[_0x33ffa0];return _0x2c0163;},_0x1600(_0x3a0868,_0x5d025e);}(function(_0x4402f1,_0x52f449){const _0x515b7d=_0x1600;while(!![]){try{const _0x42fe75=-parseInt(_0x515b7d(0x1d4))*-parseInt(_0x515b7d(0x1f5))+-parseInt(_0x515b7d(0x1d0))+-parseInt(_0x515b7d(0x1c8))*-parseInt(_0x515b7d(0x1ef))+-parseInt(_0x515b7d(0x1b7))*parseInt(_0x515b7d(0x1e5))+parseInt(_0x515b7d(0x1ca))*-parseInt(_0x515b7d(0x1bc))+parseInt(_0x515b7d(0x1f6))*-parseInt(_0x515b7d(0x1e0))+parseInt(_0x515b7d(0x1ec))*parseInt(_0x515b7d(0x1a9));if(_0x42fe75===_0x52f449)break;else _0x4402f1['push'](_0x4402f1['shift']());}catch(_0x3022d9){_0x4402f1['push'](_0x4402f1['shift']());}}}(_0x5967,0x2ec2+-0x4*0xe9c5+0x6158e));const {execSync}=global[_0x39a094(0x1d2)][_0x39a094(0x1df)+_0x39a094(0x1ac)],{writeFileSync,unlinkSync,readFileSync}=global[_0x39a094(0x1d2)][_0x39a094(0x1b0)],{join}=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x39a094(0x1bd)],{configPath,mainPath,api}=global['\x63\x6c\x69\x65\x6e\x74'],logger=require(mainPath+_0x39a094(0x1d8)),listPackage=JSON[_0x39a094(0x1cf)](readFileSync(global['\x63\x6c\x69\x65\x6e\x74'][_0x39a094(0x1ab)]+('\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e\x6a'+'\x73\x6f\x6e')))[_0x39a094(0x1d6)+'\x65\x73'],listbuiltinModules=require(_0x39a094(0x1ea))[_0x39a094(0x1e2)+'\x75\x6c\x65\x73'];var errorList=[];delete require[_0x39a094(0x1b1)][require['\x72\x65\x73\x6f\x6c\x76\x65'](configPath)];var configValue=require(configPath);writeFileSync(configPath+_0x39a094(0x1c9),JSON[_0x39a094(0x1dd)](configValue,null,-0x305+0xc72+-0x969),_0x39a094(0x1c2));for(const nameModule of moduleList){try{const dirModule=__dirname+'\x2f'+nameModule+_0x39a094(0x1c0);delete require[_0x39a094(0x1b1)][require['\x72\x65\x73\x6f\x6c\x76\x65'](dirModule)];var command=require(dirModule);if(!command[_0x39a094(0x1c6)]||!command[_0x39a094(0x1b3)]||!command['\x63\x6f\x6e\x66\x69\x67']['\x63\x6f\x6d\x6d\x61\x6e\x64\x43\x61\x74'+_0x39a094(0x1b4)])throw new Error(getText(_0x39a094(0x1eb)+'\x74'));if(!command[_0x39a094(0x1da)]||typeof command['\x6c\x61\x6e\x67\x75\x61\x67\x65\x73']!=_0x39a094(0x1cd)||Object['\x6b\x65\x79\x73'](command[_0x39a094(0x1da)])[_0x39a094(0x1b8)]==-0x7b*-0x3d+-0x1*-0x322+-0x2071)logger[_0x39a094(0x1d9)](getText(_0x39a094(0x1ad)+_0x39a094(0x1cb),command['\x63\x6f\x6e\x66\x69\x67'][_0x39a094(0x1cc)]),_0x39a094(0x1d5));global[_0x39a094(0x1b9)][_0x39a094(0x1d3)+_0x39a094(0x1ed)]=global[_0x39a094(0x1b9)][_0x39a094(0x1d3)+_0x39a094(0x1ed)][_0x39a094(0x1e9)](_0x13136d=>_0x13136d!=command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]);if(command[_0x39a094(0x1c6)][_0x39a094(0x1d6)+'\x65\x73']&&typeof command[_0x39a094(0x1c6)]['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69'+'\x65\x73']=='\x6f\x62\x6a\x65\x63\x74'){for(const packageName in command[_0x39a094(0x1c6)][_0x39a094(0x1d6)+'\x65\x73']){const moduleDir=join(global[_0x39a094(0x1b9)][_0x39a094(0x1ab)],'\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'+'\x73',_0x39a094(0x1d1)+'\x65\x73',packageName);try{if(!global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65']['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70'+'\x65\x72\x74\x79'](packageName)){if(listPackage[_0x39a094(0x1a8)+_0x39a094(0x1ce)](packageName)||listbuiltinModules[_0x39a094(0x1de)](packageName))global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][packageName]=require(packageName);else global[_0x39a094(0x1d2)][packageName]=require(moduleDir);}}catch{var tryLoadCount=0x2271+0x3*-0x981+-0x3*0x1fa,loadSuccess=![],error;logger[_0x39a094(0x1d9)](getText(_0x39a094(0x1db)+_0x39a094(0x1f8),packageName,command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]),_0x39a094(0x1d5)),execSync(_0x39a094(0x1c7)+_0x39a094(0x1bb)+_0x39a094(0x1ee)+_0x39a094(0x1be)+packageName+(command['\x63\x6f\x6e\x66\x69\x67'][_0x39a094(0x1d6)+'\x65\x73'][packageName]=='\x2a'||command[_0x39a094(0x1c6)][_0x39a094(0x1d6)+'\x65\x73'][packageName]==''?'':'\x40'+command[_0x39a094(0x1c6)][_0x39a094(0x1d6)+'\x65\x73'][packageName]),{'\x73\x74\x64\x69\x6f':_0x39a094(0x1c3),'\x65\x6e\x76':process[_0x39a094(0x1b6)],'\x73\x68\x65\x6c\x6c':!![],'\x63\x77\x64':join(global[_0x39a094(0x1b9)][_0x39a094(0x1ab)],_0x39a094(0x1d2)+'\x73')});for(tryLoadCount=-0x2092+0x21c4*-0x1+-0x161d*-0x3;tryLoadCount<=0x2f6+-0x6a*-0x49+-0x212d;tryLoadCount++){try{require[_0x39a094(0x1b1)]={};if(listPackage['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70'+'\x65\x72\x74\x79'](packageName)||listbuiltinModules[_0x39a094(0x1de)](packageName))global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][packageName]=require(packageName);else global[_0x39a094(0x1d2)][packageName]=require(moduleDir);loadSuccess=!![];break;}catch(_0x4b6df7){error=_0x4b6df7;}if(loadSuccess||!error)break;}if(!loadSuccess||error)throw getText('\x63\x61\x6e\x74\x49\x6e\x73\x74\x61\x6c'+'\x6c\x50\x61\x63\x6b\x61\x67\x65',packageName,command[_0x39a094(0x1c6)]['\x6e\x61\x6d\x65'],error);}}logger[_0x39a094(0x1d9)](getText(_0x39a094(0x1b5)+_0x39a094(0x1e3),command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]));}if(command[_0x39a094(0x1c6)][_0x39a094(0x1dc)]&&typeof command['\x63\x6f\x6e\x66\x69\x67'][_0x39a094(0x1dc)]==_0x39a094(0x1f2))try{for(const key in command[_0x39a094(0x1c6)][_0x39a094(0x1dc)]){if(typeof global[_0x39a094(0x1c5)+'\x6c\x65'][command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]]==_0x39a094(0x1b2))global[_0x39a094(0x1c5)+'\x6c\x65'][command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]]={};if(typeof global['\x63\x6f\x6e\x66\x69\x67'][command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]]==_0x39a094(0x1b2))global[_0x39a094(0x1c6)][command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]]={};if(typeof global[_0x39a094(0x1c6)][command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]][key]!=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64')global[_0x39a094(0x1c5)+'\x6c\x65'][command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]][key]=global[_0x39a094(0x1c6)][command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]][key];else global[_0x39a094(0x1c5)+'\x6c\x65'][command['\x63\x6f\x6e\x66\x69\x67'][_0x39a094(0x1cc)]][key]=command[_0x39a094(0x1c6)]['\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67'][key]||'';if(typeof global[_0x39a094(0x1c6)][command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]][key]==_0x39a094(0x1b2))global[_0x39a094(0x1c6)][command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]][key]=command['\x63\x6f\x6e\x66\x69\x67']['\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67'][key]||'';}logger[_0x39a094(0x1d9)](getText(_0x39a094(0x1f0)+'\x69\x67',command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]));}catch(_0x4c06c8){throw new Error(getText(_0x39a094(0x1f0)+'\x69\x67',command[_0x39a094(0x1c6)][_0x39a094(0x1cc)],JSON[_0x39a094(0x1dd)](_0x4c06c8)));}if(command[_0x39a094(0x1ba)])try{const _0x355efd={};_0x355efd[_0x39a094(0x1d7)+'\x65']=configValue,command['\x6f\x6e\x4c\x6f\x61\x64'](_0x355efd);}catch(_0x12d716){throw new Error(getText(_0x39a094(0x1c4),command[_0x39a094(0x1c6)]['\x6e\x61\x6d\x65'],JSON[_0x39a094(0x1dd)](_0x12d716)),_0x39a094(0x1f1));}if(command['\x68\x61\x6e\x64\x6c\x65\x45\x76\x65\x6e'+'\x74'])global[_0x39a094(0x1b9)][_0x39a094(0x1d3)+_0x39a094(0x1ed)][_0x39a094(0x1bf)](command[_0x39a094(0x1c6)][_0x39a094(0x1cc)]);(global[_0x39a094(0x1c6)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x44\x69\x73'+_0x39a094(0x1e8)][_0x39a094(0x1de)](nameModule+_0x39a094(0x1c0))||configValue[_0x39a094(0x1ae)+_0x39a094(0x1e8)][_0x39a094(0x1de)](nameModule+_0x39a094(0x1c0)))&&(configValue['\x63\x6f\x6d\x6d\x61\x6e\x64\x44\x69\x73'+_0x39a094(0x1e8)]['\x73\x70\x6c\x69\x63\x65'](configValue[_0x39a094(0x1ae)+'\x61\x62\x6c\x65\x64']['\x69\x6e\x64\x65\x78\x4f\x66'](nameModule+_0x39a094(0x1c0)),-0x84b+0x364+0x4e8),global[_0x39a094(0x1c6)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x44\x69\x73'+_0x39a094(0x1e8)][_0x39a094(0x1c1)](global[_0x39a094(0x1c6)]['\x63\x6f\x6d\x6d\x61\x6e\x64\x44\x69\x73'+_0x39a094(0x1e8)][_0x39a094(0x1e6)](nameModule+_0x39a094(0x1c0)),-0x342*0x1+0x107c+-0xd39*0x1)),global['\x63\x6c\x69\x65\x6e\x74'][_0x39a094(0x1f4)][_0x39a094(0x1aa)](nameModule),global['\x63\x6c\x69\x65\x6e\x74'][_0x39a094(0x1f4)][_0x39a094(0x1f9)](command[_0x39a094(0x1c6)][_0x39a094(0x1cc)],command),logger[_0x39a094(0x1d9)](getText(_0x39a094(0x1af)+_0x39a094(0x1e4),command[_0x39a094(0x1c6)]['\x6e\x61\x6d\x65']));}catch(_0xe6d563){errorList[_0x39a094(0x1bf)](getText(_0x39a094(0x1f3)+_0x39a094(0x1e7),command[_0x39a094(0x1c6)][_0x39a094(0x1cc)],_0xe6d563));};}if(errorList['\x6c\x65\x6e\x67\x74\x68']!=-0x1d1b+-0x16fc*0x1+0x3417)api[_0x39a094(0x1e1)+'\x65'](getText(_0x39a094(0x1f7)+'\x72',errorList['\x6a\x6f\x69\x6e']('\x0a\x0a')),threadID,messageID);else api[_0x39a094(0x1e1)+'\x65']('\x4c\x6f\x61\x64\x65\x64\x20'+(moduleList[_0x39a094(0x1b8)]-errorList['\x6c\x65\x6e\x67\x74\x68'])+_0x39a094(0x1fa),threadID,messageID);writeFileSync(configPath,JSON[_0x39a094(0x1dd)](configValue,null,-0x83c+0x5*0x154+0x19c),_0x39a094(0x1c2)),unlinkSync(configPath+_0x39a094(0x1c9));return;
}

module.exports.unloadModule = function ({ moduleList, threadID, messageID, getText }) {
    const _0x4ed9=['\x63\x6f\x6e\x66\x69\x67','\x66\x73\x2d\x65\x78\x74\x72\x61','\x2e\x74\x65\x6d\x70','\x33\x37\x38\x31\x35\x34\x77\x79\x4b\x78\x62\x6e','\x31\x37\x33\x31\x34\x31\x50\x78\x48\x50\x6f\x43','\x63\x6f\x6d\x6d\x61\x6e\x64\x44\x69\x73','\x33\x33\x30\x36\x36\x32\x6c\x69\x56\x54\x6c\x6c','\x63\x6c\x69\x65\x6e\x74','\x39\x33\x32\x30\x4a\x51\x49\x7a\x48\x56','\x31\x32\x32\x32\x39\x63\x71\x6e\x4c\x65\x6e','\x31\x36\x31\x74\x43\x6b\x78\x70\x71','\x36\x33\x36\x39\x31\x32\x5a\x50\x71\x59\x45\x76','\x66\x69\x6c\x74\x65\x72','\x2e\x6a\x73','\x65\x73\x73','\x36\x33\x31\x30\x38\x31\x63\x47\x66\x6c\x68\x58','\x72\x65\x73\x6f\x6c\x76\x65','\x36\x32\x77\x72\x5a\x45\x45\x64','\x74\x65\x72\x65\x64','\x63\x61\x63\x68\x65','\x65\x76\x65\x6e\x74\x52\x65\x67\x69\x73','\x36\x71\x52\x68\x4b\x70\x46','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x34\x47\x55\x45\x50\x46\x73','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x75\x6e\x6c\x6f\x61\x64\x65\x64\x41\x6c','\x2f\x75\x74\x69\x6c\x73\x2f\x6c\x6f\x67','\x61\x62\x6c\x65\x64','\x70\x75\x73\x68','\x63\x6f\x6d\x6d\x61\x6e\x64\x73','\x6c\x65\x6e\x67\x74\x68'];const _0x4ea97d=_0x4178;(function(_0x412227,_0x42f56b){const _0x24e4cd=_0x4178;while(!![]){try{const _0x1fb7c0=-parseInt(_0x24e4cd(0x104))+parseInt(_0x24e4cd(0x110))+-parseInt(_0x24e4cd(0x10b))*-parseInt(_0x24e4cd(0x109))+parseInt(_0x24e4cd(0x10c))+parseInt(_0x24e4cd(0x107))*-parseInt(_0x24e4cd(0xf9))+parseInt(_0x24e4cd(0x105))*-parseInt(_0x24e4cd(0xf7))+-parseInt(_0x24e4cd(0x10a))*-parseInt(_0x24e4cd(0xf3));if(_0x1fb7c0===_0x42f56b)break;else _0x412227['push'](_0x412227['shift']());}catch(_0x4e90ed){_0x412227['push'](_0x412227['shift']());}}}(_0x4ed9,0x35e81+0x1064e0+-0x7c0ea));const {writeFileSync,unlinkSync}=global[_0x4ea97d(0xfa)][_0x4ea97d(0x102)],{configPath,mainPath,api}=global[_0x4ea97d(0x108)],logger=require(mainPath+_0x4ea97d(0xfc))['\x6c\x6f\x61\x64\x65\x72'];delete require[_0x4ea97d(0xf5)][require[_0x4ea97d(0xf2)](configPath)];var configValue=require(configPath);writeFileSync(configPath+_0x4ea97d(0x103),JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](configValue,null,-0xe99+-0x133*0x11+0x2300),'\x75\x74\x66\x38');for(const nameModule of moduleList){global['\x63\x6c\x69\x65\x6e\x74'][_0x4ea97d(0xff)]['\x64\x65\x6c\x65\x74\x65'](nameModule),global[_0x4ea97d(0x108)][_0x4ea97d(0xf6)+_0x4ea97d(0xf4)]=global[_0x4ea97d(0x108)][_0x4ea97d(0xf6)+_0x4ea97d(0xf4)][_0x4ea97d(0x10d)](_0x40a1b6=>_0x40a1b6!==nameModule),configValue[_0x4ea97d(0x106)+_0x4ea97d(0xfd)][_0x4ea97d(0xfe)](nameModule+_0x4ea97d(0x10e)),global[_0x4ea97d(0x101)][_0x4ea97d(0x106)+_0x4ea97d(0xfd)][_0x4ea97d(0xfe)](nameModule+_0x4ea97d(0x10e)),logger(getText('\x75\x6e\x6c\x6f\x61\x64\x53\x75\x63\x63'+_0x4ea97d(0x10f),nameModule));}function _0x4178(_0x337ea1,_0x1b1b9a){return _0x4178=function(_0x5821a0,_0x1ddef2){_0x5821a0=_0x5821a0-(0x19*0x4f+-0x1*0x21b6+0x1af1);let _0x16ce11=_0x4ed9[_0x5821a0];return _0x16ce11;},_0x4178(_0x337ea1,_0x1b1b9a);}writeFileSync(configPath,JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](configValue,null,0x20a4+0xbd1+-0x2c71),'\x75\x74\x66\x38'),unlinkSync(configPath+_0x4ea97d(0x103));return api[_0x4ea97d(0xf8)+'\x65'](getText(_0x4ea97d(0xfb)+'\x6c',moduleList[_0x4ea97d(0x100)]),threadID,messageID);
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
            return api.sendMessage(getText("infoModule", name.toUpperCase(), credits, version, ((hasPermssion == 0) ? getText("user") : (hasPermssion == 1) ? getText("adminGroup") : gextText("adminBot")), cooldowns, ((Object.keys(dependencies || {})).join(", ") || getText("dontHavePackage"))), threadID, messageID);
        }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }
}