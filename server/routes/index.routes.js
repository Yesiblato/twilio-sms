const {Router} = require('express');
const router = Router();

const { gettwilio, createTwilio } = require('../controllers/index.controller');

router.route('/').get(gettwilio)
router.route('/').post(createTwilio)

    

// router.get('/api/', (req, res) => {
//     res.send('hello World yesi')
// })

module.exports = router;