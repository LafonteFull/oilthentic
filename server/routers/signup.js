const router = require('express').Router();
const SignUpController = require('../controllers/signupController');

router.post('/', SignUpController.becomeMember)

router.post('/check-otp', SignUpController.checkOTP);

module.exports = router;