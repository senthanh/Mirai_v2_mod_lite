module.exports.config = {
	name: "thinh",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VĐT&NTH",
	description: "Thả thính",
	commandCategory: "other",
	usages: "thính",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = global.nodemodule["axios"];
const res = await axios.get(`http://le31.glitch.me/poem`);
var thính = res.data.data;
return api.sendMessage(` ${thính} `, event.threadID, event.messageID)
}