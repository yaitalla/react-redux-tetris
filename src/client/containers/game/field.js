import React from 'react'
import { connect } from 'react-redux'
import {rows, field, boxe} from './style';
import inputs from '../../config/misc/inputs'
// import socket from '../../config/misc/socketConnect';
import { applyColor } from '../../config/misc/applyColor';
import {shapeProvider} from '../../config/misc/shapeProvider';
import store from '../../config/store';
import { dropdown } from '../../actions/dropdown';

const setStyle = (box, curr, shapes, color) => {
    if (box == 2) {
        return (applyColor(color[shapes[curr].id]))
    } else if (box > 2){
        return (applyColor(color[box-3]))
    } else {
        return boxe
    }
}

const Row = ({row, curr, shapes, color}) => {
    return (
        <div style={rows}>
            {
                row.map((box,i) => 
                    <div style={setStyle(box, curr, shapes, color)} key={i}>
                    </div>)
            }
        </div>
    )
} 

const GameField = ({colors, moving, grid, current, shapes, room, playing, nbr}) => {
    if (playing === true){
            setTimeout(() => {
                store.dispatch(dropdown(grid, shapes[current].id, shapes, current, room))
            }, 500)
    }
    shapeProvider(current, shapes, room)
    // inputs()
    return (
        <div style={field}>
            {
                grid.map((rw, i) => <Row key={i} row={rw} curr={current} shapes={shapes} color={colors} nb={nbr}/>)
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        grid: state.grid.grid,
        current: state.grid.shapeIndex,
        shapes: state.grid.shapes,
        colors: state.grid.colors,
        nbr: state.game.nb,
        moving: state.game.moving,
        room: state.game.actualRoom,
        playing: state.game.playing
    }
}

export default connect(mapStateToProps)(GameField);