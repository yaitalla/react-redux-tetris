import { ALERT_POP } from '../actions/alert'
import { LOGIN_DATA, DROPDOWN, ROTATE, RESUME, MOVING, REFRESH, LEFT, RIGHT,
    USER_ID, ADD_ROOM, ROOM_CHOICE, LAUNCH, PAUSE_GAME, DOWN, ADD_SHAPE, SHAPES_SENT } from '../config/constants';

const initial_state = {
    grid: [],
    shapes: [],
    shapeIndex: -1,
    nb: 0,
    moving: false,
    playing: false
}

const gameReducer = (state = initial_state , action) => {
  switch(action.type){
    case SHAPES_SENT:
        return {
            ...state,
            shapes: action.shapes
        }
    case REFRESH:
        return {
        ...state,
        nb: action.nbr
    }
    case RESUME:
        return {
            ...state,
            playing: true
        }
    case PAUSE_GAME:
        return {
            ...state,
            playing: false
        }
    case ROOM_CHOICE:
        console.log(action.actualRoom)
        return {
            ...state,
            actualRoom: action.actualRoom
        }
    case ADD_ROOM:
        return {
            ...state,
            rooms: action.roomlist
        }
    case ALERT_POP:
      return {
          ...state,
          message: action.message
        }
    case LOGIN_DATA:
      return {
          ...state,
          rooms: action.rooms,
          users: action.users,
          playing: false,
          nb: 0
        }
    case USER_ID:
       return {
        ...state,
        yourID: action.id,
        actualRoom: action.room
    }
    default: 
      return state
  }
}

export default gameReducer;


