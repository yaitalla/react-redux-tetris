import grid from './grid';

const right = () => {

}
const left = () => {
    
}
const down = () => {
    
}
const rotate = () => {
    
}

export const move = (way, field) => {
    switch(way) {
        case 'R':
        case 'L':
        case 'D':
        default:
            break;
    }
    let ret = grid();
    if (way == 'R') {
        for (let i=0; i<20; i++){
            for(let j=0; j<10; j++){
                if (field[i][j] == 2){
                    //console.log('ici')
                    ret[i][j+1] = 2
                } 
            }
        }
    }
    console.log('move',ret)
    return {
        type: 'MOVE',
        newGrid: ret
    }
}