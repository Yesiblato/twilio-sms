const {Router} = require('express');
const router = Router();

const { sendMessage } = require('../twilio/send-sms');

const { gettwilio, createTwilio } = require('../controllers/index.controller');

router.route('/').get(gettwilio)
router.route('/').post(createTwilio)

// router.route('/').post(createTwilio)

// router.post('/', (req, res) => {
//     console.log(req.body);
//     sendMessage(req.body.message, req.body.phone)
// })

// router.get('/api/', (req, res) => {
//     res.send('hello World yesi')
// })

module.exports = router;