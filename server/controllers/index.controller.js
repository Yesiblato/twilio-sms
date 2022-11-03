const twilioCtrl = {};
const smsModel = require('../models/sms');
const { sendMessage } = require('../twilio/send-sms');

twilioCtrl.gettwilio = async (req, res)=> {
    const sms = await smsModel.find();
    res.json(sms)
}

twilioCtrl.createTwilio = async (req, res)=> {
    
    const { Body, To } = req.body;
    
    await sendMessage(Body, To);
    const newSms = new smsModel({
        Body,
        From: '+14246221512',
        To
    })    

    await newSms.save();
    res.json({message: 'sms saved'});
}

module.exports = twilioCtrl;