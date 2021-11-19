import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand fw-bolder " to="/home">SHASTHYA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/allProducts">All Services</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/faq">FAQ</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                        </li>
                        
                    </ul>
                    </div>




                    {user?.photoURL ? ( <Link to="/"> <button onClick={logOut} className="btn btn-info px-5 py-2">LogOut</button> </Link>
                    ) : (
                    <Link to="/logIn"><button className="btn btn-info px-5 py-2">LogIn</button></Link>)}
                    <img style={{width: "40px"}} className="rounded-circle" src={user?.photoURL} alt="" />
                    <span>{user.displayName}</span>
                </div>
            </nav>
        </div>
    );
};

export default Header;