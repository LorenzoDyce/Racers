import React, { Component } from 'react';




class Drivers extends Component {
    state = { 
        drivers: []
     };



   componentDidMount () {
    this.getDrivers();
    }


    getDrivers = async () => {
        fetch(`/drivers`)
        .then(res => res.json())
        .then(drivers => this.setState({drivers}, () => console.log('Drivers fetched...', drivers)));
    }
    render() { 
        return ( 
        <div>
            <h1>Drivers</h1>
            <ul>
            {this.state.drivers.map(driver => 
            <li key={driver.id}>{driver.name} {driver.nationality} {driver.bio}</li>
            )}
            </ul>
        </div> 
        );
    }
}
 
export default Drivers;


