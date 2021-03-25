import axios from '../../api/axios'

// saving user data to redux on sign-up page
export const signUp = (payload) => {
  console.log(payload, '<<< auth action signup')
  return {
    type: 'CHANGE_USER', 
    payload
  }
}

// saving user data to database after OTP 
export const addUserToDB = (history) => {
  return async (dispatch, getState) => {
    try {
      const { user } = getState().user
      await axios({
        method: 'post',
        url: '/signup',
        data: user
      })
    } catch (err) {
    console.log(err)
    }
  }
} 