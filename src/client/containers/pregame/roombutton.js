import React from 'react'
import { connect } from 'react-redux'
import { btn, nonstyle, flex } from './style';
import socket from '../../config/misc/socketConnect';


const Roombutton = ({rooms}) => {
    
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
                <input placeholder="enter room's name..." style={nonstyle} ref={node => (input = node)} />
                <button style={btn} type="submit">Add room</button>
            </form>
        </div>
        
    )
}

export default Roombutton;