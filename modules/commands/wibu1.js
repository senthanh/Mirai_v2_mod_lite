module.exports.config = {
	name: "wibu1",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Tuan Linh)",
	description: "Ừ tao là wibu đấy thì sao?",
	commandCategory: "wibu1",
	cooldowns: 0
};

module.exports.run = ({ event, api }) => api.sendMessage(`- địt mẹ wibu
- Ava của mày là anime, ý kiến mày đéo đc tính
- Wibu chúng mày làm đéo gì có quyền công dân
- Lũ địt gối thảm hại
Dù có dùng câu nào thì người nói chắc chắn đã cãi thua và nghĩ rằng mình rút lui trong vinh quang (thật ra nó nhục vãi lồn). Bình thường thì không sao chứ đụng nhầm người đã hóa Chaos rồi thì xác định thằng đó sẽ bị bash cho sấp mặt.`, event.threadID, event.messageID);