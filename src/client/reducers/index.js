import { ADD_ROOM } from '../actions/addRoom'
import {LOGIN_DATA, ROOM_CHOICE, YOUR_ID, PLAY} from '../constants';

const initial_state = {
    shapeIndex: -1,
    shapes: [],//tableau de piece
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
    case PLAY:
        return {
            ...state,
            shapes: action.arrayOfShapes,
            grid: action.field,
            shapeIndex: 0
        }
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
