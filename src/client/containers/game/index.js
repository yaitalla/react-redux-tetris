import React from 'react'
import { connect } from 'react-redux'
import StartButton from './startbutton'
import { gameScreen } from './style'
import GameField from './field';

// const controller = (total, field, id, shapes, down,
//     left, right, rotate, refresh, nbr, actualRoom) => {
//     const listener = (e) => {
//     switch(e.keyCode) {
//     case 39: //right
//         right(field, nbr, shapes, total-1)
//         e.preventDefault();
//         break;
//     case 40: //down
//         down(field, id, shapes, total-1, actualRoom)
//         e.preventDefault();
//         break;
//     case 38: //up
//         if (id != 6) {
//         rotate(field, shapes, total-1, nbr)
//         } else { refresh(field, nbr) }
//         e.preventDefault();
//         break;
//     case 37: //left
//         left(field, nbr, shapes, total-1)
//         e.preventDefault();
//         break;
//     default:
//         refresh(field, nbr)
//         e.preventDefault();
//     }
// }
// window.addEventListener('keydown', listener, {once: true});
// }

const Game = ({shapeIndex, field, shapeArray}) => {
    if (shapeIndex >= 0) { controller()}
    return (
        <div style={gameScreen}>
            {shapeIndex >= 0 ? <GameField grid={field}
                                current={shapeIndex}
                                shapes={shapeArray} />
                         : <StartButton/>}
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        field: state.grid,
        shapeIndex: state.shapeIndex,
        shapeArray: state.shapes
    }
}

export default connect(mapStateToProps)(Game);