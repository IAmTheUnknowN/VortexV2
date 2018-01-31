module.exports.run = function(client, message, args, level) {
    message.channel.send(`Pong! ***(took: ${message.createdTimestamp - message.createdTimestamp}ms)***`);
}

module.exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
}

module.exports.help = {
    name: "ping",
    description: "Replys with pong and returns users ping",
    usage: "Requires users ping",
    aliases: [],
    permlevel: 0
}