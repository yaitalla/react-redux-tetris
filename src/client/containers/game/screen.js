import GameField from './field';
import DataBoard from './dataBoard';
import { gameScreen } from './style';
import React from 'react';
import { connect } from 'react-redux';

const Screen = ({nbr}) => {
    return (
        <div style={gameScreen}>
            <GameField/>
            <DataBoard/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return  {
        nbr: state.nbr
    }
}

export default connect(mapStateToProps)(Screen);