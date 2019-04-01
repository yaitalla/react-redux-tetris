import socket from '../socket';
import grid from './grid';
import { ADD_SHAPE, GAME_OVER, SHAPE_REQ } from '../constants';

const checkLine = (line) => {
    let x = 0;
    for (let i=0; i<10; i++) {
        if (line[i] > 2) {
            x++;
        }
    }
    return x > 9 ? true : false
}
// const gridMaker = () => {
//     const grid = []
//     for (let i=0; i<22; i++) { //game height: 20 blocs
//         grid.push([]);
//     }
//     for (let i=0; i<22; i++) {
//         for(let j=0; j<12; j++) { //game width 10 blocs
//             if (i==0 || j==0 || i==21 || j==11){
//                 grid[i].push(1);
//             }
//             else {
//                 grid[i].push(0);
//             }
//         }
//     }
//     return grid;
// }

const removeLiner = (lines, field) => {
    let gride = grid(), gap = lines.length;
   // let min = Math.min(lines), max = Math.max(lines);
    if (gap == 1) {
        let i = lines[0]
        field.splice(i, 1)
        field.splice(1, 0, gride[1])
        return field
    }
}

const checkForLine = (field) => {
    let linesArray = [];
    for (let i=0; i<20; i++){
        if (checkLine(field[i]) == true) {
            linesArray.push(i);
        }
    }
    if (linesArray.length > 0){
        return removeLiner(linesArray, field)
    }
    return field
}

export const add = (field, shapes, index, room) => {
    // if (index+1 == shapes.length){
    //         socket.emit(SHAPE_REQ, {field, shapes, room})
    // }
    let ret = checkForLine(field);
    for (let i=1; i<5; i++) {
        for(let j=3; j<7; j++) {
            if (shapes[index+1].shape[i-1][j-3] == 2) {
                if (ret[i][j+1] > 2) {
                    return {
                        type: GAME_OVER,
                        field: ret,
                        gameOver: true
                    }
                }
                ret[i][j+1] = shapes[index+1].shape[i-1][j-3]
            }
        }
    }
    return {
        type: ADD_SHAPE,
        field: ret,
        i: index + 1, 
    }
}