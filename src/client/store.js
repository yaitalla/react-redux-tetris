import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import gameReducer from './reducers'

const store = createStore(
    gameReducer,
    applyMiddleware(thunk, createLogger())
  )
  
  export default store;