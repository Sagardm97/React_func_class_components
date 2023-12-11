import React, { Component } from "react";

class Message extends Component {
    constructor() {
        super()
        this.state = {
            Message: "welcome broo to Message"
        }
    }
    changeMessage() {
        this.setState({
            Message: 'exit broo'
            
        },console.log(this))
    }
    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                {/* <button onClick={() => this.changeMessage()}>click-me</button> */}
                {/* //if we use arrowfunction then no need to bind with the this keyword */}
                <button onClick={ this.changeMessage.bind(this)}>click-me</button>
            </div>
        )
    }
}

export default Message;