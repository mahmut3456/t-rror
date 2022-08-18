const Discord = require("discord.js")


exports.run = async (client, message, args) => {

    let istek = args.slice(0).join(" ")
    if (!istek) return message.channel.send (`İ𝐬𝐭𝐞ğ𝐢𝐧𝐢 𝐁𝐞𝐥𝐢𝐫𝐭`)

    message.channel.send("İ𝐬𝐭𝐞ğ𝐢𝐧𝐢𝐳 𝐁𝐢𝐥𝐝𝐢𝐫𝐢𝐥𝐝𝐢")
    let isteyen = message.author.tag;
    const a = new Discord.MessageEmbed()
    .setColor("GOLD")

    .setDescription(`**Yeni Bir İstek Var;** \n${isteyen} 𝘿𝙞𝙮𝙤𝙧 𝙠𝙞;\n\n\`${istek}\``)
    client.channels.cache.get("914460174490693703").send(a)


}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: `Yetki gerekmiyor.`
};

exports.help = {
    name: "istek",
    description: "",
    usage: ""
}