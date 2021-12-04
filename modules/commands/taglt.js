module.exports.config = {
    name: "taglt",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "VanHung & Dựa trên demo của NTKhang",
    description: "Tag liên tục người bạn tag trong nhiều lần\nCó thể gọi là gọi hồn người đó",
    commandCategory: "group",
    usages: "@mention",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn gọi hồn", event.threadID);
    let data = await api.getUserInfo(mention);
    let name = data[parseInt(mention)].name;
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
    a("Bắt đầu gọi hồn!");
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 3000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 7000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 11000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 15000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 20000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 24000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 28000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 32000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 36000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 40000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 44000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 48000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 52000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 56000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 60000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 64000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 67000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 69000);
    setTimeout(() => {a({body: "Ra đây chơi với em" + " " + name, mentions: arraytag})} , 71000);
    setTimeout(() => {a({body: "😢Ra đây con lợn kia😢😢😢😢😢" + " " + name, mentions: arraytag})} , 73000);
}
