const twilioCtrl = {};
const { sendMessage } = require('../twilio/send-sms');
const smsModel = require('../models/sms');

twilioCtrl.gettwilio = async (req, res)=> {
    const sms = await smsModel.find();
    res.json(sms)
}

twilioCtrl.createTwilio = async (req, res)=> {
    
    const { Body, To } = req.body;

    const newSms = new smsModel({
        Body: Body,
        From: '+13607767381',
        To
    })    
    await sendMessage(req.body.message, req.body.from, req.body.to);
    // console.log(response.sid);

    console.log("new sms", newSms);
    await newSms.save();
    res.json({message: 'sms saved'});
}

module.exports = twilioCtrl;