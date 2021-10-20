import React from 'react';
import Footer from '../Footer/Footer';
import Banner from '../Header/Banner/Banner';
import Services from '../Services/Services';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;