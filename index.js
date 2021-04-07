//--------------------Bot Ana Dosya--------------------//
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('wio.db');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');
require("./util/eventLoader")(client);
const qdb = require('quick.db');


//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//

const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(`7/24 Hizmet Vermekteyim!`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//
//-------------------- 7/24 Uptime --------------------//

client.on("ready", async () => {
  client.appInfo = await client.fetchApplication();
  setInterval(async () => {
    client.appInfo = await client.fetchApplication();
  }, 600);
});

const log = message => {
  console.log(` ${message}`);
};
require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);//
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};
//
client.login(process.env.token);
//
//-------------------- Küfür Engel --------------------//
//-------------------- Küfür Engel --------------------//
//-------------------- Küfür Engel --------------------//

client.on("message", async msg => {
  const i = await db.fetch(`${msg.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "a m",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "amq"
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          const kinda = new Discord.MessageEmbed()

            .setDescription("Bu Sunucuda Küfür Edemezsin.")
            .setColor("BLACK");

          return msg.reply(kinda);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }//
  if (!i) return;
});

client.on("messageUpdate", msg => {
  const i = db.fetch(`${msg.guild.id}.kufur`);
  if (i) {
    const kufur = [
      "oç",
      "amk",
      "ananı sikiyim",
      "ananıskm",
      "piç",
      "amk",
      "amsk",
      "sikim",
      "sikiyim",
      "orospu çocuğu",
      "piç kurusu",
      "kahpe",
      "orospu",
      "mal",
      "sik",
      "yarrak",
      "am",
      "amcık",
      "amık",
      "yarram",
      "sikimi ye",
      "mk",
      "mq",
      "aq",
      "amq",
      "daşşak",
      "oç",
    ];
    if (kufur.some(word => msg.content.includes(word))) {
      try {
        if (!msg.member.hasPermission("BAN_MEMBERS")) {
          msg.delete();

          const kinda = new Discord.MessageEmbed()

            .setDescription("Bu Sunucuda Küfür Edemezsin.")
            .setColor("BLACK");

          return msg.reply(kinda);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

//-------------------- Küfür Engel --------------------//
//-------------------- Küfür Engel --------------------//
//-------------------- Küfür Engel --------------------//

//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//

client.on("message", async msg => {
  let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`);
  if (hereengelle == "acik") {
    const here = ["@here", "@everyone"];
    if (here.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.channel
          .send(`<@${msg.author.id}>`)
          .then(message => message.delete());
        var e = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Bu Sunucuda Everyone ve Here Yasak!`);
        msg.channel.send(e);
      }
    }
  } else if (hereengelle == "kapali") {
  }
});

//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//
//-------------------- Ever Here Engel --------------------//

//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//

client.on('guildMemberAdd', async member => {
    var rol = await db.fetch(`rol_${member.guild.id}`)
    var kanal = await db.fetch(`kanal_${member.guild.id}`)

    var embed = new Discord.MessageEmbed()
    .setTitle(`Roliz Otorol`)
    .setDescription(`Otorol ${member.user} adlı kişiye, <@&${rol}> adında rol verildi!`)
    .setColor("RANDOM")
    .setTimestamp()
  client.channels.cache.get(kanal).send(embed)
})

//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//
//-------------------- Otorol Sistemi --------------------//
client.on("guildMemberAdd", member => {
    var rol = qdb.fetch(`otorol_${member.guild.id}`) 
    var rolcük = member.guild.roles.cache.get(rol)
    var kanal = qdb.fetch(`otorolkanali_${member.guild.id}`)
    var kanalcık = member.guild.channels.cache.get(kanal)
    var yazı = qdb.fetch(`otorolyazi_${member.guild.id}`)
    if(!yazı){
      var yazı = "" 
    }
    const embedversion1mq = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setAuthor(`${client.user.username} Otorol Sistemi`)
    .setDescription(`
    **${yazı}**
    
    **${member} kişisi ${member.guild} sunucusuna katıldı!**
    
    **Verilen rol: ${rolcük}**
    
    **Hoşgeldin ${member}! Seninle Birlikte ${member.guild.memberCount} kişi olduk!**
    `)
    kanalcık.send(embedversion1mq)
    member.roles.add(rolcük.id)
})

//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//

client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.reply(`Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`)
   }
 }
  if(msg.author.id === kisi){

       msg.reply(`Afk'lıktan Çıktınız`)
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});

//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//

//-------------------- Sa As Sistemi --------------------//
//-------------------- Sa As Sistemi --------------------//
//-------------------- Sa As Sistemi --------------------//


client.on("message", async msg => {
 
 
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea'|| msg.content.toLowerCase() == 'selam') {
          try {
 
                  return msg.reply(
                    'Aleyküm Selam, Hoşgeldin')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
   
    }
    if (!i) return;
 
    });
//-------------------- Sa As Sistemi --------------------//
//-------------------- Sa As Sistemi --------------------//
//-------------------- Sa As Sistemi --------------------//

//-------------------- Reklam Engel Sistemi --------------------//
//-------------------- Reklam Engel Sistemi --------------------//
//-------------------- Reklam Engel Sistemi --------------------//

client.on("message", msg => {
let db = require('quick.db')
 let e = db.fetch(`reklamengel_${msg.guild.id}`)
if(e === "aktif"){  
      const reklam = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                         const batusuyar = new Discord.MessageEmbed()
.setColor('RED')
.setTitle("Reklam Engel Filtresi")
.setDescription(`Sunucuda Reklam Engel Filtresi Açık Reklam Yapamazsın <@${msg.authorid}>`)
                         
    
                    return msg.channel.send(batusuyar).then(msg => msg.delete(3000));
   
 
  msg.delete(3000);                              
 
            }              
          } catch(err) {
            console.log(err);
          }
        }}
else return;
    });

//-------------------- Reklam Engel Sistemi --------------------//
//-------------------- Reklam Engel Sistemi --------------------//
//-------------------- Reklam Engel Sistemi --------------------//

//-------------------- Prefix Sistemi --------------------//
//-------------------- Prefix Sistemi --------------------//
//-------------------- Prefix Sistemi --------------------//

client.on("message", async message => {

  if (message.author.bot) return;

  if (!message.guild) return;

  let prefix = db.get(`prefix_${message.guild.id}`);

  if (prefix === null) prefix = prefix;



  if (!message.content.startsWith(prefix)) return;



  if (!message.member)

    message.member = await message.guild.fetchMember(message);
//


  const args = message.content

    .slice(prefix.length)

    .trim()

    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  
  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);

});

//-------------------- Prefix Sistemi --------------------//
//-------------------- Prefix Sistemi --------------------//
//-------------------- Prefix Sistemi --------------------//

//sayaç
client.on("guildMemberAdd", member => {
var kanal = qdb.fetch(`sayackanali_${member.guild.id}`)
if(!kanal) return;
var hedef = qdb.fetch(`sayachedef_${member.guild.id}`)
if(!hedef) return;
client.channels.cache.get(kanal).send(`**${member} Sunucuya katıldı! Hedefimize ulaşmamıza __${hedef - member.guild.memberCount}__ kişi kaldı!**`)
if(hedef <= member.guild.memberCount){
  client.channels.cache.get(kanal).send(`Hedefimizi başardık! Sunucumuz ${hedef} kişiye ulaştı!`)
  qdb.delete(`sayackanali_${member.guild.id}`)
  qdb.delete(`sayachedef_${member.guild.id}`)
}
})
client.on("guildMemberRemove", member => {
var kanal = qdb.fetch(`sayackanali_${member.guild.id}`)
if(!kanal) return;
var hedef = qdb.fetch(`sayachedef_${member.guild.id}`)
if(!hedef) return;
client.channels.cache.get(kanal).send(`**${member.user.tag} sunucudan ayrıldı! Hedefimize ulaşmamıza __${hedef - member.guild.memberCount}__ kişi kaldı!**`)
})
//dm-hg
client.on("guildMemberAdd", member =>{
  const hg = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle(member.guild.name + 'Sunucusuna Hoşgeldin!')
  .setDescription(`Merhaba! Bu Sunucunun Güvenliğini Ben Sağlıorum, \n Ben Roliz Bot, \n https://discord.gg/ZcMZ6PYBtf Bu Linkten Yapımcım FunsT'ın Sunucusa Katılabilirsin, \n İyi Eğlenceler.`)
  .setFooter('Hoşgeldin')
  .setTimestamp()
  member.send(hg)
})
//sahibim geldi
client.on("message", async message => {
  const ms = require('parse-ms')
   let dogrulama = await db.fetch(`sahiponay_${message.author.id}_${message.guild.id}`);
    let gun = 1800000; 
    if (dogrulama !== null && gun - (Date.now() - dogrulama) > 0) {
       
    } else {
          if(message.author.id === ayarlar.sahip){
           db.set(`sahiponay_${message.author.id}_${message.guild.id}`, Date.now())
            message.channel.send("Hizzaya Geçin işte Benim Sahibim").then(msg => msg.delete (15000))
            }
        }
       
});
//otorol
client.on('guildMemberAdd', async (member) =>{
    let otorol = await db.fetch(`SwenlorOtorol.${member.guild.id}`)
    member.roles.add(otorol) // gelene artık rol vericek.
})
//uptime
client.on('ready', () => require('quick.db').set('start', Date.now()))
//uptime
//js rol
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'js') {  // İstediğiniz Komut
    msg.member.roles.add('802593547664097356'); //Rolü bir yerde bahsedin sonra sağ tıklayıp İD'sini alın
    msg.reply('Js Rolünü Başarıyla Aldın.'); //Komutu Yazınca cevap ne yazsın?
  }
});
//js rol
//html rol
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'html') {  // İstediğiniz Komut
    msg.member.roles.add('802593547664097358'); //Rolü bir yerde bahsedin sonra sağ tıklayıp İD'sini alın
    msg.reply('Html Rolünü Başarıyla Aldın.'); //Komutu Yazınca cevap ne yazsın?
  }
});
//html rol
// eklendim
client.on('guildCreate', async guild => { client.channels.get('802593548956467243').send(`${guild}, isimli sunucuya eklendim!`)})
// atıldım
client.on('guildRemove', async guild => { client.channels.get('802593548956467243').send(`${guild}, isimli sunucudan atıldım.. :(`)})

//sess
client.on("ready", () => {
  client.channels.cache.get("825291213246431252").join();
})
client.on("ready", () => {
  client.channels.cache.get("807162915449995314").join();
})

//otoisim
client.on('guildMemberAdd', member => {  
  var arezreiz = qdb.fetch(`otoisim_${member.guild.id}`)
  if(!arezreiz) return;
  member.setNickname(arezreiz)
 })
////----------------------- HEM ETİKET HEMDE TAG ROL KISMI -----------------------\\\\
client.on("userUpdate", async function(oldUser, newUser) { // kod codaredan alınıp editlenmiştir!
    const guildID = "766662305877327958"//sunucu
    const roleID = "806981855450497024"//taglırolü
    const tag = "§"//tag
    const chat = '807238626596749393'// chat
    const log2 = '807226532854104105' // log kanalı
  
    const guild = client.guilds.cache.get(guildID)
    const role = guild.roles.cache.find(roleInfo => roleInfo.id === roleID)
    const member = guild.members.cache.get(newUser.id)
    const embed = new Discord.MessageEmbed().setAuthor(member.displayName, member.user.avatarURL({ dynamic: true })).setColor('#ff0000').setTimestamp().setFooter('♆');
    if (newUser.username !== oldUser.username) {
        if (oldUser.username.includes(tag) && !newUser.username.includes(tag)) {
            member.roles.remove(roleID)
            client.channels.cache.get(log2).send(embed.setDescription(` ${newUser} isminden \`§\` çıakrtarak ailemizden ayrıldı!`))
        } else if (!oldUser.username.includes(tag) && newUser.username.includes(tag)) {
            member.roles.add(roleID)
            client.channels.cache.get(chat).send(`<a:evtt:826862315668111470>Tebrikler, ${newUser} tag alarak ailemize katıldı ona sıcak bir **'Merhaba!'** diyin.(${tag})`)
            client.channels.cache.get(log2).send(embed.setDescription(`  ${newUser} ismine \`§\` alarak ailemize katıldı`))
        }
    }
   if (newUser.discriminator !== oldUser.discriminator) {
        if (oldUser.discriminator == "0099" && newUser.discriminator !== "0099") {
            member.roles.remove(roleID)
            client.channels.cache.get(log2).send(embed.setDescription(`  <@!' + newUser + '> etiketinden \`§\` çıakrtarak ailemizden ayrıldı!`))
        } else if (oldUser.discriminator !== "0099" && newUser.discriminator == "0099") {
            member.roles.add(roleID)
            client.channels.cache.get(log2).send(embed.setDescription(`  <@!' + newUser + '> etiketine \`§\` alarak ailemize katıldı`))
            client.channels.cache.get(chat).send(`<a:dikkat:826862322974720022>Tebrikler, ${newUser} tag alarak ailemize katıldı ona sıcak bir **'Merhaba!'** diyin.(#0099)`)
        }
    }
  
  })
////----------------------- TAG MESAJ KISMI -----------------------\\\\
client.on('message', msg => {
    if (msg.content === 'tag') {
        msg.channel.send(`§`); // tagı yazınız
    } else if (msg.content === 'tag') {
        msg.channel.send(`§`);// tagı yazınız
    } else if (msg.content === '.tag') {
        msg.channel.send(`§`);// tagı yazınız
    } else if (msg.content === ".rol-ver") {
        msg.guild.members.cache.forEach(x => {
            x.roles.add("")
        })
    }
});
