const { PreSignup } = require('../models');
const { tokenGenerate } = require('../helpers/jwt');
const { requestOTP, checkOTP } = require('../middlewares/otp');

class Controller {
  static register (req, res, next) {
    const { name, email, phone } = req.body;
    const input = {
      name,
      email,
      phone
    }

    PreSignup.create(input)
    .then(({
      id,
      name,
      email,
      phone
    }) => {
      const payload = {
        id,
        name,
        email,
        phone
      };
      const request_id = requestOTP(phone);
      const access_token = tokenGenerate(payload);
      const response = {
        id,
        name,
        email,
        phone,
        access_token,
        // otp_message
      }
      res.status(201).json(response);
    })
    .catch(err => {
      next(err);
    })
  }

  static checkOTP (req, res, next) {
    const { OTP } = req.body
    const { request_id } = req.headers
    const checkOTPStatus = checkOTP(request_id, OTP);
    // console.log(checkOTPStatus);
    res.status(200).json(checkOTPStatus)
  }
}

module.exports = Controller;