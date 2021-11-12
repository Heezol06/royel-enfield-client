import React from 'react';
import Banner from '../Banner/Banner';
import ImproveBikes from '../ImproveBikes/ImproveBikes';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ImproveBikes></ImproveBikes>
        </div>
    );
};

export default Home;