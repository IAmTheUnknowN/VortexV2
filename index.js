const express = require("express");

const https = require("https");

const app = express();

var port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  
  
      response.render('list');
  
  });
  
  
app.listen(port, () => {

      console.log('Vortex is running on http://localhost/:' + port + "!!");;
  
  });

  setInterval(() => {
    
     https.get('https://git.heroku.com/vortexv2.git');
    
    }, 900000);

    var i = setInterval(function(){
      https.get('https://git.heroku.com/vortexv2.git')
    }, 420000);

    setInterval(() => {
      setTimeout(function(){
        client.user.setActivity("Vortex, cmds")
      },3000);

      setTimeout(function(){
        client.user.setActivity("Check botinfo For Info!")
      },6000);

      setTimeout(function(){
        client.user.setActivity("Running Discord.js!")
      },9000);

      setTimeout(function(){
        client.user.setActivity("All Cmds Loaded!")
      },12000);

     }, 13000); 
     

const Discord = require(`discord.js`);
const client = new Discord.Client();
const ytdl = require(`ytdl-core`);
const request = require(`request`);
const { promisify } = require('util');
const readdir = promisify(require("fs").readdir);
const fss = require(`fs`);
const getYouTubeID = require(`get-youtube-id`);
const fetchVideoInfo = require(`youtube-info`);
const moment = require(`moment`);
const Enmap = require('enmap')
const EnmapLevel = require('enmap-level')

var config = JSON.parse(fss.readFileSync(`./settings.json`, `utf-8`));

var cmdprefix = "!!"

const yt_api_key = config.yt_api_key
const client_controller = config.client_controller;
const prefix = config.prefix;
const discord_token = config.discord_token;

client.config = require("./config.js")

require('./modules/functions.js')(client)
require('./util/eventLoader')(client);

client.commands = new Enmap()
client.aliases = new Enmap()

client.settings = new Enmap({provider: new EnmapLevel({name: 'settings', persistent: true})});

const init = async () => {
  const cmdFiles = await readdir("./commands/");
  client.log("log", `Loading a total of ${cmdFiles.length} commands.`);
  cmdFiles.forEach(f => {
    try {
      const props = require(`./commands/${f}`);
      if (f.split(".").slice(-1)[0] !== "js") return;
      client.log("log", `Loading Command: ${props.help.name}. 👌`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    } catch (e) {
      client.log(`Unable to load command ${f}: ${e}`);
    }
  });

  const evtFiles = await readdir("./events/");
  client.log("log", `Loading a total of ${evtFiles.length} events.`);
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    const event = require(`./events/${file}`);
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });

  client.levelCache = {};
  for (let i = 0; i < client.config.permLevels.length; i++) {
    const thisLevel = client.config.permLevels[i];
    client.levelCache[thisLevel.name] = thisLevel.level;
  }

};

init();

client.login(discord_token)

client.on(`ready`, function () {

});

process.on('unhandledRejection', error => console.log(`unhandledRejection:\n${error.stack}`))
.on('uncaughtException', error => {
    console.log(`uncaughtException:\n${error.stack}`)
         process.exit() //better to exit here.
})
.on('error', error => console.log(`Error:\n${error.stack}`))
.on('warn', error => console.log(`Warning:\n${error.stack}`));

client.on(`message`, function (message) {
    const member = message.member;
    const mess = message.content.toLowerCase();
    const args = message.content.split(` `).slice(1).join(` `);
    const msg = message.content.toLowerCase();   

});