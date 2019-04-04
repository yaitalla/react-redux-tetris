import source from './data';
import grider from './grid';

const randomShape = () => {
    const shapes = source.shapes; //list of string
	const currentRand = Math.floor(Math.random() * 7); //random number
    const shape = source.tetriminos[shapes[currentRand]];
    return {
        shape: shape,
        id: currentRand,
        color: source.colors[currentRand],
        leftCorner: {
            y: 0,
            x: 4
        }
    };
}

const randomShapes = (shapes) => {
    for (let i=0; i<10; i++) {
        shapes.push(randomShape())
    }
    return shapes;
}

module.exports = randomShapes;