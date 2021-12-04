const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "noprefix",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Quốc Anh",
  description: "không cần dấu lệnh",
  commandCategory: "All lệnh",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = function({ api, event, args, Threads }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["chào bạn tôi là bot của Quốc Anh", "bạn gọi tôi có việc gì?", "tôi yêu bạn vai lon", "Yêu em <3", "Hi, chào con vợ bé:3", "Vợ gọi có việc gì không?", "Sử dụng .callad để liên lạc với admin!"];
  var rand = tl[Math.floor(Math.random() * tl.length)];

  if ((event.body.toLowerCase() == "bot ngu")) {
    data.reason = reason || null;
    data.dateAdded = time;
    global.data.threadBanned.set(idgr, { reason: data.reason, dateAdded: data.dateAdded });
    return api.sendMessage(`Nhóm ${idgr} của bạn đã bị ban, không thể sử dụng bot!, lý do chửi bot (vì bạn ngu như cc đéo chịu hỏi ai cách sài lệnh mà chửi bot) `,threadID);
  };

  if ((event.body.toLowerCase() == "haha") || (event.body.toLowerCase() == "Haha")) {
    return api.sendMessage("HHaha quần què :)", threadID);
  };

  if ((event.body.toLowerCase() == "@Anh Quốc") || (event.body.toLowerCase() == "@Quốc Anh")) {
    return api.sendMessage("Admin t đi đá phò r gọi cc\nBt dùng .callad ko ngu wa' chắc yêu admin bot r😏", threadID);
  };

  if ((event.body.toLowerCase() == "bot ơi") || (event.body.toLowerCase() == "bot oi")) {
    return api.sendMessage("Dạ, có em đây, yêu admin em không mà gọi <3. hmm...", threadID);
  };

  if ((event.body.toLowerCase() == "alo") || (event.body.toLowerCase() == "Alo")) {
     return api.sendMessage("Lô cc , tương tác đi con vợ 🤑", threadID);
  };

  if ((event.body.toLowerCase() == "yêu bot") || (event.body.toLowerCase() == "yeu bot")) {
    return api.sendMessage("Hmm... Bot ko biết yêu, yêu admin bot kia kìa :))", threadID);
  };

  if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "Hello")) {
    return api.sendMessage("Chào bạn , chúc bạn 1 ngày mới tốt lành❤️", threadID);
  };
  
  if ((event.body.toLowerCase() == "Chào") || (event.body.toLowerCase() == "chào")) {
    return api.sendMessage("chào lại nè con vợ ơi 🤑", threadID);
  };
  
  if ((event.body.toLowerCase() == "Ngủ") || (event.body.toLowerCase() == "ngủ")) {
    return api.sendMessage("Ngủ nhớ mơ thấy admin nha iuuuuuu❤️", threadID);
  };r4

  if ((event.body.toLowerCase() == "bot là gì") || (event.body.toLowerCase() == "Bot là gì")) {
 return api.sendMessage("Bot️chat fb là một phần mềm được lập trình cho phép nó có thể can thiệp vào một số tính năng của mà chúng ta không làm được bot có rất nhiều tính năng thú vị nên đừng có chửi bot khi mà bạn bị ngu nha :))) ", threadID);
  };

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0)) {
    var msg = {
      body: rand
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }