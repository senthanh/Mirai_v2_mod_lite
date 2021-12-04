const fs = require("fs");
module.exports.config = {
	name: "ơ",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ơ")==0 || (event.body.indexOf("ơ")==0)) {
		var msg = {
				body: "Ơ...",
				attachment: fs.createReadStream(__dirname + `/noprefix/ô.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}