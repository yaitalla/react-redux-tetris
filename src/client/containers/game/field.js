import React from 'react'
import { connect } from 'react-redux'
import {rows, field, boxe} from './style';
import DataBoard from './dataBoard'


const setStyle = (box, curr, shapes) => {
    if (box > 0) {
        return {
            border: '1px dashed #999',
             height: '25px',
             width: '25px',
             textAlign: 'center',
             backgroundColor: shapes[curr].color
         }
    } else {
        return boxe
    }
}

const Row = ({row, curr, shapes}) => {
    return (
        <div style={rows}>
            {
                row.map((box,i) => 
                    <div style={setStyle(box, curr, shapes)} key={i}>
                    </div>)
            }
        </div>
    )
} 

const GameField = ({grid, current, shapes}) => {
  //  console.log(grid, current, shapes)
    return (
        <div style={field}>
            {
                grid.map((rw, i) => <Row key={i} row={rw} curr={current} shapes={shapes}/>)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        grid: state.grid,
        current: state.shapeIndex,
        shapes: state.shapes
    }
}

export default connect(mapStateToProps)(GameField);