import React, { Component } from 'react';
import axios from 'axios'
import '../Drivers.css'




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
    render() { 
        return ( 
        <div>
            <h1>Drivers</h1>
            <ul className='driverinfo'>
            {this.state.drivers.map(driver => 
            <li key={driver.id}>{driver.name} {driver.nationality} {driver.bio}</li>
            )}
            </ul>
        </div> 
        );
    }
}
 
export default Drivers;


