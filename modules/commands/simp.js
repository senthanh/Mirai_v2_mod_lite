const fs = require("fs");
module.exports.config = {
name: "simp",
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
    if (!fs.existsSync(dirMaterial + "simp.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/240212480_4287734581315438_1675458528785056222_n.mp4/video-1631523124.mp4?_nc_cat=109&ccb=1-5&_nc_sid=060d78&_nc_ohc=XgthJzQ6aH8AX-mwp7b&vabr=129741&_nc_ht=video.xx&oh=b800c4c6247dec83272c0488367e0e0d&oe=61404A7F&dl=1").pipe(fs.createWriteStream(dirMaterial + "simp.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Simp")==0 || (event.body.indexOf("simp")==0)){
	  var msg = {
				body: "But I love you ",
				attachment: fs.createReadStream(__dirname + `/noprefix/simp.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
