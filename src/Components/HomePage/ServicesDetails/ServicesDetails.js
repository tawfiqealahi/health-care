import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServicesDetails = () => {
    const {id}= useParams();
    const [data, setData]=useState([]);
    useEffect(()=>{
        fetch('/services.json')
        .then((res) => res.json() )
        .then(data=>setData(data))
    },[])
    return (
        <div className="text-center">
            
            <h2>Doctor: {data[0]?.doctor}</h2>
            <h2>Specialist: {data[0]?.specialist}</h2>
            <h2>Fees: {data[0]?.price}</h2>
            <h2>available: {data[0]?.available}</h2>
                  
           
        </div>
    );
};

export default ServicesDetails;