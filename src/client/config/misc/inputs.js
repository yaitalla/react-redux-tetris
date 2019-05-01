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

      const keyDown = (e) => {
        const type = keyboard[e.keyCode];
     //   console.log('type', type, boardKeys.indexOf(e.keyCode))
        if (e.metaKey === true || state.playing == false || boardKeys.indexOf(e.keyCode) === -1) {
          console.log('key pressed', e.metaKey)
          store.dispatch({type: REFRESH, nbr: state.nb+1})
          return;
        }
        if (state.moving == false) {
          store.dispatch(move[type](state))
        }
        return;
     };

    const keyup = (e) => {
      const type = keyboard[e.keyCode];
      //store.dispatch(alert('pop alert ...'))
          if (state.moving == true) {
            store.dispatch({type: STOP})
            return;
          }
    }
    const playing = state.playing;
  
    // if (playing === true && state.moving == false){
    //         setTimeout(() => {
    //             store.dispatch(dropdown())
    //             // store.dispatch({type: STOP})
    //         }, 500)
    // } else if (state.moving == true) {
    //             store.dispatch({type: STOP})
    // }
   
    // if (playing == true && state.moving == false) {
    //   setTimeout(() => {
    //     store.dispatch(dropdown())
    //   }, 500)
    // }
    
  shapeProvider(state.shapeIndex, state.shapes, state.actualRoom)
  window.addEventListener('keydown', keyDown, {once: true});
  window.addEventListener('keyup', keyup, {once: true});
}

export default inputs;
//   if (type === keydownActive) {
    //        store.dispatch(alert('release key'))
    //       return;
    //   }
      // keydownActive = type;