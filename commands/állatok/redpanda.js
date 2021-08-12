const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "redpanda",
    category: "állatok",
    run: async (client, message, args) => {
        const url = "https://some-random-api.ml/img/red_panda";
        const facts = "https://some-random-api.ml/facts/cat"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.channel.send(`Hiba merült fel!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Vörös-Pandás Kép`)
            .setColor(`#f3f3f3`)
            .setImage(image.link)

        await message.channel.send(embed)
    }
}