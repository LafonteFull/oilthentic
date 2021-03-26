const initialState = {
  totalShareAll: 10000
}

const totalSharedReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case "GET_CURRENT_SUM":
      return {
        ...state,
        totalShareAll: action.payload,
      }
    default:
      return state
  }
}

export default totalSharedReducer