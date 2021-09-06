
import React from 'react';
import AppFun from "./AppFun";

class AppClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeStep:0,
        };
    }
    
    incrementClick=()=>{
        this.setState(prevState => ({ activeStep: prevState.activeStep + 1}));
    }
    decrementClick=()=>{
         this.setState(prevState => ({ activeStep: prevState.activeStep - 1}));
     }
     resetClick=()=>{
         this.setState({activeStep:0});
     }
    render(){
        return(
        <>
        <p>Count :{this.state.activeStep}</p>
        <button onClick={this.incrementClick}>Increment</button>
        <button onClick={this.decrementClick}>Decrement</button>
        <button onClick={this.resetClick}>Reset</button>
        <AppFun name="Guvi"/>
        </>
        );
    }
  }

  export default AppClass;
  