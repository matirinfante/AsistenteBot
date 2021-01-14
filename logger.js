module.exports = (client) => {
    client.on('voiceStateUpdate', (oldMember, newMember) => {
        const newUserChannel = newMember.channelID
        const oldUserChannel = oldMember.channelID
        const textChannel = client.channels.cache.get('799077024341426247')
        const currentdate = new Date();
        var datetime = "**[ " + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds() + " ]**";

        if (newUserChannel !== null && newUserChannel !== oldUserChannel) {
            console.log(oldUserChannel + " " + newUserChannel)
            textChannel.send(`${datetime} - ${newMember.member.user} se unió a ${newMember.channel}`)
        } else if (newUserChannel === null) {
            textChannel.send(`${datetime} - ${newMember.member.user} salió de ${oldMember.channel}`)
        }
    })
}