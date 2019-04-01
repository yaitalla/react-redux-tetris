import { right} from './right';
import { left } from './left';
import { down } from './down';
import { refresh } from './refresh';


export const move = (way, field, shapes, i) => {
    switch(way) {
        case 'R':
            return right(field, shapes, i)
        case 'L':
            return left(field, shapes, i)
        case 'D':
            return down(field, shapes, i)
        default:
            return refresh();
    }
}