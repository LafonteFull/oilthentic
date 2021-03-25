const router = require('express').Router();
const PreSignUpController = require('../controllers/pre-signupController');

router.post('/', PreSignUpController.register);

module.exports = router;