import { ALERT_POP } from '../actions/alert'
import { LOGIN_DATA, GAME_OVER, ROTATE, RESUME, MALUSED, REFRESH, LEFT, RIGHT,
    USER_ID, ADD_ROOM, ROOM_CHOICE, LAUNCH, PAUSE_GAME, STOP,
    DOWN, ADD_SHAPE, SHAPES_SENT, DROPDOWN, FALL_CONTROL } from '../config/constants';

const initial_state = {
    grid: [],
    shapes: [],
    shapeIndex: -1,
    playing: false,
    colors: [],
    nb: 0,
    moving: false,
    gameOver: false,
    shapereq: false,
    score: 0
}

const rootReducer = (state = initial_state, action) => {
    switch(action.type){
        case LOGIN_DATA:
            return {
                ...state,
                rooms: action.rooms,
                users: action.users,
                playing: false,
                nb: 0
            }
        case REFRESH:
        //console.log(state.nb)
                return {
                ...state,
                nb: action.nbr
            }
        case USER_ID:
            return {
            ...state,
            yourID: action.id,
            actualRoom: action.room
        }
        case LAUNCH:
            return {
                ...state,
                grid: action.field,
                shapes: action.arrayOfShapes,
                playing: true,
                colors: ['#fff6b6','#f4cfb2', '#ffcccc', '#d9c2f0', '#ffd232', '#b5e8f7','#d18162'],
                shapeIndex: 0,
                shapereq: false
            }
        case ADD_SHAPE:
            return {
                ...state,
                grid: action.field,
                shapeIndex: action.i,
                score: action.score == 0 ? state.score : state.score + action.score
            }
        case SHAPES_SENT:
            return {
                ...state,
                shapes: action.shapes,
                shapereq: true
            }
        case DOWN:
            return {
                ...state,
                grid: action.field,
                moving: true
            }    
        case LEFT:
            return {
                ...state,
                grid: action.field,
                moving: true
            }
        case RIGHT:
            return {
                ...state,
                grid: action.field,
                moving: true
            }
        case ROTATE:
            // console.log(state.grid, action.field)
            return {
                ...state,
                grid: action.field,
                shapes: action.shape,
                moving: true
            }
        case PAUSE_GAME:
            return {
                ...state,
                playing: false
            }
        case RESUME:
            return {
                ...state,
                playing: true
            }
        case ROOM_CHOICE:
            return {
                ...state,
                actualRoom: action.actualRoom
            }
        case ADD_ROOM:
            return {
                ...state,
                rooms: action.roomlist
            }
        case GAME_OVER:
            return {
                ...state,
                gameOver: true,
                playing: false
            }
        case DROPDOWN:
            return {
                ...state,
                grid: action.field,
                falling: true
            }
        case STOP:
            return {
                ...state,
                moving: false
            }
        case FALL_CONTROL:
            return {
                ...state,
                falling: false
            }
        default: 
            return state
    }
}

export default rootReducer;