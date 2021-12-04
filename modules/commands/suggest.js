//idea by Adrestia Croimoux
//must have the dictionary module
module.exports.config = {
	name: "suggest",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DungUwU",
	description: "random tìm kiếm 1 từ nào đó trên từ điển",
	commandCategory: "study",
  	cooldowns: 5
}

module.exports.run = ({api,event}) => {
  require('axios').get('https://raw.githubusercontent.com/meetDeveloper/freeDictionaryAPI/master/meta/wordList/english.txt').then(res => {
    let list = res.data.split('\n');
    let rand = list[Math.floor(Math.random()*list.length)];
    let args = rand.split(' ');
    require('./dictionary').run({api,event,args});
  })
}
