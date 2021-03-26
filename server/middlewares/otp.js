const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const requestOTP = (phone) => {
  client.verify.services('oilthentic-test')
             .verifications
             .create({to: phone, channel: 'sms'})
             .then(verification => {
               console.log(verification.status)
              });
}
const checkOTP = (request_id, code) => {
  return nexmo.verify.check({
    request_id,
    code
  }, (err, result) => {
    // console.log(err ? err : result);
    err ? err : result
  })
}

module.exports = {
  requestOTP,
  checkOTP
}