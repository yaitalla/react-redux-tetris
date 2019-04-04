import React from 'react'
import { connect } from 'react-redux'
import {rows, field, boxe} from './style';
import inputs from '../../config/misc/inputs'

const setStyle = (box, curr, shapes, color) => {
    if (box == 2) {
        return {
            border: '1px dashed #999',
             height: '15px',
             width: '15px',
             textAlign: 'center',
             backgroundColor: color[shapes[curr].id]
         }
    } else if (box > 2){
        return {
            border: '1px dashed #999',
             height: '15px',
             width: '15px',
             textAlign: 'center',
             backgroundColor: color[box-3]
         }
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

const GameField = ({colors, moving, grid, current, shapes, nbr}) => {
     if (moving != true) {inputs()}
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
        grid: state.grid,
        current: state.shapeIndex,
        shapes: state.shapes,
        colors: state.colors,
        nbr: state.nb,
        moving: state.moving
    }
}

export default connect(mapStateToProps)(GameField);