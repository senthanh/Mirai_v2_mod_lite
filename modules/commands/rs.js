module.exports.config = {
	name: "rs",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Quốc Anh",
	description: "Khởi Động Lại Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("🛠...Loading...🛠                        Đang khởi động lại                                          📥Chờ Tao vài giây sẽ quay lại nhé :33📥",event.threadID, () =>process.exit(1))