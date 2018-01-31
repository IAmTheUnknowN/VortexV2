module.exports.run = function(client, message, args, level) {
    message.channel.send(`ROBLOX LT2 => https://www.roblox.com/games/13822889/Lumber-Tycoon-2`)
        setTimeout(function(){
          message.channel.send(`Your link has been provided!`)
        },2000);
}

module.exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
}

module.exports.help = {
    name: "rblxlt2",
    description: "Gives user the roblox game Lumber Tycoon 2",
    usage: "Vortex, rblxlt2",
    aliases: [],
    permlevel: 0
}