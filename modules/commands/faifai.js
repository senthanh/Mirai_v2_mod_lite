const fs = require("fs");
module.exports.config = {
	name: "fai fai",
    version: "1.0.0",
	hasPermssion: 0,
	credits: "TuanLinh", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Fai Fai",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Fai Fai")==0 || (event.body.indexOf("Fai Fai")==0 || (event.body.indexOf("Fai Fai")==0 || (event.body.indexOf("Fai Fai")==0)))) {
		var msg = {
				body: "Hí ae :))",
				attachment: fs.createReadStream(__dirname + `/noprefix/faifai.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}