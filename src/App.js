import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';   //wrapped in function / {connect}
import store from './store.js' //imported on the component that needs re-rendering once action/reducer is performed

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main store={store}/>   
      </div>
    );
  }
}


// <Main count='1' /> changes to <Main store={store}
export default App;

//Component - when button is clicked, we will create an action
//then dispatch actionto store
//store will run through reducer - this will change the state
//updates component
