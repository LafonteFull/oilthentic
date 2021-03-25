const { PreSignup } = require('../models');
const { tokenGenerate } = require('../helpers/jwt');

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
      // const request_id = requestOTP(phone);
      const access_token = tokenGenerate(payload);
      const response = {
        // id,
        // name,
        // email,
        // phone,
        access_token
        // otp_message
      }
      res.status(201).json(response);
    })
    .catch(err => {
      next(err);
    })
  }
}

module.exports = Controller;