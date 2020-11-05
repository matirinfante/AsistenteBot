const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const bienvenida = require('./bienvenida')

client.on('ready', () => {
    console.log('Asistente listo')

    bienvenida(client)
})

client.login(config.token)