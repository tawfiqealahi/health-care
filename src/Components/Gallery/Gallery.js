import Button from '@restart/ui/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import './Gallery.css';
import img1 from '../../images/landing_page_hotel_library (1).jpg';
import img2 from '../../images/landing_page_hotel_library (10).jpg';
import img3 from '../../images/landing_page_hotel_library (11).jpg';
import img4 from '../../images/landing_page_hotel_library (12).jpg';
import img5 from '../../images/landing_page_hotel_library (13).jpg';
import img6 from '../../images/landing_page_hotel_library (14).jpg';
import img7 from '../../images/landing_page_hotel_library (15).jpg';
import img8 from '../../images/landing_page_hotel_library (16).jpg';
import img9 from '../../images/landing_page_hotel_library (17).jpg';
import img10 from '../../images/landing_page_hotel_library (9).jpg';
import img11 from '../../images/landing_page_hotel_library (8).png';
import img12 from '../../images/landing_page_hotel_library (7).png';
import img13 from '../../images/landing_page_hotel_library (6).jpg';
import img14 from '../../images/landing_page_hotel_library (5).jpg';
import img15 from '../../images/landing_page_hotel_library (4).jpg';
import Footer from '../Footer/Footer';


const Gallery = () => {
    const data=[
{
    id: 1 ,
    img: img1
},
{
    id: 2 ,
    img: img2
},
{
    id: 3 ,
    img: img3
},
{
    id: 4 ,
    img: img4
},
{
    id: 5 ,
    img: img5
},
{
    id: 6 ,
    img: img6
},
{
    id: 7 ,
    img: img7
},
{
    id: 8 ,
    img: img8
},
{
    id: 9 ,
    img: img9
},
{
    id: 10,
    img: img10
},
{
    id: 11 ,
    img: img11
},
{
    id: 12 ,
    img: img12
},
{
    id: 13 ,
    img: img13
},
{
    id: 14 ,
    img: img14
},
{
    id: 15 ,
    img: img15
}


    ]
    
    return (
        <div>
             <div className="my-5">
      <div >
      <h2 className="text-center fw-bolder ">MEDICAL GALLERY</h2>
      <div className="search-box text-center">
        <input  className="p-1" type="text" placeholder="Enter course name"/>
        <Button className="p-1 ms-1 course-container" variant="danger">Search</Button>
      </div>
        </div>
        </div>

      <div className="container-fluid mb-4">
          <div className="row">
                {/* gallary images */}  
           {
               data.map((item,image)=>{
                   return(
                    <div className="gallery  col-md-4">
                       <div className="photos" key={image}>
                           <img className="w-100 h-25 m-2" src={item.img} alt="" />
                       </div>
                       </div>
                   )
               })
           }   
       </div>
          
      </div>
        </div>
    );
};

export default Gallery;