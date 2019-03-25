import React from 'react'
import { connect } from 'react-redux'
import {btn} from './style';
import socket from '../../socket';
import { LAUNCH, PAUSE, RESUME } from '../../constants'

const launchGame = () => {
    socket.emit(LAUNCH)
}
const pauseGame = () => {
    socket.emit(PAUSE)
}
const resumeGame = () => {
    socket.emit(RESUME)
}

const PlayButton = ({myId, room, playing, shapeIndex}) => {
    console.log(status)
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
            <button onClick={launchGame} style={btn}>Start</button>
            {
                ( playing == true ? <button onClick={pauseGame}
                                            style={btn}>Pause</button>
                                :   <button onClick={resumeGame}
                                            style={btn}>Play</button>
                    )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myId: state.yourId,
        room: state.actualRoom,
        playing: state.status,
        shapeIndex: state.shapeIndex
    }
}

export default connect(mapStateToProps)(PlayButton);