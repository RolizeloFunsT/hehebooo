const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**Kurallar**")
.setThumbnail('https://cdn.discordapp.com/attachments/777509193988046868/823607175624654858/roliiiizz.png')
.setDescription(`
<a:elamss:816328174228078592> Metin kanallarını ve ses kanallarını ne hakkında ise kanalları o şekilde kullanın.

<a:elamss:816328174228078592> Yazışırken spam ve flood yapmamaya, yazılarınız da abartı derecede italik, bold, emoji kullanmamaya ve harf uzatmamaya özen gösterin.

<a:elamss:816328174228078592> Birbirinizle yazışırken büyük harf (Caps Lock) kullanmaktan kaçının! Büyük harf kullanmak bağırmak demektir.

<a:elamss:816328174228078592> Üyelere karşı yazışırken ve konuşurken saygılı olun. Küfür ve argo kullanmamaya özen gösterin.

<a:elamss:816328174228078592> Müstehcen, kaba, nefret dolu şekilde içerikler paylaşmayın. Dini, siyasi konuşmadan uzak durun. Ortamı gerecek davranışlardan ve kavga çıkarmaktan kaçının.

<a:elamss:816328174228078592> Sesli konuşmalarda bağırarak konuşmayın. Garip sesler çıkararak diğer kişileri rahatsız etmeyin. Eğer mikrofonunuz kötü veya çok cızırtılı ise kullanmayın veya bas-konuş kullanın. Diğer insanları rahatsız etmeyin.

<a:elamss:816328174228078592> Rolleri etiketlemeyin ve kişileri gereksiz yere etiketlemeyin.

<a:elamss:816328174228078592> Sunucu içerisinde IP paylaşmak; hesap paylaşımı, satışı, takası, çekiliş kısacası ticaret yasaktır.

<a:elamss:816328174228078592> Yetki İstemek Yasaktır. Dolaylı Yoldan Yetki İstemek (Yetki İstediğini İma Etmek/Belirtmek) Yasaktır. Ona Biz Karar Veririz Zaten.

<a:elamss:816328174228078592> Lütfen Kurucu'yu Önemli Birşey Olmadığı Sürece" Etiketlemeyiniz.

:elamss: En Önemlisi ; Sunucumuzda KESİNLİKLE Reklam ve Küfür Yasaktır. (Direkt BAN Sebebidir !)
@here @everyone


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
    aliases: ["kural"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'kurallar', 
    description: 'The Help Command',
    usage: 'yardım'
};