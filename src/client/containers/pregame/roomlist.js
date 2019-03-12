import React from 'react'
import { connect } from 'react-redux'
import socket from '../../socket';
import {ENTER_ROOM} from '../../constants';

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
        <div>
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
        rooms: state.roomlist
    }
}

export default connect(mapStateTopProps)(Roomlist);