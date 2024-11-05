import TelegramBot from "node-telegram-bot-api";
import { generateWord } from "src/handlers/docx.handler";

export const startCommand = async (bot: TelegramBot, msg: TelegramBot.Message): Promise<void> => {
  const chatId = msg.chat.id;

  generateWord(chatId, bot);
};
