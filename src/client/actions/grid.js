const grid = () => {
    let gri = [];

    for (let i=0; i<20; i++) {
        gri.push([]);
    }
    for (let i=0; i<20; i++) {
        for(let j=0; j<10; j++) {
                gri[i].push(0);
        }
    }
    return gri
}



export default grid;