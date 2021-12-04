module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Mirai Team",
	description: "Thông báo bot hoặc người rời khỏi nhóm",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "tự rời" : "bị quản trị viên đá";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `57261090_448218072596939_2786232064729415680_n.gif`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "𝑁𝑔𝑢̛𝑜̛̀𝑖 𝑑𝑢̀𝑛𝑔 {name} 𝑉𝑖̀ 𝑘ℎ𝑜̂𝑛𝑔 𝑡𝑎́𝑛 đ𝑢̛𝑜̛̣𝑐 𝑒𝑚 𝑛𝑎̀𝑜 𝑛𝑒̂𝑛 đ𝑎̃ {type} 𝑘ℎ𝑜̉𝑖 𝑛ℎ𝑜́𝑚 🤫" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}