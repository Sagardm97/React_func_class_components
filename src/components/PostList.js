import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            console.log(response);
        })
        .catch(error=>{
        console.log(error)  
        })
    }
    
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default PostList
