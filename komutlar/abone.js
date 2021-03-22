const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField(' Roliz',`
 Roliz Abone Yardım Menüsü  
**!abonerol** 
Abone Rolünü ayarlarsınız
**!abonelog** 
Abone Log'u ayarlarsınız
**!abone-y-rol** 
Abone Yetkili Rolü Ayarlarsınız
**!abone** 
Abone rolü verirsiniz
`)
.setImage("https://cdn.discordapp.com/attachments/822099305983770626/823499910300958760/standard_4.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'aboneyardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};