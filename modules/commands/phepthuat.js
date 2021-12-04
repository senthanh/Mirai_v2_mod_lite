const fs = require("fs");
module.exports.config = {
name: "Da đen",
	version: "1.0.0",
	hasPermssion: 0,
	description: "HĂ´m nay trá»�i Ä‘áº¹p tháº¿ nhá»�!!",
	commandCategory: "không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + /noprefix/;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "da.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/241728705_4269174129867912_3922023471087118569_n.mp4/video-1631692015.mp4?_nc_cat=110&ccb=1-5&_nc_sid=060d78&_nc_ohc=kyD9ZFK_AQ0AX8QUWGx&vabr=1038963&_nc_ht=video.xx&oh=5ac8e2cf956b7aa966be06210c42fafe&oe=61428BFF&dl=1").pipe(fs.createWriteStream(dirMaterial + "da.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Da đen")==0 || (event.body.indexOf("da")==0)){
	  var msg = {
				body: "Dám chê tao da đen hả",
				attachment: fs.createReadStream(__dirname + /noprefix/da.mp4)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports. run = function({ api, event, client, __GLOBAL }) {

}