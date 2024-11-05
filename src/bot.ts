import TelegramBot from "node-telegram-bot-api";
console.log(process.env.BOT_TOKEN);

const bot = new TelegramBot(process.env.BOT_TOKEN as string, { polling: true });

export default bot;
