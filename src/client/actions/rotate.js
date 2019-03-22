import {checkBelow} from './collisionDown';

const newGrid = (field) =>{
    const grid = []
    for (let i=0; i<20; i++) { //game height: 20 blocs
        grid.push([]);
    }
    for (let i=0; i<20; i++) {
        for(let j=0; j<10; j++) { //game width 10 blocs
            if (field[i][j] > 2) {
                grid[i].push(field[i][j]);
            }
            else {
                grid[i].push(0);
            }
        }
    }
    return grid;
}


const rotater = (shape) => {
    let checkArray = 10
    const arr = shape
    const ret = [[],[],[],[]]
    for (let i=0; i<4; i++){
        for (let j=0; j<4; j++){
            ret[i][j] = arr[4-j-1][i]
            if (ret[i][j]) {
                checkArray = j < checkArray ? j :
                                checkArray;
            }
        }
    }
    const update = new Array(checkArray).fill(0);
    for (let i=0; i<4; i++){
        ret[i] = ret[i].slice(checkArray).concat(update)
    }
    return ret;
}


export const rotate = (field, shapes, index, nb) => {
    if (!checkBelow(field)) {
        return {
            type: 'REFRESH',
            field: field,
            nbr: nb+1,
        }
    }
    let ret = newGrid(field);
    const rot = {
        shape: rotater(shapes[index].shape),
        id: shapes[index].id,
        leftCorner: shapes[index].leftCorner
    }
    const x = shapes[index].leftCorner.x
    const y = shapes[index].leftCorner.y
    for (let i=y; i<(y+4); i++) {
        for(let j=x; j<(x+4); j++) {
            if (rot.shape[i-y][j-x] == 2) {
                ret[i][j] = rot.shape[i-y][j-x]
            }
        }
    }
    shapes[index] = rot;
    return {
        type: 'ROTATE',
        field: ret,
        shape: shapes,
    }
}