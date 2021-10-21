import React from 'react';
import './DoctorsTeam.css';
import { Card, CardGroup } from 'react-bootstrap';
import doctor1 from '../../../images/landing_page_hotel_library (5).jpg'
import doctor2 from '../../../images/landing_page_hotel_library (6).jpg'
import doctor3 from '../../../images/landing_page_hotel_library (3).jpg'

const DoctorsTeam = () => {
    return (
        <div className="doctorsteam text-center">
            <h1 className="text-center fw-bolder fs-xxl  doctor-heading mb-5">OUR DOCTORS TEAM</h1>
            <CardGroup className="container">
  <Card className="m-2">
    <Card.Img variant="top" className="doctor-img" src={doctor1} />
    <Card.Body>
      <Card.Title>Dr. Mira <small>(surgeon)</small> </Card.Title>
     
    </Card.Body>
    <Card.Footer>
     
    </Card.Footer>
  </Card>
  <Card className="m-2">
    <Card.Img variant="top" className="doctor-img" src={doctor2} />
    <Card.Body>
      <Card.Title>Dr. Tawfiq <small>(medicine)</small> </Card.Title>
      
    </Card.Body>
    <Card.Footer>
     
    </Card.Footer>
  </Card>
  <Card className="m-2">
    <Card.Img variant="top" className="doctor-img" src={doctor3} />
    <Card.Body>
      <Card.Title>Dr. Asfiya<small> (neuro)</small> </Card.Title>
     
    </Card.Body>
    <Card.Footer>
     
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
    );
};

export default DoctorsTeam;