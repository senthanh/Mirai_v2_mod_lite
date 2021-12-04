const fs = require("fs");
module.exports.config = {
	name: "quạo",
    version: "1.0.0",
	hasPermssion: 0,
	credits: "TuanLinh", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Quạo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("quạo")==0 || (event.body.indexOf("quạo")==0 || (event.body.indexOf("quạo")==0 || (event.body.indexOf("quạo")==0)))) {
		var msg = {
				body: "Tôi quạo rồi đó nha -_-",
				attachment: fs.createReadStream(__dirname + `/noprefix/quạo.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}