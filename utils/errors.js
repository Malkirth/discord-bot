const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment")
let config = require ("../botsettings.json")
const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
};


module.exports.noPerms = (message, perm) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setTitle("Vous n'avez pas les permissions requises!")
    .setColor(config.red)
    .addField("Permission requise", perm);
    message.channel.send(embed).then(m => m.delete(10000));
}
module.exports.infoBot = (message) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Error")
    .setColor(config.red)
    .setDescription("Impossible d'obtenir des informations sur cet utilisateur.");
    message.channel.send(embed).then(m => m.delete(10000));
}
module.exports.equalPerms = (message, user, perms) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(config.red)
    .setTitle("Error")
    .addField(`${user} has perms`, perms);
    message.channel.send(embed).then(m => m.delete(10000));
}

module.exports.botuser = (message) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Impossible de bannir un bot.")
    .setColor(config.red);
    message.channel.send(embed).then(m => m.delete(10000));
}

module.exports.cantfindUser = (channel) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Impossible de trouver cet utilisateur.")
    .setColor(config.red);
    channel.send(embed).then(m => m.delete(10000));
}

module.exports.noReason = (channel) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Error")
    .setDescription("Veuillez indiquez une raison pour bannir cet utilisateur.")
    .setColor(config.red);
    channel.send(embed).then(m => m.delete(10000));
}

module.exports.noinchanvocal = (message) => {
    let embed = new Discord.RichEmbed()
    .setTitle("**Erreur**")
    .setDescription('Connectez-vous à un channel vocal pour executer cette commande')
    .setColor(config.red)
    message.channel.send(embed)//.then(m => m.delete(10000));
    message.delete().catch();
}

module.exports.botpresence = (message) => {
    let embed = new Discord.RichEmbed()
    .setTitle("**Erreur**")
    .setDescription("Le bot n'est connecté dans aucun channel vocal.")
    .setColor(config.red)
    message.channel.send(embed)//.then(m => m.delete(10000));
    message.delete().catch();
}

module.exports.noevenchan = (message) => {
    let embed = new Discord.RichEmbed()
    .setTitle("**Erreur**")
    .setDescription("Vous n'êtes pas conecté dans le même channel vocal.")
    .setColor(config.red)
    message.channel.send(embed)//.then(m => m.delete(10000));
    message.delete().catch();
}