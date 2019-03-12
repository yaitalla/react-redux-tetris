import source from './data';

const randomShape = () => {
    const shapes = source.shapes; //list of string
	const currentRand = Math.floor(Math.random() * 7); //random number
    const shape = source.tetriminos[shapes[currentRand]];
    return {
        shape: shape.shape,
        id: currentRand,
        leftCorner: {
            y: 1,
            x: 4
        }
    };
}

const randomShapes = (shapes) => {
    for (let i=0; i<10; i++) {
        shapes.push(randomShape())
    }
}

module.exports = randomShapes;