import axios from '../../api/axios'

// saving user data to redux on sign-up page
export const preSignUp = (payload) => {
  return async (dispatch, getState) => {
    try {
      console.log('masuk action', payload);
    } catch (err) {
      console.log(err);
    }
  }
  // console.log(payload, '<<< auth action signup')


  // return {
  //   type: 'CHANGE_USER', 
  //   payload
  // }
}

// saving user data to database after OTP 
export const signUp = (history) => {
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