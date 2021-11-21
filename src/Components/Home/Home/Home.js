import React from 'react';
import Banner from '../../Banner/Banner';
import DoctorsTeam from '../../DoctorsTeam/DoctorsTeam';
import FaqShort from '../../FaqShort/FaqShort';
import About from '../About/About';
import Products from '../Products/Products';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <DoctorsTeam></DoctorsTeam>
           <FaqShort></FaqShort>
            <About></About>

        </div>
        
    );
};

export default Home;