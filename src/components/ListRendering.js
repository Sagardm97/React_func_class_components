import React,{Component}from 'react'


class ListRendering extends Component{

    constructor(){
        super()
            this.state={
                username:'',
                comments:'',
                topic:'react',

            
        }
    }
    handelusernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

   changeComments=(e)=>{
    this.setState({
        comments:e.target.value
    })
   }

   changeSelections=(e)=>{
    this.setState({
        topic:e.target.value

    })
   }

   changepage=(e)=>{
 alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    e.preventDefault();   // this methods helps to refresh the page..
   }

    render(){
       
    const {username,comments,topic}=this.state   //array destructuring
        return(
            <form onSubmit={this.changepage}>
                <div>
                    <label >username : </label>
                    <input type='text' value={username} onChange={this.handelusernameChange}/>
                    </div>
                    <div>
                        <label htmlFor="">comments</label>
                <textarea  cols="30" rows="10" value={comments} onChange={this.changeComments}></textarea>
                    </div>
                    <div>
                        <label >Choose-topic</label>
                        <select value={topic} onChange={this.changeSelections} >
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div>
                    <div>
                    <button type="submit">submit</button>
                    </div>
            </form>
        )
    }
}


export default ListRendering;

