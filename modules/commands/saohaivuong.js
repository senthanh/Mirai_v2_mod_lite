/** Module được clone ra từ 1 module gốc ( Không quan trọng là "procoder hay gì cả" mà quan trọng là ý tưởng làm ra nó. Nếu có module ngon hơn thì hãy dùng module đó ! Xin đừng đánh giá **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "saohaivuong",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Nguyễn Duy Quân",
  description: "Thông tin về các hành tinh trong hệ mặt trời",
  commandCategory: "Solar System",
  usages: "saohaivuong",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
	var link = [
"https://i.khoahoc.tv/photos/image/2018/11/28/sao-hai-vuong.jpg",
  ];
   var callback = () => api.sendMessage({body:`Sao Hải Vương (Neptune) hay Hải Vương tinh (chữ Hán: 海王星) là hành tinh thứ tám và xa nhất tính từ Mặt Trời trong Hệ Mặt Trời. Nó là hành tinh lớn thứ tư về đường kính và lớn thứ ba về khối lượng. Sao Hải Vương có khối lượng riêng lớn nhất trong số các hành tinh khí trong hệ Mặt trời. Sao Hải Vương có khối lượng gấp 17 lần khối lượng của Trái Đất và hơi lớn hơn khối lượng của Sao Thiên Vương (xấp xỉ bằng 15 lần của Trái Đất). Sao Hải Vương quay trên quỹ đạo quanh Mặt Trời ở khoảng cách trung bình 30,1 AU, bằng khoảng 30 lần khoảng cách Trái Đất - Mặt Trời. Sao Hải Vương được đặt tên theo vị thần biển cả của người La Mã (Neptune). Nó có ký hiệu thiên văn là ♆, là biểu tượng cách điệu cây đinh ba của thần Neptune.
Sao Hải Vương là hành tinh đầu tiên được tìm thấy bằng tính toán lý thuyết. Dựa vào sự nhiễu loạn bất thường của quỹ đạo Sao Thiên Vương, nhà thiên văn Alexis Bouvard đã kết luận rằng quỹ đạo của nó bị nhiễu loạn do tương tác hấp dẫn với một hành tinh nào đó. Vào ngày 23 tháng 9 năm 1846, nhà thiên văn Johann Galle đã phát hiện ra Sao Hải Vương ở vị trí lệch 1 độ so với tiên đoán của Urbain Le Verrier. Sau đó ít lâu, người ta cũng khám phá ra Triton, vệ tinh lớn nhất của sao Hải Vương, trong khi 13 vệ tinh còn lại của nó chỉ được phát hiện trong thế kỷ XX. Cho tới nay, tàu không gian Voyager 2 là tàu duy nhất bay qua Sao Hải Vương vào ngày 25 tháng 8 năm 1989.
Sao Hải Vương có cấu tạo tương tự như Sao Thiên Vương, nhưng lại khác biệt với những hành tinh khí khổng lồ như Sao Mộc và Sao Thổ. Khí quyển của sao Hải Vương chứa thành phần cơ bản là hiđrô và heli, cùng một số ít các hydrocarbon và có lẽ cả nitơ, tương tự như của Sao Mộc hay Sao Thổ. Tuy nhiên khí quyển của nó chứa tỷ lệ lớn hơn các phân tử "băng" như nước, amonia, và mêtan. Do đó các nhà thiên văn thỉnh thoảng phân loại Sao Thiên Vương và Sao Hải Vương thành các hành tinh băng đá khổng lồ để nhấn mạnh sự khác biệt này. Bên trong Sao Hải Vương chứa chủ yếu băng và đá, giống như Sao Thiên Vương. Lõi hành tinh có thể có bề mặt tuy rắn nhưng nhiệt độ của nó có thể cao tới hàng nghìn độ và áp suất rất lớn. Khí mêtan trong tầng ngoài khí quyển là nguyên nhân Sao Hải Vương hiện lên với màu xanh lam.Trái ngược với bầu khí quyển mờ đặc và gần như đồng màu của Sao Thiên Vương, khí quyển của Sao Hải Vương có những vùng hoạt động mạnh và dễ nhận thấy. Năm 1989, tàu Voyager 2 khi bay qua Sao Hải Vương đã chụp được hình ảnh của Vết Tối Lớn trên bán cầu nam có kích thước tương đương với Vết Đỏ Lớn của Sao Mộc. Những vùng hoạt động thời tiết này được duy trì bởi những cơn gió với tốc độ lên tới 2.100 kilômét trên giờ, mạnh nhất trên khí quyển trong các hành tinh thuộc Hệ Mặt Trời. Do cách rất xa Mặt Trời nên lớp khí quyển ngoài cùng của Sao Hải Vương là một trong những nơi lạnh nhất trong Hệ Mặt Trời. Nhiệt độ của những đám mây trên cao khoảng 55 K (-218 °C) trong khi nhiệt độ tại lõi hành tinh xấp xỉ 5.400 K (5.000 °C). Sao Hải Vương có một hệ thống vành đai mờ và rời rạc (hay những cung), được phát hiện trong thập niên 1960 nhưng chỉ được xác nhận vào năm 1989 bởi Voyager 2.`,attachment: fs.createReadStream(__dirname + "/cache/30.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/30.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/30.jpg")).on("close",() => callback());
   };