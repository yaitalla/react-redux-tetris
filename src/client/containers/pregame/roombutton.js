import React from 'react'
import { connect } from 'react-redux'
import { formstyle } from './style';

const Roombutton = () => {
    return (
        <form style={formstyle}>
            <input></input>
            <button>add room</button>
        </form>
    )
}

export default Roombutton;