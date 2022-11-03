const config = require('../config');
const client = require('twilio')(config.accountSid,config.authToken);

/**
 * Envía un mensaje de texto
 * @param {string} body - Este es el mensaje enviado
 * @param {string} phone - Numero de telefono
 */

 async function sendMessage(body, phone) {
    try {
        const message = await client.messages.create({
            body,
            from: '+14246221601',
            to: phone
        })
        console.log('HOLA HAND --->',message);
        return message;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {sendMessage};