module.exports.config = {
	name: "sugar",
	version: "0.0.1-beta",
	hasPermssion: 0,
	credits: "bla bal",
    description: "",
	commandCategory: "Media",
	usages: "Siu 19+",
};


module.exports.run = async({api,event,args,client,Users,__GLOBAL,Currencies}) => {
        let axios = require('axios')
 	    let request = require('request')
 	    let fs = require('fs')
 	    var data = await Currencies.getData(event.senderID);
        var money = data.money
		if(money < 150) api.sendMessage("Bạn cần 1000 đô ?",event.threadID,event.messageID)
        else{
        Currencies.setData(event.senderID, options = {money: money - 1000})

let { data } = await axios.get('http://nsfw.eliric.io/api.php?key=ConCuBeBe');
   var callback = () => api.sendMessage({body:`REQUEST LEFT: ${data.use_left}\r\nSize: ${data.size}\n\r\n-1000 đô !`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);	
 return request(encodeURI(`${data.link}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      }
}
  
      