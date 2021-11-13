import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';

const ManageAllProducts = () => { 
const [products, setProducts] = useState([])
const [deleteCount, setDeleteCount] = useState(false);



useEffect(()=>{
    fetch(`https://limitless-woodland-93842.herokuapp.com/bikes`)
    .then(res => res.json())
    .then(result => setProducts(result))
},[deleteCount])
const handleDelete = (id) =>{
    fetch(`https://limitless-woodland-93842.herokuapp.com/bikes/${id}`,{
        method: "DELETE",
        headers: {'content-type': 'application/json'},
    })
    .then(res => res.json())
    .then(result => setDeleteCount(result))
    console.log(id);
    window.confirm("Are you sure you want to delete this Products!")
    // location.reload();
}
    return (
        <div>
            <h1>Here you can manage all your order</h1>
            <Row>
                {
                    products.map(product=> <Col className="col-lg-12 border my-2 p-2 shadow ">
                        <p className="">{product.name}</p> <br />
                        <Button className="bg-danger" onClick={()=>handleDelete(product._id)}>Delete</Button>
                    </Col>)
                }
            </Row>
        </div>
    );
};

export default ManageAllProducts;