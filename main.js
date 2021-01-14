const Discord = require('discord.js')
const client = new Discord.Client()

const roleClaim = require('./roleClaim')
const bienvenida = require('./bienvenida')
const logger = require('./logger')
const nameRegister = require('./nameRegister')
const memberCount = require('./memberCount')

client.on('ready', () => {
    console.log('Asistente listo')
    client.user.setActivity('a los nuevos aspirantes', {type: 'LISTENING'}).catch(console.error);
    roleClaim(client)
    bienvenida(client)
    logger(client)
    nameRegister(client)
    memberCount(client)
})

client.login(process.env.TOKEN)