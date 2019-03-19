import GameField from './field';
import DataBoard from './dataBoard';
import { gameScreen } from './style';
import React from 'react';
import { connect } from 'react-redux';

const Screen = () => {
    return (
        <div style={gameScreen}>
            <GameField/>
            <DataBoard/>
        </div>
    )
}

export default connect()(Screen);