const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async(client, swenlor, plasmic) => {

if(!plasmic[0]) return mete.channel.send(" Ters yazdırtmak istediğin şeyi yaz.")
swenlor.channel.send(plasmic.join(" ").split(" ").reverse().join(" "))


}
exports.conf = {
enabled: true, 
guildOnly: false,
aliases: [], 
permLevel: 0 
};

exports.help = {
name: 'tersyazı',
description: '',
usage: ''
}