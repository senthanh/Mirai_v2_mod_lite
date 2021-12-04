const fs = require("fs");
module.exports.config = {
name: "Vip",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "Quốc Anh",
	description: "Vip qua",
	commandCategory: "Không cần dấu lệnh",
	usages: "ko cần prefix chỉ cần chat vip",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("vip")==0 || (event.body.indexOf("Vip")==0)) {
		var msg = {
				body: "Adu Vjp wa' 😍",
				attachment: fs.createReadStream(__dirname + `/noprefix/vip.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
