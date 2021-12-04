const fs = require("fs");
module.exports.config = {
	name: "Ký Ngực Fan 2k3",
    version: "1.0.0",
	hasPermssion: 0,
	credits: "TuanLinh", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Tao Ký Ngực Fan 2k3",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Tao Ký Ngực Fan 2k3")==0 || (event.body.indexOf("Tao Ký Ngực Fan 2k3")==0 || (event.body.indexOf("Tao Ký Ngực Fan 2k3")==0 || (event.body.indexOf("Tao Ký Ngực Fan 2k3")==0)))) {
		var msg = {
				body: "Yea , Tao Ký Ngực Fan 2k3 B)",
				attachment: fs.createReadStream(__dirname + `/noprefix/taokyngucfan2k3.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}