const fs = require("fs");
module.exports.config = {
name: "đánh chết cha",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Hôm nay trời đẹp thế nhờ!!",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "danh.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/241425275_4153419414785668_7351881884253786440_n.mp4/video-1631459015.mp4?_nc_cat=109&ccb=1-5&_nc_sid=060d78&_nc_ohc=N14F3FnU0SAAX_zf5mk&vabr=984333&_nc_ht=video.xx&oh=0743f5a3ca233969431b7b6d49cec464&oe=613F21EA&dl=1").pipe(fs.createWriteStream(dirMaterial + "danh.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("đánh chết cha")==0 || (event.body.indexOf("đánh chết cha")==0)){
	  var msg = {
				body: "Chết mẹ mày nè con",
				attachment: fs.createReadStream(__dirname + `/noprefix/danh.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
