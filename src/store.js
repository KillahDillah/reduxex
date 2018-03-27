
import {createStore} from 'redux';
//reducer lives here

//define state of the application
const initialState = {
  count: 3   // sets the initial state for app
};

//need to create reducer (reducer is a function that takes 2 arguments, takes state and action)
const reducer = (state = initialState, action) => {   //state=initialState, first time this is run there wont be an initial state. use this so it becomes the initialstate after first run.
  console.log('reducer', action);

  switch (action.type) { 
    case 'INCREMENT':
      return Object.assign({}, state /*initialState*/, { count: state.count + 1 });   // return brand new state object / object.assign / pass an object and then the state. copies values from INCREMENT and puts into new object
    default: 
      return state;
  }
}



const store = createStore(reducer);

export default store;

//no way of changing data within store.js

