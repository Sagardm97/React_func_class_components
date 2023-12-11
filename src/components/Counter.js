import React, { Component } from 'react'


class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    changeNumber() {
        // this.setState({
        //     count: this.state.count + 1
        // },()=>{
        //     console.log('callback value is',this.state.count);
        // })
        this.setState((prevState)=>({
            count:prevState.count+1

        }))
    }

    incrementFive(){
        this.changeNumber()
        this.changeNumber()
        this.changeNumber()
        this.changeNumber()
        this.changeNumber()

    }
    render() {
        return (
            <div>
                <h1>Number starts from {this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>click-me</button>
            </div>
        )
    }
}
export default Counter;
