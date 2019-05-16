import React, { Component } from 'react';
import axios from 'axios';



class UpdateDriver extends Component {
   
    state = {
     id: '', 
     name: '',
     nationality: '',
     bio: ''
     }

    handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    }

   handleUpdate = (event) => {
   event.preventDefault();
   const {name, nationality, bio } = this.state;
   const driver = {
       name,
       nationality,
       bio
   }
   axios.put(`/updatedriver/${this.state.id}`, driver)
   .then(res => console.log(res.data));
   }




    render() { 
        const  {name, nationality, bio} =this.state;
        return (  
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={this.handleChange} />
                </label>
                <label>
                    Nationality:
                    <input type="text" name="nationality" value={nationality} onChange={this.handleChange}/>
                </label> 

                <label>
                    Bio:
                    <input type="text" name="bio" value={bio} onChange={this.handleChange}/>
                </label>
                <button >Update</button>
                </form>
            </div>
        );
    }
}
 
export default UpdateDriver;