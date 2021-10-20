import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import {Link, NavLink} from "react-router-dom";
import {  Button, Container, Nav, Navbar, } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi';

const MenuBar= () => {
    return (
        <>
        <Container>
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
          <NavLink className="menu-item" to="/login" >   <Button className="fw-bolder fs-5" variant="primary">Sign In</Button> </NavLink> 

                     {/* hamburger menu start */}
                     <div className="toggle-menu">
                         <a href="#">
                         <GiHamburgerMenu></GiHamburgerMenu>
                         </a>
                     </div>
                 </Nav>
            
           

        </Navbar>
        </Container>         
         
        </>
    );
};

export default MenuBar;