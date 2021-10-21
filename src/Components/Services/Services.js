import "./Services.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import {Button, Image, } from 'react-bootstrap';
import { Link,  } from "react-router-dom";

const AllCourseDetails = () => {
  const [services, setServices]= useState([]) ;
  const [searchServices , setsearchServices]=useState("");
  useEffect(()=>{
    fetch('./services.json'
    )
    .then(res=>res.json())
    .then(data=>setServices(data))
  },[searchServices]);
  
// search box handle on change
  const handleOnChange=(e)=>{
    setsearchServices(e.target.value);
    // console.log(e.target.value);
  };
  // console.log(searchCourse);
  // console.log(teams);
  return (
    <div>

    
    <div className="mx-5 my-2">
     

      <div >
      <h2 className="text-center">Our All Services</h2>
      <div className="search-box text-center">
        <input onChange={handleOnChange} className="p-1" type="text" placeholder="Enter course name"/>
        <Button className="p-1 ms-1 course-container" variant="danger">Search</Button>
      </div>
      <div className="courses">
      <div className="row">
        {
          services.map(service=> 
          <div className="col-md-4 my-4 text-center">
            <div className="card mb-2">
              <div className="logo-image">
              <Image className="w-25 img" src={service.image} rounded />
              <h3 className="pt-4"> {service.heading}</h3>
              <p>{service.discription}</p>
              {/* dynamic routing */}
              <Link to={`/details/${service.id}`}>
              <Button variant="danger">View Details</Button>
              </Link>

              </div>
            </div>
          </div>)
        }
      </div>
      </div>
    </div>
    
    </div>
    </div>
  );
}; 

export default AllCourseDetails;