import React from 'react'
import { connect } from 'react-redux'
import Pregame from './pregame';
import Game from './game';

const App = ({actualroom}) => {
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
