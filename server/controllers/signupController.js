const { Signup, PreSignup } = require('../models');
const { checkToken } = require('../helpers/jwt');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
const serviceSid = process.env.SERVICE_SID

class Controller {
  static async becomeMember (req, res, next) {
    try {
      const { access_token } = req.headers;
  
      const decodedToken = checkToken(access_token)
      
      const userData = await PreSignup.findByPk(decodedToken.id)
  
      if (userData) {
        await client.verify.services(serviceSid)
        .verifications
        .create({to: userData.phone, channel: 'sms'})
        .then(verification => {
          console.log(verification.status)
          res.status(201).json({ message: verification.status})
          })
      } else {
        throw { name: 'resourceNotFound'}
      }
    } catch (err) {
      next(err)
    }
  }

  static async checkOTP (req, res, next) {
    try {
      const { OTP, location, memberId, preSignupId } = req.body
  
      const userData = await PreSignup.findByPk(preSignupId)
  
      await client.verify.services(serviceSid)
        .verificationChecks
        .create({to: userData.phone, code: OTP})
        .then(verification_check => {
          if (verification_check.status === 'approved') {
            console.log(verification_check.status, 'check otp')
            const input = {
              role: location ? 'No Leader' : 'Know Leader',
              location: location ? location : 'Know Leader',
              memberId: memberId ? memberId: 'No Leader',
              preSignupId,
            }
            console.log(input);
            Signup.create(input, { returning: false})
            .then(() => {
              res.status(201).json({message: 'success create member'})
            })
          } else {
            throw { name: 'OTP Not Match'}
          }
        });
    } catch (err) {
      if (err.name === 'OTP Not Match') res.status(403).json({ message: 'OTP Not Match'})
      else {
        next(err);
      }
    }
  }
}

module.exports = Controller;