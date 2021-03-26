const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

message.channel.send(new Discord.MessageEmbed().setColor('#000001').setTitle('Roliz Yasaklı Tag Sistem').setDescription(`
\`${client.ayarlar.prefix}oto-tag 🚀\`
**Sunucunuza giren kullanıcıların isminin başına koyar**

\`${client.ayarlar.prefix}oto-tag-log [#kanalEtiket]\`
**Sunucuya katılan kullanıcıların bilgilerini yollar**

\`${client.ayarlar.prefix}oto-isim [🚀 İsim | Yaş]\`
**Otomatik isim koyman için işe yarar**
\`\`\`Kapatmak istediğin komutlar aşağıda\`\`\`
\`${client.ayarlar.prefix}oto-tag-kapat \`
**Ayarlı olan tagınızı kapatır**

\`${client.ayarlar.prefix}oto-tag-log-kapat\`
**Ayarlı olan kanalı kapatır**`).setImage('https://cdn.discordapp.com/attachments/822099305983770626/823499910300958760/standard_4.gif'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'oto-isim-sistem'
};