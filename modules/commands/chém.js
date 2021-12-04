const fs = require("fs");
module.exports.config = {
	name: "chém",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Nguyễn Đỗ Xuân Hùng", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("nói nhiều")==0 || (event.body.indexOf("Nói nhiều")==0)) {
		var msg = {
				body: "Chém bome m giờ",
				attachment: fs.createReadStream(__dirname + `/noprefix/chém.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}