import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { NavLink} from "react-router-dom";
import {  Button,  Nav,  Navbar, } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import useFirebase from '../../../Hooks/useFirebase';

const MenuBar= () => {
    const {user, logOut}=useFirebase();

    return (
        <>
        
        <Navbar className="menu mx-2 " variant="dark">
            
           
           <NavLink className="logo" to="/home">
       <img src={logo} alt="logo" />
    
    </NavLink>
                <Nav className="menu-items"> 
          <NavLink className="menu-item mt- " to="/home">Home</NavLink>
          <NavLink className="menu-item" to="/gallery" >Gallery</NavLink>
          <NavLink className="menu-item" to="/services" >Services</NavLink>
          <NavLink className="menu-item" to="/aboutus" >About</NavLink>
          <NavLink className="menu-item" to="/faq" >FAQ</NavLink>
          <div className="menu-item fs-bolder "><span>{user.displayName}</span></div>

{user?  
    <Button onclick={logOut}>Log out</Button> 
    : <NavLink className="menu-item" to="/login" >   <Button className="fw-bolder fs-5" variant="primary">Log In</Button> </NavLink> 

    
}
                   
                 </Nav>
            
        </Navbar>
                 
         
        </>
    );
};

export default MenuBar;