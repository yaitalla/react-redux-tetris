import React from 'react'
import PlayButton from './startbutton'
import { gameScreen, game, fullscreen, roomheader } from './style'
import Screen from './screen'
import { connect } from 'react-redux';

const roomHeader = (room, users) => {
    let ownerIndex = users.indexOf(room.owner) + 1
    return (
        <div style={roomheader}>
            <div>
                <h3>Room Name : {room.name}</h3>
                {
                    ownerIndex === 0 ? <h3>room owner disconnected</h3>
                    : <h3>Owner : Player{ownerIndex}</h3>
                }
                
            </div>
        </div>
    )
}

const Game = ({shapeIndex, room, users}) => {
    return (
        <div style={fullscreen}>
            
            <div style={game} >
                <PlayButton/>
                <div style={gameScreen}>
                    {shapeIndex >= 0 ? <Screen/> : null}
                </div>
            </div>
        </div>
        
    )
}
const mapStateToProps = (state) => {
    return {
        shapeIndex: state.shapeIndex,
        room: state.actualRoom,
        users: state.users
    }
}

export default connect(mapStateToProps)(Game);