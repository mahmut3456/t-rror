const Discord = require("discord.js")


exports.run = async (client, message, args) => {

    let istek = args.slice(0).join(" ")
    if (!istek) return message.channel.send (`ฤฐ๐ฌ๐ญ๐ฤ๐ข๐ง๐ข ๐๐๐ฅ๐ข๐ซ๐ญ`)

    message.channel.send("ฤฐ๐ฌ๐ญ๐ฤ๐ข๐ง๐ข๐ณ ๐๐ข๐ฅ๐๐ข๐ซ๐ข๐ฅ๐๐ข")
    let isteyen = message.author.tag;
    const a = new Discord.MessageEmbed()
    .setColor("GOLD")

    .setDescription(`**Yeni Bir ฤฐstek Var;** \n${isteyen} ๐ฟ๐๐ฎ๐ค๐ง ๐ ๐;\n\n\`${istek}\``)
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