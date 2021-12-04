"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const ytdl_core_1 = __importDefault(require("ytdl-core"));
const secondsToHms_1 = __importDefault(require("./secondsToHms"));
const ytdl = require("ytdl-core");
async function default_1(event, audioData, api) {
  var out = function(data, callback = function() {}, mid) {
    if (!data) return;
    mid = typeof mid == "undefined" ? event.messageID : mid;
    typeof callback == "string" ? (mid = callback) : callback;
    typeof callback != "function" ? (callback = function() {}) : callback;
    return api.sendMessage(data, event.threadID, callback, mid);
  };
  const {
    writeFileSync,
    createReadStream,
    unlinkSync,
    createWriteStream,
    removeSync,
    mkdirSync,
    copySync
  } = require("fs-extra");

  if (
    event.contentMsg.length == 1 &&
    parseInt(event.contentMsg) >= 1 &&
    parseInt(event.contentMsg) <= 5
  ) {
    var vID = audioData.find(item => item.id == event.messageReply.messageID)
      .link[event.contentMsg - 1];
    var videoInfo = await ytdl.getInfo("https://youtu.be/" + vID);
    var { videoId, lengthSeconds } = videoInfo.videoDetails;
    if (lengthSeconds > 1200)
      return out("Độ dài video vượt quá mức cho phép, tối đa là 20 phút!");
    var random = Math.floor(Math.random() * 99999999999999999999999999999999);

    try {
      api.sendTypingIndicator(event.threadID, () =>
        ytdl(videoId, { filter: format => format.itag == "140" })
          .pipe(createWriteStream(`./${random}.m4a`))
          .on("close", () =>
            out(
              {
                body: videoInfo.videoDetails.title,
                attachment: createReadStream(`./${random}.m4a`)
              },
              () => unlinkSync(`./${random}.m4a`)
            )
          )
          .on("error", e => out(e))
      );
    } catch (e) {
      out("Đã có lỗi xảy ra.");
    }
  } else
    return api.sendMessage(
      "Hãy nhập một số từ 1 đến 5.",
      event.threadID,
      event.messageID
    );
}
exports.default = default_1;
