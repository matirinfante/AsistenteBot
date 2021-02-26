const firstMessage = require('./firstMessage.js')

module.exports = (client) => {
    const channelId = '785638580008910868'

    const getEmoji = (emojiName) =>
        client.emojis.cache.find((emoji) => emoji.name === emojiName)

    const emojis = {
        SPOILER_Asalto: '• Clon Asalto',
        SPOILER_Pesado: '• Clon Pesado',
        SPOILER_Medico: '• Clon Médico',
        SPOILER_Especialista: '• Clon Especialista'
    }

    const reactions = []

    let emojiText = '**¡Bienvenido a la selección de clase, aspirante!**\nComo parte de tus comienzos en este batallón, deberás elegir ' +
        'la clase que más se acomode a ti y que usarás durante los entrenamientos y las raid.\n\n' +
        'Es muy sencillo, solo debes hacer clic en la opción que corresponda a las clases básicas disponibles. *(Ten en cuenta que una vez elegido, no cambiará)*\n\n'
    for (const key in emojis) {
        const emoji = getEmoji(key)
        reactions.push(emoji)

        const role = emojis[key]
        emojiText += `${emoji} -> ${role}\n`
    }

    firstMessage(client, channelId, emojiText, reactions)

    const handleReaction = (reaction, user, add, msg) => {

        idCanalRegistro = '785521997245317120'
        idAspirante = '702732926361665567'
        idPelotonAlfa = '710832698163200001'
        idRecluta = '701962200126062683'
        idAspiranteIncompleto = '799116203976687636'

        if (user.id === '773990547382992956') {
            return
        }
        const emoji = reaction._emoji.name

        const {guild} = reaction.message
        const canalRegistro = msg.client.channels.cache.get(idCanalRegistro)
        const roleName = emojis[emoji]
        if (!roleName) {
            return
        }
        const role = guild.roles.cache.find((role) => role.name === roleName)
        const member = guild.members.cache.find((member) => member.id === user.id)
        if (add) {
            let tieneRol = member.roles.cache.find((role) => role.name.startsWith("• Clon")) === undefined
            if (!(tieneRol)) {
                msg.reactions.cache.find(r => r.emoji.name === emoji).users.remove(user);
                canalRegistro.send(`El clon **${user}** ha intentado cambiar de clase a **${roleName}**`)
            } else {
                member.roles.add(role)
                canalRegistro.send(`El clon **${user}** ha seleccionado la clase **${roleName}**`)
                if (member.nickname !== null && member.nickname.startsWith("CR ")) { //si el clon completó el registro
                    member.roles.remove(guild.roles.cache.get(idAspiranteIncompleto)) //idAspirante
                    member.roles.add(guild.roles.cache.get(idPelotonAlfa)) //idPelotonAlfa
                    member.roles.add(guild.roles.cache.get(idRecluta)) //idRecluta
                } else {
                    console.log("ROLE CLAIM: No tiene el registro completo")
                }
            }
        }
    }

    client.on('messageReactionAdd', (reaction, user) => {
        if (reaction.message.channel.id === channelId) {
            handleReaction(reaction, user, true, reaction.message)
        }
    })

    client.on('messageReactionRemove', (reaction, user) => {
        if (reaction.message.channel.id === channelId) {
            handleReaction(reaction, user, false, reaction.message)
        }
    })
}
