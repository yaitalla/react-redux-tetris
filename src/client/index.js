import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'                                                                                                                                                    
import {storeStateMiddleWare} from './middleware/storeStateMiddleWare'
import App from './containers/app'
import store from './config/store';
import socketStream from './config/misc/socketHandling';
import inputs from './config/misc/inputs';
ReactDom.render((
  <Provider store={store}>
    <App/>
  </Provider>
), document.getElementById('tetris'))
inputs()
socketStream()
