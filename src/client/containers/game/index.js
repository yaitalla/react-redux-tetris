import React from 'react'
import PlayButton from './startbutton'
import { gameScreen } from './style'
import store from '../../store';
import {move} from '../../actions/move';
import { refresh } from '../../actions/refresh';
import Screen from './screen'
import { connect } from 'react-redux';


const controller = (field) => {
    const listener = (e) => {
        switch(e.keyCode) {
            case 39: //right
            store.dispatch(move('R', field))
                break;
            case 40: //down
            store.dispatch(refresh())
            console.log('D')
                break;
            case 38: //up
            console.log('UP')
            store.dispatch(refresh())
                break;
            case 37: //left
            console.log('L')
            store.dispatch(refresh())

                break;
            default:
            store.dispatch(refresh())
                break;
            }
        }
    window.addEventListener('keydown', listener);
}

const Game = ({shapeIndex, field}) => {
   if (shapeIndex >= 0) { controller(field)}
    return (
        <div>
            <PlayButton/>
            <div style={gameScreen}>
                 {shapeIndex >= 0 ? <Screen/> : null}
            </div>
        </div>
        
    )

}
const mapStateToProps = (state) => {
    return {
        shapeIndex: state.shapeIndex,
        field: state.grid
    }
}

export default connect(mapStateToProps)(Game);