import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            title: '',
            body: ''
        }
    }
    clickHandler=(e)=>{
        this.setState({[e.target.name]:[e.target.value]})
    }
    submithere=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
        console.log(error);    
        })
    }


    render() {
        const { username, title, body } = this.state 
        return (
            <div>
                <form onSubmit={this.submithere}>
                    <div><label >Username:</label>
                    <input type="text" name='username' value={username} onChange={this.clickHandler} />
                    </div>
                     <div><label>Title : </label>
                     <input type="text" name='title' value={title} onChange={this.clickHandler} />
                     </div>
                    <div><label>Body</label>
                    <input type="text"  name='body' value={body} onChange={this.clickHandler}/>
                    </div>
                    <button type="submit" >submit</button>

                </form>

            </div>
        )
    }
}

export default PostForm
