const fs = require("fs");
module.exports.config = {
name: "Canh sườn heo",
	version: "1.0.0",
	hasPermssion: 0,
	description: "món ngon mỏi ngày",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "heo.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/10000000_4716992311665519_2697121882230190937_n.mp4/video-1631520763.mp4?_nc_cat=107&ccb=1-5&_nc_sid=060d78&_nc_ohc=Ln2jv4zQCqQAX8cXctv&vabr=846171&_nc_ht=video.xx&oh=25a38b61988bf1d15aa5107cf894a160&oe=613FF827&dl=1").pipe(fs.createWriteStream(dirMaterial + "heo.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Canh sườn heo")==0 || (event.body.indexOf("canh sườn heo")==0)){
	  var msg = {
				body: "Dành cho ai đảm đang nè",
				attachment: fs.createReadStream(__dirname + `/noprefix/heo.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
