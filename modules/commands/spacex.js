module.exports.config = {
  name: "spacex",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer",
  description: "Lấy thông tin đợt phóng mới nhất của SpaceX",
  commandCategory: "space",
  usages: "spacex",
  cooldowns: 5,
  dependencies: {"request":""}
};

module.exports.run = function({
  api,
  event,
  argsl
}) {
  const request = global.nodemodule["request"];
  return request(`https://api.spacexdata.com/v3/launches/latest`, (err, response, body) => {
    if (err) throw err;
    var data = JSON.parse(body);
    api.sendMessage(`Thông tin đợt phóng mới nhất của SpaceX:\n- Mission: ${data.mission_name}\n- Năm phóng: ${data.launch_year}\n- Thời gian phóng: ${data.launch_date_local}\n- Tên lửa: ${data.rocket.rocket_name}\n- Link YouTube: ${data.links.video_link}`, event.threadID, event.messageID);
  });
}