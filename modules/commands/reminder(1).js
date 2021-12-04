module.exports.config = {
	name: "reminder",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "CatalizCS",
	description: "Nhắc nhở bạn về việc gì đấy trong khoảng thời gian cố định",
	commandCategory: "timer",
	usages: "reminder [Time] [Text] ",
	cooldowns: 5,
	info: [
		{
			key: 'Time',
			prompt: 'Là thời gian bạn đặt để nhắc lại sau khoảng nào đó, theo đơn vị giây(s)',
			type: 'Number',
			example: '300'
		},
		{
			key: 'Text',
			prompt: 'Là phần nội dung nhắn lại sau khoảng thời gian',
			type: 'Văn bản',
			example: 'Đi ngủ'
		}
	]
};

module.exports.run = async function({ api, event, args, Users }) {
	const time = args[0];
	const text = args.join(" ").replace(time, "");
	if (isNaN(time)) return api.sendMessage(`thời gian bạn nhập không phải là một con số!`, event.threadID, event.messageID);
	const display = time > 59 ? `${time / 60} phút` : `${time} giây`;
	api.sendMessage(`tôi sẽ nhắc bạn sau: ${display}`, event.threadID, event.messageID);
	await new Promise(resolve => setTimeout(resolve, time * 1000));
	var value = await api.getThreadInfo(event.threadID);
	if (!(value.nicknames)[event.userID]) value = (await Users.getInfo(event.senderID)).name;
	else value = (value.nicknames)[event.senderID];
	return api.sendMessage({
	body: `${(text) ? value + ", bạn đã để lại lời nhắn như sau:" + text : value + ", hình như bạn yêu cầu tôi nhắc bạn làm việc gì đó thì phải?"}`,
		mentions: [{
			tag: value,
			id: event.senderID
		}]
	}, event.threadID, event.messageID);
}