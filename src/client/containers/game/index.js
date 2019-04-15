import React from 'react'
import PlayButton from './startbutton'
import { gameScreen, game } from './style'
import Screen from './screen'
import { connect } from 'react-redux';


const Game = ({shapeIndex}) => {
    return (
        <div style={game} >
            <PlayButton/>
            <div style={gameScreen}>
                 {shapeIndex >= 0 ? <Screen/> : null}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        shapeIndex: state.grid.shapeIndex
    }
}

export default connect(mapStateToProps)(Game);