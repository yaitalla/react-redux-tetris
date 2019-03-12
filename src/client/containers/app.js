import React from 'react'
import { connect } from 'react-redux'
import Pregame from './pregame';
import Game from './game'

const App = ({actualroom}) => {
  return (
    <div>
    {
        actualroom.name.length > 0 ? <Game/> : <Pregame /> 
    }
    </div>
    
  )
}

const mapStateToProps = (state) => {
  return {
    actualroom: state.actualRoom
  }
}

export default connect(mapStateToProps)(App);