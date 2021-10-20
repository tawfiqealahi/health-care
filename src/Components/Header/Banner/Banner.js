import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Carousel, CarouselItem } from "react-bootstrap";
import "./Banner.css";
import image1 from "../../../images/banner 1.png";
import image2 from "../../../images/banner 2.png";
import image3 from "../../../images/banner3.png";
import MenuBar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <div className="banner" >
          <MenuBar></MenuBar>

      {/* Banner start */}
      <Carousel className="w-100 height   mx-auto carousel-items">
      <Carousel.Item className="banner-items ">
          <img className="image w-50 "  src={image1} alt="img1" />
          <div className=" texts ">
            <h1 className="fw-bolder">MEDIAL SERVICES THAT YOU CAN TRUST</h1>
            <h5 class="pt-5">
              Need professional help? Our support staff will answer your
              questions. <br /> Visit us Now or Make an Appointment!
            </h5>
          </div>
        </Carousel.Item>

        <CarouselItem className="banner-items ">
          <img src={image3}  className="image w-50 " alt="img1" />
          <div className=" texts ">
            <h1 className="fw-bolder">WE MAKE QUALITY HEALTH CARE</h1>
            <h5 class="pt-5">
              Need professional help? Our support staff will answer your
              questions. <br /> Visit us Now or Make an Appointment!
            </h5>
          </div>
        </CarouselItem>

        <CarouselItem className="banner-items ">
          <img src={image2}  className="image w-50" alt="img2" />
          <div className=" texts">
            <h1 className="fw-bolder">MODERN TECHNOLOGY TREATMENT
 Doctor’s for health</h1>
            <h5 class="pt-5">
          
            Need professional help? Our support staff will answer your
              questions. <br /> Visit us Now or Make an Appointment! 
 
            </h5>
          </div>
        </CarouselItem>
      </Carousel>
    </div>
  );
};

export default Banner;
