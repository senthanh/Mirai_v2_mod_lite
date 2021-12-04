module.exports.config = {
	name: "jav",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trung Kiên",
	description: "Random ảnh không dành cho các bạn nữ",
	commandCategory: "NSFW",
	usages: "jav",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://trungkien.tk/apiv1/tw.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({body: "Em thật là ngọt nước 🍒🍑🤤",
						attachment: fs.createReadStream(__dirname + `/cache/1.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/1.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/1.${ext}`)).on("close", callback);
			})
}