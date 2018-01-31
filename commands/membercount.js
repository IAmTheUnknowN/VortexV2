module.exports.run = function(client, message, args, level) {
    message.channel.send("There are currently " + message.guild.memberCount + " members here.");
    setTimeout(function(){
        message.channel.send(`The Member Goal Is 100 For Now! Spread The Server Code: https://discord.gg/SaFMYmj`)
      },1000);
}

module.exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
}

module.exports.help = {
    name: "membercount",
    description: "Shows how many members in the guild",
    usage: "Vortex, membercount",
    aliases: [],
    permlevel: 0
}