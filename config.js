//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "realshadowghost099@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Ghana";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "233596099587";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "233596099587";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a22200a780671e0e32383.jpg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUROUk11SWZkc1hXQ2dPZ01JeUZUMnQxQ1h6bDRGbnhCKzNiNGd3TmNsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDJFaDU2TmVZRFViK0o3TVBRQzAvdmtGM2hrblZnQkdKTGRyazFPWkVDcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5S2lDZ0lSU2M1QmJvUWlxeGkxam8zWWRIODQxMm1aU3A4Z0x3dzNiL20wPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNNmRZNEZIa1VRZS9WTzNkdVkzSnJQc09kT3V5Z3hwTWFmcEY2VG90VHg0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVGRFFuT2hSQVo1d2Z4aElnSUtkY0k1bm9PUGh3MmNLTmRPTEo2dkdjVW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZuOGQ4enBUZXJ1QmJIcTdsMUhMYmhPcitIV1g0RjFmZ2VzMWM0OEtnbjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK05QY3VkLzZ6Z0dIUDB3YjVWUW1lQ3JFTWNnYWNUQlhBdWdJZ3ZTOTVYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicitTUlNCYms4TXV4L3poOXFEY3pBaGw4czkwZ0RlaWtsdE50YzJMOUdHaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilk2a05KbFVoM2VDOHZObGw1YVk0K01sSzRxVEpzaTF2cW0yYlQwZlpQMENIZDc4OFhGbDkwYklpeEU3R3QwcjVBWTlyemxhTDBkZ2lLdThwUlpDQmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjgsImFkdlNlY3JldEtleSI6InNFT3pjT1cwRzNHSG91MHc4Vk1iZ0taS1pPTDl1ZEt2YXdQRjlidkJxbmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjMzNTk2MDk5NTg3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkMwMjRDODVDRUQ2OERDMDJEQTA2MjcyM0FCOEM2RUU4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMxOTc1OTN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzMzU5NjA5OTU4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4NDRCMEU4ODZCQzBEQjEyQUZDMzYyOTc1MDk3RkQyMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMTk3NTkzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzMGFFUWFPYVFlYUNZOGNkYWt5MHlRIiwicGhvbmVJZCI6ImNkOTMzZDc5LTZiMzAtNGNlYi05ZmMwLWI5ZmQ3MDVjYWM2YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnUHRaMDZib01NZVA3SG8yTzJvaGxpSEp3SUk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWVuOFE3czdKanQ4QXRwTXcxTy9mbHN4RzdRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZEVFNUS05YIiwibWUiOnsiaWQiOiIyMzM1OTYwOTk1ODc6MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkQrc2E0RkVJalIxN1VHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZDNCT09nT2JReE1WN0RZQzZvdkxVQTdsNlBmcTNJeGVGeVdlT090ZzZXbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiMFlmN1h1bC8yN0pJb0pISE9jWXNhRzJscWU3ZWF0ZGNmczRUVGlwcVZDQm1kbWNXRXFNUHhxc281VitxdU4yeS9pLy8zaFVnU2dLWWVtZ3YxWHQ3QXc9PSIsImRldmljZVNpZ25hdHVyZSI6IkdRaWZVNXB6U0xaa3BpME1Kdlc5WnVBS051cENuOExNUWlETFJyZXJXNjllRXNuODdpOXovU21kOWtwVlovV0E1ZmJxdFhoUDdia1BwRHZkTFArS2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjMzNTk2MDk5NTg3OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWGR3VGpvRG0wTVRGZXcyQXVxTHkxQU81ZWozNnR5TVhoY2xuampyWU9scSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzE5NzU4OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEaUoifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`GHOST-V2™`",
  author: process.env.PACK_AUTHER || "GHOST-V2",
  packname: process.env.PACK_NAME || "✰𝗦𝝜𝝙𝘿𝞞𝙒✘𝗚𝝜𝝤𝙎𝞣𝞡𝟵𝟵✰",
  botname: process.env.BOT_NAME || "ᏀᎻϴՏͲ-ᏴϴͲ-V2",
  ownername: process.env.OWNER_NAME || "✰𝗦𝝜𝝙𝘿𝞞𝙒✘𝗚𝝜𝝤𝙎𝞣𝞡𝟵𝟵✰l",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "🄶🄷🄾🅂🅃|🅅2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
