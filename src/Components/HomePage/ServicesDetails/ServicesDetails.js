import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const ServicesDetails = () => {
    const {id}= useParams();
    useEffect(()=>{
        fetch('/services.json')
        .then((res) => res.json() )
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing {id} <br /> elit. Quae, amet? Recusandae rem quos libero <br /> possimus maiores molestiae iste consectetur esse?</h1>
        </div>
    );
};

export default ServicesDetails;