const fs = require("fs");
module.exports.config = {
	name: "người âm phủ",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "mQUANG - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Yo Yo",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("người âm phủ")==0 || (event.body.indexOf("người âm phủ")==0)) {
		var msg = {
				body: "nghe đi hay lắm!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/nguoiamphu.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}