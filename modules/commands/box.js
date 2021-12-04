module.exports.config = {
  name: "box",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "manhIT",
  description: "Các tag của box: info, id, emoji, name, image",
  commandCategory: "Group",
  usages: "[info / id / name / emoji / image]",
  cooldowns: 5,

};
module.exports.run = async({ event, api, args, Currencies, Users, reminder }) => {
  var request = global.nodemodule["request"];
  var fs = global.nodemodule["fs-extra"];

  var input = args[0];

  //if (!input == "") { api.sendMessage("Vui lòng nhập nhập đúng cú pháp: /box [info, id, emoji, image, name]"), event.threadID, event.messageID};
if (args.length == 0) api.sendMessage("Lỗi cú pháp: box [info, id, emoji, image, name]", event.threadID, event.messageID);
  
  if (input == "info") {
      let threadInfo = (await api.getThreadInfo(event.threadID));
      let sex = threadInfo.approvalMode;
      var pd = sex == false ? "Đang tắt" : sex == true ? "Đang bật" : "Không phải Thread";
      var name = threadInfo.name;
      let countMess = threadInfo.messageCount;
      let num = threadInfo.adminIDs.length;
      var boy = [];
      var nu = [];
      for (let i in threadInfo.userInfo) {
          var gei = threadInfo.userInfo[i].gender;
          var emoji = threadInfo.emoji;
          if (gei == "MALE") { boy.push(i) } else if (gei == "FEMALE") { nu.push(i) }
      }
      var callback = () => api.sendMessage({ body: `🏷Tên box: ${name} \n🧩TID: ${event.threadID}\n💸Emoji: ${emoji}\n📩Số tin nhắn: ${countMess}\n👻Admin: ${num}\n🐸Số thành viên: ${threadInfo.participantIDs.length}\n👩🏻‍🦰Nam: ${boy.length}\n👨🏻Nữ: ${nu.length}\nPhê duyệt nhóm: ${pd}`, attachment: fs.createReadStream(__dirname + "/cache/2.png") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2.png"));
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname + '/cache/2.png')).on('close', () => callback());
  }

  if (input == "id") {
      return api.sendMessage(`${event.threadID}`, event.threadID, event.messageID);
  }

if (input == "name") {
      var name = args.join(' ').slice(4, 99)
      return api.setTitle(`${name} `, event.threadID, event.messagaID);
  }

  if (input == "emoji") {
      var emoji = args[0];
      api.changeThreadEmoji(`${args[1]}`, event.threadID, event.messagaID);
  }

  if (input == "image") {
      if (event.messageReply) {
          var url = event.messageReply.attachments[0].url;
      } else {
          var url = args[1];
      }
      var callback = () => api.changeGroupImage(fs.createReadStream(__dirname + "/cache/1.png"), event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
      return request(encodeURI(url)).pipe(fs.createWriteStream(__dirname + '/cache/1.png')).on('close', () => callback());
  }

/*
***LIST BOX***
var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
  var listthread = [];
  for (var groupInfo of list) {
      let data = (await api.getThreadInfo(groupInfo.threadID));
      listthread.push({
          id: groupInfo.threadID,
          name: groupInfo.name,
          sotv: data.userInfo.length,
      });
  } //for
  var listbox = listthread.sort((a, b) => {
      if (a.sotv > b.sotv) return -1;
      if (a.sotv < b.sotv) return 1;
  });

  let msg = '',
      i = 1;
  var groupid = [];
  if (input == "list") {
      for (var group of listbox) {
    msg += `${i++}. ${group.name}\n🧩TID: ${group.id}\n🐸Thành viên: ${group.sotv}\n\n`;
    groupid.push(group.id);
  }
  api.sendMessage(msg, event.threadID);
  }*/

//else api.sendMessage("Vui lòng nhập nhập đúng cú pháp: box [info, id, emoji, image, name]", event.threadID);

}