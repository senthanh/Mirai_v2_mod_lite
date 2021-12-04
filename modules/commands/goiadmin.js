module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Không cần dấu lệnh",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "") {
    var aid = ["100024624489689"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Tag Admin có gì ko?","Sao?? Làm ơn nhắn qua mess hoặc zalo để liên hệ ông chủ!!","Sao gọi chủ tôi có việc gì?","Hiện ông chủ tôi đang bận hãy sử dụng callad để liên hệ","Hãy dùng lệnh ad hoặc adm để biết thông tin liên hệ chủ tôi","Tag nữa ăn đấm","Tag làm gì?","Sao? Tag có việc gì?","Gọi vợ chồng anh/cô ấy có việc gì?","Thích tag ko :)","Tag gì lắm vậy? Bộ ko cho chủ tao xin phút gây bình yên à?","Sao tag có việc gì ngồi xuống uống tách trà tâm sự","Anh/cô ấy đang bận ? Có chi ko?","Hiện tại ông/bà chủ đang bận, có gì để lại tin nhắn qua người đó !!","Hãy dùng callad để liên hệ với admin >,<"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }