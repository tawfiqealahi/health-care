import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

import { NavLink} from "react-router-dom";
import {  Button,  Nav,  Navbar,  } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import useFirebase from '../../../Hooks/useFirebase';

const MenuBar= () => {
    const {user, logOut}=useFirebase();

 
   

    

      return (
        <>
        
        <Navbar className="menu mx-2 " bg="light"  expand="lg">
     

          
          <NavLink className="logo" to="/home">
       <img src={logo} alt="logo" />
    
    </NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav  className="menu-items col-sm-12"> 
          <NavLink className="menu-item mt- " to="/home">Home</NavLink>
          <NavLink className="menu-item" to="/gallery" >Gallery</NavLink>
          <NavLink className="menu-item" to="/services" >Services</NavLink>
          <NavLink className="menu-item" to="/aboutus" >About</NavLink>
          <NavLink className="menu-item" to="/faq" >FAQ</NavLink>
          <div className="menu-itemId mx-3 "><span> {user.displayName} </span></div>

{user.email?  
    
     <NavLink className="menu-item" to="/login" >   <Button onPress={() => this.signOutUser()}
    className="fw-bolder fs-5" variant="primary">Log In</Button> </NavLink> 
  :
    <Button onclick={logOut}>Log out</Button> 
}
                   
                 </Nav>
                </Navbar.Collapse>
            
          
        </Navbar>
                 
         
        </>
    );

    
   
};

export default MenuBar;