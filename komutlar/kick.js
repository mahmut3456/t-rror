// Pâyidar Code - Pâyidar

const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        // Yetki
        if(!message.member.roles.cache.some(role => (role.name === '👑 |  SUNUCU SAHİBİ'))){
            const Pâyidar = new Discord.MessageEmbed()
            .setDescription(`Bu komudu kullanmak için gerekli yetkilere sahip olman gerek.`)
            .setColor('BLACK')
            .setFooter('❤️ Merlin_Bot')
            return message.channel.send(Pâyidar)
        }

        // Let Tanımları
        let kullanıcı = message.guild.member(message.guild.members.cache.get(args[0])) || message.mentions.members.first();
        let sebep = args.slice(1).join(' ');
        let guild = message.guild;

        // Özel Zaman
        let zaman = new Date()
        let pâyidarzaman = zaman.getFullYear() + "." + (zaman.getMonth() +1) + "." + zaman.getDate() + " (\`" + zaman.getHours() + ":" + zaman.getMinutes() + ":" + zaman.getSeconds() + "\`)";

        if(!kullanıcı){
            const pâyidar = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Kullanıcı Belirt**`)
            .setColor('BLACK')
            .setFooter('❤️ Merlin_Bot')
            return message.channel.send(pâyidar)
        } else if(isNaN(kullanıcı)){
            const pâyidar = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Geçerli Kullanıcı Belirt**`)
            .setColor('BLACK')
            .setFooter('❤️ Merlin_Bot')
            return message.channel.send(pâyidar)
        }
        if(!sebep){
            const pâyidar = new Discord.MessageEmbed()
            .setDescription(`${message.author} - **Lütfen Sebep Belirt**`)
            .setColor('BLACK')
            .setFooter('❤️ Merlin_Bot')
            return message.channel.send(pâyidar)
        }

        if(kullanıcı && sebep){
            // Kickleme İşlemi
            kullanıcı.kick()

            // Mesaj
            const pâyidar = new Discord.MessageEmbed()
            .setDescription(`
                \` ˑ \`Kicklenen Üye - **${kullanıcı}(\`${kullanıcı.id}\`)**
                \` ˑ \`Kickleyen Yetkili - **${message.author}(\`${message.author.id}\`)**
                \` ˑ \`Kick Nedeni - **${sebep}**
            `)
            .setColor('BLACK')
            .setFooter('Pâtron ❤️ Merlin_Bot | ' + pâyidarzaman)
            message.channel.send(pâyidar)
        }
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['Kick','KİCK','SİKTİR','Siktir','siktir'],
    permLevel: 0
}

exports.help = {
    name: 'kick' 
  
}  
