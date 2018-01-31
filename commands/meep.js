module.exports.run = function(client, message, args, level) {
    message.channel.send("Meep Meep!")
}

module.exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
}

module.exports.help = {
    name: "meep",
    description: "Meep meep! what else lol",
    usage: "Vortex, meep",
    aliases: [],
    permlevel: 0
}