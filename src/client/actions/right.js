import grid from './grid';
import { RIGHT, REFRESH } from '../constants';

export const right = (field, shapes, i) => {
    let ret = grid();
        for (let i=0; i<20; i++){
            for(let j=0; j<10; j++){
                if (field[i][j] == 2){
                    if (field[i][j+1] > 2 || j+1 > 9){
                        return { type: REFRESH }
                    } else {
                       ret[i][j+1] = 2
                    }   
                } 
            }
        }
    shapes[i].leftCorner.x++
    return {
        type: RIGHT,
        newGrid: ret,
        shape: shapes
    }
}