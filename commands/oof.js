module.exports.run = function(client, message, args, level) {
        message.channel.send("Do you want to know what oof means? say **Yes** or **No**")
        const collector = message.channel.createMessageCollector(m => m.author.id === message.author.id && m.channel.id === message.channel.id, {time : 15000}); // Create the message collector locked to the author in the message channel.
        collector.on('collect', collected => { // When a message is collected, this event triggers.
                if(collected.content.toLowerCase() === 'no') { // If response is 'no'
                collector.stop(); // Stop the collector.
                  message.channel.send('Then why oof-ing ask?'); // Send a message.
                }else if(collected.content.toLowerCase() === `yes`) { // If response is 'yes'
                collector.stop(); // Stop the collector.
                message.channel.send('V V V I will list all links below! V V V');
                setTimeout(function(){
                    message.channel.send(`Heres a Urban Dictionary: https://www.urbandictionary.com/define.php?term=oof`)
                  },2000);
                  setTimeout(function(){
                    message.channel.send(`Heres a Youtube link to **OOF**: https://www.youtube.com/watch?v=joYBr5jaKbE`)
                  },4000);
                  setTimeout(function(){
                    message.channel.send(`Checking All Links Allow 4 Seconds to Check!`)
                  },6000);
                  setTimeout(function(){
                    message.channel.send(`Links Checked! All done!`)
                  },10000);
                }
              })
              collector.on('end', collected => { // When the 30 seconds runs out.
                if(collected.size < 1) return message.channel.send(`Message collection error ***UNDEFINED*** Id = "Too Long To Reply" Please send command again`); // If no response, send a message.
              });
}

module.exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: "User"
}

module.exports.help = {
    name: "oof?",
    description: "Gives the user the meaning of **oof**",
    usage: "Vortex, oof?",
    aliases: [],
    permlevel: 0
}