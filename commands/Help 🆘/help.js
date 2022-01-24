const {createPages} = require('discord-buttons-page-v12');
const Discord = require('discord.js')
const { MessageButton } = require('discord-buttons');

module.exports = {
    name: 'help',
    aliases: ['h','help me','komak'],
    category: 'Help',
    utilisation: '{prefix}help',
  async execute(client, message, args) { 
const prefix = client.config.discord.prefix; 
    let help = new Discord.MessageEmbed()
      help.setAuthor(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      help.setThumbnail(message.client.user.displayAvatarURL({ format: "png" }))
      help.setTitle(`${client.user.username} Help Commands :)`)
      help.setDescription(``)
      help.setURL('https://discord.gg/vgnhGXabNw')
      help.setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
      help.setColor("RANDOM")
      help.addField('**Bot Help**', `\`page 1\``, false)
      help.addField('**VC Filter Help**', `\`page 2\``, false)      
      help.addField('**Music Help**', `\`page 3\``, false)
      help.addField('**Self Bot Help**', `\`page 4\``, false)
      help.addField('**Ticket Help**', `\`page 5\``, false)
      help.addField(`**Links**`, `**[Support Server](${"https://discord.gg/5GYNec4urW"}) • [Invite](https://discord.com/oauth2/authorize?client_id=${message.client.user.id}&permissions=137775017040&scope=bot)**`)

            let filters = new Discord.MessageEmbed()
      filters.setAuthor(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      filters.setThumbnail(message.client.user.displayAvatarURL({ format: "png" }))
      filters.setTitle(`${client.user.username}Filter Help Commands :)`)
      filters.setURL('https://discord.gg/vgnhGXabNw')
      filters.setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
      filters.setColor("RANDOM")
      filters.addField(`**${prefix}filter 8d**`,'`get filter= 8D`' , true)
      filters.addField(`**${prefix}filter gate**`,'`get filter= gate`' , true)
      filters.addField(`**${prefix}filter haas**`,'`get filter= haas`' , true)
      filters.addField(`**${prefix}filter phaser**`,'`get filter= phaser`' , true)
      filters.addField(`**${prefix}filter treble**`,'`get filter= treble`' , true)
      filters.addField(`**${prefix}filter tremolo**`,'`get filter= tremolo`' , true)
      filters.addField(`**${prefix}filter vibrato**`,'`get filter= vibrato`' , true)
      filters.addField(`**${prefix}filter reverse**`,'`get filter= reverse`' , true)
      filters.addField(`**${prefix}filter karaoke**`,'`get filter= karaoke`' , true)
      filters.addField(`**${prefix}filter flanger**`,'`get filter= flanger`' , true)
      filters.addField(`**${prefix}filter mcompand**`,'`get filter= mcompand`' , true)
      filters.addField(`**${prefix}filter surrounding**`,'`get filter= surrounding`' , true)
      filters.addField(`**${prefix}filter normalizer**`,'`get filter= normalizer`' , true)
      filters.addField(`**${prefix}filter nightcore**`,'`get filter= nightcore`' , true)
      filters.addField(`**${prefix}filter vaporwave**`,'`get filter= vaporwave`' , true)
      filters.addField(`**${prefix}filter bassboost**`,'`get filter= bassboost`' , true)
      filters.addField(`**${prefix}filter pulsator**`,'`get filter= pulsator`' , true)
      filters.addField(`**${prefix}filter subboost**`,'`get filter= subboost`' , true)  

        let music = new Discord.MessageEmbed()
      music.setAuthor(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      music.setThumbnail(message.client.user.displayAvatarURL({ format: "png" }))
      music.setTitle(`${client.user.username} Music Help Commands :)`)
      music.setDescription(``)
      music.setURL('https://discord.gg/vgnhGXabNw')
      music.setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
      music.setColor("RANDOM")
      music.addField(`**${prefix}play**`,'`Plays audio from YouTube or Soundcloud | Aliases: (p)`' , true)
      music.addField(`**${prefix}disconnect**`,'`disconnect at the voice | Aliases: (dc)`' , true)
      music.addField(`**${prefix}invite**`,'`Send bot invite link | Aliases: ()`' , true)
      music.addField(`**${prefix}loop**`,'`Toggle music loop | Aliases: (l)`' , true)
      music.addField(`**${prefix}lyrics**`,'`Get lyrics for the currently playing song | Aliases: (ly)`' , true)
      music.addField(`**${prefix}np**`,'`Show now playing song | Aliases: ()`' , true)
      music.addField(`**${prefix}pause**`,'`Pause the currently playing music | Aliases: ()`' , true)
      music.addField(`**${prefix}playlist**`,'`Play a playlist from youtube | Aliases: (pl)`' , true)
      music.addField(`**${prefix}search**`,'`Search and select videos to play | Aliases: ()`' , true)
      music.addField(`**${prefix}skip**`,'`Skip the currently playing song | Aliases: (s)`' , true)
      music.addField(`**${prefix}shuffle**`,'`Shuffle queue | Aliases: ()`' , true)
      music.addField(`**${prefix}stop**`,'`Stops the music | Aliases: ()`' , true)
      music.addField(`**${prefix}resume**`,'`Resume currently playing music | Aliases: (r)`' , true)
      music.addField(`**${prefix}queue**`,'`show what music playing in the queue | Aliases: (q)`' , true)
      music.addField(`**${prefix}clearqueue**`,'`request to clear queue | Aliases: (cq)`' , true)
      music.addField(`**${prefix}join**`,'`join bot on voice | Aliases: ()`' , true)
      music.addField(`**${prefix}filter**`,'`Change the sound quality and make it multidimensional|Aliases: ()`' , true)



        let self = new Discord.MessageEmbed()
      self.setAuthor(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL()}`)
      self.setThumbnail(message.client.user.displayAvatarURL({ format: "png" }))
      self.setTitle(`${client.user.username}Self Help Commands :)`)
      self.setDescription(``)
      self.setURL('https://discord.gg/vgnhGXabNw')
      self.setFooter("Created By Mr.SIN RE#1528 :)", `https://cdn.discordapp.com/attachments/902034619791196221/905054458793312327/2GU.gif`)
      self.setColor("RANDOM")
      self.addField(`**${prefix}ping**`, '`Show the bot is average ping | Aliases: ()`', false)
      self.addField(`**${prefix}debug**`, '`Shows the position of the robot | Aliases: ()`', false)
      self.addField(`**${prefix}serverlist**`, '`Indicates which servers Bot is a member of | Aliases: ()`', false)

    let btn2 = new MessageButton()
    .setStyle('url') 
    .setLabel('🤖Invite Bot') 
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${message.client.user.id}&permissions=412353895745&scope=bot`)
     let btn = new MessageButton()
    .setStyle('url') 
    .setLabel('🦾Server Support') 
    .setURL(`https://discord.gg/5GYNec4urW`)
    const embeds = [help, music ,filters, self];
    const ButtonStyle = "green"; // Or SECONDARY, SUCCESS, DANGER.
    
   const page=createPages(client, message, embeds, ButtonStyle, true, false);
    message.channel.send({ button: [btn,btn2],embed: page })
         message.react('🙏🏻')   
    }
}
