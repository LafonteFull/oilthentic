const initialState = {
  user: {},
  otp: false
}

const authReducer = ( state = initialState, action ) => {
  switch (action.type) {
    case 'CHANGE_USER':
      return {
        ...state,
        user: action.payload
      }
    default: 
      return state
  }
}

export default authReducer
