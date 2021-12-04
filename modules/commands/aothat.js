const fs = require("fs");
module.exports.config = {
name: "aothat",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Duck",
	description: "ảo vl ::)",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat ảo",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ảo thật đấy")==0 || (event.body.indexOf("Ảo thật đấy")==0)||(event.body.indexOf("ảo")==0)) {
		var msg = {
				body: "Ảo thuật đấy dmm !",
				attachment: fs.createReadStream(__dirname + `/noprefix/aothuat.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
