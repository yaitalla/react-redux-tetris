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

const movesReducer = (state = initial_state , action) => {
  switch(action.type){
    case LAUNCH:
        return {
            ...state,
            grid: action.field,
            shapes: action.arrayOfShapes,
            playing: true,
            colors: ['#fff6b6','#f4cfb2', '#ffcccc', '#d9c2f0', '#ffd232', '#b5e8f7','#d18162'],
            shapeIndex: 0
        }
    case DOWN:
        return {
            ...state,
            grid: action.field,
        }    
    case LEFT:
        return {
            ...state,
            grid: action.field,
            shapes: action.shapes
        }
    case RIGHT:
        return {
            ...state,
            grid: action.field,
            shapes: action.shapes
        }
    case ROTATE:
        return {
            ...state,
            grid: action.field,
            shapes: action.shape
        }

    default: 
      return state
  }
}

export default movesReducer;


