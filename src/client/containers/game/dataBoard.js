import React from 'react';
import {board, rows, field} from './style';
import { connect } from 'react-redux';


const applyColor = (color, mapKey) => {
  const setStyle = (color) => {
    return  {
      height: '24px',
      width: '24px',
      textAlign: 'center',
      background: color
    }
  }
  return (
    <div key={mapKey} style={setStyle(color)}>{''}</div>
  )
}

const Row = ({stat, color}) => {
  return (
    <div>
      <div style={rows}>
        {
          stat.map((square, i) =>
            square == '2' ? applyColor(color, i) :
                  applyColor("#f4f4f4", i)
          )
        }
      </div>
    </div>
    
  )
}
  

const shapeView = (data) => {
  return (
    <div>
      {
        data.shape.map((row, i) =>
          <Row key={i} color={data.color} stat={row}/>
        )
      }
    </div>
  )
}

const DataBoard = ({next}) => {
    return (
        <div style={field}>
          <h2>Next shape</h2>
        {
          next.shape ? shapeView(next) : null
        }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        next: state.shapes[state.shapeIndex+1]
    }
}

export default connect(mapStateToProps)(DataBoard)