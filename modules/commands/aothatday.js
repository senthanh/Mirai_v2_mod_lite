const fs = require("fs");
module.exports.config = {
name: "Aỏ thật đấy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "Aỏ thật đấy",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ảo thật đấy")==0 || (event.body.indexOf("ảo chưa")==0)) {
		var msg = {
				body: "địt mẹ mày ảo thật đấy",
				attachment: fs.createReadStream(__dirname + `/noprefix/aothatday.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}