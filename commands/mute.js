exports.run = function(client, message, args, level) {
    let mutedlogs = message.guild.channels.find('name', 'muted-logs')
    let mainchannel = message.guild.channels.find('name', 'general')
    if(!mutedlogs) return mainchannel.send('Cannot find **muted-logs** channel');
    const reason = args.splice(1, args.length).join(' ');
    client.muteReason = reason;

    message.channel.send("Do you want to mute " + message.mentions.users.first() + "?  *Reply with* ***Yes*** *or* ***No***")
    collector = message.channel.createMessageCollector(m => m.author.id === message.author.id && m.channel.id === message.channel.id, {time : 15000}); // Create the message collector locked to the author in the message channel.
    collector.on('collect', collected => { // When a message is collected, this event triggers.
            if(collected.content.toLowerCase() === 'no') { // If response is 'no'
            collector.stop(); // Stop the collector.
              message.channel.send('Okay then.... ***Aborted***'); // Send a message.
            }else if(collected.content.toLowerCase() === 'yes') { // If response is 'yes'
            collector.stop(); // Stop the collector.                  
                    setTimeout(function(){
                      message.channel.send("User is Being Muted")
                    },500);
                    setTimeout(function(){
                      var adminmute = message.guild.roles.find('name', 'Owner');
                        if(message.member.roles.has(adminmute.id)) {
                          const toMute = message.guild.member(message.mentions.users.first());
                        toMute.addRole('404561198416396309');
                      }
                    },5000);
                    setTimeout(function(){
                      message.channel.send(message.mentions.users.first() + " Has been muted for 4 hours")
                    },6800);
                    setTimeout(function(){
                        message.channel.send("Sending" + message.mentions.users.first() + " To Muted Logs!")
                    },7400);
                    setTimeout(function(){
                        mutedlogs.send(message.mentions.users.first() + " Is logged in muted-logs")
                    },8600);
                    setTimeout(function(){
                      message.channel.send(message.mentions.users.first() + " **Has Been Logged**")
                    },10000);
                    setTimeout(function(){
                      toMute.removeRole('404561198416396309')
                    },14400000);
                } else(message.channel.send("You Cannot use that command! Error id = **No Owner Id Found. . .**"));
          })
          collector.on('end', collected => { // When the 30 seconds runs out.
            if(collected.size < 1) return message.channel.send(`Mute Command Aborted! Error id = **Took Too Long To Respond. . . Try Again. . .**`); // If no response, send a message.
          });
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3
};

exports.help = {
    name: "mute",
    description: "Mutes the user mentioned",
    usage: "mute <mention>"
}