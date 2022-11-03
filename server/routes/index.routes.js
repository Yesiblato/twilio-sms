const {Router} = require('express');
const router = Router();

const { gettwilio, createTwilio } = require('../controllers/index.controller');

router.route('/').get(gettwilio)
router.route('/').post(createTwilio)

module.exports = router;