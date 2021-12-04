const fs = require('fs');
module.exports.config = {
	name: 'quê',
	version: '1.0.1',
	hasPermssion: 0,
	credits: 'đc edit bởi tân tân',
	description: 'quê',
	commandCategory: 'Không cần dấu lệnh',
	usages: 'noprefix',
	cooldowns: 5
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indequêquê == 0 || event.body.indexOf('con sông quê') == 0) {
		var msg = {
			body: 'lêu lêu quê ',
			attachment: fs.createReadStream(__dirname + `/cache/consôngquê.mp4`)
		};
		return api.sendMessage(msg, threadID, messageID);
	}
};
module.exports.run = function({ api, event, client, __GLOBAL }) {};
