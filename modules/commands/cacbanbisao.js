const fs = require("fs");
module.exports.config = {
name: "Các bạn bị làm sao ý",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Các bạn bị làm sao ý",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "cacban.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/226291359_5872348289504211_6365050685058896102_n.mp4/video-1631351494.mp4?_nc_cat=102&ccb=1-5&_nc_sid=060d78&_nc_ohc=6o_z5POXIJIAX_PL1pP&vabr=603950&_nc_ht=video.xx&oh=72651ea65513bee8aedcb97eee71b0d5&oe=613D636C&dl=1").pipe(fs.createWriteStream(dirMaterial + "cacban.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Các bạn bị sao ý")==0 || (event.body.indexOf("Các bạn bị sao ý")==0)){
	  var msg = {
				body: "Đúng Các bạn bị sao ý",
				attachment: fs.createReadStream(__dirname + `/noprefix/cacban.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
