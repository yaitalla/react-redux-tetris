import React from 'react'
import { connect } from 'react-redux'
import Roomlist from './roomlist';
import Roombutton from './roombutton';
import Userlist from './userlist'
import { gameInfo } from './style';

const Pregame = () => {
    return (
        <div>
            <Roombutton/>
            <div style={gameInfo}>
                <Roomlist/>
                <Userlist/>
            </div>
        </div>
    )
}

export default Pregame;