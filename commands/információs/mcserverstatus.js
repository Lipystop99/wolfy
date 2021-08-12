const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "mcserverstatus",
    aliases: ["mcstatus", "mcstat", "minecraftserverstatus", "mcs", "mcserver", "mcsinfo"],
	description: "Kiír információkat egy Minecraft szerverről.",
	category: "információs",
    run: async (client, message, args) => {
        message.delete();
        const ip = args.join(" ");
        if(!ip) return message.channel.send('Adj meg egy szerver IP-t!')
        let response;
        let data;
        try {
            response = await axios.get(url);
        } catch (e) {
            return message.channel.send(`Hiba merült fel!`)
        }
        if(response.online === false) return message.channel.send('A szerver offline, vagy nem létezik.')
        let name = 'response.info.clean.0'
		const embed = new MessageEmbed()
			.setDescription(`** __${ip}__ információi**`)
			.setColor('BLUE')
			.setThumbnail(`https://api.mcsrvstat.us/icon/${ip}`)
			.addField('Általános', [
				`**❯ Név:** ${name}`,
				`**❯ IP:** ${message.guild.id}`,
				//`**❯ Tulajdonos:** ${message.guild.owner.username} (${message.guild.ownerID})`,
				`**❯ Régió:** ${regions[message.guild.region]}`,
				`**❯ Boost szintje:** ${message.guild.premiumTier ? `${message.guild.premiumTier}. szint` : 'None'}`,
				`**❯ Tartalomszűrés:** ${filterLevels[message.guild.explicitContentFilter]}`,
				`**❯ Ellenőrzési szint:** ${verificationLevels[message.guild.verificationLevel]}`,
				`**❯ Létrehozva:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
				'\u200b'
			])
			.addField('Statisztikák', [
				`**❯ Rangok:** ${roles.length}`,
				`**❯ Emojik:** ${emojis.size}`,
				`**❯ Nem Animált Emojik:** ${emojis.filter(emoji => !emoji.animated).size}`,
				`**❯ Animált Emojik:** ${emojis.filter(emoji => emoji.animated).size}`,
				`**❯ Tagok száma:** ${message.guild.memberCount}`,
				`**❯ Emberek:** ${members.filter(member => !member.user.bot).size}`,
				`**❯ Botok:** ${members.filter(member => member.user.bot).size}`,
				`**❯ Szövegcsatornák:** ${channels.filter(channel => channel.type === 'text').size}`,
				`**❯ Hangcsatornák:** ${channels.filter(channel => channel.type === 'voice').size}`,
				`**❯ Boostok száma:** ${message.guild.premiumSubscriptionCount || '0'}`,
				'\u200b'
			])
			.addField('Állapot', [
				`**❯ Elérhető:** ${members.filter(member => member.presence.status === 'online').size}`,
				`**❯ Tétlen:** ${members.filter(member => member.presence.status === 'idle').size}`,
				`**❯ Elfoglalt:** ${members.filter(member => member.presence.status === 'dnd').size}`,
				`**❯ Láthatatlan:** ${members.filter(member => member.presence.status === 'offline').size}`,
				'\u200b'
			])
			//.addField(`Rangok [${roles.length - 1}]`, roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None')
			.setTimestamp();
		message.channel.send(embed);
    }
}