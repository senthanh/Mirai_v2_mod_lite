﻿module.exports.config = {
	name: "cadao",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "VanHung (TrungKien fix)",
	description: "Ca Dao Việt Nam",
	commandCategory: "News",
	usages: "cadao",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
const axios = require('axios');
const request = require('request');
const fs = require("fs");
const fetch = global.nodemodule["node-fetch"];
var fetchcd = await fetch("https://raw.githubusercontent.com/HerokeyVN/API_Ca_Dao/main/CaDao.js")
var jsoncd =  await fetchcd.json()
	axios.get('https://anime.ttktrungkien.repl.co/').then(res => {
    let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
			 api.sendMessage({
				body: `Ca dao Việt Nam:\n﹤ ${jsoncd.data[String(Math.floor(Math.random() * 268) + 1)]} ﹥`,
						attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}
