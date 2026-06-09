import { REST, Routes, SlashCommandBuilder } from "discord.js";
import { configDotenv } from "dotenv";

configDotenv();

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!")
    .toJSON(),
];

const rest = new REST({ version: "10" }).setToken(process.env.DISCORD_TOKEN);

try {
  console.log("Registering slash commands...");

  await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
    body: commands,
  });

  console.log("Slash commands registered successfully.");
} catch (error) {
  console.error(error);
}
