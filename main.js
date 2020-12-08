const Discord = require('discord.js')
const client = new Discord.Client()

const roleClaim = require('./roleClaim')
const bienvenida = require('./bienvenida')

client.on('ready', () => {
    console.log('Asistente listo')
    client.user.setActivity('a los nuevos aspirantes', { type: 'LISTENING' }).catch(console.error);
    roleClaim(client)
    bienvenida(client)
})

client.login(process.env.TOKEN)