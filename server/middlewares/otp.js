const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: process.env.API_OTP_KEY,
  apiSecret: process.env.API_OTP_SECRET
})

const requestOTP = (phone) => {
  const recipient = '62' + phone.slice(1)
  nexmo.verify.request({
    number: recipient,
    brand: 'Oilthentic',
    code_length: '6',
  }, (err, result) => {
    console.log(err ? err : result);
    return err ? err : result.request_id
  })
}
const checkOTP = (request_id, code) => {
  nexmo.verify.check({
    request_id,
    code
  }, (err, result) => {
    console.log(err ? err : result);
    return err ? err : result
  })
}

module.exports = {
  requestOTP,
  checkOTP
}