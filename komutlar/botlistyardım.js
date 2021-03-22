const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Botlist Yardım Komutları')
.setTimestamp()
.addField('!bot-onayla botid sahipid ', 'Botu Onaylarsınız')
.addField('!bot-reddet botid sahipid sebep', 'Botu Reddedersiniz')
.addField('!bot-ekle', 'Bot eklersiniz')
.addField('!botlist-ayar', 'Ayarlama Komutlarını Gösterir')
.setImage('https://cdn.discordapp.com/attachments/822099305983770626/823499910300958760/standard_4.gif')
.setFooter('Roliz', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'botlistyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};