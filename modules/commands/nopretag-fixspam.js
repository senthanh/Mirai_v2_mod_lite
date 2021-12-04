const fs = global.nodemodule["fs-extra"]; //để thêm attachment nếu muốn
module.exports.config = {
    name: "nopre-tag-fixspam",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "manhIT",
    description: "nopre-fixspam",
    commandCategory: "NoPrefix",
    usages: "noprefix",
    cooldowns: 5,
};
module.exports.event = async({ api, event, Users }) => {
    var { threadID, messageID, senderID } = event;
    if (senderID !== "100024624489689") { //chỗ này thay id bot vào
        var mention = Object.keys(event.mentions)[0];
        let tag = event.mentions[mention];
        let output = "Spam bot an lon à"; //câu mà bot rep
        let varinput = ["‎bot ngu", "bot óc chó", "dm bot", "cmm bot"]; //danh sách input
        for (const i of varinput) {
            input = i + tag;
            if (event.body.indexOf(input) == 0 && event.body.length == input.length) {
                return api.sendMessage({
                    body: output + tag,
                    mentions: [{
                        tag: tag.replace("@", ""),
                        id: mention
                    }]
                }, threadID, messageID);
            }
        }
    }
}
module.exports.run = function({}) {}