/*module.exports.config = {

name: "lyric",

    version: "1.0.0", 

hasPermssion: 0,

credits: "loi",

description: "tìm lời bài hát", 

commandCategory: "Phương tiện",

usages: "lyric [tên ca sĩ] [tên bài hát]",

cooldowns: 5,

    dependencies: ["lyrics-finder"]

};

module.exports.run = async function ({ api, args, event }) {

  const lyricsFinder = require('lyrics-finder');

    let lyrics = await lyricsFinder(args.join(" ")) || "Not Found!";

    console.log(lyrics);

api.sendMessage(`${lyrics}`, event.threadID, event.messageID);

}