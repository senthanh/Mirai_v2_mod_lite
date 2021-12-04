module.exports.config = {
name: "tagcc",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "JRT",
 description: "Tag adm thì ăn đấm nha",
 commandCategory: "Không dùng dấu lệnh",
 usages: "",
 cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
 var { threadID, messageID } = event;
        var tl = ["Tag nữa ăn đấm","Tag làm gì?","Sao? Tag có việc gì?","Gọi vợ chồng anh/cô ấy có việc gì?","Thích tag ko :)","Tag gì lắm vậy? Bộ ko cho chủ tao xin phút gây bình yên à?","Sao tag có việc gì ngồi xuống uống tách trà tâm sự","Anh/cô ấy đang bận ? Có chi ko?","Hiện tại ông/bà chủ đang bận, có gì để lại tin nhắn qua người đó !!"];
        var rand = tl[Math.floor(Math.random() * tl.length)];
 if (event.body.indexOf("@Nguyễn Hải Đăng")==0 || (event.body.indexOf("@Hà Nhung")==0)) {         //thay tên vào
  var msg = {
    body: rand
   }
   return api.sendMessage(msg, threadID, messageID);
  }
 }
 module.exports.run = function({ api, event, client, __GLOBAL }) {

}