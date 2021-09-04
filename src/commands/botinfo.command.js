const Discord = require("discord.js");
const nodeUtils = require("node-os-utils")

module.exports = {
    name: "botinfo",
    description: "Comando que permite ver todas as informações do bot.",

    run: async(CLient, message, args) => {
        let cpuUsage = await nodeUtils.cpu.usage();

        let embedOne = new Discord.MessageEmbed()
            .setColor("#f6b0ae")
            .setDescription(`<a:load:488757308248293396> **Carregando informações do bot...**`)

        let embedTwo = new Discord.MessageEmbed()
            .setColor("#f6b0ae")
            .setDescription(`Olá sou a Cyar! Um bot de código aberto para a comunidade, espero que goste de minhas funções.\n[GitHub do projeto](https://github.com/cyarproject/CyarBot)`)
            .addField(`<a:lab_loading:643912893011853332> Ping:`, `\`${CLient.ws.ping}ms\``, true)
            .addField(`👑 Dono:`, `\`Mailo#0047\``, true)
            .addField(`<:lang_js:427101545478488076> Versão do Node.Js:`, `\`${process.version}\``, true)
            .addField(`️<:bot_bot:568569868358516770> Prefix:`, `\`${process.env.BOT_PREFIX}\``, true)
            .addField(`<a:carregando:488783607352131585> CPU:`, `\`${cpuUsage}%\``, true)
            .addField(`️<:lab_bot_on:813075051565547540> RAM:`, `\`${(process.memoryUsage().rss / 1024 / 1024).toFixed(0)}mb\``, true)

        let sendMessage = await message.reply({ embeds: [embedOne] }).then(msg => {
            setTimeout(() => {
                msg.edit({ embeds: [embedTwo] })
            }, 2000)
        })
    }
}