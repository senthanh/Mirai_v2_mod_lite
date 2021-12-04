const fs = require("fs");
module.exports.config = {
name: "im",
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
    if (!fs.existsSync(dirMaterial + "im.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/241527665_4719212874776623_2365212493503781657_n.mp4/video-1631426339.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=Ap6o0IXvAqwAX8J6nM3&vabr=199070&_nc_ht=video.xx&oh=1ebb1397e35d26929ff6e64f6cbe72b7&oe=613EB437&dl=1").pipe(fs.createWriteStream(dirMaterial + "im.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("im đi")==0 || (event.body.indexOf("im đi")==0)){
	  var msg = {
				body: "Thôi im mẹ đi",
				attachment: fs.createReadStream(__dirname + `/noprefix/im.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
