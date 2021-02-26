module.exports = (client) => {
    String.prototype.isUpperCase = function () {
        return this.valueOf().toUpperCase() === this.valueOf();
    };
    String.prototype.isLowerCase = function () {
        return this.valueOf().toLowerCase() === this.valueOf();
    };

    client.on('message', (message) => {
        const canalNombres = '701921115358101504'
        const idAspirante = '702732926361665567'
        const idPelotonAlfa = '710832698163200001'
        const idRecluta = '701962200126062683'
        const idAspiranteIncompleto = '799116203976687636'
        const solicitudClaseId = '785638580008910868'

        if (message.channel.id === canalNombres) {

            if (!message.content.startsWith('!') || message.author.bot) return;

            const args = message.content.slice(1).trim().split(/ +/);
            const command = args.shift().toLowerCase();

            if (command === 'solicitar') {
                if (message.member.nickname === null) {
                    var numero = args.shift();
                    var nombre = args.shift();
                    console.log(numero);
                    console.log(nombre);

                    if (isNaN(numero) || nombre == null) {
                        message.channel.send('*El nombre ingresado es incorrecto ya que no cuenta con un número válido y/o no cuenta con un nombre*.\n\nRecuerda que tienes que ingresar *!solicitar #### Nombre* (cada # correspondiente a un número y un nombre a tu elección).')
                    } else if (!isNaN(numero) && nombre != null) {
                        if (numero.length !== 4) {
                            message.channel.send('El número ingresado no tiene 4 digitos. Recuerda que debe encontrarse entre 0000-9999');
                        } else if (message.channel.guild.members.cache.filter(member => member.nickname !== null && member.nickname.includes(numero)).size !== 0) {
                            message.channel.send('El número de identificación que ingresaste actualmente ya está asignado. Por favor, elige otro número de 4 digitos.')
                        } else {
                            console.log(nombre.charAt(0) + nombre.substr(1, nombre.length).toLowerCase())
                            if (nombre.isUpperCase()) {
                                nombre = nombre.charAt(0) + nombre.substr(1, nombre.length).toLowerCase();
                            } else if (nombre.isLowerCase()) {
                                nombre = nombre.charAt(0).toUpperCase() + nombre.substr(1, nombre.length);
                            }
                            message.member.setNickname(`CR ${numero} - ${nombre}`)
                            let tieneRol = message.member.roles.cache.find((role) => role.name.startsWith("Clon")) === undefined
                            if (!tieneRol) {
                                message.member.roles.remove(message.channel.guild.roles.cache.get(idAspirante)) //idAspirante
                                message.member.roles.add(message.channel.guild.roles.cache.get(idPelotonAlfa)) //idPelotonAlfa
                                message.member.roles.add(message.channel.guild.roles.cache.get(idRecluta)) //idRecluta
                                message.channel.send(`Felicitaciones recluta ${message.member.user}! Bienvenido al batallón!!`)
                                console.log("Listo.")
                            } else {
                                message.channel.send(`Bien hecho aspirante ${message.member.user}! Solo falta que completes tu registro en el canal ${message.member.guild.channels.cache
                                    .get(solicitudClaseId).toString()} `)
                                message.member.roles.add(message.channel.guild.roles.cache.get(idAspiranteIncompleto))
                                message.member.roles.remove(message.channel.guild.roles.cache.get(idAspirante))
                                console.log("NAME REGISTER: No tiene el registro completo");
                            }
                        }
                    }
                }
            } else {
                console.log("YA CAMBIÓ")
            }
        }
    });
}
