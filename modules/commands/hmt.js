const fs = require("fs");
module.exports.config = {
	name: "Hệ Mặt Trời",
    version: "0.0.1",
	hasPermssion: 0,
	credits: "Duck", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "Hệ Mặt Trời",
    cooldowns: 5, 
};

module.exports.handleReply = async function({ api, event, handleReply }) {
	switch(event.body){
		case "1":
			api.sendMessage({
				body: "1.Sao Thủy (Mercury) hay Thủy tinh (chữ Hán: 水星) là hành tinh nhỏ nhất và gần Mặt Trời nhất trong tám hành tinh thuộc Hệ Mặt Trời,với chu kỳ quỹ đạo bằng khoảng 88 ngày Trái Đất. Nhìn từ Trái Đất, hành tinh hiện lên với chu kỳ giao hội trên quỹ đạo bằng xấp xỉ 116 ngày, và nhanh hơn hẳn những hành tinh khác. Tốc độ chuyển động nhanh này đã khiến người La Mã đặt tên hành tinh là Mercurius, vị thần liên lạc và đưa tin một cách nhanh chóng. Trong thần thoại Hy Lạp tên của vị thần này là Hermes (Ερμής). Tên tiếng Việt của hành tinh này dựa theo tên do Trung Quốc đặt, chọn theo hành thủy trong ngũ hành.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hemattroi/st.jpg`)
			}, event.threadID, event.messageID);
			break;
		case "2":
			api.sendMessage({
				body: " 2.Sao Kim (Venus) hay Kim tinh (chữ Hán: 金星), còn gọi là sao Thái Bạch (太白), Thái Bạch Kim tinh (太白金星), là hành tinh thứ 2 trong hệ Mặt Trời, tự quay quanh nó với chu kỳ 224,7 ngày Trái Đất.[10] Xếp sau Mặt Trăng, nó là thiên thể tự nhiên sáng nhất trong bầu trời tối, với cấp sao biểu kiến bằng −4.6, đủ sáng để tạo nên bóng trên mặt nước.Bởi vì Sao Kim là hành tinh phía trong tính từ Trái Đất, nó không bao giờ xuất hiện trên bầu trời mà quá xa Mặt Trời: góc ly giác đạt cực đại bằng 47,8°. Sao Kim đạt độ sáng lớn nhất ngay sát thời điểm hoàng hôn hoặc bình minh, do vậy mà dân gian còn gọi là sao Hôm, khi hành tinh này hiện lên lúc hoàng hôn, và sao Mai, khi hành tinh này hiện lên lúc bình minh.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hemattroi/sk.jpg`)
			}, event.threadID, event.messageID);
			break;
		case "3":
			api.sendMessage({
				body: "3. Trái Đất hay Địa Cầu (tiếng Anh: Earth), là hành tinh thứ ba tính từ Mặt Trời, đồng thời cũng là hành tinh lớn nhất trong các hành tinh đất đá của hệ Mặt Trời xét về bán kính, khối lượng và mật độ vật chất. Trái Đất còn được biết tên với các tên gọi hành tinh xanh, là nhà của hàng triệu loài sinh vật,trong đó có con người và cho đến nay nó là nơi duy nhất trong vũ trụ được biết đến là có sự sống. Hành tinh này được hình thành cách đây 4,55 tỷ năm và sự sống xuất hiện trên bề mặt của nó khoảng 1 tỷ năm trước. Kể từ đó, sinh quyển, khí quyển của Trái Đất và các điều kiện vô cơ khác đã thay đổi đáng kể, tạo điều kiện thuận lợi cho sự phổ biến của các vi sinh vật ưa khí cũng như sự hình thành của tầng ôzôn-lớp bảo vệ quan trọng, cùng với từ trường của Trái Đất, đã ngăn chặn các bức xạ có hại và chở che cho sự sống.Các đặc điểm vật lý của Trái Đất cũng như lịch sử địa lý hay quỹ đạo, cho phép sự sống tồn tại trong thời gian qua. Người ta ước tính rằng Trái Đất chỉ còn có thể hỗ trợ sự sống thêm 1,5 tỷ năm nữa, trước khi kích thước của Mặt Trời tăng lên (trở thành sao khổng lồ đỏ) và tiêu diệt hết sự sống.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hemattroi/td.jpg`)
			}, event.threadID, event.messageID); 
			break;
		case "4":
			api.sendMessage({
				body: "4. Sao Hỏa hay Hỏa tinh (chữ Hán: 火星, tiếng Anh: Mars) là hành tinh thứ tư tính từ Mặt Trời trong Thái Dương Hệ. Nó thường được gọi với tên khác là Hành tinh Đỏ, do sắt oxide có mặt rất nhiều trên bề mặt hành tinh làm cho bề mặt nó hiện lên với màu đỏ đặc trưng. Sao Hỏa là một hành tinh đất đá với một khí quyển mỏng, có những đặc điểm trên bề mặt có nét giống với cả các hố va chạm trên Mặt Trăng và các núi lửa, thung lũng, sa mạc và chỏm băng ở cực trên của Trái Đất. Chu kỳ tự quay và sự tuần hoàn của các mùa trên Hỏa Tinh khá giống với của Trái Đất do độ nghiêng của trục quay tạo ra. Trên Sao Hỏa có ngọn núi Olympus Mon, ngọn núi cao nhất trong Hệ Mặt Trời, và hẻm núi Valles Marineris, hẻm núi dài và rộng nhất trong Thái Dương Hệ. Lòng chảo Borealis bằng phẳng trên bán cầu bắc bao phủ tới 40% diện tích bề mặt hành tinh đỏ và có thể là một hố va chạm khổng lồ trong quá khứ.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hemattroi/sh.jpg`)
			}, event.threadID, event.messageID); 
			break;
		case "5":
			api.sendMessage({
				body: "5.Sao Mộc (Jupiter) hay Mộc tinh (chữ Hán: 木星) là hành tinh thứ năm tính từ Mặt Trời và là hành tinh lớn nhất trong Hệ Mặt Trời.Nó là hành tinh khí khổng lồ với khối lượng bằng một phần nghìn của Mặt Trời nhưng bằng hai lần rưỡi tổng khối lượng của tất cả các hành tinh khác trong Hệ Mặt Trời cộng lại. Sao Mộc được xếp vào nhóm hành tinh khí khổng lồ cùng với Sao Thổ (Sao Thiên Vương và Sao Hải Vương được xếp vào hành tinh băng khổng lồ). Hai hành tinh này đôi khi được gọi là hành tinh kiểu Sao Mộc hoặc hành tinh vòng ngoài. Các nhà thiên văn học cổ đại đã biết đến hành tinh này, và gắn với thần thoại và niềm tin tôn giáo trong nhiều nền văn hóa. Người La Mã đặt tên hành tinh theo tên của vị thần Jupiter, vị thần quan trọng nhất trong số các vị thần. Tên gọi trong tiếng Trung Quốc, tiếng Triều Tiên, tiếng Nhật và tiếng Việt của hành tinh này được đặt dựa vào hành mộc trong ngũ hành. Khi nhìn từ Trái Đất, Sao Mộc có cấp sao biểu kiến −2,94, đủ sáng để tạo bóng; và là thiên thể sáng thứ ba trên bầu trời đêm sau Mặt Trăng và Sao Kim. (Sao Hỏa hầu như sáng bằng Sao Mộc khi Sao Hỏa ở những vị trí xung đối trên quỹ đạo của nó với Trái Đất.)", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hemattroi/sm.jpg`)
			}, event.threadID, event.messageID); 
			break;
		case "6":
			api.sendMessage({
				body: "6. Sao Thổ (Saturn) tức Thổ tinh (chữ Hán: 土星) là hành tinh thứ sáu tính theo khoảng cách trung bình từ Mặt Trời và là hành tinh lớn thứ hai về đường kính cũng như khối lượng, sau Sao Mộc trong Hệ Mặt Trời. Tên tiếng Anh của hành tinh mang tên thần Saturn trong thần thoại La Mã, ký hiệu thiên văn của hành tinh là (♄) thể hiện cái liềm của thần. Sao Thổ là hành tinh khí khổng lồ với bán kính trung bình bằng 9 lần của Trái Đất.Tuy khối lượng của hành tinh cao gấp 95 lần khối lượng của Trái Đất nhưng với thể tích lớn hơn 763 lần, khối lượng riêng trung bình của Sao Thổ chỉ bằng một phần tám so với của Trái Đất.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hemattroi/stho.jpg`)
			}, event.threadID, event.messageID); 
			break;
		case "7":
			api.sendMessage({
				body: "7.Sao Thiên Vương (Uranus) hay Thiên Vương tinh (chữ Hán: 天王星) là hành tinh thứ bảy tính từ Mặt Trời; là hành tinh có bán kính lớn thứ ba và có khối lượng lớn thứ tư trong Hệ Mặt Trời. Sao Thiên Vương có thành phần tương tự như Sao Hải Vương. Cả hai có thành phần hóa học khác so với hai hành tinh khí khổng lồ lớn hơn là Sao Mộc và Sao Thổ. Vì vậy, các nhà thiên văn thỉnh thoảng đưa các hành tinh này vào danh sách hành tinh băng khổng lồ. Khí quyển của Sao Thiên Vương tương tự như của Sao Mộc và Sao Thổ về thành phần cơ bản như hiđrô và heli. Khác là chúng chứa nhiều hợp chất dễ bay hơi như nước, amonia và methan cùng với lượng nhỏ hydrocarbon.Hành tinh này có bầu khí quyển lạnh nhất trong số các hành tinh trong Hệ Mặt Trời, với nhiệt độ cực tiểu bằng 49 K (−224 °C). Nó có cấu trúc tầng mây phức tạp. Khả năng những đám mây thấp nhất chứa chủ yếu nước trong khi methan lại chiếm chủ yếu trong những tầng mây phía trên.Ngược lại, cấu trúc bên trong Sao Thiên Vương chỉ chứa chủ yếu một lõi băng và đá.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hemattroi/stv.jpg`)
			}, event.threadID, event.messageID); 
			break;
		case "8":
			api.sendMessage({
				body: "8.Sao Hải Vương (Neptune) hay Hải Vương tinh (chữ Hán: 海王星) là hành tinh thứ tám và xa nhất tính từ Mặt Trời trong Hệ Mặt Trời. Nó là hành tinh lớn thứ tư về đường kính và lớn thứ ba về khối lượng. Sao Hải Vương có khối lượng riêng lớn nhất trong số các hành tinh khí trong hệ Mặt trời. Sao Hải Vương có khối lượng gấp 17 lần khối lượng của Trái Đất và hơi lớn hơn khối lượng của Sao Thiên Vương (xấp xỉ bằng 15 lần của Trái Đất).Sao Hải Vương quay trên quỹ đạo quanh Mặt Trời ở khoảng cách trung bình 30,1 AU, bằng khoảng 30 lần khoảng cách Trái Đất - Mặt Trời. Sao Hải Vương được đặt tên theo vị thần biển cả của người La Mã (Neptune). Nó có ký hiệu thiên văn là ♆, là biểu tượng cách điệu cây đinh ba của thần Neptune hoặc chữ cái psi của Hy Lạp.", 
				attachment: fs.createReadStream(__dirname + `/noprefix/hemattroi/shv.jpg`)
			}, event.threadID, event.messageID);
			break;
		default:
			api.sendMessage({
				body: "Baka quá nhập từ 1-8 thoi 😼🖕 iu", 
				
			}, event.threadID, event.messageID); 
			return
	}
	 api.unsendMessage(handleReply.messageID);
}

module.exports.handleEvent = function({ api, event}) {
	if (event.body.indexOf("Hệ Mặt Trời")==0 || (event.body.indexOf("hệ mặt trời")==0)) {
		api.sendMessage({
			body: "\n=====Thông tin chi tiết về các hành tinh trong Hệ Mặt trời=====\n 1/Sao Thủy \n 2/Sao Kim \n 3/Trái Đất \n 4/Sao Hỏa \n 5/Sao Mộc \n 6/Sao Thổ \n 7/ Sao Thiên Vương \n 8/Sao Hải Vương",
			attachment: fs.createReadStream(__dirname + `/cache/hemattroi.jpg`)
		}, event.threadID, (error, info) => global.client.handleReply.push({ name: this.config.name, messageID: info.messageID, author: event.senderID}), event.messageID);
	}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}
