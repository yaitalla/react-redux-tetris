import grider from './grid';

const checkGround = (field) => {
    for (let i=0; i<20; i++) {
        if (field[i][0] == -99)
            return i;
    }
    return 19;
}

const lineMalus = (data) => {
    let grid = grider();
    const ground = checkGround(data)
    for (let i=0; i<ground; i++){
        grid[i] = data[i+1]
    }
    for (let i=0; i<10; i++) {
        grid[ground][i] = -99;
    }
    return grid
}

module.exports = lineMalus;