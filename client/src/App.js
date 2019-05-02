import React, { Component } from 'react';
import './App.css';
import Drivers from './components/drivers'

class App extends Component {
  state = {  }
  render() { 
    return ( <div className="App">
    <Drivers/>
   </div> );
  }
}
 
export default App;