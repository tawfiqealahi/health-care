import "./Services.css";
import React, { useEffect, useState } from 'react';
import {Button, Image, } from 'react-bootstrap';
import { Link } from "react-router-dom";

const AllCourseDetails = () => {
  const [courses, setCourses]= useState([]) ;
  const [searchCourse , setsearchCourse]=useState("");
  useEffect(()=>{
    fetch('./services.json'
    )
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[searchCourse]);
  
// search box handle on change
  const handleOnChange=(e)=>{
    setsearchCourse(e.target.value);
    // console.log(e.target.value);
  };
  // console.log(searchCourse);
  // console.log(teams);
  return (
    <div className="mx-5">
      <div >
      <h2 className="text-center">Our All Services</h2>
      <div className="search-box text-center">
        <input onChange={handleOnChange} className="p-1" type="text" placeholder="Enter course name"/>
        <Button className="p-1 ms-1 course-container" variant="danger">Search</Button>
      </div>
      <div className="courses">
      <div className="row">
        {
          courses.map(course=> 
          <div className="col-md-4 ">
            <div className="card mb-2">
              <div className="logo-image">
              <Image className="w-25" src={course.image} rounded />
              <h6>Subject: {course.specialist}</h6>
              <h6>Course Teacher: {course.doctor}</h6>
              {/* <p>Number of Class: {course.totalClass}</p> */}
              <p>Enroll Fee: {course.fees}</p>
              {/* dynamic routing */}
              <Link to={`/details/${course.id}`}>
              <Button variant="danger">Enroll now</Button>
              </Link>

              </div>
            </div>
          </div>)
        }
      </div>
      </div>
    </div>
    </div>
  );
}; 

export default AllCourseDetails;