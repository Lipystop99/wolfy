const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "lizard",
    category: "állatok",
    run: async (client, message, args) => {
        const url = "https://apis.duncte123.me/animal/lizard";

        let image, response;
        try {
            response = await axios.get(url, { headers: { 'User-Agent': 'Wolfy#5206'} } );
            image = response.data.data.file;

        } catch (e) {
            return message.channel.send(`Hiba merült fel!`)
        }
        const embed = new MessageEmbed()
            .setTitle(`Random Gyíkos Kép`)
            .setColor(`#f3f3f3`)
            .setImage(image)

        await message.channel.send(embed)
    }
}