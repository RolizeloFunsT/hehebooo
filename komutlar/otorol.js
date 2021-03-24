const Discord = require('discord.js');
const qdb = require('quick.db');
exports.run = async(client, message, args) => {
var a = qdb.fetch(`prefix_${message.guild.id}`)
if(a){
  var p = a
  }
if(!a){
  var p = "m" 
}
if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(` ⚠️ Lütfen bir komut belirtin. Eğer otorolü kullanmayı bilmiyorsanız \`${p}otorol yardım\` ⚠️`))
if(args[0] === "ayarla"){
if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(` ⚠️ Lütfen bir komut belirtin. Eğer otorolü kullanmayı bilmiyorsanız \`${p}otorol yardım\` ⚠️`))
if(args[1] === "kanal"){
  var kanal = message.mentions.channels.first() || message.guild.channels.cache.get(args[2]);
  if(!kanal) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(` ⚠️ Lütfen bir kanal belirtin. Eğer otorolü kullanmayı bilmiyorsanız \`${p}otorol yardım\` ⚠️`))
  qdb.set(`otorolkanali_${message.guild.id}`, kanal.id)
  return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`:evett: Otorol kanalı ayarlandı! :evett:`))
};
if(args[1] === "üye"){
  var rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[2])
  if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(` ⚠️ Lütfen bir rol belirtin. Eğer otorolü kullanmayı bilmiyorsanız \`${p}otorol yardım\` ⚠️`))
  qdb.set(`otoroluye_${message.guild.id}`, rol.id)
  return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`:evett: Otorol üye rolü ayarlandı! :evett:`))
};
if(args[1] === "bot"){
    var rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[2])
 if(!rol) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(` ⚠️ Lütfen bir rol belirtin. Eğer otorolü kullanmayı bilmiyorsanız \`${p}otorol yardım\` ⚠️`))
  qdb.set(`otorolbot_${message.guild.id}`, rol.id)
  return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`:evett: Otorol bot rolü ayarlandı! :evett:`))
};
};
if(args[0] === "mesaj"){
if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(` ⚠️ Lütfen bir tür belirtin. Eğer otorolü kullanmayı bilmiyorsanız \`${p}otorol yardım\` ⚠️`))
if(args[1] === "embed"){
  var text = args.slice(2).join(' ')
  if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(` ⚠️ Lütfen bir mesaj belirtin. Eğer otorolü kullanmayı bilmiyorsanız \`${p}otorol yardım\` ⚠️`))
  if(text.length > 1800) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(` ⚠️ Mesajınız 1800 karakterden fazla! ⚠️`))
  qdb.set(`otorolmesajtur_${message.guild.id}`, "embed")
  qdb.set(`otorolmesaji_${message.guild.id}`, text)
  return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Otorol mesajı \`embed\` olarak ayarlandı!`))
}
if(args[1] === "normal"){
  var text = args.slice(2).join(' ')
  if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(` ⚠️ Lütfen bir mesaj belirtin. Eğer otorolü kullanmayı bilmiyorsanız \`${p}otorol yardım\` ⚠️`))
  if(text.length > 1800) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(` ⚠️ Mesajınız 1800 karakterden fazla! ⚠️`))
  qdb.delete(`otorolmesajtur_${message.guild.id}`)
  qdb.set(`otorolmesaji_${message.guild.id}`, text)
  return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Otorol mesajı \`düz yazı\` olarak ayarlandı!`))
}
if(args[1] === "resim"){
  if(qdb.has(`otorolmesajtur_${message.guild.id}`)){
  var link = args.slice(2).join(' ')
  if(!link) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bir link belirtin!"))
  if(!link.startsWith("http")) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bu bir link değil!"))
  qdb.set(`otorolresim_${message.guild.id}`, link)//gelsene bi şu link olayını deneyeq merak ettm
  return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Otorol embed mesaj resim/gif'i ayarlandı!"))
  }
  else return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bunu yapabilmem için embed mesaja ihtiyacın var dostum!"))
}
};
if(args[0] === "sıfırla"){
  if(!args[1]) {
    qdb.delete(`otorolkanali_${message.guild.id}`) 
    qdb.delete(`otoroluye_${message.guild.id}`) 
    qdb.delete(`otorolbot_${message.guild.id}`) 
    qdb.delete(`otorolmesajtur_${message.guild.id}`) 
    qdb.delete(`otorolmesaji_${message.guild.id}`) 
    qdb.delete(`otorolresim_${message.guild.id}`) 
    const embed = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTitle(`${client.user.username} | 🦾 Oto Rol Sistemi 🛠️`)
  .setDescription(`:oke: Bot'un bu sunucudaki \`otorol\` veritabanı sıfırlandı!`)
 .setFooter(`${message.author.username} istedi!`)
  .setTimestamp()
    function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }  
    
    message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`:loadgif: Bot'un Otorol Veritabanı sıfırlanıyor!`))
    .then((message)=>{
    sleep(5000)
    
      message.edit(embed)
    }
      )

  }
  if(args[1] === "kanal"){
    qdb.delete(`otorolkanali_${message.guild.id}`) 
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTitle(`${client.user.username} | 🦾 Oto Rol Sistemi 🛠️`)
    .setDescription(`Otorol Kanalı Sıfırlandı!`)
    .setFooter(`${message.author.username} istedi!`)
    .setTimestamp()
    return message.channel.send(embed)
  }
  if(args[1] === "üye"){
    qdb.delete(`otoroluye_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTitle(`${client.user.username} | 🦾 Oto Rol Sistemi 🛠️`)
    .setDescription(`Otorol Üye Rolü Sıfırlandı!`)
    .setFooter(`${message.author.username} istedi!`)
    .setTimestamp()
  }
 if(args[1] === "bot") {
    qdb.delete(`otorolbot_${message.guild.id}`)
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTitle(`${client.user.username} | 🦾 Oto Rol Sistemi 🛠️`)
    .setDescription(`Otorol Bot Rolü Sıfırlandı!`)
   .setFooter(`${message.author.username} istedi!`)
    .setTimestamp()
    return message.channel.send(embed) 
  }
  if(args[1] === "mesaj"){   qdb.delete(`otorolmesajtur_${message.guild.id}`) 
    qdb.delete(`otorolmesaji_${message.guild.id}`) 
    qdb.delete(`otorolresim_${message.guild.id}`) 
   const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTitle(`${client.user.username} | 🦾 Oto Rol Sistemi 🛠️`)
    .setDescription(`Otorol Mesajı Sıfırlandı!`)
    .setFooter(`${message.author.username} istedi!`)
    .setTimestamp()
    return message.channel.send(embed)
  }
}
if(args[0] === "bilgi"){
  var olumlu = ":oke:"
  var olumsuz = ":hayirr:"
  if(qdb.has(`otorolkanali_${message.guild.id}`)){
    var a = olumlu
  }
  else {
    var a = olumsuz 
  }
  if(qdb.has(`otoroluye_${message.guild.id}`)){
    var b = olumlu
  }
  else {
    var b = olumsuz
  }
  if(qdb.has(`otorolbot_${message.guild.id}`)){
    var c = olumlu
  }
  else{
    var c = olumsuz
  }
  if(qdb.has(`otorolmesaji_${message.guild.id}`)){
    var d = olumlu
  }
  else{
    var d = olumsuz
  }
  const embed = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTitle(`${client.user.username} | 🦾 Oto Rol Sistemi 🛠️`)
  .setThumbnail(client.user.avatarURL())
  .addField("Otorol kanalı", a, true)
  .addField("Otorol üye rolü", b, true)
  .addField("Otorol bot rolü", c, true)
  .addField("Otorol Mesajı", d, true)
  .setFooter(`${message.author.username} istedi!`)
  .setTimestamp()
  return message.channel.send(embed)
}
  
if(args[0] === "yardım"){
if(!args[1]){ const embed = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTitle(`${client.user.username} | 🦾 Oto Rol Sistemi 🛠️ `)
  .setDescription(`
  **🛠️ ${p}otorol ayarla kanal <kanal>** : Otorol kanalını ayarlar.
  
  **🧑 ${p}otorol ayarla üye <rol>** : Otorol üye rolünü ayarlar.
  
  **🤖 ${p}otorol ayarla bot <rol>** : Otorol bot rolünü ayarlar.
  
  **💬 ${p}otorol mesaj <tür> <mesaj>** : Otorol mesajını ayarlar.
  \`Detaylı bilgi için ${p}otorol yardım mesaj\`
  
  **☠️ ${p}otorol sıfırla** : Otorol veritabanını sıfırlar. 
  \`Detaylı bilgi için ${p}otorol yardım sıfırla\`
  
  **ℹ️ ${p}otorol bilgi** : Ayarlanan işlemleri gösterir.
  
  **❓ ${p}otorol yardım** : Otorol Yardım Menüsü
  `)
  .setFooter(`${message.author.username} istedi!`)
  .setTimestamp()
  return message.channel.send(embed)
}
if(args[1] === "mesaj"){
  const embed = new Discord.MessageEmbed()
  .setColor('BLACK')
  .setTitle(`${client.user.username} | 🦾 Oto Rol Sistemi 🛠️`)
  .setDescription(`
  **✉️ ${p}otorol mesaj embed <mesaj>** : Otorol mesajını \`embed\` olarak ayarlar.
  
  **🖼️ ${p}otorol mesaj resim <link>** : Embed Mesaj'a Gif/Resim ekler.
  
  **💬 ${p}otorol mesaj normal <mesaj>** : Otorol mesajını \`düz yazı\` olarak ayarlar.
  
  👱 \`{user}\` Kullanıcıyı belirtir.
  
  🔥 \`{guild}\` Sunucuyu belirtir.
  
  🧑 \`{role}\` Rol'ü belirtir.
  `)
  .setFooter(`${message.author.username} istedi!`)
  .setTimestamp()
  return message.channel.send(embed)
  }
  if(args[1] === "sıfırla"){
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTitle(`${client.user.username} | 🦾 Oto Rol Sistemi 🛠️`)
    .setDescription(`
    **☠️ ${p}otorol sıfırla** : Tüm veritabanını sıfırlar.
    
    **💬 ${p}otorol sıfırla mesaj** : Otorol mesajını sıfırlar.
    
    **🛠️ ${p}otorol sıfırla kanal** : Otorol kanalını sıfırlar.
    
    **🤖 ${p}otorol sıfırla bot** : Bot rolünü sıfırlar.
    
    **🧑 ${p}otorol sıfırla üye** : Üye rolünü sıfırlar.
    `)
    .setFooter(`${message.author.username} istedi..`)
    .setTimestamp()
    return message.channel.send(embed)
  }
}
};
exports.conf = {
  aliases: [],
  permLevel: 5
};
exports.help = {
  name: "otorol"
}