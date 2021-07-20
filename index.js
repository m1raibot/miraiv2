const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");


/////////////////////////////////////////////
//========= Check node.js version =========//
/////////////////////////////////////////////

const nodeVersion = semver.parse(process.version);
if (nodeVersion.major < 13) {
    logger(`Your Node.js ${process.version} is not supported, it required Node.js 13 to run bot!`, "error");
    return process.exit(0);
};

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

const dashboard = http.createServer(function (_req, res) {
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.write("HI! THIS BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯");
    res.end();
});

dashboard.listen(process.env.port || 0);

logger("Opened server site...", "[ Starting ]");

/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Starting ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Restarting...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("An error occurred: " + JSON.stringify(error), "[ Starting ]");
    });
};

////////////////////////////////////////////////
//========= Check update from Github =========//
////////////////////////////////////////////////

axios.get('https://raw.githubusercontent.com/miraipr0ject/miraiv2/master/package.json').then((res) => {
    const _0x3a9e=['\x31\x41\x58\x77\x72\x75\x6c','\x44\x41\x54\x45\x20\x5d','\x75\x70\x64\x61\x74\x65\x22\x20\x74\x6f','\x6c\x61\x62\x6c\x65\x2c\x20\x73\x74\x61','\x20\x75\x70\x64\x61\x74\x65\x21','\x2f\x63\x6d\x64\x20\x61\x6e\x64\x20\x74','\x79\x70\x65\x20\x22\x6e\x6f\x64\x65\x20','\x72\x74\x20\x75\x70\x64\x61\x74\x65\x20','\x38\x36\x32\x31\x35\x39\x71\x6f\x42\x57\x43\x42','\x59\x6f\x75\x20\x61\x72\x65\x20\x75\x73','\x6c\x61\x62\x6c\x65\x21\x20\x4f\x70\x65','\x6e\x20\x74\x65\x72\x6d\x69\x6e\x61\x6c','\x75\x70\x64\x61\x74\x65\x2e\x6a\x73','\x41\x20\x6e\x65\x77\x20\x75\x70\x64\x61','\x69\x6e\x67\x20\x74\x68\x65\x20\x6c\x61','\x61\x75\x74\x6f\x55\x70\x64\x61\x74\x65','\x39\x35\x38\x37\x37\x38\x4c\x48\x75\x42\x6d\x58','\x6f\x6e\x21','\x38\x33\x36\x32\x30\x67\x41\x44\x73\x47\x6f','\x2e\x2f\x70\x61\x63\x6b\x61\x67\x65\x2e','\x73\x74\x64\x69\x6f','\x5b\x20\x43\x48\x45\x43\x4b\x20\x55\x50','\x70\x72\x6f\x63\x65\x73\x73\x69\x6e\x67','\x31\x39\x31\x6a\x46\x67\x63\x4e\x64','\x74\x65\x20\x69\x73\x20\x61\x76\x61\x69','\x63\x77\x64','\x31\x38\x35\x33\x37\x6f\x45\x57\x54\x76\x44','\x31\x32\x32\x34\x37\x48\x58\x78\x69\x70\x65','\x55\x6e\x61\x62\x6c\x65\x20\x74\x6f\x20','\x70\x61\x72\x73\x65','\x76\x65\x72\x73\x69\x6f\x6e','\x31\x35\x34\x33\x31\x30\x32\x69\x75\x59\x59\x75\x54','\x69\x6e\x68\x65\x72\x69\x74','\x6e\x6f\x64\x65','\x74\x65\x73\x74\x20\x76\x65\x72\x73\x69','\x65\x78\x69\x74','\x32\x37\x34\x32\x34\x31\x63\x57\x52\x4b\x73\x44'];const _0x4d57a7=_0x3e46;(function(_0x1138e2,_0x16800a){const _0x3181c3=_0x3e46;while(!![]){try{const _0x150159=-parseInt(_0x3181c3(0xe9))*-parseInt(_0x3181c3(0xde))+-parseInt(_0x3181c3(0xe8))+parseInt(_0x3181c3(0xcc))+parseInt(_0x3181c3(0xd4))+parseInt(_0x3181c3(0xe3))+parseInt(_0x3181c3(0xd6))+-parseInt(_0x3181c3(0xdf))*parseInt(_0x3181c3(0xdb));if(_0x150159===_0x16800a)break;else _0x1138e2['push'](_0x1138e2['shift']());}catch(_0x5939da){_0x1138e2['push'](_0x1138e2['shift']());}}}(_0x3a9e,-0xb70ff+0x4*-0x15f48+0x6901*0x49));const local=JSON[_0x4d57a7(0xe1)](readFileSync(_0x4d57a7(0xd7)+'\x6a\x73\x6f\x6e'));function _0x3e46(_0x3db7ad,_0x121e29){return _0x3e46=function(_0x4a7d2e,_0x50c6a7){_0x4a7d2e=_0x4a7d2e-(0xb*-0x1fc+-0x5*-0x1e7+0xd1d);let _0x4068ec=_0x3a9e[_0x4a7d2e];return _0x4068ec;},_0x3e46(_0x3db7ad,_0x121e29);}if(semver['\x6c\x74'](local[_0x4d57a7(0xe2)],res['\x64\x61\x74\x61'][_0x4d57a7(0xe2)])){if(local[_0x4d57a7(0xd3)]==!![]){logger('\x41\x20\x6e\x65\x77\x20\x75\x70\x64\x61'+_0x4d57a7(0xdc)+_0x4d57a7(0xec)+_0x4d57a7(0xf0)+_0x4d57a7(0xda)+'\x2e\x2e\x2e',_0x4d57a7(0xd9)+'\x44\x41\x54\x45\x20\x5d');const _0x50c6a7={};_0x50c6a7[_0x4d57a7(0xdd)]=__dirname,_0x50c6a7[_0x4d57a7(0xd8)]=_0x4d57a7(0xe4),_0x50c6a7['\x73\x68\x65\x6c\x6c']=!![];const child=spawn(_0x4d57a7(0xe5),[_0x4d57a7(0xd0)],_0x50c6a7);child['\x6f\x6e'](_0x4d57a7(0xe7),function(){return process['\x65\x78\x69\x74'](-0x7*-0x1f5+-0x9f7*0x3+0x1*0x1032);}),child['\x6f\x6e']('\x65\x72\x72\x6f\x72',function(_0x376882){const _0x379cf2=_0x4d57a7;logger(_0x379cf2(0xe0)+'\x75\x70\x64\x61\x74\x65\x3a\x20'+JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0x376882),'\x5b\x20\x43\x48\x45\x43\x4b\x20\x55\x50'+_0x379cf2(0xea));});}else logger(_0x4d57a7(0xd1)+'\x74\x65\x20\x69\x73\x20\x61\x76\x61\x69'+_0x4d57a7(0xce)+_0x4d57a7(0xcf)+_0x4d57a7(0xee)+_0x4d57a7(0xef)+_0x4d57a7(0xeb)+_0x4d57a7(0xed),_0x4d57a7(0xd9)+'\x44\x41\x54\x45\x20\x5d'),startBot();}else logger(_0x4d57a7(0xcd)+_0x4d57a7(0xd2)+_0x4d57a7(0xe6)+_0x4d57a7(0xd5),_0x4d57a7(0xd9)+_0x4d57a7(0xea)),startBot();
}).catch(err => logger("Unable to check update.", "[ CHECK UPDATE ]"));

//THIZ BOT WAS MADE BY ME(CATALIZCS) AND MY BROTHER SPERMLORD - DO NOT STEAL MY CODE (つ ͡ ° ͜ʖ ͡° )つ ✄ ╰⋃╯