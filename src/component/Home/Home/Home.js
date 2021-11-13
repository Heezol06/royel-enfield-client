import React from 'react';
import Banner from '../Banner/Banner';
import ImproveBikes from '../ImproveBikes/ImproveBikes';
import Products from '../Products/Products';
import GetReview from './GetReview/GetReview';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ImproveBikes></ImproveBikes>
            <GetReview></GetReview>
        </div>
    );
};

export default Home;