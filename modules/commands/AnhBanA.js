const fs = require("fs");
module.exports.config = {
	name: "Anh Bạn À",
    version: "1.0.0",
	hasPermssion: 0,
	credits: "TuanLinh", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Anh Bạn À",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Anh Bạn À")==0 || (event.body.indexOf("Anh Bạn À")==0 || (event.body.indexOf("Anh Bạn À")==0 || (event.body.indexOf("Anh Bạn À")==0)))) {
		var msg = {
				body: "Tôi Có Thể Giảng Hòa Với Bạn Được Không :))",
				attachment: fs.createReadStream(__dirname + `/noprefix/anhbana.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}