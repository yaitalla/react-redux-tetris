import { combineReducers } from 'redux';
import game from './game';
import grid from './grid';

const rootReducer = combineReducers({
    game,
    grid
  });
  
  export default rootReducer;