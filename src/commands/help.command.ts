import TelegramBot from "node-telegram-bot-api";

export const helpCommand = async (bot: TelegramBot, msg: TelegramBot.Message): Promise<void> => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `Hello ${msg.from?.first_name}, Help commands in this bot has not been created yet!`);
};
