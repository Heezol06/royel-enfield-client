import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <h3 className="text-start mt-4 banner-text">
                If you want to be happy for a day, <span className="text-danger">drink.</span>  <br />
                If you want to be happy for a year, <span className="text-danger">marry.</span> <br />
                If you want to be happy for a lifetime, <span className="text-danger"> ride a motorcycle.</span>
            </h3>
            <p className="text-white my-5">We provide bike for for life comfortable. Because naw a days traffic jam is one of the most panic things in our daily life so if you want to be comfortable your life then come and take bike from our showroom and ride bike when you out from the home.  </p>
            <button className="button align-items-center">Explore Bikes <i class="fas fa-long-arrow-alt-right"></i></button>
        </div>
    );
};

export default Banner;