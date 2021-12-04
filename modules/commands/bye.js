const fs = require("fs");
module.exports.config = {
	name: "hacker",
    version: "1.0.0",
	hasPermssion: 0,
	credits: "TuanLinh", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Hacker",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Hacker")==0 || (event.body.indexOf("Hacker")==0 || (event.body.indexOf("Hacker")==0 || (event.body.indexOf("Hacker")==0)))) {
		var msg = {
				body: "Oh! Chào bạn tôi là một haccu cực pzo vjp =))",
				attachment: fs.createReadStream(__dirname + `/noprefix/hacker.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}