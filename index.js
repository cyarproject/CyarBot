require('dotenv').config()
const Discord = require("discord.js");
const Client = new Discord.Client({ intents: 32767 });

Client.once('ready', async () => {
    console.log("🚀 Estou online.")
})

Client.on("messageCreate", message => {
    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(process.env.BOT_PREFIX.toLowerCase())) return;
    if (message.content.startsWith(`<@!${Client.user.id}>`) || message.content.startsWith(`<@!${Client.user.id}>`)) return;

    const args = message.content
        .trim().slice(process.env.BOT_PREFIX.length)
        .split(/ +/g)
    const command = args.shift().toLowerCase();

    try {
        const CommandFile = require(`./src/commands/${command}.command.js`);
        CommandFile.run(Client, message, args);
    } catch (err) {
        console.error('Erro:' + err);
    }
});

Client.login(process.env.BOT_TOKEN)