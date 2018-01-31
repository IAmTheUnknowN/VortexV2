module.exports.run = function(client, message, args, level) {
    message.channel.send({embed: {
        color: 0x00AE86,
          author: {
            name: message.member.user.username,
            icon_url: message.member.user.avatarURL
          },
          fields: [{
          name: `Current Commands`,
          value: `• ping
• membercount
• meep`
          },
          {
          name: `Music Commands`,
          value: `• NULL **Awaiting Music Input Commands**`
          },
          {
          name: `Info`,
          value: `• version
• botinfo`
          },
          {
          name: `Helpful Commands`,
          value: `• cmds`
          },
          {
          name: `Admin Commands`,
          value: `• purge
• mute`
          },
          {
          name: `Roblox Commands`,
          value: `• rblxlt2
• rblxmm`
          },
          {
          name: `Prefix to Commands`,
          value: `Vortex, **"Command Here"**`
          }]
        }});
      }

module.exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
}

module.exports.help = {
    name: "cmds",
    description: "display all commands as of right now",
    usage: "Vortex, cmds: Sends All Commands",
    aliases: [],
    permlevel: 0
}