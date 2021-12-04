const fs = require("fs");
module.exports.config = {
name: "chúa phù hộ",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Chúa phù hộ em",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "chuaphuho.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/241773352_4225958140850421_2722436132750054304_n.mp4/video-1631545421.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=JSFo6OfSmvcAX963hAO&vabr=225379&_nc_ht=video.xx&oh=ea98929669b634e9491740edf3bf8a9b&oe=61405407&dl=1").pipe(fs.createWriteStream(dirMaterial + "chuphuho.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Chúa phù hộ")==0 || (event.body.indexOf("Chúa phù hộ em nhá")==0)){
	  var msg = {
				body: "không sao không sao chúa phù hộ em chúa phù hộ em",
				attachment: fs.createReadStream(__dirname + `/noprefix/chuphuho.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
