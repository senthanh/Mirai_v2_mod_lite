module.exports.config = {
    name: "giangdaoly",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Tuan Linh",
    description: "Tag liên tục người bạn tag trong 5 lần\nCó thể gọi là giảng đạo lý",
    commandCategory: "group",
    usages: "giangdaoly @mention",
    cooldowns: 90,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag 1 người bạn muốn giảng đạo lý", event.threadID);
    let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu gọi hồn!");
setTimeout(() => {a({body: "" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Nếu bạn không mua được cái gì bằng tiền, bạn hãy tin rằng nó sẽ mua được bằng…nhiều tiền hơn." + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: " Ôm hôn chỉ là tình bạn, vượt quá giới hạn mới là tình yêu." + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Không có người phụ nữ xấu, chỉ có người phụ nữ…không đẹp" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Bom nguyên tử là phát minh để…kết thúc các phát minh khác." + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "1 cô gái đứng trước tôi mà cúi mặt xuống có nghĩa là cô ấy đang thẹn thùng vì thích tôi, còn nếu tôi mà cúi xuống trước mặt 1 cô gái thì đơn giản là tôi thích…cặp đùi của cô ấy." + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Đoàn Kết là chết cả đoàn." + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Yêu nhau là phải được sờ. Không cho lại bảo giả vờ yêu nhau." + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Cười Nhiều Quá Cho Lòi Tiền Ra." + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Đi một ngày đàng…Gặp toàn hàng ngon…!" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Người tốt thì nhiều, mà người biết điều thì ít…" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Sống chết có nhau, ốm đâu kệ cụ mày…" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Vạn sự khởi đầu nan. Gian nan nản." + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: " Dân thường chơi đẹp đè bẹp dân chơi…" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé để t soạn lyrics giảng đạo lý mày" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "Ở Xã Hội Này" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Chỉ Có Làm" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "Chịu Khó" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "Cần Cù Thì Bù Siêng Năng" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("Chỉ Có Làm Mới Có Ăn")} , 90000);
setTimeout(() => {a({body: "Cái Loại Không Làm Mà Đòi Có Ăn " + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "Thì Ăn Đầu Puồi , Ăn Cứt" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "Nhặt Được Của Rơi Thì Còn Cái Nịt Nhé , Bye Hết Rồi Nhé :))" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("Chào tạm biệt 🥺 lew lew")} , 110000);
 }