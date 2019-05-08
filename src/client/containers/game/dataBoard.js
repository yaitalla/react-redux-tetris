import React from 'react';
import {board, rowstat, datafield, title} from './style';
import { connect } from 'react-redux';
import GameOver from './gameOver';


const applyColor = (color, mapKey) => {
  const setStyle = (color) => {
        return  {
          height: '18px',
          width: '18px',
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
      <div style={rowstat}>
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

const DataBoard = ({next, room, index, gameOver, score, ID}) => {
    if (gameOver == true) {
      return (
        <GameOver/>
      )
    }
    return (
        <div style={datafield}>
          <div style={title}>
            <h4>Next shape</h4>
            { next.shape ? shapeView(next) : null }
          </div>
          <div style={title}>
            <h4>opponents</h4>
            {
              room.users.map((row, i) => 
                row == ID ? null :
                <div key={i}>{row}</div>
              )
            }
          </div>
          <div style={title}>
            <h5>Score</h5>
            { score }
          </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        next: state.shapes[state.shapeIndex+1],
        room: state.actualRoom,
        index: state.shapeIndex,
        gameOver: state.gameOver,
        score: state.score,
        ID: state.yourID
    }
}

export default connect(mapStateToProps)(DataBoard)