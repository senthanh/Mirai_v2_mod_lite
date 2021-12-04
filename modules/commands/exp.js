module.exports.config = {
	name: "exp",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Kiểm tra số exp của bản thân hoặc người được tag",
	commandCategory: "economy",
	usages: "[Tag]",
	cooldowns: 5
};

module.exports.languages = {
	"vi": {
		"expbanthan": "Số kinh nghiệm bạn đang có: %1 exp",
		"expnguoikhac": "Số kinh nghiệm của %1 hiện đang có là: %2 exp "
	},
	"en": {
		"expbanthan": "Your current experience: %1 exp",
		"expnguoikhac": "%1's current experience: %2 exp."
	}
}

module.exports.run = async function({ api, event, args, Currencies, getText }) {
	const { threadID, messageID, senderID, mentions } = event;

	if (!args[0]) {
		const exp = (await Currencies.getData(senderID)).exp;
		return api.sendMessage(getText("expbanthan", exp), threadID);
	}

	else if (Object.keys(event.mentions).length == 1) {
		var mention = Object.keys(mentions)[0];
		var exp = (await Currencies.getData(mention)).exp;
		if (!exp) exp = 0;
		return api.sendMessage({
			body: getText("expnguoikhac", mentions[mention].replace("@", ""), exp),
			mentions: [{
				tag: mentions[mention].replace("@", ""),
				id: mention
			}]
		}, threadID, messageID);
	}

	else return global.utils.throwError(this.config.name, threadID, messageID);
}
