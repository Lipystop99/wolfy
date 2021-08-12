const discord =  require("discord.js")
module.exports = {
    name: "kpopvp",
    category: "játékok",
    run: async (client, message, args) => {
        const kpomessage1 = new discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL())
        .setFooter("Wolfy | KPO", 'https://cdn.discordapp.com/avatars/700016360830533713/8b1f734b87e37830956c719a88348560.png')
        .setTimestamp()
        .setColor("#5865f2");
        const papír = '<:wolfy_paper:844109784433426437>';
        const kő = '<:wolfy_rock:844109783777804288>';
        const olló = '<:wolfy_scrissors:844109783786061824>';
        kpomessage1.setTitle("KPO | 1-es Jatekos");
        kpomessage1.setDescription(`
        Kő: <:wolfy_rock:844109783777804288>
        Papír: <:wolfy_paper:844109784433426437> 
        Olló: <:wolfy_scrissors:844109783786061824>
        `);
        const msg = await message.channel.send(kpomessage1);
        msg.react(kő);
        msg.react(papír);
        msg.react(olló);

    }

}