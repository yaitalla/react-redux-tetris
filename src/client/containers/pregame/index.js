import React from 'react'
import { connect } from 'react-redux'
import Roomlist from './roomlist';
import Roombutton from './roombutton';
import Userlist from './userlist'
import { gameInfo } from './style';
import Title from './title';

const Pregame = ({rooms}) => {
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

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms
    }
}

export default connect (mapStateToProps)(Pregame);