import TelegramBot from "node-telegram-bot-api";
const fs = require("fs-extra");
const path = require("path");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

export const generateWord = (chatId: number, bot: TelegramBot) => {
  bot.sendMessage(chatId, "Please enter your name.");
  bot.once("message", (nameMsg) => {
    const userName = nameMsg.text;

    bot.sendMessage(chatId, "Please enter your country.");
    bot.once("message", async (countryMsg) => {
      const userCountry = countryMsg.text;

      bot.sendMessage(chatId, "Please enter company name.");
      bot.once("message", async (companyMsg) => {
        const companyName = companyMsg.text;

        try {
          const content = await fs.readFile(path.resolve(__dirname, "../files/template.docx"), "binary");

          const zip = new PizZip(content);
          const doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });

          doc.setData({
            name: userName,
            country: userCountry,
            companyName,
          });

          doc.render();
          const buffer = doc.getZip().generate({ type: "nodebuffer" });

          const outputPath = path.resolve(__dirname, `output_${chatId}.docx`);
          await fs.writeFile(outputPath, buffer);

          await bot.sendDocument(chatId, outputPath);

          await fs.unlink(outputPath);
        } catch (error) {
          console.error("Error creating document:", error);
          bot.sendMessage(chatId, "There was an error generating your document.");
        }
      });
    });
  });
};
