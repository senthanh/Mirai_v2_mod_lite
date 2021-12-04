const fs = require("fs");
module.exports.config = {
name: "mèo méo meo",
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
    if (!fs.existsSync(dirMaterial + "meo.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/190054357_4063044850450152_413180072354333292_n.mp4/video-1631521657.mp4?_nc_cat=109&ccb=1-5&_nc_sid=060d78&_nc_ohc=efex5D0kJTUAX_7Ajqq&vabr=760271&_nc_ht=video.xx&oh=051a9ee62f94b6051807399848c0a195&oe=61404C5B&dl=1").pipe(fs.createWriteStream(dirMaterial + "meo.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Mèo ")==0 || (event.body.indexOf("mèo")==0)){
	  var msg = {
				body: "chồng ai vô nhận",
				attachment: fs.createReadStream(__dirname + `/noprefix/meo.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
