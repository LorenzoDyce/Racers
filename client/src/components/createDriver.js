import React, { Component } from 'react';
import axios from 'axios';
import '../createDriver.css'


class CreateDriver extends Component {
    state = { 
        name: '',
        nationality: '',
        bio: ''
     }
      
     handleChange = event => {
         this.setState({ [ event.target.name]: event.target.value })
     }

     handleSubmit = event => {
         event.preventDefault();
         const {name, nationality, bio } = this.state;

         const driver = {
             name,
             nationality,
             bio
         };

    axios.post(`/drivers/createdriver`, driver)
       .then(res => {
        console.log(res);
        console.log(res.data);
    })
    .catch(error => {
        console.log(error);
    })
}
    render() { 
        const {name, nationality, bio} =this.state
        return ( 
        <div>
            <form onSubmit={this.handleSubmit}>
            <div>
            <label>
                Name:
                <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label></div>
            <div>
            <label>
                Nationality:
                <input type="text" name="nationality" value={nationality} onChange={this.handleChange} />
            </label></div>
            <div>
            <label>
                Bio:
                <input type="text" name="bio" value={bio} onChange={this.handleChange} />
            </label> </div>
            <button type="submit">Add</button>
            </form>
        </div> 
        )
    }
}
 
export default CreateDriver;