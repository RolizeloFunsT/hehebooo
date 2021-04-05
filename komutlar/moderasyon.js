const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("** ©️ **Roliz Bot (V12)** ©️ **]  \n\n> :floppy_disk: `!istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `!`")
.setThumbnail("https://cdn.discordapp.com/attachments/777509193988046868/823607175624654858/roliiiizz.png")
.setDescription(`

 :closed_lock_with_key: **Moderasyon Komutları** :closed_lock_with_key: 

> **» !duyuru** *BAKIMDA*
> **» !çekiliş** *BAKIMDA*
> **» !bot-bilgi**
> **» !ever-here-engel**
> **» !isim-değiştir**
> **» !kullanıcı-bilgi**
> **» !küfür-engel**
> **» !link-kısalt** *BAKIMDA*
> **» !modlog**
> **» !otorol**
> **» !ping**
> **» !prefix**
> **» !reklam-engel**
> **» !rol-al** 
> **» !rol-ver** 
> **» !rol-bilgi**
> **» !sa-as**
> **» !sayaç** 
> **» !sunucu-bilgi**
> **» !sunucu-kur**
> **» !temizle**
> **» !üye-durum**
> **» !yavaş-mod**
> **» !otoisim**

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
    name: 'moderasyon', 
    description: 'The Help Command',
    usage: 'moderasyon'
};