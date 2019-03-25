import grid from './grid';
import {checkBelow} from './collisionDown';
import { DOWN, REFRESH } from '../constants';


const touchDown = (field, id, shapes, index, room) => {
    let i, j;
    for ( i=0; i<22; i++) {
        for( j=0; j<12; j++) {
            if (field[i][j] == 2){
                field[i][j] = id+3;
            }
        }
    }
   // return add(field, shapes, index, room);
}

export const down = (field, shapes, index) => {
    const ret = grid()
    let i, j, x = 0;
    for ( i=0; i<20; i++) {
        for( j=0; j<10; j++) {
            if ((field[i][j] == 2) && (i < 20)){
                if (!checkBelow(field)){
                    //return touchDown(field, id, shapes, index, room)
                    return { type: REFRESH }
                } else {
                    ret[i+1][j] = 2;
                    
                }
            }
        }
    }
    shapes[index].leftCorner.y++
    return {
        type: DOWN,
        newGrid: ret,
        shape:shapes
    }
}