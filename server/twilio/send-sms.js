const config = require('../config');
const client = require('twilio')(config.accountSid,config.authToken);

/**
 * Envía un mensaje de texto
 * @param {string} body - Este es el mensaje enviado
 * @param {string} phone - Numero de telefono
 */

async function sendMessage(Body, To) {
    try {
        const message = await client.messages.create({
            Body,
            From: '+12283358996',
            To:To,           
        })
        return message;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {sendMessage};