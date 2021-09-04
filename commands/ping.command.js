const Discord = require("discord.js");

module.exports = {
    name: "ping",

    run: async(Client, message, args) => {
        message.channel.send(`📡 Estou com \`${Client.ws.ping}ms\``)
    }
}