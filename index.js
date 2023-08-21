const Discord = require('discord.js');
const config = require("./Config.json")
const ytbl = require("ytdl-core");
const fs = require("fs");
const STF = require("./Staff.json");
const bot = new Discord.Client({disableEveryone : true});
const prefix = config.prefix
const AFF = require("./Affichage.json")
bot.commands = new Discord.Collection();

// function

// ----------------------------------
// Var
let Staff = [
  "Your id discord",
  "Exemple 28564685185641578"
]
// ----------------------------------

bot.on("ready", async () => {
  console.log(" ");
  console.log(`Logged in as ${bot.user.tag}!`);
  console.log(`Nombre de serveur: ${bot.guilds.size} Installer `);
  console.log(" ");
  console.log("----------");
  console.log(" ");
  console.log(bot.guilds.map(r => r.name + ` | **${r.memberCount}** members (Jifféo Familly)`));
  console.log(" ");
  console.log("----------");
  console.log(" ");
  console.log(AFF.AFCH1);
  console.log(AFF.AFCH2);
  console.log(AFF.AFCH3);
  console.log(AFF.AFCH4);
  console.log(AFF.AFCH5);
  console.log(AFF.AFCH6);
  console.log(" ");
  console.log("----------");
  bot.user.setStatus("online")
  let Statuses = [
    "Bonjour",
    `Help : ${prefix}help`,
    `${bot.guilds.size} Serveur`,
    `${bot.user.tag}`,
    'https://jiffeo.tv/'
  ]
  setInterval(function() {
    let status = Statuses[Math.floor(Math.random() * Statuses.length)];
    bot.user.setActivity(status, {type: "WATCHING"});
  }, 10000);
  setInterval(function(){
    var date = new Date();
    var Combien = date.getDate();
    var mois = date.getMonth();
    var seconds = date.getSeconds();
    var jour = date.getDay();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    if(jour === 1){
      var Jours = "Lundi"
    };
    if(jour === 2){
      var Jours = "Mardi"
    };
    if(jour === 3){
      var Jours = "Mercredi"
    };
    if(jour === 4){
      var Jours = "Jeudi"
    };
    if(jour === 5){
      var Jours = "Vendredi"
    };
    if(jour === 6){
      var Jours = "Samedi"
    };
    if(jour === 7){
      var Jours = "Dimanche"
    };
    Timer(Combien, mois, seconds, heure, Jours, minutes);
  }, 500)
});



fs.readdir("./Commands/", (err, files) => {
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Commande non trouver.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./Commands/${f}`);
    console.log(`Plugin : ${f} Activer !`);
    bot.commands.set(props.help.name, props);
  })
})

bot.on("guildMemberAdd", member => {
  member.createDM().then(channel => {
    return channel.send('Boenvenue sur le serveur ' + member.displayName);
  }
});
bot.on("guildMemberRemove", member =>{

})

bot.on("message", async msg => {
  let prefix = config.prefix;
  let msgArr = msg.content.split(" ");
  let commands = msgArr[0].toLowerCase();
  let args = msgArr.slice(1);
  let cmd = bot.commands.get(commands.slice(prefix.length));

  if(cmd) cmd.run(bot, msg, args);

});

function Timer(Combien, mois, seconds, heure, Jours, minutes){
};
bot.login(process.env.Token);
