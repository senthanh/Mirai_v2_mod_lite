const fs = require("fs");
module.exports.config = {
name: "giảng hoà",
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
    if (!fs.existsSync(dirMaterial + "hoa.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/241569996_6276459065728177_3782095740447342003_n.mp4/video-1631456613.mp4?_nc_cat=104&ccb=1-5&_nc_sid=060d78&_nc_ohc=ur-o5asVM3cAX_0j0g6&vabr=464666&_nc_ht=video.xx&oh=1417c87b22276a180ed601c6c23f9694&oe=613F1EAA&dl=1").pipe(fs.createWriteStream(dirMaterial + "hoa.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("giảng hoà")==0 || (event.body.indexOf("giảng hoà")==0)){
	  var msg = {
				body: "Anh bạn à",
				attachment: fs.createReadStream(__dirname + `/noprefix/hoa.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
