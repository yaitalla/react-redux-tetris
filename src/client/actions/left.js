import grid from './grid';
import { LEFT, REFRESH } from '../constants';

export const left = (field, shapes, i) => {
    let ret = grid();
        for (let i=0; i<20; i++){
            for(let j=0; j<10; j++){
                if (field[i][j] > 2){
                    ret[i][j] = field[i][j]
                } else if (field[i][j] == 2){
                    if (field[i][j-1] > 2 || j-1 < 0){
                        return { type: REFRESH }
                    } else {
                       ret[i][j-1] = 2
                    }
                } 
            }
        }
    shapes[i].leftCorner.x--
    return {
        type: LEFT,
        newGrid: ret,
        shape: shapes
    }
}