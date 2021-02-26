const Discord = require("discord.js");
const ms = require("ms");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (bot, message, args) => {
    const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    if(!args[0]) return message.reply("Vous devez saisir une durée pour votre absence staff !")
    if(!args[1]) return message.reply("Vous devez saisir une raison pour votre absecne Staff !")
    let time = args[0]
    let raison = args.slice(1).join(" ")
    let guild = bot.guilds.get("641363438043660298");
    let member = guild.member(message.author);
    let nickn = member ? member.displayName : null;
    message.member.setNickname(`[AFK]${nickn}`);
    let embed = new Discord.RichEmbed()
        .setColor("#7FC6BC")
        .setTitle(`⏲️ | Absence staff de ${nickn} signalé pendant ${time} !`)
        .setDescription(raison)
    message.channel.send({embed: embed});
    message.delete().catch();

    setTimeout(() =>{
        let botmessage = `**⏲️ | L'absence de ${nickn} viens de prendre fin !**`
        message.channel.send(botmessage);
        message.member.setNickname(`${nickn}`);
    },ms(time))

    console.log(`Commande ${message.author.lastMessage} executé sur le serveur ${message.guild.name} dans le salon ${message.channel.name} par le membre ${message.author.username} le ${message.createdAt}`)
}

module.exports.help = {
    name:"absence"
}