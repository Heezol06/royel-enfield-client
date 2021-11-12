import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';




const Products = () => {
    const [products, setProducts] =  useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/bikes')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className="container row my-5 " style={{marginLeft:"70px"}}>
            <h1 className="my-5">Most Recent <span className="text-danger">Enfields</span></h1>
            {
            products.slice(1,7).map(product => <Product
            key={product._id}
            product={product}
            ></Product>)
            }
        </div>
    );
};

export default Products;