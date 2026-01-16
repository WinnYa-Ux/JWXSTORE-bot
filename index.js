const { 
  Client, 
  GatewayIntentBits, 
  REST, 
  Routes, 
  SlashCommandBuilder 
} = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

// ===== SLASH COMMAND =====
const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Cek bot hidup atau tidak")
].map(cmd => cmd.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.T
