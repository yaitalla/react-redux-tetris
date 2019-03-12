import randomShapes from './shaper';

const fieldCreator = (field, shapes) => {
    let ret = field;
    for (let i=0; i<4; i++) {
        for(let j=3; j<7; j++) {
            if (shapes[0].shape[i][j-3] == 2) {
                ret[i][j] = shapes[0].shape[i][j-3]
            }
        }
    }
    return ret;
}

const grid = [];

for (let i=0; i<20; i++) {
    grid.push([]);
}
for (let i=0; i<20; i++) {
    for(let j=0; j<10; j++) {
            grid[i].push(0);
    }
}
const startGame = () => {
    const shapes = [];
    let ret = randomShapes(shapes) //10pieces
    const gameField = fieldCreator(grid, ret)
    //console.log(gameField)
    return {
        type: 'PLAY',
        arrayOfShapes: ret,
        field: gameField
    }
}

module.exports = startGame;