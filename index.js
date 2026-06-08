import { configDotenv } from "dotenv";
import { Client, GatewayIntentBits } from "discord.js";

configDotenv();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("clientReady", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  console.log(message.content);

  if (message.content === "!ping") {
    await message.reply("Pong!");
  }
});

client.login(process.env.DISCORD_TOKEN);
