import { dropdown } from './dropdown';
import store from '../config/store';
import { FALL_CONTROL } from '../config/constants';
import 'babel-polyfill';

let timeOutId;

const fallEvent = () => {
    return store.dispatch(dropdown())
}

export const fall = () => {
    timeOutId = setTimeout(() => {
        store.dispatch(dropdown())
    }, 500)
}

export const clearFall = () => {
    clearTimeout(timeOutId);
    store.dispatch({type: FALL_CONTROL})
}

export const fallInterval = (control) => {
    if (control == true) {
        store.dispatch({type: FALL_CONTROL})
    } else {
        fall();
    }
}

// Promise approach //non
const fallPromise = () => {
  return (() => {
      store.dispatch(dropdown());
    })
}


// async/await approach
const asyncFall = () => {  
  return async dispatch => {
    
    function onSuccess() {
      dispatch(dropdown());
      return ;
    }
    
    try {
       // console.log('tried')
        return onSuccess();
    } catch (error) {
        //console.log('async Error', error);
    }
  }
}