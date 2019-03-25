import React from 'react'
import PlayButton from './startbutton'
import { gameScreen } from './style'
import store from '../../store';
import {move} from '../../actions/move';
import {rotate} from '../../actions/rotate';
import { refresh } from '../../actions/refresh';
import Screen from './screen'
import { connect } from 'react-redux';


const controller = (field, shapes, i) => {
    const listener = (e) => {
        switch(e.keyCode) {
            case 39: //right
            store.dispatch(move('R', field, shapes, i))
            e.preventDefault();
                break;
            case 40: //down
            store.dispatch(move('D', field, shapes, i))
            e.preventDefault();
                break;
            case 38: //up
            store.dispatch(rotate(field, shapes, i))
            e.preventDefault();
                break;
            case 37: //left
            store.dispatch(move('L', field, shapes, i))
            e.preventDefault();
                break;
            default:
            store.dispatch(refresh())
            e.preventDefault();
                break;
            }
        }
    window.addEventListener('keydown', listener, { once: true});
}

const Game = ({shapeIndex, field, shapes}) => {
   if (shapeIndex >= 0) { controller(field, shapes, shapeIndex)}
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
        field: state.grid,
        nb: state.nb,
        shapes: state.shapes
    }
}

export default connect(mapStateToProps)(Game);