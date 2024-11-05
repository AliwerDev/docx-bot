import TelegramBot from "node-telegram-bot-api";
import User from "src/models/user.model";

export const startCommand = async (bot: TelegramBot, msg: TelegramBot.Message): Promise<void> => {
  const chatId = msg.chat.id;

  try {
    let user = await User.findOne({ telegramId: msg.from?.id });
    if (!user) {
      user = new User({
        telegramId: msg.from?.id,
        username: msg.from?.username,
        firstName: msg.from?.first_name,
        lastName: msg.from?.last_name,
      });
      await user.save();
    }

    bot.sendMessage(chatId, `Hello ${msg.from?.first_name}, welcome to our bot!`);
  } catch (error) {
    bot.sendMessage(chatId, "An error occurred.");
    console.error(error);
  }
};
