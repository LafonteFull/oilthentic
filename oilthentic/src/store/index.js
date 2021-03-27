import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer'
import totalSharedReducer from './reducers/totalSharedReducer'

const rootReducer = combineReducers({
  totalShared: totalSharedReducer,
  user: authReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store