import { ALERT_POP } from '../actions/alert'
import { LOGIN_DATA, DROPDOWN, ROTATE, RESUME, MALUSED, REFRESH, LEFT, RIGHT,
    USER_ID, ADD_ROOM, ROOM_CHOICE, LAUNCH, PAUSE_GAME, DOWN, ADD_SHAPE, SHAPES_SENT } from '../config/constants';

const initial_state = {
    grid: [],
    shapes: [],
    shapeIndex: -1,
    playing: false,
    colors: []
}

const movesReducer = (state = initial_state , action) => {
  switch(action.type){
    case ADD_SHAPE:
        return {
            ...state,
            grid: action.field,
            shapes: action.shapes,
            shapeIndex: action.i
        }
    case MALUSED:
        return {
            ...state,
            grid: action.grid
        }
    case LAUNCH:
        return {
            ...state,
            grid: action.field,
            shapes: action.arrayOfShapes,
            playing: true,
            colors: ['#fff6b6','#f4cfb2', '#ffcccc', '#d9c2f0', '#ffd232', '#b5e8f7','#d18162'],
            shapeIndex: 0
        }
    case SHAPES_SENT:
        return {
            ...state,
            shapes: action.shapes
        }
    case DROPDOWN:
        return {
            ...state,
            grid: action.field,
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


