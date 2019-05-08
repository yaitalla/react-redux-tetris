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

const clearline = () => {
    let ret = [];

}

const removeLiner = (lines, field, user, room) => {
    let clearline = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    socket.emit(MALUS, {user, room})
    for (let i in lines) {
       // console.log('before removing line', field)
        field.splice(lines[i], 1) //remove line at index i
       // console.log('after removing line', field)
        field.unshift(clearline) //insert new clear line 
       // console.log('after adding clearline', field)
    }                                  //at index 0
   // console.log(field)
    return field; 
}

const checkForLine = (field, room, user) => {
    let linesArray = [];
    for (let i=0; i<20; i++){
        if (checkLine(field[i]) == true) {
            linesArray.push(i);
        }
    }
    if (linesArray.length > 0){
       // console.log('before removeliner', field, linesArray)
        return ({field: removeLiner(linesArray, field, user, room),
                score: linesArray.length})
    }
    return ({field: field, score: 0})
}

export const add = (field, shapes, index, room, user) => {
    let ret = checkForLine(field, room, user);
   // console.log('ret', ret)
    for (let i=1; i<5; i++) {
        for(let j=3; j<7; j++) {
            if (shapes[index+1].shape[i-1][j-3] == 2) {
                if (ret.field[i][j+1] > 2) {
                    return {
                        type: GAME_OVER,
                        field: ret.field,
                        gameOver: true
                    }
                }
                ret.field[i][j+1] = shapes[index+1].shape[i-1][j-3]
            }
        }
    }
    return {
        type: ADD_SHAPE,
        field: ret.field,
        score: ret.score,
        shapes: shapes,
        i: index + 1,
        currentID: shapes[index+1].id,
        total: index + 2
    }
}