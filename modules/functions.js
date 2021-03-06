module.exports = (bot) => {
    
    /*
    PERMISSION LEVEL FUNCTION
  
    This is a very basic permission system for commands which uses "levels"
    "spaces" are intentionally left black so you can add them if you want.
    NEVER GIVE ANYONE BUT OWNER THE LEVEL 10! By default this can run any
    command including the VERY DANGEROUS `eval` and `exec` commands!
  
    */
    bot.permlevel = message => {
      let permlvl = 0;
  
      const permOrder = bot.config.permLevels.slice(0).sort((p, c) => p.level < c.level ? 1 : -1);
  
      while (permOrder.length) {
        const currentLevel = permOrder.shift();
        if (message.guild && currentLevel.guildOnly) continue;
        if (currentLevel.check(message)) {
          permlvl = currentLevel.level;
          break;
        }
      }
      return permlvl;
    };
  
  
    /*
    LOGGING FUNCTION
  
    Logs to console. Future patches may include time+colors
    */
    bot.log = (type, msg, title) => {
      if (!title) title = "Log";
      console.log(`[${type}] [${title}]${msg}`);
    };
  
  
    /*
    SINGLE-LINE AWAITMESSAGE
  
    A simple way to grab a single reply, from the user that initiated
    the command. Useful to get "precisions" on certain things...
  
    USAGE
  
    const response = await bot.awaitReply(msg, "Favourite Color?");
    msg.reply(`Oh, I really love ${response} too!`);
  
    */
    bot.awaitReply = async (msg, question, limit = 60000) => {
      const filter = m=>m.author.id = msg.author.id;
      await msg.channel.send(question);
      try {
        const collected = await msg.channel.awaitMessages(filter, { max: 1, time: limit, errors: ["time"] });
        return collected.first().content;
      } catch (e) {
        return false;
      }
    };

    /*
    Points monitor

    Keep track of the points of the members of a guild
    with this monitoring system.

    Spaces are used to make the code look cleaner, more organized,
    and overall, more enjoyable to read.
    */
    
    // bot.pointsMonitor = (bot, message) => {
    //   if(message.channel.type !== 'text') return;
    //   if(message.author.bot) return;

    //   const settings = bot.settings.get(message.guild.id);

    //   if(message.content.startsWith(settings.prefix)) return;

    //   const score = bot.points.get(message.author.id) || { points: 0, level: 0 };
    //   score.points++

    //   const curLevel = Math.floor(0.3 * Math.sqrt(score.points));

    //   if(score.level < curLevel) {
    //     message.channel.send(`${message.member.user}  has leveled up to **${curLevel}**!`);
    //     score.level = curLevel;
    //   }

    //   bot.points.set(message.author.id, score)

    // };
  
  
    /*
    MESSAGE CLEAN FUNCTION
  
    "Clean" removes @everyone pings, as well as tokens, and makes code blocks
    escaped so they're shown more easily. As a bonus it resolves promises
    and stringifies objects!
    This is mostly only used by the Eval and Exec commands.
    */
    bot.clean = async (bot, text) => {
      if (text && text.constructor.name == "Promise")
        text = await text;
      if (typeof evaled !== "string")
        text = require("util").inspect(text, {depth: 0});
  
      text = text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203))
        .replace(bot.token, "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0");
  
      return text;
    };
  
  
    /* MISCELANEOUS NON-CRITICAL FUNCTIONS */
    
    // EXTENDING NATIVE TYPES IS BAD PRACTICE. Why? Because if JavaScript adds this
    // later, this conflicts with native code. Also, if some other lib you use does
    // this, a conflict also occurs. KNOWING THIS however, the following 2 methods
    // are, we feel, very useful in code. 
    
    // <String>.toPropercase() returns a proper-cased string such as: 
    // "Mary had a little lamb".toProperCase() returns "Mary Had A Little Lamb"
    String.prototype.toProperCase = function() {
      return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };    
    
    // <Array>.random() returns a single random element from an array
    // [1, 2, 3, 4, 5].random() can return 1, 2, 3, 4 or 5.
    Array.prototype.random = function() {
      return this[Math.floor(Math.random() * this.length)]
    };
  
    // `await bot.wait(1000);` to "pause" for 1 second.
    bot.wait = require("util").promisify(setTimeout);
  
    // These 2 process methods will catch exceptions and give *more details* about the error and stack trace.
    process.on("uncaughtException", (err) => {
      const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
      console.error("Uncaught Exception: ", errorMsg);
      // Always best practice to let the code crash on uncaught exceptions. 
      // Because you should be catching them anyway.
      process.exit(1);
    });
  
    process.on("unhandledRejection", err => {
      console.error("Uncaught Promise Error: ", err);
    });
  };