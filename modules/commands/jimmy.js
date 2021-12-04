module.exports.config = {
	name: "jimmy",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Thanh dz",
	description: "Random ảnh Jimmy xinh nhất Việt Nam :))",
	commandCategory: "hình ảnh",
	usages: "jimmy",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://jimmy.ocvat2810.repl.co').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/jimmy.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/jimmy.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/jimmy.${ext}`)).on("close", callback);
			})
}