const fs = require("fs");
module.exports.config = {
name: "burh",
	version: "1.0.1",
	hasPermssion: 0,
	
	description: "bủh",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat burh",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bủh")==0 || (event.body.indexOf("burh")==0)) {
		var msg = {
				body: "Burh......",
				attachment: fs.createReadStream(__dirname + `/noprefix/burh.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
