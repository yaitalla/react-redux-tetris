import {rotate} from '../../actions/rotate';
import {alert} from '../../actions/alert';
import store from '../store';
import { MOVING } from '../constants';
import move from '../../actions/move';

const keyboard = {
    37: 'left',
    38: 'rotate',
    39: 'right',
    40: 'down'
  };
  
  let keydownActive;
  const boardKeys = Object.keys(keyboard).map(e => parseInt(e, 10));
  const gridState = store.getState().grid;
  console.log(gridState)
  const inputs = () => 
  {
      const keyDown = (e) => {
      if (/*e.metaKey === true || */gridState.playing == false || boardKeys.indexOf(e.keyCode) === -1) {
        console.log('key pressed')
        return;
      }
      const type = keyboard[e.keyCode];
      if (type === keydownActive) {
          // store.dispatch(alert('pop alert ...'))
          return;
      }
      keydownActive = type;
      store.dispatch(move[type](gridState))
    };

    const keyup = (e) => {
          // console.log("key Up")
          //console.log(store.getState())
          store.dispatch(alert('pop alert ...'))
      }
        
  window.addEventListener('keydown', keyDown, {once: true});
  window.addEventListener('keyup', keyup, {once: true});
}

export default inputs;