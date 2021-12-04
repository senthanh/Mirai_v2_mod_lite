const fs = require("fs");
module.exports.config = {
	name: "3107",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MinhQuang - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("3107")==0 || (event.body.indexOf("3107")==0)) {
		var msg = {
				body: "nhạc đây nè !!",
				attachment: fs.createReadStream(__dirname + `/noprefix/3107.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}