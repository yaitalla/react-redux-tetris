import randomShapes from './shaper';
import grider from './process/grid';

const fieldCreator = (field, shapes) => {
    let ret = field;
    for (let i=0; i<4; i++) {
        for(let j=4; j<8; j++) {
            if (shapes[0].shape[i][j-4] == 2) {
                ret[i][j] = shapes[0].shape[i][j-4]
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
    //console.log(gameField)
    return {
        type: 'PLAY',
        arrayOfShapes: ret,
        field: gameField,
        status: true
    }
}

module.exports = startGame;