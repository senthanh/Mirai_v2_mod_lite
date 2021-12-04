const fs = require("fs");
module.exports.config = {
name: "Đmm",
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
    if (!fs.existsSync(dirMaterial + "đmm.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/125184322_4703663966371347_9190517229257060527_n.mp4/video-1631522961.mp4?_nc_cat=103&ccb=1-5&_nc_sid=060d78&_nc_ohc=ElN4_lwUh8UAX8m5Iyt&vabr=1635104&_nc_ht=video.xx&oh=5c9fc24d1812b17fa0cc4f696cb4098e&oe=61401990&dl=1").pipe(fs.createWriteStream(dirMaterial + "đmm.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Đmm")==0 || (event.body.indexOf("đmm")==0)){
	  var msg = {
				body: "Địt mẹ mày",
				attachment: fs.createReadStream(__dirname + `/noprefix/đmm.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
