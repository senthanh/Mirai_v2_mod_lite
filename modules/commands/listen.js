module.exports.config = {
	name: "listen",	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Bật tắt chế độ selfListen (acc bot đem chat vẫn chạy lệnh)\nCredits: ",
	commandCategory: "Group",
	usages: "selfListen on/off",
	dependencies: ["node-cmd"],
	cooldowns: 5,
};

module.exports.run = async function({ nodemodules, api, event, args, client }) {
var config = require(client.dirConfig);
var fs = require("fs-extra");
     if(args[0] == "on") {var tf = true, onoff = "bật";}
else if(args[0] == "off") {var tf = false, onoff = "tắt";}
else return api.sendMessage("Sai cú pháp", event.threadID, event.messageID);
      config.selfListen = tf;
  fs.writeFileSync(client.dirConfig, JSON.stringify(config, "utf-8"));
  api.setOptions({selfListen: tf});
	
  api.sendMessage("Đã "+onoff+" chế độ selfListen ", event.threadID, event.messageID);
  
}