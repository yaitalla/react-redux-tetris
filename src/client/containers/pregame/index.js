import React from 'react'
import { connect } from 'react-redux'
import Roomlist from './roomlist';
import Roombutton from './roombutton';
import Userlist from './userlist'
import { gameInfo } from './style';
import Title from './title';

const Pregame = () => {
    return (
        <div>
            <Title/>
            <Roombutton/>
            <div style={gameInfo}>
                <Roomlist/>
                <Userlist/>
            </div>
        </div>
    )
}

export default Pregame;