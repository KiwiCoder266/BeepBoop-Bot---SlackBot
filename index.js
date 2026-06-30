require("dotenv").config();

const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/beepboop-bot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

//app.command("/beepboop-bot-coasterfact", async ({ ack, respond }) => {
//    await ack();
//
//    try {
//        const response = await axios.get("")
//    }
//});

(async () => {
  await app.start();
  console.log("bot is running!");
})();