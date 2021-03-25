const jwt = require('jsonwebtoken');
let SECRET_KEY = process.env.SECRET_KEY;

const tokenGenerate = (payload) => {
  return jwt.sign(payload, SECRET_KEY);
};

const checkToken = (access_token) => {
  return jwt.decode(access_token, SECRET_KEY);
};

module.exports = {
  tokenGenerate,
  checkToken
}