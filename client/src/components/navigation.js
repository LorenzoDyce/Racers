import React from 'react';
import {NavLink} from 'react-router-dom';
import '../navigation.css';


const Navigation = () => {
    return ( 
        <div className="links">
         <NavLink to='/' activeClassName="current">Home</NavLink>
         <NavLink to='/createdrivers' activeClassName="current">Sign Up</NavLink>  
         <NavLink to='/driverscars' activeClassName="current">Drivers</NavLink>
        </div>
     );
}
 
export default Navigation;