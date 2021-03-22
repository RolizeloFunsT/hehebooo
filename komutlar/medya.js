const Discord = require("discord.js");

exports.run = (client, message) => {
  
  const Embed = new Discord.MessageEmbed()

  
  .setColor("RANDOM")
  .setTitle("Roliz")
  .setThumbnail('https://cdn.discordapp.com/attachments/777509193988046868/823607175624654858/roliiiizz.png')
  .setDescription(`
  Beni Davet Etmek İçin [Tıkla](https://discord.com/oauth2/authorize?client_id=761475156487962625&permissions=8&scope=bot)
  Destek Sunucum İçin [Tıkla](https://discord.gg/TQnNm2UuB4)
  Websitem İçin [Tıkla](https://rolizapp.glitch.me/)
  Bu komut ${message.author.username} tarafından istendi!
  `)
  
  .setImage("https://cdn.discordapp.com/attachments/822099305983770626/823499910300958760/standard_4.gif")
  .setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(Embed)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["invite", "davet"], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'medya', 
    description: 'The Help Command',
    usage: 'yardım'
};