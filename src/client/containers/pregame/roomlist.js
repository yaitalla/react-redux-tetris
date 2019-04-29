import React from 'react'
import { connect } from 'react-redux'
import socket from '../../config/misc/socketConnect';
import {ENTER_ROOM} from '../../config/constants';
import { title, flex, btn, btnRoom, styleRoom, font } from './style';

const enterRoom = (room) => {
   socket.emit(ENTER_ROOM, room)
}

const RoomRow = (room) => {
    return (
        <div>
            <div style={styleRoom}>
                <div style={font} >{room.name}</div>
                <button  style={btnRoom} onClick={() => enterRoom(room.name)}>enter</button>
            </div>
        </div>
    )
    
}

const Roomlist = ({rooms}) => {
    return (
        <div style={title}>
            <h4>availble rooms</h4>
            {
                 rooms ? rooms.map((rm, i) => <div key={i}>{RoomRow(rm)}</div>)
                 : null
            }
        </div>
    )
}

const mapStateTopProps = (state) => {
    return {
        rooms: state.rooms
    }
}

export default connect(mapStateTopProps)(Roomlist);