import React from 'react'
import PlayButton from './startbutton'
import { gameScreen } from './style'
import Screen from './screen'
import { connect } from 'react-redux';


const Game = ({shapeIndex}) => {
    return (
        <div>
            <PlayButton/>
            <div style={gameScreen}>
                 {shapeIndex >= 0 ? <Screen/> : null}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        shapeIndex: state.shapeIndex
    }
}

export default connect(mapStateToProps)(Game);