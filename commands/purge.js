module.exports.run = function(client, message, args, level) {
    var adm = message.guild.roles.find(`name`, `Owner`);
    if(message.member.roles.has(adm.id)) {
       var messagecount = args;
        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
        message.channel.send(`I have purged *** ${messagecount} *** messages with purge.`);
    }
}

module.exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "Administrator"
}

module.exports.help = {
    name: "purge",
    description: "Purges <number> of messages in channel",
    usage: "Vortex, purge <number>",
    aliases: [],
    permlevel: 3
}