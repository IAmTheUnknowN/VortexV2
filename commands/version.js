module.exports.run = function(client, message, args, level) {
    message.channel.send("Vortex v2, ***0.1.7*** Last command and things added **!!cmds** & **Muting capabilities** & **New setActivity Now Working!**")
}

module.exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
}

module.exports.help = {
    name: "version",
    description: "Give user Vortex's version",
    usage: "Vortex, version",
    aliases: [],
    permlevel: 0
}