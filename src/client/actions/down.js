import {add} from './addShape';
import {checkBelow} from '../config/misc/collisionDown';

const gridMaker = (field) =>{
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

const touchDown = (field, id, shapes, index, room, user) => {
    let i, j;
    for ( i=0; i<20; i++) {
        for( j=0; j<10; j++) {
            if (field[i][j] == 2){
                field[i][j] = id+3;
            }
        }
    }
    return add(field, shapes, index, room, user);
}

const moveDown = (field, id, shapes, index, room, user) => {
    const grid = gridMaker(field)
    let i, j, x = 0;
    for ( i=0; i<20; i++) {
        for( j=0; j<10; j++) {
            if ((field[i][j] == 2) && (i < 20)){
                if (!checkBelow(field)){
                    return touchDown(field, id, shapes, index, room, user)
                } else {
                    grid[i+1][j] = 2;
                    
                }
            }
        }
    }
    shapes[index].leftCorner.y++
    return {
        type: 'DOWN',
        field: grid,
        grounded: false,
        shapes: shapes
    }
}

export const down = (state) => {
    let field = state.grid.grid, id = state.grid.shapes[state.grid.shapeIndex].id, shapes = state.grid.shapes,
                index = state.grid.shapeIndex, room = state.game.actualRoom,
                user = state.game.yourID;
    return moveDown(field, id, shapes, index, room, user)
}