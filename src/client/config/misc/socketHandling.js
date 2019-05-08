import store from '../store';
import {alert} from '../../actions/alert';
import {addRoom} from '../../actions/addRoom';
import { dropdown } from  '../../actions/dropdown';
import socket from './socketConnect';
import { fallInterval } from '../../actions/fall';

import { LAUNCH_GAME, NEW_CONNECT, PAUSE_GAME, RESUME, MALUS, MALUSED,
    USER_ID, ROOM_SENT, ROOM_CHOSEN, SHAPES_SENT, FALL, BEGIN } from '../constants';

const socketStream = () => {
    
    // socket.on(FALL, () => {
    //   if (store.getState().playing == true) {
    //     store.dispatch(dropdown())
    //     socket.emit(FALL, store.getState().actualRoom)
    //   }
    // })
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
        // store.dispatch(data)
        socket.emit(MALUSED, store.getState().grid)
      })
      socket.on(MALUSED, data => {
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