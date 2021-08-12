const { MessageEmbed } = require("discord.js");
const mysql = require("mysql2");
const con = mysql.createConnection({

    host: "localhost",

    port: "3306",

    user: "wolfybot",

    password: "ABEuC9FmhshJIYCc",

    database: "wolfybot2",

    charset: "utf8mb4"

});
con.connect(err => {

    if(err) throw err;

    console.log('Adatbazisra csatlakozva! - Suggest');

});

module.exports = {
    name: "suggest",
    category: "rendszerek",
    run: async (client, message, args) => {
        con.query(`SELECT * FROM suggestionsys WHERE ServerID = ${message.guild.id}`, async (err, rows) => {
            message.delete();
            if(!rows[0]){
                const alma = new MessageEmbed()
                .setTitle("WolfySuggest")
                .setDescription(`A Suggest rendszer nincs beállítva! \n(Beállítás: **setsuggest <on/off/current> [#csatorna]**)`)
                .setTimestamp()
                .setFooter('Wolfy | WolfySuggest', client.user.displayAvatarURL())
                .setThumbnail('https://i.pinimg.com/originals/f1/88/9b/f1889b20c5ba5233582dfda4f07eef12.png')
                .setColor('#ff0000');
                message.channel.send(alma);
                return;
            }
            const channel = message.guild.channels.cache.get(rows[0].ChannelID);
            const alma = new MessageEmbed()
                .setTitle("Suggestion")
                .setAuthor(message.author.tag)
                .setDescription(`Ötlet: ${args.join(" ")}`)
                .setTimestamp()
                .setFooter('Wolfy | Wolfy Suggest', client.user.displayAvatarURL())
                .setThumbnail('https://i.pinimg.com/originals/f1/88/9b/f1889b20c5ba5233582dfda4f07eef12.png')
                .setColor('#ffbb00');
            const asd = await channel.send(alma);
            await asd.react("✅");
            await asd.react("❌");
            let almarado = message.channel.send('Suggestion elküldve! :))');
        })
    }
}