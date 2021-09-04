const Discord = require("discord.js");

module.exports = {
    name: "ping",
    description: "Veja o ping do bot.",

    run: async(Client, message, args) => {
        let embedOne = new Discord.MessageEmbed()
            .setColor("#f6b0ae")
            .setDescription("<a:load:488757308248293396> Calculando ping...")

        let embedTwo = new Discord.MessageEmbed()
            .setColor("#f6b0ae")
            .setDescription(`📡 Estou com \`${Client.ws.ping}ms\``)

        let sendMessage = await message.reply({ embeds: [embedOne] }).then(msg => {
            setTimeout(() => {
                msg.edit({ embeds: [embedTwo] })
            }, 2000)
        })
    }
}