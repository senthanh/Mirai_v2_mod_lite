module.exports.config = {
	name: "mvsex",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Trung Kiên",
	description: "Một chiếc video xinh xắn :<>",
	commandCategory: "NSFW",
	usages: "sexy",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://trungkien.tk/sex.php').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({body: "Đừng thẩm du nhiều quá nha 🍒🍑🤤",
						attachment: fs.createReadStream(__dirname + `/cache/1.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/1.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/1.${ext}`)).on("close", callback);
			})
}