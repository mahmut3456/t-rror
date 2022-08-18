const Discord = require("discord.js");
const client = new Discord.Client();
const express = require("express");
const db = require('quick.db');
const app = express();

const fs = require("fs");
                              // ArdaDemr Youtube Kanalına ticket botu altyapısı
//Uptime için__________________________________________________________________
app.get("/", (req, res) => {
  res.send("ArdaDemr Discord Bot Altyapısı");
});

app.listen(process.env.PORT);

//KOMUT Algılayıcı______________________________________________________________
client.commands = new Discord.Collection();

fs.readdir("./komutlar/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let cmd = require(`./komutlar/${file}`);
    let cmdFileName = file.split(".")[0];
    console.log(`Komut Yükleme Çalışıyor: ${cmdFileName}`);
    client.commands.set(cmd.help.name, cmd);
  });
});

//EVENTS Yükleyici_______________________________________________________________
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Etkinlik Yükleme Çalışıyor: ${eventName}`);
    client.on(eventName, event.bind(null, client));
  });
});

client.on("ready", () => {
  console.log(`ArdaDemr Discord Bot Altyapısı BOT AKTİF`);
});


client.login(process.env.TOKEN);
// ArdaDemr Youtube Kanalına ticket botu altyapısı


//-----------------------DESTEK KAPATMA-----------------------\\
client.on("message", message => {
  if (message.content.toLowerCase() === "!kapat") {
  if (!message.channel.name.startsWith(`destek-`)) return message.channel.send(`Bu komut ile sadece talep kapatabilirsin.`)
   message.channel.delete()
   db.delete(`destek_${message.author.id}`)
        }
      })
//-----------------------DESTEK KAPATMA-----------------------\\

//---------------------TİCKET-Oto msj silme------------------------//
client.on("message", async message => {
  let kanal = "909163473072717865";
  if (message.channel.id === kanal) {
    if (!message.member.user.bot) {
      message.delete({ timeout: 50 });
    }
  }
});
//---------------------TİCKET-Oto msj silme------------------------//
 
//---------------------------SA-AS--------------------------------//
//ArdaDemr Yetkili Ekibi: H.D
client.on("message", async message => {
  let data = [
    "SA",
    "Sea",
    "Selamun aleyküm",
    "Selamunaleyküm",
    "sea",
    "sa",
    "selamun aleyküm"
    

  ];
  if (data.includes(message.content)) {
    message.reply("**Aleykümselam hoşgeldiniz.**");
  }
});
//-------------------------SA-AS---------------------------------//

//-------------------------Ses-bot-------------------------------//
client.on('ready', () => {

client.channels.cache.get('909137749976686720').join()
})
//-------------------------Ses-bot-------------------------------//