module.exports.run = function(client, message, args, level) {
    let i = 5;
    message.channel.sendMessage("Countdown: " + i + "s").then(message => {
        var countInterval = setInterval(() => {
          if(i === 1) {
            message.edit(i = "Countdown complete.");
            return clearInterval(countInterval);
          }
          message.edit("Countdown: " + (i = i - 1) + "s")
        }, 1000);
      })
}

module.exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
}

module.exports.help = {
    name: "countdown",
    description: "Counts down from 30",
    usage: "Vortex, countdown <countdownFrom30>",
    aliases: [],
    permlevel: 0
}