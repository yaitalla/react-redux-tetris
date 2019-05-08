import React from 'react'
import { connect } from 'react-redux'
import Pregame from './pregame';
import Game from './game';
import inputs from '../config/misc/inputs';

const App = ({actualroom}) => {
  console.log('slt')
  
  return (
      <div>
      {
          actualroom  ? <Game/> : <Pregame /> 
      }
      </div>
      
    )
}

const mapStateToProps = (state) => {
  return {
    actualroom: state.actualRoom,

  }
}
export default connect(mapStateToProps, null)(App)
