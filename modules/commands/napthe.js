const fs = require("fs");
module.exports.config = {
	name: "nạp thẻ",
    version: "1.0.0",
	hasPermssion: 0,
	credits: "TuanLinh", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "nạp thẻ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("nạp thẻ")==0 || (event.body.indexOf("nạp thẻ")==0)) {
		var msg = {
				body: "Nạp thẻ cc , bố mẹ đi làm để mày lấy trộm tiền nạp fai fai à ?",
				attachment: fs.createReadStream(__dirname + `/noprefix/`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}