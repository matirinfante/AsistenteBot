module.exports = (client) => {
    const channelId = '757954702003667005' // welcome channel
    const reglasId = '701917361434919042' // reglas
    const solicitudClaseId = '785638580008910868' // solicitud de clase
    const solicitudNombreId = '701921115358101504' // solicitud de nombre
    const solicitudHorarioId = '717771774997299301' // solicitud de horario
    const rrssId = '742132567796482050' // redes sociales

    client.on('guildMemberAdd', (member) => {
        console.log(member)
        const message = `Bienvenido <@${
            member.id
        }> al Batallón de la muerte, seré tu asistente de bienvenida. Si quieres ver cómo nos manejamos dentro del server pásate por ${member.guild.channels.cache
            .get(reglasId).toString()}. \nPara comenzar tu camino como Clone Trooper pasate por los canales ${member.guild.channels.cache
            .get(solicitudNombreId)
            .toString()} ${member.guild.channels.cache
            .get(solicitudClaseId)
            .toString()} ${member.guild.channels.cache
            .get(solicitudHorarioId)
            .toString()}. También puedes visitar nuestras redes sociales en ${member.guild.channels.cache
            .get(rrssId)
            .toString()}`

        const channel = member.guild.channels.cache.get(channelId)
        channel.send(message)
    })
}