module.exports.config = {
	name: "boxemoji",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "HungCatMoi",
	description: "Đổi Emoji nhóm của bạn",
	commandCategory: "Box", 
	usages: "boxemoji [name]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var emoji = args.join(" ")
	if (!emoji) api.sendMessage("Bạn chưa nhập Emoji 💩💩", event.threadID, event.messageID)
	else api.changeThreadEmoji(emoji, event.threadID, () => api.sendMessage(`🔨 Bot đã đổi thành công Emoji thành: ${emoji}`, event.threadID, event.messageID));
}