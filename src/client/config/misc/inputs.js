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
    console.log('inputs')
      let state = store.getState();

      const keyDown = (e) => {
        console.log('keydown')
        const type = keyboard[e.keyCode];
       console.log('type', type, boardKeys.indexOf(e.keyCode))
        if (/*e.metaKey === true || */state.playing == false || boardKeys.indexOf(e.keyCode) === -1) {
          console.log('key pressed', e.metaKey, boardKeys.indexOf(e.keyCode))
          store.dispatch({type: REFRESH, nbr: state.nb+1})
          return;
        }
        store.dispatch(move[type](state))
      if (state.moving == false) {
          // store.dispatch(move[type](state))
       }
        return;
     };

    const keyup = (e) => {
      console.log('keyup')
          if (state.moving == true) {
            store.dispatch({type: STOP})
            return;
          }
    }

  shapeProvider(state.shapeIndex, state.shapes, state.actualRoom)
  window.addEventListener('keydown', keyDown);
  // window.addEventListener('keyup', keyup);
}

export default inputs;
//   if (type === keydownActive) {
    //        store.dispatch(alert('release key'))
    //       return;
    //   }
      // keydownActive = type;