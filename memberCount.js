module.exports = (client) => {
    const channelId = '799297457292705862'

    const actualizarMiembros = guild => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Clones: ${guild.memberCount.toLocaleString()}`)
    }

    client.on('guildMemberAdd', (member) => actualizarMiembros(member.guild))
    client.on('guildMemberRemove', (member) => actualizarMiembros(member.guild))

    const guild = client.guilds.cache.get('701911182981857412')
    actualizarMiembros(guild)
}