
const grid = [];

for (let i=0; i<22; i++) {
    grid.push([]);
}
for (let i=0; i<22; i++) {
    for(let j=0; j<12; j++) {
            grid[i].push(0);
    }
}
const startGame = () => {
    console.log(grid)
}

module.exports = startGame;