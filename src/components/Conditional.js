import React, { Component } from 'react'


 class Conditional extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn:true
    }
  }
  
  render() {
    // let message
    // if(this.state.isLoggedIn){
    //     message="hello sagar"
    // }
    // else{
    //     message="hello bro"
    // }
    return (
        // this.state.isLoggedIn ? <div>hello sagar </div>: <div>hello broo</div>  terneary operator
         this.state.isLoggedIn && <div>hello sagar</div>   //short circuit operator
    )
  }
}

export default Conditional
