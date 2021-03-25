const Discord = require("discord.js");
const db = require("wio.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Roliz")
.setTitle("Roliz Logo Komutları")
.setThumbnail("https://cdn.discordapp.com/attachments/783331666223562787/796050603762778172/roliz.gif")
 .setTimestamp()
.setDescription("**!dinamik** = Dinamik logo oluşturur. \n **!altın** = Altın logo oluşturur.\n **!basit** = Basit logo oluşturur. \n **!elmas** = Elmas logo oluşturur. \n **!sarı** = Sarı logo oluşturur. \n **!neonmavi** = Neon mavi logo oluşturur. \n **!kalın** = Kalın logo oluşturur. \n **!habbo** = Habbo yazı tipinde logo oluşturur. \n **!iarrow** = Ok işaretli logo oluşturur. \n **!green** = Yeşil logo oluşturur. \n **!alev** = Alevli logo oluşturur. \n **!red** = Kırmızı logo oluşturur.")
.setImage("https://cdn.discordapp.com/attachments/822099305983770626/823499910300958760/standard_4.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}