import GameField from './field';
import DataBoard from './dataBoard';
import { gameScreen } from './style';
import React from 'react';
import { connect } from 'react-redux';

const Screen = ({nb}) => {
    //shapeProvider(current, shapes, room)
    return (
        <div style={gameScreen}>
            <GameField/>
            <DataBoard/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return  {
        nb: state.nb
    }
}

export default connect(mapStateToProps)(Screen);