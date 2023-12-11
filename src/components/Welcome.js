import React,{Component} from "react";

class Welcome extends Component{
    render(){
        return(
            <div>hello broo im in the class and my name is {this.props.name}</div>
        )
    }
}
export default Welcome;