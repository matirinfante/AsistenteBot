module.exports = (client) => {
    const channelId = '733424609814118450' // welcome channel
    const reglasId = '642189238716203017' // reglas
    const solicitudClaseId = '693970431748603965' // solicitud de clase
    const solicitudNombreId = '' // solicitud de nombre
    const solicitudHorarioId = '' // solicitud de horario
    const rrssId = '' // redes sociales

    client.on('guildMemberAdd', (member) => {
        console.log(member)
        const message = `Bienvenido <@${
            member.id
        }> al Batallón de la muerte, seré tu asistente de bienvenida. Si quieres ver cómo nos manejamos dentro del server pásate por ${member.guild.channels.cache
            .get(reglasId)
            .toString()}. Para comenzar tu camino como Clone Trooper pasate por los canales ${member.guild.channels.cache
            .get(solicitudClaseId)
            .toString()}`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}