import store from '../store';
import {alert} from '../../actions/alert';
import {addRoom} from '../../actions/addRoom';
import socket from './socketConnect';

import { LAUNCH_GAME, NEW_CONNECT, PAUSE_GAME, RESUME, MALUS,
    USER_ID, ROOM_SENT, ROOM_CHOSEN, SHAPES_SENT } from '../constants';

const socketStream = () => {
    socket.on(ROOM_SENT, (data) => {
        store.dispatch(addRoom(data))
    })
    socket.on(NEW_CONNECT, (data) => {
        store.dispatch(data)
      })
      socket.on(LAUNCH_GAME, (data) => {
        store.dispatch({type: RESUME})
        store.dispatch(data)
      })
      socket.on(PAUSE_GAME, (data) => {
        store.dispatch(data)
      })
      socket.on(RESUME, (data) => {
        store.dispatch(data)
      })
      socket.on(MALUS, (data) => {
        store.dispatch(data)
      })
      socket.on(USER_ID, (data) => {
        store.dispatch(data)
      })
      socket.on(ROOM_CHOSEN, (data) => {
        store.dispatch(data)
      })
      socket.on(SHAPES_SENT, (data) => {
        store.dispatch({
          type: SHAPES_SENT,
          shapes: data
        })
      })
}

export default socketStream;