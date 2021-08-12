
module.exports = {
    name: "restart",
    category: "tulajdonosi",
    run: async (client, message, args) => {
        if (message.author.id !== '772911197384212480') {
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`Restarting bot...`)
        process.exit();
    }
}