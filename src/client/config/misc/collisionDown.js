export const checkBelow = (field) => {
    let i, j;
    for ( i=0; i<20; i++) {
        for( j=0; j<10; j++) {
            if (field[i][j] == 2){
                if (i+1 > 19 || field[i+1][j] > 2 || field[i+1][j] == -99) {
                    return false;
                }
            }
        }
    }
    return true;
}