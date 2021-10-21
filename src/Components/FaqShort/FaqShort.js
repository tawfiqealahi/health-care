import React from 'react';
import { Button, } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './FaqShort.css';

const Faq = () => {
    return (
     <div>
            <h1 className="text-center fw-bolder pt-2">ASK ME !!!</h1>
            <div className=" container-fluid">
            <div className="row faq my-4 text-center">
            <div className="col-md-6  left-part ">
                <h2 className="mt-5">HAVE ANY QUESTIONS?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <Button className="left-btn  rounded mt-5"> Contact us</Button>

            </div>
            <div className="col-md-6 right-part">
            <h2  className="mt-5">NEED EMERGENCY HELP?</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                <Button className="right-btn rounded mt-5"> Contact us</Button>
            </div>
            </div>
          
        </div>
     </div>   
     
    );
};

export default Faq;