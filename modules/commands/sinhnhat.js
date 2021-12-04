module.exports.config = {
 name: "sinhnhatad",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "JRT",
 description: "Đếm ngược tới sinh nhật adminbot",
 commandCategory: "Thông tin adminbot",
 cooldowns: 5
}

module.exports.run = function ({ event, api }) {
    const t = Date.parse("February 26, 2022 07:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );

    return api.sendMessage(`「Đếm ngược tới sinh nhật của adminbot Nguyễn Hải Đăng」\n» ${days} ngày ${hours} tiếng ${minutes} phút ${seconds} giây «`, event.threadID, event.messageID);
}
