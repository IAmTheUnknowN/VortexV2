module.exports.run = function(client, message, args, level) {
    // const Discord = require('discord.js')
    // const embed = new Discord.RichEmbed()
    // .setTitle("Vortex V2 Running **V0.1.7**")
    // .addField("Creators ID's:", " **257673064446164992** ", " AKA ", "**UnknowN**", " & ", " **240965846480977920** ", " AKA ", "**Riptides**")
    // .addField("Run by:", "Discord.js")
    // .addField("Uptime:", client.uptime + "ms")
    // .addField(`User Ping:`, `(took: ${message.createdTimestamp - message.createdTimestamp}ms)`)
    // .addField(`Latest Update:`, `**Command Handlers! Also Eval For The Co-Scripter And The Owner**`)
    // .addField(`Before Latest Update:`, "**Muting Capablities Do Vortex, mute <usernamehere>**")
    // message.channel.send({embed})

    message.channel.send({embed: {
        color: 0x00AE86,
          author: {
            name: message.member.user.username,
            icon_url: message.member.user.avatarURL
          },
          fields: [{
          name: `Vortex V2`,
          value: `**V0.1.7**`
          },
          {
          name: `Creators ID's`,
          value: `**257673064446164992**, AKA, **UnknowN**, &, **240965846480977920**, AKA, **Riptides**`
          },
          {
          name: `Run by`,
          value: `**Discord.js**`
          },
          {
            name: `Uptime`,
            value: `${client.uptime} "ms"`
          },
          {
            name: `User Ping`,
            value: `Took: ${message.createdTimestamp - message.createdTimestamp}ms`
          },
          {
          name: `Latest Update`,
          value: `**Command Handlers! Also Eval For The Co-Scripter And The Owner**`
          },
          {
          name: `Before Latest Update`,
          value: `**Muting Capablities Do Vortex, mute <usernamehere>**`
          },
          {
            name: `Member Goal`,
            value: `**100!**`
          },
          {
            name: `Welcome Message`,
            value: "```True```"
          },
          {
            name: `Leaving Message`,
            value: "```False```"
          },
          {
            name: `Discord Invite Link`,
            value: `**Invite As Many People As You Can And Get A Free Role! Heres The Code:** https://discord.gg/SaFMYmj`
          },]
        }});
}

module.exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
}

module.exports.help = {
    name: "botinfo",
    description: "Shows bots info",
    usage: "Vortex, botinfo",
    aliases: [],
    permlevel: 0
}