import React from 'react'
import { connect } from 'react-redux'
import socket from '../../config/misc/socketConnect';
import {ENTER_ROOM} from '../../config/constants';
import { title } from './style';

const enterRoom = (room) => {
   socket.emit(ENTER_ROOM, room)
}

const RoomRow = (room) => {
    return (
        <div>
            {room.name}
            <button onClick={() => enterRoom(room.name)}>enter</button>

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