import React,{Component} from 'react'
import LifeCycleB from './LifeCycleB';

class  LifeCycleA extends Component{
    constructor(){
        super()
        this.state={
            name:'sagar'
        }
        console.log('constructor is called')
    }

    static getDerivedStateFromProps(state,props){
        console.log("getDerivedStateFromProps called ")
        return null
    }

    componentDidMount(){
        console.log("componentDidMount called")
    }

    render(){
        console.log("render method is called")
        return(
            <div>hello sagar
            <LifeCycleB/>
            </div>
        )
    }
}



export default LifeCycleA;