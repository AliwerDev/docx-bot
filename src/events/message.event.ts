import TelegramBot from "node-telegram-bot-api";

export const messageEvent = (bot: TelegramBot, msg: TelegramBot.Message): void => {
  const chatId = msg.chat.id;
};
