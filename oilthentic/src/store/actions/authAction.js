import axios from '../../api/axios'

// saving user data to redux on sign-up page
export const preSignUp = (payload) => {
  return async (dispatch, getState) => {
    try {
      const { name, email, phone_number } = payload
      const { data } = await axios.post('/presign-up', {
        name,
        email,
        phone: '+62' + phone_number
      })
      localStorage.setItem('access_token', data.access_token)
    } catch (err) {
      err.response ? console.log(err.response.data) : console.log(err)
    }
  }
}

// saving user data to redux and send OTP request 
export const requestOTP = (payload) => {
  return async (dispatch, getState) => {
    try {
      const access_token = localStorage.getItem('access_token')
      const {data} = await axios({
        method: 'POST',
        url: '/sign-up',
        headers: {
          access_token: access_token,
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
      localStorage.setItem('id', data.userId)
    } catch (err) {
      err.response ? console.log(err.response.data) : console.log(err)
    }
  }
}

export const checkOTP = (payload) => {
  return async (dispatch, getState) => {
    try {
      console.log(payload, 'otp');
      const userId = localStorage.getItem('id')
      const { data } = await axios({
        method: 'POST',
        url: '/sign-up/check-otp',
        data: {
          OTP: payload.otp,
          memberId: payload.user.memberId,
          location: payload.user.location,
          preSignupId: userId
        }
      })
      console.log(data.message);
    } catch (err) {
      err.response ? console.log(err.response.data) : console.log(err)
    }
  }
}