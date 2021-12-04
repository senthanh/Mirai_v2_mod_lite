module.exports.config = {
	name: "avts",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hidden",
	description: "avts",
	commandCategory: "Random ảnh ...",
	usages: "avts [Text]",
	cooldowns: 1,
	
	};
			
module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/avts.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/avts.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/avts.${ext}`)).on("close", callback);
			})
}