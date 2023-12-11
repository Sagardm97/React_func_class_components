import React,{Component} from "react";
class LifeCyleAA extends Component{
 constructor(props){
    super(props)
    this.state={
        name:'sagar'
    }
    console.log("this is constructor of didmount");
 }

 static getDerivedStateFromProps(props,state){
    console.log("this is derviedstateprops ");
    return null
 }

 shouldComponentUpdate(){
    console.log("this one is shouldupdate method");
    return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("this is getSnapShotBeforeUpdate");
        return null
    }

componentDidUpdate(){
console.log("this is componentDidUpdate()");
}
change=()=>{
    this.setState({
        name:"varun"
    })
}
    render(){
        console.log("this is render method of didmount");
        return(
            <div>
               <button onClick={this.change}>click-here</button>
            </div>
        )
    }
}


export default LifeCyleAA