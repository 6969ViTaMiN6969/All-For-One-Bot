//===========================================================================================================//
//======== Express ========
const express = require('express');
const app = express();
const port = 5000;
app.get('/', (req, res) => res.send('Bot Is Working Well!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//===========================================================================================================//
//======== Consol ========
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });  
require('discord-buttons')(client);
const { Player } = require('discord-player');
const sezar = require('./config/bot')
const prefix = sezar.discord.prefix
client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new Discord.Collection();
client.login(client.config.discord.token);


//===========================================================================================================//
//======== Loading Commands =========
fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));
    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});

//===========================================================================================================//
//======== Loading Events =========
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));
for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};
for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

//===========================================================================================================//
//======== Status Bot ========
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android";
client.on("ready", () => {
   function YousamPower() {
    let vazyiat = ["dnd","idle","online"] // online | dnd | idle | offline
    let godrat = Math.floor(Math.random() * vazyiat.length)
   client.user.setPresence({
     status: vazyiat[godrat] })
}; setInterval(YousamPower, 3000)
   function srza() {
    let sezar = [`${prefix}help`, `${prefix}play` , `${client.guilds.cache.size} Servers` ]
    let Power = Math.floor(Math.random() * sezar.length);
   client.user.setActivity(sezar[Power], {type: "WATCHING"});
        }; setInterval(srza, 3000)
  console.log(`${client.user.tag} Is Now Online :)`)
});


//===========================================================================================================//
//======== Bot Guild remove =========
client.on("guildDelete", guild => {
    const channel = client.channels.cache.get(process.env.CHANNEL_ID);
    const embed = new Discord.MessageEmbed()
    .setDescription(`من از **${guild.name}** لفت دادم`)
    .setColor("RANDOM")
    channel.send(embed)
  })


//===========================================================================================================//
//======== Bot Guild add =========
  client.on('guildCreate', guild => {
    const channel = client.channels.cache.get(process.env.CHANNEL_ID);
    const embed= new Discord.MessageEmbed()
    .setDescription(`من به **${guild.name}** جوین دادم`)
    .setColor("RANDOM")
    channel.send(embed)

  })



//===========================================================================================================//
//======== Bot Prefix ========
client.on('message', async message => {
if(!message.guild || message.author.bot) return;
if (message.content === `${prefix}prefix`) {
 var prf = await require('quick.db').fetch(`prefix_${message.guild.id}`)||process.env.PREFIX;
 let errorprefixEmbed = new Discord.MessageEmbed()
         .setColor("RANDOM")
         .setThumbnail(client.user.displayAvatarURL())
         .setTimestamp(Date.now())
         .setAuthor(`prefix of ${client.user.tag} shows👌🏻`,client.user.displayAvatarURL())
         .setFooter(`prefix shows to ${message.author.tag} |`,message.author.displayAvatarURL())
         .setDescription(`Prefix Dar In Server **${prf}** ASt`)
  message.channel.send(errorprefixEmbed)

    }
})

      


