const initialState = {
  user: {}
}

const authReducer = ( state = initialState, action ) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_USER":
      return {
        ...state,
        user: action.payload
      }
    default: 
      return state
  }
}

export default authReducer
