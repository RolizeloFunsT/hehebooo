const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("** ©️ **Roliz Bot  ©️ **  \n\n> :floppy_disk: `!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `!`")
.setThumbnail('https://cdn.discordapp.com/attachments/783331666223562787/796050603762778172/roliz.gif')
.setDescription(`

 :closed_lock_with_key: **Bot Komutları** :closed_lock_with_key: 

> **» !yaz :** Bot İstediğinizi Yazar.


** :gear: **Bilgilendirme** :gear: **
Bu komut ${message.author.username} tarafından istendi! 

`)
 .setImage("https://cdn.discordapp.com/attachments/783331666223562787/796053557240660028/rolizbanner.gif")
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["ana-komutlar", "anakomut"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'anakomutlar', 
    description: 'The Help Command',
    usage: 'yardım'
};