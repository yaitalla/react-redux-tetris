import socket from './socketConnect';
import { SHAPE_REQ } from '../constants';


export const shapeProvider = (index, shapes, room) => {
    const data = {
        shapes,
        room
    }
    if ((index+3) == shapes.length) {
        socket.emit(SHAPE_REQ, data)
    }
}
