const fs = require("fs");
module.exports.config = {
name: "bốc phét",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Trị ai bốc phét",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "phet.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/97332943_2986440941444315_6516707970658105553_n.mp4/video-1631372109.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=aSNBZsrGencAX_TYcyS&vabr=349049&_nc_ht=video.xx&oh=2be36d12d1ff98fa0146924394906bb2&oe=613E0767&dl=1").pipe(fs.createWriteStream(dirMaterial + "phet.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bốc phét")==0 || (event.body.indexOf("Bốc phét")==0)){
	  var msg = {
				body: "Bớt bốc phét lại đi 🙂",
				attachment: fs.createReadStream(__dirname + `/noprefix/phet.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
