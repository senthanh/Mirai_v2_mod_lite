module.exports.config = {
  name: "quockhanh",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Yuuki",
  description: "Đếm ngược tới Quốc Khánh nước Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam",
  commandCategory: "Bộ đếm time",
  cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("September 2, 2021 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「Thời gian còn lại cho Quốc Khánh nước Cộng Hòa Xã Hội Chủ Nghĩa Việt Nam」\n» ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây «`, event.threadID, event.messageID);
}