const fs = require("fs");
module.exports.config = {
name: "theNight",
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
    if (!fs.existsSync(dirMaterial + "thenight.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/10000000_4196673340401861_4839088672520579553_n.mp4/video-1631424643.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=fQszEFQH9u4AX-Cyl8q&_nc_oc=AQnbPkEfYhwDNXKHtzPNAdL6Eoa_CxHqRg42Qv9PDCrv6TUBLw_pyxTD1sXeTcXcQfQ&vabr=829746&_nc_ht=video.xx&oh=084386626c8ead0ae0f0e6406b3c6873&oe=613EC156&dl=1").pipe(fs.createWriteStream(dirMaterial + "thenight.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("theNight")==0 || (event.body.indexOf("theNight")==0)){
	  var msg = {
				body: "Nhạc hay siêu cấp vip pro",
				attachment: fs.createReadStream(__dirname + `/noprefix/thenight.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
