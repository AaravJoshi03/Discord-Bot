import { configDotenv } from "dotenv";

import { Client, Events, GatewayIntentBits } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on('messageCreate',(message) =>{
    console.log(message.content);
})

client.login(token);