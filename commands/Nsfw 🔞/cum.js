const Discord = require('discord.js');
const superagent = require('superagent')

module.exports = {
    name: 'pcum',
    aliases: ['pcum'],
    category: 'Nsfw 🔞',
    utilisation: '{prefix}pcum',


  async execute(client, message, args) { 
    
  if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pcum'})
    .end((err, response) => {
      message.channel.send(new Discord.MessageAttachment(encodeURI(response.body.message), "sizar-team/pussy.png"));
    });
  } else {
    message.channel.send(":x: shotor faghat mitoni toie channel haie nsfw az command estefade koni :/") 
  }
}
}