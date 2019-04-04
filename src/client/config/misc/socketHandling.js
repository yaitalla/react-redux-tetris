import store from '../store';
import {alert} from '../../actions/alert';
import {addRoom} from '../../actions/addRoom';
import socket from './socketConnect';

import { LAUNCH_GAME, NEW_CONNECT, PAUSE_GAME, RESUME,
    USER_ID, ROOM_SENT, ROOM_CHOSEN, SHAPE_SENT } from '../constants';

const socketStream = () => {
    socket.on(ROOM_SENT, (data) => {
        store.dispatch(addRoom(data))
    })
    socket.on(NEW_CONNECT, (data) => {
        store.dispatch(data)
      })
      socket.on(LAUNCH_GAME, (data) => {
        console.log(data)
        store.dispatch(data)
      })
      socket.on(PAUSE_GAME, (data) => {
        store.dispatch(data)
      })
      socket.on(RESUME, (data) => {
        store.dispatch(data)
      })
      socket.on(USER_ID, (data) => {
        store.dispatch(data)
      })
      socket.on(ROOM_CHOSEN, (data) => {
        store.dispatch(data)
      })
      socket.on(SHAPE_SENT, (data) => {
        store.dispatch(data)
      })
}

export default socketStream;