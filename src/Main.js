import React from 'react';
import { connect } from 'react-redux';


function Main(props){
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncClick}>increment</button>
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
    onIncClick: ()=>{   //the function when button is clicked
      console.log('click')
    }
  }
}

export default connect (mapStateToProps, mapDispatchProps)(Main);  //creates a new component which hooks up mapStateToProps function to Main.js, then export
