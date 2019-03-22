import { ADD_ROOM } from '../actions/addRoom'
import {LOGIN_DATA, ROOM_CHOICE, RESUME,
    YOUR_ID, REFRESH, PAUSE, RIGHT, PLAY} from '../constants';

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
    },
    status: false,
    nb: 0
}

const gameReducer = (state = initial_state , action) => {
  switch(action.type){
    case RESUME:
        return {
            ...state,
            status: true
        }
    case REFRESH:
        return {
            ...state,
            nb: state.nb+1
        }
    case PAUSE:
        return {
            ...state,
            status: action.status
        }
    case RIGHT:
        return {
            ...state,
            grid: action.newGrid
        }
    case PLAY:
        return {
            ...state,
            shapes: action.arrayOfShapes,
            grid: action.field,
            shapeIndex: 0,
            status: action.status
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
