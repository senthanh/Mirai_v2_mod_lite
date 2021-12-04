const fs = require("fs");
module.exports.config = {
name: "Anh em",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Anh em con cặc",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "anhem.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/241650628_4126041007507211_8478517890028262892_n.mp4/video-1631360301.mp4?_nc_cat=107&ccb=1-5&_nc_sid=060d78&_nc_ohc=qzJ7H_4y8GEAX_iO7wI&vabr=231346&_nc_ht=video.xx&oh=5b0734bde9691eafef3481aa4c959512&oe=613DA5EE&dl=1").pipe(fs.createWriteStream(dirMaterial + "anhem.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Anh em")==0 || (event.body.indexOf("Anh em")==0)){
	  var msg = {
				body: "A em con cặc",
				attachment: fs.createReadStream(__dirname + `/noprefix/anhem.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
