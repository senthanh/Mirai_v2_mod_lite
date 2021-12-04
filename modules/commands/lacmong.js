const fs = require("fs");
module.exports.config = {
name: "lắc mông",
	version: "1.0.0",
	hasPermssion: 0,
	description: "lắc nè",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "lắcmong.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/210166555_4269459333144819_4173009663598116312_n.mp4/video-1631345873.mp4?_nc_cat=106&ccb=1-5&_nc_sid=060d78&_nc_ohc=7EuiSsPH5_QAX-KJYvA&vabr=765190&_nc_ht=video.xx&oh=a7543bb14f65ea2e853bc0ff1b39957c&oe=613D97D7&dl=1").pipe(fs.createWriteStream(dirMaterial + "lắcmong.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lắc mông")==0 || (event.body.indexOf("lắc mông")==0)){
	  var msg = {
				body: "Lắc Mông Nè :33",
				attachment: fs.createReadStream(__dirname + `/noprefix/lắcmong.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
