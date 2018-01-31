exports.run = async (bot, message, args, level) => { // eslint-disable-line no-unused-vars
    const code = args.join(" ");
    try {
      const evaled = eval(code);
      const clean = await bot.clean(bot, evaled);
      message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${await bot.clean(bot, err)}\n\`\`\``);
    }
  };
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ev', 'Eval'],
    permLevel: "Co Scripters"
  };
  
  exports.help = {
    name: "eval",
    description: "Evaluates arbitrary javascript.",
    category: "System",
    aliases: ["eval", "ev"],
    usage: "eval [...code]",
    permlevel: 8
  };