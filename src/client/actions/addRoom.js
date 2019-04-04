import { ADD_ROOM } from '../config/constants';

export const addRoom = (roomlist) => {
  return {
    type: ADD_ROOM,
    roomlist
  }
}

