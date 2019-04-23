import randomShapes from './shaper';
import grider from './grid';

const fieldCreator = (field, shapes) => {
    let ret = field;
    for (let i=0; i<4; i++) {
        for(let j=4; j<8; j++) {
            if (shapes[0].shape[i][j-4] == 2) {
                ret[i][j] = 2
            }
        }
    }
    return ret;
}

const startGame = () => {
    const shapes = [];
    let ret = randomShapes(shapes) //10pieces
    let grid = grider();
    const gameField = fieldCreator(grid, ret)
    return {
        type: 'LAUNCH',
        arrayOfShapes: ret,
        field: gameField,
    }
}

module.exports = startGame;