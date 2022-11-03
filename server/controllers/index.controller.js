const twilioCtrl = {};
const smsModel = require('../models/sms');
const { sendMessage } = require('../twilio/send-sms');

twilioCtrl.gettwilio = async (req, res)=> {
    const sms = await smsModel.find();
    res.json(sms)
}

twilioCtrl.createTwilio = async (req, res)=> {
    
    const { Body, To } = req.body;
    console.log('TO',To, Body);
    
    await sendMessage(Body, To);
    const newSms = new smsModel({
        Body: Body,
        From: '+14246221601',
        To
    })    

    console.log("new sms", newSms);
    await newSms.save();
    res.json({message: 'sms saved'});
}

module.exports = twilioCtrl;