import React from 'react';
import './AboutUs.css';
import image1 from '../../images/about img 1.jpg';
import Footer from '../Footer/Footer';
import MenuBar from '../Header/Navbar/Navbar';

const AboutUs = () => {
    return (
        <div>
            <MenuBar></MenuBar>
          <h1 className="text-center text-danger fw-bolder  my-4">ABOUT US</h1>
         <div className="container-fluid my-5">
         <div className="row">
          <div className="col-md-6">
              <h1 className="text-center  fw-bolder  my-4">SHORT STORY ABOUT <span className="text-info"> SWASTHYE </span> CLINIC.</h1>
              <p>According to studies, our doctors will make an individual program of prevention and treatment of identified diseases, directed to a surgical treatment if necessary.


Our Clinic has grown to provide a world class facility for the treatment of tooth loss, dental cosmetics and bore advanced restorative dentistry.</p>

              </div>
              <div className="col-md-6">
                  <img className="w-75" src={image1} alt="images" />
              </div>
          </div>
         </div>
         <Footer></Footer>
        </div>
    );
};

export default AboutUs;