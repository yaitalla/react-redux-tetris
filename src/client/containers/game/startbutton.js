import React from 'react'
import { connect } from 'react-redux'
import {btn} from './style';
import socket from '../../config/misc/socketConnect';
import { LAUNCH, PAUSE, RESUME } from '../../config/constants'

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
    // )
    return (
        <div>
            <button onClick={() => launchGame(room)} style={btn}>Start</button>
            {
                shapeIndex >= 0 ? ( playing === true ? <button onClick={() => pauseGame(room)}
                                            style={btn}>Pause</button>
                                :   <button onClick={() => resumeGame(room)}
                                            style={btn}>Play</button>
                    ) : null
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myId: state.yourId,
        room: state.actualRoom,
        playing: state.playing,
        shapeIndex: state.shapeIndex,
    }
}

export default connect(mapStateToProps)(PlayButton);