import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner/Banner';
import Services from '../Services/Services';
import DoctorsTeam from './DoctorsTeam/DoctorsTeam';
import FaqShort from './FaqShort/FaqShort';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <DoctorsTeam></DoctorsTeam>
                 <FaqShort></FaqShort>     
            <Footer></Footer>
        </div>
    );
};

export default HomePage;