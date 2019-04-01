import { ADD_ROOM } from '../actions/addRoom'
import {LOGIN_DATA, LEFT, ROOM_CHOICE, RESUME, DOWN, ROTATE,
    YOUR_ID, REFRESH, PAUSE, RIGHT, PLAY, ADD_SHAPE} from '../constants';

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
    colors: ['#fff6b6','#f4cfb2', '#ffcccc', '#d9c2f0', '#ffd232', '#b5e8f7','#d18162'],
    status: false,
    nb: 0
}

const gameReducer = (state = initial_state , action) => {
  switch(action.type){
    case ADD_SHAPE:
        return {
            ...state,
            grid: action.field,
            shapeIndex: action.i
        }
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
            grid: action.newGrid,
            shapes: action.shape
        }
    case ROTATE:
        return {
            ...state,
            grid: action.field,
            shapes: action.shape
        }
    case DOWN:
        return {
            ...state,
            grid: action.newGrid,
            shapes: action.shape
        }
    case LEFT:
        return {
            ...state,
            grid: action.newGrid,
            shapes: action.shape
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
