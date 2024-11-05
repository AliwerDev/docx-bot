// server.ts

import dotenv from "dotenv";
const envFile = process.env.NODE_ENV === "production" ? ".env.production" : ".env.development";
dotenv.config({ path: envFile });

import { connectDB } from "src/services/database.service";
import bot from "./bot";
import { initBotCommands } from "./controllers/bot.controller";

(async (): Promise<void> => {
  await connectDB();
  initBotCommands(bot);
  console.log(`Telegram bot is running in ${process.env.NODE_ENV} mode`);
})();
