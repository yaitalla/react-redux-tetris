import React from 'react'
import { head, headStyle, img } from './style';
import logo from './redribbon.jpg';

const Title = () => {
    return (
        <div style={headStyle}>
            <img style={img} src={logo} ></img>
            <h1 style={head}>React-Redux Tetris</h1>
        </div>
    )
}

export default Title;