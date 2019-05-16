import React, { Component } from 'react';
import axios from 'axios';
import '../Drivers.css';





class Drivers extends Component {
    state = { 
        drivers: []
     };



   componentDidMount () {
    this.getDrivers();
    }


    getDrivers = async () => {
        axios.get(`/drivers`)
        .then(res => {
            const drivers = res.data;
         this.setState({drivers});
        })
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
            <h1>Drivers</h1>
            <ul className='driverinfo'>
            {this.state.drivers.map(driver => 
            <li key={driver.id}>{driver.name} {driver.nationality} {driver.bio}  <button onClick={this.handleUpdate}>Edit</button>
            <button onClick={this.handleDelete}>Delete</button> </li>
            )}
            </ul>
        </div> 
        );
    }
}
 
export default Drivers;


