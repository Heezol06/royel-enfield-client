import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

const Bikes = () => {
            const [products, setProducts] =  useState([])
    useEffect(()=>{
        fetch('https://limitless-woodland-93842.herokuapp.com/bikes')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="container row my-5 " style={{marginLeft:"70px"}}>
            <h1 className="my-5">All <span className="text-danger">Enfields.</span></h1>
            {
            products.map(product => <Bike
            key={product._id}
            product={product}
            ></Bike>)
            }
        </div>
    );
};

export default Bikes;