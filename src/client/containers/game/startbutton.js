import React from 'react'
import { connect } from 'react-redux'
import {btn, img, sidebar} from './style';
import socket from '../../config/misc/socketConnect';
import { LAUNCH, PAUSE, RESUME } from '../../config/constants'
import logo from '../pregame/redribbon.jpg';


const launchGame = (room) => {
     socket.emit(LAUNCH, room)
}
const pauseGame = (room) => {
    socket.emit(PAUSE, room)
}
const resumeGame = (room) => {
   socket.emit(RESUME, room)
}

const PlayButton = ({myId, room, playing, shapeIndex}) => {
    console.log(myId, room.owner)
    // return (
    //     <div>
    //         {
    //             shapeIndex < 0 ? <button onClick={launchGame}
    //                             disabled={myId != room.owner}
    //                                         style={btn}>Start</button>
    //             : ( playing == true ? <button onClick={pauseGame}
    //                             disabled={myId != room.owner}
    //                                         style={btn}>Pause</button>
    //                             :   <button onClick={resumeGame}
    //                             disabled={myId != room.owner}
    //                                         style={btn}>Play</button>
    //                 )
    //         }
    //     </div>
    return (
        <div style={sidebar}>
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
            <p>inputs disabled</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myId: state.game.yourID,
        room: state.game.actualRoom,
        playing: state.game.playing,
        shapeIndex: state.grid.shapeIndex,
    }
}

export default connect(mapStateToProps)(PlayButton);