import React, { Component } from 'react';
import axios from 'axios';
import '../Drivers.css';





class Drivers extends Component {
    state = { 
        drivers: []
     };



   async componentDidMount() {
      const {data: drivers } = await axios.get(`/drivers`);
      this.setState({ drivers });
    }



    handleUpdate = async (driver) => {
     driver.name = '';
     driver.nationality = '';
     driver.bio = '';
     const { data } = await axios.put(`/updatedriver/${driver.id}`, driver);
     const drivers = [...this.state.drivers];
     const index = drivers.indexOf(driver);
     drivers[index] = driver;
     this.setState({ drivers });
    }



        
        
   handleDelete = async (driver) => {
       await axios.delete(`/deletedriver/${driver.id}`);
       const drivers = this.state.drivers.filter(d => d.id !== driver.id);
       this.setState({ drivers });
   }

    render() { 
        return ( 
        <div>
            <h1>Drivers</h1>
            <ul className='driverinfo'>
            {this.state.drivers.map(driver => 
            <li key={driver.id}>{driver.name} {driver.nationality} {driver.bio}  <button onClick={() =>this.handleUpdate}>Edit</button>
            <button onClick={() =>this.handleDelete}>Delete</button> </li>
            )}
            </ul>
        </div> 
        );
    }
}
 
export default Drivers;


