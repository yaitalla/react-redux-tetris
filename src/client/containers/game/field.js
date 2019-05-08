import React from 'react'
import { connect } from 'react-redux'
import {rows, field, boxe} from './style';
import inputs from '../../config/misc/inputs'
// import socket from '../../config/misc/socketConnect';
import { applyColor } from '../../config/misc/applyColor';
import store from '../../config/store';
import { dropdown } from '../../actions/dropdown';
import lifecycle from 'react-pure-lifecycle';
import GameOver from './gameOver';
import { STOP } from '../../config/constants';
import { fall, clearFall, fallInterval } from '../../actions/fall';


const methods = {
    componentDidUpdate(props) {
    // console.log('updated', props)
    },
    componentDidMount(props) {
      console.log('mounted', props)
    },
    componentWillUpdate(props){
  //    console.log('willUpdate', props)
    //   if (props.playing == true) {
    //         if (props.control == false) {
    //             fall()
    //         } else {
    //             clearFall();
    //         }
    //     }
    },
    componentWillMount(props){
      console.log('will mount', props)
    }
}

const setStyle = (box, curr, shapes, color) => {
    if (box == -99) {
        return (applyColor('silver'))
    } else if (box == 2) {
        return (applyColor(color[shapes[curr].id]))
    } else if (box > 2){
        return (applyColor(color[box-3]))
    } else {
        return boxe
    }
}

const Row = ({row, curr, shapes, color}) => {
    return (
        <div style={rows}>
            {
                row.map((box,i) => 
                    <div style={setStyle(box, curr, shapes, color)} key={i}>
                    </div>)
            }
        </div>
    )
} 

const GameField = ({colors, moving, grid, current,
    shapes, control, room, playing, nbr}) => {
    if (playing == true) {
        inputs();
    }
    // if (playing == true) {
    //     fallInterval(control);
    // }
    return (
        <div style={field}>
            {
                grid.map((rw, i) => <Row key={i} row={rw} curr={current} shapes={shapes} color={colors} nb={nbr}/>)
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        grid: state.grid,
        current: state.shapeIndex,
        shapes: state.shapes,
        colors: state.colors,
        nbr: state.nb,
        moving: state.moving,
        room: state.actualRoom,
        playing: state.playing,
        shapereq: state.shapereq,
        control: state.falling
    }
}

const Game = lifecycle(methods)(GameField)

export default connect(mapStateToProps)(Game);