const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("** ©️ **Roliz Bot  ©️ **  \n\n> :floppy_disk: `!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `!`")
.setThumbnail('https://cdn.discordapp.com/attachments/777509193988046868/823607175624654858/roliiiizz.png')
.setDescription(`

 :closed_lock_with_key: **Yardım Komutları** :closed_lock_with_key: 

> **» !eğlence :** Eğlence Komutlarını Görürsünüz.
> **» !moderasyon :** Moderasyon Komutlarını Görürsünüz.
> **» !logo :** Logo Komutlarını Görürsünüz.
> **» !medya :** Bot İle İlgili Bağlantılar.
> **» !aboneyardım :** Abone Komutlarını Atar.

** :gear: **Bilgilendirme** :gear: **
Bu komut ${message.author.username} tarafından istendi! 

`)
 .setImage("https://cdn.discordapp.com/attachments/822099305983770626/823499910300958760/standard_4.gif")
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'yardım'
};