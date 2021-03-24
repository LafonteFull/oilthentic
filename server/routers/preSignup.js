const router = require('express').Router();
const PreSignUpController = require('../controllers/pre-signupController');

router.post('/', PreSignUpController.register);

router.post('/check-otp', PreSignUpController.checkOTP);

module.exports = router;