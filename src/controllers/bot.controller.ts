import TelegramBot from "node-telegram-bot-api";
import { helpCommand } from "src/commands/help.command";
import { startCommand } from "src/commands/start.command";
import { messageEvent } from "src/events/message.event";

export const initBotCommands = (bot: TelegramBot): void => {
  // Handle commands
  bot.onText(/\/start/, (msg) => startCommand(bot, msg));
  bot.onText(/\/help/, (msg) => helpCommand(bot, msg));

  // Handle generic events (like all text messages);
  bot.on("message", (msg) => messageEvent(bot, msg));
};
