import React, { Component } from 'react';
import axios from 'axios';
import '../createDriver.css'


class DeleteDriver extends Component {
    state = {
        id: '', 
        name: '',
        nationality: '',
        bio: ''
     }
      

     handleDelete = event => {
         event.preventDefault();
         const {id, name, nationality, bio } = this.state;

         const driver = {
             id,
             name,
             nationality,
             bio
         };

    axios.delete(`/deletedriver/${this.state.id}`, driver.id)
       .then(res => {
        console.log(res);
        console.log(res.data);
    })
    .catch(error => {
        console.log(error);
    })
}
    render() {
        return ( 
        <div>
            <button onClick={this.handleDelete}>delete</button>
        </div> 
        )
    }
}
 
export default DeleteDriver;