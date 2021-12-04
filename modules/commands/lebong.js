module.exports.config = {
	name: "bống",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Ảnh jimmy",
	commandCategory: "Hình Ảnh",
	usages: "Lê Bống",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://vinhnguyenofficial.ga/lebong-1.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Ảnh Lê Bống 🥳🥳`,
						attachment: fs.createReadStream(__dirname + `/cache/bong.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/bong.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/bong.${ext}`)).on("close", callback);
			})
}