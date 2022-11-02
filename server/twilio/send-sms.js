const config = require('../config');
const client = require('twilio')(config.accountSid,config.authToken);

async function sendMessage() {
    try {
        const message = await client.messages.create({
            to:config.phone,
            from: '+12283358996',
            body: 'my 10 first name'
        })
        console.log(message.sid);
    } catch (error) {
        console.log(error);
    }
}

sendMessage();