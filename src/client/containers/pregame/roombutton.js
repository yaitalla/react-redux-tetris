import React from 'react'
import { connect } from 'react-redux'
import { btn, nonstyle, flex } from './style';
import socket from '../../socket';
import {addRoom} from '../../actions/addRoom';
import store from '../../store';


const Roombutton = ({rooms}) => {
    socket.on('ROOM_SENT', (data) => {
       store.dispatch(addRoom(data))
     })
     let input
    return (
        <div style={flex}>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    socket.emit('CREATE_ROOM', input.value)
                    input.value = ''
                }}
            >
                <input placeholder="enter room's name" style={nonstyle} ref={node => (input = node)} />
                <button style={btn} type="submit">Add room</button>
            </form>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        rooms: state.rooms
    }
}

export default Roombutton;