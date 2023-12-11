import React, { Component } from 'react'

 class RefsDemo extends Component {
    constructor(props){
        super(props)
        this.myInputRef = React.createRef();
    }
componentDidCatch(){
    this.myInputRef.current.focus()
    console.log(this.myInputRef);
}

clikcHandler=()=>{
    alert(this.myInputRef.current.value)
}

  render() {
    return (
      <div>
        <input type='text' ref={this.myInputRef}/> 
        <button onClick={this.clikcHandler}>click</button> 
      </div>
    )
  }
}

export default RefsDemo;