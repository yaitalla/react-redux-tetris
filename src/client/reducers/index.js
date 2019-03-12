// import { ALERT_POP } from '../actions/alert'
import { ADD_ROOM } from '../actions/addRoom'
import {LOGIN_DATA, ROOM_CHOICE, YOUR_ID} from '../constants';

const initial_state = {
    currentShape: {},
    shapes: [],
    grid: [],
    yourId: '',
    userslist: [],
    roomlist: [],
    actualRoom: {
        name: '',
        owner: ''
    }
}

const gameReducer = (state = initial_state , action) => {
  switch(action.type){
    case YOUR_ID:
        return {
            ...state,
            yourId: action.id
        }
    case ADD_ROOM:
      return {
          ...state, 
          roomlist: action.room
        }
    case ROOM_CHOICE:
        return {
            ...state,
            actualRoom: action.actualRoom
        }
    case LOGIN_DATA:
        return {
          ...state, 
            roomlist: action.room,
            userlist: action.users
        }
    default: 
      return state
  }
}

export default gameReducer
