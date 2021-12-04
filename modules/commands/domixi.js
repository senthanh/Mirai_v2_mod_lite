module.exports.config = {
	name: "domixi",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "JRT",
	description: "Random ảnh Mixi :))",
	commandCategory: "random-img",
	usages: "domixi",
	cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://mixi.hungdz30cm.repl.co/').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/domixi.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/domixi.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/domixi.${ext}`)).on("close", callback);
			})
}