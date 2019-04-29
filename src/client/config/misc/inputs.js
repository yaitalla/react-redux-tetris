import {rotate} from '../../actions/rotate';
import {alert} from '../../actions/alert';
import store from '../store';
import { MOVING, REFRESH, STOP } from '../constants';
import move from '../../actions/move';
import { shapeProvider } from './shapeProvider';
import { dropdown } from '../../actions/dropdown';

const keyboard = {
    37: 'left',
    38: 'rotate',
    39: 'right',
    40: 'down'
  };
  
  let keydownActive;
  
  const boardKeys = Object.keys(keyboard).map(e => parseInt(e, 10));
  const inputs = () => 
  {
      let state = store.getState();
      // console.log('inputs',state)
      const keyDown = (e) => {
      if (e.metaKey === true || state.playing == false || boardKeys.indexOf(e.keyCode) === -1) {
        console.log('key pressed', e.metaKey)
        store.dispatch({type: REFRESH, nbr: state.nb+1})
        return;
      }
      const type = keyboard[e.keyCode];
    //   if (type === keydownActive) {
    //        store.dispatch(alert('release key'))
    //       return;
    //   }
      keydownActive = type;
      if (state.moving == false) {
        store.dispatch(move[type](state))
        return;
      } else {
        store.dispatch({type: STOP})
        return;
      }
      
    };

    const keyup = (e) => {
          store.dispatch(alert('pop alert ...'))
    }
    const playing = state.playing;
  // if (playing === true && state.moving == false){
  //           setTimeout(() => {
  //               store.dispatch(dropdown())
  //             //  store.dispatch(dropdown(grid, shapes[current].id, shapes, current, room))
  //           }, 500)
  //   }
  
  shapeProvider(state.shapeIndex, state.shapes, state.actualRoom)
  window.addEventListener('keydown', keyDown, {once: true});
  window.addEventListener('keyup', keyup, {once: true});
}

export default inputs;