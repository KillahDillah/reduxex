import React from 'react';
import { connect } from 'react-redux';


function Main(props){
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncClick}>increase</button>
    </div>
  )
}

function mapStateToProps(state){  // will use {connect} with function to post to component - wraps component
  console.log('mapStateToProps', state)
  return {
    count: state.count    //count is what is showing in props
  }
}

function mapDispatchProps(dispatch){
  return {
    onIncClick: ()=>{   //the function when button is clicked in Main.js
      console.log('click')
      const action = {type: 'INCREMENT'}  //actions are objects that have a property called type - create string now, reference it later as data is passed into it
      dispatch(action);  //now pushing(dispatching) data to the store.js (reducer)
    }
  }
}

export default connect (mapStateToProps, mapDispatchProps)(Main);  //creates a new component which hooks up mapStateToProps function to Main.js, then export
