import React from 'react'
import { connect } from 'react-redux'
import { flex, btn} from './style';
import socket from '../../socket';
import { LAUNCH } from '../../constants'

const launchGame = () => {
    socket.emit(LAUNCH)
}

const StartButton = ({myId, room}) => {
    return (
        <div style={flex}>
            <button onClick={launchGame()} disabled={myId != room.owner} style={btn}>Start</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myId: state.yourId,
        room: state.actualRoom
    }
}

export default connect(mapStateToProps)(StartButton);