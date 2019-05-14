import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Drivers from './components/drivers';
import CreateDriver from './components/createDriver';
import Home from './components/home'
import Error from './components/error'
import Navigation from './components/navigation'
import UpdateDriver from './components/updateDriver';

class App extends Component {
  render() { 
    return ( 
    <BrowserRouter>
    <div>
    <Navigation/>
    <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/driverscars' component={Drivers} />
    <Route path='/createdrivers' component={CreateDriver} />
    <Route path='/updatedrivers' component={UpdateDriver} />
    <Route component={Error} />
    </Switch>
    </div>
    </BrowserRouter>
    );
  }
}
 
export default App;