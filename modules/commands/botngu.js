const fs = require("fs");
module.exports.config = {
name: "Bot ngu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Quốc Anh",
	description: "Ngủ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bot l")==0 || (event.body.indexOf("Bot l")==0) || (event.body.indexOf("bot nc")==0) || (event.body.indexOf("Bot nc")==0) || (event.body.indexOf("bot ngu")==0) || (event.body.indexOf("Bot ngu")==0)) {
		var msg = {
				body: "Thông báo này sẽ gửi tới admin lí do bạn chửi bot:  nếu bạn có lạm dụng bot hay spam bot ad sẽ cho nhóm box vào tin nhắn spam hoặc sẽ ban chết cụ mày cho luônluôn cho nghỉ sài nhá!🦄💜",
				attachment: fs.createReadStream(__dirname + `/noprefix/botngu.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}