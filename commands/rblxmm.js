module.exports.run = function(client, message, args, level) {
    message.channel.send(`ROBLOX M.M => https://www.roblox.com/games/463625050/HALLOWEEN-Mining-Madness`)
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
    name: "rblxmm",
    description: "Gives the user the roblox game Mining Madness",
    usage: "Vortex, rblxmm",
    aliases: [],
    permlevel: 0
}