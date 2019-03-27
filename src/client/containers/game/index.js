import React from 'react'
import PlayButton from './startbutton'
import { gameScreen } from './style'
import store from '../../store';
import {move} from '../../actions/move';
import {down} from '../../actions/down'
import {rotate} from '../../actions/rotate';
import { refresh } from '../../actions/refresh';
import Screen from './screen'
import { connect } from 'react-redux';


const controller = (field, shapes, i, room) => {
    const listener = (e) => {
        switch(e.keyCode) {
            case 39: //right
            store.dispatch(move('R', field, shapes, i))
            e.preventDefault();
                break;
            case 40: //down
            store.dispatch(down(field, shapes, i, room))
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

const Game = ({shapeIndex, field, shapes, room}) => {
   if (shapeIndex >= 0) { controller(field, shapes, shapeIndex, room)}
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
        shapes: state.shapes,
        room: state.actualRoom
    }
}

export default connect(mapStateToProps)(Game);