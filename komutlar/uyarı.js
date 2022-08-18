const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`uyar` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let uyarı = args.slice(0).join(" ")
  let reason = args.slice(1).join('');
  let user = message.mentions.users.first();
  let modlog = guild.channels.cache.find(x => x.name ===  'mod-log')
  if (!modlog) return message.reply('mod-log kanalını bulamıyorum.');
  if (reason.length < 1) return message.reply('`!uyar [Kullanıcı] [Sebep]`');
  if (uyarı > 1) return message.reply('Uyarma Başlığı Mesela Mute Uyarı.');
  if (message.mentions.users.size < 1) return message.reply('Kimi uyaracağını yazmalısın.').catch(console.error);
  const embed = new Discord.MessageEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .addField('Eylem:', uyarı)
  .addField('Kullanıcı:', `${user.username}#${user.discriminator}`)
  .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Sebep', reason)
  return guild.channels.cache.get(modlog.id).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'uyar',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar [kullanıcı] [sebep]'
};