const router = require('express').Router();
const preSignUpRouter = require('./preSignup');
const signUpRouter = require('./signup');
const sharedCountRouter = require('./sharedCount');

router.use('/pre-signup', preSignUpRouter);

router.use('/signup', signUpRouter);

router.use('/shared-count', sharedCountRouter);

module.exports = router;