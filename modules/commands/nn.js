const fs = require("fs");
module.exports.config = {
name: "ngu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Duck",
	description: "ngủ ngon",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat ngủ ngon",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ngu")==0 || (event.body.indexOf("Ngu")==0)) {
		var msg = {
				body: "Chúc bạn ngủ ngonnn !",
				attachment: fs.createReadStream(__dirname + `/noprefix/ngủngon`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
