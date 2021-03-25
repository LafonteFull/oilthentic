const router = require('express').Router();
const preSignUpRouter = require('./preSignup');
const signUpRouter = require('./signup');
const sharedCountRouter = require('./sharedCount');

router.use('/presign-up', preSignUpRouter);

router.use('/sign-up', signUpRouter);

router.use('/shared-count', sharedCountRouter);

module.exports = router;