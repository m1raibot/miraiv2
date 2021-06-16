module.exports.config = {
	name: "event",
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
    const _0x3f08=['\x20\x63\x68\x6f\x20\x6d\x6f\x64\x75\x6c','\x69\x6e\x63\x6c\x75\x64\x65\x73','\x6c\x65\x6e\x67\x74\x68','\x6a\x6f\x69\x6e','\x36\x33\x35\x35\x35\x30\x4a\x55\x56\x78\x58\x6a','\x2e\x74\x65\x6d\x70','\x65\x72\x74\x79','\x2c\x20\x74\x69\u1ebf\x6e\x20\x68\u00e0\x6e','\x68\x20\x63\u00e0\x69\x20\u0111\u1eb7\x74\x2e','\x73\x74\x64\x69\x6f','\x4f\x62\x6a\x65\x63\x74','\x77\x61\x72\x6e','\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67','\x75\x6c\x65\x73','\x6d\x61\x69\x6e\x50\x61\x74\x68','\u00e0\x6e\x20\x62\u1ed9\x20\x70\x61\x63\x6b','\x6c\x65\x64','\x64\x65\x6c\x65\x74\x65','\x6f\x20\x6d\x6f\x64\x75\x6c\x65\x20','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x6c\x65\x20\u0111\u00e3\x20\x78\u1ea3\x79\x20','\x2c\x20\x6c\u1ed7\x69\x3a\x20','\x74\u1ea3\x69\x20\x63\x6f\x6e\x66\x69\x67','\x63\x6f\x6e\x66\x69\x67\x56\x61\x6c\x75','\x63\x6f\x6e\x66\x69\x67','\x6e\x6f\x64\x65\x5f\x6d\x6f\x64\x75\x6c','\x4c\x6f\x61\x64\x65\x64\x20\x63\x6f\x6e','\x4b\x68\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20','\x70\x61\x72\x73\x65','\x65\x76\x65\x6e\x74\x73','\x61\x6c\x73\x65\x20\x2d\x2d\x73\x61\x76','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x31\x30\x34\x30\x31\x32\x7a\x41\x4a\x6a\x75\x63','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x6f\x6e\x4c\x6f\x61\x64\x20\x6d\x6f\x64','\x6c\x6f\x61\x64\x65\x72','\x65\x72\x72\x6f\x72','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x31\x37\x37\x34\x39\x66\x6d\x69\x62\x6e\x4f','\x31\x32\x32\x34\x33\x39\x48\x55\x4b\x64\x5a\x57','\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69','\x65\x76\x65\x6e\x74\x44\x69\x73\x61\x62','\x73\x70\x6c\x69\x63\x65','\x65\x20\x69\x6e\x73\x74\x61\x6c\x6c\x20','\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70','\x63\x61\x63\x68\x65','\x35\x30\x32\x34\x39\x7a\x67\x4c\x50\x6f\x42','\x6f\x6e\x4c\x6f\x61\x64','\x4d\x6f\x64\x75\x6c\x65\x20\x6b\x68\u00f4','\x62\x75\x69\x6c\x74\x69\x6e\x4d\x6f\x64','\x31\x38\x37\x31\x36\x33\x75\x45\x61\x68\x45\x64','\x31\x58\x70\x6b\x73\x41\x7a','\x6e\x70\x6d\x20\x2d\x2d\x70\x61\x63\x6b','\u0110\u00e3\x20\x74\u1ea3\x69\x20\x74\x68\u00e0','\x72\x65\x73\x6f\x6c\x76\x65','\x72\x61\x20\x73\u1ef1\x20\x63\u1ed1\x20\x6b','\x33\x72\x74\x53\x6d\x6c\x6c','\x34\x62\x47\x4e\x53\x6c\x52','\x66\x73\x2d\x65\x78\x74\x72\x61','\x63\x6b\x61\x67\x65\x20','\x64\x75\x6c\x65\x20','\x6e\x61\x6d\x65','\x72\x75\x6e','\x31\x34\x30\x36\x39\x35\x56\x7a\x59\x56\x61\x6d','\x70\x75\x73\x68','\x69\x6e\x64\x65\x78\x4f\x66','\x75\x6c\x65\x2c\x20\x6c\u1ed7\x69\x3a\x20','\x6e\x74\x20','\x2e\x6a\x73','\x31\x66\x68\x6d\x69\x4c\x42','\x75\x74\x66\x38','\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75','\x20\x61\x74\x20','\x20\x6d\x6f\x64\x75\x6c\x65\x2c\x20\x6c','\x4b\x68\u00f4\x6e\x67\x20\x74\u00ec\x6d\x20','\x73\x74\x61\x63\x6b','\x6e\x68\x20\x63\u00f4\x6e\x67\x20\x74\x6f','\x2e\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e','\x63\x6c\x69\x65\x6e\x74','\x65\x6e\x76','\x69\x6e\x68\x65\x72\x69\x74','\x63\x68\x69\x6c\x64\x5f\x70\x72\x6f\x63','\x61\x64\x3a\x0a\x0a','\x31\x68\x6c\x46\x64\x44\x4d'];const _0x3a80a9=function(_0x2055bd,_0x2e9d62){return _0x43b1(_0x2055bd- -0x57,_0x2e9d62);},_0x4e4965=function(_0xa5cd71,_0x276e94){return _0x43b1(_0xa5cd71- -0x57,_0x276e94);},_0x42489e=function(_0x4d54d4,_0x248922){return _0x43b1(_0x4d54d4- -0x57,_0x248922);};(function(_0x2e3bd3,_0xeef2c6){const _0x29f077=function(_0x5da2d0,_0x420202){return _0x43b1(_0x420202-0x18b,_0x5da2d0);},_0x12e7f7=function(_0x1c98f5,_0x127b73){return _0x43b1(_0x127b73-0x18b,_0x1c98f5);},_0x53599c=function(_0x148aa5,_0x53cdb6){return _0x43b1(_0x53cdb6-0x18b,_0x148aa5);};while(!![]){try{const _0x343798=parseInt(_0x29f077(0x30a,0x311))*-parseInt(_0x12e7f7(0x2cd,0x2d4))+-parseInt(_0x53599c(0x2f1,0x31b))*parseInt(_0x53599c(0x30f,0x30a))+parseInt(_0x53599c(0x2ee,0x315))*-parseInt(_0x53599c(0x2cb,0x2e2))+-parseInt(_0x29f077(0x2fd,0x31c))*-parseInt(_0x29f077(0x2fd,0x309))+parseInt(_0x53599c(0x318,0x322))*parseInt(_0x12e7f7(0x2ee,0x316))+parseInt(_0x53599c(0x2ef,0x2e7))+parseInt(_0x29f077(0x31b,0x303));if(_0x343798===_0xeef2c6)break;else _0x2e3bd3['push'](_0x2e3bd3['shift']());}catch(_0x11a859){_0x2e3bd3['push'](_0x2e3bd3['shift']());}}}(_0x3f08,-0x4283b+0x4f*0x1d49+0x6850));const {execSync}=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x3a80a9(0xfe,0xe4)+'\x65\x73\x73'],{writeFileSync,unlinkSync,readFileSync}=global[_0x4e4965(0x122,0x113)][_0x3a80a9(0x13b,0x142)],{join}=global[_0x3a80a9(0x122,0x138)]['\x70\x61\x74\x68'],{configPath,mainPath,api}=global[_0x4e4965(0xfb,0x10d)],logger=require(mainPath+'\x2f\x75\x74\x69\x6c\x73\x2f\x6c\x6f\x67');var errorList=[];delete require[_0x42489e(0x12e,0x117)][require[_0x3a80a9(0x137,0x14e)](configPath)];var configValue=require(configPath);writeFileSync(configPath+_0x3a80a9(0x106,0x12c),JSON[_0x42489e(0x114,0x10d)](configValue,null,-0x2639*-0x1+0x330*-0x8+-0xcb5),'\x75\x74\x66\x38');for(const nameModule of moduleList){try{const dirModule=join(__dirname,'\x2e\x2e','\x65\x76\x65\x6e\x74\x73',nameModule+_0x3a80a9(0x145,0x152));delete require[_0x42489e(0x12e,0x12f)][require[_0x3a80a9(0x137,0x128)](dirModule)];const event=require(dirModule);global[_0x4e4965(0xfb,0x10e)][_0x4e4965(0x11e,0x140)][_0x4e4965(0x112,0x113)](nameModule);if(!event['\x63\x6f\x6e\x66\x69\x67']||!event[_0x4e4965(0x13f,0x127)])throw new Error(_0x4e4965(0x131,0x11c)+'\x6e\x67\x20\u0111\u00fa\x6e\x67\x20\u0111\u1ecb'+'\x6e\x68\x20\x64\u1ea1\x6e\x67\x21');if(event['\x63\x6f\x6e\x66\x69\x67'][_0x3a80a9(0x129,0x100)+'\x65\x73']&&typeof event['\x63\x6f\x6e\x66\x69\x67'][_0x42489e(0x129,0x134)+'\x65\x73']=='\x6f\x62\x6a\x65\x63\x74'){const listPackage=JSON[_0x4e4965(0x11d,0x111)](readFileSync(_0x42489e(0xfa,0xee)+'\x6a\x73\x6f\x6e'))[_0x4e4965(0x129,0x13e)+'\x65\x73'],listbuiltinModules=require('\x6d\x6f\x64\x75\x6c\x65')[_0x3a80a9(0x132,0x133)+_0x4e4965(0x10e,0x11c)];for(const packageName in event[_0x4e4965(0x119,0x132)][_0x42489e(0x129,0x10b)+'\x65\x73']){var tryLoadCount=-0x22ab+-0x1*-0x1003+0x12a8,loadSuccess=![],error,needRetry=![];const moduleDir=join(global[_0x4e4965(0xfb,0xf0)][_0x3a80a9(0x10f,0x123)],_0x3a80a9(0x122,0x13c),_0x42489e(0x11a,0x104)+'\x65\x73',packageName);try{if(listPackage[_0x3a80a9(0x12d,0x12d)+_0x42489e(0x107,0x123)](packageName)||listbuiltinModules[_0x3a80a9(0x102,0x10d)](packageName))global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][packageName]=require(packageName);else global[_0x42489e(0x122,0x14c)][packageName]=require(moduleDir);}catch{logger[_0x4e4965(0x124,0x129)](_0x4e4965(0xf7,0xff)+'\x74\x68\u1ea5\x79\x20\x70\x61\x63\x6b\x61'+'\x67\x65\x20'+packageName+('\x20\x68\u1ed7\x20\x74\x72\u1ee3\x20\x63\x68'+_0x42489e(0x113,0x111))+event[_0x42489e(0x119,0x13c)][_0x3a80a9(0x13e,0x125)]+(_0x42489e(0x108,0xf5)+_0x42489e(0x109,0x120)+'\x2e\x2e'),_0x3a80a9(0x10c,0xe3));const _0x4603bf={};_0x4603bf[_0x3a80a9(0x10a,0x12a)]=_0x3a80a9(0xfd,0x127),_0x4603bf[_0x3a80a9(0xfc,0xde)]=process[_0x3a80a9(0xfc,0x113)],_0x4603bf['\x73\x68\x65\x6c\x6c']=!![],_0x4603bf['\x63\x77\x64']=join(global['\x63\x6c\x69\x65\x6e\x74'][_0x4e4965(0x10f,0x111)],_0x42489e(0x122,0x123)+'\x73'),execSync(_0x42489e(0x135,0x11b)+'\x61\x67\x65\x2d\x6c\x6f\x63\x6b\x20\x66'+_0x42489e(0x11f,0x134)+_0x42489e(0x12c,0x14f)+packageName+(event[_0x4e4965(0x119,0x118)][_0x4e4965(0x129,0x11c)+'\x65\x73'][packageName]=='\x2a'||event['\x63\x6f\x6e\x66\x69\x67']['\x64\x65\x70\x65\x6e\x64\x65\x6e\x63\x69'+'\x65\x73'][packageName]==''?'':'\x40'+event['\x63\x6f\x6e\x66\x69\x67'][_0x42489e(0x129,0x129)+'\x65\x73'][packageName]),_0x4603bf);for(tryLoadCount=0x999+0x3*0x9+-0x9b3;tryLoadCount<=-0x2246*-0x1+-0x2023+-0x220;tryLoadCount++){require[_0x42489e(0x12e,0x12e)]={};try{if(listPackage['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70'+_0x4e4965(0x107,0x12d)](packageName)||listbuiltinModules[_0x3a80a9(0x102,0xe7)](packageName))global[_0x3a80a9(0x122,0x113)][packageName]=require(packageName);else global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][packageName]=require(moduleDir);loadSuccess=!![];break;}catch(_0x7e9d67){error=_0x7e9d67;}if(loadSuccess||!error)break;}if(!loadSuccess||error)throw _0x4e4965(0x11c,0xfb)+'\x63\u00e0\x69\x20\u0111\u1eb7\x74\x20\x70\x61'+_0x4e4965(0x13c,0x144)+packageName+(_0x42489e(0x101,0x100)+'\x65\x20')+event['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']+_0x3a80a9(0x116,0x105)+error+'\x20'+error['\x73\x74\x61\x63\x6b'];}}logger['\x6c\x6f\x61\x64\x65\x72'](_0x42489e(0x136,0x124)+_0x42489e(0xf9,0xf9)+_0x42489e(0x110,0xff)+'\x61\x67\x65\x20\x63\x68\x6f\x20\x6d\x6f'+_0x42489e(0x13d,0x15a)+event[_0x42489e(0x119,0x10a)]['\x6e\x61\x6d\x65']);}if(event[_0x4e4965(0x119,0x12b)]['\x65\x6e\x76\x43\x6f\x6e\x66\x69\x67']&&typeof event['\x63\x6f\x6e\x66\x69\x67'][_0x4e4965(0x10d,0x107)]==_0x42489e(0x10b,0xe4))try{for(const [key,value]of Object['\x65\x6e\x74\x72\x69\x65\x73'](event[_0x3a80a9(0x119,0x128)][_0x3a80a9(0x10d,0xe7)])){if(typeof global['\x63\x6f\x6e\x66\x69\x67\x4d\x6f\x64\x75'+'\x6c\x65'][event[_0x42489e(0x119,0x140)][_0x3a80a9(0x13e,0x134)]]==_0x42489e(0x120,0x13d))global[_0x3a80a9(0xf4,0xe5)+'\x6c\x65'][event[_0x4e4965(0x119,0x10c)][_0x3a80a9(0x13e,0x12a)]]={};if(typeof configValue[event[_0x42489e(0x119,0x108)]['\x6e\x61\x6d\x65']]==_0x4e4965(0x120,0x110))configValue[event['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']]={};if(typeof configValue[event['\x63\x6f\x6e\x66\x69\x67']['\x6e\x61\x6d\x65']][key]!=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64')global[_0x42489e(0xf4,0xf2)+'\x6c\x65'][event['\x63\x6f\x6e\x66\x69\x67'][_0x4e4965(0x13e,0x136)]][key]=configValue[event['\x63\x6f\x6e\x66\x69\x67'][_0x3a80a9(0x13e,0x13f)]][key];else global[_0x42489e(0xf4,0xf5)+'\x6c\x65'][event[_0x4e4965(0x119,0x10a)][_0x4e4965(0x13e,0x165)]][key]=value||'';if(typeof configValue[event[_0x3a80a9(0x119,0x129)]['\x6e\x61\x6d\x65']][key]==_0x42489e(0x120,0x134))configValue[event[_0x42489e(0x119,0x129)][_0x3a80a9(0x13e,0x130)]][key]=value||'';}logger[_0x42489e(0x124,0x110)](_0x4e4965(0x11b,0x10d)+'\x66\x69\x67\x20\x6d\x6f\x64\x75\x6c\x65'+'\x20'+event[_0x3a80a9(0x119,0x125)]['\x6e\x61\x6d\x65']);}catch(_0x421c7c){throw new Error('\x4b\x68\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20'+_0x42489e(0x117,0xf2)+_0x42489e(0xf6,0xcd)+'\u1ed7\x69\x3a\x20'+JSON[_0x3a80a9(0x114,0x11f)](_0x421c7c));}if(event['\x6f\x6e\x4c\x6f\x61\x64'])try{const _0x12d783={};_0x12d783[_0x4e4965(0x118,0x11a)+'\x65']=configValue,event[_0x42489e(0x130,0x122)](_0x12d783);}catch(_0xa83341){throw new Error(_0x42489e(0x11c,0x11b)+_0x42489e(0x123,0x100)+_0x3a80a9(0x143,0x15a)+JSON[_0x42489e(0x114,0x113)](_0xa83341),_0x42489e(0x125,0x10a));}(global[_0x4e4965(0x119,0x114)][_0x3a80a9(0x12a,0x127)+_0x3a80a9(0x111,0xf9)][_0x42489e(0x102,0xe7)](nameModule+_0x3a80a9(0x145,0x167))||configValue[_0x3a80a9(0x12a,0x109)+_0x42489e(0x111,0xf5)][_0x42489e(0x102,0x113)](nameModule+'\x2e\x6a\x73'))&&(configValue['\x65\x76\x65\x6e\x74\x44\x69\x73\x61\x62'+'\x6c\x65\x64'][_0x42489e(0x12b,0x11c)](configValue[_0x4e4965(0x12a,0x13f)+_0x42489e(0x111,0x105)][_0x42489e(0x142,0x15d)](nameModule+_0x3a80a9(0x145,0x120)),-0x2309+-0x22ae+0xb8*0x61),global['\x63\x6f\x6e\x66\x69\x67'][_0x3a80a9(0x12a,0x105)+_0x4e4965(0x111,0xf0)][_0x3a80a9(0x12b,0x123)](global['\x63\x6f\x6e\x66\x69\x67'][_0x42489e(0x12a,0x135)+_0x4e4965(0x111,0x10f)][_0x42489e(0x142,0x11c)](nameModule+_0x3a80a9(0x145,0x141)),-0x173d+-0xd51+-0x539*-0x7)),global['\x63\x6c\x69\x65\x6e\x74'][_0x4e4965(0x11e,0x13d)]['\x73\x65\x74'](event['\x63\x6f\x6e\x66\x69\x67'][_0x42489e(0x13e,0x120)],event),logger[_0x3a80a9(0x124,0x107)]('\x4c\x6f\x61\x64\x65\x64\x20\x65\x76\x65'+_0x3a80a9(0x144,0x14d)+event[_0x4e4965(0x119,0x129)][_0x4e4965(0x13e,0x15a)]+'\x21');}catch(_0x588ebb){errorList[_0x4e4965(0x141,0x121)]('\x2d\x20'+nameModule+'\x20\x72\x65\x61\x73\x6f\x6e\x3a\x20'+_0x588ebb+_0x42489e(0xf5,0xf1)+_0x588ebb[_0x3a80a9(0xf8,0x106)]);};}if(errorList[_0x42489e(0x103,0x103)]!=-0x2*-0x752+0x16a9*-0x1+0x805)api[_0x4e4965(0x126,0x10f)+'\x65']('\x4e\x68\u1eef\x6e\x67\x20\x6d\x6f\x64\x75'+_0x4e4965(0x115,0x115)+_0x42489e(0x138,0x118)+'\x68\x69\x20\u0111\x61\x6e\x67\x20\x6c\x6f'+_0x4e4965(0xff,0xf0)+errorList[_0x42489e(0x104,0x114)]('\x0a\x0a'),threadID,messageID);api[_0x4e4965(0x126,0x10d)+'\x65']('\x4c\x6f\x61\x64\x65\x64\x20'+(moduleList[_0x42489e(0x103,0x11b)]-errorList[_0x4e4965(0x103,0x10c)])+'\x20\x6d\x6f\x64\x75\x6c\x65\x28\x73\x29',threadID,messageID),writeFileSync(configPath,JSON[_0x42489e(0x114,0x129)](configValue,null,0x267*-0x10+0x1252+0x1422),_0x42489e(0xf3,0xc9)),unlinkSync(configPath+'\x2e\x74\x65\x6d\x70');function _0x43b1(_0x5620a8,_0x56ec4b){_0x5620a8=_0x5620a8-(0x9*-0x61+-0x67*0x1f+-0x112b*-0x1);let _0x1241fe=_0x3f08[_0x5620a8];return _0x1241fe;}return;
}

const unloadModule = function ({ moduleList, threadID, messageID }) {
    const { writeFileSync, unlinkSync } = global.nodemodule["fs-extra"];
    const { configPath, mainPath, api } = global.client;
    const logger = require(mainPath + "/utils/log").loader;

    delete require.cache[require.resolve(configPath)];
    var configValue = require(configPath);
    writeFileSync(configPath + ".temp", JSON.stringify(configValue, null, 4), 'utf8');

    for (const nameModule of moduleList) {
        global.client.events.delete(nameModule);
        configValue["eventDisabled"].push(`${nameModule}.js`);
        global.config["eventDisabled"].push(`${nameModule}.js`);
        logger(`Unloaded event ${nameModule}!`);
    }

    writeFileSync(configPath, JSON.stringify(configValue, null, 4), 'utf8');
    unlinkSync(configPath + ".temp");

    return api.sendMessage(`Unloaded ${moduleList.length} module(s)`, threadID, messageID);
}

module.exports.run = function ({ event, args, api }) {
    const { readdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
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
            moduleList = readdirSync(join(global.client.mainPath, "modules", "events")).filter((file) => file.endsWith(".js") && !file.includes('example'));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return loadCommand({ moduleList, threadID, messageID });
        }
        case "unloadAll": {
            moduleList = readdirSync(join(global.client.mainPath, "modules", "events")).filter((file) => file.endsWith(".js") && !file.includes('example'));
            moduleList = moduleList.map(item => item.replace(/\.js/g, ""));
            return unloadModule({ moduleList, threadID, messageID });
        }
        case "info": {
            const event = global.client.events.get(moduleList.join("") || "");

            if (!event) return api.sendMessage("Module bạn nhập không tồn tại!", threadID, messageID);

            const { name, version, credits, dependencies } = event.config;

            return api.sendMessage(
                "=== " + name.toUpperCase() + " ===\n" +
                "- Được code bởi: " + credits + "\n" +
                "- Phiên bản: " + version + "\n" +
                `- Các package yêu cầu: ${(Object.keys(dependencies || {})).join(", ") || "Không có"}`,
                threadID, messageID
            );
        }
        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }
}