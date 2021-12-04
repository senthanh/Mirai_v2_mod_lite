const fs = require("fs");
module.exports.config = {
name: "yamete",
	version: "1.0.1",
	hasPermssion: 0,
	
	description: "Cc",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần tự m mò đi :))",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Yamete")==0 ||  (event.body.indexOf("yamete")==0)){
		var msg = {
				body: "Ưm sướnggggg.",
				attachment: fs.createReadStream(__dirname + `/noprefix/yamete.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
