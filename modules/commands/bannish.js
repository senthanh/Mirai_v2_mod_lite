module.exports.config = {
    name: "banish",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ManhG",
    description: "banish zalgo",
    commandCategory: "game",
    depndencies: {
      "to-zalgo": "",
      "to-zalgo/banish":""
    },
    usages: "<text>",
    cooldowns: 5
  };
  
  module.exports.run = ({ api, event, args }) => {
    var zalgo = require('to-zalgo')
    var banish = require('to-zalgo/banish')
  
    //var evil = zalgo(zalgo(args.join(" ")));
    return api.sendMessage(banish(args.join(" ")), event.threadID, event.messageID);
  }