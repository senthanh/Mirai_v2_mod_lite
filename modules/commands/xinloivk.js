module.exports.config = {
    name: "xinloivk",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NTKhang fix by Jukie",
    description: "Xin lỗi vợ yêu 😢🥺",
    commandCategory: "Tình yêu",
    usages: " @tag hoặc noprefix: xin lỗi vk iu @tag",
    cooldowns: 5,
    dependencies: {"fs-extra": "","axios": ""}
  }
    module.exports.run = async function ({ api, args, event, client,Users }) {
      function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));};
      const fs = global.nodemodule["fs-extra"];
      const axios = global.nodemodule["axios"];
      var mention = Object.keys(event.mentions)[0];
      if(!mention) return api.sendMessage("Tag người bạn muốn xin lỗi", event.threadID);
    var emoji = ["♥️","❤️","💛","💚","💙","💜","🖤","💖","💝","💓","💘","💍","🎁","💋","💎","💠","🌈","🌍","🌕","☀️","💑","💞","💗"];
    var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
    let Avatar = (await axios.get( `https://graph.facebook.com/${mention}/picture?width=height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
    let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
      
      var imglove = [];
                  imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
                  imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
    
  
  var _0x8416=["\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var name_1=( await Users[_0x8416[2]](event[_0x8416[1]]))[_0x8416[0]];var name_2=( await Users[_0x8416[2]](mention))[_0x8416[0]]
    
    var arraytag = [];
      arraytag.push({id: event.senderID, tag: name_1});
      arraytag.push({id: mention, tag: name_2});
      var a = function (a) { api.sendMessage(a, event.threadID); }
      a("Anh Yêu Vợ ❤️");
      await delay(2000);
      a("Anh Xin Lỗi Vợ 🥺");
      await delay(2000);
      a("Vợ Đừng Giận Anh Nữa Mà 🥺🥺");
      await delay(2000);
      a("Xin Vui Lòng Đợi 5p Để Vợ Yêu Hết Giận Rồi Nhắn ☘️☘️☘️");
      await delay(2000);
      a("Tha Lỗi Cho Anh Nha Vợ Ơi 🥺😭");
      await delay(2000);
      a({body: name_1+" "+"💓"+" "+name_2, mentions: arraytag, attachment: imglove});
      fs.unlinkSync(__dirname+'/cache/avt.png');
      fs.unlinkSync(__dirname+'/cache/avt2.png');
    };
    
  module.exports.handleEvent = async function({ api, args, event, client,Users }) {
    if(!event.body) return;
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));};
    let {body} = event;
     body = body.toLowerCase();
    var indexOf = function(value) {return body.indexOf(value) != -1};
    if(indexOf("xin lỗi vợ") || indexOf("xin lỗi vk yêu") || indexOf("xin lỗi vợ yêu") || indexOf("xin lỗi vợ iu")) {
      var mention = Object.keys(event.mentions)[0];
      if(!mention) return api.sendMessage("Tag người bạn muốn xin lỗi", event.threadID);
    var emoji = ["♥️","❤️","💛","💚","💙","💜","🖤","💖","💝","💓","💘","💍","🎁","💋","💎","💠","🌈","🌍","🌕","☀️","💑","💞","💗"];
    var random_emoji = emoji[Math.floor(Math.random() * emoji.length)];
    let Avatar = (await axios.get( `https://graph.facebook.com/${mention}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );
    let Avatar2 = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`, { responseType: "arraybuffer" } )).data;
      fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );
      
      var imglove = [];
    imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
    imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));
    
  var _0x8416=["\x6E\x61\x6D\x65","\x73\x65\x6E\x64\x65\x72\x49\x44","\x67\x65\x74\x44\x61\x74\x61"];var name_1=( await Users[_0x8416[2]](event[_0x8416[1]]))[_0x8416[0]];var name_2=( await Users[_0x8416[2]](mention))[_0x8416[0]]
    
    
    var arraytag = [];
      arraytag.push({id: event.senderID, tag: name_1});
      arraytag.push({id: mention, tag: name_2});
      var a = function (a) { api.sendMessage(a, event.threadID); }
      a("Anh Yêu Vợ ❤️");
      await delay(2000);
      a("Anh Xin Lỗi Vợ 🥺");
      await delay(2000);
      a("Vợ Đừng Giận Anh Nữa Mà 🥺🥺");
      await delay(2000);
      a("Xin Vui Lòng Đợi 5p Để Vợ Yêu Hết Giận Rồi Nhắn ☘️☘️☘️");
      await delay(2000);
      a("Tha Lỗi Cho Anh Nha Vợ Ơi 🥺😭");
      await delay(2000);
      a({body: name_1+" "+"💓"+" "+name_2, mentions: arraytag, attachment: imglove});
      fs.unlinkSync(__dirname+'/cache/avt.png');
      fs.unlinkSync(__dirname+'/cache/avt2.png');
    }
  
  }
  