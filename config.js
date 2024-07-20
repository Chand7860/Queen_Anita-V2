//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347043759577";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ1BQTUIxVkN2Q0pFTTJmVzBFTmZvYTRGNFljUGR4allqOEtHRHNSQVlXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiek0zVlZiQjBXNG5GeXpYclcvTTdZdVlxMkVVN0J6eWNCajFoTEtPeUJSTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTzF4NWUzempuVlZHSDdFdWRoM0VKcHZFN05nU2doTVJqR2hsWld6MG5JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQmVQaWp2dzNDZlNWM2FFc1FKZmNHUkloNUt1R1FUdTZFZEFhNDJOUUJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFPeTNWUUFtNGJhUGk4SzRYQldpTEhiWDR1b2RnMUM2b2hVOEtDNzI0RWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNQWjdFTnhLd3BNTks1dHdudHVnbCtMSnJoNmxqdThPei9ra2ZhQXgxbDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUppcC9yWkpKdHFrSERIVEhTSjE1T1VhOWorVUI4VFBMMTNiV2FPaS8wMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzBnbk1jMUY3SVpjN0hqVDZKRVgrb2ZqMEZGTlVjaTNzSkVxaUN4MlNFVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVLMjkzK3pQVjJCd1QvY2JBQlM0Yk9FM1FXRzI4dUdWOE1XaCtTcjBGMjROUURveXBzUTdJTTYweHRkT2l6YysxbU9qaEd0VkNXb1J1Q25LM1NSVGpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc0LCJhZHZTZWNyZXRLZXkiOiJDWlhydSswOXNDaDdxV2daY3JOV3EvbDhpN2lTOHdXQjlmY2U1RjJIMVdBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4MnkyaW03MVRmbUlBTFMzQ2s1YjF3IiwicGhvbmVJZCI6IjRhY2EwY2RiLTJjNmEtNDk4Ni04NmZkLTc4NzAzMDdmZWE3NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyd0RRNkZSZ0FlTmIwZ29ONzF5YVRrMEwxVFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiLzJMeGplR3ZNL3FGNm50Rmc0LzdtRGRGdXpVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJNWkdWSFg2IiwibWUiOnsiaWQiOiI5MjMyNzEyMDkyMDc6N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLigJUg8JOGqSDwnZCT8J2QhyfYuSDwnZCD8J2QhPCdkILwnZCE8J2QjfCdkJMg8J2QgfCdkI7wnZCI8J2QiCDwk4aqIMuQzaLCu1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbvCThqkg8J2QiMqI8J2QlyDwnZCA8J2Qh/CdkIzwnZCE8J2QgyDwk4aqIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKZUhpNGdFRVBPaDdiUUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIxOHhONW9jNERJMGdXelZCaVVlMjNvQVR0M3hwS1g4NGxSNDFQT08xUFNFPSIsImFjY291bnRTaWduYXR1cmUiOiJpT0QyNUtMVnNYZTg2TmNYWmJZZHNoTCsvajZCRnJDV29BYm1JZXBnNHFwbFBGOHBsNWNNZlpNZmE0UkZyWk1MaEpVbWJqeEh6c1MraElER3B6QmxDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaTdIN0dncjM5QVpwUUZSQUZZSktYcHNuNFZRQ1k3b01zWUdXSkJCOGhvNTVCaXIxQ0doSTlCVlptODFIRVNpdkhMNHhQNUhQTzh0ZEVzUHRjUTJDamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyNzEyMDkyMDc6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkZk1UZWFIT0F5TklGczFRWWxIdHQ2QUU3ZDhhU2wvT0pVZU5Uemp0VDBoIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxNDU0ODQ4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpvWSJ9"
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
