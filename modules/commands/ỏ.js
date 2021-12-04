const fs = require("fs");
module.exports.config = {
	name: "ỏ",
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
	if (event.body.indexOf("ỏ")==0 || (event.body.indexOf("Ỏ")==0)) {
		var msg = {
				body: "Thư giãn xíu nào",
				attachment: fs.createReadStream(__dirname + `/noprefix/o.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}