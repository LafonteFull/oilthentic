import { createStore, applyMiddlewares, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer'
import totalSharedReducer from './reducers/totalSharedReducer'

const rootReducer = combineReducers({
  totalShared: totalSharedReducer,
  user: authReducer
})

let store = createStore(rootReducer, applyMiddlewares(thunk))

export default store