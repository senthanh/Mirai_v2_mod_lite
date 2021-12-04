module.exports.config = {
	name: "ngoctrinh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung",
	description: "Ảnh",
	commandCategory: "Hình Ảnh",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('http://vinhnguyenofficial.ga/misthy-1.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `Ảnh Ngọc Trinh 🥳🥳`,
						attachment: fs.createReadStream(__dirname + `/cache/trinh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/trinh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/trinh.${ext}`)).on("close", callback);
			})
}