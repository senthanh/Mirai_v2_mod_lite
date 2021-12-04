const fs = require("fs");
module.exports.config = {
	name: "DayLaHuy",
    version: "1.0.0",
	hasPermssion: 0,
	credits: "TuanLinh", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Đây Là Huy",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Đây Là Huy")==0 || (event.body.indexOf("Đây Là Huy")==0 || (event.body.indexOf("Đây Là Huy")==0 || (event.body.indexOf("Đây Là Huy")==0)))) {
		var msg = {
				body: "Các bạn có thấy Huy pro không :))",
				attachment: fs.createReadStream(__dirname + `/noprefix/daylahuy.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}