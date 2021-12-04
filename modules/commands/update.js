module.exports.config = {
	name: "nameCommand", // Tên lệnh, được sử dụng trong việc gọi lệnh
	version: "version", // phiên bản của module này
	hasPermssion: 0/1/2, // Quyền hạn sử dụng, với 0 là toàn bộ thành viên, 1 là quản trị viên trở lên, 2 là admin/owner
	credits: "Name need credit", // Công nhận module sở hữu là ai
	description: "say bla bla ở đây", // Thông tin chi tiết về lệnh
	commandCategory: "group", // Thuộc vào nhóm nào: system, other, game-sp, game-mp, random-img, edit-img, media, economy, ...
	usages: "name Text1 Text2", // Cách sử dụng lệnh
	cooldowns: 5, // Thời gian một người có thể lặp lại lệnh
	dependencies: ["name package"], //Liệt kê các package module ở ngoài tại đây để khi load lệnh nó sẽ tự động cài!
	// Info là phần chi tiết thêm của cách sử dụng lệnh
	// Key: Từ khoá thuộc trong usages
	// prompt: Chi tiết dữ liệu đầu vào của key
	// type: Định dạng dữ liệu đầu vào của key
	// example: Ví dụ ¯\_(ツ)_/¯ 
	info: [
		{
			key: 'Text1',
			prompt: '',
			type: 'Văn Bản',
			example: 'help'
		},
		{
			key: 'Text2',
			prompt: '',
			type: 'Số liệu',
			example: '1, 2, 3'
		}
	],
	envConfig: {
		//Đây là nơi bạn sẽ setup toàn bộ env của module, chẳng hạn APIKEY, ...
	}
};

module.exports.onLoad = function ({ global, client, configValue }) {
		//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
}

module.exports.handleReaction = function({ api, event, args, client, global }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
}

module.exports.handleReply = function({ api, event, args, client, global }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
}

module.exports.event = function({ api, event, client, global }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
}

module.exports.run = function({ api, event, args, client, global, permssion }) {
	//Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯ 
}