import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'                                                                                                                                                    
import {storeStateMiddleWare} from './middleware/storeStateMiddleWare'
import App from './containers/app'
import store from './store'
import { NEW_CONNECT, ROOM_CHOSEN } from './constants';
import socket from './socket';


ReactDom.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('tetris'))

socket.on(NEW_CONNECT, (data) => {
  store.dispatch(data)
})

socket.on('private', (data) => {
  store.dispatch(data)
})

socket.on(ROOM_CHOSEN, (data) => {
  store.dispatch(data)
})

// store.dispatch(alert('Soon, will be here a fantastic Tetris ...'))
