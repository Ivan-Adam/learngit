//测试fs的readdirSync方法
//require 的路径中不能带有下划线   否则报错
//Error: Cannot find module './11/22_111/33/33.js.js'
// const sss=require('./11/22_11/33/33.js.js.js')
const fs=require('fs')
const path=require('path')
const apth=path.join(__dirname,'11')
console.log(apth)
const files=fs.readdirSync(apth)
console.log(files)

/**
 * 存在即合理     当require的路径中带有下划线时，需要采用绝对路径的方式来引入模块   
 */
const eventHandlerPath = path.join(__dirname, '11', '22_11','33');
//console.log("eventHandlerPath-=-=-=-=-=-=-=-=-=-=-=-=------->"+eventHandlerPath);
//output  d:\workspace\project\fujian_north_dry_1-beiqian-master\beiqian\gps-device\lib\event_handlers
const eventFiles = fs.readdirSync(eventHandlerPath);
eventFiles.forEach((fileName) => {
    const handlerFile = path.join(eventHandlerPath, fileName);
    // 通过绝对路径的方式来引入模块
    const handle = require(handlerFile);
    //handle()是通过读取文件名的方式来调用方法  
    handle();
});



// sss()



function sb (str, suffix) {
    return str.lastIndexOf(suffix) === (str.length - suffix.length);
}
let a='abcdefg'
let b='fg'
console.log(sb(a,b))


console.log(parseInt(a,10))