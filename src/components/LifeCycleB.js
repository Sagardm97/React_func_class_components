import React,{Component} from 'react'

class LifeCycleB extends Component{
    constructor(){
        super()
        this.state={
            name:'varun'
        }
        console.log("children construcor called....")
    }

    static getDerviedStateFromProps(state,props){
        console.log("props of children called again")
        return null
    }
    componentDidMount(){
        console.log('children of ComponentdidMount called');
    }
    
    render(){
        console.log("children render method called");
        return(
            <div>
               hiiiiii its me again
            </div>
        )
    }
}

export default LifeCycleB