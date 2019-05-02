import React from 'react'
import { connect } from 'react-redux'
import {btn, img, sidebar, roomheader, roominfo, divroominfo} from './style';
import socket from '../../config/misc/socketConnect';
import { LAUNCH, PAUSE, RESUME, FALL } from '../../config/constants'
import logo from '../pregame/redribbon.jpg';


const launchGame = (room) => {
     socket.emit(LAUNCH, room)
     socket.emit(FALL, room)
}
const pauseGame = (room) => {
    socket.emit(PAUSE, room)
}
const resumeGame = (room) => {
   socket.emit(RESUME, room)
}
const roomHeader = (room, users) => {
    let ownerIndex = users.indexOf(room.owner) + 1
    return (
        <div style={roomheader}>
            <div style={divroominfo} >
                <h3 style={roominfo} >Room Name: {room.name}</h3>
                
            </div>
            <div style={divroominfo}>
                {
                    ownerIndex === 0 ? <h3 style={roominfo}>room owner disconnected</h3>
                    : <h3 style={roominfo}>Admin: Player{ownerIndex}</h3>
                }
            </div>
        </div>
    )
}
const PlayButton = ({myId, room, playing, shapeIndex, users}) => {
    return (
        <div style={sidebar}>
            {roomHeader(room, users)}
            <button disabled={myId != room.owner} 
                onClick={() => launchGame(room)} style={btn}>Start</button>
            <img style={img} src={logo} ></img>
            {
                shapeIndex >= 0 ? ( playing === true ? <button disabled={myId != room.owner} 
                                                    onClick={() => pauseGame(room)}
                                                style={btn}>Pause</button>
                                :   <button disabled={myId != room.owner}
                                                onClick={() => resumeGame(room)}
                                            style={btn}>Play</button>
                    ) : null
            }
            <p>dropdown disabled</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myId: state.yourID,
        room: state.actualRoom,
        playing: state.playing,
        users: state.users,
        shapeIndex: state.shapeIndex,
    }
}

export default connect(mapStateToProps)(PlayButton);