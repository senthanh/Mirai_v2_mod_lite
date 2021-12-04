
module.exports.config = {
    name: "hello",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "TuanLinh",
    description: "",
    commandCategory: "không cần dấu lệnh",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "hi.gif")) request("https://cdn.fbsbx.com/v/t59.2708-21/195839516_341697600866264_388963806699401901_n.gif?_nc_cat=103&ccb=1-5&_nc_sid=041f46&_nc_ohc=Jz8-5X1s8TUAX9QV-Tm&_nc_ht=cdn.fbsbx.com&oh=d083640e7fa1816dedfba5ead2ac5e4d&oe=6154403D").pipe(fs.createWriteStream(dirMaterial + "hello.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `Chào ${name} nhó`,
                attachment: fs.createReadStream(__dirname + `/noprefix/hi.gif`)
            }
    if (event.body.toLowerCase() == "hi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hello"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "chào"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "hí"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "lô"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }