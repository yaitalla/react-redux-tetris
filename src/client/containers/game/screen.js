import GameField from './field';
import DataBoard from './dataBoard';
import { gameScreen } from './style';
import React from 'react';
import { connect } from 'react-redux';
import GameOver from './gameOver';

const Screen = ({nb, go}) => {
    return (
        <div style={gameScreen}>
            {
                go == true ? <GameOver/> : null
            }
            <GameField/>
            <DataBoard/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return  {
        nb: state.nb,
        go: state.gameOver
    }
}

export default connect(mapStateToProps)(Screen);