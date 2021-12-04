const fs = require("fs");
module.exports.config = {
name: "ngu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Duck",
	description: " bạn là nhất r :))",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat bạn là nhất",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bạn là nhất")==0 || (event.body.indexOf("bạn là nhất")==0)) {
		var msg = {
				body: "Bạn là nhất !",
				attachment: fs.createReadStream(__dirname + `/noprefix/nhấtbạn.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
