module.exports.config = {
   name: "upfile",
     version: "1.0.0",
       hasPermssion: 1,
         credits: "CallmeSun",
           description: "Kiểm tra thông tin admin bot.",
             commandCategory: "admin",
               usages: "",
                 cooldowns: 5,
                   dependencies: {
                       "request":"",
                           "fs-extra":"",
                               "axios":""
                                 }
                                 };

           module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
                const axios = global.nodemodule["axios"];
                const request = global.nodemodule["request"];
                const fs = global.nodemodule["fs-extra"];
                var link = [ ];
                var callback = () => api.sendMessage({body:`\n» Link upfile của CFC «\n\n https://drive.google.com/folderview?id=1nVk7lbrLF3-XpS2C11jlRtIfa1tpiv4O `,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
                                             return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
                                                };