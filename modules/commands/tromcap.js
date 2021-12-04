const fs = require("fs");
module.exports.config = {
name: "trom",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Quốc Anh",
	description: "ko nên trộm cắp ::)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat trộm cắp",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf(" fake")==0 || (event.body.indexOf("trộm cắp")==0)||(event.body.indexOf("Steal")==0) || (event.body.indexOf ("steal")==0)||(event.body.indexOf ("cắp")==0)){
		var msg = {
				body: "Không nên trộm cắp......😌😇",
				attachment: fs.createReadStream(__dirname + `/noprefix/tromcap.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
