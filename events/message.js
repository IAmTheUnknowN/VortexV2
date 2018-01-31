// const settings = require('../settings.json')
// module.exports = message => {
//     // if (!message.content.startsWith(settings.prefix)) return;
//     if (message.author.client) return;
//     let client = message.client;
//     if (message.author.client) return;
//     let command = message.content.split(' ').slice(settings.prefix.length);
//     let params = message.content.split(' ').slice(1);
//     let perms = client.elevation(message);
//     let cmd;
//     if (client.commands.has(command)) {
//         cmd = client.commands.get(command);
//     } else if (client.aliases.has(command)) {
//         cmd = client.commands.get(client.aliases.get(command));
//     }
//     if (cmd) {
//         if (perms < cmd.conf.permLevel) return;
//         cmd.run(client, message, params, perms);
//     }

// }

module.exports = (client, message) => {
    // if (message.author.client) return;

    let settings = client.config.defaultSettings;

    
     message.settings = settings;
    

    if (message.content.indexOf(settings.prefix) !== 0) return;
 
 
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g); 
    const command = args.shift().toLowerCase();
  
    const level = client.permlevel(message);
  

    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (!cmd) return;
  
    if (cmd && !message.guild && cmd.conf.guildOnly)
      return message.channel.send("This command is unavailable via private message. Please run this command in a guild.");
  
    if (message.channel.type !== "text" || client.config.defaultSettings.systemNotice === "true") {
      if (level < client.levelCache[cmd.conf.permLevel])
        return message.channel.send(`You do not have permission to use this command.
  Your permission level is ${level} (${client.config.permLevels.find(l => l.level === level).name})
  This command requires level ${client.levelCache[cmd.conf.permLevel]} (${cmd.conf.permLevel})`);
    }
    client.log("log", `${client.config.permLevels.find(l => l.level === level).name} ${message.author.username} (${message.author.id}) ran command ${cmd.help.name}`, "CMD");
    cmd.run(client, message, args, level);
  };