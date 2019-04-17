import socket from '../config/misc/socketConnect';
import { GAME_OVER , ADD_SHAPE, MALUS} from '../config/constants';

const checkLine = (line) => {
    let x = 0;
    for (let i=0; i<10; i++) {
        if (line[i] > 2) {
            x++;
        }
    }
    return x > 9 ? true : false
}
const gridMaker = () => {
    const grid = []
    for (let i=0; i<20; i++) { //game height: 20 blocs
        grid.push([]);
    }
    for (let i=0; i<20; i++) {
        for(let j=0; j<10; j++) { //game width 10 blocs
            grid[i].push(0);
        }
    }
    return grid;
}

const removeLiner = (lines, field, user, room) => {
    // console.log(field, lines)
    let grid = gridMaker(), gap = lines.length;
    // let min = Math.min(lines), max = Math.max(lines);
    socket.emit(MALUS, {user, room})
    if (gap == 1) {
        let i = lines[0]
        field.splice(i, 1)
        field.splice(1, 0, grid[1])
        return field
    }
}

const checkForLine = (field, room, user) => {
    let linesArray = [];
    for (let i=0; i<20; i++){
        if (checkLine(field[i]) == true) {
            linesArray.push(i);
        }
    }
    if (linesArray.length > 0){
        return removeLiner(linesArray, field, user, room)
    }
    return field
}

export const add = (field, shapes, index, room, user) => {
    let ret = checkForLine(field, room, user);
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
        shapes: shapes,
        i: index + 1,
        currentID: shapes[index+1].id,
        total: index + 2
    }
}