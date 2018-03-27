
import {createStore} from 'redux';
//reducer lives here

//define state of the application
const initialState = {
  count: 3   // sets the initial state for app
}

//need to create reducer (reducer is a function that takes 2 arguments, takes state and action)
const reducer = (state=initialState, action) =>{   //state=initialState, first time this is run there wont be an initial state. use this so it becomes the initialstate after first run.
  console.log('reducer', action)
  return state;
}

const store = createStore(reducer);

export default store;

//no way of changing data within store.js