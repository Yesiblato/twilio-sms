const twilioCtrl = {};

const smsModel = require('../models/sms');

twilioCtrl.gettwilio = async (req, res)=> {
    const sms = await smsModel.find();
    res.json(sms)
}

twilioCtrl.createTwilio = async (req, res)=> {
    const { Body, From, To } = req.body;
    const newSms = new smsModel({
        Body: Body,
        From: From,
        To: To
    })    
    console.log(newSms);
    await newSms.save();
    res.json({message: 'sms saved'})
}

module.exports = twilioCtrl;