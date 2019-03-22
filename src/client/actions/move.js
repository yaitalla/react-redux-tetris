import grid from './grid';
import { right } from './right';
import { rotate } from './rotate';
import { left } from './left';
import { down } from './down';
import { refresh } from './refresh';


export const move = (way, field) => {
    switch(way) {
        case 'R':
            return right(field)
        case 'L':
            return left(field)
        case 'D':
            return down(field)
        case 'r':
            return rotate(field)
        default:
            return refresh();
    }
}